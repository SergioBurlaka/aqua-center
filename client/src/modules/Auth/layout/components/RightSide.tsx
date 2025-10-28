import { FC } from 'react';

import leftGirl from '@shared/assets/auth/leftGirl.png';
import rightBoy from '@shared/assets/auth/rightBoy.png';

const RightSide: FC = () => {
  return (
    <div className="relative h-full w-full">
      <img src={leftGirl} alt="" className=" absolute top-1/2 w-1/2 -translate-y-1/2 translate-x-1/2" />
      <img src={rightBoy} alt="" className=" absolute right-0 top-1/2 w-1/2 -translate-y-1/2 translate-x-1/2" />
    </div>
  );
};
export default RightSide;
