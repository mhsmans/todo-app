import React from "react";
import "./App.css";

import RootLayout from "./layout/RootLayout";

// Initial data
const initialGlobalState = {
  idCount: 6,
  todos: [
    {
      id: 1,
      title: "Cleaning the house",
      completed: true
    },
    {
      id: 2,
      title: "Prepare dinner",
      completed: false
    },
    {
      id: 3,
      title: "Walking the dog",
      completed: false
    },
    {
      id: 4,
      title: "Watch Netflix",
      completed: true
    },
    {
      id: 5,
      title: "Grocery shopping",
      completed: false
    }
  ]
};

// Create a Context for the (global) State
const GlobalState = React.createContext();

class Global extends React.Component {
  constructor(props) {
    super(props);

    // Set the initial (global) State
    this.state = {
      globals: initialGlobalState || {}
    };
  }

  // Expose the setGlobals function to the Globals object
  componentDidMount() {
    GlobalState.set = this.setGlobalState;
  }

  setGlobalState = (data = {}) => {
    const { globals } = this.state;

    // Loop over the data items by key, only updating those which have changed
    Object.keys(data).forEach(key => {
      globals[key] = data[key];
    });

    // Update the state with the new State
    this.setState(globals);
  };

  render() {
    const { globals } = this.state;
    const { Root } = this.props;

    return (
      // Pass the current value of GlobalState, based on this components' State, down
      <GlobalState.Provider value={globals}>
        <Root />
      </GlobalState.Provider>
    );
  }
}

export default function App() {
  // Note: within the Root function we can return any Component (not just SomeComponent, but also a Router for instance)
  return <Global Root={() => <RootLayout />} />;
}

// Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
window.GlobalState = GlobalState;
