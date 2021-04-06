# Personal-Website
Development repo for my personal resume website using React and Ant Design. Check
it out at [curthenrichs.github.io](https://curthenrichs.github.io/).

For this project I am using [Ant Design](https://ant.design/), primarily for the
clean, simplistic visual style it offers.

## Local Build
To build and test locally, first clone this repo and navigate to the root project
directory. Then run:

```
npm install
```

Next to run the development server:

```
npm start
```

## Github Deployment
I am using the [gh-pages]() package to deploy the static website to Github pages.
To deploy, simply run:

```
npm run deploy
```

## Updating
This project is structured such that I should be able to merely update the content
files. I broke the content down by section on the webpage.

- Main Page
  - biography
    - Biography (markdown)
  - skills
    - customIcons
    - And add icons to icon directory
  - projects
    - Authr (markdown)
    - EvD (markdown)
    - ITER (markdown)
    - Internship (markdown)
    - Hobby (markdown)
    - VisionML (markdown)
    - Embedded (markdown)
    - HCI (markdown)
  - publications
  - contact
- Resume Page
  - resumes
    - ResumeDescription
- Courses Page
  - courses
    - CoursesDescription

If adding projects then simply update the projects content and add a markdown
page with the writeup.

All images are provided in public and should be added there.

Icon SVGs should be added to the icons directory and the Ant Wrapper written in
customIcons (within content directory).

## Acknowledgements
Thanks to this [repo](https://github.com/rafgraph/spa-github-pages) hard refreshes are
managed when deployed on Github Pages.

Thank you [Ant Design](https://ant.design/) for the amazing framework. I really
love the design language that is provided out of the box.

And thanks to all other technical libraries and code developers / teams who have
made this possible. I truly am standing on the shoulders of giants.

## Notes
My resume and cover letter design files are in the root's docs directory. This is
to make my life easier when updating my profile in the future.
