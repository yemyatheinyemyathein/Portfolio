"use client";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState } from "react";

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggle = () => {
    setIsPlaying(!isPlaying);
    !isPlaying ? audioRef.current.play(): audioRef.current.pause();
  };

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      <audio ref={audioRef} loop>
        <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio> 

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        onClick={toggle}
        className="w-10 h-10 xs:w-14 xs:h-14 custom-bg text-foreground rounded-full flex items-center justify-center cursor-pointer z-50 p-2.5 xs:p-4"
        aria-label={"Home"}
        name={"Home"}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Sound;
