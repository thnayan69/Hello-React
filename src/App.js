import React, {Component} from 'react';
import Login from './components/common/Login';
import AuthContextProvider from './contexts/AuthContext';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <AuthContextProvider>
          <Login></Login>
        </AuthContextProvider>
    );
  }
}
