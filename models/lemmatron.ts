/*
Oxford Dictionaries

Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.

The version of the OpenAPI document: 1.11.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { HeadwordLemmatron } from './headword-lemmatron';

/**
 * Schema for the inflections endpoint.
 * @export
 * @interface Lemmatron
 */
export interface Lemmatron {
    /**
     * Additional Information provided by OUP
     * @type {object}
     * @memberof Lemmatron
     */
    'metadata'?: object;
    /**
     * A list of inflections matching a given word
     * @type {Array<HeadwordLemmatron>}
     * @memberof Lemmatron
     */
    'results'?: Array<HeadwordLemmatron>;
}

