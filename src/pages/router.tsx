import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './home';
import Sort from './sort';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sort" element={<Sort />} />
    </Routes>
  );
};

export default Router;