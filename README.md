# Alicundetest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Project Structure

The project structure is organized as follows:
+---app
|   +---core
|   +---domains
|   |   +---load-profiles
|   |   |   +---components
|   |   |   |   \---form.component
|   |   |   |   \---table.component
|   |   |   +---pages
|   |   |   |   \---load-profile.page
|   |   |   |   
|   |   +---shared
|   |   |   +---components
|   |   |   |   +---layout
|   |   |   +---directives
|   |   |   +---models
|   |   |   +---pipes
|   |   |   +---services
\---assets


- **app**: Contains the main application code.
  - **core**: Contains core modules, services, and utilities used across the application.
  - **domains**: Contains domain-specific modules.
    - **load-profiles**: Contains modules, components, and pages related to load profiles.
      - **components**: Contains Angular components related to load profiles. (dumb components)
        - **form.component**: Component for handling form input related to load profiles.
        - **table.component**: Component for displaying load profiles data in a table format.
      - **pages**: Contains Angular pages related to load profiles. (smart components)
        - **load-profile.page**: Page component for displaying load profiles data.
  - **shared**: Contains shared modules, components, directives, models, pipes, and services used across different domains.


## Components

The project includes various Angular components that serve different purposes within the application. Some of the key components include:

- **Form Component**: Handles form input related to load profiles.
- **Table Component**: Displays load profiles data in a tabular format.




