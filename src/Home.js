import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import { Routes, Route } from 'react-router-dom';
import Bjgo from './Bjgo';
import Hjdo from './components/Hjdo';
function Index() {
  return (
    <React.Fragment>
          <AppAppBar />
      <Routes>
        <Route path='/' element={<div><ProductHero /><ProductCategories /></div>} />
        <Route path='/DOE' element={<Hjdo />} />
        <Route path='/bam' element={<Bjgo />} />
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
