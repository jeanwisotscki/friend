import React from "react";
import Image from "next/image";

import * as Atom from "./styles";

import * as Comp from "../../components";

export default function WikiHugo() {
  return (
    <Comp.LayoutBase backPageHref="/menu">
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
                priority
              />
            </div>
            <Atom.PersonalInfos>
              <span>Informações pessoais</span>
              <table>
                <tbody>
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
                </tbody>
              </table>
            </Atom.PersonalInfos>
          </Atom.AsideContainer>

          <Atom.TextContainer>
            <p>
              <strong>Hugo Defante</strong>, nome artístico de{" "}
              <strong>Hugo Defante Rodrigues</strong>{" "}
              <i> (Rio de Janeiro, 26 de maio de 1987)</i> é um virtuoso
              guitarrista carioca, considerado na sua região, um dos melhores de
              seu estilo.
            </p>

            <p>
              Influenciado pelos metais pesados de <strong>Slayer</strong> e os
              teclados sintetizados de <strong>Iron Maiden</strong>, Hugo é
              conhecido por ser um dos precursores do chamado{" "}
              <strong>Synth metal</strong> no Rio de Janeiro, gênero que envolve
              heavy metal com elementos de música eletrônica. Junto ao seu irmão{" "}
              <strong>Diogo Defante</strong>, também tornou-se um dos pioneiros
              do <strong>Robson metal</strong>, com a temática humorística de
              suas letras e com os sons dúvidosos do seu berrante criando a
              atmosférica bem-humorada das canções. Seguindo estes estilos, ele
              ajudou a popularizar o <strong>berrante</strong>{" "}
              <i>
                (espécie de buzina usada desde a antiguidade por pastores de
                ovelhas e gados)
              </i>{" "}
              dentro do heavy metal em geral e veio a ser o primeiro guitarrista
              a tocar esse instrumento em um show para milhares de pessoas. Hugo
              também já foi considerado o guitarrista mais rápido do Velho
              Oeste.
            </p>
            <p>
              <strong>Hugo Defante</strong> é, além de guitarrista e
              multi-instrumentista, compositor, streamer e pixel artist.
              Guitarrista á mais de 20 anos, Hugo é com toda certeza um dos
              guitarristas do Brasil!
            </p>

            {/**********************************************/}

            <h2>História</h2>
            <hr />
            <p>
              <strong>Hugo Defante</strong>, nome artístico de{" "}
              <strong>Hugo Defante Rodrigues</strong>{" "}
              <i> (Rio de Janeiro, 26 de maio de 1987)</i> é um virtuoso
              guitarrista carioca, considerado na sua região, um dos melhores de
              seu estilo.
            </p>

            <p>
              Influenciado pelos metais pesados de <strong>Slayer</strong> e os
              teclados sintetizados de <strong>Iron Maiden</strong>, Hugo é
              conhecido na sua região por ser um dos precursores do chamado{" "}
              <strong>Synth metal</strong>, que envolve heavy metal com
              elementos de música eletrônica. Junto ao seu irmão{" "}
              <strong>Diogo Defante</strong>, também tornou-se um dos pioneiros
              do <strong>Robson metal</strong>, com a temática humorística de
              suas letras e com os sons dúvidosos do seu berrante criando a
              atmosférica bem-humorada das canções. Seguindo estes estilos, ele
              ajudou a popularizar o <strong>berrante</strong>{" "}
              <i>
                (espécie de buzina usada desde a antiguidade por pastores de
                ovelhas e gados)
              </i>{" "}
              dentro do heavy metal em geral e veio a ser o primeiro guitarrista
              a tocar esse instrumento em um show para milhares de pessoas. Hugo
              também já foi considerado o guitarrista mais rápido do Velho
              Oeste.
            </p>
            <p>
              <strong>Hugo Defante</strong> é, além de guitarrista e
              multi-instrumentista, compositor, streamer e pixel artist.
              Guitarrista á mais de 20 anos, Hugo é com toda certeza um dos
              guitarristas do Brasil!
            </p>

            {/**********************************************/}
            <section>
              <h2>Discografia</h2>
              <hr />
              <br />
              <div>
                <strong>Aquilonia </strong>
                <i>(10 de Dezembro de 2019)</i>
                <br />
                <br />
                <ul>
                  <li>
                    <i>* Aquilonia</i>
                  </li>
                </ul>
              </div>
              <br />
              <br />
              <div>
                <strong>Electron </strong>
                <i>(10 de Outubro de 2020)</i>
                <br />
                <br />
                <ul>
                  <li>
                    <i>* Showtime</i>
                  </li>
                  <li>
                    <i>* Electron</i>
                  </li>
                  <li>
                    <i>* Message From The Past</i>
                  </li>
                </ul>
              </div>
            </section>
          </Atom.TextContainer>
        </Atom.MainContentWrapper>
      </Atom.Container>
    </Comp.LayoutBase>
  );
}
