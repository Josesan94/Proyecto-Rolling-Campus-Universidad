import React, {useState}  from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../styles/loginPage.css'
import { Link } from 'react-router-dom';

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
                <Link to={'/profile'}> 
				<button type="submit">Enviar</button>
				</Link>
				{(formularioEnviado) ? <p className="exito">usuario logeado!</p> : ""}
			</Form>
			)}
			</Formik>
		</>
	);
}

export default Login;