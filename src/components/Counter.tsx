import {useCount} from "../context/CounterProvider"

export default function Counter() {
 const {counter} = useCount();
  return <h1>Counter: {counter}</h1>;
}
