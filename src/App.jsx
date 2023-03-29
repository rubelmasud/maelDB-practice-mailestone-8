import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-2xl text-center text-red-800'>this is header</h1>
      <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button>
      <button class="btn btn-error">Error</button>
    </div>
  )
}

export default App
