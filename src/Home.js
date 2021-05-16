import{React} from "react"
import './App.css'
import ima from '../src/im/k.png'
const hom = () =>{
   return(
    <div className="App">
       <h1 class='title is-1'>Numerical website</h1>
       <div class = 'b-container'>
       <img src={ima} alt = 'kk'/>
       <a class="item">
            <h1 class='title is-1'>By Satayu Somanothai</h1>
            </a>
       </div>
       <br></br>
       <br></br>
       <br></br>
    </div>
    

   ) 
}
export default hom;