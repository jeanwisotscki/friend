import styled from "styled-components";
import { GlitchText } from "./styles";

const Center = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <Center>
      <div>
        <GlitchText data-text="hugo">hugo</GlitchText>
        <GlitchText data-text="defante">defante</GlitchText>
      </div>
    </Center>
  );
}
