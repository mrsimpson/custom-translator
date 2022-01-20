import React from 'react';
import { LANG_EN } from '../../constants/langCode';
import { getMessage } from '../../public/i18n';
import { resultToString } from '../../public/utils';
import { TranslateRequest } from '../../types';
import ErrorMessage from '../ErrorMessage';
import IconFont from '../IconFont';
import ListenButton from '../ListenButton';
import './style.css';

type TranslateResultProps = {
    translateRequest: TranslateRequest;
    source: string;
    retry?: () => void;
    insertResult?: (result: string) => void;
    setText?: (text: string) => void;
} & Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className'>;

const TranslateResult: React.FC<TranslateResultProps> = ({ translateRequest, source, style, className, retry, insertResult, setText }) => {
    return (
        <div className={`translate-result${className ? ' ' + className : ''}`} style={style}>
            {translateRequest.status === 'loading' ?
                <TranslateResultSkeleton /> :
            translateRequest.status === 'init' ?
                getMessage('contentTranslateAfterInput') :
            translateRequest.status === 'error' ?
                <ErrorMessage errorCode={translateRequest.errorCode} retry={retry} /> :
            <>
                {translateRequest.result.phonetic && translateRequest.result.from === LANG_EN && <div className='translate-result__item-stack'>
                    {translateRequest.result.phonetic}
                </div>}
                <div className='translate-result__item-stack'>
                    <span>
                        {resultToString(translateRequest.result.result)}
                        {insertResult && <IconFont
                            className='iconbutton button'
                            iconName='#icon-insert'
                            onClick={() => insertResult(resultToString(translateRequest.result.result))}
                        />}
                        <IconFont
                            className='iconbutton button'
                            iconName='#icon-copy'
                            onClick={() => navigator.clipboard.writeText(resultToString(translateRequest.result.result))}
                        />
                        <ListenButton
                            text={resultToString(translateRequest.result.result)}
                            source={source}
                            from={translateRequest.result.to}
                        />
                    </span>
                </div>
                {translateRequest.result.dict && translateRequest.result.dict.length > 0 && <div className='translate-result__item-stack'>
                    {translateRequest.result.dict.map((v, i) => (
                        <div key={i}>{v}</div>
                    ))}
                </div>}
                {translateRequest.result.related && translateRequest.result.from === LANG_EN && <div className='translate-result__item-stack'>
                    {getMessage('wordRelated')}: {translateRequest.result.related.map((v, i) => (<span key={`${v}${i}`}>
                        {i !== 0 && ', '}<span className={setText && 'span-link'} onClick={() => setText?.(v)}>{v}</span>
                    </span>))}
                </div>}
                {translateRequest.result.example && translateRequest.result.example.length > 0 && <div className='translate-result__item-stack'>
                    {translateRequest.result.example.map((v, i) => (
                        <div key={i}>
                            <IconFont
                                iconName='#icon-quote'
                                style={{cursor: 'default', marginLeft: '0', marginRight: '5px'}}
                            />
                            {v.split(/<\/?b>/).map((v1, i1) => (i1 % 2 === 0 ? v1 : <b key={i1}>{v1}</b>))}
                        </div>
                    ))}
                </div>}
            </>}
        </div>
    );
};

const TranslateResultSkeleton: React.FC = () => (<div className='skeleton' style={{height: '1.25em', width: '65%'}}></div>);

export default TranslateResult;