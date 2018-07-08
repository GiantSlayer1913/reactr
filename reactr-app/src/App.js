import React, { Component } from "react";
// import { AwesomeButton } from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';
// import logo from './logo.svg';
import './App.css';
import Form from './form.js';

// injectTapEventPlugin()

class App extends Component {
  state = {
    fields: {}
  }

  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    })
  }


  render() {

    const title = "Welcome to Reactr App";

    return (
      // <MultiThemeProvider>
        <div className="App">
          <h1>{title}</h1>
          <Form onChange={fields => this.onChange(fields)}/>
            <p>{JSON.stringify(this.state.fields, null, 2)}
            </p>
        </div>
      // </MultiThemeProvider>

      );
    }
  }

export default App;
