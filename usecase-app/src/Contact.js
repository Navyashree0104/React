import React, { useEffect, useState } from "react";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000); // 2-second delay
  }, []);

  if (!loaded) {
    return <div>Loading contact page...</div>;
  }

  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is the contact page.</p>
    </div>
  );
};

export default Contact;
