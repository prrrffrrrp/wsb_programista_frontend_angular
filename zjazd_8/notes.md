# Intro to Angular

## Create an angular project
`npx @angular/cli new angular-training --commit --minimal --prefix wsb --skip-tests --style css --routing`

## angular.json

### We can add css styles by adding the **relative** path to the custom minimized css to the "styles" key.
ex:
- `npm i bulma`
- Go to __node_modules/bulma/css/bulma.min.css__
- Copy the relative paths into the angular.json patnode_modules/bulma/css/bulma.min.css

### Generate modules, components...

The module generated is called __sandwich__
`npm run ng generate module sandwich`
`npm run ng generate component sandwich/sandwich-form --module=sandwich --exports`
`npm run ng generate service sandwich/sandwich --module=sandwich`
