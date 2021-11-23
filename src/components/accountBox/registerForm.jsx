import { Field, useFormik } from 'formik';
import React, { useContext, useState, useEffect } from 'react';
import { Marginer } from '../marginer';
import {
  BoldLink,
  BoxContainer,
  FieldContainer,
  FieldError,
  FormContainer,
  FormSuccess,
  Input,
  MutedLink,
  ButtonSub,
  FormError,
} from './common';
import { AccountContext } from './accountContext';
import * as yup from 'yup';
import axios from 'axios';
import { getRoles } from '@testing-library/react';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Please enter you real name')
    .required('Full name is required!'),
  email: yup.string().email('Please enter a valid email address').required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, 'Please enter a strong password')
    .required(),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Password does not match'),
    }),
});

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    console.log(values);
    // const { confirmPassword, ...data } = values;

    axiosInstance.post('/add-user', values).then((response) => {
      console.log('respuesta del servidor', response);

      if (response && response.data) {
        console.log('formulario exitoso');
        setError(null);
        setSuccess(response.data.message);
        formik.resetForm();
      }
    });
  };

  

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      dir: '',
      id: '',
      password: '',
      confirmPassword: '',
      role: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log('Error', error);

  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : ''}</FormSuccess>}
      {!success && <FormError>{error ? error : ''}</FormError>}
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="name"
            placeholder="Nombre completo"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="dir"
            placeholder="Domicilio"
            value={formik.values.dir}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.dir && formik.errors.dir ? formik.errors.dir : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="id"
            placeholder="DNI"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.id && formik.errors.id ? formik.errors.id : ''}
          </FieldError>
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
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ''}
          </FieldError>
        </FieldContainer>
        <FieldContainer>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ''}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="role"
            type="select"
            placeholder="rol"
            value={formik.values.role.TEACHER_ROLE}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.role && formik.errors.role
              ? formik.errors.role
              : ''}
          </FieldError>
        </FieldContainer>
        {/* <FieldContainer>
          <Field type="radio" name="role" value ={formik.values.role.STUDENT_ROLE}/>
        </FieldContainer>
        <FieldContainer>
          <Field type="radio" name="role" value ={formik.values.role.TEACHER_ROLE}/>
        </FieldContainer> */}
        <Marginer direction="vertical" margin={10} />
        <ButtonSub type="submit" disabled={!formik.isValid}>
          Registrarse
        </ButtonSub>
      </FormContainer>

      <Marginer direction="vertical" margin={5} />
      <MutedLink >
        ¿Ya tenes una cuenta?
        <BoldLink  onClick={switchToSignin}>
          Ingresá
        </BoldLink>
      </MutedLink>
      {}
    </BoxContainer>
  );
}
