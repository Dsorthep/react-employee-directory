import React from "react";
import App from ".App.css";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Row from "./components/Row";


export default function App() {
  const [sort, setSort] = useState("id");
  const [filter, setFilter] = useState("false");

  return (
    <div className="App">
     <h1>EMPLOYEE DIRECTORY</h1>
     <Sort onChange={} />
     <Filter onChange={} />
    </div>
  );
}

export default App;
