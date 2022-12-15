import React from "react";

import * as Atom from "./styles";

import * as Comp from "../../components";

import musicas from "../../data/musicas.json";
import Image from "next/image";
import Link from "next/link";

export default function Musicas() {
  return (
    <Comp.LayoutBase backPageHref="/menu">
      <Atom.Container>
        <h2>Musicas</h2>

        <Atom.SongsWrap>
          {musicas.map((item, index: number) => (
            <Atom.SongCard key={index}>
              <Image
                width={200}
                height={200}
                src={item.imageHref}
                alt=" capa do album"
              />
              <div>
                <h3>{item.song}</h3>
                <p>{item.album}</p>
                <p>{item.author}</p>
                <a href={item.songHref}>compre agora</a>
              </div>
            </Atom.SongCard>
          ))}
        </Atom.SongsWrap>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
