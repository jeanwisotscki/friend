import Link from "next/link";

import * as Atom from "./styles";

import * as Comp from "../components";

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
        <Link href={"/menu"}>Vasculhar</Link>
      </Atom.LinkWrapper>
    </Comp.LayoutBase>
  );
}
