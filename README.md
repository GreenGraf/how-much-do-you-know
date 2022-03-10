# How Much Linux Do You Know?

Multiple choice quiz game for Linux nerds.

Take a Look [Here](https://greengraf.github.io/how-much-do-you-know/)

<br>

![Am I Responsive](assets/images/responsive.JPG)

## Portfolio Project 2

Linux is one of the most popular operating systems in the world and is especially popular amongst programmers and IT professionals. It's free, open-source, and highly customizable. Even though there is a bit of a learning curve with it, once you're familiar with its basic operations, you'll find it hard to go back to Windows or iOS.

### Purpose

This is an easy quiz designed to test the knowledge of newbie Linux users. Hopefully it will encourage users to explore Linux in more detail.

<br> 

## User Experience Design

### Strategy 

#### User Stories

* As a website visitor I want to:
    * Intuatively know what the website is for.
    * Easily navigate to where I want.

* As a potential challenger I want to:
    * Understand the rules.
    * Understand what the quiz is about.

* As someone who is already interested in going here I want to:
    * Start the game quickly.
    * Check my high scores.

* As a website developer I want to:
    * Create a minimal quiz experience.
    * Offer the user intuitive feedback.
    * create a challengin and fun quiz for novice Linux enthusiasts.

### Scope

#### What features are planned
* Start page, with instructions.
* Randomly generated questions from a quiz API.
* Option to input the user's name at the end of the game so they can store their score locally.
* A page for locally stored high scores.
* Users should get instant feedback on choices and results without any confusion.
#### Structure
* Three pages:
    * Title page
    * Game page
    * End page 
    * High scores page
#### Skeleton 
<br> 

![Homepage](assets/images/home.JPG)

#### Surface
The idea behind the aesthetic of the game is to elicit a feeling of old-school technology by using carefully chosen font and a minimalist design.

##### Color Theme

![colortheme](assets/images/color-palette.JPG)

* #FF6900 was going to be the primary color — it's the same color that Code Institute uses — but it didn't feel in harmony with the other colors and with what I wanted to achieve.
* The primary color, #AF4657, is a pastele red. Red signifies excitement or danger. I want to induce a certain amount of anxiety in the user.
* The secondary color, #B6BFCB, is a soft grey that's meant to compliment the red.
* The main font color is #F3F8F3. Is a warm white that's meant to improve the accessibility of some text and the buttons.
* #211E24 is the chosen color for the background of the website. I wanted a dark theme to induce a sense of mystery and as a nod to old-school terminals. I chose a warm black as opposed to pure black to ease the strain on the user's eyes. 

##### Typography

I decided to go with Courier 

To pair with the serif font, the site will use a more modern looking sans-serif font for paragraphs. Montserrat is the chosen font here. 

## Existing Features

* Navigation Bar

    * The navigation bar is on all three pages. On smaller screens, it collapses into a hamburger menu. This was achieved through pure CSS. The CSS was found on [here](https://dev.to/ljcdev/hamburger-css-no-js-2dfa) and copied. It has been edited to suit the design of this website.
    * The navigation bar has links to the homepage, visit page, and contact page. The logo, KNP, also acts as a homepage button.

![Navbar](assets/screenshots/Main-navbar.JPG)

<br>

* Hero Section
    * The hero section, with its striking image and cover text, is designed to immediately get the attention of the user and briefly describe the function of the website.

<br>

![Hero Section](assets/screenshots/hero-section.JPG)

<br>

* Social Proof
    * The purpose of this section is to instill trust in KNP. Having mainstream brands, who feature and rate KNP highly, makes KNP aspirational and will confirm to the user that it's a reliable and popular location. 
    * Positioning it directly beneath the hero section will quickly negate any hesitation the user might have, and convince them to explore the website further.

![social proof](assets/screenshots/social-proof.JPG)

* Activities Section

    * This section is designed to showcase what you can do in the park with images and text. 

![Activities](assets/screenshots/activities-cards.JPG)   

<br>

* Quote Section
    * The aim of the quote section is to create an emotional response and connection with the user.
    * Having an original voice of a previous visitor gives the site more authenticity.
    * It could make it easier for the user to imagine themselves there.

![Quote](assets/screenshots/social-proof-card.JPG)  

* Footer 
    * The footer section — which is on every page — acts as a consistant area that gives the most important information for getting in touch with the park.
    * This section also has social media icons so users can keep up with all that's going on at the park.

![Footer](assets/screenshots/footer.JPG) 

* Visit Us Section
    * This section describes some of the key attractions at the park.
    * High-quality images suppliment the descriptive text, in order to whet the users appitite for visiting the park. 

![Visit](assets/screenshots/visit-cards.JPG) 

* Contact Page
    * The sole purpose of this page is to allow the user to easilly get in touch with the park.
    * The user will need to enter a first name, email, and message to trigger a positive response from the submit button. The user is not required to enter their second name, but can do so if they choose.

![Contact](assets/screenshots/contact-page.JPG)

### Features Left to Implement 
* Seperate pages for the most significant parts of the park which describes them in further detail.
* Maps of park trails that visitors can take whe they get there. 

## Technologies Used

* The project was written in HTML and CSS.
* The project used Code Institute's [Gitpod Template](https://github.com/Code-Institute-Org/gitpod-full-template) 
* Github was used for hosting, utilising git version control, and for hosting the site on GitHub pages.
* [Google Fonts](https://fonts.google.com/) for fonts.
* [Gitpod](https://gitpod.io/) was used to write and test the code. 
* [Font Awesome](https://fontawesome.com/) was used as a resource for free icons.
* [Adobe Color](https://color.adobe.com) was used to generate a color theme.
* [Adobe Photoshop](https://www.adobe.com/ie/products/photoshop.html) was used to resize and crop images.
* [TinyPNG](https://tinypng.com/) was used to compress images.
* **Testing tools are credited and mentioned in the next section**

## Testing

The website was deployed and tested on the most common screen sizes, down to 320px. As I was testing it, I noticed positioning errors here and there, but the vast majority of them have been fixed. The only areas where there are still issues are on the contact page, where the contents of the contact form appear to be offset to the right of the form. Unfortunately, I didn't have time to fix this but I will attempt to fix it at a later date. Apart from that, the only other responsiveness issue that I came across was the line height spacing in the footer, between the "Email Us" section and the "Call Us" section. This only occurs on the Visit page and the Contact page. It does not occur on the Index page. I'm not sure why this is happening but I didn't have time to figure it out. Again, I will attempt to remedy this at a later date.

Thankfully, after a lot of back and forth, I managed to get the hamburger menu working — styled and positioned appropriately. It also appears at an appropriate break-point, as expected.

### Validator Testing

* HTML
    * No errors occured after auditing every page with the official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgreengraf.github.io%2Fkillarney-national-park%2Findex.html)
* CSS
    * No errors occured after auditing every page with the official [(Jigsaw) Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgreengraf.github.io%2Fkillarney-national-park%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

#### Lighthouse — Dev Tools

* I used Lighthouse to test my sites accessability and it received a very good score on desktop and mobile.

![desktop](assets/screenshots/lighthouse-desktop.JPG) 

* While accessability on mobile was great, performance could improve. After a look through the details, I realised that two of the images could be reduced in size. I will implement this at a later date as it's not inside the scope of this particular project.

![desktop](assets/screenshots/lighthouse-mobile.JPG) 

 #### WAVE

 * I also tested the site with [WAVE](https://wave.webaim.org/) and found some accessibility alerts which I easilly fixed.

![WAVE](assets/screenshots/wave.JPG)   

## Deployment

* The site was deployed to GitHub pages. The steps to deploy are as follows:
    * In the GitHub repository, navigate to the Settings tab
    * From the source section drop-down menu, select the Master Branch
    * Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

There is a link to the live site at the begining of this README.md but for convienience I'll paste the full link here: https://greengraf.github.io/killarney-national-park/

## Clone and Fork

### Clone 

* In Github, click on the project that you wish to clone.
* Click the clipboard icon to copy the URL.
* The fork will now be in your repository.
* Open a new terminal.
* Change the current working directory to the location that you want the cloned directory.
* Type 'git clone' and paste the URL copied in step 2.
* Press 'Enter' to clone the project.

### Fork

* In Github, click on the project that you wish to fork.
* Click on the 'Fork' button at the top right of the page.
* The fork is now in your repository.

## Credits

I like to say a massive "Thank You" to my mentor, Ben Kavanagh. He's a fantastic motivator and extremely helpful. Also a big thanks to all the helpful people in the Slack community!

### Code

* HTML and CSS tips from [Mozilla](https://developer.mozilla.org) developer documentation.
* HTML and CSS tips from [CSS Tricks](https://css-tricks.com/).
* HTML and CSS tips from [Stack Overflow](https://stackoverflow.com/).
* HTML and CSS tips from [W3Schools](https://www.w3schools.com/).

### Content

* The icons used in the footer are from [Font Awesome](https://fontawesome.com/)
* The favicon was generated using [Favicon.io](https://favicon.io/favicon-generator/)
* The hamburger menu was created originally by https://dev.to/ljcdev/hamburger-css-no-js-2dfa
* The navbar styles were helped by this YouTube video: https://www.youtube.com/watch?v=W-nIX17Gg-Q&t=97s&ab_channel=AngelaDelise
* The code for the block quote was taken from here: https://codepen.io/cliftwalker/pen/XJaEXY
* This post on Stack Overflow helped me with responsiveness: https://stackoverflow.com/questions/61150660/how-to-make-image-responsive-in-flexbox-with-set-width
* My inspiration for the footer came from this design: https://www.awwwards.com/inspiration/niarra-travel-footer

### Media

* The photos of the bike were the kayak were downloaded from [Pexels](https://www.pexels.com/) from [Daniel Frank](https://www.pexels.com/@fr3nks?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) and [Lisa Fotios](https://www.pexels.com/@fotios-photos?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) respectively
* The image of the boat was taken from here: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.viator.com%2Fen-IE%2Ftours%2FKillarney%2FBOAT-ON-LAKES-OF-KILLARNEY-AND-NATIONAL-PARK%2Fd911-3544P7&psig=AOvVaw1iZN_W6uHkQmhLBgvlhkD4&ust=1642785295412000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjUk6nqwPUCFQAAAAAdAAAAABAI
* All other images used are my own.



