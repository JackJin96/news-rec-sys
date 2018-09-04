## Development Installation

### Creact-react-app
```
sudo npm install -g create-react-app
create-react-app tap-news
npm start
```

### Materialize CSS
```
npm install --save materialize-css
```

### Lodash
```
npm install lodash
```

## Development Notes:
If using Bootstrap, need to have JQuery.
JQuery is not well supported in React, so we need to inject it in html using script tag.
Go to code.jquery.com, under JQuery 3.x, choose `slim minified` and copy the script code to `App.js`.