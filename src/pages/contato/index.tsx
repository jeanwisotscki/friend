import React from "react";

import * as Atom from "./styles";

import * as Comp from "../../components";

import * as Icon from "../../../public/icons";
import Image from "next/image";
import Link from "next/link";

export default function Contato() {
  return (
    <Comp.LayoutBase>
      <Atom.Container>
        <h2>Me siga nas redes sociais</h2>

        <ul>
          <li>
            <Image
              src={Icon.Twitch}
              width={50}
              height={50}
              alt="logo da twitch"
            />
            Twitch
          </li>
          <li>
            <Image
              src={Icon.Twitter}
              width={50}
              height={50}
              alt="logo do Twitter"
            />
            Twitter
          </li>
          <li>
            <Image
              src={Icon.Instagram}
              width={50}
              height={50}
              alt="logo do Instagram"
            />
            Instagram
          </li>
          <li>
            <Image
              src={Icon.Instagram}
              width={50}
              height={50}
              alt="logo do Instagram"
            />
            Banda
          </li>
        </ul>

        <Link href={"/menu"}>Voltar</Link>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
