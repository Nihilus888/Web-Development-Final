# Web Development Final Project

This web development final project was an interesting one as it was about researching the history of the internet in my home country of Singapore, learning what was going on and also picking up other skills such as Figma for UI/UX mockup design and finally creating a web site to display the information that I have learnt. 

## Research and UI/UX Design
While researching and compiling various resources, one of the rubric requirements was to do the mockup of the frontend of my website so picking Figma was the top choice as it is an industry standard for UI/UX design. As I have not worked on Figma before and to get a good grasp of the fundamentals, watching Figma tutorials on youtube and playing around with it allowed me to quickly learn the basics. Once I got an idea of how it works, drafting the first mockup for the desktop version before doing it for mobile. Using the Chrome Devtools, I decided to work with parameters from Samsung Galaxy 20 Ultra that were given by dev tools as it was slightly larger compared to the other ones there and if it fit them, it should fit the other devices with a few tweaks as per the requirements of the rubrics. 

## Feedback and Refinement
Once the first draft of mockups was completed, I sought my family for feedback and what I could improve to make it more visually appealing, intuitively easy to use and accessible. Some commented that I should add a footer and add some underlines on the dates, description of image and the links header to have a clear separation between the headers and the items for better visual clarity. In addition, centering some of the parts would be ideal as there was quite a huge space on the right side that made it look jarring so centering some items would give a more balanced nuance to it. This feedback gave me a better idea of how to do my next design of mockups.

## Tech Stack Choice
As the rubrics required me to choose a templating engine instead of just coding it out in HTML and CSS, I decided to settle on EJS (Embedded Javascript) as it would be very compatible with Express JS which I needed for my local API. Sourcing for an external API to pull the data was not possible as there were none available so a local API was the only viable option. To install the necessary libraries and modules, reading the Node documentation was important as it allowed me to manage my packages. Installing Node as a package manager was essential to install our Express JS, EJS and CORs to allow calls from all endpoints and the fs library which Ito read files such as local JSON files to our repository which I had to find on the internet after some research.

## Initial Layout
After choosing a tech stack, I started with doing the headers and footers across the pages but also changing and refining the routes to maintain consistency. I had to research using stack overflow and css tutorial pages to get an idea of how to use css to get the desired output that I wanted which required chaining together various css styles to get the desired output. This required playing with parameters such as margins, paddings, border, displays and many more and some of the html elements as well.

## Setting up the App
To scaffold the app, I had to deal with the app.js and the routes that I needed to do and the data that I needed to display. I worked on the various routes that required the res.render to render the EJS templates and to add the necessary libraries which I installed using the Node package manager. However, for the API, I needed to create a local file with the necessary JSON data which is properly formatted that I needed to display at my frontend instead of calling a server outside to fetch my data. I ensured that by using the fs read file function to call the file and parse it as JSON while including error catches to allow me to debug and catch exceptions to see if there were any further issues. To debug and check that the logical sequence was correct, I used the console log function multiple times to see the output and tailor the code to get the necessary JSON data that I wanted.

## Home Page
Once the routes and the API was built, I focused on the home page and pasted all the necessary images to display on the home page. Adding an old photo and getting a modern photo was a good contrast to show on the home page of Singapore’s transformation in terms of how the internet was being done. I had to play around with containers to separate the images and the text sections in such a way to get the layout that was congruent with my Figma layout. Aiding me in this process was the CSS documentation and stack overflow which came in handy for me to reference and search the styles that I required.

## History Page
After the home page was completed, this history page was harder as I had to reference the EJS documentation and youtube to find out how to loop through the JSON fields via foreach and attain the values for me to display on the page. Though it took quite a bit of time, I managed to pull the API data and get it to display it on my frontend which was quite an achievement as it was the hardest part that I anticipated in this project. Once API Integration was out of the way, I just needed to work on the CSS portion to get it to display the information that I integrated in a manner that I wanted. However this history page deviated from my initial Figma mockup design as it was tough to emulate due to time constraints.

## Image Page
There were some expectations that were tougher than I assumed due to inconsistent image sizing. So I had to deviate from my Figma mockups as my Figma mockups assumed that my images were perfectly square which was a reasonable design and expectation initially but I had to amend it along the way. As there were not a lot of images in the internet that I deemed to be fit to explain the history of the internet of Singapore, the images that were selected came in different shapes and sizes. As some of the images were rectangular in shape, I used the display flex and flex-direction column to create a flexible column and to use different containers to fit all my images in it which allowed me to choose how I wanted to display my images that were slightly varying sizes. I had to play around with the containers and also the margins, width and height for the images to align them nicely to make it look as symmetrical as possible. To give it an impression of an art gallery vibe, I put a box around the text to make it look like a signboard below an art image by using the border solid padding 2px which gave a solid look to it and also gave a padding of 2 pixels which gave space around the words and the box. 

## Resource Page
The resource page was one of the simpler pages compared to the rest as the main thing was to list down the references and research for the history of the internet of Singapore and those technical documentation that was referred to for creating this application. To ensure consistency, I used a text-align center to center them but also had to play around with the margins to get the alignment that was fitting as some of the words were smaller than the others. For instance, the links were smaller than the headers and had to size and proportion them accordingly.


## Web Validator and Accessibility Test
One of the main rubrics was to test your web application for accessibility and W3 HTML validator which I put my code through. As the tech stack was using EJS, there were some errors that the markup W3 validation service would show which were some EJS template items when using EJS syntax to display data. Other than that, there were no issues with the html code and it did not throw out any errors which is to be naturally expected. While testing the accessibility, the known problem was the contrast between the footer background and the text on it which required a change. After changing it to a slightly darker colour to have a better contrast between the words and the background colour, the website accessibility rated it as having no known problems. This means that I have passed the two tests that were required in the rubrics.

## Conclusion
This web development project allowed me to put my coding to the test as I had to choose a tech stack that would fit the requirements but also something that was more technically compatible with my current knowledge. This gave me autonomy but also let me understand how to make proper trade offs based on my familiarity with the technology and its functionality, managing my time to meet the deadline and also to work with constraints such as having no external APIs to pull JSON data that I can work with and how I dealt with it. Overall, this was an interesting and immersive experience that allowed me to explore the world of web development and to also deepen my knowledge further in this subject.

References
Chaya, T. (2023, February 25). How to create a local API server (REST API) for testing. Medium.
https://medium.com/chaya-thilakumara/how-to-create-a-local-api-server-rest-api-for-testing-945bbb2d31b7
Express.js. (n.d.). Installing Express. 
https://expressjs.com/en/starter/installing.html
Express.js. (n.d.). Routing. 
https://expressjs.com/en/guide/routing.html
FreeCodeCamp. (2021, May 20). Make API calls in JavaScript. 
https://www.freecodecamp.org/news/make-api-calls-in-javascript/
Mozilla Developer Network. (n.d.). CSS: Cascading Style Sheets. Mozilla.
https://developer.mozilla.org/en-US/docs/Web/CSS
National University of Singapore IT. (2020, October). Origins of Internet in Singapore.
https://nusit.nus.edu.sg/wp-content/uploads/2020/10/Prof-Article-2-Origins-of-Internet-in-Singapore-colour-reduced.pdf
The Straits Times. (2015, October). 35 years of ICT: Supercharging Singapore - The 1990s.
https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2015/10/35-years-of-ict/supercharging-singapore/the-1990s.html
Tech.gov.sg. (n.d.). History of the Internet.
https://www.tech.gov.sg/media/technews/history-of-the-internet
