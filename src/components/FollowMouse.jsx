import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Moving pointer
  useEffect(() => {
    const handleMovingPointer = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMovingPointer)
    }

    return () => {
      window.removeEventListener('pointermove', handleMovingPointer)
    }
  }, [enabled])

  // Remove the cursor
  useEffect(() => {
    document.body.classList.toggle('remove-cursor', enabled)

    return () => {
      document.body.classList.remove('remove-cursor')
    }
  }, [enabled])

  return (
    <>
      <div
        className='w-[40px] h-10.5 absolute pointer-events-none -left-1 -top-6.25 text-[40px]'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >🍀
      </div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Stop following ' : 'Start following '} me
      </button>
    </>
  )
}

export default FollowMouse
