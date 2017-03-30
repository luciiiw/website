# UW Blueprint Website

This repository contains the landing page for UW Blueprint. It can be accessed at [https://uwblueprint.org](https://uwblueprint.org) and is hosted on Firebase.

## Prerequisites
* `Node.js - 6.10`
* `@angular/cli - 1.0.0+`
* `firebase-tools - 3.1.0+`

Once you have `Node.js` installed, run:

```bash
npm install -g @angular/cli
npm install -g firebase-tools
```

## Development Environment
Here are the instructions to get the development environment up and running.

Clone the repository:

```bash
git clone https://github.com/uwblueprint/website.git
```

Navigate to the `website` directory:

```bash
cd website
```

Install required packages:

```bash
npm install
```

Run the server:

```bash
ng serve
```

### Setting up secrets
Since this project is meant to be shared with other potential chapters of Blueprint, we keep our secrets separate from the repository.

Within the `src/configs` directory, create a file called `secrets.ts` with the contents: 

```javascript
export const SECRETS = {
  FIREBASE: {
    API_KEY: 'XXX',
    AUTH_DOMAIN: 'XXX',
    DATABASE_URL: 'XXX',
    STORAGE_BUCKET: 'XXX',
    MESSAGING_SENDER_ID: 'XXX'
  }
}
```

To obtain the API key, either log in to the Firebase console and find it under "Project Settings" or ask one of the team members.

Please **do not** push credentials and secrets to this repository!

## Development Process

The development process that we follow is a relatively simple process.

1. Checkout a new branch off of branch `dev`. The new branch should have a name of `feature/<description>` with a hyphen-separated description (e.g. `feature/new-feature`).
2. Do development on local development environment on the new feature branch.
3. Test changes on local development environment.
4. Commit and push your new change and issue a pull request to branch `dev`. 
5. Have someone review your change and merge the change into branch `dev`.
6. Test changes on the staging site.
7. Issue a pull request to branch `master` from `dev`.
8. Merge changes to `master`.

Notice that there was no need to manually deploy the site during any of these steps. The site has continuous integration set up using CircleCI. More details on that are below.

## Deployment

Currently, the project is set up with continuous integration through CircleCI. 

* For the time being, the dev or staging site is deployed when a new commit is pushed to the `dev` branch. The build script `build/dev.sh` will be executed. 
* The production site is deployed when a new commit is pushed to the `master` branch. The build script `build/prod.sh` will be executed.

There is a slight hack in the build scripts where the `firebase` package is installed manually and then `firebase.d.ts` is removed from the package to avoid errors caused by duplicate identifiers.

The `firebase` package needs to be installed as the project does not compile without it on CircleCI's instances. This is still under investgation.  

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
