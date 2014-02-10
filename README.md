# Tazz

Deployable zero-configuration prototyping stack.

![](res/14-02-08.png)

See this live at [filtercake.com/tazz-deploy-test/](http://filtercake.com/tazz-deploy-test/).

## Features

- Instant prototyping win with [AngularJS](http://angularjs.org/)
- No database, just [Local Storage](https://en.wikipedia.org/wiki/LocalStorage#localStorage)
- Can thus be deployed like any static website
- no minifying, compressing or similar optimization

Supports by default:

- [Sass](http://sass-lang.com/)
- [Jade](http://jade-lang.com/)
- [CoffeeScript](http://coffeescript.org/)
- or vanilla HTML/CSS/JS

Sugar:
- [LiveReload](http://livereload.com/)
- Growing library of UI goodies so you can focus on how-it-works

## Use

Needs [node.js](http://nodejs.org/), [Bower](http://bower.io/) and [Grunt CLI](http://gruntjs.com/getting-started#installing-the-cli).

[Sass](http://sass-lang.com/) needs [Ruby](https://www.ruby-lang.org/en/). node-sass with libsass exists, but they have no support for the indented syntax.

    $ git clone git@github.com:filtercake/tazz.git my_new_prototype
    $ cd my_new_prototype
    $ npm install
    $ bower install
    $ bundle install # needed for Sass Gem
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

## Contribute

All input on how stuff could be done better/easier/simpler is welcome, just dump an issue.

There is also a [board at waffle.io](https://waffle.io/filtercake/tazz): [![Stories in Ready](https://badge.waffle.io/filtercake/tazz.png?label=ready)](https://waffle.io/filtercake/tazz)
