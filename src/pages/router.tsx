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
      <Route path="/" element={<div>main</div>} />
      <Route path="/sort" element={<Sort />} />
    </Routes>
  );
};

export default Router;