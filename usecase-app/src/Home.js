import React, { Suspense, useState } from "react";
import { useTheme } from "./ThemeContext";

const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <button onClick={() => setShowAbout(true)}>Load About</button>
      <button onClick={() => setShowContact(true)}>Load Contact</button>

      {showAbout && (
        <Suspense fallback={<div>Loading about section...</div>}>
          <About />
        </Suspense>
      )}

      {showContact && (
        <Suspense fallback={<div>Loading contact section...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

export default Home;
