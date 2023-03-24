import React from "react";
import { Container, Row } from "reactstrap";
import "./studyabroad.css";
import { Link } from "react-router-dom";
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
      heading: "Study in Korea.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/5051600/pexels-photo-5051600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&fbclid=IwAR0mdAJZYhaZiBk7TuIltjanJ18uWTesKaLQ4JcSSokOpnr69RXBvp_r8Ao",
      href:"/courses/ilets",
    },  
    {
      heading: "Study in Denmark.",
      content: "Study in Australia if you wish to study in a country that is at the helm of innovation and technological advancement. Australia is a diverse, happening country that opens your minds to possibilities and prepares you for a bright future anywhere in the world.",
      img:"https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg",
      href:"/courses/ilets",
    },
    
  ];

const StudyAbroad = () => {
  return (
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
            <div className="text-center">
            <Link to='/studyabroadcountries' className="btn-hero" href='#contact' style={{width:'300px'}}>
              <span>View More Countries</span>
            </Link>
            </div>
        </Container>
    </section>
  );
};

export default StudyAbroad;

