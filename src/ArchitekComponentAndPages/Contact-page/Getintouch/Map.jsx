import React from 'react';


const Map = () => {
    return(
    <>
     <div className="position-relative">
         <iframe title="map" className="pt-ifrm"
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=5&amp;output=embed&amp;iwloc=near"
            aria-label="London Eye, London, United Kingdom"></iframe>
      </div>
      </>
    );

}
export default Map;