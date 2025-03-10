/*
Oxford Dictionaries

Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.

The version of the OpenAPI document: 1.11.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CategorizedTextListInner } from './categorized-text-list-inner';
import { CrossReferencesListInner } from './cross-references-list-inner';
import { ExamplesListInner } from './examples-list-inner';
import { PronunciationsListInner } from './pronunciations-list-inner';
import { ThesaurusLink } from './thesaurus-link';
import { TranslationsListInner } from './translations-list-inner';
import { VariantFormsListInner } from './variant-forms-list-inner';

/**
 * A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element
 * @export
 * @interface Sense
 */
export interface Sense {
    /**
     * 
     * @type {Array<string>}
     * @memberof Sense
     */
    'crossReferenceMarkers'?: Array<string>;
    /**
     * A reference to another word that is closely related, might provide additional information about the subject, has a variant spelling or is an abbreviated form of it.
     * @type {Array<CrossReferencesListInner>}
     * @memberof Sense
     */
    'crossReferences'?: Array<CrossReferencesListInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Sense
     */
    'definitions'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Sense
     */
    'domains'?: Array<string>;
    /**
     * A list of written or spoken rendering of examples of use of a word or text
     * @type {Array<ExamplesListInner>}
     * @memberof Sense
     */
    'examples'?: Array<ExamplesListInner>;
    /**
     * The id of the sense that is required for the delete procedure
     * @type {string}
     * @memberof Sense
     */
    'id'?: string;
    /**
     * various types of notes that appear
     * @type {Array<CategorizedTextListInner>}
     * @memberof Sense
     */
    'notes'?: Array<CategorizedTextListInner>;
    /**
     * A list of possible pronunciations of a word
     * @type {Array<PronunciationsListInner>}
     * @memberof Sense
     */
    'pronunciations'?: Array<PronunciationsListInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Sense
     */
    'regions'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Sense
     */
    'registers'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Sense
     */
    'short_definitions'?: Array<string>;
    /**
     * Ordered list of subsenses of a sense
     * @type {Array<Sense>}
     * @memberof Sense
     */
    'subsenses'?: Array<Sense>;
    /**
     * Ordered list of links to the Thesaurus Dictionary
     * @type {Array<ThesaurusLink>}
     * @memberof Sense
     */
    'thesaurusLinks'?: Array<ThesaurusLink>;
    /**
     * A list of written or spoken rendering of the meaning of a word or text in another language(s)
     * @type {Array<TranslationsListInner>}
     * @memberof Sense
     */
    'translations'?: Array<TranslationsListInner>;
    /**
     * Various words that are used interchangeably depending on the context, e.g \'aluminium\' and \'aluminum\'
     * @type {Array<VariantFormsListInner>}
     * @memberof Sense
     */
    'variantForms'?: Array<VariantFormsListInner>;
}

