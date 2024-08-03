import React from "react";


const SnippetList = ({snippets}) => {
return (
    <div>
    {snippets.map(snippet => (
      <div key={snippet.id}>
        <h3>{snippet.title}</h3>
        <p>{snippet.description}</p>
      </div>
    ))}
  </div>
)
}

export default SnippetList;