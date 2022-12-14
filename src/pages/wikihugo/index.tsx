import React from "react";
import Image from "next/image";

import * as Atom from "./styles";

import * as Comp from "../../components";

export default function WikiHugo() {
  return (
    <Comp.LayoutBase>
      <Atom.Container>
        <Atom.Header>
          <h2>Hugo Defante</h2>
          <hr />
          <span>Origem: WikiHugo, a enciclopédia privada.</span>
        </Atom.Header>

        <Atom.MainContentWrapper>
          <Atom.AsideContainer>
            <span>Hugo Defante</span>
            <div>
              <Image
                width={240}
                height={300}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hugo_Defante.jpg/1200px-Hugo_Defante.jpg"
                alt="imagem da pessoa hugo defante"
              />
            </div>
            <Atom.PersonalInfos>
              <span>Informações pessoais</span>
              <table>
                <tr>
                  <td>Nome completo</td>
                  <td>Hugo Defante Rodrigues</td>
                </tr>
                <tr>
                  <td>Nacionalidade</td>
                  <td>Brasileiro</td>
                </tr>
                <tr>
                  <td>Nascimento</td>
                  <td>26 de maio de 1987. Rio de Janeiro, RJ.</td>
                </tr>
                <tr>
                  <td>Ocupações</td>
                  <td>Músico, compositor, streamer e pixel artist.</td>
                </tr>
              </table>
            </Atom.PersonalInfos>
          </Atom.AsideContainer>
          <Atom.TextContainer>
            <p>
              <strong>Hugo Defante Rodrigues</strong>{" "}
              <i> (26 de maio de 1987)</i> é um guitarrista, compositor,
              streamer e pixel artist brasileiro. Guitarrista á mais de 20 anos,
              Hugo é com toda certeza um dos guitarristas do Brasil! É um dos
              mais influentes guitarristas de sua cidade, principalmente quando
              falamos de heavy metal.
            </p>
            <p>
              Informações sobre Hugo Defante: Para Hugo, FF é Final Fantasy;
              Hugo tem 1,80 de altura; guitarrista do Projeto Robson;
              marombeiro...
            </p>
            <p>
              Hugo Defante é um guitarrista, streamer e pixelarteiro, nascido na
              cidade do Rio de Janeiro em 26 de maio de 1987. Guitarrista á mais
              de 20 anos, Hugo é com toda certeza um dos guitarristas do Brasil!
              Informações sobre Hugo Defante: Para Hugo, FF é Final Fantasy;
              Hugo tem 1,80 de altura; guitarrista do Projeto Robson;
              marombeiro...
            </p>
          </Atom.TextContainer>
        </Atom.MainContentWrapper>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}

/*
https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hugo_Defante.jpg/1200px-Hugo_Defante.jpg
*/
