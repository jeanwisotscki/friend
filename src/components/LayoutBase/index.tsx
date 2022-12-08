import React from "react";
import styled from "styled-components";

import breakpoints from "../../common/breakpoints";

const Container = styled.main`
  width: 90%;
  max-width: 50rem;
  min-width: 279px;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  @media screen and (${breakpoints.tablet}) {
    & {
      width: 100%;
      padding: 1rem;
    }
  }
`;

interface ILayoutBaseProps {
  children: React.ReactNode;
}

export const LayoutBase = ({ children }: ILayoutBaseProps) => {
  return <Container>{children}</Container>;
};
