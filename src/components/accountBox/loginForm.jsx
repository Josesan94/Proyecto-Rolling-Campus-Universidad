import { Field, useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Marginer } from "../marginer";
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormError,
  Input,
  MutedLink,
  ButtonSub,
} from "./common";
import { AccountContext } from "./accountContext";
import * as yup from "yup";
import axios from "axios";
import Link from "react-router-dom";

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    console.log(values)
    setError(null);
    const response = await axios
      .post("http://localhost:3002/api/login", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        console.log("error",err)
      });

    if (response) {
      alert("Autenticando usuario...");
    }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
      <FormError>{error ? error : ""}</FormError>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {
            <FieldError>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </FieldError>
          }
        </FieldContainer>
        <MutedLink href="#">Forgot Password?</MutedLink>
        <Marginer direction="vertical" margin={10} />
        
        <ButtonSub type="submit" disabled={!formik.isValid}>
          Ingresar 
        </ButtonSub>
        
      </FormContainer>
      
     
      <Marginer direction="vertical" margin={10} />
     
      
      <MutedLink href="#">
        Todavia no tenes una cuenta?
        <BoldLink href="#" onClick={switchToSignup}>
          Registrate
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin={5} />
    </BoxContainer>
  );
}

