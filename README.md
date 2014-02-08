# Tazz

Deployable zero-configuration prototyping stack for designers.

![](res/14-02-08.png)

## Features

Start protyping your app instantly with the L.E.A.R.N.™ Stack

- [Local Storage](https://en.wikipedia.org/wiki/LocalStorage#localStorage)
- Einhörner
- [AngularJS](http://angularjs.org/)
- [RemoteStorage](http://remotestorage.io/)
- [Node](http://nodejs.org/)

Supports by default

- [Sass](http://sass-lang.com/)
- [Jade](http://jade-lang.com/)
- [CoffeeScript](http://coffeescript.org/)
- or vanilla HTML/CSS/JS

Sugar:
- [LiveReload](http://livereload.com/)
- Growing library of UI goodies so you can focus on how-it-works

(Note: remoteStorage not yet implemented in Tazz, but will be "soon".)

## Use

Needs [node.js](http://nodejs.org/), [Bower](http://bower.io/) and [Grunt CLI](http://gruntjs.com/getting-started#installing-the-cli). Bower *needs* [Git](http://git-scm.com/) and [Sass](http://sass-lang.com/) needs [Ruby](https://www.ruby-lang.org/en/).

    $ git clone git@github.com:filtercake/tazz.git my_new_prototype
    $ cd my_new_prototype
    $ npm install
    $ bower install
    $ grunt

You should then be able to look at the compiled page at <http://localhost:3000/>.

## Deploy

### To Github Pages

The most straightforward way is to init a new repo with a gh-pages branch in the `build` directory. So *after* creating the new repo `my_new_prototype` on Github, do

    $ cd build
    $ git init
    $ git add -A
    $ git commit -m "init"
    $ git remote add origin git@github.com:your_github_username/my_new_prototype.git
    $ git push -u origin gh-pages

Your app should then be reachable at `your_github_username.github.io/my_new_prototype`.

See [the GitHub Pages documentation](http://pages.github.com/) for more info.

### To 5Apps

For a more feature rich deployment you should consider [5apps](https://5apps.com/deploy/home). 5Apps are comparable to what [Heroku](https://www.heroku.com/) or [Nodejitsu](https://www.nodejitsu.com/) do – but exclusively for frontend-only apps. Which is what the LEARN-stack is all about.

First you need to create and configure an account at [5apps](https://5apps.com/deploy/home). They have a dedicated [Deployment Quick Start Guide](http://help.5apps.com/kb/deploy/quick-start-guide).

And to make it all full circle they have also launched a [remoteStorage based Service](https://5apps.com/storage).

## Contribute

All input on how stuff could be done better/easier/simpler is welcome, just dump an issue.

There is also a [board at waffle.io](https://waffle.io/filtercake/tazz): [![Stories in Ready](https://badge.waffle.io/filtercake/tazz.png?label=ready)](https://waffle.io/filtercake/tazz)
