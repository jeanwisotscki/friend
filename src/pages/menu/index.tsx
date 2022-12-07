import React from "react";
import Link from "next/link";

import * as Atom from "./styles";

import * as Comp from "../../components";
import { useAudioEffects } from "../../hooks/useAudioEffects";

export default function Menu() {
  const menuHoverAudio = useAudioEffects("/audios/menu-hover-effect.mp3");

  return (
    <Comp.LayoutBase>
      <Atom.Container>
        <div>
          <h2>Main Menu</h2>
        </div>
        <Atom.MainMenuContainer>
          <ul>
            <Link href={"/wikihugo"}>
              <li onMouseEnter={() => menuHoverAudio.current?.play()}>
                WikiHugo
              </li>
            </Link>

            <Link href={"/musicas"}>
              <li onMouseEnter={() => menuHoverAudio.current?.play()}>
                Músicas autorais
              </li>
            </Link>

            <Link href={"/contato"}>
              <li onMouseEnter={() => menuHoverAudio.current?.play()}>
                Contato
              </li>
            </Link>

            <Link href={"/"}>
              <li onMouseEnter={() => menuHoverAudio.current?.play()}>
                Voltar
              </li>
            </Link>
          </ul>
        </Atom.MainMenuContainer>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
