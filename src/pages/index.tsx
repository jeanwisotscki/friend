import Link from "next/link";

import * as Atom from "./styles";

import * as Comp from "../components";

export default function Home() {
  return (
    <Comp.LayoutBase>
      <Atom.GlitchWrapper>
        <div>
          <Atom.MainText>hugo</Atom.MainText>
          <Atom.MainText>defante</Atom.MainText>
        </div>
      </Atom.GlitchWrapper>
      <Atom.LinkWrapper>
        <Link href={"/menu"}>Vasculhar</Link>
      </Atom.LinkWrapper>
    </Comp.LayoutBase>
  );
}
