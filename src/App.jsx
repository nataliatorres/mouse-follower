import { useEffect, useState } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('Efecto ', { enabled })
  }, [enabled])

  return (
    <main>
      <div className='w-12.5 h-12.5 absolute bg-[#09f] rounded-full opacity-[0.8] pointer-events-none -left-6.25 -top-6.25 translate-x-0 translate-y-0'></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Stop following ' : 'Start following '} me!
      </button>
    </main>
  )
}

export default App
