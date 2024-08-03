import { useState } from "react";
import SnippetList from "./Components/SnippetList";
import "./App.css";

function App() {
  const [snippets, setSnippets] = useState([
    { id: 1, title: "Snippet 1", description: "Description for snippet 1" },
    { id: 2, title: "Snippet 2", description: "Description for snippet 2" },
  ]);

  return (
    <div>
      <h1>React Snippets Web3</h1>
      <SnippetList snippets={snippets} />
    </div>
  );
}

export default App;
