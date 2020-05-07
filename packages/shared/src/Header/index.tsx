import React from 'react';

interface Props {
  children?: React.ReactNode;
}

function Header({ children }: Props) {
  return <h2>{children}</h2>;
}

export default Header;
