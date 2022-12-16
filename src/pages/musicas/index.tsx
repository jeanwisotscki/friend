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
        <h2>Músicas autorais</h2>
        <hr />

        <Atom.SongsWrap>
          {musicas.map((item, index: number) => (
            <Atom.SongCard key={index}>
              <Image
                width={250}
                height={250}
                src={item.imageHref}
                alt=" capa do album"
                priority
              />
              <div>
                <h3>{item.song}</h3>
                <p>{item.album}</p>
                <span>{item.author}</span>
                <a href={item.songHref} target="_blank" rel="noreferrer">
                  Comprar
                </a>
              </div>
            </Atom.SongCard>
          ))}
        </Atom.SongsWrap>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
