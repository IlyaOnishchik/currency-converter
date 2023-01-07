import Logo from './Logo'
import Actions from './Actions/Actions'

const Header = () => {
  return (
    <header>
      <div className='container py-2'>
        <div className='flex justify-between'>
          <Logo/>
          <Actions/>
        </div>
      </div>
    </header>
  )
}

export default Header