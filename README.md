# WebForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

Angular 2 offers two form-building technologies: reactive forms and template-driven forms. The example below leverages reactive forms which creates forms in a reactive style. Reactive forms facilitate a reactive style of programming which favors the management of data flowing between a non-ui data model and a UI-oriented form model. It retains the states and values of the HTML controls on the screen. With reactive forms, a tree of Angular Form control objects are created in the component class and binded to the native form control elements in the component template. 

In order to run the application please go to project directory and run `npm run install`. Once this is complete please follow instructions on how to run the development server. A working demo of the application can be seen here: 

http://recordit.co/v2jCGbDlX5

## Essential form classes
Form Control: Tracks the value and validity status of an individual form control. It corresponds to an HTML form control such as an input box or selector.

Form Group: Tracks the value and validity state of a group of AbstractControl instances. The group's properties include its child controls. The top-level form in your component is a FormGroup.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
