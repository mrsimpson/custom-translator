import React, { Fragment } from 'react';
import IconFont from '../IconFont';
import { getI18nMessage } from '../../public/chrome-call';
import { LANG_EN } from '../../constants/langCode';
import { resultToString } from '../../public/utils';
import './style.css';

const TsResult = ({ resultObj, status, readText, source, retry }) => {
    const { text, result, dict, phonetic, from, to } = resultObj;
    const { requestEnd, requesting, error, errorCode } = status;
    
    return (
        <div className='ts-result'>
            {requesting ?
                getI18nMessage('wordRequesting') :
            !requestEnd ?
                getI18nMessage('contentTranslateAfterInput'):
            error ?
                <>{getI18nMessage(`errorCode_${errorCode}`)}<span className='ts-button ts-retry' onClick={retry}>{getI18nMessage('wordRetry')}</span></> :
            <Fragment>
                <div className='tss-result'>
                    <span>
                        {resultToString(result)}
                    </span>
                    <IconFont
                        iconName='#icon-GoUnmute'
                        onClick={() => readText(
                            resultToString(result),
                            { source, from: to }
                        )}
                    />
                </div>
                {dict && dict.map((v, i) => (<div key={i}>{v}</div>))}
                <div className='tss-origin-text'>
                    <span className='tss-origin-raw'>{text}</span>
                    <IconFont
                        iconName='#icon-GoUnmute'
                        onClick={() => readText(
                            text,
                            { source, from }
                        )}
                    />
                </div>
                {phonetic && from === LANG_EN && <div className='tss-phonetic'>
                    {`[${phonetic}]`}
                </div>}
            </Fragment>}
        </div>
    )
};

export default TsResult;