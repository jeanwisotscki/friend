import Head from "next/head";
import Link from "next/link";

import * as Atom from "../styles/pages/styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hugo Defante | Início</title>
      </Head>

      <Atom.MainWrapper>
        <Atom.Container>
          <Atom.PerspectiveTextWrapper>
            <Atom.PerspectiveText data-text="hugo defante">
              hugo defante
            </Atom.PerspectiveText>
          </Atom.PerspectiveTextWrapper>

          <Atom.PressStartWrapper>
            <Link href={"/menu"}>press start button</Link>
          </Atom.PressStartWrapper>

          <Atom.CopyRightWrapper>
            <p>&copy; 2022 U.T.I DO ROCK</p>
          </Atom.CopyRightWrapper>
        </Atom.Container>
      </Atom.MainWrapper>
    </>
  );
}
