export default  interface Integration {
  name: string,
  description: string,
  image_source: string,
  url?: string
}


export const AccountingSystems: Integration[] = [
  {
    name: "Fortnox",
    description: "Fortnox is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'fortnox.jpeg',
    url: "https://apps.fortnox.se/oauth-v1/auth?client_id=GQgPFNBPkuoB&redirect_uri=http://localhost:3000/integrations/true/&scope=bookkeeping%20salary&state=somestate123&access_type=offline&response_type=code&account_type=service"
  },
  {
    name: "Business Central",
    description: "Business Central is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'dynamics_365.jpeg',
  },
  {
    name: "Visma",
    description: "Visma is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'visma.webp',
  },
  {
    name: "Bokio",
    description: "Bokio is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'bokio.png',
  },

  {
    name: "Acconomy",
    description: "Acconomy is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'acconomy.webp',
  },
  {
    name: "Dooer",
    description: "Dooer is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'dooer.jpg',
  },
  {
    name: "Enkelbok",
    description: "Enkelbok is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'enkelbok.jpg',
  },
];

export const PaymentServiceProvidors: Integration[] = [
  {
    name: "Klarna",
    description: "We're all about smoooth shopping, online and in-store",
    image_source: 'klarna.png',
  },
  {
    name: "Adyen",
    description: "End-to-end payments, data, and financial management in a single solution",
    image_source: 'adyen.png',
  },
  {
    name: "Paypal",
    description: "We believe every person has the right to participate fully in the global economy.",
    image_source: 'paypal.png',
  },
  {
    name: "Stripe",
    description: "Payments infrastructure for the internet",
    image_source: 'stripe.png',
  },

 
];

export const OrderManagementSystems: Integration[] = [
  {
    name: "Big Commerce",
    description: "We're all about smoooth shopping, online and in-store",
    image_source: 'big_commerce.png',
  },
  {
    name: "Askås",
    description: "End-to-end payments, data, and financial management in a single solution",
    image_source: 'askas.png',
  },
  {
    name: "WooCommerce",
    description: "We believe every person has the right to participate fully in the global economy.",
    image_source: 'woo_commerce.png',
  },
  {
    name: "Magento",
    description: "Payments infrastructure for the internet",
    image_source: 'magento.png',
  },
  {
    name: "Centra",
    description: "Payments infrastructure for the internet",
    image_source: 'centra.png',
  },
 
];
