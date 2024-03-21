/*
Oxford Dictionaries

Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.

The version of the OpenAPI document: 1.11.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Statistical information about a word
 * @export
 * @interface StatsWordResultListResultsInner
 */
export interface StatsWordResultListResultsInner {
    [key: string]: any;

    /**
     * The number of times a word appears in the entire corpus
     * @type {number}
     * @memberof StatsWordResultListResultsInner
     */
    'frequency': number;
    /**
     * A lemma of the word.
     * @type {string}
     * @memberof StatsWordResultListResultsInner
     */
    'lemma': string;
    /**
     * A lexical category such as \'verb\' or \'noun\'
     * @type {string}
     * @memberof StatsWordResultListResultsInner
     */
    'lexicalCategory': string;
    /**
     * The number of times a word appears on average in 1 million words
     * @type {number}
     * @memberof StatsWordResultListResultsInner
     */
    'normalizedFrequency': number;
    /**
     * A given written realisation of a an entry (e.g., \"lay\") usually lower case
     * @type {string}
     * @memberof StatsWordResultListResultsInner
     */
    'trueCase': string;
    /**
     * A given written realisation of a an entry (e.g., \"lay\") preserving case
     * @type {string}
     * @memberof StatsWordResultListResultsInner
     */
    'wordform': string;
}

