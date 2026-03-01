# Portfolio in React
In this project, I will re-create my [portfolio](frances-joffany-navarro.github.io). This time I will be using the power of react to create a dynamic page and helps me to gain more knowledge in react.

Project started 10 February 2026

## Checklist
 - [x] Create a repository
 - [x] Setup React
 - [x] Create templates (Nav, Footer, etc.)
 - [x] Create a style for the website. Should i use bootstrap?
 - [ ] Add content to homepage
   - [x] Create Headline (Carousel of my works)
     - [x] fix the size of carousel
       - [x] made the sizes of the images uniform
       - [x] fix the streched image in responsive
       - [x] find images for design and development categories in homepage
     - [X] group my works by category (Development and Design)
     - [x] Fix the interval
 - [ ] Create My works section
   - [x] Apply Grid
   - [x] Understand Grid
 - [x] Deploy application to github pages
    - [x] The images in carousel are not showing

## Website
  [https://frances-joffany-navarro.github.io/portfolio-react/]( https://frances-joffany-navarro.github.io/portfolio-react/) 
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

    Problem: The image is not showing
      - vite.config file
        ```
        base: "/portfolio-react/"
        ```
      - Hero.jsx
        instead of putting the path directly in the object, I imported first the images (relative path) named image1 and image2 then use the variables inside the object.


## Credit
  - Carousel Images
    - Photo by [Harper Sunday](https://unsplash.com/@harpersunday?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/a-bunch-of-pictures-that-are-on-a-table-RmQWqLKsVv8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    - Photo by [Growtika](https://unsplash.com/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/a-computer-on-a-desk-58K6WZiwd0g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
      