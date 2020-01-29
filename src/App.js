import React, { useState } from "react";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Row from "./components/Row";
import { employees } from "./Employees";
import "./App.css";


export default function App() {

  const [sorted, setSorted] = useState("ID");
  const [filtered, setFiltered] = useState("false");

  return (
    <div className="container">
     <h1 className="App">EMPLOYEE DIRECTORY</h1>
     <Sort onChange={handleSortOnChange} />
     <Filter onChange={handleFilterCheck} />
     <Table />
     {render()}
    </div>
  );

  function handleSortOnChange(value) { 
    setSorted(value) 
  }

  
  function handleFilterCheck(checked) { 
    return checked ? setFiltered(true) : setFiltered(false) 
  }

  
  function render() {
    if (sorted === "ID") {
      if (filtered) 
      return filter()
      else return sort("ID");
    }
    if (sorted === "NAME") {
      if (filtered) 
      return filter()
      else return sort("NAME");
    }
  }

  
  function filter() {
    let filteredArray;
    filteredArray = employees.filter(e => e.role.toLocaleLowerCase().search("Server") >= 0);
    return filteredArray.map(emp => 
    <Row 
    id={employees.id} 
    key={employees.id} 
    name={employees.name} 
    role={employees.role} 
    email={employees.email} 
    />
    );
  }

  function sort(sorted) {
    let sortedArray = [];
    switch (sorted) {
      case "NAME":
        sortedArray = employees.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        break;
      case "ID":
        sortedArray = employees.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        break;
      default:
    }
    return sortedArray.map(emp => 
    <Row 
    id={employees.id} 
    key={employees.id} 
    name={employees.name} 
    email={employees.email} 
    />
    );
  }
}


