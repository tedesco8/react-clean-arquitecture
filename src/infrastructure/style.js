import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  width: ${(props) => (props.toogle ? "calc(100% - 80px)" : "calc(100% - 300px)")};
  left: ${(props) => (props.toogle ? "80px" : "300px")};
  min-height: 100vh;
  background: var(--white);
  transition: 0.5s;
`;

export { Main };
