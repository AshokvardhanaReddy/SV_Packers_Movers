import service_image_1 from "./assests/images/service_image_1.png";
import service_image_2 from "./assests/images/service_image_2.jpg";
import service_image_3 from "./assests/images/service_image_3.jpg";
import service_image_4 from "./assests/images/service_image_4.jpg";
import service_image_5 from "./assests/images/service_image_5.jpg";
import service_image_6 from "./assests/images/service_image_6.jpg";

import history_image_1 from "./assests/images/history_image_1.jpg";
import history_image_2 from "./assests/images/history_image_2.jpg";
import history_image_3 from "./assests/images/history_image_3.jpg";
import history_image_4 from "./assests/images/history_image_4.jpg";
import history_image_5 from "./assests/images/history_image_5.jpg";

const ourServices = [
  {
    id: 1,
    title: "House Shifting",
    image: service_image_1,
    description:
      "We will help you if you want to move from one location to another location at affordable prices and at your convenience.",
  },
  {
    id: 2,
    title: "Office Shifting",
    image: service_image_2,
    description:
      "If you want to move your office to another location, we provide the best services to you.",
  },
  {
    id: 3,
    title: "Transportation",
    image: service_image_3,
    description:
      "When you need to deliver goods, safe and efficient services are crucial and we will provide door-to-door transport services.",
  },
  {
    id: 4,
    title: "Packing Services",
    image: service_image_4,
    description:
      "While moving goods from one place place to another place, packing goods is most important and we will provide best serivce in this.",
  },
  {
    id: 5,
    title: "Loading",
    image: service_image_5,
    description:
      "Loading of goods onto a vehicle for Transportation is a critical step. We have a lot of experience in loading goods.",
  },
  {
    id: 6,
    title: "Unloading",
    image: service_image_6,
    description:
      "Unloading of goods from a vehicle is also one of the riskiest jobs. For that, we provide unloading services with the utmost care.",
  },
];

const history = [
  {
    id: 1,
    title: "700+",
    description: "Homes Shifted",
    image: history_image_1,
  },
  {
    id: 2,
    title: "50+",
    description: "Cities Covered",
    image: history_image_2,
  },
  {
    id: 3,
    title: "500+",
    description: "Satisfied Customers",
    image: history_image_3,
  },
  {
    id: 4,
    title: "9+",
    description: "Years Experience",
    image: history_image_4,
  },
  {
    id: 5,
    title: "50+",
    description: "Professional Workers",
    image: history_image_5,
  },
];

const howItWorks = [
  {
    id: 1,
    title: "Tell Us About Your Move",
    description:
      "Tell us about the destination, pickup, type of location, date and time, and services you require, and we will give you a quote.",
  },
  {
    id: 2,
    title: "Get References From Other Packers",
    description:
      "Compare the prices and hire the best packers and movers as per your requirements",
  },
  {
    id: 3,
    title: "Confirm Your Schedule Date",
    description:
      "After confirming your date and time, we will reach you on that day with our professional workers.",
  },
  {
    id: 4,
    title: "Sit Back & Relax",
    description:
      "While you are relaxing, we will complete your work on time without any errors.",
  },
];

const about = {
  title: "About",
  services: [
    {
      id: 1,
      service_title:
        "Sri Venkateswara Packers & Movers is one of the top packers Since 2015. We have been movers and packers in Ongole. It provides different types of Services that are affordable.",
    },
  ],
};

const footerServices = {
  title: "Services",
  services: [
    { id: "serve_1", service_title: "House Shifting", service_icon: "s-1" },
    { id: "serve_2", service_title: "Office Shifting", service_icon: "s-2" },
    { id: "serve_3", service_title: "Packing Services", service_icon: "s-3" },
    { id: "serve_4", service_title: "Loading", service_icon: "s-4" },
    { id: "serve_5", service_title: "Unloading", service_icon: "s-5" },
    {
      id: "serve_6",
      service_title: "Transportation etc...",
      service_icon: "s-6",
    },
  ],
};

const findUs = {
  title: "Find Us",
  services: [
    {
      id: 1,
      service_title:
        "2-74/B, Nehru Nagar, Near Nehru Nagar, 60 Feet Road Ending, Ongole, A.P - 523001",
    },
    {
      id: 2,
      service_title: "+91 77020 47755",
    },
    { id: 3, service_title: "svpackersmovers.ongole@gmail.com" },
  ],
};

const followUs = {
  title: "Follow Us",
  services: [
    {
      id: "1",
      service_title: "X   ( Twitter )",
      icon: "twitter",
    },
    {
      id: "2",
      service_title: "Instagram",
      icon: "Instagram",
    },
    {
      id: "3",
      service_title: "Facebook",
      icon: "Facebook",
    },
    {
      id: "4",
      service_title: "YouTube",
      icon: "YouTube",
    },
  ],
};

export {
  ourServices,
  history,
  howItWorks,
  about,
  footerServices,
  findUs,
  followUs,
};
