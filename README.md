# Pokedex Search

## Overview
This is a Pokedex themed application that allows for searching of all Pokemon that are provided within the Pokemon API. 
([Pokemon API Docs](https://pokeapi.co/docs/v2))


## Steps to Running Application

Ensure that the latest stable version of **Node.js** is installed on your machine as npm is required to run the application and retrieve necessary dependencies.

After cloning, open a terminal and navigate to the base project directory and run:

### `npm install`

This command ensures that all dependencies needed to run the application are loaded, and any missing dependencies or packages will be installed via the npm package manager.

After all packages and dependencies have been loaded run:
### `npm run dev`

Runs the app in the development mode.\
The terminal will print out the localhost address: 
"**http//localhost:{portNumber}**"
 You then can browse to this address from any local web browser and begin searching for Pokemon.

## Future Updates

- Given more time I would implement functionality to traverse the evolution tree.
- Add more automated testing beyond business logic
- Update the UI to include basic Pokemon stat displays
## Concurent Environment Update

- Some changes I would make for this application to be optimized for concurrent development:
		- While I made a component based design my priority, I believe this could be even further expanded within the application. This would not only help optimize the application for concurrent development but also increase code reusability. 