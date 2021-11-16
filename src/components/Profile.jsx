import React from 'react'
import CardsProfile from './CardsProfile/CardsProfile';
import '../styles/ProfilePage.css'
import HeaderProfile from './HeaderProfile';


function Profile() {
    

  return (
      <body>
          <header>
      <HeaderProfile/>
      </header>
      <div className="container-fluid ">
    <CardsProfile />
    </div>
    </body>

//     <div className="profile-body">
        
//         <div className="container"><h1>Bienvenido Usuario</h1></div>

//     <div className="profile-main">
      
//         <div className="sedans">
        

//             <h2 className="profile-font">Estado Academico</h2>
//             <p className="car-description">Accede a tu historial academico y filtra por las opciones que desees.</p>

//             <button className="button-profile">Click aqui</button>
//         </div>

//         <div className="suvs">
            

//             <h2 className="profile-font">Generar cupon de pago</h2>
//             <p className="car-description">Accede a nuestra plataforma de pagos para gestionar los tuyos.</p>
        
//             <button class="button-profile">Learn More</button>
//         </div>

//         <div className="luxury">
        

//             <h2 className="profile-font">Acreditar un pago</h2>
//             <p className="car-description">Deja constancia electronica de los pagos efectuados.</p>

//             <button className="button-profile">Click aqui</button>
//         </div>

//         </div>


    


// </div>
  );
}

export default Profile;
