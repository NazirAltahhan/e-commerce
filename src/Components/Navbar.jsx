const Navbar = (props) =>{
     const name = localStorage.getItem('username')

    return(

<nav className="nav">
<a href="/"className="site-title">
   {props.title}
</a>
<ul>
    {name === 'admin' ?
       <li>
            <a href="/admin">Admin</a>
        </li> :
        <li>
            <a href="/user">User</a>
        </li>}



   {/* <li className="active">
       <a href="/home">Home</a>
   </li>
   <li>
       <a href="/about">About</a>
   </li>
   <li>
       <a href="/product">Product</a>
   </li> */}
</ul>

</nav>

    )
}
export default Navbar;