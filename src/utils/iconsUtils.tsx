import {CircleFlag} from "react-circle-flags";
import React from "react";


export function getFlagIconByCurrency(currency: string) {
    let currencyMap: Map<string, string> = new Map();

    // For European countries that use the Euro, it maps to "eu"
    currencyMap.set('EUR', 'eu');

    // Other European countries
    currencyMap.set('GBP', 'gb'); // United Kingdom
    currencyMap.set('CHF', 'ch'); // Switzerland
    currencyMap.set('NOK', 'no'); // Norway
    currencyMap.set('SEK', 'se'); // Sweden
    currencyMap.set('DKK', 'dk'); // Denmark
    currencyMap.set('PLN', 'pl'); // Poland
    currencyMap.set('CZK', 'cz'); // Czech Republic
    currencyMap.set('HUF', 'hu'); // Hungary
    currencyMap.set('RON', 'ro'); // Romania
    currencyMap.set('BGN', 'bg'); // Bulgaria
    currencyMap.set('ISK', 'is'); // Iceland
    currencyMap.set('HRK', 'hr'); // Croatia
    currencyMap.set('RSD', 'rs'); // Serbia
    currencyMap.set('BYN', 'by'); // Belarus
    currencyMap.set('RUB', 'ru'); // Russia
    currencyMap.set('UAH', 'ua'); // Ukraine
    currencyMap.set('MKD', 'mk'); // North Macedonia
    currencyMap.set('BAM', 'ba'); // Bosnia and Herzegovina
    currencyMap.set('ALL', 'al'); // Albania
    currencyMap.set('TRY', 'tr'); // Turkey
    currencyMap.set('MDL', 'md'); // Moldova
    currencyMap.set('GEL', 'ge'); // Georgia
    currencyMap.set('AZN', 'az'); // Azerbaijan
    currencyMap.set('AMD', 'am'); // Armenia

    // Rest of the world
    currencyMap.set('USD', 'us'); // United States
    currencyMap.set('ILS', 'il'); // Israel
    currencyMap.set('AUD', 'au'); // Australia
    currencyMap.set('CAD', 'ca'); // Canada

    return <CircleFlag className={`mr-3 h-4 w-4`} countryCode={currencyMap.get(currency) ?? "null"}/>

}
