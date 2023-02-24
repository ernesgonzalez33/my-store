# MyStore

Store for the My Store project for the Udacity Full Stack JavaScript Developer Nanodegree.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Description of the project

The architecture of the project is the following:

- App Routing Module: Handles the routing of the entire application.
- App Module
    - Components
        - Nav-bar: Navigation bar for the store.
    - Models
        - Product: Product object for all the items of the store. It has the following attributes: id, name, price, quantity, description, and url.
    - Services
        - Shopping-cart: Service that manages the communication between the Storefront and the Shopping Cart.
- Shopping Cart Module
    - Components
        - Cart: Handles the rendering of the shopping cart.
        - Cart-item: Handles the rendering of each item of the shopping cart.
        - Checkout-form: Handles the rendering of the checkout form.
        - Success: Handles the rendering of the Success component.
- Store Front Module
    - Components
        - Product: Handles the rendering of each product in the list.
        - Product-list: Handles the rendering of the entire product list.
        - Product-view: Handles the rendering of just one product when clicking on the image in the product list.
    - Services
        - Item: Get the items from the JSON file in assets.
        - Product-view: Handle the communication between the product-list and product-view components.

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
