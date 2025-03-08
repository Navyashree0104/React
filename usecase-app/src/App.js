import React, { Suspense } from "react";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";
import "./styles.css";  // Import CSS file

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
