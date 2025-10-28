import { FC } from 'react';

import { ProductLogo } from '@components/general/ProductLogo';

const Header: FC = () => {
  return (
    <header className=" border-b border-slate-400 py-5">
      <div className="container mx-auto flex items-center">
        <div className="w-1/5">
          <ProductLogo />
        </div>
      </div>
    </header>
  );
};
export default Header;
