
const NOW = new Date(Date.now());

export interface TransactionData {
    transaction_id: string,
    date: Date,
    status: string,
    source_image_url: string,
    source_name: string,
    source_transaction_type: string,
    items: string[],
    price:number,
    reconciled_amount:number,
    currency:string
}

export const transactionItems: TransactionData[] = [
    {
        transaction_id: "DG8S-23FS",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "Card",
        items: [],
        price:1234,
        reconciled_amount:1234,
        currency:"$"
    },
    {
        transaction_id: "HG88-23FS",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "Card",
        items: ["FX rate", "Possible Chargeback"],
        price:363,
        reconciled_amount:350,
        currency:"$"
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
        items: [],
        price:900,
        reconciled_amount:900,
        currency:"$"
    },



    {
        transaction_id: "325L-456O",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "BNPL",
        items: [],
        price:231,
        reconciled_amount:231,
        currency:"$"
    },

    {
        transaction_id: "QMM5-456O",
        date: new Date("2023-03-02"),
        status: "reconciled",
        source_image_url: "klarna.png",
        source_name: "Klarna",
        source_transaction_type: "BNPL",
        items: [],
        price:760,
        reconciled_amount:760,
        currency:"$"
    },
]