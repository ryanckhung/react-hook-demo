// useState and useEffect let you use state and other React features without writing a class.
// shortcut for to create the functional component in VSCode is rfc

import React, { useState, useEffect } from "react";

export default function Hook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // [count2] tell the useEeffect to execute whenever count2 is updated
  useEffect(() => {
    document.getElementById("message1").innerHTML = `You clicked counter ${count1} times`;
    document.getElementById("message2").innerHTML = `You clicked counter ${count2} times`;
  }, [count2]);

  return (
    <div>
      <p>Count: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <button onClick={() => setCount1(0)}>Reset</button>
      <div id="message1"></div>

      <p>Count1: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      <button onClick={() => setCount2(0)}>Reset</button>
      <div id="message2"></div>
    </div>
  );
}
