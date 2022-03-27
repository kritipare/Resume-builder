import { format } from "date-fns";

export const steps = [
  {
    id: 1,
    name: "Personal Details",
    cols: ["fName", "lName", "contact"],
  },
];

export const numberOfProjects = 2;

export const data = {
  step: 0,
  fname: "John",
  lname: "Doe",
  phone: "9999999991",
  email: "johndoe@gmail.com",
  linkedin: "www.linkedin.com",
  website: "www.google.com",
  summary:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  education: {
    degree: "Bachelor of Technology",
    stream: "Computer Science & Engineering",
    institution: "Institute Name",
    grade: "8.5",
    YOP: format(new Date(), "yyyy"),
  },
  experience: {
    jobTitle: "Job Title",
    companyName: "Company Name",
    startDate: format(new Date(), "MM/yyyy"),
    location: "Location",
    shortDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum has been the industry's standard dummy`,
    details: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,   
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,   
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,
    ],
  },
  projects: [
    {
      title: 'Project Title 1',
      techUsed: `React, node, html, css`,
      details: [
        `ipsum dolor sit amet, consectetur adipiscing elit.ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,
        `ipsum dolor sit amet, consectetur adipiscing elit.ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,   
        `ipsum dolor sit amet, consectetur adipiscing elit.ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,   
      ],
    },
    {
      title: 'Project Title 2',
      techUsed: `jenkins, git`,
      details: [
        `ipsum dolor sit amet, consectetur adipiscing elit.ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,
        `ipsum dolor sit amet, consectetur adipiscing elit.ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,   
        `ipsum dolor sit amet, consectetur adipiscing elit.ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet`,   
      ],
    }
  ],
  skills: `React.js, Node.js, HTML, CSS, Redux, AWS, docker, React.js, Node.js, HTML, CSS, Redux, AWS, docker`,
  interests: `Writing, Singing, Listening to Music`
};
