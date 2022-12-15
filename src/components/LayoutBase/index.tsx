import Link from "next/link";
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
  padding: 0 0 4rem;

  @media screen and (${breakpoints.tablet}) {
    & {
      width: 100%;
      padding: 0 1rem 4rem;
    }
  }
`;

const BackPageWrapper = styled.div`
  display: inline-block;
  margin: 3rem 3rem 1rem;

  a {
    color: #fff;
    display: flex;
    align-items: center;

    &::before {
      content: "<";
      display: block;
      padding: 0.3rem;
      background-color: #ccc;
      color: #000;

      font-size: 1.1rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  @media screen and (${breakpoints.tablet}) {
    margin: 3rem 1rem;
  }
`;

interface ILayoutBaseProps {
  backPageHref?: string;
  children: React.ReactNode;
}

export const LayoutBase = ({ children, backPageHref }: ILayoutBaseProps) => {
  return (
    <>
      {backPageHref && (
        <BackPageWrapper>
          <Link href={`${backPageHref}`}>Voltar</Link>
        </BackPageWrapper>
      )}
      <Container>{children}</Container>
    </>
  );
};
