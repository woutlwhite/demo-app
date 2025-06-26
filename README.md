# Demo App with JSX, SCSS, Routing, CSS Effects, Barrierefreiheit, Sticky Scrolling, Language & Theme Switcher

## What do to after cloning:

```
# install all dependencies: use-local-storage, node-sass, ...
npm i
# start app
npm start
```

## Road Map of Tasks/Modules

001: Theme Switcher<br>
002: Change of component on scroll  <br>
003: ...<br>
...

## 001: Adding Theme Switcher to App
To keep our settings saved on refresh, we need to install local-storage to have easier access to the browser's local storage. <br>
This is not mandatory, we could also set and get data the old-fashioned way.

Note: This is already done for you when you did "npm i(nstall)"
```
npm i use-local-storage
```

Then, we need to add custom HTML attributes to the elements we wanna change in color.
This is done with "data-" followed by your custom name for this attribute.

```
<div className='App' data-theme='light'>
```
