import React from "react";

function Article(props) {
  let min = props.minutes
  
  const interval = min < 30 ? 5 : 10
  const emoji = min < 30 ? "☕️" : "🍱" 
  let emojis = ""
  for (let i = 0; i < min; i += interval){
    emojis += emoji
  }

  
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date || "January 1, 1970"}
        <span> {emojis} {min} min read</span>
      </small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;