import React, {useState}from "react";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';




function LeerFila({ contact, handleEditClick, handleDeleteClick }) {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };




  return (
    <tr>
      <td data-label="Dni">{contact.dni}</td>
      <td data-label="Nombre">{contact.fullName}</td>
      <td data-label="Direccion">{contact.address}</td>
      <td data-label="Celular">{contact.phoneNumber}</td>
      <td data-label="Email">{contact.email}</td>
      <td data-label="Año cursado">Primer año</td>
      <td data-label="Acciones">
        <button type="button" onClick={(e) => handleEditClick(e, contact)}>
          Editar
        </button>
        {/* <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button> */}
        <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label=""
        
       
      />
     <p> {state.checkedB ? "usuario activo" : "usuario inactivo"}</p>
      </td>
    </tr>
  );
}

export default LeerFila;
