import React, { ReactNode } from "react";
import { animated, useSpring } from "react-spring";

interface Props {
  children?: ReactNode;
  rotation?: any;
  timing?: any;
}

const Boop = ({ rotation = 0, timing = 150, children }: Props) => {
  const [isBooped, setIsBooped] = React.useState(false);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,

    config: {
      tension: 60,
      friction: 6,
    },
  });

  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };

  return (
    //unknow error
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
