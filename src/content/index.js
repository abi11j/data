import { single, double, triple } from "../assets";


const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "aboutUs",
        title: "About us",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "getStarted",
        title: "Get Started",
    }
];

const cardData = [
    {
        id: "1",
        img: single,
        title: "Single User",
        price: "$149",
        ft: "500 GB Storage",
        st: "1 Granted User",
        tr: "Send up to 2 GB",
    },
    {
        id: "2",
        img: double,
        title: "Partnership",
        price: "$199",
        ft: "1 TB Storage",
        st: "3 User Allowed",
        tr: "Send up to 10 GB",
    },
    {
        id: "3",
        img: triple,
        title: "Group Account",
        price: "$299",
        ft: "5 TB Storage",
        st: "10 User Allowed",
        tr: "Send up to 20 GB",
    }
    
]





export {
    navLinks,
    cardData,
    

}