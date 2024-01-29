import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Wrapper, ImageWrapper, Form, Button, SocialIcons, Ancla } from "./style.js";
// import { encryptStr } from "../../utils";
// import { signIn } from "../../../domain/services/auth.service";
import { TextInput } from "../../../components";

function SignInPage() {
  // Destructing our hook to get the `login` function
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   const body = {
    //     userName: form.userName,
    //     password: encryptStr(form.password),
    //   };
    //   try {
    //     const res = await signIn(body);
    //     if(res.token) {
    //       localStorage.setItem("token", res.token);
    //       return
    //     }
    //     toast.error(res.message);

    //   } catch(err) {
    //     toast.error(err);
    //   }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Wrapper>
      <Toaster toastOptions={{ position: "bottom-center" }} />
      <Form onSubmit={handleSubmit}>
        <ImageWrapper>
          <img
            src="https://res.cloudinary.com/ddzlqebet/image/upload/v1617034469/p5amfy7nzstzjlfnwpzg.jpg"
            alt="SuperGym"
          />

        </ImageWrapper>
        <TextInput
          type="text"
          name="userName"
          placeholder="Nombre de usuario"
          required
          value={form.userName}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Contraseña"
          required
          value={form.password}
          onChange={handleChange}
        />
        <Button>Entrar</Button>
        <SocialIcons>
          <Ancla href="https://www.facebook.com/TedescoDev">
            <ion-icon name="logo-facebook"></ion-icon>
          </Ancla>
          <Ancla href="https://www.linkedin.com/company/35638711/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </Ancla>
          <Ancla href="https://www.instagram.com/tedescodev/">
            <ion-icon name="logo-instagram"></ion-icon>
          </Ancla>
          <Ancla href="https://twitter.com/TedescoDev">
            <ion-icon name="logo-twitter"></ion-icon>
          </Ancla>
        </SocialIcons>
      </Form>
    </Wrapper>
  );
}

export default SignInPage;