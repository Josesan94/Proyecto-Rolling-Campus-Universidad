import React, {useState}  from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../styles/loginPage.css'
import { Link } from 'react-router-dom';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3001/api'
})

let axiosAuthorized;

const Login = () => {
	


	const [formularioEnviado, setFormularioEnviado] = useState(false);

	return (
		<>
		<Formik
		    initialValues = {{
				nombre:'',
				correo: '',
			}}
			validate ={(valores) => {
				let errores = {};
              //validacion nombre
            if(!valores.nombre) {
				errores.nombre = 'por favor ingresa un nombre'
			} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
				errores.nombre = 'el nombre solo puede contener letras y espacios'
			}

               //validacion correo
			if(!valores.correo) {
				errores.correo = 'por favor ingresa un correo'
			} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
				errores.correo = 'el correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
			}

			return errores;
			
			}}
			onSubmit = {(valores, {resetForm}) =>{
				resetForm()
				console.log('Formulario enviado')
				setFormularioEnviado(true)

				axiosInstance.post('/login',{
					email:valores.correo,
					password: valores.nombre
				})
				.then(resp=>{
					console.log(resp);

					localStorage.setItem('token',resp.data.token);

					axiosAuthorized = axios.create({
						baseURL:'http://localhost:3001/api',
						headers:{
							Authorization: `Bearer ${resp.data.token}`
						}
					});

					axiosAuthorized.get('/users').then(console.log);
					axiosInstance.get('/users').then(console.log)
				})
			
				// axiosInstance
        //   .post("/add-user", {
        //     name: "Usuario prueba",
        //     email: "email@email.com",
        //     password: "password",
        //     surname: "apelldo",
        //     role: "TEACHER_ROLE",
				// 		id:'123456789'
        //   })
        //   .then(console.log)
        //   .catch(console.log);
				
			}}
		>
			{({ errors }) => (

			
			<Form className="formulario">
				 
				<div>
					<label htmlFor="nombre">Nombre</label>
					<Field
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						
					/>
					<ErrorMessage name="nombre" component={() => (
                          <div className="error">{errors.nombre}</div>
					)}/>
					
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<Field
						type="email"
						name="correo"
						placeholder="Correo"
						id="correo"
						

					/>
					<ErrorMessage name="correo" component={() => (
                          <div className="error">{errors.correo}</div>
					)}/>
				</div>
                
				<button type="submit">Enviar</button>
				
				{(formularioEnviado) ? <p className="exito">usuario logeado!</p> : ""}
			</Form>
			)}
			</Formik>
		</>
	);
}

export default Login;