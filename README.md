# Web-Development-Final

Web Development Final Report

This web development final project was an interesting one as I had to do research on the history of the internet in my home country of Singapore, learn what was going on and also pick up other skills such as Figma for UI/UX mockup design. Doing research was interesting as I get to see how my country of Singapore built up its network connectivity rapidly for its general population. 


## Research and UI/UX Design
While researching and compiling various resources, I also wanted to do the mockup of the frontend of my website so I decided to use Figma for this case. As I have not worked on Figma before, I ventured to some youtube channels to get a firm grasp and good understanding of how it works. Once I got an idea of how it works, I set out to work on the first draft of my mockup pages on the laptop with all the details inside. After that, I decided to continue on and work on the mobile version. Using the Chrome Devtools, I decided to work with parameters from Samsung Galaxy 20 Ultra that were given by dev tools as it was slightly larger compared to the other ones there and if it fit them, it should fit the other devices with a few tweaks as per the requirements of the rubrics. 

Once I have done the first draft of mockups, I sought my family for feedback and what I could improve to make it more visually appealing, intuitively easy to use and accessible. Some commented that I should add a footer and add some underlines on the dates, description of image and the links header to have a clear separation between the headers and the items for better clarity. In addition, centering some of the parts would be ideal as there was quite a huge space on the right side that made it look jarring so centering some items would give a more balanced nuance to it. This gave me a better idea of how to do my next design of mockups.

## Feedback and Refinement
After getting the feedback on my mockup design on figma, I decided to start with doing the headers as I can easily replicate across the board but also changing and refining the routes to the various pages. I had to research a bit using stack overflow and css tutorial pages to get an idea of how to use css to get the desired output that I wanted which required chaining together various css to get the desired output. This required playing with parameters such as margins, paddings, border, displays and many more. It took some getting used to but after a while I slowly started to get the hang of it. After doing that, I added the footers to all the pages to get all the replicable items done. 


## Tech Stack Choice
I had to decide what tech stack I would use as the requirements stated that I needed a templating engine instead of just using pure HTML and CSS to write out my frontend templates. After some research, I decided to settle on EJS (Embedded Javascript) as it would be very compatible with Express JS which I needed for my local API as there are currently no websites where I can call to pull the data that I require. After settling on a tech stack, I had to go through the node documentation (insert reference) before installing it as it is a package manager for us to install our Express, EJS (insert reference), CORs to allow calls from all endpoints and fs to read files such as local JSON files to our repository.

## Setting up the App
To scaffold the app, I had to deal with the app.js and the routes that I needed to do and the data that I needed to display. I worked on the various routes that required the res.render to render the EJS templates and to add the necessary libraries such . However, for the API, I needed to create a local file with the necessary JSON data which is properly formatted that I needed to display at my frontend instead of calling a server outside to fetch my data. I ensured that I used the fs read file function to call the file and parse it as JSON while including error catches to allow me to debug and catch exceptions to see if there were any further issues. Once I consoled log multiple times to ensure that I was going in the right direction, I called the endpoint and see if I could get the necessary JSON data that I wanted and I did which is quite elating.

## Home Page
Once I have settled the routes and the API, I decided to focus on the home page and to paste all the necessary images to display on the home page. Adding an old photo and getting a modern photo would be a good contrast to show on the home page of Singapore’s transformation in terms of how the internet was being done. I had to play around with more html and css to get the size and proportions to the ones that I did in my mockup which was not easy as I had to factor in the header, footer and the paragraphs to ensure that it looked presentable. Settling the CSS layouts will enable me to replicate it over all the other pages such as the headers and the footers with the general layout that I can use. The CSS documentation and stack overflow came in handy for me to reference and search the styles that I required.


## History Page
As the home page was being completed, I decided to create and replicate the header and footers on the other pages to give it the layout for later and also amended the routing to fit the various pages. This part was slightly tricky as I had to reference the EJS documentation and youtube to find out how to loop through the JSON fields via foreach and attain the values for me to display on the page.

## References:
- https://expressjs.com/en/starter/installing.html 
- https://expressjs.com/en/guide/routing.html
- https://medium.com/chaya-thilakumara/how-to-create-a-local-api-server-rest-api-for-testing-945bbb2d31b7
- https://www.freecodecamp.org/news/make-api-calls-in-javascript/
- https://developer.mozilla.org/en-US/docs/Web/CSS