import React from "react";
import Link from "next/link";
import Image from "next/image";

import * as Atom from "./styles";

import * as Comp from "../../components";

import * as Icon from "../../../public/icons";

export default function Sociais() {
  return (
    <Comp.LayoutBase>
      <Atom.Container>
        <h2>Me siga nas redes sociais</h2>

        <ul>
          <Link href={"https://www.twitch.tv/hugodefante"} target="_blank">
            <li>
              <div>
                <Image
                  src={Icon.Twitch}
                  width={50}
                  height={50}
                  alt="logo da twitch"
                />
              </div>

              <span>Twitch</span>
            </li>
          </Link>

          <Link href={"https://www.twitter.com/hugodefante"} target="_blank">
            <li>
              <div>
                <Image
                  src={Icon.Twitter}
                  width={50}
                  height={50}
                  alt="logo do twitter"
                />
              </div>

              <span>Twitter</span>
            </li>
          </Link>

          <Link href={"https://www.instagram.com/hugodefante"} target="_blank">
            <li>
              <div>
                <Image
                  src={Icon.Instagram}
                  width={50}
                  height={50}
                  alt="logo do instagram"
                />
              </div>

              <span>Instagram</span>
            </li>
          </Link>
        </ul>

        <Link href={"/menu"}>
          <span>Voltar</span>
        </Link>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
