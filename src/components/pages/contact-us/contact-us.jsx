import './contact.css';
import { useState, useRef } from 'react';
import React from 'react';
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import 'primeicons/primeicons.css';
import Background from './maxresdefault.jpg'
import logo from '../../../assets/logo/logo.png'
import { InputMask } from 'primereact/inputmask';
import { InputSwitch } from "primereact/inputswitch";

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'primeicons/primeicons.css';

const contactUS = () => {
    const form = useRef();
        const [checked, setChecked] = useState(false);
        const [name, setNameValue] = useState('');
        const [email, setEmailValue] = useState('');
        const [phone, setPhoneValue] = useState('');
        const [message, setMessageValue] = useState('');

        const sendEmail = (e) => {
            e.preventDefault();

            const emailJSTemplate = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                from_message: message,
                from_receive_emails: checked,
            };

            const emailKey = 'jgA-mcVxzDEQ8cdGx';
            const templateID = 'template_qgysb5z';
            const serviceID = 'service_frod6md';

            if (!name || !email || !message) {
                toast.error("Please fill in all required fields.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    transition: "bounce",
                });
                return; // Prevent form submission if validation fails
            }

            emailjs.send(serviceID, templateID, emailJSTemplate, {
                publicKey: emailKey
            }).then((response) => {
                console.log("SUCCESS!", response);
                setNameValue('');
                setEmailValue('');
                setPhoneValue('');
                setMessageValue('');
                setChecked('');
                toast.success("Email sent successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    transition: "bounce",
                });
            }).catch((error) => {
                console.error("FAILED", error);
                toast.error("Failed to send email. Please try again later.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: "bounce",
                });
            });
        }



        const homePage = () => {
            window.location.href = '/';
          };



    return(

            <div className="bg-cover px-4 py-8 md:px-6 lg:px-8" style={{ backgroundImage: Background }}>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6 p-4 lg:p-7 bg-white-alpha-70">
                        <img src={logo} alt="Image" height="50" className="mb-6" style={{width: 200, height: 200, transform: 'translate3d(-0.5rem,3rem,1rem)'}}/>
                        <div className="text-xl text-black-alpha-90 font-500 mb-3">Contact us!</div>
                        <p className="text-black-alpha-50 line-height-3 mt-0 mb-6">We&apos;re delighted to assist you with your car rental needs! Our agents are ready to respond promptly to answer your questions and help you with your reservation</p>

                    </div>
                    <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">

                        <div className="text-900 text-2xl font-medium mb-6">Contact Form</div>

                        <form onSubmit={sendEmail}>
                            <ToastContainer />
                                    <label htmlFor="name" className="font-bold block mb-2">Enter your name</label>
                                    <InputText name='from_name' value={name} onChange={(e) => setNameValue(e.target.value)} className='p-inputtext p-component w-full mb-4' placeholder='Enter full name' />

                                    <label htmlFor="email" className="font-bold block mb-2">Enter your email</label>
                                    <InputText name='from-email' value={email} onChange={(e) => setEmailValue(e.target.value)} className='p-inputtext p-component w-full mb-4' placeholder='Enter email' />

                                    <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                                    <InputMask name='from_phone' id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999" className='p-inputtext p-component w-full mb-4' value={phone} onChange={(e) => setPhoneValue(e.target.value)}></InputMask>
                                    <div>
                                        <label htmlFor="description" className="font-bold block mb-2">Description</label>
                                        <InputTextarea name='from_message' value={message} onChange={(e) => setMessageValue(e.target.value)} rows={5} cols={30} className='p-inputtext p-component w-full mb-4' />
                                    </div>

                            <div/>
                            <div style={{marginBottom: '1rem'}}>
                                <label htmlFor="switch" className="font-bold block mb-2">Receive email updates?</label>
                                <InputSwitch name='from_receive_emails' checked={checked} onChange={(e) => setChecked(e.value)} />
                            </div>




                            <button  aria-label="Submit" className="p-button p-component w-full">
                                <span className="p-button-icon p-c p-button-icon-left pi pi-send"></span>
                                <span className="p-button-label p-c">Submit</span>
                            </button>

                        </form>
                        <div className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-center my-6" role="separator">
                            <div className="p-divider-content">
                            <span className="text-600 font-normal text-sm">OR</span>
                            </div>
                        </div>
                        <button onClick={homePage} aria-label="home" className="p-button p-component w-full">
                                <span className="p-button-icon p-c p-button-icon-left pi pi-home"></span>
                                <span className="p-button-label p-c">Home Page</span>
                        </button>
                    </div>
                </div>
            </div>

    );

}

export default contactUS;