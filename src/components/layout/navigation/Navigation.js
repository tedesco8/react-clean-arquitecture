import React from "react";
import { NavLink } from "react-router-dom";
import { Navigation, Ul, Li, Ancla, Icon, Title } from "./style";

function NavigationComponent({ toogle, routes }) {
  return (
    <Navigation toogle={toogle}>
      <Ul>
        <Li>
          <Ancla to="/">
            <Icon>
              <ion-icon name="logo-react"></ion-icon>
            </Icon>
            <Title>React Dashboard</Title>
          </Ancla>
        </Li>
        {routes.map((prop, key) => {
          if (prop.invisible) return null;
          if (!prop.redirect)
            return (
              <Li key={key}>
                <Ancla href={prop.path}>
                  <Icon>
                    <ion-icon name={prop.icon}></ion-icon>
                  </Icon>
                  <Title>{prop.name}</Title>
                </Ancla>
              </Li>
            );
        })}
      </Ul>
    </Navigation>
  );
}

export default NavigationComponent;
