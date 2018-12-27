import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Connect } from "aws-amplify-react";
import { graphqlOperation } from "aws-amplify";
import { createBlog } from "./graphql/mutations";
import { Form } from "./Form";
import { Blogs } from "./Blogs";

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Connect mutation={graphqlOperation(createBlog)}>
          {({ mutation }) => (
            <Form
              onSubmit={async input => {
                const response = await mutation({
                  input
                });
                console.log(response);
              }}
            />
          )}
        </Connect>
        <Blogs />
      </div>
    );
  }
}

export default App;
