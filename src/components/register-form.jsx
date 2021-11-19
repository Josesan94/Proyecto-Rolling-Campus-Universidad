// import React, {useState}  from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import '../styles/loginPage.css'
// import * as yup from 'yup'

// import axios from 'axios'

// const PASSWORD_REGEX= /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

// const NUMBER_REGEX = /(^\+[1-9]{1}[0-9]{3,14}$)/ ;

 

// const Register = () => {
// 	const [formularioEnviado, setFormularioEnviado] = useState(false);
// 	const [error, setError] = useState(null);
	

// 	return (
// 		<>
// 		<Formik
// 		    initialValues = {{
// 				nombre:'',
// 				apellido:'',
// 				correo: '',
// 				contraseña: '',
// 				confirmarContraseña: '',
// 				celular:'',
// 				direccion:'',
// 				puesto:'',



// 			}}


// 			validationSchema = {yup.object({
// 				nombre: yup.string().min(3,"Coloque su nombre correctamente").required(),
// 				apellido: yup.string().min(3,"Coloque su apellido correctamente").required(),
// 				correo:yup.string().email("coloque una direccion de correo valida").required(),
// 				// celular: yup.string().matches(NUMBER_REGEX, "Debe ingresar un numero valido").required() ,
// 				contraseña: yup.string().matches( PASSWORD_REGEX,"Debe crear una contraseña mas fuerte").required(),
// 				confirmarContraseña:yup
// 				.string()
// 				.required("por favor, confirma tu contraseña")
// 				.when("contraseña",{
// 					is: val => (val && val.length > 0 ? true : false),
// 					then: yup.string().oneOf([yup.ref("contraseña")], "las contraseñas no coinciden" )
// 				})
// 			})}

			


// 			 onSubmit =   { async (valores, {resetForm}) =>{
// 				const {confirmarContraseña,...data} = valores;

// 				const response =  await axios.post('http://localhost:3002/api/register', data)
// 				.catch((err) => {
// 					if(err & err.response)
// 					setError(error.response.data.message)
// 					setFormularioEnviado(null)
// 				});

// 				if (response && response.data) {
//                     setFormularioEnviado(response.data.message)
// 					resetForm()
// 					setError(null)
// 					setTimeout(() => setFormularioEnviado(false), 4000)
// 				}

				
// 				console.log('Formulario enviado')
// 				setFormularioEnviado(true)
				
				
// 			}}
           

// 		>
// 			{() => (

			
// 			<Form className="formulario">
				 
// 				<div>
// 					<label htmlFor="nombre">Nombre</label>
// 					<Field
// 						type="text"
// 						name="nombre"
// 						placeholder="Nombre"
// 						id="nombre"
						
// 					/>
// 					<p style={{ color: "red" }}><ErrorMessage name="nombre"  /></p>
					
// 				</div>
// 				<div>
// 					<label htmlFor="apellido">Apellido</label>
// 					<Field
// 						type="text"
// 						name="apellido"
// 						placeholder="apellido"
// 						id="apellido"
						
// 					/>
// 					<p style={{ color: "red" }}><ErrorMessage name="apellido"  /></p>
					
// 				</div>

// 				<div>
// 					<label htmlFor="correo">Correo</label>
// 					<Field
// 						type="email"
// 						name="correo"
// 						placeholder="Correo"
// 						id="correo"
						

// 					/>
// 					<p style={{ color: "red" }}><ErrorMessage name="correo"  /></p>
// 				</div>
// 				<div>
// 					<label htmlFor="celular">Celular</label>
// 					<Field
// 						type="text"
// 						name="celular"
// 						placeholder="celular"
// 						id="celular"
						

// 					/>
// 					<p style={{ color: "red" }}><ErrorMessage name="celular"  /></p>
// 				</div>
// 				<div>
// 					<label htmlFor="direccion">Direccion</label>
// 					<Field
// 						type="text"
// 						name="direccion"
// 						placeholder="direccion"
// 						id="direccion"
						

// 					/>
// 					<ErrorMessage name="direccion" />
// 				</div>
				
				
// 				<div>
// 					<label htmlFor="contraseña">Contraseña</label>
// 					<Field
// 						type="password"
// 						name="contraseña"
// 						placeholder="contraseña"
// 						id="contraseña"
						

// 					/>
// 					<p style={{ color: "red" }}><ErrorMessage name="contraseña"  /></p>
// 				</div>
// 				<div>
// 					<label htmlFor="confirmarContraseña">Confirmar Contraseña</label>
// 					<Field
// 						type="password"
// 						name="confirmarContraseña"
// 						placeholder="confirmar Contraseña"
// 						id="confirmarContraseña"
						

// 					/>
// 					<p style={{ color: "red" }}><ErrorMessage name="confirmarContraseña"  /></p>
// 				</div>
// 				<div>
// 					<label htmlFor="puesto">Puesto</label>
// 					<Field
// 						type="text"
// 						name="puesto"
// 						placeholder="puesto"
// 						id="puesto"
						

// 					/>
// 					<ErrorMessage name="puesto" />
// 				</div>



// 				<button type="submit" >Enviar</button>
// 				{(formularioEnviado) ? <p className="exito">usuario logeado!</p> : ""}
// 				{(!formularioEnviado) ? <p className="error">{error}</p> : ""}
// 			</Form>
// 			)}
// 			</Formik>
// 		</>
// 	)
// }

// export default Register;


