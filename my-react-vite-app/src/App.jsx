import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>My First React App Installation</h1>
        <h2>What is react?</h2>
        <br />
        <p>
          React is a free and open-source front-end JavaScript library for
          building user interfaces based on components by Facebook Inc. It is
          maintained by Meta and a community of individual developers and
          companies. React can be used to develop single-page, mobile, or
          server-rendered applications with frameworks like Next.js.
        </p>
        <p>1.Christian O.Canono</p>
        <p>2.Allen Chrisve Sanchez</p>
      </div>
    </>
  );
}

export default App;
