import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
    height: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  min-height: 350px;
  padding: 1.3rem;
  border-radius: 20px;
  margin: -25px 0 0 -25px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: var(--white);
  font-weight: 600;
  text-transform: uppercase;
  background: var(--mainColor);
  border: none;
  border-radius: 10px;
  outline: 0;
  cursor: pointer;
  margin-top: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: var(--mainColor);
    border: 1px solid var(--accentColor);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const SocialIcons = styled.div`
  width: 100%;
  margin: 1.3rem 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ion-icon {
    margin: 5px;
    font-size: 1.2em;
  }
`;

const Ancla = styled.a`

`
export { Wrapper, ImageWrapper, Form, Button, SocialIcons, Ancla };