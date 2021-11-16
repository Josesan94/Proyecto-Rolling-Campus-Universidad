import React, {useState}  from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../styles/loginPage.css'


const Register = () => {
	const [formularioEnviado, setFormularioEnviado] = useState(false);

	return (
		<>
		<Formik
		    initialValues = {{
				nombre:'',
				apellido:'',
				correo: '',
				contraseña: '',
				celular:'',
				direccion:'',
				puesto:'',



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
				setTimeout(() => setFormularioEnviado(false), 5000)
				
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
					<label htmlFor="apellido">Apellido</label>
					<Field
						type="text"
						name="apellido"
						placeholder="apellido"
						id="apellido"
						
					/>
					<ErrorMessage name="apellido" component={() => (
                          <div className="error">{errors.apellido}</div>
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
				<div>
					<label htmlFor="celular">Celular</label>
					<Field
						type="text"
						name="celular"
						placeholder="celular"
						id="celular"
						

					/>
					<ErrorMessage name="celular" component={() => (
                          <div className="error">{errors.celular}</div>
					)}/>
				</div>
				<div>
					<label htmlFor="direccion">Direccion</label>
					<Field
						type="text"
						name="direccion"
						placeholder="direccion"
						id="direccion"
						

					/>
					<ErrorMessage name="direccion" component={() => (
                          <div className="error">{errors.direccion}</div>
					)}/>
				</div>
				
				
				<div>
					<label htmlFor="contraseña">Contraseña</label>
					<Field
						type="password"
						name="contraseña"
						placeholder="contraseña"
						id="contraseña"
						

					/>
					<ErrorMessage name="contraseña" component={() => (
                          <div className="error">{errors.contraseña}</div>
					)}/>
				</div>
				<div>
					<label htmlFor="puesto">Puesto</label>
					<Field
						type="text"
						name="puesto"
						placeholder="puesto"
						id="puesto"
						

					/>
					<ErrorMessage name="contraseña" component={() => (
                          <div className="error">{errors.puesto}</div>
					)}/>
				</div>



				<button type="submit">Enviar</button>
				{(formularioEnviado) ? <p className="exito">usuario logeado!</p> : ""}
			</Form>
			)}
			</Formik>
		</>
	)
}

export default Register;


