# node-serve-static
Serve route from static site using NodeJS.

## Background Story
More and more websites are using static sites, especially since ReactJS, VueJS, Angular and some other libraries or frameworks are beginning to dominate the market. 

Not many service managers support to serve routers from static sites. Inspired by [Netlify Redirect](https://www.netlify.com/docs/redirects/), created the same system and easy to configure, this is the beginning of this project.

## Before using Node-Serve-Static 
![Before](http://res.cloudinary.com/dhjkktmal/image/upload/v1522460235/github/Screen_Shot_2018-03-31_at_08.35.49.png)

Failed render page, and return 404.

## After using Node-Serve-Static
![After](http://res.cloudinary.com/dhjkktmal/image/upload/v1522460315/github/Screen_Shot_2018-03-31_at_08.38.16.png)

Success render page and return 200.

## How to Use
First setup dan build your static site, and make sure it's worked. back to the Node-Serve-Static, open `server.js`, and set your static site path
```
const DIR_STATIC = __dirname + '/sample_site'; 
```
You can use booth relative or absolute directory. Run it via
```
yarn start
```
or
```
npm start
```

