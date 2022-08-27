import { useEffect, useRef } from "react";
import "./App.css";
import { Button } from "./components/core/Button";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      console.log(buttonRef.current);
      buttonRef.current.disabled = true;
    } else {
      console.log("ref is null");
    }
  });

  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
        <Button ref={buttonRef}>Click Me</Button>
      </div>
    </div>
  );
}

export default App;
