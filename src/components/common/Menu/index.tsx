import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import Text from '../Text/Text';

interface MenuProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: string;
  url: string;
  linkStyle?: string;
  textStyle?: string;
}

const Menu = ({ textStyle, linkStyle, text, url }: MenuProps) => {
  return (
    <Link className={linkStyle} to={url}>
      {/* <Image width={24} height={24} src={icon} alt="menu" /> */}
      <Text className={textStyle} weight="semiBold" size="h4">
        {text}
      </Text>
    </Link>
  );
};

export default Menu;
