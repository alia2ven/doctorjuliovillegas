

import React from 'react'
import BodyComponent from '../Components/BodyComponent'
import HeaderComponent from '../Components/HeaderComponent'
import Bannercartas from '../Components/Banners/BannercartasComponent.jsx';
import ServiciosComponent from '../Components/ServiciosComponent.jsx';
import TestimoniosComponent from '../Components/TestimoniosComponent.jsx';
import PromocionesComponent from '../Components/PromocionesComponent.jsx';
import FooterComponent from '../Components/FooterComponent.jsx';


function Home() {
  return (
    <div>
      {/*<Bannerofertas /> */}
 <HeaderComponent />

 {/*<Bannercartas />*/} 

    {/*<AvatarComponent />  */}
      <BodyComponent />
      <ServiciosComponent />
      <TestimoniosComponent />
       {/*<PromocionesComponent />  */}

<FooterComponent />
 


                 </div>
  )
}

export default Home

{/*
          También podemos tener
          comentarios multilínea
      */}
