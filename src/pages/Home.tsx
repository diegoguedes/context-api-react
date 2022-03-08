import React from "react";
import  CounterProvider  from "../context/CounterProvider";
import Counter from "../components/Counter"
import Button from "../components/Button"
export default function Home() {
  return (
    <div>
      <CounterProvider>
        <Counter />
        <Button />
      </CounterProvider>
    </div>
  );
}
