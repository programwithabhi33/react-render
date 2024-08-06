import { useState } from "react"
import Counter from "./components/Counter";
import ParentRender from "./components/ParentRender";

useState
function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h2>React Render</h2>
      {/* <h3>{number}</h3>
      <button onClick={_=> setNumber(number+1)}>Number</button>
      <Counter/> */}
      <ParentRender/>
    </>
  )
}

export default App
