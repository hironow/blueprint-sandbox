import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Button } from "@blueprintjs/core";
import Hoge from "./components/Hoge";

// HelloProps
type HelloProps = {
  name: string;
};

// Hello
const Hello = ({ name }: HelloProps) => <h1>Hello {name}</h1>;

// App
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello name="react" />
      <h3>
        Count: {count}
        <Button
          intent="success"
          text="Count"
          onClick={() => setCount(count + 1)}
        />
      </h3>

      <Hoge/>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
