# 🚀 Moonshot Calendar

You can see where rockets will launch on a map with this application. It is possible to filter them by date, and if you click on an individual launch, you can see more information. This information includes the agencies involved and the date on which the launch will take place.

### Completed User Stories:

- ✅ As a user, when I open the app, I want to see all the launches for the next 3 months, plotted on a map or globe.
- ✅ As a user, I want to be able to select a start date and an end date so I can filter the launches according to my selection.
- ✅ As a user, I want to be able to select a point on the map and see the name, time of launch, name of the launch pad and the agencies that are collaborating on the launch.
- ✅ As a user, I want to receive feedback when the app is loading so that I know that when I change something in the UI, something is being loaded
- ✅ As a user, I want to receive feedback when the app encounters an error in reaching the API.

### If I had more time, I would like to add or modify:

- More testing to find any bugs in my application
- Work on the user interface and user experience of the application.
- To avoid unnecessary re-executions, I'd like to wrap some of my functions in `useCallback` and `useMemo`.
- Complete the first upcoming launch in order to make it functional

### Tech stack:

- React
- TypeScript
- Redux => Handling Global State
- Redux-thunk => Handling Side Effects
- React-bootstrap => Styling and Pre-ready components
- Styled-components => Custom Styling
- Jest => Testing
- Axios => Sending HTTP Request

## Running Locally

Run the project locally using `npm`


```bash
  npm install && npm start
```


## Running Tests

To run tests, run the following command


```bash
  npm run test
```


## Demo

This is a demonstration of an application that will show you how it works!
![Quin app](/demo.gif)
