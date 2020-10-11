import React, { useEffect, useRef, useState } from "react";

export const UseRefExample3 = () => {
  const [name, setName] = useState('');
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name
  }, [name]);

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>my name is {name} and it used to be {prevName.current}</div>
    </>
  );
}