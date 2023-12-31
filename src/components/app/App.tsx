import React, { FC } from 'react';
import stylesApp from './App.module.css';
import { Header } from '../header/header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/home/home';
import { Plant } from '../../pages/plant/plant';
import { NotFound } from '../../pages/not-found/not-found';

const App: FC = (): JSX.Element => {
  return (
    <HashRouter >
      <div className={stylesApp.contentContainer}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Plant />} />
          <Route path='/profile' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
