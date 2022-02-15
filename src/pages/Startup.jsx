import React from 'react';
import '../styles/App.css';
import Foot from '../components/Footer';
import Slate from '../images/slatecube.png';
import Sleek from '../images/sleek.png';
import Think from '../images/think&zoom.jpg';
import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import { FaSearchengin } from "react-icons/fa";

function Startups() {
  return (
    <>
      <Container className='cont p-2'>
        <Row className='mb-4 mt-3'>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2"><FaSearchengin /> Search</Button>
        </InputGroup>
        </Row>
        <Row className='mb-4 mt-3'>
          <Col md={4}>
            <img src={Think} alt="Think & Zoom" className='img-fluid'/>
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Think and Zoom</h3>
            <p>
              Providing solutions for the visually impaired. such as mind
              controlled zooming and wearable controlled zooming
            </p>
            <Button variant="outline-primary">See Full Details</Button>
            <hr/>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col md={4}>
          <img src={Slate} alt="Slatecube" className='img-fluid'/>
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Slatecube</h3>
            <p>
              Slatecube help job seekers develop job-relevant skills, gain work
              experience and land well paying jobs through world class up-scalling
              courses and intenships
            </p>
            <Button variant="outline-primary">See Full Details</Button>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
          <img src={Sleek} alt="Sleek" className='img-fluid'/>
          </Col>
          <Col md={8}>
            <h3 className="text-primary">Sleek Job Academy</h3>
            <p>
            Trains world class software developers in Ghana and match them to
            employment opportunities
            </p>
            <Button variant="outline-primary">See Full Details</Button>
          </Col>
        </Row>
      </Container>
      <Foot />
    </>
  );
};

export default Startups;

// import React from "react";

// class Startup extends React.Component{
//     render(){    
//         return (
//         <div>
//              <div class="container-fluid">
//     <div class="row">
    
//   <nav class="navbar navbar-expand-lg nav-editst col-md-12">
//   <a class="navbar-brand col-md-4" href="index.html">
//     <img src="images/kawo-legal-logom.png" width="200" height="86" alt="" />
//   </a>
//   <div class="collapse navbar-collapse col-md-4 nav-text" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item nav-aboutus">
//         <a class="nav-link link activa" href="index.html">Home</a>
//       </li>
//       <li class="nav-item nav-aboutus active">
//         <a class="nav-link link" href="startup.html">Startups</a>
//       </li>
//       <li class="nav-item nav-aboutus">
//         <a class="nav-link link" href="register.html">Register</a>
//       </li>
//       <li class="nav-item nav-aboutus">
//         <a class="nav-link link" href="login.html">Login</a>
//       </li>
//     </ul>
//     </div>
//     </nav>
//     </div>
//   </div>

//   <div class="container">

 
//     <div class="row">
//         <div class="input-group mb-3 search">
//           <input type="text" class="form-control" placeholder="search Startup by name or industry" aria-label="search Startup by name or industry" aria-describedby="basic-addon2" />
//           <div class="input-group-append">
//             <button class="btn btn-outline-secondary blue" type="button" id="button-addon2">Search
//             </button>
//           </div>
//         </div>
      
//     </div>
    

//     <div class="row">
//       <div class="startup-items">
//         <div class="col-md-2 move-img">
//         <img src="assets/images/tzlogoa.jpg" class="str-img" width="90px" height="95px" alt="" />
//         </div>
//         <div class="col-md-10 move-txt">
//           <h3> Think and Zoom </h3>
//           <p>Providing solutions for the visually impaired, such as mind-controlled zooming, 
//           and wearable-controlled zooming.</p>
//           <p>
//             <a class="btn btn-light btn-start" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">See full details
//             </a>
//           </p>
//           <div class="collapse" id="collapseExample">
//             <div class="card card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//             proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
//             </div>
//           </div>
//         </div>
        
//       </div>
      
//     </div>

//     <div class="row">
//       <div class="startup-items">
//         <div class="col-md-2 move-img">
//         <img src="images/cube-logom.png" class="str-img" width="95px" height="95px" alt="" />
//         </div>
//         <div class="col-md-10 move-txt">
//           <h3> Slatecube </h3>
//           <p>Providing solutions for the visually impaired, such as mind-controlled zooming, 
//           and wearable-controlled zooming.</p>
//           <p>
//             <a class="btn btn-light btn-start" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">See full details
//             </a>
//           </p>
//           <div class="collapse" id="collapseExample">
//             <div class="card card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//             proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
//             </div>
//           </div>
//         </div>
        
//       </div>
      
//     </div>

//     <div class="row">
//       <div class="startup-items">
//         <div class="col-md-2 move-img">
//         <img src="assets/images/Sleekjob.png" class="str-img" width="95" height="40px" alt="" />
//         </div>
//         <div class="col-md-10 move-txt">
//           <h3> Sleekjob Academy </h3>
//           <p>Train world class software developers in Ghana and matches them to employment opportunities.</p>
//           <p>
//             <a class="btn btn-light btn-start" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">See full details
//             </a>
//           </p>
//           <div class="collapse" id="collapseExample">
//             <div class="card card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
//             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
//             proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
//             </div>
//           </div>
//         </div>
        
//       </div>
      
//     </div>

//   </div>

// <footer class="footer mt-auto py-3" style={{margintop: '5px', marginbottom: '0.1px'}} />
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
//         );
//     }
// }

// export default Startup;