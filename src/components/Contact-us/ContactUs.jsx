import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./contact-us.css";
import usa from "../../assests/images/usa.jpg";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
const tf ={
    width:'95%',
    margin:'10px',
    background:'white',
    "&:active": {
      border:"none",
    },
    borderColor:'white',
    borderRadius:'10px'
  };

const btn = {
    width:'95%',
    margin:'10px',
    "&:active": {
      border:"white",
    },
}
const box = {
    padding:'10px',
    background:'#f0f0f0',
    borderRadius:'20px'

}
const AboutUs = () => {
  return (
    <section className="py-5" id="contact">
        <Container p-0>
        <h1 className="fw-bold">Get in touch.</h1>
        <p className="fw-bold fs-5">Hey, we’d like to know you better too!</p>
            <Row className="d-flex align-items-center">
                <div className="col-sm-16 col-md-6">
                    <Box
                    component="form"
                    sx={box}
                    >
                    <h3 className="p-3 mb-0 fs-4">Send a Message.</h3>
                    <TextField id="outlined-basic" label="Your Email" variant="outlined" sx={tf} />
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" sx={tf} />
                    <TextField id="outlined-basic" label="Your Number" variant="outlined" sx={tf} />
                    <TextField id="outlined-basic" label="Your Question?" multiline maxRows={4}  sx={tf} />
                    <Button
                        component="label"
                        variant="contained"
                        sx={btn}
                    >Submit</Button>
                    </Box>
                </div>
                <div className="col-sm-16 col-md-6">
                    <ul className="m-0 p-0">
                        <li className="list-card">
                            <p className="fw-bold mb-0">Call Us</p>
                            <p className="mb-0 lh-base">NUmber NUmber NUmber NUmberNUmber NUmber NUmber</p>
                            <p className="fw-bold mb-0"><PhoneIcon className="crc-btn p-1" /> 9812345678</p>
                        </li>
                        <li className="list-card">
                            <p className="fw-bold mb-0">Visit  Us</p>
                            <p className="mb-0 lh-base" >NUmber NUmber NUmber NUmberNUmber NUmber NUmber</p>
                            <p className="fw-bold mb-0"><FmdGoodIcon  className="crc-btn p-1"/> 9812345678</p>
                        </li>
                        <li className="list-card">
                            <p className="fw-bold mb-0">Live Chat</p>
                            <p className="mb-0 lh-base">NUmber NUmber NUmber NUmberNUmber NUmber NUmber</p>
                            <p className="fw-bold mb-0"><VideoCallIcon  className="crc-btn p-1"/> 9812345678</p>
                        </li>
                        {/* <li className="list-card">
                            <p className="fw-bold mb-0">Text Us</p>
                            <p className="mb-0 lh-base">NUmber NUmber NUmber NUmberNUmber NUmber NUmber</p>
                            <p className="fw-bold mb-0"><ChatIcon  className="crc-btn"/>9812345678</p>
                        </li> */}
                    </ul>
                </div>
            </Row>
        </Container>
    </section>
  );
};

export default AboutUs;

