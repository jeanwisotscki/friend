import Link from "next/link";

import * as Comp from "../components";

import * as Atom from "./styles";

export default function Home() {
  return (
    <Comp.LayoutBase>
      <Atom.GlitchWrapper>
        <div>
          <Comp.GlitchText text="Hugo" />
          <Comp.GlitchText text="Defante" />
        </div>
      </Atom.GlitchWrapper>
      <Atom.LinkWrapper>
        <Link href={"/"}>Vasculhar</Link>
      </Atom.LinkWrapper>
    </Comp.LayoutBase>
  );
}
