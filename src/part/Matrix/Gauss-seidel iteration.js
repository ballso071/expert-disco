import{React} from "react"
import '../../App.css'
import ima12 from '../../im/k13.jpg'
const gsi = () =>{
   return(
    <div className="App">
       <h1 class='title is-1'>Gauss-seidel iteration</h1>
       <div class = 'b-container'>
       <img src={ima12} alt = 'kk'/>
       </div>
       <div className="b-container">
            <div className="content">
                <div className="ku">
                    <p>เนื้อหา</p>
                    <ul>
                       จะทำการสโคปหาด้วย XL และ XR ซึ่งต้องการหาจุดตรงกลางโดยเอา XL + XR/2
                       และจะเทียบดูว่าจุด root อยู่ฝั่งไหนถ้าตรงกับสโคปที่อยู่ฝั่ง XL หรือ XR จะเลือกตรง
                       นั้นว่าเป็น XL หรือ XR เพื่อให้เพื่อให้สโคปแคบลงเพื่อใกล้จุด root ในการคำนวณหาค่า
                       จะมี Function ค่า XL XR และค่าความคลาดเคลื่อน 
                    </ul>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
        <div className="sub_chart-container">
          
       <div className="box-container">
       <p>
                กรุณาใส่ค่าFucntionและตัวแปรเพื่อทดสอบกราฟ
            </p>
            <input class="input is-info" type="text" placeholder="Input function:" id="function"></input>
            <p>
                Function
            </p>
              </div>
       <div className="b-SubcontainerL">
                <input class="input is-info" type="text" placeholder="Input XL:" id="XL"></input>
                <p>
                XL
            </p>
              </div>
              <div className="b-SubcontainerR">
                <input class="input is-info" type="text" placeholder="Input XR:" id="XR"></input>
                <p>
                XR
            </p>
              </div>
              <div className="b-SubcontainerM">
                <input class="input is-info" type="text" placeholder="Epsilon(error):" id="epsilon"></input>
                <p>
                Epsilon
            </p>
              </div>

        </div>
        <div className="sub_chart-container">
          
          <div className="box-container">
          <div className="b-SubcontainerL">
                   <p>
                   XL
               </p>
                 </div>
                 <div className="b-SubcontainerR">
                   <p>
                   Checksum
               </p>
                 </div>
                 <div className="b-SubcontainerM">
                   <p>
                   XR
               </p>
                 </div>
                 </div>
           </div>
         
      
       
      <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
    </div>
   ) 
}
export default gsi;