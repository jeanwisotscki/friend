import Head from "next/head";
import Image from "next/image";

import * as Atom from "../../styles/pages/musicas/styles";

import * as Comp from "../../components";

import musicas from "../../data/musicas.json";

export default function Musicas() {
  return (
    <>
      <Head>
        <title>Hugo Defante | Músicas</title>
      </Head>

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
    </>
  );
}
