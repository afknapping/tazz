# Stemcell

Goal: deployable zero-configuration prototyping stack for designers.

## Features:

### Todo:

- Angular example / default controller and init
- [Font Awesome](http://fontawesome.io/) / [❍ IcoMoon](http://icomoon.io/)
- ? [normalize](http://necolas.github.io/normalize.css/)
- typography basics (maybe [Typeplate](http://typeplate.com/)?)
    - fontstack
- basic layout defaults (margins, paddings)
- basic interface elements
    - ? [necolas/css3-github-buttons](https://github.com/necolas/css3-github-buttons)
- foldout footer with design guide: colors, elements, styles, etc...
- Config / Meta .json
- LocalStorage
    - import/export json
- run on [Hoodie](http://hood.ie/) / as hoodie plugin?
- [CouchDB](https://couchdb.apache.org/)
    - ? default (admin) user
- markdown support (for what?)
- content (i18n?)
- testing: unit, integration, design regression
- onboarding defaults
- inline usertesting


### Done

- √ Sass
- √ Jade
- √ Coffeescript
- √ copy plain js files to build
- √ JSHint
- X CSSLint (not for now)
- √ Require
- √ Bower
- √ Angular
- √ [Colors](http://clrs.cc/)
- √ clean app.js called from index.js

## Fix me

- copy raw css and html files should they exist
- find nicer name
- √ copy whole bower directory to build, so bower libs do not have to be handled in two places (only require, no copy via grunt)
