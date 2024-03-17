const Navbar = (props) =>{

    return(

<nav className="nav">
<a href="/"classname="site-title">
   {props.title}
</a>
<ul>
   <li className="active">
       <a href="/home">Home</a>
   </li>
   <li>
       <a href="/about">About</a>
   </li>
   <li>
       <a href="/product">Product</a>
   </li>
</ul>

</nav>

    )
}
export default Navbar;