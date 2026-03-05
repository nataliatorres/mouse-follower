import { useState } from 'react'
import FollowMouse from './components/FollowMouse'
import NavBar from './components/NavBar'

function App () {
  const [mounted, setMounted] = useState(true)

  return (
    <>
      <NavBar/>
      <main className='flex flex-col gap-[10px]'>
        <h1>useEffect & useState hooks for a mouse follower</h1>
        {mounted && <FollowMouse />}
        <button onClick={() => setMounted(!mounted)}>Toggle the component</button>
      </main>
    </>
  )
}

export default App
