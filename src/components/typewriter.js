import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Typography from '@mui/material/Typography';

function Typewriter({ text, speed = 50, delay = 1000 }) {
  const [done, setDone] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const spring = useSpring({ opacity: 1, from: { opacity: 0 }, delay });

  const type = (i) => {
    if (i < text.length) {
      setCurrentText((prev) => prev + text.charAt(i));
      setTimeout(() => type(i + 1), speed);
    } else {
      setDone(true);
    }
  };

  React.useEffect(() => {
    type(0);
  });

  return (
    <Typography component="div">
      {done ? (
        <animated.span style={spring}>{currentText}</animated.span>
      ) : (
        currentText
      )}
    </Typography>
  );
}

function TypeWriter() {
  return (
    <div className="App">
      <Typewriter text="Hello, world!" />
    </div>
  );
}

export default TypeWriter;
