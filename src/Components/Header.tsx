import { Link } from 'react-router-dom'
import { Text } from '@components'
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineSearch,
} from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

import Logo from '@src/assets/Logo'
import { cnJoin } from '@utils/cn'

const Header = () => {
  return (
    <header>
      <div className='hidden md:flex justify-between items-center'>
        <div className='flex justify-between items-center space-x-4'>
          <Link to='.'>
            <Logo />
          </Link>
          <div className='flex gap-6 p-6'>
            <Link to='products'>
              <Text variant='b2'>Products</Text>
            </Link>
            <Link to='products'>
              <Text variant='b2'>Best Sellers</Text>
            </Link>
            <Link to='products'>
              <Text variant='b2'>Modiweek</Text>
            </Link>
          </div>
        </div>
        <div className='flex gap-4 h-full justify-end '>
          <AiOutlineSearch size={24} />
          <Link to='favorite'>
            <AiOutlineHeart size={24} />
          </Link>
          <Link to='basket'>
            <AiOutlineShopping size={24} />
          </Link>
          <Link to='profile'>
            <BsPerson size={24} />
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={cnJoin(
          'md:hidden',
          'flex justify-between items-center h-full px-4'
        )}>
        <div className='flex gap-4'>
          <GiHamburgerMenu size={24} />
          <AiOutlineSearch size={24} />
        </div>
        <Link to='.'>
          <Logo />
        </Link>

        <div className='flex gap-4 justify-end'>
          <Link to='favorite'>
            <AiOutlineHeart size={24} />
          </Link>
          <Link to='basket'>
            <AiOutlineShopping size={24} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
