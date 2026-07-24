'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { PLAY_BUTTON } from "@/app/(app)/constants/constants"
import PlayButton from "@/app/(app)/components/PlayButton"
import PauseButton from "@/app/(app)/components/PauseButton"

export default function BeatCard(props) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () =>{
        audioRef.current?.play();
        setIsPlaying(true);
    }

    const pauseAudio = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
    }

    const restartAudio = () => {
        if(!audioRef.current) return;

        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }

  return (
    <div className={"flex flex-col gap-y-2 px-3 " }>
        {/*<div className="flex flex-row gap-x-4 bg-[#000000] rounded-full h-[4rem] items-center"></div>*/}
            {/* Custom Audio Player*/}
            {/*{ !isPlaying && <button onClick={playAudio}><PlayButton /></button> }*/}
            {/*{ isPlaying && <button onClick={pauseAudio}><PauseButton /></button> }*/}
            {/*<audio ref={audioRef}>*/}
            {/*    <source src={"/audio/tiger.wav"} type={"audio/wav"} />*/}
            {/*    Your browser does not support audio.*/}
            {/*</audio>*/}

            {/* Below is the browser's built in audio player... which is kinda nice... */}
            <div className="w-full aspect-square relative">
                <Image
                    src={props.image}
                    alt={props.image}
                    fill
                    sizes="(max-width: 768px) 33vh"
                className="object-cover"/>
            </div>
            <audio controls className={"w-full"}>
                <source src={props.audio} />
                Your browser does not support audio.
            </audio>
        <div>
            <p className="text-xl"> <strong>{props.title}</strong> </p>
            <p className="text-base italic">{props.artist}</p>
            <p className="whitespace-pre-line text-sm font-light">{props.desc}</p>
        </div>
    </div>
  );
}