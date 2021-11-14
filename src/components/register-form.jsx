import React, {useState} from 'react';
import '../styles/loginPage.css'


const Register = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	return (
		<>
			<form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Nombre</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
                <div>
					<label htmlFor="nombre">Apellido</label>
					<input
						type="text"
						name="apellido"
						placeholder="Apellido"
						id="apellido"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
                <div>
					<label htmlFor="correo">Correo</label>
					<input
						type="text"
						name="correo"
						placeholder="Correo"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>
                <div>
					<label htmlFor="nombre">Contraseña</label>
					<input
						type="password"
						name="contraseña"
						placeholder="Contraseña"
						id="contraseña"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
                <div>
					<label htmlFor="nombre">Celular</label>
					<input
						type="text"
						name="celular"
						placeholder="celular"
						id="celular"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
                <div>
					<label htmlFor="nombre">Direccion</label>
					<input
						type="text"
						name="direccion"
						placeholder="Direccion"
						id="direccion"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
                <div>
					<label htmlFor="nombre">ID</label>
					<input
						type="text"
						name="id"
						placeholder="ID"
						id="id"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
				

				
			
            <div>
					<label htmlFor="nombre">Puesto</label>
					<input
						type="text"
						name="puesto"
						placeholder="Puesto"
						id="puesto"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
				

				<button type="submit">Enviar</button>
			</form>
		</>
	);
}

export default Register;