import React from 'react';
import '../styles/App.css';
import { Container, Row, Form, Button} from 'react-bootstrap';
import Foot from '../components/Footer';

function Register() {
  return(
    <>
      <Container className='cont-1'>
        <Row className='mb-4'>
          <h3>Join KawoLegal. Sign up to get your startup listed now!</h3>
        </Row>
        <Row>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Re-Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
              <Button variant="primary" type="submit">Sign Up</Button>
          </Form>
        </Row>
      </Container>

      <Foot />
    </>
  );
};

export default Register;
// import React from "react";

// class Register extends React.Component{
//     render(){    
//         return (
//         <div>
//               <div class="container-fluid">
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
//       <li class="nav-item nav-aboutus">
//         <a class="nav-link link" href="startup.html">Startups</a>
//       </li>
//       <li class="nav-item nav-aboutus active">
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
//       <form class="kawo-formb">
//         <h2>Join KawoLegal. Sign up to get your Startup listed now!</h2>
//         <div class="form-group">
//           <label for="exampleInputEmail1">Full Name</label>
//           <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputEmail1">Email address</label>
//           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Confirm Password</label>
//           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
//         </div>
//         <button type="submit" class="btn blue">Sign up</button>
//       </form>
//     </div>
//    </div> 

//   <footer class="footer mt-auto py-3" style={{margintop: '5px', marginbottom: '0.1px'}} />
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

// export default Register;


