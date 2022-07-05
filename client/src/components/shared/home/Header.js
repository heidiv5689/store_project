import React from "react";







const Header = () => {

return(



<header>
        
     <div className="container-fluid h-100" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}} >
     <div className="row align-items-center justify-content-center text-center text-white h-100">
     <div className="col-lg-8"> 
     
     <h1 className="display-1 font-weight-bold mb-3">
							Website
							
			</h1>

      <hr className="my-4 bg-white " />
     
      <p className="font-weight-light mx-5 mb-3">
							This can be the site slogan, or a brief description of the site.
			</p>

      <a className='btn btn-outline-light btn-lg mb-3' href='#!' role='button'>
               Call to action
      </a>
     
     </div>

     </div>

     </div>




</header>

  )

}
export default Header;