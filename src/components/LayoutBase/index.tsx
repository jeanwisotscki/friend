import React from "react";
import styled from "styled-components";

const Container = styled.main`
  max-width: 50rem;
  width: 80%;
  margin: 0 auto;
`;

interface ILayoutBaseProps {
  children: React.ReactNode;
}

export const LayoutBase = ({ children }: ILayoutBaseProps) => {
  return <Container>{children}</Container>;
};
