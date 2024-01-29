import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Wrapper, ImageWrapper, Form, Button } from "./style.js";
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
            src="https://res.cloudinary.com/ddzlqebet/image/upload/v1595882498/TedescoDev/tedescodev_fs4b5s.png"
            alt="SuperGym"
          />
        </ImageWrapper>
        <TextInput
          type="text"
          name="userName" 
          placeholder="username"
          value={form.userName}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />
        <Button>Entrar</Button>
      </Form>
    </Wrapper>
  );
}

export default SignInPage;