import React from 'react';
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Sort from './sort';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Link to="/sort">sort</Link>} />
      <Route path="/sort" element={<Sort />} />
    </Routes>
  );
};

export default Router;