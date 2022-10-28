import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { RouterConfig } from "./navigation/RouterConfig";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
