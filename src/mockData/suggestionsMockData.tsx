import React from 'react'


export interface Suggestions {
    match_score: string,
    transaction_id: string,
    price: number,
    source: string,
    currency: string,
    time: Date
};

export const SuggestionsData: Suggestions[] = [
    {
        match_score: "50%",
        transaction_id: "SDG-4G4",
        price: 76,
        source: "Klarna",
        currency: "€",
        time: new Date("2023-03-01"),
    },
    {
        match_score: "68%",
        transaction_id: "K46-455",
        price: 578,
        source: "Klarna",
        currency: "€",
        time: new Date("2023-03-01"),
    }
    ,
    {
        match_score: "78%",
        transaction_id: "566-yt5",
        price: 278,
        source: "Klarna",
        currency: "$",
        time: new Date("2023-03-01"),
    }
    ,
    {
        match_score: "48%",
        transaction_id: "9Y7-48Q",
        price: 854,
        source: "Klarna",
        currency: "€",
        time: new Date("2023-03-01"),
    }
]