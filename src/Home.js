import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import { Routes, Route } from 'react-router-dom';
import Hjdo from './Hjdo';
import JUN from './JUN';

function Index() {
  return (
    <React.Fragment>
          <AppAppBar />
      <Routes>
        <Route path='/' element={<div><ProductHero /><ProductCategories /></div>} />
        <Route path='/DOE' element={<Hjdo />} />
        <Route path='/JUN' element={<JUN />} />
      </Routes>
  
      {/* 최상단 이미지 배너 */}
      {/* <ProductHero />   */}
      {/* 개인 페이지 이동 이미지 버튼 */}
      {/* <ProductCategories /> */}
      {/*  */}
      {/* <ProductHowItWorks /> 3가지 소개글 */}
      {/* <ProductCTA />
      <ProductSmokingHero /> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
