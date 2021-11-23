import React from 'react'

function EditarFila({ editFormData,handleEditFormChange,handleCancelClick }) {
    return (
        <tr>
            <td>
                <input  
                type="text" 
                required="required" 
                placeholder="enter a dni"
                name="dni" 
                onChange={handleEditFormChange}
                value={editFormData.dni}></input>
            </td>
            <td>
            <input  type="text" required="required" placeholder="enter a name"
                name="fullName" onChange={handleEditFormChange}
                value={editFormData.fullName}/>
            </td>
            <td>
            <input  type="text" required="required" placeholder="enter an adress"
                name="address" onChange={handleEditFormChange}
                value={editFormData.address}/>
            </td>
            <td>
            <input  type="text" required="required" placeholder="enter a number"
                name="phoneNumber" onChange={handleEditFormChange}
                value={editFormData.phoneNumber}/>
            </td>
            <td><input  type="email" required="required" placeholder="enter a email"
                name="email" onChange={handleEditFormChange}
                value={editFormData.email}/>
                </td>
                <td><input  type="text" required="required" placeholder="Año de cursado"
                name="añoCursado" onChange={handleEditFormChange}
                value={editFormData.añoCursado}/>
                </td>
                <td>
                    <button type="submit" className="bg-black" >Guardar</button>
                    <button type="button" onClick={handleCancelClick}>
          Cancelar
        </button>
                </td>
        </tr>
    )
}

export default EditarFila
