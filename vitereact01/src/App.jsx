import { useState } from 'react'


function App() {
 
  let [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {if(setCount>0)setCount(count - 1)};
  const reset = () => setCount(0);


  return (
    <>
     <button onClick={increment}>Increment{count}</button>
      <button onClick={decrement}>Decrement{count}</button>
      <button onClick={reset}>Reset{count}</button>
    </>
  )
}

export default App