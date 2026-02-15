import contactData from "./contact";
import contractingData from "./contracting";

let data = [
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
    content: contactData.resume.text,
    route: contactData.resume.link,
    isLink: true
  },
  {
    id: "blog-btn",
    flexPx: 150,
    content: contactData.blog.text,
    route: contactData.blog.link,
    isLink: true
  }
];

if (contractingData.available) {
  data.push(   {
    id: "contract-btn",
    flexPx: 150,
    content: "Contracting",
    route: "/contract",
    isLink: false
  });
}

export default data;