/*
Oxford Dictionaries

Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.

The version of the OpenAPI document: 1.11.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  DictionaryEntriesApi,
  LemmatronApi,
  LexiStatsApi,
  SearchApi,
  TheSentenceDictionaryApi,
  ThesaurusApi,
  TranslationApi,
  UtilityApi,
  WordlistApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { OxfordDictionariesCustom } from "./client-custom";

export class OxfordDictionaries extends OxfordDictionariesCustom {
  readonly dictionaryEntries: DictionaryEntriesApi;
  readonly lemmatron: LemmatronApi;
  readonly lexiStats: LexiStatsApi;
  readonly search: SearchApi;
  readonly theSentenceDictionary: TheSentenceDictionaryApi;
  readonly thesaurus: ThesaurusApi;
  readonly translation: TranslationApi;
  readonly utility: UtilityApi;
  readonly wordlist: WordlistApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.dictionaryEntries = new DictionaryEntriesApi(configuration);
    this.lemmatron = new LemmatronApi(configuration);
    this.lexiStats = new LexiStatsApi(configuration);
    this.search = new SearchApi(configuration);
    this.theSentenceDictionary = new TheSentenceDictionaryApi(configuration);
    this.thesaurus = new ThesaurusApi(configuration);
    this.translation = new TranslationApi(configuration);
    this.utility = new UtilityApi(configuration);
    this.wordlist = new WordlistApi(configuration);
  }

}
