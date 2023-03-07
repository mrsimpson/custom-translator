import { CustomTranslateSource } from '../types';

const CORPORATE_SOURCE_ID = 'Corporate';
const CORPORATE_TRANSLATE_SOURCE: CustomTranslateSource = {
    name: 'Corporate Translate',
    source: CORPORATE_SOURCE_ID,
    url: 'http://localhost:3000/translate-text'
};
const CORPORATE_WEBPAGE_SOURCE_ID = 'Corporate page';
const CORPORATE_WEBPAGE_TRANSLATE_SOURCE: CustomTranslateSource = {
    name: 'Corporate Translate',
    source: CORPORATE_WEBPAGE_SOURCE_ID,
    url: 'http://localhost:3000/translate-webpage'
};

export const getCorporateSource = () => CORPORATE_TRANSLATE_SOURCE;
export const getCorporateSourceId = () => CORPORATE_SOURCE_ID;
export const getCorporateWebpageSource = () => CORPORATE_WEBPAGE_TRANSLATE_SOURCE;
export const getCorporateWebpageSourceId = () => CORPORATE_WEBPAGE_SOURCE_ID;