import React, { useRef, useState } from "react";

export const UseRefExample2 = () => {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const focus = () => {
    if(inputRef && inputRef.current){
      inputRef.current.focus();
    }
  }

  return (
    <>
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>my name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}