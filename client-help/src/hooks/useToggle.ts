import { useState } from "react";

const useToggle = () => {
  const [active, setActive] = useState<boolean>(false);
  return {
    active,
    onToggle: () => setActive((prevState) => !prevState),
  };
};

export default useToggle;
