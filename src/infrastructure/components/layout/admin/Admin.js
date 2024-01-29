import { useState } from "react";
import { Outlet } from "react-router-dom";

import routes from "../../../routes";
import { NavigationBar, TopBar } from "../..";
import { Main } from "../../../style";

function Admin() {
  const [toogle, setToogle] = useState(false);
  
  
  return (
    <div className="Admin">
      <div className="container">
        <NavigationBar toogle={toogle} routes={routes} />
        <Main toogle={toogle}>
          <TopBar toogle={toogle} setToogle={(e) => setToogle(e)} />
          <div className="main-panel">
            <Outlet />
          </div>
        </Main>
      </div>
    </div>
  );
}

export default Admin;
