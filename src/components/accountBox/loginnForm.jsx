// import React, { useState, useContext } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// import {
//   BoldLink,
//   BoxContainer,
//   FormContainer,
//   Input,
//   MutedLink,
//   ButtonSub,
// } from "./common";
// import { Marginer } from "../marginer";
// import { AccountContext } from "./accountContext";
// import { Link } from "react-router-dom";
// import * as yup from "yup";
// import axios from "axios";

//  export function Login (props) {
//   const { switchToSignup } = useContext(AccountContext);
//   const [formularioEnviado, setFormularioEnviado] = useState(false);
//   const [error, setError] = useState(null);

//   return (
//     <>
//       <Formik
//         initialValues={{
//           correo: "",
//           contraseña: "",
//         }}
//         validationSchema={yup.object({
//           email: yup.string().required(),
//           contraseña: yup.string().required(),
//         })}
//         onSubmit={async (valores, { resetForm }) => {
//           const response = await axios
//             .post("htttp://localhost:3002/api/login", valores)
//             .catch((err) => {
//               if (err && err.response) setError(err.response.data.message);
//             });

//           if (response) {
//             alert("welcome back soldier...Authenticating");
//           }

//           resetForm();
//           console.log("Formulario enviado");
//           setFormularioEnviado(true);
//           setTimeout(() => setFormularioEnviado(false), 5000);
//         }}
//       >
//         {() => (
//           <BoxContainer>
//             <FormContainer>
              
                
//                   <label htmlFor="correo">Correo</label>
//                   <Field
//                     type="text"
//                     name="correo"
//                     placeholder="Correo"
//                     id="correo"
// 					className="input-field"
//                   />
//                   <p style={{ color: "red" }}>
//                     <ErrorMessage name="correo" />
//                   </p>
                

//                 <div>
//                   <label htmlFor="contraseña">Contraseña</label>
//                   <Field
//                     type="password"
//                     name="contraseña"
//                     placeholder="Contraseña"
//                     id="contraseña"
//                     className="input-field"
//                   />
//                   <p style={{ color: "red" }}>
//                     <ErrorMessage name="contraseña" />
//                   </p>
//                 </div>
//                 {/* <Link to={'/profile'}>  */}
//                 <button type="submit">Enviar</button>
//                 {/* </Link> */}
//                 {formularioEnviado ? (
//                   <p className="exito">usuario logeado!</p>
//                 ) : (
//                   ""
//                 )}
              
//             </FormContainer>
//             <Marginer direction="vertical" margin={10} />
//             <MutedLink href="#">Forget your password?</MutedLink>
//             <Marginer direction="vertical" margin="1.6em" />
//             <SubmitButton type="submit">Signin</SubmitButton>
//             <Marginer direction="vertical" margin="1em" />
//             <MutedLink href="#">
//               Don't have an account?{" "}
              
//             </MutedLink>
//           </BoxContainer>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default Login;
