import React, { useState } from "react";

export default function LikeButton() {
  const [like, setLike] = useState(false);

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <h4 onClick={() => setLike((prevState) => !prevState)}>
        {like ? "\u2764" : "\u2661"}
      </h4>
    </div>
  );
}
