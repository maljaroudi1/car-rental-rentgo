
import './car.css'
import Cars from './car'
import Cookies from 'js-cookie'

//logo

import { MultiSelect } from 'primereact/multiselect';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faGaugeHigh, faUpDown} from '@fortawesome/free-solid-svg-icons'
import { motion} from 'framer-motion'
import { useState } from 'react';

//Prime-react

import { AutoComplete } from 'primereact/autocomplete';
import { Ripple } from 'primereact/ripple';

PrimeReactContext.ripple = true;


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "primereact/resources/primereact.min.css";
import {  PrimeReactContext } from 'primereact/api';



import 'react-toastify/dist/ReactToastify.css';

import carData from './carData'

// import '../navbar/navbar.css'



import {faGauge, faGear, faFillDrip, faCar} from '@fortawesome/free-solid-svg-icons'

export default function  carContainer()   {





    //navbar


  // Map through the filteredCars array to render each car
                const [search, setSearch] = useState("");
                const  [car, setCar] = useState([]);

                const [sortCars, setSortCars] = useState(null);

                const sortByCarType = [
                    {
                      label: 'Filter By Type',
                      items: [
                        { label: 'Sport', value: ' Sport' },
                        { label: 'Sedan', value: ' Sedan' },
                        { label: 'SUV', value: ' SUV' },
                      ],
                    }


                ];



                const [sortByDecAcen, setSortByDecAcen] = useState(['Ascending']);


                const sortByCarAcen2 = [
                  {
                    label: 'Ascending',
                    value: 'Ascending'
                    // A-Z sorting

                  },
                  {
                    // Z-A sorting
                    label: 'Descending',
                    value: 'Descending'
                  },

                ];



                 const [openCarID, setOpenCarID] = useState(null);

                 const toggleInformation = (carID) => {
                    if (openCarID === carID) {
                      // If the same car is clicked again, close it
                      setOpenCarID(null);
                    } else {
                      // If a different car is clicked, open it
                      setOpenCarID(carID);
                        console.log(setOpenCarID(carID));
                    }
                  };

                  const redirectToBooking = () => {
                    window.location.href = '/booking';
                  }



    return(



        <div className='root'>


                    <div className="nav-bar-under " style={{paddingBottom: '-5px', paddingTop: '-5px'}}>
                            <MultiSelect
                            value={sortCars}
                            onChange={(e) => setSortCars(e.value)}
                            options={sortByCarType}
                            optionLabel="label"
                            maxSelectedLabels={3}
                            selectionLimit={3}
                            placeholder='Filter cars'
                            display="chip"
                            optionGroupLabel="label"
                            optionGroupChildren="items"
                            style={{ position: 'absolute', zIndex: '22222', transform: 'translate3d(97rem, 1rem, 1rem)' }}
                            className='filter'
                            />



                             <MultiSelect
                            value={sortByDecAcen}
                            onChange={(e) => setSortByDecAcen(e.value)}
                            options={sortByCarAcen2}
                            optionLabel="label"
                            maxSelectedLabels={1}
                            selectionLimit={1}
                            placeholder='Sort cars'
                            showSelectAll={false}
                            style={{ position: 'absolute', zIndex: '22222', transform: 'translate3d(87rem, 1rem, 1rem)' }}
                            className='sort'
                            />



                            <AutoComplete field="name"
                            className='p-ripple card p-fluid '
                            value={search}
                            suggestions={car}
                            completeMethod={search}
                            onChange={(e) => setSearch(e.value)} placeholder='Search'
                            style={{transform: "translate3d(16rem, 1rem, 1rem)"}}
                            />



                    </div>


                    <div className=" px-4 py-8 md:px-6 lg:px-8 hide-for-desktop">
                            <div>
                                <div className="grid">
                                {carData.filter((car) => {
                                return search.toLocaleLowerCase() === ''
                                ? car
                                : car.carName.toLocaleLowerCase().includes(search)
                                ? car
                                : car.carType.toLocaleLowerCase().includes(search)

                            }).filter((car) => {
                                return (sortCars === null || sortCars.includes(car.carType));
                            }).sort((a, b) => {
                                if (sortByDecAcen[0] === 'Ascending') {
                                    return a.carName.localeCompare(b.carName);
                                  } else if (sortByDecAcen[0] === 'Descending') {
                                    return b.carName.localeCompare(a.carName);
                                  }


                              }).map((car) => (
                                    <div key={car.carID} className='col-12 lg:col-4 p-3'>
                                        <div className={`p-3 border-round shadow-2 flex align-items-center surface-card ${ openCarID === car.carID ? 'open-info' : ''}`} style={{ overflow: 'hidden' }}>
                                            <motion.button
                                             style={{zIndex: '12'}}
                                                className='book-btn-mobile'
                                                onClick={redirectToBooking}
                                                whileHover={{ backgroundColor: "#FD8800", color:"white" }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                            >Rent Now
                                            <Ripple/>
                                            </motion.button>
                                            <div className="carpayments">
                                                <h6 className="day">{car.carPriceDay}</h6>
                                                <h6 className="month">{car.carPriceMonth}</h6>
                                                <div className="line"></div>
                                                <div className="line2"></div>
                                            </div>

                                            <div className="icon-info">
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faGauge} />
                                                    <h6><span>Kilometeres:</span>&nbsp;{car.carSpedometer}</h6>
                                                </div>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faGear} />
                                                    <h6><span>Transmisson:</span>&nbsp;{car.carTransmisson}</h6>
                                                </div>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faFillDrip} />
                                                    <h6><span>Fuel:</span>&nbsp;{car.carGas}</h6>
                                                </div>
                                                <div className="info">
                                                    <FontAwesomeIcon icon={faCar} />
                                                    <h6><span>Year:</span>&nbsp;{car.carYear}</h6>
                                                </div>
                                            </div>

                                            <div className="icon-info2">
                                                <div className="info2">
                                                    <FontAwesomeIcon icon={faPerson} />
                                                    <h6><span>Passengers:</span>&nbsp;{car.carPassengers}</h6>
                                                </div>
                                                <div className="info2">
                                                    <FontAwesomeIcon icon={faGaugeHigh} />
                                                    <h6><span>Litre/KM:</span>&nbsp;{car.carLiterKM}</h6>
                                                </div>
                                                <div className="info2">
                                                    <FontAwesomeIcon icon={faUpDown} />
                                                    <h6><span>Drivetrain:</span>&nbsp;{car.carDrivetrain}</h6>
                                                </div>
                                            </div>

                                            <div style={{ width: '110px', height: '89px', borderRadius: '10px', transform: 'translateX(-7.2rem)' , position: 'absolute'}} className="bg-teal-100 inline-flex align-items-center justify-content-center mr-3">
                                                <img src={car.carImg} alt="" className='contain' style={{ width: '8rem', transform: 'translate3D(0.2rem,-0.5rem,1rem)', position: 'absolute' }} />
                                            </div>


                                            <div className='car-name' style={{ transform: 'translateX(2rem)', position: 'absolute' }}>
                                                <span className="text-900 text-xl font-medium mb-2" style={{position: 'absolute', transform: 'translate3D(-3rem,-1.5rem,1rem)', textTransform: 'uppercase', display: 'block ruby'}}>{car.carName}</span>
                                                <p className="more-info mt-1 mb-0 text-600 font-medium text-sm" style={{transform: 'translate3D(-3rem,0rem,1rem)'}} >More Info <i className='pi pi-info-circle' style={{ fontSize: '0.8rem', cursor: 'pointer' }}    onClick={() => toggleInformation(car.carID)} /></p>
                                            </div>

                                            <div className="toggle-btn ml-auto" style={{ transform: 'translateX(-125px)', marginTop: '1rem' }}>
                                                <button className=" p-button p-component p-button-text p-button-plain p-button-rounded p-button-icon-only"
                                                    onClick={() => toggleInformation(car.carID)}
                                                >
                                                    <span className={`p-button-icon p-c pi pi-chevron-down ${  openCarID === car.carID ? 'hidden' : ''}`} ></span>
                                                    <span className={`p-button-icon p-c pi pi-chevron-up ${  openCarID === car.carID ? '' : 'hidden'}`}></span>
                                                    <span className="p-button-label p-c">&nbsp;</span>
                                                    <span role="presentation" className="p-ink" style={{ height: '48px', width: '48px' }}></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                    </div>


                    <div className="car-container hide-for-mobile">

                            <div className="align-center ">
                                <h1 className='main-title'>Our Collection</h1>

                            </div>




                            <div className="sports-cars">
                            {carData.filter((car) => {
                                return search.toLocaleLowerCase() === ''
                                ? car
                                : car.carName.toLocaleLowerCase().includes(search)
                                ? car
                                : car.carType.toLocaleLowerCase().includes(search)
                            // }).filter((car) => {
                            //     return (sortCars === null || car.carType === sortCars)
                            }).filter((car) => {

                                return (sortCars === null || sortCars.includes(car.carType)) ;

                            }).sort((a, b) => {
                                if (sortByDecAcen[0] === 'Ascending') {
                                    return a.carName.localeCompare(b.carName);
                                  } else if (sortByDecAcen[0] === 'Descending') {
                                    return b.carName.localeCompare(a.carName);
                                  }
                              }).map((car, index) => (
                                   <Cars
                                    key={index}
                                    carImg={car.carImg}
                                    carName={car.carName}
                                    carPriceDay={car.carPriceDay}
                                    carPriceMonth={car.carPriceMonth}
                                    carSpedometer={car.carSpedometer}
                                    carTransmisson={car.carTransmisson}
                                    carGas={car.carGas}
                                    carLine={car.carLine}
                                    carModel={car.carModel}
                                    handleEvent={redirectToBooking}
                                    classForSvg={car.classForSvg}
                                    carYear={car.carYear}
                                    carType={car.carType}
                                    carLiterKM={car.carLiterKM}
                                    carPassengers={car.carPassengers}
                                    carDrivetrain={car.carDrivetrain}
                                    classForInfo2={car.classForInfo2}
                                    buttonName={car.buttonName}
                                   />




                            ))}


                            </div>

                    </div>


        </div>
    );
}