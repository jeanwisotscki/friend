import Link from "next/link";

import * as Atom from "./styles";

import * as Comp from "../components";

export default function Home() {
  return (
    <Comp.LayoutBase>
      <Atom.Container>
        <Atom.MainTextWrapper>
          <Atom.MainText data-text="hugo defante">
            hugo <br /> defante
          </Atom.MainText>
        </Atom.MainTextWrapper>

        <Atom.PressStartWrapper>
          <Link href={"/menu"}>press start button</Link>
        </Atom.PressStartWrapper>

        <Atom.CopyRightWrapper>
          <p>&copy; 2022 U.T.I DO ROCK</p>
        </Atom.CopyRightWrapper>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
