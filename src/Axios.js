import React, { useState, useEffect } from 'react';



function Example() {


  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);
  
  let reset = () => setCount(0);

  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   {`You clicked ${count} times`}
  // });

  return (
    <div>
      <p>Count= {count} </p>
      <button onClick={() => increment()}>
        increment
      </button> &nbsp; &nbsp;
      <button onClick={() => decrement()}>
        Decrement 
      </button>&nbsp; &nbsp;
      <button onClick={() => reset()}>
        Reset 
      </button>
    </div>
  );
}


export default Example;