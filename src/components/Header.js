import React, {useState} from "react";


function Header({videoData}){
  const [upVotes, setUpVotes] = useState(videoData.upvotes);
  const [downVotes, setDownVotes] = useState(videoData.downvotes)

  function handleCountUp(){
    setUpVotes(upVotes + 1);
  }

  function handleCountDown(){
    setDownVotes(downVotes - 1);
  }

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{videoData.title}</h1>
      <p>{videoData.views} | Uploaded {videoData.createdAt}</p>
      <div>
        <button onClick={handleCountUp}>{upVotes}👍</button>
        <button onClick={handleCountDown}>{downVotes}👎</button>
      </div>
    </div>
  )
}


export default Header;