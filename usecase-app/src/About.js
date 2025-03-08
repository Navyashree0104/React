import React, { useEffect, useState } from "react";

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000); // 2-second delay
  }, []);

  if (!loaded) {
    return <div>Loading about page...</div>;
  }

  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;
