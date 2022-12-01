import Link from "next/link";
import { GlitchText } from "../components/GlitchText";

import * as Atom from "./styles";

export default function Home() {
  return (
    <Atom.Container>
      <Atom.GlitchWrapper>
        <div>
          <GlitchText text="Hugo" />
          <GlitchText text="Defante" />
        </div>
      </Atom.GlitchWrapper>
      <Atom.LinkWrapper>
        <Link href={"/"}>Vasculhar</Link>
      </Atom.LinkWrapper>
    </Atom.Container>
  );
}
