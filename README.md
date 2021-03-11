# Personal-Website
Development repo for my personal resume website using React and Ant Design.

For this project I am using [Ant Design](https://ant.design/), primarily for the
clean, simplistic visual style it offers.

I went with a single-page design in order to keep the user engaged with content
exploration. My intent is to make it easy for employers / recruiters to quickly
find out what is important to me professionally.

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

- biography
- skills
- projects
  - Authr
  - EvD
  - ITER
  - Internship
  - Hobby
  - Misc
- contact

If adding projects (I advise multiples of nine) then simply update the projects
content and add a markdown page with the writeup.

All images are provided publically and should be added there.

Icon SVGs should be added to the icons directory and the Ant Wrapper written in
customIcons (within content directory).
