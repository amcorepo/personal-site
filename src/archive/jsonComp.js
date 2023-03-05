import React, { useState } from 'react';
import data from '../data.json';

const myData = data.employees;
console.log(myData);
function MyComponent() { 
  const [jsonData, setJsonData] = useState(myData);
  return (
    <div>
      <ul>
        {myData.map((item, index) => (
          <li key={index}>{item.name}, {item.position}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;