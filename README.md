# WTWR React App

This project is a React + Vite implementation of a weather-aware wardrobe app. It displays current weather data, shows a clothing gallery, and lets users open modals to preview garments or start adding new ones.

Live site:
https://shreyas-chigurupati07.github.io/se_project_react/

## Features

- Fetches current weather data from the OpenWeather API
- Displays the current city and temperature in the UI
- Shows a weather card with decorative weather imagery
- Renders a list of clothing items
- Opens an item preview modal when a clothing card is clicked
- Opens an "Add garment" modal from the header
- Includes weather-type radio button selection for new garments

## Tech Stack

- React 18
- Vite 5
- JavaScript (ES modules)
- CSS
- OpenWeather API

## Project Structure

Key folders and files:

- `src/components` contains the UI components
- `src/utils/constants.js` stores static data, coordinates, and the API key
- `src/utils/weatherApi.js` handles weather fetching and response formatting
- `src/assets` contains icons and images used throughout the app

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint across the project
- `npm run deploy` deploys the built app to GitHub Pages

## Weather API

This project uses the OpenWeather Current Weather endpoint to retrieve live weather data based on configured coordinates.

The current setup reads:

- coordinates from `src/utils/constants.js`
- API access through `src/utils/weatherApi.js`

If you plan to publish or share this project more broadly, move the API key out of source code and into environment variables.

## Deployment

The app is configured for GitHub Pages deployment using the `gh-pages` package.

Deploy command:

```bash
npm run deploy
```

## Future Improvements

- Persist user-added clothing items
- Filter clothing items automatically by current weather type
- Add form validation and submission handling
- Improve responsive layout behavior across screen sizes
- Add loading and error states for the weather request
