import React from "react";

export const useAudioEffects = (audio: string) => {
  const audioEffect = React.useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(audio) : undefined
  );

  return audioEffect;
};
