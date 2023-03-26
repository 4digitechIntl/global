import React, { Fragment } from "react";
import Header from "../components/Header/Header"

import Testimonials from "../components/Testimonial/Testimonials";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ContactUs from "../components/Contact-us/ContactUs";
import Footer from "../components/Footer/Footer";
import usa from "../assests/images/usa.jpg";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
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
//   maxWidth:"600px"
};
const Schedule = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <Fragment>
      <Header />
      <section>
            <div className="cover-bg">
            <div className="container py-5">
            <h1 className="fw-bold text-center">Virtual Meeting</h1>
            <p className="fw-bold fs-5 text-center">Get Counselling at comfort of your home.</p>
            <p className="text-center lh-base">
                Talk to our best counselling team to ensure your brighter future ahead.
            </p>
            </div>
            <img src={usa} className='banner-img' alt="usa"></img>
            </div>
            <div className="container py-5">
                <h1 className="fw-bold">Get a Quote.</h1>
                <p className="fw-bold fs-5">We will send you mail for link to virtual meeting.</p>
                <div className="row d-flex align-items-center ">
                    <div className="col-12">
                    <Box
                    component="form"
                    sx={box}
                    >
                    <h3 className="p-3 mb-0 fs-4">Please fill in following information.</h3>
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
                </div>       
            </div>
        </section>
      <Testimonials />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};

export default Schedule;
