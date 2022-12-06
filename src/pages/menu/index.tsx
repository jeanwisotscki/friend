import React from "react";
import Link from "next/link";

import * as Atom from "./styles";

import * as Comp from "../../components";

export default function Menu() {
  const menuAudioEffect = React.useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined"
      ? new Audio("/menu-hover-effect.mp3")
      : undefined
  );

  const playAudioEffect = () => menuAudioEffect.current?.play();

  return (
    <Comp.LayoutBase>
      <Atom.Container>
        <div>
          <h2>Main Menu</h2>
        </div>
        <Atom.MainMenuContainer>
          <ul>
            <Link href={"/wikihugo"}>
              <li onMouseEnter={playAudioEffect}>WikiHugo</li>
            </Link>

            <Link href={"/musicas"}>
              <li onMouseEnter={playAudioEffect}>Músicas autorais</li>
            </Link>

            <Link href={"/contato"}>
              <li onMouseEnter={playAudioEffect}>Contato</li>
            </Link>

            <Link href={"/"}>
              <li onMouseEnter={playAudioEffect}>Voltar</li>
            </Link>
          </ul>
        </Atom.MainMenuContainer>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
