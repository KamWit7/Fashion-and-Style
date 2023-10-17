import { Link } from 'react-router-dom';
import { Text } from '@components';
import { AiOutlineHeart, AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from '@src/assets/Logo';
import { cnJoin } from '@utils/cn';

const Header = () => {
  return (
    <header>
      <div className="hidden items-center justify-between md:flex">
        <div className="flex items-center justify-between space-x-4">
          <Link to=".">
            <Logo />
          </Link>
          <div className="flex gap-6 p-6">
            <Link to="products">
              <Text variant="b2">Products</Text>
            </Link>
            <Link to="products">
              <Text variant="b2">Best Sellers</Text>
            </Link>
            <Link to="products">
              <Text variant="b2">Modiweek</Text>
            </Link>
          </div>
        </div>
        <div className="flex h-full justify-end gap-4 ">
          <AiOutlineSearch size={24} />
          <Link to="favorite">
            <AiOutlineHeart size={24} />
          </Link>
          <Link to="basket">
            <AiOutlineShopping size={24} />
          </Link>
          <Link to="profile">
            <BsPerson size={24} />
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className={cnJoin('md:hidden', 'flex h-full items-center justify-between px-4')}>
        <div className="flex gap-4">
          <GiHamburgerMenu size={24} />
          <AiOutlineSearch size={24} />
        </div>
        <Link to=".">
          <Logo />
        </Link>

        <div className="flex justify-end gap-4">
          <Link to="favorite">
            <AiOutlineHeart size={24} />
          </Link>
          <Link to="basket">
            <AiOutlineShopping size={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
