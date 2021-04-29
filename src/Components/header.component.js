import { useEffect } from "react";
import mainicon from "../img/dev.gif";
import Aos  from 'aos';
import 'aos/dist/aos.css';

const Header=()=> {
      useEffect(()=>{
        Aos.init({duration:1000});
      },[]);
        return(
            <>
      <div className="mainarea" >
      <div className="row gx-5 ">
        <div className="col">
          <img src={mainicon} className="img-fluid vert-move"  alt="GHRIET-DC" />
          <div className="container px-4">
            <div className="row gx-5">
              <div className="col">
                <div className="input-group input-group-lg">
                  <input type="text" className="form-control cform" placeholder="Join us" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button  className="btn btn-outline-secondary cbtn" type="button" id="button-addon2"><i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="display-6">Skill is only developed by hours and <b className="green">hours</b> of work</p>
          
        </div>
      </div>
    </div> 
            </>
        )
  
}
export default Header;