# Road Trip History

## Description

"Road Trip History" is a web application for managing and documenting road trips. It allows users to add, view, and delete trips, and provides a feature to get directions between departure and destination points using Google Maps. This application is built as a Progressive Web App (PWA) with offline capabilities using IndexedDB for local storage.

## Features

- Add new trips with origin, destination, and date details.
- View a list of recorded trips in a table format.
- Delete trips from the list (🗑️).
- Get directions on Google Maps for the route between the departure and destination points (🗺️).
- Offline functionality via Progressive Web App (PWA) features.

## Technologies

- **HTML**: Structure of the web page.
- **CSS**: Styling with Pico CSS.
- **JavaScript**: Application logic and interaction.
- **Dexie.js**: IndexedDB wrapper for easy database management.
- **Progressive Web App (PWA)**: Offline support and installation capabilities.

## Project Structure

- `index.html`: Main HTML file with the form and table for trips.
- `main.js`: JavaScript file handling application logic for managing trips.
- `helpers/database.js`: Initializes and configures the IndexedDB database using Dexie.js.
- `helpers/repository-db.js`: Contains functions to add, retrieve, and delete trips from the IndexedDB.
- `manifest.json`: Manifest file for PWA configuration.

## Installation

To get started with the project:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/road-trip-history.git
   cd road-trip-history

## Acknowledgements
- [Dexie.js](https://dexie.org/) for IndexedDB management.
- [Pico CSS](https://picocss.com/) for styling.
- [Google Maps API](https://www.google.com.br/maps) for directions functionality.