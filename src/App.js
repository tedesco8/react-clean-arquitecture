import React, { useState } from "react";
import { Main } from "./style";
import { Navigation, Top } from "./components";
import "./assets/css/App.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";

function App() {
  const [toogle, setToogle] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <Navigation toogle={toogle} />
        <Main toogle={toogle}>
          <Top toogle={toogle} setToogle={(e) => setToogle(e)} />
        </Main>
      </div>
    </div>
  );
}

export default App;
