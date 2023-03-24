import React from "react";
import { Container, Row } from "reactstrap";
import Header from "../components/Header/Header";


import Testimonials from "../components/Testimonial/Testimonials";

import ContactUs from "../components/Contact-us/ContactUs";
import Footer from "../components/Footer/Footer";
const countries = [  
    {
      heading: "Study in Japan.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
    {
      heading: "Study in Australia.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/4062614/pexels-photo-4062614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in USA.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/5062136/pexels-photo-5062136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&fbclid=IwAR0LJcvQRyRgRK2swdqQJiw_lmpsbkDMBge-8D2dJ4eOMZeYmM7OTX9Efw4",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Denmark.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in UK.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/6100149/pexels-photo-6100149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Canada.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/11013920/pexels-photo-11013920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&fbclid=IwAR3h5yQsmRL6cQ2Sc8M90DB0WJWAJagjoX_h7O-DtjooFmivFNNDKezl-6k",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Ireland.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/2416653/pexels-photo-2416653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Korea.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/5051600/pexels-photo-5051600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&fbclid=IwAR0mdAJZYhaZiBk7TuIltjanJ18uWTesKaLQ4JcSSokOpnr69RXBvp_r8Ao",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Malta.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/14103325/pexels-photo-14103325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Dubai.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/3214995/pexels-photo-3214995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&fbclid=IwAR2TQw8wKUbL6wOWzfYsA4LF-cMP-2AIpi0mEe_Fi4i_eIx0ajUcud2M4AI",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in New Zealand.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/8548121/pexels-photo-8548121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in China.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/9157126/pexels-photo-9157126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in India.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/14535714/pexels-photo-14535714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in France.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Bangladesh.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/8863235/pexels-photo-8863235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Spain.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/10829071/pexels-photo-10829071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Finland.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/3493651/pexels-photo-3493651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Sweden.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/11261851/pexels-photo-11261851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Portugal.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/11261851/pexels-photo-11261851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  
    {
      heading: "Study in Germany.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/2549031/pexels-photo-2549031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      href:"/courses/ilets",
    },
  ];

const StudyAbroadCountries = () => {
  return (
    <>
    <Header/>
    <section className="py-5" id="study">
        <Container>
        <h1 className="fw-bold">Study Abroad.</h1>
        <p className="fw-bold fs-5">Start your overseas education journey with the best overseas education consultant.</p>
            <Row className="d-flex align-items-center mt-5">
                {
                countries.map((item, index) => (    
                <div className="col-sm-6 col-md-6 col-lg-4">
                    <div className = "card">
                        <img src={item.img} className='card-img'/>
                        <div className="card-content">
                            <div className="card-overlay"></div>
                        <h2 className="card-h2">
                            {item.heading}
                        </h2>
                        <p className="card-p">
                            {item.content}
                        </p>
                        <a className="btn-hero card-button" href='/#about'>
                                <span>Learn More</span>
                        </a>
                        </div>
                    </div>
                </div>
                ))
                }

            </Row>
        </Container>
    </section>
    <Testimonials />
    <ContactUs/>
    <Footer/>
    </>

  );
};

export default StudyAbroadCountries;

