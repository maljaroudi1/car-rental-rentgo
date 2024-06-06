
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGauge, faGear, faFillDrip, faCar} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'; 

//Seprate imports














import './car.css'
const Cars = (props) => {
    const carImg = props.carImg;
    const carName = props.carName;
    const carPriceDay = props.carPriceDay;
    const carPriceMonth = props.carPriceMonth;
    const carSpedometer = props.carSpedometer;
    const carTransmisson = props.carTransmisson;
    const carGas = props.carGas;
    const carLine = props.carLine;
    const carousalLine = props.carousalLine;
    const buttonName = props.buttonName;
    const handleEvent = props.handleEvent;
    const carYear= props.carYear;
    const carType = props.carType;
    const carID = props.carID;
    const classForInfo = props.classForInfo;
    const classForInfoCarousalOne = props.classForInfoCarousalOne;
    const classForInfoCarousalTwo = props.classForInfoCarousalTwo;
    const classForInfo2 = props.classForInfo2;
    const classForSvg = props.classForSvg;
    const carPassengers =  props.carPassengers;
    const carLiterKM = props.carLiterKM;
    const carDrivetrain = props.carDrivetrain;
    const classForCarContainer = props.classForCarContainer;
    const carousalLine2 = props.carousalLine2;

    return (
        <>

              <div className="car" id={`${carID}`} type={`${carType}`}>
                    <div className="top-half"></div>
               
                    <div className="overlay"></div>
                    <img src={carImg}alt="" />
                
                   
                    <h4 className="title">{carName}</h4>
                    <div className="day-month-payments">
                        <h5 className="day"><span>{carPriceDay}</span></h5>
                        <h5 className="month">{carPriceMonth}</h5>
                    </div>
                    <line className={`${carLine}`}></line>
                    {carousalLine}
                    <div className={`info-container ${classForInfoCarousalOne} `}>
                                <div className="info">
                                    <FontAwesomeIcon icon={faGauge} className={`${classForSvg}`} />
                                    <h6><span>Kilometeres:</span>&nbsp; {carSpedometer}</h6>
                                </div>
                            
                                <div className="info">
                                    <FontAwesomeIcon icon={faGear} className={`${classForSvg}`} />
                                    <h6><span>Transmisson:</span>&nbsp; {carTransmisson}</h6>
                                </div>
                            
                                <div className="info">
                                    <FontAwesomeIcon icon={faFillDrip} className={`${classForSvg}`}/>
                                    <h6><span>Fuel:</span>&nbsp; {carGas}</h6>
                                </div>
                                <div className="info">
                                    <FontAwesomeIcon icon={faCar} className={`${classForSvg}`}/>
                                    <h6><span>Year:</span>&nbsp; {carYear}</h6>
                                </div>
                                
                        
                    </div>
                    <div className={`line ${carousalLine2} responsive-line`}></div>

                    <div className={`info-container ${classForInfoCarousalTwo} `} style={{transform: ' translate3d(11rem, -8rem, 1rem)'}}>
                                <div className="info carousal-info-conatiner">
                                    <FontAwesomeIcon icon={faGauge} className={`${classForSvg}`} />
                                    <h6><span>Passengers:</span>&nbsp; {carPassengers}</h6>
                                </div>
                            
                                <div className="info carousal-info-conatiner">
                                    <FontAwesomeIcon icon={faGear} className={`${classForSvg}`} />
                                    <h6><span>KM/L:</span>&nbsp; {carLiterKM}</h6>
                                </div>
                            
                                <div className="info carousal-info-conatiner">
                                    <FontAwesomeIcon icon={faFillDrip} className={`${classForSvg}`}/>
                                    <h6><span>Drivetrain:</span>&nbsp; {carDrivetrain}</h6>
                                </div>
                       
                                
                        
                    </div>

                        <motion.button
                                    className='rent-now'
                                    whileTap={{ scale: 0.9 }}
                                    whileHover={{backgroundColor: "white", color: 'rgb(255, 42, 42)', border: '2px solid rgb(255, 42, 42)' }}
                                    transition={{ duration: 0.4, ease: "easeInOut", type: 'spring' }}
                                    onClick={handleEvent}
                        >{buttonName}</motion.button>

              </div>



       
        </>
    );
}

export default Cars;


