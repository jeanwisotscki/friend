import Link from "next/link";
import Image from "next/image";

import * as Atom from "./styles";

import * as Comp from "../../components";

import * as Icons from "../../../public/icons";

export default function Sociais() {
  return (
    <Comp.LayoutBase backPageHref="/menu">
      <Atom.Container>
        <h2>Minhas redes sociais</h2>

        <ul>
          <Link href={"https://www.twitch.tv/hugodefante"} target="_blank">
            <li>
              <div>
                <Image
                  src={Icons.Twitch}
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
                  src={Icons.Twitter}
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
                  src={Icons.Instagram}
                  width={50}
                  height={50}
                  alt="logo do instagram"
                />
              </div>

              <span>Instagram</span>
            </li>
          </Link>
        </ul>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
