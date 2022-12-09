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
        <Atom.Title>Main Menu</Atom.Title>

        <Atom.MainMenuContainer>
          <ul>
            <Link href={"/wikihugo"}>
              <li>
                <Atom.MenuButton
                  onMouseEnter={() => menuHoverAudio.current?.play()}
                >
                  WikiHugo
                </Atom.MenuButton>
              </li>
            </Link>

            <Link href={"/musicas"}>
              <li>
                <Atom.MenuButton
                  onMouseEnter={() => menuHoverAudio.current?.play()}
                >
                  Músicas autorais
                </Atom.MenuButton>
              </li>
            </Link>

            <Link href={"/contato"}>
              <li>
                <Atom.MenuButton
                  onMouseEnter={() => menuHoverAudio.current?.play()}
                >
                  Contato
                </Atom.MenuButton>
              </li>
            </Link>

            <Link href={"/"}>
              <li>
                <Atom.ButtonOrangeOnHover
                  onMouseEnter={() => menuHoverAudio.current?.play()}
                >
                  Voltar
                </Atom.ButtonOrangeOnHover>
              </li>
            </Link>
          </ul>
        </Atom.MainMenuContainer>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
