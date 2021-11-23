import React from 'react'
import CardsProfile from '../CardsProfile/CardsProfile';
import './StyleProfile.css'
import HeaderProfile from '../HeaderProfile';
import {BoxContainer} from '../accountBox/common'
import styled from 'styled-components';
import {motion, transform} from 'framer-motion'
import {Link} from 'react-router-dom'
import useAuth from '../../components/auth/useAuth';


const BackDropp = styled(motion.div)`
  
  padding:2rem;
  box-shadow: 3px 5px 2.5px rgba(53, 53, 53, 0.8);
  
  background: rgb(0, 0, 0);
  background: linear-gradient(
    58deg,
    #ad805b 20%,
    #aab6fc 100%
  );
 

  
`;







 const ButtonSubm = styled.button`
 overflow: hidden;
 width: 100%;
  padding: 12px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(15, 241, 64);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
  &:disabled {
    filter:contrast(0.7)
  }
 
 
 
 `;
  
  const fadeLeft = {
    hidden: {opacity:0,x:-100},
    visible:{opacity:1,x:0}
      }



function Profile() {
  const { user} = useAuth();

  return (
    <>
       <BoxContainer>
        <div class="container">
        
       

          <div
            class="
               col-md
              px-5
              d-flex
              flex-column
              my-5
              align-items-center
            "
          >
             
            
            <section
              class="
                row
                my-3
                me-3
                p-3
                d-flex
                justify-content-center
                align-items-center
                placaFondo
                w-100
              "
              
            >
              <BackDropp
              variants={fadeLeft}
              initial='hidden'
              animate='visible'
              transition={{duration: 1}}
              
              
              
              >
                <div
              class="
                row
                my-5
                me-3
                p-3

                d-flex
                justify-content-center
                align-items-center
                placaFondo
                w-100
              "
              style={{}}
            >
              <div class="col">
                
                <motion.h3
                initial={{x:"200vw"}}
                animate={{x:"0",transition:{duration:1,ease:'easeInOut'}}}

                >Bienvenido/a {user.name}
                </motion.h3>
                </div>
              <div
                div class="col"
              >
                <motion.h1
                initial={{x:"-200vw"}}
                animate={{x:"0",transition:{duration:1,ease:'easeInOut'}}}

                >
                </motion.h1>
              </div>
              
              </div>
              
              <div class="row d-flex flex-column justify-content-center">
                <div id="headerCalendar">
                  <div id="monthDisplay"></div>
                  <div>
                    <Link to = {'/datos'} style={{textDecoration:"none"}}>
                  <ButtonSubm type="submit"   >
                      Mis datos
                    </ButtonSubm>
                    </Link>
                    <Link to = {'/tables'} style={{textDecoration:"none"}}>
                  <ButtonSubm type="submit"   >
                      Estado Academico
                    </ButtonSubm>
                    </Link>
                    <Link to = {'/login'} style={{textDecoration:"none"}}>
                  <ButtonSubm type="submit"   >
                      Gestion de pagos
                    </ButtonSubm>
                    </Link>
                    
                  </div>
                </div>
                

                

                <div id="calendar" class="pb-4"></div>
              </div>
              </BackDropp>
              
              
            </section>
            
            
           
              
              </div>
              
              </div>
              

       </BoxContainer>
       </>
    
    
    );



    
  
}

export default Profile;


{/* //   <body>
    //       <header>
    //   <HeaderProfile/>
    //   </header>
    //   <div className="container-fluid ">
    // <CardsProfile />
    // </div>
    // </body>

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


    


// </div> */}