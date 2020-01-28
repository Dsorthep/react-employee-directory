import React from "react";
import Sort from "./components/Sort";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Row from "./components/Row";


export default function App() {
  const [sort, setSort] = useState("ID");
  const [filter, setFilter] = useState("false");

  return (
    <div className="App">
     <h1>EMPLOYEE DIRECTORY</h1>
     <Sort onChange={handleSortOnChange} />
     <Filter onChange={handleFilterCheck} />
     <Table />
    </div>
  );

  function handleSortOnChange(value) { setSort(value) }

  
  function handleFilterCheck(checked) { return checked ? setFilter(true) : setFilter(false) }

  
  function conditionalRender() {
    if (sort === "ID") {
      if (filter) return filtered()
      else return sorted("ID");
    }
    if (sort === "NAME") {
      if (filter) return filtered()
      else return sorted("NAME");
    }
    if (sort === "DEPT") {
      if (filter) return filtered()
      else return sorted("DEPT");
    }
  }

  
  function filtered() {
    let filteredArray;
    filteredArray = employees.filtered(e => e.role.toLocaleLowerCase().search("MANAGER") >= 0);
    return filteredArray.map(emp => <TableRow id={emp.id} key={emp.id} name={emp.name} role={emp.role} department={emp.department} email={emp.email} />);
  }

  function sorted(sort) {
    let sortedArray = [];
    switch (sort) {
      case "NAME":
        sortedArray = employees.sorted((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        break;
      case "ID":
        sortedArray = employees.sorted((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        break;
      case "DEPT":
        sortedArray = employees.sorted((a, b) => (a.department > b.department) ? 1 : ((b.department > a.department) ? -1 : 0));
        break;
      default:
    }
    return sortedArray.map(emp => <TableRow id={emp.id} key={emp.id} name={emp.name} role={emp.role} department={emp.department} email={emp.email} />);
  }
}


