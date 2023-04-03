import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./contact-us.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';

import VideoCallIcon from '@mui/icons-material/VideoCall';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VideocamIcon from '@mui/icons-material/Videocam';
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
  width: "95%",
  margin: "10px",
  background: "#f37224",
  "&:active": {
    border: "white",
  },
  "&:hover": {
    background: "#CF6120",
  },
};
const box = {
  padding: "10px",
  background: "#f0f0f0",
  borderRadius: "20px",
};
const AboutUs = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
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
                    
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">How can we help you?</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            sx={tf}
                        >
                            <MenuItem value={10}>Test Preparations.</MenuItem>
                            <MenuItem value={20}>Study Abroad.</MenuItem>
                            <MenuItem value={30}>Student Counseling.</MenuItem>
                        </Select>
                    </FormControl>
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
                            <p className="mb-0 lh-base">Talk to us via phone.</p>
                            <p className="fw-bold mb-0"><PhoneIcon className="crc-btn p-1 mr-2" />
                             <a href="tel:014168319"> 01-4168319 </a><span> , </span>
                             <a href="tel:9863448300"> 9863448300 </a><span> , </span>
                             <a href="tel:9815150952"> 9815150952 </a><span> , </span>
                             </p>
                        </li>
                        <li className="list-card">
                            <p className="fw-bold mb-0">Visit  Us</p>
                            <p className="mb-0 lh-base" >Visit us at our head office:</p>
                            <p className="fw-bold mb-0"><FmdGoodIcon  className="crc-btn p-1 mr-2"/>
                                <a href="https://www.google.com/maps/place/Global+Moon+Consultancy+Pvt.Ltd./@27.7029231,85.3197507,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19710582c1ed:0xf44e166229c0551a!8m2!3d27.7029184!4d85.3219394!16s%2Fg%2F11g1pncjdz" target='bl
                                '>
                                    Putalisadak, Kathmandu, Nepal
                                </a>
                            </p>
                        </li>
                        <li className="list-card">
                            <p className="fw-bold mb-0">Virtual Meeting</p>
                            <p className="mb-0 lh-base">Get Counselling at comfort of your home.</p>
                            <p className="fw-bold mb-0"><VideocamIcon  className="crc-btn p-1 mr-2"/> 
                            <a href="https://www.facebook.com/messages/t/142332636434753" target='_blank'>
                                Get a Quote
                            </a>
                            </p>
                        </li>
                        {/* <li className="list-card">
                            <p className="fw-bold mb-0">Text Us</p>
                            <p className="mb-0 lh-base">NUmber NUmber NUmber NUmberNUmber NUmber NUmber</p>
                            <p className="fw-bold mb-0"><ChatIcon  className="crc-btn"/>9812345678</p>
                        </li> */}
                    </ul>
                </div>
            </Row>
            <div className="row py-5 br-2">
            <div className="col-sm-12 col-md-3">
                <p className="fw-bold fs-5">Our International Branches</p>
                
                <li className="list-card">
                    <p className="fw-bold mb-0">Toronto, Canada</p>
                    <p className="fw-bold mb-0"><PhoneIcon className="crc-btn p-1" />
                        <a href="tel:+1 416 978 2190"> +1 416 978 2190</a>
                    </p>
                </li>                
                <li className="list-card">
                    <p className="fw-bold mb-0">Tokyo Japan, Canada</p>
                    <p className="fw-bold mb-0"><PhoneIcon className="crc-btn p-1" />
                        <a href="tel:+81 8055 4433"> +81 8055 4433 </a>
                    </p>
                </li>                
                <li className="list-card">
                    <p className="fw-bold mb-0">Sydney, Australia</p>
                    <p className="fw-bold mb-0"><PhoneIcon className="crc-btn p-1" />
                        <a href="tel:+61 2 6201 5111"> +61 2 6201 5111 </a>
                    </p>
                </li>
            </div>
            <div className="col-sm-12 col-md-3">
                <p className="fw-bold fs-5">Our National Branches</p>
                
                <li className="list-card">
                    <p className="fw-bold mb-0">Kathmandu, Nepal</p>
                    <p className="fw-bold mb-0"><PhoneIcon className="crc-btn p-1" />
                        <a href="tel:+977 9815150952"> +977 9815150952</a>
                    </p>
                </li>                
                <li className="list-card">
                    <p className="fw-bold mb-0">Tulsipur, Dang</p>
                    <p className="fw-bold mb-0"><PhoneIcon className="crc-btn p-1" />
                        <a href="tel:+977 9863448300"> +977 9863448300 </a>
                    </p>
                </li>                
                <li className="list-card">
                    <p className="fw-bold mb-0">Tandi, Chitwan</p>
                    <p className="fw-bold mb-0"><PhoneIcon className="crc-btn p-1" />
                        <a href="tel:+977 9815175900"> +977 9815175900 </a>
                    </p>
                </li>
            </div>
            <div className="col-sm-12 col-md-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4650838435728!2d85.31975071501475!3d27.70292313229335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19710582c1ed%3A0xf44e166229c0551a!2sGlobal%20Moon%20Consultancy%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1679311608217!5m2!1sen!2snp"
                    style={{ border: 0,width:'100%',borderRadius:'20px' }}
                    allowfullscreen=""
                    loading="{lazy}"
                    referrerpolicy="{no-referrer-when-downgrade}"
                    title="smartcleaming"
                    height="450px"
                >
                </iframe>
            </div>
            </div>
        </Container>
    </section>
  );
};

export default AboutUs;
