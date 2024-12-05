'use client'
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to autoplay and loop audio.
 * Starts the audio muted, then unmutes after it starts playing.
 * 
 * @param {string} src - The source URL of the audio file.
 * @param {boolean} [loop=false] - Whether to loop the audio.
 * @returns {boolean} - Returns whether the audio is playing.
 */
export const useAutoPlayAudio = (src: string, loop = false) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current && src) {
      const audio = audioRef.current;

      // Set up audio properties
      audio.src = src;
      audio.loop = loop;
      audio.muted = true; // Start muted to bypass autoplay restrictions

      // Attempt to play the audio
      audio.play()
        .then(() => {
          // If play is successful, unmute after a short delay
          setTimeout(() => {
            audio.muted = false; // Unmute after the audio starts
            setIsAudioPlaying(true); // Set the audio state to playing
          }, 100); // Delay to allow the play to start
        })
        .catch((error) => {
          console.error('Audio play failed:', error);
        });
    }

    // Cleanup when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [src, loop]);

  return { isAudioPlaying, audioRef };
};
