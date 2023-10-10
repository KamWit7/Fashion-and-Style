import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <div className='flex justify-start items-center'>
        <Link className='p-4' to='.'>
          Logo
        </Link>
        <Link className='p-4' to='products'>
          Products
        </Link>
      </div>
      <div className='flex justify-end items-center flex-row'>
        <Link className='p-4' to='basket'>
          Basket
        </Link>
        <Link className='p-4' to='profile'>
          <span className='font-montserrat text-xl font-bold'>Profile</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
