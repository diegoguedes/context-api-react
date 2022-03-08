import { useCount } from "../context/CounterProvider";

export default function Button() {
  const { addCounter } = useCount();

  const handleClick = () => {
    addCounter();
  };

  return <button  onClick={handleClick}>Add 1</button>;
}
