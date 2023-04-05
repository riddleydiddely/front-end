export default  interface ErpSystems {
  name: string;
  description: string;
  image_source: string;
  available: boolean
}


export const Systems: Array<ErpSystems> = [
  {
    name: "Fortnox",
    description: "Fortnox is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'fortnox.jpeg',
    available: true
  },
  {
    name: "Microsoft Dynamics 365",
    description: "Dynamics 365 is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'dynamics_365.jpeg',
    available: true
  },
  {
    name: "Visma",
    description: "Visma is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'visma.webp',
    available: true
  },
  {
    name: "Bokio",
    description: "Bokio is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'bokio.png',
    available: false
  },

  {
    name: "Acconomy",
    description: "Acconomy is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'acconomy.webp',
    available: false
  },
  {
    name: "Dooer",
    description: "Dooer is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'dooer.jpg',
    available: false
  },
  {
    name: "Enkelbok",
    description: "Enkelbok is a portfolio of intelligent business applications that delivers superior operational efficiency and breakthrough customer experiences.",
    image_source: 'enkelbok.jpg',
    available: false
  },
];
