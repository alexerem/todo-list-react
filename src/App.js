import React from 'react';
import {Layout} from './hoc/Layout/Layout';
import {AuthState} from "./context/auth/AuthState";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <AuthState>
          <BrowserRouter>
             <Layout />
          </BrowserRouter>
      </AuthState>
  );
}

export default App;
