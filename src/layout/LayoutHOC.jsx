import React from 'react';

const LayoutHOC = ({ children }) => {
  return (
    <>
      <main className='overflow-hidden'>{children}</main>
    </>
  );
};

export default LayoutHOC;
