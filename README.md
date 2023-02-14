# The Phone Market

The Phone Market is a project that consists of two views: Product List and Product Details.

## Product List View

The Product List View displays a list of product cards that include information about the brand, model, price, and an image.

## Product Details View

The Product Details View displays a detailed view of a chosen product. 
It includes three components: a large image of the product, a description that shows all the relevant info about the product, and an actions box, where users can choose the color and model of the product before adding it to the shopping cart.

## Relevant Information

The product list is retrieved by calling an API REST and is configured to retrieve the data on load and persist it. If the app is running for enough time, the list will be refreshed every hour to ensure the data is up to date. This is managed by a React Context, as well as the item count inside the shopping cart component.

For the details page, I used `react-router-dom` to get the product ID from the navigation bar. This is done to allow users to go to a specific URL if they already know the ID. Using context for the product ID worked well, but it didn't cover this particular use case.

## Components

- Breadcrumbs: This component manages the navigation bar URL and extracts the path the user is following so that they can undo their steps around the app. I added some functions to show the user the name of the product instead of the ID.

- Card: This element contains every product on the product list. It shows the brand, model, price, and image. Also, it redirects users to the details page of the product if they click on it.

- Header: This fixed element appears throughout the app. It contains a logo that redirects users to the main page when clicked, the previously mentioned breadcrumbs, and a shopping cart component that shows how many items the user has added to the cart.

- Loading Spinner: This basic component shows before the data is rendered.

- Product Actions: This component allows users to choose between colors and storage options and then add the product to the shopping cart.

- Product Description: This component shows all the relevant information about the product.

- Shopping Cart: This component shows how many items the user has already added to the shopping cart.

- Searchbar: This component allows users to find a product or products that match the brand or model with the text given to the input. It works with a custom hook (`useDebounceValue`) that prevents searches for every word inputted if the user is typing quickly. After 250ms of not inputting more text, it will show the results. When clicking on a result, the user will be redirected to the details page of that specific product.

## Styles

### Styles are managed with SCSS, following the BEM + ITCSS architecture.


## Features to Add

- Test coverage: I've tried to develop following TDD but faced several issues while configuring the context and the Axios request into the Jest tests. That's the main reason why the app still doesn't have test coverage. They are still working on it.
- Modal for shopping cart: I plan to add a modal to display more information about the products added to the shopping cart, not just the item count.
- Lazy loading of product list images: I've found some workarounds but wants to use as few libraries as possible, so this feature is still in development.

## Deployed App

The app is deployed at [https://the-phone-market.netlify.app/](https://the-phone-market.netlify.app/).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Launches Lint, analyzing code for potential errors.

