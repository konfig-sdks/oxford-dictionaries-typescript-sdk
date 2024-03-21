/* tslint:disable */
/* eslint-disable */
/*
Oxford Dictionaries

Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.

The version of the OpenAPI document: 1.11.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { RetrieveEntry } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TranslationApi - axios parameter creator
 * @export
 */
export const TranslationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *  Use this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.    <div id=\"translation\"></div> 
         * @summary Retrieve translation for a given word
         * @param {'en' | 'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'de' | 'pt'} sourceTranslationLanguage IANA language code
         * @param {string} wordId The source word
         * @param {'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ro' | 'de' | 'pt'} targetTranslationLanguage IANA language code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWordTranslation: async (sourceTranslationLanguage: 'en' | 'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'de' | 'pt', wordId: string, targetTranslationLanguage: 'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ro' | 'de' | 'pt', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sourceTranslationLanguage' is not null or undefined
            assertParamExists('getWordTranslation', 'sourceTranslationLanguage', sourceTranslationLanguage)
            // verify required parameter 'wordId' is not null or undefined
            assertParamExists('getWordTranslation', 'wordId', wordId)
            // verify required parameter 'targetTranslationLanguage' is not null or undefined
            assertParamExists('getWordTranslation', 'targetTranslationLanguage', targetTranslationLanguage)
            const localVarPath = `/entries/{source_translation_language}/{word_id}/translations={target_translation_language}`
                .replace(`{${"source_translation_language"}}`, encodeURIComponent(String(sourceTranslationLanguage !== undefined ? sourceTranslationLanguage : `-source_translation_language-`)))
                .replace(`{${"word_id"}}`, encodeURIComponent(String(wordId !== undefined ? wordId : `-word_id-`)))
                .replace(`{${"target_translation_language"}}`, encodeURIComponent(String(targetTranslationLanguage !== undefined ? targetTranslationLanguage : `-target_translation_language-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication appId required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "app_id", keyParamName: "appId", configuration })
            // authentication appKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "app_key", keyParamName: "appKey", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/entries/{source_translation_language}/{word_id}/translations={target_translation_language}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TranslationApi - functional programming interface
 * @export
 */
export const TranslationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TranslationApiAxiosParamCreator(configuration)
    return {
        /**
         *  Use this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.    <div id=\"translation\"></div> 
         * @summary Retrieve translation for a given word
         * @param {TranslationApiGetWordTranslationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWordTranslation(requestParameters: TranslationApiGetWordTranslationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWordTranslation(requestParameters.sourceTranslationLanguage, requestParameters.wordId, requestParameters.targetTranslationLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TranslationApi - factory interface
 * @export
 */
export const TranslationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TranslationApiFp(configuration)
    return {
        /**
         *  Use this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.    <div id=\"translation\"></div> 
         * @summary Retrieve translation for a given word
         * @param {TranslationApiGetWordTranslationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWordTranslation(requestParameters: TranslationApiGetWordTranslationRequest, options?: AxiosRequestConfig): AxiosPromise<RetrieveEntry> {
            return localVarFp.getWordTranslation(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getWordTranslation operation in TranslationApi.
 * @export
 * @interface TranslationApiGetWordTranslationRequest
 */
export type TranslationApiGetWordTranslationRequest = {
    
    /**
    * IANA language code
    * @type {'en' | 'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'de' | 'pt'}
    * @memberof TranslationApiGetWordTranslation
    */
    readonly sourceTranslationLanguage: 'en' | 'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'de' | 'pt'
    
    /**
    * The source word
    * @type {string}
    * @memberof TranslationApiGetWordTranslation
    */
    readonly wordId: string
    
    /**
    * IANA language code
    * @type {'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ro' | 'de' | 'pt'}
    * @memberof TranslationApiGetWordTranslation
    */
    readonly targetTranslationLanguage: 'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ro' | 'de' | 'pt'
    
}

/**
 * TranslationApiGenerated - object-oriented interface
 * @export
 * @class TranslationApiGenerated
 * @extends {BaseAPI}
 */
export class TranslationApiGenerated extends BaseAPI {
    /**
     *  Use this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.    <div id=\"translation\"></div> 
     * @summary Retrieve translation for a given word
     * @param {TranslationApiGetWordTranslationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TranslationApiGenerated
     */
    public getWordTranslation(requestParameters: TranslationApiGetWordTranslationRequest, options?: AxiosRequestConfig) {
        return TranslationApiFp(this.configuration).getWordTranslation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
