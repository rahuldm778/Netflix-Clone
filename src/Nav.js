import React from 'react';
import './Nav.css'

function Nav() {
//  const [show, handleShow] = useState(false);

//  useEffect(() => {
//     window.addEventListener("scroll", () => {
//        if(window.scrollY > 100){
//            handleShow(true);
//        }else{
//            handleShow(false);
//        }
//     })
//     return () => {
//         window.removeEventListener("scroll");
//     };
//  }, []);


  return (
    <div className="nav">
        <img className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Nelflix logo' />
        <img className='nav_avtar' src='https://upload.wikimedia.org/wikipedia/commons/c/ce/Oxygen480-places-user-identity.svg' alt='Nelflix logo' />
    </div>
  )
}

export default Nav