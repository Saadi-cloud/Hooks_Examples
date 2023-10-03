import React, { useState } from 'react';
import Data from './Api';
// import './Filter.css'; // Import your CSS file

export default function Filter() {
  const [filteredData, setFilteredData] = useState(Data);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [del, setDel] = useState();

  const showData = (name) => {
    const filtered = Data.filter((item) => {
      return item.Name === name;
    });
    setFilteredData(filtered);
    setSelectedPerson(name);
  };

  const deleteData = (id) => {
    const filtereddel = Data.filter(item => item.id !== id);
    setDel(filtereddel);
    };
    
    
  

  return (
    <div>
      <h1>Details</h1>

      {Data.map((item) => (
        <div
          key={item.Name}
          className={`data-item ${selectedPerson === item.Name ? 'active' : ''}`}
        >
          <p>My Name is: {item.Name}</p>
          <p>My age is: {item.Age}</p>
          <p>My Address is: {item.Address}</p>
          <p>My Country Name is: {item.Country}</p>
          <button onClick={() => deleteData(item.id)}>Delete</button>
        </div>
      ))}
      <button onClick={() => showData('Saad')}>Saad Info</button>
      <button onClick={() => showData('Sohail')}>Sohail Info</button>
      <button onClick={() => showData('Qaisar')}>Qaisar Info</button>

    </div>
  );
}
