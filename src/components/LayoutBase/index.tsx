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
    color: ${(props) => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    transition: 0.2s;
    padding: 0.5rem;

    &::before {
      content: "<";
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primary};

      &::before {
        transition: 0.3s;

        transform: rotate(360deg);
      }
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
