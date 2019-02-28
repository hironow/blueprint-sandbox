import React, {useState} from "react";
import * as ReactDOM from "react-dom";

// HelloProps
type HelloProps = {
    name: string;
}

// Hello
const Hello: React.FC<HelloProps> = ({name}) => <h1>Hello {name}</h1>;

// App
const App: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <Hello name="react"/>
            <h3>
                Count: {count}
                <button onClick={() => setCount(count + 1)}>Count</button>
            </h3>
        </React.Fragment>
    )
};

ReactDOM.render(<App/>, document.getElementById("root"));