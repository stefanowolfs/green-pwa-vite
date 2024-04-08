# Green UP

This project is a case study to improve my skills with front-end and PWA in general. It will be a finance software for budgeting and tracking expenses that can be installed and store locally.

## Why use it?

In this way, you will have an all your expenses stored on-the-go whether it be on a supermarket, gas station, shopping... The idea is to give the user an ease way to keep track of all expenses quickly so that he can have a full end of month report about how his money was spent/invested and help take better decisions on months to come.

## Why PWA?

There are many reasons. Mainly the ability to work offline, since the user will be on-the-go and most of the time not having access to Wi-Fi he will still be able to use the app. The size and load times are reduced because the app is stored locally on the user device, as well as being able to receive push notifications for a future feature we might want to implement.

## Local development

For feature and UI/UX development, we can run normally with `npm run dev` but for testing as a PWA installation we need to run these other commands:

```bash
npm run build
npm run preview
```

## Deploy

This front-end pwa app is currently being deployed on my [Github Pages](https://stefanowolfs.github.io/green-pwa-vite/). To upload the files there Im currently using `gh-pages` that manages all the branching and deployment.

```bash
# First we need to update all the PWA imagery and manifest files:
npm run generate-pwa-assets

# Then we need to build everything:
npm run predeploy

# Finally we can make use of gh-pages to upload it:
npm run deploy
```
