import React, { Fragment } from "react";
//BOOSTRAP COMPONENTS
import {} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { init } from "emailjs-com";

import "../styles/formContact.css";
init("user_x9uQAoJjR4VTAtwZGaaXR");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function FormContact(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await sleep(2000);
    if (data.username === "bill") {
      alert(JSON.stringify(data));
    } else {
      alert("There is an error");
    }
  };

  //    //Para enviar email a gmail com emailjs
  //    var templateParams = {
  //      from_name: 'Universidad',
  //      user_name: 'username',
  //      message:'message',
  //      destinatario:'email',
  //  };

  //  function enviaMail(){
  //  emailjs.send('service_ysk1goe', 'template_gjy3qgo', templateParams)
  //    .then(function(response) {
  //       console.log('SUCCESS!', response.status, response.text);
  //    }, function(error) {
  //       console.log('FAILED...', error);
  //    });
  //    }

  console.log(errors);
  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <hr/>
        <input placeholder="Nombre" {...register("username")} />
        <input placeholder="Apellido" {...register("lastName")} />
        <input
          placeholder="example@hotmail.com"
          type="text"
          {...register("email")}
        />
        <div class="input-group">
          <textarea
            id="message"
            name="message"
            class="form-control"
            minlength="10"
            maxlength="200"
            required
            aria-label="With textarea"
            placeholder="Comentario"
          ></textarea>
        </div>
        <div style={{ color: "red" }}>
          {Object.keys(errors).length > 0 &&
            "There are errors, check your console."}
        </div>
        <input type="submit" onClick="enviaMail()" />
      </form>
    </Fragment>
  );
}

export default FormContact;
