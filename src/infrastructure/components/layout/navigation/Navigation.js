import React from "react";
import { Navigation, Ul, Li, Ancla, Icon, Title, Center } from "./style";

function NavigationComponent({ toogle, routes }) {
  return (
    <Navigation toogle={toogle}>
      <Ul>
        <Li>
          <Ancla center to="/">
            <Center>
              <img
                alt="tedescodev"
                width={150}
                src="https://res.cloudinary.com/ddzlqebet/image/upload/v1595882498/TedescoDev/tedescodev_fs4b5s.png"
              />
            </Center>
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
