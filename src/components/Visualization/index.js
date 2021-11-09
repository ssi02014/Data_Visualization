import React from "react";
import { StyledColumn, StyledRow } from "./style";

const Visualization = ({ sortValue, cursor }) => {
  return (
    <>
      {sortValue &&
        sortValue.map((el, idx) => {
          let col = [];

          for (let i = 0; i < sortValue.length; i++) {
            if (cursor === el) {
              if (i < cursor) {
                col.push(<StyledColumn key={i} className="current" />);
              } else {
                col.push(<StyledColumn key={i} className="not-value" />);
              }
            } else {
              if (i < el) {
                col.push(<StyledColumn key={i} className="value" />);
              } else {
                col.push(<StyledColumn key={i} className="not-value" />);
              }
            }
          }
          return <StyledRow>{col.reverse().map((el) => el)}</StyledRow>;
        })}
    </>
  );
};

export default React.memo(Visualization);
