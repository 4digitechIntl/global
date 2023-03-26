import React, { useEffect } from "react";
import usa from "../assests/images/usa.jpg";
import aboutone from "../assests/images/aboutone.png";
import blobanimation from "../assests/images/blobanimation.svg";
import { useParams } from "react-router-dom";

import Header from "../components/Header/Header"
import Testimonials from "../components/Testimonial/Testimonials";
import ContactUs from "../components/Contact-us/ContactUs";
import Footer from "../components/Footer/Footer";
const countries = [  
  {
    
    country: "japan",
    maintitle: "Why Study in Japan?",
    maintitlecontent: "Global Moon Consultancy has a unique environment thanks to its team of counselors, educators, managers, and instructors. Our goal is to translate your dreams into reality quickly and practically, while providing excellent service and regular communication. Our team is dedicated to your success, and we pride ourselves on being a friendly and outspoken consultancy that welcomes students from all educational backgrounds and locations. Come visit us and experience a counseling and consultation service that will change your outlook on what's possible.",
    
    titleone:"Why Choose Global Moon for Japan?",
    titleonecontent:"Since our service and motto is parallel to your ambition, we are never shadowed away from you. Transparency is the primary principle of our business that ascertains the future of our institution as well. We will be concerned and contemplating about you from the first day of your visit to us until the date to your degree achievement. From the issues like abroad living accommodation, banking and insurances, we deal your stepwise process and enlighten you with the best suitable option with procedure. Our team is readily available in any complications you face during the abroad application extent round the hour.",
    
    popcourses:"Poular Courses to study in Japan.",
    popcourses_content:"Since our service and motto is parallel to your ambition, we are never shadowed away from you. Transparency is the primary principle of our business that ascertains the future of our institution as well. We will be concerned and contemplating about you from the first day of your visit to us until the date to your degree achievement. From the issues like abroad living accommodation, banking and insurances, we deal your stepwise process and enlighten you with the best suitable option with procedure. Our team is readily available in any complications you face during the abroad application extent round the hour.",
    
    visarequirements:"Visa Requirements for Japan.",
    visarequirements_content:"Since our service and motto is parallel to your ambition, we are never shadowed away from you. Transparency is the primary principle of our business that ascertains the future of our institution as well. We will be concerned and contemplating about you from the first day of your visit to us until the date to your degree achievement. From the issues like abroad living accommodation, banking and insurances, we deal your stepwise process and enlighten you with the best suitable option with procedure. Our team is readily available in any complications you face during the abroad application extent round the hour.",
    
    cost:"Total Education Cost.",
    cost_content:"Since our service and motto is parallel to your ambition, we are never shadowed away from you. Transparency is the primary principle of our business that ascertains the future of our institution as well. We will be concerned and contemplating about you from the first day of your visit to us until the date to your degree achievement. From the issues like abroad living accommodation, banking and insurances, we deal your stepwise process and enlighten you with the best suitable option with procedure. Our team is readily available in any complications you face during the abroad application extent round the hour.",
    edu_cost_table:[
      {
        "Vocal Education and Training":"$4,000 to $22,000",
        "Undergraduate Bachelor Degree":"$20,000 to $45,000",
        "Postgraduate Masters Degree":"$22,000 to $50,000",
        "Doctoral Degree":"$18,000 to $42,000",
      }
    ],
    accommodation:[
      {
        "Hostels and Guesthouses":"$90 to $150",
        "Shared Rental":"$95 to $215",
      }
    ],
    living_expenses:[
      {
        "Hostels and Guesthouses":"$90 to $150",
        "Shared Rental":"$95 to $215",
      }
    ],
    img:"",
  },

];

const Studyin = () => {
    // const [content, setContent]  = useState({content: '', img: ''})
    
    // const {countryname}=useParams()

    // useEffect(() => {
    //     const item = countries.find(item => item.country === countryname)

    //     if(item){
    //     setContent({content: item?.content, img: item?.img})
    //     }
    // }, [])
  return (
    <>
        <Header />
        <section>
        <div className="cover-bg">
        <div className="container py-5 ">
        <h1 className="fw-bold text-center">Why Study in Japan?</h1>
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
            countries.map((item, index) => (
            <>
            <div className="row  my-5 d-flex align-items-center">
                <div className="col-md-6 col-sm-12 relative text-center">
                <img className="side-img" src={"https://images.pexels.com/photos/13092792/pexels-photo-13092792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="usa"></img>
                <img className="blob-img" src={blobanimation} alt="blob"></img>
                </div>
                <div className="col-md-6 col-sm-12">
                <h1 className="fw-bold">{item.titleone}</h1>
                <p className="lh-base">{item.titleonecontent}</p>
                <a className="btn-hero" href='#contact' style={{width:'300px'}}>
                  <span>Contact Us to Study in Japan</span>
                </a>
                </div>
            </div>
            <div className="row  my-5 d-flex align-items-center ">
                <div className="col-md-6 col-sm-12">
                <h1 className="fw-bold">{item.popcourses}</h1>
                <p className="lh-base">{item.popcourses_content}</p>
                <a className="btn-hero" href='#contact' style={{width:'300px'}}>
                  <span>Contact Us to Study in Japan</span>
                </a>
                </div>
                <div className="col-md-6 col-sm-12 relative text-center">
                <img className="side-img" src={"https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg"} alt="usa"></img>
                <img className="blob-img" src={blobanimation} alt="blob"></img>
                </div>
            </div>
            <div className="row  my-5 d-flex align-items-center">
                <div className="col-md-6 col-sm-12 relative text-center">
                <img className="side-img" src={"https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="usa"></img>
                <img className="blob-img" src={blobanimation} alt="blob"></img>
                </div>
                <div className="col-md-6 col-sm-12">
                <h1 className="fw-bold">{item.visarequirements}</h1>
                <p className="lh-base">
                <ol>
                  <li>1. Register With An Education Counselor to apply for a Canada Student Visa.</li>
                  <li>2. Apply To Institutions With Our Help (We Have Great Working Relationships With
                  Many Canadian Universities).</li>
                  <li>3. Take up an English Test (IELTS, SAT, TOEFL or PTE).</li>
                  <li>4. Receive Institution Offer Letter.</li>
                  <li>5. Pay Tuition Fee.</li>
                  <li>6. Prepare &amp; Lodge Visa Documents.</li>
                  <li>7. Collect Visa Grant Letter.</li>
                </ol>
                </p>
                <a className="btn-hero" href='#contact' style={{width:'300px'}}>
                  <span>Contact Us to Study in Japan</span>
                </a>
                </div>
            </div>
            <div className="row  my-5 d-flex align-items-center ">
                <h1 fw-bold>{item.cost}</h1>
                <table class="table table-striped table-bordered mx-3">
                  <thead className="global-primary">
                    <tr>
                      <th scope="col">S.N</th>
                      <th scope="col">Study Expenses in Australia.</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Vocational Education and Training</td>
                      <td>$4,000 to $22,000</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Undergraduate Bachelor Degree</td>
                      <td>$20,000 to $45,000</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Postgraduate Masters Degree</td>
                      <td>$22,000 to $50,000</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Doctoral Degree</td>
                      <td>$18,000 to $42,000</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-striped table-bordered mx-3">
                  <thead className="global-primary">
                    <tr>
                      <th scope="col">S.N</th>
                      <th scope="col">Accommodation Expenses in Japan.</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Hostels and Guesthouses -</td>
                      <td>$90 to $150 per week</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Shared Rental </td>
                      <td>$95 to $215 per week</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-striped table-bordered mx-3">
                  <thead className="global-primary">
                    <tr>
                      <th scope="col">S.N</th>
                      <th scope="col">Living Expenses in Japan.</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Groceries and eating out </td>
                      <td>$140 to $280 per week</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Gas, electricity</td>
                      <td>$10 to $20 per week</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Phone and Internet </td>
                      <td>$15 to $30 per week</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Public transport</td>
                      <td>$30 to $60 per week</td>
                    </tr>
                  </tbody>
                </table>
            </div>

            </>
            ))
        }
        </div>

        </section>
        <Testimonials />
        <ContactUs />
        <Footer />
    </>
  );
};

export default Studyin;
