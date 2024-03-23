import Dropdown from 'react-bootstrap/Dropdown';
import userProfile from '../Assets/Img/user-profile.png'
import adminProfile from '../Assets/Img/admin-profile.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../Context/ContextAuthuntication';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


const Navbar = (props) =>{
    const name = localStorage.getItem('username');

    const [dropdownShow, setdropdownShow]= useState(false);
    const {logOut} = useAuth()
    const navigate = useNavigate()
    const handleShow = () =>{ 
        setdropdownShow(!dropdownShow)
    }

    return(

<nav className="nav">
<h2 className="site-title">
   {props.title}
</h2>
{name ? <ul>
    {name === 'admin' ?
       <li>
            <a href="/admin">Product</a>
       </li> :
       <>
        <li className="active">
            <a href="/home">Home</a>
        </li>
        <li>
            <a href="/aboutUs">About us</a>
        </li>
        <li>
            <a href="/cart">
            <span style={{ color: "red", fontWeight: "bold" }}>
            $
            </span>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ fontSize: "1.5rem", paddingLeft: "5px" }}
                className="mr-3"
                ></FontAwesomeIcon>
            </a>
        </li>
   </>
    }

       <li>

        <img src={name === 'admin' ? adminProfile : userProfile}  style={{width:'20px' , height:'20px' , cursor:'pointer'}} onClick={handleShow} />


        {dropdownShow && (
        <Dropdown.Menu show={dropdownShow} align="end" className='menu' >
          <Dropdown.Header style={{fontSize:'20px' , fontWeight:'bold'}}> {name} </Dropdown.Header>
          <Dropdown.Item eventKey="2" className='menuItem' onClick={() => navigate('/profile')}>My Profile </Dropdown.Item>
          <Dropdown.Item eventKey="3" className='menuItem'onClick={()=>logOut()} >Log Out </Dropdown.Item>
        </Dropdown.Menu>
      )}
    </li>
</ul> : ''}

</nav>

    )
}
export default Navbar;