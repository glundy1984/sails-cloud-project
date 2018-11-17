# Gerry's Notes

a [Sails v1](https://sailsjs.com) application

### About

This project is a basic CRUD notes app based on the Sails seed app.

Sails was chosen because it is a full-stack javascript framework, providing client-side, server-side and ORM components.
It will be deployed to the various Cloud platforms.

Sails uses the following libraries and components:

+ [Bootstrap 4](http://getbootstrap.com/docs/4.0/getting-started/introduction/) - Front-end component library
+ [Font Awesome 4](http://fontawesome.io/icons/) - Icons
+ [Vue.js](https://vuejs.org/) - Front-end framework
+ [parasails.js](https://npmjs.com/package/parasails) - Thin layer of bundled conventions for using Vue.js with Sails.js
+ cloud.js - Dynamically-generated SDK for handling requests from the front-end to the actions in your Sails app
+ [Mailgun](https://www.mailgun.com/) - Emails
+ [Stripe](https://stripe.com/docs) - Payments (Removed)

### Sails Introduction

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)

### Help

##### Controller Actions

When a new controller action is added, the app's custom SDK must be rebuilt using:

`sails run scripts/rebuild-cloud-sdk`

##### Heroku Deployment

In your [Heroku dashboard](https://dashboard.heroku.com), configure your app to auto-deploy from the `deploy` branch of this project's GitHub repository. Then, from the command line, run `sails run deploy`.

### Version info

This app was originally generated on Sun Sep 23 2018 20:06:03 GMT+0100 (British Summer Time) using Sails v1.0.2.

