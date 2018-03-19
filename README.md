#WDI--fourth-project

###Goal: To create a full-stack React application that has Mongo database using the Mongoose ORM.

###My app:

* Has 2 models with embedded relationship.
* Has authentication - with hashed passwords & authorisation flow.
* Has complete RESTful routes with all CRUD actions.
* Semantically clean HTML
* Deployed online and is accessible to the public on Heroku.

###Technologies used:
* JavaScript (ECMAScript 6)
* HTML5
* Express
* React
* Node.js
* CSS & SCSS
* MongoDB
* Webpack
* Git
* Heroku

###Dependencies used:
* Axios
* bcrypt
* body-parser
* classnames
* font-awesome
* jsdom
* jsonwebtoken
* moment
* mongoose
* morgan
* react-dom
* react-router-dom
* react-youtube
* youtube-thumbnail
* babel

###Secondary tools

* Balsamiq
* Trello

##Overview 
It's a ProductHunt but for dance videos. Users can see the most popular videos from the last 10 days sorted from the most to the least
upvoted video that day. Users can also create an account, submit their dance videos, delete them and upvote other dancers videos.

###App screenshots
####Homepage for guest:
<a href="https://imgur.com/x6ajQv9"><img src="https://i.imgur.com/x6ajQv9.png" title="source: imgur.com" /></a>
####Homeopage for logged in user:
<a href="https://imgur.com/YD6yU5k"><img src="https://i.imgur.com/YD6yU5k.png" title="source: imgur.com" /></a>
####Profile:
<a href="https://imgur.com/7NH379O"><img src="https://i.imgur.com/7NH379O.png" title="source: imgur.com" /></a>
####Video player:
<a href="https://imgur.com/wK0z0m0"><img src="https://i.imgur.com/wK0z0m0.png" title="source: imgur.com" /></a>
####One of the forms:
<a href="https://imgur.com/8ZYYZxC"><img src="https://i.imgur.com/8ZYYZxC.png" title="source: imgur.com" /></a>

##Visit game
View on [Github] (https://github.com/RadvileDid/WDI--fourth-project) or 
[Heroku] (https://young-caverns-80823.herokuapp.com/)

##Process

###Research, Concepts and wireframes
To build this game I have researched industry for inspiration and to ensure I will meet all the requirements I have chosen one to wireframe it for development.

Here are final low fidelity wireframes that I come up: 
<a href="https://imgur.com/V3X7ZLG"><img src="https://i.imgur.com/V3X7ZLG.png" title="source: imgur.com" /></a>

###Development

Before I have started to code, I have planned out the app layout structure, the different routes, functions and models this app will need. This way I saved time.

During development of the game I have faced a challenge because I wanted to group all the video results found by days they were added and only return the last 10 days results. Then, I wanted to sort them by the highest amount of votes. Below you can see a code snippet from the Back-End where such results are being found.
<a href="https://imgur.com/SveG5kq"><img src="https://i.imgur.com/SveG5kq.png" title="source: imgur.com" /></a>

Firstly, the time now and the time 10 days ago is calculated so we could find results only within the 10 days range and for each new date a group is created (with a title of that date which I am later formatting with MomentJs in Front-End). Then, videos are sorted from the most upvotes to the least and only 5 resuts for each day are being returned.