import React, { useEffect, useState } from "react";
import { GraphAvatar } from "./elements";
import faker from "faker";

type LimitPosition = {
  min: number;
  max: number;
};
type LimitProps = {
  x: LimitPosition;
  y: LimitPosition;
};

const initialState : LimitProps = {
    x: {
        min: 0,
        max: 0,
      },
      y: {
        min: 0,
        max: 0,
      },

}

const GraphsAvatar = () => {
  const [limits, setLimits] = useState<LimitProps>(initialState);
  useEffect(() => {
    setLimits({
      x: {
        min: 500,
        max: window.innerWidth + 100,
      },
      y: {
        min: -100,
        max: window.innerHeight + 100,
      },
    });
  }, []);
  
  const randomFromRange = (dir: "x" | "y") => (
    Math.floor(Math.random() * (limits[dir].max - limits[dir].min)) + limits[dir].min
  ) 
  const randomSizeRange = (min: number, max : number) => (
      Math.floor(Math.random() * (max - min)) + min
  )
  
  return (
      <div>
        {Array(15).fill(0).map((e,i)=>(
            <GraphAvatar 
            key={i} 
            dimension={randomSizeRange(150,30)}
            position={{
              x: randomFromRange("x"),
              y: randomFromRange("y"),
            }}
            src={faker.image.avatar()}
            />
        ))}  
      </div>
  );
};

export default GraphsAvatar;
