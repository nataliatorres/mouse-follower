import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const NavBar = () => {
  return (
    <header className=' w-full top-0 sticky border-solid z-20 bg-[#4F5030]'>
      <div className='max-w-300 mx-auto flex items-center justify-between gap-4 duration-200 px-8 py-3'>
        <a className='flex text-center font-medium sm:text-lg' href='https://nataliatorres.github.io/'>
          <FontAwesomeIcon icon='fa-solid fa-house' className='fa-2x' />
        </a>
      </div>
    </header>
  )
}

export default NavBar
