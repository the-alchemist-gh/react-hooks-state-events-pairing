import React,{useState} from "react";


function Comments({comments}){
  const [btnClick, setBtnClick] = useState(true);

  function handleComment(){
    setBtnClick(btnClick=>!btnClick)
  }

  return (
    <div>
      <button onClick={handleComment}>{btnClick ? "Hide" : "Show"} Comments</button>
      <h2>{comments.length} Comments</h2>
      
      {
        btnClick ? (
        comments.map(comment=>
          <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </div>
        )
        ) : null
      }
      
    </div>

  )
}


export default Comments;