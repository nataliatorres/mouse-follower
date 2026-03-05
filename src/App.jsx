import { useState } from 'react'
import FollowMouse from './components/FollowMouse'
import NavBar from './components/NavBar'
import './App.css'

function App () {
  const [mounted, setMounted] = useState(true)

  return (
    <>
      <NavBar/>
      <main>
        <section className='w-105 flex flex-col gap-2.5 py-5'>
          <h1>useEffect & useState hooks for a mouse follower</h1>
          {mounted && <FollowMouse />}
          <button onClick={() => setMounted(!mounted)}>Toggle the component</button>
        </section>
      </main>
    </>
  )
}

export default App
