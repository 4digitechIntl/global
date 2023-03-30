import React from "react";
import usa from "../../assests/images/usa.jpg";
import aboutone from "../../assests/images/aboutone.png";
import balaram from "../../assests/employee/balaram.jpg";
import bimala from "../../assests/employee/bimala.jpg";
import chandra from "../../assests/employee/chandra.jpg";
import dristee from "../../assests/employee/dristee.jpg";
import hemraj from "../../assests/employee/hemraj.jpg";
import krish from "../../assests/employee/krish.jpg";
import krishna from "../../assests/employee/krishna.jpg";
import palden from "../../assests/employee/palden.jpg";
import prakash from "../../assests/employee/prakash.jpg";
import pritam from "../../assests/employee/pritam.jpg";
import sagar from "../../assests/employee/sagar.jpg";
import sumitra from "../../assests/employee/sumitra.jpg";
import blobanimation from "../../assests/images/blobanimation.svg";
import "./about.css";
const aboutus = [  
  {
    heading: "About Us",
    content: "Global Moon Consultancy has a unique environment thanks to its team of counselors, educators, managers, and instructors. Our goal is to translate your dreams into reality quickly and practically, while providing excellent service and regular communication. Our team is dedicated to your success, and we pride ourselves on being a friendly and outspoken consultancy that welcomes students from all educational backgrounds and locations. Come visit us and experience a counseling and consultation service that will change your outlook on what's possible.",
    img:"",
  },
  {
    heading: "Why Us",
    content: "Our team at Global Moon Consultancy possesses a wealth of local and international knowledge and experience in various fields. We prioritize understanding each student's interests and goals, providing transparent advice, and assisting in choosing the best destinations for studying abroad, including language proficiency tests. We quickly and cooperatively guide you through the international education process and search for possible scholarship programs in various subjects at our affiliated universities. We offer a wide range of academic disciplines and degrees tailored to your educational background, answering any questions you may have during the application procedure. Our partnerships with renowned and ranked universities ensure your academic success and a celebrated degree, paving the way for future career aspirations in your chosen field.",
    img:"",
  },

  {
    heading: "How we are together",
    content: "Since our service and motto is parallel to your ambition, we are never shadowed away from you. Transparency is the primary principle of our business that ascertains the future of our institution as well. We will be concerned and contemplating about you from the first day of your visit to us until the date to your degree achievement. From the issues like abroad living accommodation, banking and insurances, we deal your stepwise process and enlighten you with the best suitable option with procedure. Our team is readily available in any complications you face during the abroad application extent round the hour.",
    img:"",
  },
];

const AboutUs = () => {
  return (
    <section>
    <div className="cover-bg">
      <div className="container py-5">
      <h1 className="fw-bold text-center">About Us.</h1>
      <p className="fw-bold fs-5 text-center">Discover Our Story: Who We Are and What We Stand For.</p>
      <p className="text-center lh-base">Established in 2009, GLOBAL MOON CONSULTANCY PVT. LTD. has already made a
        striking imprint in the field of education consultation serving hundreds of students for
        different rewarding academic destinations hitherto. We have been recognized for our
        flawless counseling services to satisfy and make successful the pursuance of students
        in desired profound destinations varying from Australia, USA, Canada, Japan, New
        Zealand and major European countries (Denmark, UK, Spain, Italy and Norway).
      </p>
      </div>
      <img src={usa} className='banner-img' alt="usa"></img>
    </div>
    <div className="container">  
      {
        aboutus.map((item, index) => (
         index % 2 !== 0 ?
          <div className="row py-5 my-5 d-flex align-items-center">
            <div className="col-md-6 col-sm-12 relative text-center">
              <img className="side-img" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="usa"></img>
            </div>
            <div className="col-md-6 col-sm-12">
            <h1 fw-bold>{item.heading}</h1>
            <p className="lh-base">{item.content}</p>
            </div>
          </div> :          
           <div className="row py-5 my-5 d-flex align-items-center">
            <div className="col-md-6 col-sm-12">
            <h1 fw-bold>{item.heading}</h1>
            <p className="lh-base">{item.content}</p>
            </div>
            <div className="col-md-6 col-sm-12 relative text-center">
              <img className="side-img" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="usa"></img>
            </div>
          </div>
        ))
      }
      <div className="ourteam">
        <h1 className="fw-bold">Meet our Team.</h1>
        <p className="fw-bold fs-5">Get insight on our team.</p>
        <div className='parent py-5 my-5'>
            <div className='child'>
              <img className="tlogo" src={krishna}/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Krishna Acharya</p>
              <p className="team-name m-0 lh-base fs-6">Krishna Prasad Sharma</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={balaram} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Balaram Lamichhane</p>
              <p className="team-role m-0 lh-base">Manager</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={hemraj} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Hemraj Sharma</p>
              <p className="team-role m-0 lh-base">Canada Facilitator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={chandra} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Chandra Datta Sharam</p>
              <p className="team-role m-0 lh-base">Korea Facilitator</p>
            </div>

            <div className='child'>
              <img className="tlogo" src={prakash} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Prakash paudel</p>
              <p className="team-role m-0 lh-base">USA Facilitator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={krish} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Krish Lamichhane</p>
              <p className="team-role m-0 lh-base">Japan Facilitator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={sagar} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Sagar Acharya</p>
              <p className="team-role m-0 lh-base">USA Facilitator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={aboutone} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Uttam Pandit</p>
              <p className="team-role m-0 lh-base">Japan Facilitator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={pritam} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Pritam Khadka</p>
              <p className="team-role m-0 lh-base">Australia Facilitator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={palden} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Palden Sensei</p>
              <p className="team-role m-0 lh-base">Japan Facilitator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={bimala} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Bimala Devi Sharma</p>
              <p className="team-role m-0 lh-base">Administrator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={dristee} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Dristee Shinkhada</p>
              <p className="team-role m-0 lh-base">Canada Facilitator</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={sumitra} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Sumitra Maraseni</p>
              <p className="team-role m-0 lh-base">Receptionist</p>
            </div>
          </div>
      </div>
    </div>

    </section>
  );
};

export default AboutUs;
