import React from "react";
import usa from "../../assests/images/usa.jpg";
import aboutone from "../../assests/images/aboutone.png";
import blobanimation from "../../assests/images/blobanimation.svg";
import "./about.css";
const countries = [  
  {
    country: "japan",
    content: "Global Moon Consultancy has a unique environment thanks to its team of counselors, educators, managers, and instructors. Our goal is to translate your dreams into reality quickly and practically, while providing excellent service and regular communication. Our team is dedicated to your success, and we pride ourselves on being a friendly and outspoken consultancy that welcomes students from all educational backgrounds and locations. Come visit us and experience a counseling and consultation service that will change your outlook on what's possible.",
    img:"",
  },
  {
    country: "usa",
    content: "Our team at Global Moon Consultancy possesses a wealth of local and international knowledge and experience in various fields. We prioritize understanding each student's interests and goals, providing transparent advice, and assisting in choosing the best destinations for studying abroad, including language proficiency tests. We quickly and cooperatively guide you through the international education process and search for possible scholarship programs in various subjects at our affiliated universities. We offer a wide range of academic disciplines and degrees tailored to your educational background, answering any questions you may have during the application procedure. Our partnerships with renowned and ranked universities ensure your academic success and a celebrated degree, paving the way for future career aspirations in your chosen field.",
    img:"",
  },

  {
    country: "denmark",
    content: "Since our service and motto is parallel to your ambition, we are never shadowed away from you. Transparency is the primary principle of our business that ascertains the future of our institution as well. We will be concerned and contemplating about you from the first day of your visit to us until the date to your degree achievement. From the issues like abroad living accommodation, banking and insurances, we deal your stepwise process and enlighten you with the best suitable option with procedure. Our team is readily available in any complications you face during the abroad application extent round the hour.",
    img:"",
  },
];

const Studyin = () => {
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
              <img className="side-img" src={aboutone} alt="usa"></img>
              <img className="blob-img" src={blobanimation} alt="blob"></img>
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
              <img className="side-img" src={aboutone} alt="usa"></img>
              <img className="blob-img" src={blobanimation} alt="blob"></img>
            </div>
          </div>
        ))
      }
      <div className="ourteam">
        <h1 className="fw-bold">Meet our Team.</h1>
        <p className="fw-bold fs-5">Get insight on our team.</p>
        <div className='parent py-5 my-5'>
            <div className='child'>
              <img className="tlogo" src={aboutone}/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Ram Hari</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={aboutone} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Ram Hari</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={aboutone} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Ram Hari</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={aboutone} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Ram Hari</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>

            <div className='child'>
              <img className="tlogo" src={aboutone} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Ram Hari</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={aboutone} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Ram Hari</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={aboutone} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Ram Hari</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>
            <div className='child'>
              <img className="tlogo" src={aboutone} alt="planning"/>
              <p className="team-name m-0 lh-base fw-bold fs-5">Ram Hari</p>
              <p className="team-role m-0 lh-base">CEO</p>
            </div>
          </div>
      </div>
    </div>

    </section>
  );
};

export default Studyin;
