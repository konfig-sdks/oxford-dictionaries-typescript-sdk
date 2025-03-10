/*
Oxford Dictionaries

Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.

The version of the OpenAPI document: 1.11.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExamplesListInner } from './examples-list-inner';
import { GrammaticalFeaturesListInner } from './grammatical-features-list-inner';

/**
 * Description of an entry for a particular part of speech
 * @export
 * @interface SentencesLexicalEntry
 */
export interface SentencesLexicalEntry {
    /**
     * The different forms are correlated with meanings or functions which we text as \'features\'
     * @type {Array<GrammaticalFeaturesListInner>}
     * @memberof SentencesLexicalEntry
     */
    'grammaticalFeatures'?: Array<GrammaticalFeaturesListInner>;
    /**
     * IANA language code
     * @type {string}
     * @memberof SentencesLexicalEntry
     */
    'language': string;
    /**
     * A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
     * @type {string}
     * @memberof SentencesLexicalEntry
     */
    'lexicalCategory'?: string;
    /**
     * A list of written or spoken rendering of examples of use of a word or text
     * @type {Array<ExamplesListInner>}
     * @memberof SentencesLexicalEntry
     */
    'sentences': Array<ExamplesListInner>;
    /**
     * A given written or spoken realisation of a an entry.
     * @type {string}
     * @memberof SentencesLexicalEntry
     */
    'text': string;
}

