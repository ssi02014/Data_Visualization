import React, { useCallback } from "react";
import { StyledColumn, StyledRow, ContentContainer } from "./style";

interface Props {
  isComplete: boolean;
  sortValue: number[];
  cursor: number;
}

const Visualization = ({ isComplete, sortValue, cursor }: Props) => {
  const checkClassName = useCallback((i, value) => {
    if (cursor === value) {
      if (i < cursor) return "current"
      return "not-value"
    } else {
      if (i >= value) {
        return "not-value";
      } else {
        if (isComplete) return "complete";
        return "value";
      }
    }
  }, [isComplete, cursor]);

  const columns = useCallback((value) => {
    const elements = sortValue.map((el, i) => {
      const className = checkClassName(i, value);
      
      return <StyledColumn key={i} className={className} />
    });
    return elements;
  }, [sortValue, cursor, isComplete]);

  return (
    <ContentContainer>
      {sortValue &&
        sortValue.map((el, idx) => (
          <StyledRow key={idx}>
            {columns(el).reverse().map((el) => el)}
          </StyledRow>
        ))}
    </ContentContainer>
  );
};

export default React.memo(Visualization);
