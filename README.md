<div align="left">

[![Visit Oxford dictionaries](./header.png)](https://developer.oxforddictionaries.com)

# [Oxford dictionaries](https://developer.oxforddictionaries.com)<a id="oxford-dictionaries"></a>

Oxford Dictionaries, part of the Oxford Language Division, is a leading authority on the English language. It offers a wide range of language resources, including dictionaries, thesauruses, grammar guides, and language learning tools. Oxford Dictionaries provides accurate and up-to-date definitions, word origins, and usage examples to support language comprehension and communication.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`oxforddictionaries.dictionaryEntries.applyFilters`](#oxforddictionariesdictionaryentriesapplyfilters)
  * [`oxforddictionaries.dictionaryEntries.getInformation`](#oxforddictionariesdictionaryentriesgetinformation)
  * [`oxforddictionaries.dictionaryEntries.specifyDictionaryRegion`](#oxforddictionariesdictionaryentriesspecifydictionaryregion)
  * [`oxforddictionaries.lemmatron.checkAndRetrieveRootForm`](#oxforddictionarieslemmatroncheckandretrieverootform)
  * [`oxforddictionaries.lexiStats.getNgramFrequencies`](#oxforddictionarieslexistatsgetngramfrequencies)
  * [`oxforddictionaries.lexiStats.getWordFrequencies`](#oxforddictionarieslexistatsgetwordfrequencies)
  * [`oxforddictionaries.lexiStats.getWordFrequency`](#oxforddictionarieslexistatsgetwordfrequency)
  * [`oxforddictionaries.search.getMatches`](#oxforddictionariessearchgetmatches)
  * [`oxforddictionaries.search.possibleTranslations`](#oxforddictionariessearchpossibletranslations)
  * [`oxforddictionaries.theSentenceDictionary.getCorpusSentences`](#oxforddictionariesthesentencedictionarygetcorpussentences)
  * [`oxforddictionaries.thesaurus.getAntonyms`](#oxforddictionariesthesaurusgetantonyms)
  * [`oxforddictionaries.thesaurus.getSimilarWords`](#oxforddictionariesthesaurusgetsimilarwords)
  * [`oxforddictionaries.thesaurus.getSynonymsAntonyms`](#oxforddictionariesthesaurusgetsynonymsantonyms)
  * [`oxforddictionaries.translation.getWordTranslation`](#oxforddictionariestranslationgetwordtranslation)
  * [`oxforddictionaries.utility.getGrammaticalFeatures`](#oxforddictionariesutilitygetgrammaticalfeatures)
  * [`oxforddictionaries.utility.getLexicalCategories`](#oxforddictionariesutilitygetlexicalcategories)
  * [`oxforddictionaries.utility.listAvailableDomains`](#oxforddictionariesutilitylistavailabledomains)
  * [`oxforddictionaries.utility.listAvailableFilters`](#oxforddictionariesutilitylistavailablefilters)
  * [`oxforddictionaries.utility.listAvailableLanguages`](#oxforddictionariesutilitylistavailablelanguages)
  * [`oxforddictionaries.utility.listBilingualRegisters`](#oxforddictionariesutilitylistbilingualregisters)
  * [`oxforddictionaries.utility.listEndpointFilters`](#oxforddictionariesutilitylistendpointfilters)
  * [`oxforddictionaries.utility.listMonolingualDomains`](#oxforddictionariesutilitylistmonolingualdomains)
  * [`oxforddictionaries.utility.listMonolingualRegions`](#oxforddictionariesutilitylistmonolingualregions)
  * [`oxforddictionaries.utility.listMonolingualRegisters`](#oxforddictionariesutilitylistmonolingualregisters)
  * [`oxforddictionaries.wordlist.getAdvancedWords`](#oxforddictionarieswordlistgetadvancedwords)
  * [`oxforddictionaries.wordlist.getCategoryWords`](#oxforddictionarieswordlistgetcategorywords)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Oxford%20Dictionaries&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { OxfordDictionaries } from "oxford-dictionaries-typescript-sdk";

const oxforddictionaries = new OxfordDictionaries({
  // Defining the base path is optional and defaults to https://od-api-demo.oxforddictionaries.com:443/api/v1
  // basePath: "https://od-api-demo.oxforddictionaries.com:443/api/v1",
  appId: "API_KEY",
  appKey: "API_KEY",
});

const applyFiltersResponse =
  await oxforddictionaries.dictionaryEntries.applyFilters({
    sourceLang: "en",
    wordId: "ace",
    filters: ["grammaticalFeatures=singular,past;lexicalCategory=noun"],
  });

console.log(applyFiltersResponse);
```

## Reference<a id="reference"></a>


### `oxforddictionaries.dictionaryEntries.applyFilters`<a id="oxforddictionariesdictionaryentriesapplyfilters"></a>


Use filters to limit the [entry](documentation/glossary?term=entry) information that is returned. For example, you may only require definitions and not everything else, or just [pronunciations](documentation/glossary?term=pronunciation). The full list of filters can be retrieved from the filters Utility endpoint. You can also specify values within the filter using '='. For example 'grammaticalFeatures=singular'. Filters can also be combined using a semicolon.

  <div id="dictionary_entries_filters"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const applyFiltersResponse =
  await oxforddictionaries.dictionaryEntries.applyFilters({
    sourceLang: "en",
    wordId: "ace",
    filters: ["grammaticalFeatures=singular,past;lexicalCategory=noun"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en' | 'es' | 'lv' | 'hi' | 'sw' | 'ta' | 'gu' | 'fr'`<a id="sourcelang-en--es--lv--hi--sw--ta--gu--fr"></a>

IANA language code

##### wordId: `string`<a id="wordid-string"></a>

An Entry identifier. Case-sensitive.

##### filters: `string`[]<a id="filters-string"></a>

Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.

#### 🔄 Return<a id="🔄-return"></a>

[RetrieveEntry](./models/retrieve-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/entries/{source_lang}/{word_id}/{filters}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.dictionaryEntries.getInformation`<a id="oxforddictionariesdictionaryentriesgetinformation"></a>


Use this to retrieve definitions, [pronunciations](documentation/glossary?term=pronunciation), example sentences, [grammatical information](documentation/glossary?term=grammaticalfeatures) and [word origins](documentation/glossary?term=etymology). It only works for dictionary [headwords](documentation/glossary?term=headword), so you may need to use the [Lemmatron](documentation/glossary?term=lemma) first if your input is likely to be an [inflected](documentation/glossary?term=inflection) form (e.g., 'swimming'). This would return the linked [headword](documentation/glossary?term=headword) (e.g., 'swim') which you can then use in the Entries endpoint. Unless specified using a region filter, the default lookup will be the Oxford Dictionary of English (GB). 
  <div id="dictionary_entries"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse =
  await oxforddictionaries.dictionaryEntries.getInformation({
    sourceLang: "en",
    wordId: "ace",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en' | 'es' | 'lv' | 'hi' | 'sw' | 'ta' | 'gu' | 'fr'`<a id="sourcelang-en--es--lv--hi--sw--ta--gu--fr"></a>

IANA language code

##### wordId: `string`<a id="wordid-string"></a>

An Entry identifier. Case-sensitive.

#### 🔄 Return<a id="🔄-return"></a>

[RetrieveEntry](./models/retrieve-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/entries/{source_lang}/{word_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.dictionaryEntries.specifyDictionaryRegion`<a id="oxforddictionariesdictionaryentriesspecifydictionaryregion"></a>


USe this filter to restrict the lookup to either our Oxford Dictionary of English (GB) or New Oxford American Dictionary (US).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const specifyDictionaryRegionResponse =
  await oxforddictionaries.dictionaryEntries.specifyDictionaryRegion({
    sourceLang: "en",
    wordId: "ace",
    region: "gb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en'`<a id="sourcelang-en"></a>

IANA language code

##### wordId: `string`<a id="wordid-string"></a>

An Entry identifier. Case-sensitive.

##### region: `'gb' | 'us'`<a id="region-gb--us"></a>

Region filter parameter. gb = Oxford Dictionary of English. us = New Oxford American Dictionary.

#### 🔄 Return<a id="🔄-return"></a>

[RetrieveEntry](./models/retrieve-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/entries/{source_lang}/{word_id}/regions&#x3D;{region}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.lemmatron.checkAndRetrieveRootForm`<a id="oxforddictionarieslemmatroncheckandretrieverootform"></a>


Use this to check if a word exists in the dictionary, or what 'root' form it links to (e.g., swimming > swim). The response tells you the possible [lemmas](documentation/glossary?term=lemma) for a given [inflected](documentation/glossary?term=inflection) word. This can then be combined with other endpoints to retrieve more information.

  <div id="lemmatron"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkAndRetrieveRootFormResponse =
  await oxforddictionaries.lemmatron.checkAndRetrieveRootForm({
    sourceLang: "en",
    filters: ["grammaticalFeatures=singular,past;lexicalCategory=noun"],
    wordId: "swimming",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en' | 'es' | 'hi' | 'nso' | 'tn' | 'zu' | 'de' | 'pt'`<a id="sourcelang-en--es--hi--nso--tn--zu--de--pt"></a>

IANA language code

##### filters: `string`[]<a id="filters-string"></a>

Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.

##### wordId: `string`<a id="wordid-string"></a>

The input word

#### 🔄 Return<a id="🔄-return"></a>

[Lemmatron](./models/lemmatron.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/inflections/{source_lang}/{word_id}/{filters}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.lexiStats.getNgramFrequencies`<a id="oxforddictionarieslexistatsgetngramfrequencies"></a>

This endpoint returns frequencies of ngrams of size 1-4. That is the number of times a word (ngram size = 1) or words (ngram size > 1) appear in the corpus. Ngrams are case sensitive ("I AM" and "I am" will have different frequency) and frequencies are calculated per word (true case) so "the book" and "the books" are two different ngrams. The results can be filtered based on query parameters. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> Example for bigrams (ngram of size 2):
* PATH: /tokens=a word,another word
* GET: /?tokens=a word&tokens=another word
* POST (json):

  ```javascript
    {
        "tokens": ["a word", "another word"]
    }
  ```

Either "tokens" or "contains" has to be provided. <br> <br> Some queries with "contains" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python's `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:
```python def get_all_results(url):
    while url:
        r = requests.get(url)
        r.raise_for_status()
        for item in r.json()['results']:
          yield item
        url = r.links.get('next', {}).get('url')
```


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNgramFrequenciesResponse =
  await oxforddictionaries.lexiStats.getNgramFrequencies({
    sourceLang: "en",
    corpus: "nmc",
    ngramSize: "2",
    tokens: "a word",
    format: "oup",
    offset: 0,
    limit: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `string`<a id="sourcelang-string"></a>

IANA language code

##### corpus: `string`<a id="corpus-string"></a>

For corpora other than \'nmc\' (New Monitor Corpus) please contact api@oxforddictionaries.com

##### ngramSize: `string`<a id="ngramsize-string"></a>

the size of ngrams requested (1-4)

##### tokens: `string`<a id="tokens-string"></a>

List of tokens to filter. The tokens are separated by spaces, the list items are separated by comma (e.g., for bigrams (n=2) tokens=this is,this was, this will)

##### contains: `string`<a id="contains-string"></a>

Find ngrams containing the given token(s). Use comma or space as token separators; the order of tokens is irrelevant.

##### punctuation: `string`<a id="punctuation-string"></a>

Flag specifying whether to lookup ngrams that include punctuation or not (possible values are \"true\" and \"false\"; default is \"false\")

##### format: `string`<a id="format-string"></a>

Option specifying whether tokens should be returned as a single string (option \"google\") or as a list of strings (option \"oup\")

##### minFrequency: `number`<a id="minfrequency-number"></a>

Restrict the query to entries with frequency of at least `minFrequency`

##### maxFrequency: `number`<a id="maxfrequency-number"></a>

Restrict the query to entries with frequency of at most `maxFrequency`

##### minDocumentFrequency: `number`<a id="mindocumentfrequency-number"></a>

Restrict the query to entries that appear in at least `minDocumentFrequency` documents

##### maxDocumentFrequency: `number`<a id="maxdocumentfrequency-number"></a>

Restrict the query to entries that appera in at most `maxDocumentFrequency` documents

##### collate: `string`<a id="collate-string"></a>

collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).

##### sort: `string`<a id="sort-string"></a>

sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign (\'-\'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)

##### offset: `number`<a id="offset-number"></a>

pagination - results offset

##### limit: `number`<a id="limit-number"></a>

pagination - results limit

#### 🔄 Return<a id="🔄-return"></a>

[NgramsResult](./models/ngrams-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/frequency/ngrams/{source_lang}/{corpus}/{ngram-size}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.lexiStats.getWordFrequencies`<a id="oxforddictionarieslexistatsgetwordfrequencies"></a>

This endpoint provides a list of frequencies for a given word or words. Unlike the /word/ endpoint, the results are split into the smallest units. <br> <br> To exclude a specific value, prepend it with the minus sign ('-'). For example, to get frequencies of the lemma 'happy' but exclude superlative forms (i.e., happiest) you could use options 'lemma=happy;grammaticalFeatures=-degreeType:superlative'. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> The parameters wordform/trueCase/lemma/lexicalCategory also exist in a plural form, taking a lists of items. Examples:
* PATH: /wordforms=happy,happier,happiest
* GET: /?wordforms=happy&wordforms=happier&wordforms=happiest
* POST (json):
```javascript
  {
    "wordforms": ["happy", "happier", "happiest"]
  }
```
A mor complex example of retrieving frequencies of multiple lemmas:
```
  {
      "lemmas": ["happy", "content", "cheerful", "cheery", "merry", "joyful", "ecstatic"],
      "grammaticalFeatures": {
          "adjectiveFunctionType": "predicative"
      },
      "lexicalCategory": "adjective",
      "sort": ["lemma", "-frequency"]
  }
```
Some queries with "collate" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python's `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:
```python def get_all_results(url):
    while url:
        r = requests.get(url)
        r.raise_for_status()
        for item in r.json()['results']:
          yield item
        url = r.links.get('next', {}).get('url')
```


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWordFrequenciesResponse =
  await oxforddictionaries.lexiStats.getWordFrequencies({
    sourceLang: "en",
    corpus: "nmc",
    lemma: "test",
    offset: 0,
    limit: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `string`<a id="sourcelang-string"></a>

IANA language code

##### corpus: `string`<a id="corpus-string"></a>

For corpora other than \'nmc\' (New Monitor Corpus) please contact api@oxforddictionaries.com

##### wordform: `string`<a id="wordform-string"></a>

The written form of the word to look up (preserving case e.g., Book vs book)

##### trueCase: `string`<a id="truecase-string"></a>

The written form of the word to look up with normalised case (Books --> books)

##### lemma: `string`<a id="lemma-string"></a>

The lemma of the word to look up (e.g., Book, booked, books all have the lemma \"book\")

##### lexicalCategory: `string`<a id="lexicalcategory-string"></a>

The lexical category of the word(s) to look up (e.g., adjective or noun)

##### grammaticalFeatures: `string`<a id="grammaticalfeatures-string"></a>

The grammatical features of the word(s) to look up entered as a list of k:v (e.g., degree_type:comparative)

##### sort: `string`<a id="sort-string"></a>

sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign (\'-\'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)

##### collate: `string`<a id="collate-string"></a>

collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).

##### minFrequency: `number`<a id="minfrequency-number"></a>

Restrict the query to entries with frequency of at least `minFrequency`

##### maxFrequency: `number`<a id="maxfrequency-number"></a>

Restrict the query to entries with frequency of at most `maxFrequency`

##### minNormalizedFrequency: `number`<a id="minnormalizedfrequency-number"></a>

Restrict the query to entries with frequency of at least `minNormalizedFrequency`

##### maxNormalizedFrequency: `number`<a id="maxnormalizedfrequency-number"></a>

Restrict the query to entries with frequency of at most `maxNormalizedFrequency`

##### offset: `number`<a id="offset-number"></a>

pagination - results offset

##### limit: `number`<a id="limit-number"></a>

pagination - results limit

#### 🔄 Return<a id="🔄-return"></a>

[StatsWordResultList](./models/stats-word-result-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/frequency/words/{source_lang}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.lexiStats.getWordFrequency`<a id="oxforddictionarieslexistatsgetwordfrequency"></a>

This endpoint provides the frequency of a given word. When multiple database records match the query parameters, the returned frequency is the sum of the individual frequencies. For example, if the query parameters are lemma=test, the returned frequency will include the verb "test", the noun "test" and the adjective "test" in all forms (Test, tested, testing, etc.) <br> <br> If you are interested in the frequency of the word "test" but want to exclude other forms (e.g., tested) use the option trueCase=test. Normally, the word "test" will be spelt with a capital letter at the beginning of a sentence. The option trueCase will ignore this and it will count "Test" and "test" as the same token. If you are interested in frequencies of "Test" and "test", use the option wordform=test or wordform=Test. Note that trueCase is not just a lower case of the word as some words are genuinely spelt with a capital letter such as the word "press" in Oxford University Press. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overriden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). Examples:
* PATH: /lemma=test;lexicalCategory=noun
* GET: /?lemma=test&lexicalCategory=noun
* POST (json):

  ```javascript
    {
      "lemma": "test",
      "lexicalCategory": "noun"
    }
  ```

<br> One of the options wordform/trueCase/lemma/lexicalCategory has to be provided.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWordFrequencyResponse =
  await oxforddictionaries.lexiStats.getWordFrequency({
    sourceLang: "en",
    corpus: "nmc",
    lemma: "test",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `string`<a id="sourcelang-string"></a>

IANA language code

##### corpus: `string`<a id="corpus-string"></a>

For corpora other than \'nmc\' (New Monitor Corpus) please contact api@oxforddictionaries.com

##### wordform: `string`<a id="wordform-string"></a>

The written form of the word to look up (preserving case e.g., Books vs books)

##### trueCase: `string`<a id="truecase-string"></a>

The written form of the word to look up with normalised case (Books --> books)

##### lemma: `string`<a id="lemma-string"></a>

The lemma of the word to look up (e.g., Book, booked, books all have the lemma \"book\")

##### lexicalCategory: `string`<a id="lexicalcategory-string"></a>

The lexical category of the word(s) to look up (e.g., noun or verb)

#### 🔄 Return<a id="🔄-return"></a>

[StatsWordResult](./models/stats-word-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/stats/frequency/word/{source_lang}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.search.getMatches`<a id="oxforddictionariessearchgetmatches"></a>


Use this to retrieve possible [headword](documentation/glossary?term=headword) matches for a given string of text. The results are culculated using headword matching, fuzzy matching, and [lemmatization](documentation/glossary?term=lemma) 

  <div id="search"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMatchesResponse = await oxforddictionaries.search.getMatches({
  sourceLang: "en",
  q: "eye",
  prefix: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'`<a id="sourcelang-en--es--hi--lv--sw--ta--gu"></a>

IANA language code

##### q: `string`<a id="q-string"></a>

Search string

##### prefix: `boolean`<a id="prefix-boolean"></a>

Set prefix to true if you\'d like to get results only starting with search string.

##### regions: `string`<a id="regions-string"></a>

If searching in English, filter words with specific region(s) either \'us\' or \'gb\'.

##### limit: `string`<a id="limit-string"></a>

Limit the number of results per response. Default and maximum limit is 5000.

##### offset: `string`<a id="offset-string"></a>

Offset the start number of the result.

#### 🔄 Return<a id="🔄-return"></a>

[Wordlist](./models/wordlist.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search/{source_lang}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.search.possibleTranslations`<a id="oxforddictionariessearchpossibletranslations"></a>


Use this to find matches in our translation dictionaries.

  <div id="search_translation"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const possibleTranslationsResponse =
  await oxforddictionaries.search.possibleTranslations({
    sourceSearchLanguage: "en",
    targetSearchLanguage: "es",
    q: "eye",
    prefix: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceSearchLanguage: `'en' | 'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'de' | 'pt'`<a id="sourcesearchlanguage-en--es--nso--zu--ms--id--tn--ur--de--pt"></a>

IANA language code

##### targetSearchLanguage: `'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ro' | 'de' | 'pt'`<a id="targetsearchlanguage-es--nso--zu--ms--id--tn--ro--de--pt"></a>

IANA language code

##### q: `string`<a id="q-string"></a>

Search string.

##### prefix: `boolean`<a id="prefix-boolean"></a>

Set prefix to true if you\'d like to get results only starting with search string.

##### regions: `string`<a id="regions-string"></a>

Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language.

##### limit: `string`<a id="limit-string"></a>

Limit the number of results per response. Default and maximum limit is 5000.

##### offset: `string`<a id="offset-string"></a>

Offset the start number of the result.

#### 🔄 Return<a id="🔄-return"></a>

[Wordlist](./models/wordlist.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search/{source_search_language}/translations&#x3D;{target_search_language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.theSentenceDictionary.getCorpusSentences`<a id="oxforddictionariesthesentencedictionarygetcorpussentences"></a>


Use this to retrieve sentences extracted from  corpora which show how a word is used in the language. This is available for English and Spanish. For English, the sentences are linked to the correct [sense](documentation/glossary?term=sense) of the word in the dictionary. In Spanish, they are linked at the [headword](documentation/glossary?term=headword) level.
  <div id="sentences"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCorpusSentencesResponse =
  await oxforddictionaries.theSentenceDictionary.getCorpusSentences({
    sourceLanguage: "en",
    wordId: "ace",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLanguage: `'en' | 'es'`<a id="sourcelanguage-en--es"></a>

IANA language code

##### wordId: `string`<a id="wordid-string"></a>

An Entry identifier. Case-sensitive.

#### 🔄 Return<a id="🔄-return"></a>

[SentencesResults](./models/sentences-results.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/entries/{source_language}/{word_id}/sentences` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.thesaurus.getAntonyms`<a id="oxforddictionariesthesaurusgetantonyms"></a>


Retrieve words that are opposite in meaning to the input word ([antonym](documentation/glossary?term=thesaurus)).

  <div id="antonyms"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAntonymsResponse = await oxforddictionaries.thesaurus.getAntonyms({
  sourceLang: "en",
  wordId: "ace",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en'`<a id="sourcelang-en"></a>

IANA language code

##### wordId: `string`<a id="wordid-string"></a>

An Entry identifier. Case-sensitive.

#### 🔄 Return<a id="🔄-return"></a>

[Thesaurus](./models/thesaurus.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/entries/{source_lang}/{word_id}/antonyms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.thesaurus.getSimilarWords`<a id="oxforddictionariesthesaurusgetsimilarwords"></a>


Use this to retrieve words that are similar in meaning to the input word ([synonym](documentation/glossary?term=synonym)).

  <div id="synonyms"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSimilarWordsResponse =
  await oxforddictionaries.thesaurus.getSimilarWords({
    sourceLang: "en",
    wordId: "ace",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en'`<a id="sourcelang-en"></a>

IANA language code

##### wordId: `string`<a id="wordid-string"></a>

An Entry identifier. Case-sensitive.

#### 🔄 Return<a id="🔄-return"></a>

[Thesaurus](./models/thesaurus.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/entries/{source_lang}/{word_id}/synonyms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.thesaurus.getSynonymsAntonyms`<a id="oxforddictionariesthesaurusgetsynonymsantonyms"></a>


Retrieve available [synonyms](documentation/glossary?term=thesaurus) and [antonyms](documentation/glossary?term=thesaurus) for a given word and language. 

  <div id="synonyms_and_antonyms"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSynonymsAntonymsResponse =
  await oxforddictionaries.thesaurus.getSynonymsAntonyms({
    sourceLang: "en",
    wordId: "ace",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en'`<a id="sourcelang-en"></a>

IANA language code

##### wordId: `string`<a id="wordid-string"></a>

An Entry identifier. Case-sensitive.

#### 🔄 Return<a id="🔄-return"></a>

[Thesaurus](./models/thesaurus.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/entries/{source_lang}/{word_id}/synonyms;antonyms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.translation.getWordTranslation`<a id="oxforddictionariestranslationgetwordtranslation"></a>


Use this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.

  <div id="translation"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWordTranslationResponse =
  await oxforddictionaries.translation.getWordTranslation({
    sourceTranslationLanguage: "en",
    wordId: "change",
    targetTranslationLanguage: "es",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceTranslationLanguage: `'en' | 'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'de' | 'pt'`<a id="sourcetranslationlanguage-en--es--nso--zu--ms--id--tn--ur--de--pt"></a>

IANA language code

##### wordId: `string`<a id="wordid-string"></a>

The source word

##### targetTranslationLanguage: `'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ro' | 'de' | 'pt'`<a id="targettranslationlanguage-es--nso--zu--ms--id--tn--ro--de--pt"></a>

IANA language code

#### 🔄 Return<a id="🔄-return"></a>

[RetrieveEntry](./models/retrieve-entry.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/entries/{source_translation_language}/{word_id}/translations&#x3D;{target_translation_language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.getGrammaticalFeatures`<a id="oxforddictionariesutilitygetgrammaticalfeatures"></a>

Returns a list of the available [grammatical features](documentation/glossary?term=grammaticalfeatures) for a given language dataset.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGrammaticalFeaturesResponse =
  await oxforddictionaries.utility.getGrammaticalFeatures({
    sourceLanguage: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLanguage: `'en' | 'es' | 'lv' | 'nso' | 'zu' | 'ms' | 'tn' | 'ur' | 'hi' | 'sw' | 'de' | 'pt' | 'ta' | 'gu'`<a id="sourcelanguage-en--es--lv--nso--zu--ms--tn--ur--hi--sw--de--pt--ta--gu"></a>

IANA language code. If provided output will be filtered by sourceLanguage.

#### 🔄 Return<a id="🔄-return"></a>

[UtilityLabels](./models/utility-labels.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/grammaticalFeatures/{source_language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.getLexicalCategories`<a id="oxforddictionariesutilitygetlexicalcategories"></a>

Returns a list of available [lexical categories](documentation/glossary?term=lexicalcategory) for a given language dataset.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLexicalCategoriesResponse =
  await oxforddictionaries.utility.getLexicalCategories({
    language: "es",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### language: `'es' | 'en' | 'lv' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'hi' | 'sw' | 'ro' | 'de' | 'pt' | 'ta' | 'gu'`<a id="language-es--en--lv--nso--zu--ms--id--tn--ur--hi--sw--ro--de--pt--ta--gu"></a>

IANA language code

#### 🔄 Return<a id="🔄-return"></a>

[UtilityLabels](./models/utility-labels.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/lexicalcategories/{language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.listAvailableDomains`<a id="oxforddictionariesutilitylistavailabledomains"></a>

Returns a list of the available [domains](documentation/glossary?term=domain) for a given bilingual language dataset.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableDomainsResponse =
  await oxforddictionaries.utility.listAvailableDomains({
    sourceDomainsLanguage: "en",
    targetDomainsLanguage: "es",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceDomainsLanguage: `'en' | 'es' | 'nso' | 'zu' | 'ur' | 'de' | 'pt'`<a id="sourcedomainslanguage-en--es--nso--zu--ur--de--pt"></a>

IANA language code

##### targetDomainsLanguage: `'es' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ro' | 'de' | 'pt'`<a id="targetdomainslanguage-es--nso--zu--ms--id--tn--ro--de--pt"></a>

IANA language code

#### 🔄 Return<a id="🔄-return"></a>

[UtilityLabels](./models/utility-labels.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/domains/{source_domains_language}/{target_domains_language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.listAvailableFilters`<a id="oxforddictionariesutilitylistavailablefilters"></a>

Returns a list of all the valid filters to construct API calls.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableFiltersResponse =
  await oxforddictionaries.utility.listAvailableFilters();
```

#### 🔄 Return<a id="🔄-return"></a>

[Filters](./models/filters.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/filters` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.listAvailableLanguages`<a id="oxforddictionariesutilitylistavailablelanguages"></a>

Returns a list of monolingual and bilingual language datasets available in the API


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAvailableLanguagesResponse =
  await oxforddictionaries.utility.listAvailableLanguages({
    sourceLanguage: "es",
    targetLanguage: "es",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLanguage: `'es' | 'en' | 'lv' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'hi' | 'sw' | 'ro' | 'de' | 'pt' | 'ta' | 'gu'`<a id="sourcelanguage-es--en--lv--nso--zu--ms--id--tn--ur--hi--sw--ro--de--pt--ta--gu"></a>

IANA language code. If provided output will be filtered by sourceLanguage.

##### targetLanguage: `'es' | 'en' | 'lv' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ur' | 'hi' | 'sw' | 'ro'`<a id="targetlanguage-es--en--lv--nso--zu--ms--id--tn--ur--hi--sw--ro"></a>

IANA language code. If provided output will be filtered by sourceLanguage.

#### 🔄 Return<a id="🔄-return"></a>

[Languages](./models/languages.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/languages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.listBilingualRegisters`<a id="oxforddictionariesutilitylistbilingualregisters"></a>

Returns a list of the available [registers](documentation/glossary?term=registers) for a given bilingual language dataset.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBilingualRegistersResponse =
  await oxforddictionaries.utility.listBilingualRegisters({
    sourceRegisterLanguage: "en",
    targetRegisterLanguage: "es",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceRegisterLanguage: `'en' | 'es' | 'ms' | 'id' | 'ur' | 'de' | 'pt'`<a id="sourceregisterlanguage-en--es--ms--id--ur--de--pt"></a>

IANA language code

##### targetRegisterLanguage: `'es' | 'en' | 'nso' | 'zu' | 'ms' | 'id' | 'tn' | 'ro' | 'de' | 'pt'`<a id="targetregisterlanguage-es--en--nso--zu--ms--id--tn--ro--de--pt"></a>

IANA language code

#### 🔄 Return<a id="🔄-return"></a>

[UtilityLabels](./models/utility-labels.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/registers/{source_register_language}/{target_register_language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.listEndpointFilters`<a id="oxforddictionariesutilitylistendpointfilters"></a>

Returns a list of all the valid filters for a given endpoint to construct API calls.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEndpointFiltersResponse =
  await oxforddictionaries.utility.listEndpointFilters({
    endpoint: "entries",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### endpoint: `'entries' | 'inflections' | 'translations'`<a id="endpoint-entries--inflections--translations"></a>

Name of the endpoint.

#### 🔄 Return<a id="🔄-return"></a>

[Filters](./models/filters.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/filters/{endpoint}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.listMonolingualDomains`<a id="oxforddictionariesutilitylistmonolingualdomains"></a>

Returns a list of the available [domains](documentation/glossary?term=domain) for a given monolingual language dataset.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMonolingualDomainsResponse =
  await oxforddictionaries.utility.listMonolingualDomains({
    sourceLanguage: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLanguage: `'en' | 'es' | 'nso' | 'zu' | 'hi' | 'sw' | 'ur' | 'de' | 'pt' | 'ta' | 'gu'`<a id="sourcelanguage-en--es--nso--zu--hi--sw--ur--de--pt--ta--gu"></a>

IANA language code

#### 🔄 Return<a id="🔄-return"></a>

[UtilityLabels](./models/utility-labels.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/domains/{source_language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.listMonolingualRegions`<a id="oxforddictionariesutilitylistmonolingualregions"></a>

Returns a list of the available [regions](documentation/glossary?term=regions) for a given monolingual language dataset.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMonolingualRegionsResponse =
  await oxforddictionaries.utility.listMonolingualRegions({
    sourceLanguage: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLanguage: `'en'`<a id="sourcelanguage-en"></a>

IANA language code

#### 🔄 Return<a id="🔄-return"></a>

[Regions](./models/regions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/regions/{source_language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.utility.listMonolingualRegisters`<a id="oxforddictionariesutilitylistmonolingualregisters"></a>

Returns a list of the available [registers](documentation/glossary?term=registers) for a given monolingual language dataset.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMonolingualRegistersResponse =
  await oxforddictionaries.utility.listMonolingualRegisters({
    sourceLanguage: "en",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLanguage: `'en' | 'es' | 'hi' | 'id' | 'lv' | 'ms' | 'sw' | 'ur' | 'de' | 'pt' | 'ta' | 'gu'`<a id="sourcelanguage-en--es--hi--id--lv--ms--sw--ur--de--pt--ta--gu"></a>

IANA language code

#### 🔄 Return<a id="🔄-return"></a>

[UtilityLabels](./models/utility-labels.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/registers/{source_language}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.wordlist.getAdvancedWords`<a id="oxforddictionarieswordlistgetadvancedwords"></a>

Use this to apply more complex filters to the [list of words](documentation/glossary?term=wordlist). For example, you may only want to filter out words for which all [senses](documentation/glossary?term=sense) match the filter, or only its 'prime sense'. You can also filter by word length or match by substring (prefix). 

  <div id="wordlist_advanced"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAdvancedWordsResponse =
  await oxforddictionaries.wordlist.getAdvancedWords({
    sourceLang: "en",
    filtersAdvanced: "lexicalCategory=Noun;domains=sport",
    wordLength: ">5,<10",
    prefix: "goal",
    exact: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'`<a id="sourcelang-en--es--hi--lv--sw--ta--gu"></a>

IANA language code

##### filtersAdvanced: `string`<a id="filtersadvanced-string"></a>

Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.

##### exclude: `string`<a id="exclude-string"></a>

Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results.

##### excludeSenses: `string`<a id="excludesenses-string"></a>

Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses.

##### excludePrimeSenses: `string`<a id="excludeprimesenses-string"></a>

Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only).

##### wordLength: `string`<a id="wordlength-string"></a>

Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars.

##### prefix: `string`<a id="prefix-string"></a>

Filter words that start with prefix parameter

##### exact: `boolean`<a id="exact-boolean"></a>

If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.

##### limit: `string`<a id="limit-string"></a>

Limit the number of results per response. Default and maximum limit is 5000.

##### offset: `string`<a id="offset-string"></a>

Offset the start number of the result.

#### 🔄 Return<a id="🔄-return"></a>

[Wordlist](./models/wordlist.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/wordlist/{source_lang}/{filters_advanced}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `oxforddictionaries.wordlist.getCategoryWords`<a id="oxforddictionarieswordlistgetcategorywords"></a>


Use this to retrieve a [list of words](documentation/glossary?term=wordlist) for particular [domain](documentation/glossary?term=domain), [lexical category](documentation/glossary?term=lexicalcategory), [register](documentation/glossary?term=registers) and/or [region](documentation/glossary?term=regions). View the full list of possible filters using the filters Utility endpoint.  The response only includes [headwords](documentation/glossary?term=headword), not all their possible [inflections](documentation/glossary?term=inflection). If you require a full [wordlist](documentation/glossary?term=wordlist) including [inflected forms](documentation/glossary?term=inflection), contact us and we can help.

  <div id="wordlist"></div>


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCategoryWordsResponse =
  await oxforddictionaries.wordlist.getCategoryWords({
    sourceLang: "en",
    filtersBasic: "registers=Rare;domains=Art",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceLang: `'en' | 'es' | 'hi' | 'lv' | 'sw' | 'ta' | 'gu'`<a id="sourcelang-en--es--hi--lv--sw--ta--gu"></a>

IANA language code

##### filtersBasic: `string`<a id="filtersbasic-string"></a>

Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.

##### limit: `string`<a id="limit-string"></a>

Limit the number of results per response. Default and maximum limit is 5000.

##### offset: `string`<a id="offset-string"></a>

Offset the start number of the result

#### 🔄 Return<a id="🔄-return"></a>

[Wordlist](./models/wordlist.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/wordlist/{source_lang}/{filters_basic}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
