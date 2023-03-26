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
    course: "Ielts",
    maintitle: "What is IELTS?",
    maintitletagline:"IELTS arcnoym is International English Language Testing System.",
    maintitlecontent: "The International English Language Testing System (IELTS) is a standardized and widely recognized English language assessment test for international education and global migration. It evaluates the English language proficiency of non-native English speakers, who wish to study in or migrate to countries, where English is the language of communication.",
    
    titleone:"Why IELTS is important?",
    titleonecontent:"IELTS is one of the most trusted English language tests across the globe with more than 10,000 organizations recognizing it internationally. The IELTS certification is recognized by the UK, USA, Australia, Canada, New Zealand, Singapore, Europe and 140 more countries across the globe. The certification is accepted by academic institutions, companies, professional bodies and government organizations. The test is considered the standard for English language testing and their certification is recognized for both academic and immigration purposes. This test assesses the English language skills of a candidate by testing their reading, writing, listening and speaking skills. Tests are available throughout the year in more than 1600 centers in over 140 countries. With IELTS scores, you can study in some of the best universities in Australia, top universities in Canada, USA, UK and New Zealand.",
    
    popcourses:"Poular Courses to study in Japan.",
    popcourses_content:"Since our service and motto is parallel to your ambition, we are never shadowed away from you. Transparency is the primary principle of our business that ascertains the future of our institution as well. We will be concerned and contemplating about you from the first day of your visit to us until the date to your degree achievement. From the issues like abroad living accommodation, banking and insurances, we deal your stepwise process and enlighten you with the best suitable option with procedure. Our team is readily available in any complications you face during the abroad application extent round the hour.",
    
    ieltsrequirements:"HOW TO REGISTER FOR THE IELTS EXAMINATION?",
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

const Preparation = () => {
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
        <h1 className="fw-bold text-center">What is IELTS?</h1>
        <p className="fw-bold fs-5 text-center">IELTS arcnoym is International English Language Testing System.</p>
        <p className="text-center lh-base">The International English Language Testing System (IELTS) is a standardized and widely recognized English language assessment test for international education and global migration. It evaluates the English language proficiency of non-native English speakers, who wish to study in or migrate to countries, where English is the language of communication.
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
                  <span>Contact Us to get Enrolled</span>
                </a>
                </div>
            </div>
            <div className="row  my-5 d-flex align-items-center ">
                <div className="col-md-6 col-sm-12">
                <h1 className="fw-bold">{item.popcourses}</h1>
                <p className="lh-base">{item.popcourses_content}</p>
                <a className="btn-hero" href='#contact' style={{width:'300px'}}>
                  <span>Contact Us to get Enrolled</span>
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
                <h1 className="fw-bold">{item.ieltsrequirements}</h1>
                <p className="lh-base">
                <ol>
                  <li>Step 1: Visit the official British Council IELTS registration page.</li>
                  <li>Step 2: Register an account with the British council’s IELTS registration page</li>
                  <li>Step 3: Choose your nearest test centre.</li>
                  <li>Step 4: Register for your test and make the payment to Nabil bank.</li>
                </ol>
                </p>
                <a className="btn-hero" href='#contact' style={{width:'300px'}}>
                  <span>Contact Us to get Enrolled</span>
                </a>
                </div>
            </div>
            <div className="row  my-5 d-flex align-items-center ">
                <h1 className="fw-bold">IELTS Date in Nepal 2023</h1>
                <table  class="table table-striped table-bordered mx-3" >
                  <tbody>
                  <tr className="global-primary">
                  <td style={{color:"white"}}><strong>Month</strong></td>
                  <td style={{color:"white"}}><strong>Date</strong></td>
                  <td style={{color:"white"}}><strong>Exam</strong></td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>January test dates</div>
                  </td>
                  <td>Saturday, 7 January 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Saturday, 14 January 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Thursday, 19 January 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Saturday, 28 January 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>February test dates</div>
                  </td>
                  <td>Saturday, 4 February 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 11 February 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Thursday, 16 February 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 25 February 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>March test dates</div>
                  </td>
                  <td>Thursday, 2 March 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 11 March 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Saturday, 18 March 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 25 March 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>April test dates</div>
                  </td>
                  <td>Saturday, 1 April 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Saturday, 15 April 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Thursday, 20 April 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 29 April 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>May test dates</div>
                  </td>
                  <td>Saturday, 6 May 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Thursday, 11 May 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Saturday, 20 May 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 27 May 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>June test dates</div>
                  </td>
                  <td>Saturday, 3 June 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 10 June 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Thursday, 15 June 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 24 June 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>July test dates</div>
                  </td>
                  <td>Thursday, 6 July 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 15 July 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 22 July 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Saturday, 29 July 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>August test dates</div>
                  </td>
                  <td>Saturday, 5 August 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Thursday, 10 August 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Saturday, 19 August 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 26 August 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>September test dates</div>
                  </td>
                  <td>Saturday, 2 September 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 9 September 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Thursday, 14 September 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 23 September 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>October test dates</div>
                  </td>
                  <td>Saturday, 7 October 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Thursday, 12 October 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 21 October 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 28 October 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>November test dates</div>
                  </td>
                  <td>Saturday, 4 November 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Thursday, 9 November 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Saturday, 18 November 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 25 November 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td colspan="1" rowspan="4">
                  <div>December test dates</div>
                  </td>
                  <td>Saturday, 2 December 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  <tr>
                  <td>Thursday, 7 December 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 9 December 2023</td>
                  <td>Academic only</td>
                  </tr>
                  <tr>
                  <td>Saturday, 16 December 2023</td>
                  <td>Academic and General Training</td>
                  </tr>
                  </tbody>
                </table>
            </div>

            <div className="row  my-5 d-flex align-items-center ">
              <h1 className="fw-bold">The IELTS registration fee / IELTS exam fee in Nepal</h1>
              <table class="table table-striped table-bordered mx-3">
                <thead className="global-primary">
                  <tr>
                    <th scope="col">S.N</th>
                    <th scope="col">IELTS exam fee in Nepal for different IELTS Test type</th>
                    <th scope="col">IELTS Exam Fee in Nepal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>IELTS Academic and General Training - IELTS exam fee in Nepal for Paper-Based test</td>
                    <td>NPR. 27,100</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>IELTS Academic and General Training - IELTS exam fee in Nepal for Computer-delivered test</td>
                    <td>NPR. 25,300</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row  my-5 d-flex align-items-center ">
              <h1 className="fw-bold">IELTS Exam Cancellation Fees:</h1>
              <ul className="px-5">
                <li className="list-item-custom">If a candidate cancels their IELTS application more than 14 days before the test date, the candidate will receive a 75% refund of the total IELTS exam fee.</li>
                <li className="list-item-custom">If a candidate cancels their IELTS application within 14 days, the candidate will receive a 50% refund of the total IELTS exam fee.</li>
                <li className="list-item-custom">If a candidate cancels their IELTS application within 2 days before the actual test date, the candidate will receive a 25% refund of the total IELTS exam fee.</li>
                <li className="list-item-custom">If the candidate cancels the test on the day of the test or after the test, no refund will be provided.  </li>
              </ul>

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

export default Preparation;
