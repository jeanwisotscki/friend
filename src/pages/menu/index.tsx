import Link from "next/link";

import * as Atom from "./styles";

import * as Comp from "../../components";

export default function Menu() {
  return (
    <Comp.LayoutBase>
      <Atom.Container>
        <div>
          <h2>Main Menu</h2>
        </div>
        <Atom.MainMenuContainer>
          <ul>
            <Link href={"/wikihugo"}>
              <li>WikiHugo</li>
            </Link>

            <Link href={"/musicas"}>
              <li>Músicas autorais</li>
            </Link>

            <Link href={"/contato"}>
              <li>Contato</li>
            </Link>

            <Link href={"/"}>
              <li>Voltar</li>
            </Link>
          </ul>
        </Atom.MainMenuContainer>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
