import { InjectionToken } from '@angular/core';


import { Countries, ICountry,
    Anthems, IAnthem,
    Languages, ILanguage,
    CountriesData, AnthemsData,
    LanguagesData }  from 'countries-data';


export const COUNTRIES_DATA = new InjectionToken<Countries>('CountriesData');
export const LANGUAGES_DATA = new InjectionToken<Languages>('LanguagesData');
export const ANTHEMS_DATA = new InjectionToken<Anthems>('AnthemsData');


export const TOKENS_PROVIDERS = [
    { provide: COUNTRIES_DATA, useValue: CountriesData },
    { provide: LANGUAGES_DATA, useValue: LanguagesData },
    { provide: ANTHEMS_DATA, useValue: AnthemsData }
];
