// layout 布局
import { ReactNode, lazy, useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { sceneList } from './config';

const Layout = function() {
  return (
    <Router>
      <div className="layout">
        <div className="layout-labels">
          {
            sceneList.map(item => {
              const { path, label } = item;
              return (
                <div className='label-item' key={path}>
                  <Link to={path}>{label}</Link>
                </div>
              )
            })
          }
        </div>
        <div className="layout-panel">
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              {
                sceneList.map(item => {
                  const { path, Component } = item;
                  return (
                    <Route path={path} key={path} element={<Component />} />
                  )
                })
              }
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  )
}

export default Layout;
