import React, { useEffect, useRef, useState } from "react";

export const UseRefExample1 = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(0);

  useEffect(()=>{
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>my name is {name}</div>
  <div>I rendered {renderCount.current} times</div>
    </>
  );
}