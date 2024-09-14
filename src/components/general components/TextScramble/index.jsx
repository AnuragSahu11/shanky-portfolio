import React, { useState, useEffect, useRef } from "react";

const TextScramble = ({ texts }) => {
  const [scrambledText, setScrambledText] = useState([]);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const el = textRef.current;
    const oldText = el.innerText;
    const newText = texts[currentIndex] || "";
    const length = Math.max(oldText.length, newText.length);
    const queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({
        from,
        to,
        start,
        end,
        char: null,
      });
    }

    let frame = 0;
    let complete = 0;

    const update = () => {
      const output = [];

      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end, char } = queue[i];

        if (frame >= end) {
          complete++;
          output.push(to);
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }

          output.push(
            <span className="dud" key={i}>
              {char}
            </span>
          );
        } else {
          output.push(from);
        }
      }

      // setScrambledText(output);

      if (complete === queue.length) {
        return;
      } else {
        requestAnimationFrame(update);
        frame++;
      }
    };

    update();
  }, [currentIndex, texts]);

  useEffect(() => {
    console.log(texts);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= texts.length ? 0 : prevIndex + 1
      );
    }, 5500); // Change text every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [texts.length]);

  console.log(currentIndex);

  return <span ref={textRef}>{scrambledText}</span>;
};

export default TextScramble;
