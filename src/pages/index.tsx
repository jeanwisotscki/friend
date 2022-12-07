import Link from "next/link";

import * as Atom from "./styles";

import * as Comp from "../components";

export default function Home() {
  return (
    <Comp.LayoutBase>
      <Atom.MainTextWrapper>
        <Atom.MainText data-text="hugo defante">hugo defante</Atom.MainText>
        <div>
          <p>&copy; 2022 U.T.I DO ROCK</p>
        </div>
      </Atom.MainTextWrapper>
      <Atom.LinkWrapper>
        <Link href={"/menu"}>press start button</Link>
      </Atom.LinkWrapper>
    </Comp.LayoutBase>
  );
}
