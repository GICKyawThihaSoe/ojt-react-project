import React from 'react';
import LayoutHOC from '../layout/LayoutHOC';
import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';
import ThirdPage from '../pages/ThirdPage';
import LatestPage from '../pages/LatestPage';

const Main = () => {
  return (
    <LayoutHOC>
      <FirstPage />
      <SecondPage/>
      <ThirdPage/>
      <LatestPage/>
    </LayoutHOC>
  );
};

export default Main;
