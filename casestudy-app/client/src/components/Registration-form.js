import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // add this line to import the styles
import {useRef, useState, useEffect} from 'react';

function RegistrationForm() {
  const userRef = useRef();
  const errRef = useRef();

  const [firstname,setFirstName] = useState('');
  const [validfname,setValidFName] = useState(false);
  const [fnamefocus,setFNameFocus] = useState(false);

  const [lastname, setLastName ] = useState('');
  const [validlname,setValidLName] = useState(false);

  // const  
  return (
    <MDBContainer fluid style = {{width: '50%'}}>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div>

          <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default RegistrationForm;