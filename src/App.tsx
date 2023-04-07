import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./infrastructure/style";
import { NavigationBar, TopBar } from "./infrastructure/components";
import "./infrastructure/assets/css/App.css";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
import routes from "./infrastructure/routes";


function App() {
  const [toogle, setToogle] = useState(false);
  
  const getRoutes = (rts:any) => {
    return rts.map((prop:any, key:any) => {
      const Component = prop.component;
      return (
        <Route
          path={prop.path}
          element={<Component />}
          key={key}
        />
      );
    });
  };
  return (
    <div className="App">
      <div className="container">
        <NavigationBar toogle={toogle} routes={routes} />
        <Main toogle={toogle}>
          <TopBar toogle={toogle} setToogle={(e:any) => setToogle(e)} />
          <div className="main-panel">
            <BrowserRouter>
              <Routes>{getRoutes(routes)}</Routes>
            </BrowserRouter>
          </div>
        </Main>
      </div>
    </div>
  );
}

export default App;
