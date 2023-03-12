import React from "react";
import usa from "../../assests/images/usa.jpg";
import aboutone from "../../assests/images/aboutone.png";
import "./about.css";
const aboutus = [  
  // {
  //   heading: "About Us",
  //   content:"Established in 2009, GLOBAL MOON CONSULTANCY PVT. LTD. has already made a striking imprint in the field of education consultation serving hundreds of students for different rewarding academic destinations hitherto. We have been recognized for our flawless counseling services to satisfy and make successful the pursuance of students in desired profound destinations varying from Australia, USA, Canada, Japan, New Zealand and major European countries (Denmark, UK, Spain, Italy and Norway).",
  //   url_img:"https://images.pexels.com/photos/2406454/pexels-photo-2406454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
  {
    heading: "About Us",
    content: "Been run with a compact team of counselors, educators, managers and instructors, Global Moon Consultancy has the environment that can be rarely found in similar other organizations. One visit with us and you will traverse your opinion about counseling and consultation service to the most productive and generative outlook possible. We are the translators of your dreams into reality with a speedy service and practical handling. We are grown truly from the same ground where you all are thus that is an exact asset we have accumulated to value your aim and target. Our mere ambition lies together with your success. Out entire team is dedicatedly committed to serve the best with our nitty-gritty services and regular conversation with you. We have been one of the most regularly visited consultancies in Kathmandu simply because of our friendly and outspoken management and staff team. Saying so, we are never tired of entertaining students from any educational standards or any geo-locations.",
    img:"",
  },
  {
    heading: "Why Us",
    content: "We are embedded with local and international knowledge and experience as our team ranges with individual richness in field wise experiences and strength. Our entire emphasis is to apprehend the interest and goal of the students, to suggest and communicate with transparency, to assist choosing the most suitable destinations for abroad studies, preparing with language proficiency tests and making it happen. With our swift understanding and cooperation, you will learn what international education actually is and how it will be made happen for you. We search and apply for the possible scholarship programs to the deserving candidates in various subjects in every of our associated Universities. We will enlighten you with every possible course and degrees as per your education background with widest range of academic disciplines and open a window for you. Our team will be compliant to all of your queries and satisfy you with every curiosity that appears in the due course of application procedure. We deal with renowned and ranked universities where we assure your reputed academic achievement and celebrated degree that will guarantee your future aspiration building yourself a scholar in your field of study.",
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
          <div className="row py-5 my-5 d-flex align-items-center">
            <div className="col-md-6 col-sm-12">
              <img className="map-img" src={aboutone} alt="usa"></img>
            </div>
            <div className="col-md-6 col-sm-12">
            <h1 fw-bold>{item.heading}</h1>
            <p className="lh-base">{item.content}</p>
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

export default AboutUs;
