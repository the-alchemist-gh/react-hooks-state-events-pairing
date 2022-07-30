import React from "react";
import video from "../data/video.js";
import Comments from "./Comments";
import Header from "./Header"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Header videoData={video} />
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
