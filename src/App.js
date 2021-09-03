import React from 'react';
import {Layout} from './hoc/Layout/Layout';
import {AuthState} from "./context/auth/AuthState";

function App() {
  return (
      <AuthState>
          <Layout />
      </AuthState>
  );
}

export default App;
