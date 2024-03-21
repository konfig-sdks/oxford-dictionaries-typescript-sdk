/*
Oxford Dictionaries

Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.

The version of the OpenAPI document: 1.11.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A grouping of pronunciation information
 * @export
 * @interface PronunciationsListInner
 */
export interface PronunciationsListInner {
    /**
     * The URL of the sound file
     * @type {string}
     * @memberof PronunciationsListInner
     */
    'audioFile'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PronunciationsListInner
     */
    'dialects'?: Array<string>;
    /**
     * The alphabetic system used to display the phonetic spelling
     * @type {string}
     * @memberof PronunciationsListInner
     */
    'phoneticNotation'?: string;
    /**
     * Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound
     * @type {string}
     * @memberof PronunciationsListInner
     */
    'phoneticSpelling'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PronunciationsListInner
     */
    'regions'?: Array<string>;
}

