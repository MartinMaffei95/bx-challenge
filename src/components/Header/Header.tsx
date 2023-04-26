import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
  return (
    <div className="bg-neutral-400 max-w-screen w-full h-16 p-4 flex">
      <SearchBar />
      <div>CAMBIAR THEME</div>
    </div>
  );
};

export default Header;
