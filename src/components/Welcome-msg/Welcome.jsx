import "./welcome.css";
import EmailIcon from '@mui/icons-material/Email';

import operator from "../../assests/images/operator.png";
import rating from "../../assests/images/rating.png";
import calendar from "../../assests/images/calendar.png";
import passport from "../../assests/images/passport.png";

const Welcome = () => {

  return (
    <section className="py-5 global-secondary">
        <div className="container">
            <h1 className="fw-bold mt-5 text-center">Welcome to Global Moon Consultancy.</h1>
            <p className="fs-3 fw-5 text-center">A complete solution for abroad studies.</p>
            <p className="fw-normal lh-base fs-5 text-center para">Established in 2009, GLOBAL MOON CONSULTANCY PVT. LTD. has already made a striking imprint in the field of education consultation serving hundreds of students for different rewarding academic destinations hitherto. We have been recognized for our flawless counseling services to satisfy and make successful the pursuance of students in desired profound destinations varying from Australia, USA, Canada, Japan, New Zealand and major European countries (Denmark, UK, Spain, Italy and Norway).</p>
            <div className="row py-5">
                <div className="col text-center">
                    <img src={passport} alt='password' className="counter-icon"/>
                    <div className="fw-bold fs-2">
                        1,000+ 
                    </div>
                    <p className="fw-bold">Visa Granted.</p>
                </div>
                <div className="col text-center">
                    <img src={operator} alt='password' className="counter-icon"/>
                    <div className="fw-bold fs-2">
                        20+ 
                    </div>
                    <p className="fw-bold">Best Counceling Team.</p>
                </div>
                <div className="col text-center">
                    <img src={calendar} alt='password' className="counter-icon"/>
                    <div className="fw-bold fs-2">
                        10+ years 
                    </div>
                    <p className="fw-bold">Years Experince.</p>
                </div>
                <div className="col text-center">
                    <img src={rating} alt='password' className="counter-icon"/>
                    <div className="fw-bold fs-2">
                        50+ 
                    </div>
                    <p className="fw-bold">Professional Instructors.</p>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Welcome;
