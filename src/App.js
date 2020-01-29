import React, { useState} from "react";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Row from "./components/Row";
import { employees } from "./Employees";




export default function App() {
  const [sort, setSort] = useState("id");
  const [filter, setFilter] = useState("false");

  return (
    <div>
     <h1 className="App">EMPLOYEE DIRECTORY</h1>
     <Sort onChange={handleSortOnChange} />
     <Filter onChange={handleFilterCheck} />
     <Table />
    </div>
  );

  function handleSortOnChange(value) { setSort(value) }

  
  function handleFilterCheck(checked) { return checked ? setFilter(true) : setFilter(false) }

  
  function conditionalRender() {
    if (sort === "id") {
      if (filter) return filtered()
      else return sorted("id");
    }
    if (sort === "name") {
      if (filter) return filtered()
      else return sorted("name");
    }
    if (sort === "dept") {
      if (filter) return filtered()
      else return sorted("dept");
    }
  }

  
  function filtered() {
    let filteredArray;
    filteredArray = employees.filtered(e => e.role.toLocaleLowerCase().search("server") >= 0);
    return filteredArray.map(emp => <Row id={emp.id} key={emp.id} name={emp.name} role={emp.role} dept={emp.dept} email={emp.email} />);
  }

  function sorted(sort) {
    let sortedArray = [];
    switch (sort) {
      case "name":
        sortedArray = employees.sorted((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        break;
      case "id":
        sortedArray = employees.sorted((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        break;
      case "dept":
        sortedArray = employees.sorted((a, b) => (a.dept > b.dept) ? 1 : ((b.dept > a.dept) ? -1 : 0));
        break;
      default:
    }
    return sortedArray.map(emp => <Row id={emp.id} key={emp.id} name={emp.name} role={emp.role} dept={emp.dept} email={emp.email} />);
  }
}


