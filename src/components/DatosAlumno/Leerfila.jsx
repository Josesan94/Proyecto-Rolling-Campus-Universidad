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
      <td>{contact.dni}</td>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, contact)}>
          Edit
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
