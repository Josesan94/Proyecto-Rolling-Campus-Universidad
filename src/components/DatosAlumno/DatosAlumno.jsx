import React,{useState} from 'react'
import './DatosAlumno.css'
import data from './data.json'
import LeerFila from './Leerfila';
import EditarFila from './EditarFila';
import { nanoid } from "nanoid";

function DatosAlumno() {
    const [contacts, setContacts] = useState(data);
    const [addData, setAddData] = useState({
        dni: "",
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
      });

    const [editFormData, setEditFormData] = useState({
        dni:'',
        fullName:'',
        address:'',
        phoneNumber:'',
        email:'',
    });
    const [editContactId, setEditContactId] = useState(null );
    
   const handleAddData = (e) => {
       e.preventDefault();

       const fieldName = e.target.getAttribute('name'); //obtenemos el nombre del input
       const fieldValue = e.target.value ;//obtenemos el valor del input


       const newFormData = {...addData} // hacemos una copia del form existente de modo que podamos cambiarlo sin mutar el estado

       newFormData[fieldName] = fieldValue; //actualizamos el objeto con el nuevo valor que el usuario escribio

       setAddData(newFormData);
   }

    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);

    }


   const handleAddForm = (e) => {
       e.preventDefault();

       const newContact = {
           id:nanoid(),
        dni:addData.dni,
        fullName:addData.fullName,
        address:addData.address,
        phoneNumber:addData.phoneNumber,
        email:addData.email,
       };

       const newContacts = [...contacts,newContact];
       setContacts(newContacts);








   }

   const handleSaveForm = (e) => {
       e.preventDefault();

       const editedContact = {
           id:editContactId,
           dni:editFormData.dni,
           fullName:editFormData.fullName,
           address:editFormData.address,
           phoneNumber:editFormData.phoneNumber,
           email: editFormData.email,

       };
       const saveContacts = [...contacts];

       const index = contacts.findIndex((contact) => contact.id === editContactId);

       saveContacts[index] = editedContact;


       setContacts(saveContacts)
       setEditContactId(null);
   }

   const handleEditClick = (e,contact) => {
       e.preventDefault();
       setEditContactId(contact.id)

       const formValues= {
           dni: contact.dni,
           fullName:contact.fullName,
           address:contact.address,
           phoneNumber:contact.phoneNumber,
           email:contact.email
       }

       setEditFormData(formValues)
   }

   const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

   

    return (
        <div className="app-container bg-white">
            <form onSubmit={ handleSaveForm}>
            <table>
                <thead>
                    <tr>
                        <th>Dni</th>
                        <th>fullName</th>
                        <th>address</th>
                        <th>phoneNumber</th>
                        <th>email</th>
                        <th>Actions</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <>
                        {editContactId === contact.id ? (
                             <EditarFila
                              editFormData={editFormData} handleEditFormChange={handleEditFormChange}
                              handleCancelClick={handleCancelClick} 
                              
                              />
                        ):
                        (
                            <LeerFila contact ={contact} 
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
                            />
                        )}
                       
                        
                        
                        
                        </>
                       
                    ))}
                    
                </tbody>
            </table>
            </form>

            <h2>Añadir datos</h2>
            <form className="data-form" onSubmit={handleAddForm}>
                <input  
                style={{border:"1px solid black"}}
                 type="text"
                  name="dni" 
                  required="required" 
                  placeholder="coloque el dni" 
                  onChange={handleAddData}/>
                  
                <input style={{border:"1px solid black"}} type="text" name="fullName" required="required" placeholder="nombre completo" onChange={handleAddData}/>
                <input style={{border:"1px solid black"}} type="text" name="Adress" required="required" placeholder="direc"  onChange={handleAddData}/>
                <input  style={{border:"1px solid black"}} type="text" name="phoneNumber" required="required" placeholder="numero"  onChange={handleAddData}/>
                <input style={{border:"1px solid black"}} type="text" name="email" required="required" placeholder="email"  onChange={handleAddData}/>
               
                <button type="submit">Añadir</button>
            </form>
            
        </div>
    )
}

export default DatosAlumno;

