// import { useState } from 'react'


import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://192.168.1.13:3000/get')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            {/* Display relevant data from each item */}
            {item.name} - {item.age} - {item.work} 
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default MyComponent;



// function App() {
 
//   let [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const decrement = () => {if(setCount>0)setCount(count - 1)};
//   const reset = () => setCount(0);


//   return (
//     <>
//      <button onClick={increment}>Increment{count}</button>
//       <button onClick={decrement}>Decrement{count}</button>
//       <button onClick={reset}>Reset{count}</button>
//     </>
//   )
// }

export default App