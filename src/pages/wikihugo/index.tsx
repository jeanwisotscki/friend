import React from "react";
import Image from "next/image";

import * as Atom from "./styles";

import * as Comp from "../../components";

export default function WikiHugo() {
  return (
    <Comp.LayoutBase>
      <Atom.Container>
        <h2>Hugo Defante</h2>
        <br />
        <hr />
        <br />
        <p>Origem: WikiHugo, a enciclopédia privada.</p>
        <br />
        <Atom.Wrapper>
          <Atom.AsideContainer>
            <table>
              <tbody>
                <tr>
                  <th>
                    <p>Hugo Defante</p>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div>
                      <Image
                        width={240}
                        height={300}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hugo_Defante.jpg/1200px-Hugo_Defante.jpg"
                        alt="imagem da pessoa hugo defante"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Informações pessoais</th>
                </tr>
                <tr>
                  <td>nome</td>
                  <td>hugo defante</td>
                </tr>
              </tbody>
            </table>
          </Atom.AsideContainer>
          <Atom.Texts>
            <p>
              Hugo Defante é um guitarrista, streamer e pixelarteiro, nascido na
              cidade do Rio de Janeiro em 26 de maio de 1987. Guitarrista á mais
              de 20 anos, Hugo é com toda certeza um dos guitarristas do Brasil!
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
          </Atom.Texts>
        </Atom.Wrapper>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}

/*
https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hugo_Defante.jpg/1200px-Hugo_Defante.jpg
*/
