import React from "react";
import { StyledColumn, StyledRow, Container } from "./style";

const Visualization = ({ isComplete, sortValue, cursor }) => {
  return (
    <Container>
      {sortValue &&
        sortValue.map((el, idx) => {
          const col = [];

          for (let i = 0; i < sortValue.length; i++) {
            if (cursor === el) {
              if (i < cursor) {
                col.push(<StyledColumn key={i} className="current" />);
              } else {
                col.push(<StyledColumn key={i} className="not-value" />);
              }
            } else {
              if (i < el) {
                col.push(
                  <StyledColumn
                    key={i}
                    className={isComplete ? "complete" : "value"}
                  />
                );
              } else {
                col.push(<StyledColumn key={i} className="not-value" />);
              }
            }
          }
          return (
            <StyledRow key={idx}>{col.reverse().map((el) => el)}</StyledRow>
          );
        })}
    </Container>
  );
};

export default React.memo(Visualization);
