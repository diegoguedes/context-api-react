import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useCallback,
} from "react";

interface CounterProviderProps {
  children: ReactNode;
}

interface CounterData {
    counter: number;
    addCounter():void;
}
const CounterContext = createContext<CounterData>({} as CounterData);

export default function CounterProvider({ children }: CounterProviderProps) {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = useCallback(() => {
    const count = counter + 1;
    setCounter(count);
  }, [counter]);

  return (
    <CounterContext.Provider value={{ counter, addCounter }}>
      {children}
    </CounterContext.Provider>
  );
}
export function useCount() {
  const count = useContext(CounterContext);
  return count;
}
