# NjB Site Template

This is a template for an app working with NjB framework.

### Paths
- core/
  - apps/ --- React apps go here
  - page/ --- Pages pug and js files
  - script/ --- Clientside script go here
  - styl/ --- Stylus files go here
- [njb/ (repository)](https://github.com/Hlkz/njb)
- data/ --- Public folder
  - build/ --- Babel script and styl files go here
- build/ --- Babel app build goes here

### Dependency
- package.json
- .babelrc
- .nodemonignore
- server.js
- core/script/main-site.js
- data/img/favicon.ico

### Installation

Clone the site template, the framework.
Then install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/Hlkz/njb-template.git
cd njb-template
git clone https://github.com/Hlkz/njb.git
cd ..
npm i
```

TODO: Standardize MySQL installation.

### Run - Development
```sh
npm start
```

### Run - Production
```sh
npm run build
npm run server
```

### License
MIT
