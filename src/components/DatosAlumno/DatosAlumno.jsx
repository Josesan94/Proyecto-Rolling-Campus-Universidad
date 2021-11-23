import React, { useEffect, useState } from 'react';
import './DatosAlumno.css';
import LeerFila from './Leerfila';
import EditarFila from './EditarFila';
import { nanoid } from 'nanoid';
import HeaderProfile from '../HeaderProfile';
import { useAuthenticatedAxios } from '../../hooks/use-authenticated-axios';

function DatosAlumno() {
  const authenticatedAxios = useAuthenticatedAxios();
  const [contacts, setContacts] = useState([]);
  const [addData, setAddData] = useState({
    dni: '',
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  });

  const [editFormData, setEditFormData] = useState({
    dni: '',
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
    añoCursado: '',
  });
  const [editContactId, setEditContactId] = useState(null);

  useEffect(() => {
    authenticatedAxios.get('/users').then((response) => {
      setContacts(
        response.data.users.map((user) => ({
          ...user,
          dni: user.id,
          address: `${user.dir || ''} ${user.dir_num || ''}`,
          fullName: `${user.name || ''} ${user.surname || ''}`,
        })),
      );
    });
  }, [authenticatedAxios]);

  const handleAddData = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name'); //obtenemos el nombre del input
    const fieldValue = e.target.value; //obtenemos el valor del input

    const newFormData = { ...addData }; // hacemos una copia del form existente de modo que podamos cambiarlo sin mutar el estado

    newFormData[fieldName] = fieldValue; //actualizamos el objeto con el nuevo valor que el usuario escribio

    setAddData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddForm = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      dni: addData.dni,
      fullName: addData.fullName,
      address: addData.address,
      phoneNumber: addData.phoneNumber,
      email: addData.email,
      añoCursado: addData.añoCursado,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleSaveForm = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      dni: editFormData.dni,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
      añoCursado: editFormData.añoCursado,
    };
    const saveContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    saveContacts[index] = editedContact;

    setContacts(saveContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      dni: contact.dni,
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      añoCursado: contact.añoCursado,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  //   const handleDeleteClick = (contactId) => {
  //     const newContacts = [...contacts];

  //     const index = contacts.findIndex((contact) => contact.id === contactId);

  //     newContacts.splice(index, 1);

  //     setContacts(newContacts);
  //   };

  return (
    <>
      <header>
        <HeaderProfile />{' '}
      </header>
      <div className="container-fluid bg-white justify-content-center align-items-center">
        <h1>Listado Alumnos</h1>

        <h2>Añadir Alumno</h2>

        <form className="data-form" onSubmit={handleAddForm}>
          <input
            style={{ border: '1px solid black' }}
            type="text"
            name="dni"
            required="required"
            placeholder="coloque el dni"
            onChange={handleAddData}
          />

          <input
            style={{ border: '1px solid black' }}
            type="text"
            name="fullName"
            required="required"
            placeholder="nombre completo"
            onChange={handleAddData}
          />
          <input
            style={{ border: '1px solid black' }}
            type="text"
            name="Adress"
            required="required"
            placeholder="direc"
            onChange={handleAddData}
          />
          <input
            style={{ border: '1px solid black' }}
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="numero"
            onChange={handleAddData}
          />
          <input
            style={{ border: '1px solid black' }}
            type="text"
            name="email"
            required="required"
            placeholder="email"
            onChange={handleAddData}
          />

          <button type="submit">Añadir</button>
        </form>

        <div className="table-container  ">
          <form onSubmit={handleSaveForm}>
            <table className="table-rwd">
              <thead>
                <tr>
                  <th>Dni</th>
                  <th>Nombre</th>
                  <th>Direccion</th>
                  {/* <th>Celular</th> */}
                  <th>email</th>
                  <th>Año cursado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <>
                    {editContactId === contact.id ? (
                      <EditarFila
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <LeerFila
                        contact={contact}
                        handleEditClick={handleEditClick}
                        // handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}

export default DatosAlumno;
