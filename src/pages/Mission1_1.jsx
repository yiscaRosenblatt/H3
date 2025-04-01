import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function Mission1_1() {
  const backgroundRef = useRef();
  const [color, setColor] = useState("")

  useEffect(() => {
    checkLocal();
  }, []);

  const checkLocal = () => {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
      setColor(JSON.parse(savedColor));
  }
}

  const onSaveClick = () => {
    const selectedColor = backgroundRef.current.value;
    setColor(selectedColor);
    localStorage.setItem("backgroundColor", JSON.stringify(selectedColor));  
  }






  return (
<div className='container' style={{ backgroundColor: color }}>
      
      <h2>Your color:{color}</h2>
      <input ref={backgroundRef} type="text" />
      <button onClick={onSaveClick}>Save</button>
    </div>  )
}
