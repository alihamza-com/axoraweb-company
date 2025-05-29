import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Development",
        path: "/services/web-development",
        newTab: false,
      },
      {
        id: 42,
        title: "Mobile App Development",
        path: "/services/mobile-app-development",
        newTab: false,
      },
      {
        id: 43,
        title: "SEO Services",
        path: "/services/seo-services",
        newTab: false,
      },

      
    ],

    
  },
  {
    id: 2,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
