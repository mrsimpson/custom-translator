import * as types from '../../constants/chromeSendMessageTypes';
import { translate, audio, detect } from '../../public/request';
import { createSeparateWindow } from './separate-window';
import { DefaultOptions } from '../../types';
import { getLocalStorageAsync } from '../../public/utils';
import { syncSettingsToOtherBrowsers } from './sync';
import scIndexedDB, { DB_STORE_COLLECTION, StoreCollectionValue } from '../../public/sc-indexed-db';
import { ChromeRuntimeMessage } from '../../public/send';

type TranslatePickedOptions = Pick<DefaultOptions, 'useDotCn' | 'preferredLanguage' | 'secondPreferredLanguage'>;
const translatePickedKeys: (keyof TranslatePickedOptions)[] = ['useDotCn', 'preferredLanguage', 'secondPreferredLanguage'];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { type, payload } = request;
    switch (type) {
        case types.SCTS_TRANSLATE:
            getLocalStorageAsync<TranslatePickedOptions>(translatePickedKeys).then((data) => {
                payload.requestObj.com = !data.useDotCn;
                payload.requestObj.preferredLanguage = data.preferredLanguage;
                payload.requestObj.secondPreferredLanguage = data.secondPreferredLanguage;

                translate(payload, (result) => {
                    sendResponse(result);
                });
            });

            return true;
        case types.SCTS_AUDIO:
            getLocalStorageAsync<Pick<DefaultOptions, 'useDotCn'>>(['useDotCn']).then((data) => {
                payload.com = !data.useDotCn;

                audio(payload, (result) => {
                    sendResponse(result);
                });
            });

            return true;
        case types.SCTS_DETECT:
            getLocalStorageAsync<Pick<DefaultOptions, 'useDotCn'>>(['useDotCn']).then((data) => {
                payload.com = !data.useDotCn;

                detect(payload, (result) => {
                    sendResponse(result);
                });
            });

            return true;
        case types.SCTS_SEND_TEXT_TO_SEPARATE_WINDOW:
            payload?.text && createSeparateWindow(payload.text);

            sendResponse();

            return true;
        case types.SCTS_SYNC_SETTINGS_TO_OTHER_BROWSERS:
            syncSettingsToOtherBrowsers();

            sendResponse();

            return true;
        default: break;
    }
});

// Will be combined with the message listener above.
chrome.runtime.onMessage.addListener((message: ChromeRuntimeMessage, sender, sendResponse) => {
    switch (message.type) {
        case types.SCTS_IS_COLLECTED: {
            let { text } = message.payload;

            text = text.trimLeft().trimRight();

            if (text) {
                scIndexedDB.get<StoreCollectionValue>(DB_STORE_COLLECTION, text)
                    .then(value => sendResponse({ text: message.payload.text, isCollected: !!value }))
                    .catch(() => sendResponse({ code: '' }));
            }
            else {
                sendResponse({ code: 'EMPTY_TEXT' });
            }

            return true;
        }
        case types.SCTS_ADD_TO_COLLECTION: {
            let { text, translations } = message.payload;

            text = text.trimLeft().trimRight();

            text && scIndexedDB.add<StoreCollectionValue>(DB_STORE_COLLECTION, { text, date: Number(new Date()), translations });

            sendResponse();

            return true;
        }
        case types.SCTS_REMOVE_FROM_COLLECTION: {
            let { text } = message.payload;

            text = text.trimLeft().trimRight();

            text && scIndexedDB.delete(DB_STORE_COLLECTION, text);

            sendResponse();

            return true;
        }
        default: return;
    }
});