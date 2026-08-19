import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bear from "./assets/bear.jpg";
function App() {
  const style = {
    border: "1px solid black",
    height: "120vh",
  };
  return (
    <div>
      <div style={style}></div>
      <LazyLoadImage src={bear} width={600} height={400} alt="Image Alt" />
    </div> 
  );
}

export default App;
