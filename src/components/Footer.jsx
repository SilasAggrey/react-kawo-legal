import React from "react"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import '../styles/App.css';

function Foot() {
  return(
    <>
    <footer class="d-flex py-3 px-5">
        <p>&copy; 2022 Kawolegal. All Right Reserved</p>
        <ul class="ms-auto d-flex">
          <li><FaFacebookF /></li>
          <li><FaTwitter /></li>
          <li><FaLinkedinIn /></li>
          <li><FaInstagram /></li>
        </ul>
      </footer>
    </>
  );
};

export default Foot;


// function foot (){
//     return(
//         <div>
// <footer class="footer mt-auto py-3" />
//   <div class="container">
//     <div class="row">
//       <div class="col-md-9">
//         <span class="foot-text">&copy; 2021 KawoLegal. All Rights Reserved.</span>
//       </div>
//       <div class="col-md-3">
//         <i class="bi bi-facebook fb"></i>
//         <i class="bi bi-twitter fb"></i>
//         <i class="bi bi-linkedin fb"></i>
//         <i class="bi bi-instagram fb"></i>
//       </div>
//     </div>
//   </div>
//         </div>
//     )
// }

// export default foot;



