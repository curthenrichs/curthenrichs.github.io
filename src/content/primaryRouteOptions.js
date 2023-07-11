import contactData from "./contact";

const data = [
    {
        id: "home-btn",
        flexPx: 150,
        content: "Home",
        route: "/",
        isLink: false
    },
    {
        id: "resume-btn",
        flexPx: 150,
        content: "Resume",
        route: contactData.resume.link,
        isLink: true
    },
    // {
    //     id: "contract-btn",
    //     flexPx: 150,
    //     content: "Contracting",
    //     route: "/contract",
    //     isLink: false
    // }
];

export default data;