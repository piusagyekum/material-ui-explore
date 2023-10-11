import { useState } from "react"
import Create from "./pages/create"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Create />
    </>
  )
}

export default App
