import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import '../../navbar/navbar.css';
import {  useRef } from 'react';
import Cookies from 'js-cookie';

const Portal = (props) => {
  const Signup = props.Signup;
  const Profile = props.Profile;



  const menuSignInRef = useRef(null);
  const buttonRef = useRef(null);


 // set a cookie To expire 24 hours

let isLoggedIn;
const email = Cookies.get('GoogleName');
const email2 = Cookies.get('email');

try{
  isLoggedIn = JSON.parse(Cookies.get('isLoggedIn'));

}catch(error){
  console.log(error)
}







const handleSignOut2 = () => {
    Cookies.set('isLoggedIn', 'false');
    Cookies.set('email', 'null');
    Cookies.set('GoogleName', 'null')
    Cookies.set('GoogleEmail', 'null')
    Cookies.set('GooglePicture', 'null')

    window.location.href = '/';
}


const items2 = [
    {
      label: (isLoggedIn && email != 'null' ? email : (isLoggedIn && email2 !== 'null' ? email2 : 'Sign-in')),
      icon: isLoggedIn ? 'pi pi-fw pi-user' : 'pi pi-fw pi-sign-in',
      url: isLoggedIn ? '/dashboard ' : '/auth/login',
    },
    {
      label: isLoggedIn ? 'Dashboard' : 'Sign-up',
      icon: isLoggedIn ? 'pi pi-fw pi-list' : 'pi pi-fw pi-user-edit',
      url: isLoggedIn ? '/dashboard' : '/auth/register',
    },
    {
      label: isLoggedIn ? 'Sign-out' : '',
      icon: isLoggedIn ? 'pi pi-fw pi-sign-out' : '',
      command: isLoggedIn ? handleSignOut2 : null,
    },
];






  return (
    <>
      <div className='portal-conatiner'>
        <Menu popup   model={items2} ref={menuSignInRef} />
        <Button
          id={isLoggedIn ? 'profile' : 'sign-up'}
          label={isLoggedIn ? 'Profile' : 'Sign up'}
          icon="pi pi-chevron-down"
          className={`custom-btn ${isLoggedIn ? 'profile' : 'sign-up'}`}
          ref={buttonRef}
          onClick={(event) => menuSignInRef.current.toggle(event)}
        />
      </div>
    </>
  );
};

export default Portal;
