import { useState } from "react";

/**
 * Change state toogle
 */
export default function useToggle() {
  const [active, setToggle] = useState<boolean>(false);
  const onToggle = () => setToggle((prevState) => !prevState);
  return {
    active,
    onToggle
  };
}
