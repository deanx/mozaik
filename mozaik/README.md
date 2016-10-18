#Mozaïk demo dashboards

[![Travis CI][travis-image]][travis-url]

This repository shows how to use Mozaïk with npm extensions.

## Installation

### Clone the repo

```bash
git clone https://github.com/deanx/mozaik
```

### Install packages

```bash
cd mozaik
npm install
```

### Publish assets (js/css)

```bash
gulp build
```

### Add github and open weather map tokens in a `.env` file

You should use the `.env.sample` file provided with this repo,
just rename it to `.env` and put in your own credentials.


### Run the app

```bash
node app.js
```


