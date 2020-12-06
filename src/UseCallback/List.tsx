import React, { useEffect, useState } from "react";

export const List = ({getItems}: any) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
    
  }, [getItems]);

  return (
    <>
      {items.map(item => <div key={item}>{item}</div>)}
    </>
  );
}