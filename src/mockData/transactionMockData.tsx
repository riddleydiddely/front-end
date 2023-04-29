import { Customer } from "@/components/types/Customer";
import { PurchaseInfo } from "@/components/types/PurchaseInfo";

const NOW = new Date(Date.now());

export interface Transaction {
    transaction_id: string,
    date: Date,
    status: string,
    source_image_url: string,
    source_name: string,
    source_transaction_type: string,
    reasons: string[],
    amount:number,
    reconciled_amount:number,
    currency:string,
    tax: number,
    customer: Customer,
    oms: string,
    psp: string,
}

export const transactionItems: Transaction[] = [
    {
        transaction_id: "DG8S-23FS",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "Card",
        reasons: [],
        amount:1234,
        reconciled_amount:1234,
        currency:"$",
        tax: 12,
        customer: {
            name: "Jonas Sjösted",
            shipping_address: "Andra Långgatan 2, Göteborg",
            email: "marko@gmail.com"
        },
        oms: "Shopify",
        psp: "Klarna"
    },
    {
        transaction_id: "HG88-23FS",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "Card",
        reasons: ["FX-rate", "Chargeback",],
        amount:363,
        reconciled_amount:350,
        currency:"$",
        tax: 3,
        customer: {
            name: "Marko Lehtosalo ",
            shipping_address: "Östermlamsgatan 3, Stockholm",
            email: "markoolio@gmail.com"
        },
        oms: "Shopify",
        psp: "Klarna"
    },
    {
        transaction_id: "J8PR-23FS",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "Card",
        reasons: ["FX-rate",],
        amount:10,
        reconciled_amount:9,
        currency:"$",
        tax: 1,
        customer: {
            name: "Jesus Morales",
            shipping_address: "Wollmar Yxkullsgatan 48C, Stockholm",
            email: "jesus@gmail.com"
        },
        oms: "Shopify",
        psp: "Klarna"
    },
    // {
    //     transaction_id: "TR4S-F73J",
    //     date: new Date("2023-03-01"),
    //     status: "unreconciled",
    //     source_image_url: "mynt.png",
    //     source_name: "Mynt",
    //     source_transaction_type: "Card",
    //     items: ["Rebook Shoes M"],
    //     price:532,
    //     reconciled_amount:90,
    //     currency:"$"
    // },

    // {
    //     transaction_id: "F84K-G881",
    //     date: new Date("2023-03-03"),
    //     status: "reconciled",
    //     source_image_url: "paypal.png",
    //     source_name: "PayPal",
    //     source_transaction_type: "Bank transaction",
    //     items: ["T shirt L"],
    //     price:900,
    //     reconciled_amount:900,
    //     currency:"$"
    // },

    // {
    //     transaction_id: "DG87-23NM",
    //     date: new Date("2023-03-03"),
    //     status: "reconciled",
    //     source_image_url: "stripe.png",
    //     source_name: "Stripe",
    //     source_transaction_type: "Card",
    //     items: ["Adidas Sneaker"],
    //     price:120,
    //     reconciled_amount:120,
    //     currency:"$"
    // },


    {
        transaction_id: "QMM5-456O",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "BNPL",
        reasons: [],
        amount:900,
        reconciled_amount:900,
        currency:"$",
        tax: 9,
        customer: {
            name: "Tony Andersson ",
            shipping_address: "Wollmar Yxkullsgatan 50A, Stockholm",
            email: "tonybony@gmail.com"
        },
        oms: "Shopify",
        psp: "Klarna"
    },
    {
        transaction_id: "325L-456O",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "BNPL",
        reasons: [],
        amount:231,
        reconciled_amount:231,
        currency:"$",
        tax: 2.3,
        customer: {
            name: "King Kong",
            shipping_address: "Hawaii",
            email: "king@gmail.com"
        },
        oms: "Shopify",
        psp: "Klarna"
    },
    {
        transaction_id: "QMM5-456O",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "BNPL",
        reasons: [],
        amount:760,
        reconciled_amount:760,
        currency:"$",
        tax: 3,
        customer: {
            name: "Antonio Andersson",
            shipping_address: "Mästersamuelssgatan 3, Stockholm",
            email: "antonio@gmail.com"
        },
        oms: "Shopify",
        psp: "Klarna"
    },
]