import { Button } from "react-bootstrap";
import pButton from "../Components/Button"



function Home () {

  const product = {
      name :'T-shirt',
      color:'white',
      size:'m'
   }

return(
   <div>
       
       <ul>
       <li>{product.name}</li>
       <li>{product.color}</li>
       <li>{product.size}</li>
       </ul>

       <div>
       <Button variant="secondary" >Add</Button>
       </div>
   </div>

 )

}

export default Home;