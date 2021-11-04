import React from "react";
import { Column } from "./";

const Visualization = ({ sortValue, cursor }) => {
  return (
    <div>
      {sortValue &&
        sortValue.map((el, idx) => {
          let col = [];

          if (cursor === el) {
          }
        })}
    </div>
  );
};

export default Visualization;
