import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const flowerData = {
  1: {
    name: "Tulip",
    quote: "Under the sun's gentle gaze, the tulip teaches us to face our light, embracing growth with every phase.",
    image: "/tulip.jpg", // Correct relative path from the public folder
  },
  2: {
    name: "Sunflower",
    quote: "Despite knowing they won't be here for long, they still choose to live their brightest lives — sunflowers-Rupi Kaur.",
    image: "/sunflower.jpg", // Correct relative path from the public folder
  },
};

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(flowerData[id]);
  }, [id]);

  if (!post) {
    return <div className="error-text">🌿 Post Not Found</div>;
  }

  return (
    <div className="post-container">
      <h1>{post.name}</h1>
      <img src={post.image} alt={post.name} className="flower-image" />
      <p className="quote">"{post.quote}"</p>
    </div>
  );
};

export default Post;
