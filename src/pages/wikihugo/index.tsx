import Image from "next/image";

import * as Atom from "../../styles/pages/wikihugo/styles";

import * as Comp from "../../components";

export default function WikiHugo() {
  return (
    <Comp.LayoutBase backPageHref="/menu">
      <Atom.MainContainer>
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

          <Atom.Resume>
            <p>
              <strong>Hugo Defante</strong>, nome artístico de{" "}
              <strong>Hugo Defante Rodrigues</strong>{" "}
              <i> (Rio de Janeiro, 26 de maio de 1987)</i> é um virtuoso
              guitarrista carioca, considerado na sua região, um dos melhores de
              seu estilo. Guitarrista á mais de 20 anos, Hugo é com toda certeza
              um dos guitarristas do Brasil!
            </p>

            <p>
              Influenciado pelos metais pesados de <strong>Slayer</strong> e os
              teclados sintetizados de <strong>Iron Maiden</strong>, Hugo é
              conhecido por ser um dos precursores do chamado{" "}
              <strong>Synth Metal</strong> no Rio de Janeiro, gênero que envolve
              heavy metal com elementos de música eletrônica.
            </p>

            <p>
              Junto ao seu irmão <strong>Diogo Defante</strong>, também
              tornou-se um dos pioneiros do <strong>Robson Metal</strong>, com a
              temática humorística de suas letras e com os sons dúvidosos do seu
              berrante criando a atmosférica bem-humorada das canções. Seguindo
              estes estilos, ele ajudou a popularizar o{" "}
              <strong>berrante</strong>{" "}
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
              multi-instrumentista, compositor, pixel artist, gamer, streamer,
              flautista, tocador de berrante, marombeiro, advogado pequenas
              causas, camelô e seu pai.
            </p>
          </Atom.Resume>

          <Atom.History>
            <h2>História</h2>
            <hr />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              provident quam quibusdam accusamus voluptatibus. Sapiente,
              veritatis qui quos eligendi eum est, dicta, placeat ut ipsa eos
              accusamus commodi. Quibusdam eveniet temporibus reprehenderit
              provident labore distinctio ipsa fugit eius. Voluptatibus ipsum,
              laudantium soluta eius amet, facilis ut doloremque harum odio
              fugiat non ad culpa animi debitis maxime similique perferendis id
              nobis vero cum, enim ullam? Eveniet, quod! Ullam facere
              voluptatibus quos animi ipsa recusandae harum iusto at nulla totam
              esse nostrum iure molestiae accusamus, distinctio temporibus
              adipisci iste illum dolorum eligendi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, iure quos numquam adipisci ipsa minima? Officiis
              nostrum veniam iste eligendi aliquid esse quae! Laudantium sed
              quidem laboriosam totam est quae dicta, repellat iusto quas, animi
              odio corrupti, nulla adipisci fugit reiciendis recusandae
              exercitationem porro dolorem earum consequatur praesentium
              pariatur voluptatem?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              provident quam quibusdam accusamus voluptatibus. Sapiente,
              veritatis qui quos eligendi eum est, dicta, placeat ut ipsa eos
              accusamus commodi. Quibusdam eveniet temporibus reprehenderit
              provident labore distinctio ipsa fugit eius. Voluptatibus ipsum,
              laudantium soluta eius amet, facilis ut doloremque harum odio
              fugiat non ad culpa animi debitis maxime similique perferendis id
              nobis vero cum, enim ullam? Eveniet, quod! Ullam facere
              voluptatibus quos animi ipsa recusandae harum iusto at nulla totam
              esse nostrum iure molestiae accusamus, distinctio temporibus
              adipisci iste illum dolorum eligendi!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, iure quos numquam adipisci ipsa minima? Officiis
              nostrum veniam iste eligendi aliquid esse quae! Laudantium sed
              quidem laboriosam totam est quae dicta, repellat iusto quas, animi
              odio corrupti, nulla adipisci fugit reiciendis recusandae
              exercitationem porro dolorem earum consequatur praesentium
              pariatur voluptatem?
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              provident quam quibusdam accusamus voluptatibus. Sapiente,
              veritatis qui quos eligendi eum est, dicta, placeat ut ipsa eos
              accusamus commodi. Quibusdam eveniet temporibus reprehenderit
              provident labore distinctio ipsa fugit eius. Voluptatibus ipsum,
              laudantium soluta eius amet, facilis ut doloremque harum odio
              fugiat non ad culpa animi debitis maxime similique perferendis id
              nobis vero cum, enim ullam? Eveniet, quod! Ullam facere
              voluptatibus quos animi ipsa recusandae harum iusto at nulla totam
              esse nostrum iure molestiae accusamus, distinctio temporibus
              adipisci iste illum dolorum eligendi!
            </p>
          </Atom.History>

          <Atom.Discography>
            <h2>Discografia</h2>
            <hr />

            <div>
              <div>
                <strong>Aquilonia </strong>
                <i>(10 de Dezembro de 2019)</i>
              </div>
              <ul>
                <li>Aquilonia</li>
              </ul>
            </div>
            <div>
              <div>
                <strong>Electron </strong>
                <i>(10 de Outubro de 2020)</i>
              </div>
              <ul>
                <li>Showtime</li>
                <li>Electron</li>
                <li>Message From The Past</li>
              </ul>
            </div>
          </Atom.Discography>
        </Atom.MainContentWrapper>
      </Atom.MainContainer>
    </Comp.LayoutBase>
  );
}
