import React from "react";
import { Navigation, Ul, Li, Ancla, Icon, Title } from "./style";

function NavigationComponent({ toogle }) {
  return (
    <Navigation toogle={toogle}>
      <Ul>
        <Li>
          <Ancla href="#">
            <Icon>
              <ion-icon name="logo-react"></ion-icon>
            </Icon>
            <Title>React Dashboard</Title>
          </Ancla>
        </Li>
        <Li>
          <Ancla href="#">
            <Icon>
              <ion-icon name="storefront-outline"></ion-icon>
            </Icon>
            <Title>Commerce</Title>
          </Ancla>
        </Li>
        <Li>
          <Ancla href="#">
            <Icon>
              <ion-icon name="business-outline"></ion-icon>
            </Icon>
            <Title>Business</Title>
          </Ancla>
        </Li>
        <Li>
          <Ancla href="#">
            <Icon>
              <ion-icon name="people-outline"></ion-icon>
            </Icon>
            <Title>Customers</Title>
          </Ancla>
        </Li>
        <Li>
          <Ancla href="#">
            <Icon>
              <ion-icon name="card-outline"></ion-icon>
            </Icon>
            <Title>Sales</Title>
          </Ancla>
        </Li>
        <Li>
          <Ancla href="#">
            <Icon>
              <ion-icon name="reader-outline"></ion-icon>
            </Icon>
            <Title>Consents</Title>
          </Ancla>
        </Li>
        <Li>
          <Ancla href="#">
            <Icon>
              <ion-icon name="options-outline"></ion-icon>
            </Icon>
            <Title>Preferences</Title>
          </Ancla>
        </Li>
        <Li>
          <Ancla href="#">
            <Icon>
              <ion-icon name="log-out-outline"></ion-icon>
            </Icon>
            <Title>Sign Out</Title>
          </Ancla>
        </Li>
      </Ul>
    </Navigation>
  );
}

export default NavigationComponent;
