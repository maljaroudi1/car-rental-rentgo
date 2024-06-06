'use client'

import './car.css';


import Cars from './car';
//Group 1
import BMWM4Coupe from '../../assets/cars/bmw//BmwM4Coupe.png';
import BmwZRoadster from '../../assets/cars/bmw/bmwZroadster.png';
import BMW8Series from '../../assets/cars/bmw/bmw8series.png';

//Group 2
import HondaCivicSi from '../../assets/cars/honda/hondaCivicSi.png';
import BMWM5 from '../../assets/cars/bmw/BMWM5Competetion.png';
import ToyotaCamry from '../../assets/cars/toyota/ToyotaCamry.png';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';

export default function Carousal() {
    const handleLinkClick = () => {
        window.location.href = '/cars'
      };

  return (
    <>


                <h1 className="carousal-title hide-for-tablet">Explore Our Top Deals</h1>
                <h1 className="carousal-title hide-for-laptop">Car of the month</h1>

                <div className="parent-container">

                    <div className="cars-for-tablets hide-for-laptop">
                                <Cars
                                    carImg={BMWM4Coupe}
                                    carName="BMW M4 Coupe"
                                    carPriceDay="$100/Day"
                                    carPriceMonth="$1900/Month"
                                    carSpedometer="11k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    classForInfo2= 'classForInfo'

                                    carYear="2023"
                                />
                    </div>

                    <Carousel className='carousal-container'
                        infiniteLoop={true}
                        emulateTouch={true}
                        autoFocus={true}
                        autoPlay={true}
                        showArrows={true}
                        showIndicators={true}
                        transitionTime={400}
                        showThumbs={false}
                        centerMode={true}
                        width={2500}


                    >


                                <div className="grouped-cars ">
                                    <Cars
                                    carImg={BMWM4Coupe}
                                    carName="BMW M4 Coupe"
                                    carPriceDay="$100/Day"
                                    carPriceMonth="$1900/Month"
                                    carSpedometer="11k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />

                                    <Cars

                                    carImg={BmwZRoadster}
                                    carName="BMW Z-Roadster"
                                    carPriceDay="$120/Day"
                                    carPriceMonth="$2100/Month"
                                    carSpedometer="12k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />


                                    <Cars

                                    carImg={BMW8Series}
                                    carName="BMW 8 Series"
                                    carPriceDay="$150/Day"
                                    carPriceMonth="$2500/Month"
                                    carSpedometer="15k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />

                                </div>

                                <div className="grouped-cars ">
                                    <Cars
                                    carImg={ToyotaCamry}
                                    carName="Toyota Camry"
                                    carPriceDay="$100/Day"
                                    carPriceMonth="$1900/Month"
                                    carSpedometer="11k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />

                                    <Cars

                                    carImg={BMWM5}
                                    carName="BMW M5 Competion"
                                    carPriceDay="$220/Day"
                                    carPriceMonth="$6600/Month"
                                    carSpedometer="12k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />


                                    <Cars

                                    carImg={HondaCivicSi}
                                    carName="Honda Civi Si"
                                    carPriceDay="$150/Day"
                                    carPriceMonth="$2500/Month"
                                    carSpedometer="15k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />

                                </div>

                                <div className="grouped-cars ">
                                    <Cars
                                    carImg={BMWM4Coupe}
                                    carName="BMW M4 Coupe"
                                    carPriceDay="$100/Day"
                                    carPriceMonth="$1900/Month"
                                    carSpedometer="11k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />

                                    <Cars

                                    carImg={BmwZRoadster}
                                    carName="BMW Z-Roadster"
                                    carPriceDay="$120/Day"
                                    carPriceMonth="$2100/Month"
                                    carSpedometer="12k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />


                                    <Cars

                                    carImg={BMW8Series}
                                    carName="BMW 8 Series"
                                    carPriceDay="$150/Day"
                                    carPriceMonth="$2500/Month"
                                    carSpedometer="15k"
                                    carTransmisson="Auto"
                                    carGas="Petrol"
                                    carousalLine={<line className='carousal-contain-line'></line>}
                                    handleEvent={handleLinkClick}
                                    buttonName="View our collection"
                                    carPassengers= '2'
                                    carLiterKM='10L/100KM'
                                    carDrivetrain='RWD'
                                    carousalLine2='carousalLine2'
                                    carYear="2023"
                                    classForInfoCarousalOne='info-container-carousal-one'
                                    classForInfoCarousalTwo='info-container-carousal-two'
                                    />

                                </div>


                    </Carousel>
                </div>


        </>
    );
}