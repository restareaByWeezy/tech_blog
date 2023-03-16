import { ReactNode, useState } from 'react';

import { CarretDownIcon, CarretRightIcon } from '@/assets/svgs';

import Loader from '../Lottie/Loader';

interface CollapseProps {
  renderer: ReactNode;
  isLoading: boolean;
}

const Collapse = ({ renderer, isLoading }: CollapseProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  return (
    <div>
      <div>title</div>
      <div onClick={handleClick}>
        {open ? (
          isLoading ? (
            <Loader />
          ) : (
            <CarretRightIcon />
          )
        ) : (
          <CarretDownIcon />
        )}
      </div>
      {open && !isLoading && renderer}
    </div>
  );
};

export default Collapse;
