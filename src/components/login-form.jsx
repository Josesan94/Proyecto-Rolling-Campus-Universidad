import React  from 'react';
import { Formik } from 'formik';
import '../styles/loginPage.css'


const Login = () => {
	

	

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
			onSubmit = {(valores) =>{
				console.log(valores)
				console.log('formulario enviado')
			}}
		>
			{({values, errors,  handleSubmit, handleChange, handleBlur}) => (

			
			<form action="" onSubmit={handleSubmit} className="formulario">
				 
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={values.nombre}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.nombre ? (<div className="error">{errors.nombre}</div>) : ""}
				</div>

				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="email"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={values.correo}
						onChange={handleChange}
						onBlur={handleBlur}

					/>
					{errors.correo ? (<div className="error">{errors.correo}</div>) : ""}
				</div>

				<button type="submit">Enviar</button>
			</form>
			)}
			</Formik>
		</>
	);
}

export default Login;