# Portfolio in React
In this project, I will re-create my [portfolio](frances-joffany-navarro.github.io). This time I will be using the power of react to create a dynamic page and helps me to gain more knowledge in react.

Project started 10 February 2026

## Checklist
 - [x] Create a repository
 - [x] Setup React
 - [x] Create templates (Nav, Footer, etc.)
 - [x] Create a style for the website. Should i use bootstrap?
 - [ ] Add content
   - [ ] Create Headline (Carousel of my works)
     - [x] fix the size of carousel
       - [x] made the sizes of the images uniform
       - [x] fix the streched image in responsive
       - [ ] find good images for design and development categories
     - [ ] group my works by category (Development and Design)
     - [x] Fix the interval
   - [ ] Create My works section
   - [ ] Deploy application to github pages
     - [ ] The images in carousel are not showing

## Notes
  - ### Setup React
    ~~I used the [Next.js’s App Router](https://nextjs.org/docs) framework~~
	  I created a react app by using ```npm create vite@latest```

  - ### Create templates
	  I used this [React tutorial for beginner](https://youtu.be/hn80mWvP-9g?si=vusBoGUn83qz1at7) video to create a simple Nav and Footer template

  - ### Create a style for the website
    I decided to use react bootstrap

  - ### Add Content
    To make the images uniform I use photoshop
    To fix the strech images in the carousel I added in css the following
      ```
      .carousel-item img{
        height: 75vh;
        margin: auto;
        object-fit: cover !important;
      }     
      ```
    I am using images from unsplash

  - ### Deploy Website to Github Pages
    [How To Deploy A React Vite App To Github Pages (Simple)](https://www.youtube.com/watch?v=hn1IkJk24ow)

## Credit
