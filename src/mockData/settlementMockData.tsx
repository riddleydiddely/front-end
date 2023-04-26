
const dateNow = new Date("2023-04-02");
const dateThen = new Date("2023-04-01");

export interface Settlement {
    id: string,
    amount: number,
    reconciled_amount: number,
    date: Date,
    number_of_orders: number,
    psp_image_url: string,
    psp_name: string,
    currency: string,
    paidOut: boolean
}

export const settlements: Settlement[] = [
    {
        id: "DG8S-23FS",
        amount: 1234,
        date: dateNow,
        number_of_orders: 2436,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 1234,
        currency: "\$",
        paidOut: true,
    },
    {
        id: "AS3M-H34J",
        amount: 4545,
        date: dateNow,
        number_of_orders: 5484,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 4445,
        currency: "\$",
        paidOut: true
    },
    {
        id: "DFF9-845FF",
        amount: 8564,
        date: dateNow,
        number_of_orders: 5623,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 8564,
        currency: "\$",
        paidOut: false
    },
    {
        id: "F4G4-F3YG",
        amount: 5474,
        date: dateNow,
        number_of_orders: 7435,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 5474,
        currency: "\$",
        paidOut: true
    },
    {
        id: "GL4K-F456",
        amount: 5643,
        date: dateNow,
        number_of_orders: 2344,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 5643,
        currency: "\$",
        paidOut: true
    },
    {
        id: "G854-34GD",
        amount: 4536,
        date: dateNow,
        number_of_orders: 2655,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 4536,
        currency: "\$",
        paidOut: true
    },
    {
        id: "4FER-22FF",
        amount: 7342,
        date: dateThen,
        number_of_orders: 3462,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 7342,
        currency: "\$",
        paidOut: true
    },
    {
        id: "FST5-B555",
        amount: 1343,
        date: dateThen,
        number_of_orders: 7324,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 1343,
        currency: "\$",
        paidOut: true
    },
    {
        id: "SH55-345D",
        amount: 5233,
        date: dateThen,
        number_of_orders: 2352,
        psp_image_url: "klarna.png",
        psp_name: "Klarna",
        reconciled_amount: 5233,
        currency: "\$",
        paidOut: true
    },

]