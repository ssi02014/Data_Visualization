import React, { useMemo, useCallback } from "react";
import { StyledColumn, StyledRow, Container } from "./style";

interface Props {
  isComplete: boolean;
  sortValue: number[];
  cursor: number;
}
const Visualization = ({ isComplete, sortValue, cursor }: Props) => {
  const columns = useCallback((value) => {
    const elements = sortValue.map((el, i) => {
      if (cursor === value) {
        return <StyledColumn key={i} className={i < cursor ? "current" : "not-value"} />
      } else {
        return <StyledColumn key={i} className={ i >= value ? "not-value" : isComplete ? "complete" : "value"} />
      }
    });
    return elements;
  }, [sortValue, cursor, isComplete]);

  return (
    <Container>
      {sortValue &&
        sortValue.map((el, idx) => (
          <StyledRow key={idx}>
            {columns(el).reverse().map((el) => el)}
          </StyledRow>
        ))}
    </Container>
  );
};

export default React.memo(Visualization);
