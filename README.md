# Project

This calculator app is built with React Hooks. It uses the [mathjs](https://www.npmjs.com/package/mathjs) package to evaluate math expressions that the user enters.

# Installation

## npm

```
cd calculator
npm install
npm start
```

## yarn

```
cd calculator
yarn install
yarn start
```

# Hosting on gh-pages

## npm

1. In `master` branch,
```
npm install --save gh-pages
```

2. In `package.json`:
    - Add this new key-value pair: <br />
    `"homepage": "https://USER-NAME.github.io/REPO-NAME"`
    - Under the `"scripts"` key, add this new key-value pair: <br />
`"deploy": "npm run build && gh-pages -d build"`

3. In `master` branch, 
```
npm run deploy
```
This will create a new branch named `gh-pages` on GitHub, which will contain the files required for hosting your site.

4. Follow [these instructions](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) to configure GitHub pages to publish the site source files from the `gh-pages` branch.

5. As you keep developing, run `npm run deploy` in the `master` branch to keep updating the source files on the `gh-pages` branch.

## yarn

1. In `master` branch,
```
yarn add gh-pages
```

2. In `package.json`:
    - Add this new key-value pair: <br />
    `"homepage": "https://USER-NAME.github.io/REPO-NAME"`
    - Under the `"scripts"` key, add this new key-value pair: <br />
`"deploy": "yarn run build && gh-pages -d build"`

3. In `master` branch, 
```
yarn run deploy
```
This will create a new branch named `gh-pages` on GitHub, which will contain the files required for hosting your site.

4. Follow [these instructions](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) to configure GitHub pages to publish the site source files from the `gh-pages` branch.

5. As you keep developing, run `yarn run deploy` in the `master` branch to keep updating the source files on the `gh-pages` branch.
