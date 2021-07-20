import React from 'react';
import Clientcard from './Clientcard';


const Client = () => {
    return(
    <>
     <div className="client pt-bg-light py-4">
         <div className="container-fluid">
            <div className="row">
               <div className="col-sm-12">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-desk_num="6"
                     data-lap_num="4" data-tab_num="3" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                     data-loop="true" data-margin="30">
                    <Clientcard 
                    img1="images/client/01.png" 
                    img2="images/client/001.png"  />
                    <Clientcard 
                    img1="images/client/02.png" 
                    img2="images/client/002.png"  />
                      <Clientcard 
                    img1="images/client/03.png" 
                    img2="images/client/003.png"  />  
                    <Clientcard 
                    img1="images/client/04.png" 
                    img2="images/client/004.png"  />  
                    <Clientcard 
                    img1="images/client/05.png" 
                    img2="images/client/005.png"  />  
                    <Clientcard 
                    img1="images/client/06.png" 
                    img2="images/client/006.png"  /> 
                     <Clientcard 
                    img1="images/client/07.png" 
                    img2="images/client/007.png"  /> 
                     <Clientcard 
                    img1="images/client/08.png" 
                    img2="images/client/008.png"  />

                  </div>
               </div>
            </div>
         </div>
         </div>
      </>
    );

}
export default Client;