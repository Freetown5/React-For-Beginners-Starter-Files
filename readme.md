# React For Beginners — REFACTORED!!
Forked a version of this so that I could mess around with file structure and component organization (It tends to matter in the long run)

## Why Refactored?
While working through the course, I noticed that the components in the project hadn't been organized. Although this isn't a big deal for smaller projects, it can become a time consuming problem over time since a lack of organization can make it difficult for developers to find files and figure out how they relate to the UI itself. This particular project is organized in this order:

- By route (NewStore, StorePicker)
- Blocks in the App (ex. Inventory, MenuItems, Order)
- Subcomponents within Blocks (MenuItemSubComponents)

In the best circumstances, this would make it easier to navigate the App. Some possible future updates could include renaming files to make them more semantic etc.

## Original Versions

Original Videos here: [Website](https://ReactForBeginners.com)

Original Repository here: [Repository](https://github.com/wesbos/React-For-Beginners-Starter-Files)

## To run project
1. `cd` into `catch-of-the-day` and follow along with the videos
2. `npm run dev` in the root of the project

## Changes In the 2018 RE-Record (Copyied from the original Repo )

In March 2018 I re-recorded this course. Here are the things that I've updated.

* Upgrade to React Router 4 Final API
* Use React 16.3
* Move to external PropTypes Package
* Use React's new Refs API, remove function refs
* Remove all use of constructors and super() - use class properties instead
* Better explain binding, use of `this` and component instances
* Moved from React-addons-css-transition-group to react-transition-group and upgraded from 1.x to 2.x
* Use official Firebase package for Auth as re-base is now only for data binding
* Move promise based code to async/await
* Show how to return multiple elements with React.Fragment

## htaccess

Here is the .htaccess file we use in the apache deployment video

```
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```
