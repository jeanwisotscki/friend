import React from "react";
import Link from "next/link";

import * as Atom from "./styles";

import * as Comp from "../../components";
import { useAudioEffects } from "../../hooks/useAudioEffects";

export default function Menu() {
  const menuHoverAudio = useAudioEffects("/audios/menu-hover-effect.mp3");

  const playAudioEffect = () => menuHoverAudio.current?.play();

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
