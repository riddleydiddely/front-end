export default  interface Integration {
  name: string,
  description: string,
  image_source: string,
  url?: string,
  status: "Added" | "NotAdded" | "ComingSoon"
}


export const AccountingSystems: Integration[] = [
  {
    name: "Fortnox",
    description: "Fortnox is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'fortnox.jpeg',
    url: "https://apps.fortnox.se/oauth-v1/auth?client_id=GQgPFNBPkuoB&redirect_uri=https://demo.getriddle.com/integrations/&scope=bookkeeping%20salary&state=somestate123&access_type=offline&response_type=code&account_type=service",
    status: "NotAdded"
  },
  {
    name: "Datev",
    description: "DATEV is a software service provider with a focus on tax consultancy and financial accounting.",
    image_source: 'datev.png',
    status: "ComingSoon"
  },
  {
    name: "Quickbooks",
    description: "Smart, simple online accounting software for small business",
    image_source: 'quickbooks.png',
    status: "ComingSoon"
  },
  {
    name: "Xero",
    description: "Xero online accounting software for your business connects you to your bank, accountant and bookkeeper",
    image_source: 'xero.png',
    status: "ComingSoon"
  },
  {
    name: "Sage",
    description: "From startup to enterprise solutions, Sage has innovative software to manage your accounting",
    image_source: 'sage.png',
    status: "ComingSoon"
  },
  {
    name: "Business Central",
    description: "Business Central is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'dynamics_365.jpeg',
    url: "https://www.google.com",
    status: "NotAdded"
  },
  {
    name: "Visma",
    description: "Visma is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'visma.webp',
    url: "https://www.google.com",
    status: "NotAdded"
  },
  {
    name: "Bokio",
    description: "Bokio is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'bokio.png',
    url: "https://www.google.com",
    status: "NotAdded"
  },

  {
    name: "Acconomy",
    description: "Acconomy is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'acconomy.webp',
    status: "NotAdded"
  },
  {
    name: "Dooer",
    description: "Dooer is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'dooer.jpg',
    status: "ComingSoon"
  },
  {
    name: "Enkelbok",
    description: "Enkelbok is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'enkelbok.jpg',
    status: "ComingSoon"
  },

];

export const PaymentServiceProvidors: Integration[] = [
  {
    name: "Klarna",
    description: "We're all about smoooth shopping, online and in-store",
    image_source: 'klarna.png',
    url: "https://www.google.com",
    status: "Added"
  },
  {
    name: "Adyen",
    description: "End-to-end payments, data, and financial management in a single solution",
    image_source: 'adyen.png',
    url: "https://www.google.com",
    status: "Added"
  },
  {
    name: "Paypal",
    description: "We believe every person has the right to participate fully in the global economy.",
    image_source: 'paypal.png',
    url: "https://www.google.com",
    status: "NotAdded"
  },
  {
    name: "Stripe",
    description: "Payments infrastructure for the internet",
    image_source: 'stripe.png',
    url: "https://www.google.com",
    status: "NotAdded"
  },


];

export const OrderManagementSystems: Integration[] = [
  {
    name: "Shopify",
    description: "We're all about smoooth shopping, online and in-store",
    image_source: 'shopify.png',
    status: "NotAdded"
  },
  {
    name: "Amazon",
    description: "We're all about smoooth shopping, online and in-store",
    image_source: 'amazon.png',
    status: "NotAdded"
  },
  {
    name: "Big Commerce",
    description: "We're all about smoooth shopping, online and in-store",
    image_source: 'big_commerce.png',
    status: "NotAdded"
  },
  {
    name: "Askås",
    description: "End-to-end payments, data, and financial management in a single solution",
    image_source: 'askas.png',
    status: "NotAdded"
  },
  {
    name: "WooCommerce",
    description: "We believe every person has the right to participate fully in the global economy.",
    image_source: 'woo_commerce.png',
    status: "NotAdded"
  },
  {
    name: "Magento",
    description: "Payments infrastructure for the internet",
    image_source: 'magento.png',
    status: "NotAdded"
  },
  {
    name: "Centra",
    description: "Payments infrastructure for the internet",
    image_source: 'centra.png',
    status: "NotAdded"
  },

];
