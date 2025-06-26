# Demo App with React, JS & SCSS

## Create React App with Sass:

```
npx create-react-app demo-app
cd demo-app
npm i sass
```

### Start React App
```
npm start
```

## Adding Theme Switcher to App
First, we need to install local-storage to have easier access to the browser's local storage. <br>
This is not mandatory, we could also set and get data the old-fashioned way.

Note that we have scss variables for colors defined in _variables.scss.

```
npm i use-local-storage
```

Then, we need to add custom HTML attributes to the elements we wanna change in color.
This is done with "data-" followed by your custom name for this attribute.

```
<div className='App' data-theme='light'>
```



## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)