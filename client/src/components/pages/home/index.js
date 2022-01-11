import React from 'react';
import './index.scss';

import HeaderAmazon from '../../header';
import '../../../App.scss';

import Banner from './Banner';
import Products from './Products';

function HomePage() {
  return (
    <div>
    <HeaderAmazon />
    <div className="home">
      <Banner />
      <div className="home__section">
        <Products />
      </div>
    </div>
    </div>
  );
}

export default HomePage;
