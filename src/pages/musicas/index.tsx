import React from "react";

import * as Atom from "./styles";

import musicas from "../../data/musicas.json";
import Image from "next/image";

export default function Musicas() {
  return (
    <Atom.Container>
      <h2>Musicas</h2>

      <div>
        {musicas.map((item, index: number) => (
          <div key={index}>
            <br />
            <br />
            <h3>{item.song}</h3>
            <p>{item.album}</p>
            <p>{item.author}</p>
            <Image
              width={100}
              height={100}
              src={item.imageHref}
              alt=" capa do album"
            />
            <a href={item.songHref}>compre agora</a>

            <br />
            <br />
          </div>
        ))}
      </div>
    </Atom.Container>
  );
}
