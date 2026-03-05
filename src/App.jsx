import { useState } from 'react'
import FollowMouse from './components/FollowMouse'

function App () {
  const [mounted, setMounted] = useState(true)
  return (
    <main className='flex flex-col gap-[10px]'>
      <h1>useEffect & useState hooks for a mouse follower</h1>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>Toggle the component mount</button>
    </main>
  )
}

export default App
