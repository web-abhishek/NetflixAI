import React, { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/Constants';
import NetflixBnr1 from '../assets/images/NetflixBnr1.jpg'
import hide from '../assets/images/hide.png';
import show from '../assets/images/show.png';
import NetflixLogo from '../assets/images/NetflixLogo.png';

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null)

  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtn = () => {

    if (!isSignIn && !name.current?.value.trim()) {
      setErrMessage('Full name is required for sign up');
      return;
    }

    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
            navigate('/home');
          }).catch((error) => {
            setErrMessage(error.message);
          });

        })
        .catch((error) => {
          setErrMessage(`${error.code}: ${error.message}`);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const { uid, email: userEmail, displayName, photoURL } = userCredential.user;
          dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
          navigate('/home');
        })
        .catch((error) => {
          setErrMessage(`${error.code}: ${error.message}`);
        });
    }

  }

  const toggleAuth = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className='flex items-center justify-center min-h-screen relative'>
      <div className='absolute inset-0'>
        <img src={NetflixBnr1} alt='' className='h-full w-full object-cover' />
        <div className='absolute inset-0 bg-black/40'></div>
      </div>
      <form className='relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-950 shadow-2xs shadow-red-900 rounded-2xl sm:rounded-3xl text-white mx-4' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-center text-gray-300 text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 font-manrope'>{!isSignIn ? "Sign Up" : "Sign In"}</h1>

        {!isSignIn && (<input ref={name} type="text" placeholder='Full Name'
          className='font-inter block my-2 sm:my-3 md:my-4 shadow-xs shadow-red-900 focus:ring-2 
          focus:ring-red-900 focus:outline-none p-2 sm:p-3 rounded-2xl sm:rounded-3xl w-full text-xs sm:text-sm text-gray-400 bg-gray-900' />)}

        <input ref={email} type="text" placeholder='Email'
          className='font-inter block my-2 sm:my-3 md:my-4 shadow-xs shadow-red-900 focus:ring-2 
          focus:ring-red-900 focus:outline-none p-2 sm:p-3 rounded-2xl sm:rounded-3xl outline-red-900 w-full text-xs sm:text-sm text-gray-400 bg-gray-900' />

        <div className='relative'>
          <input ref={password} type={showPass ? "text" : "password"} placeholder='Password'
            className='font-inter block my-2 sm:my-3 md:my-4 shadow-xs shadow-red-900 focus:ring-2 
          focus:ring-red-900 focus:outline-none p-2 sm:p-3 rounded-2xl sm:rounded-3xl outline-red-900 w-full text-xs sm:text-sm
           text-gray-400 bg-gray-900' />
          <button type="button" onClick={() => setShowPass(!showPass)}
            className='absolute right-3 sm:right-4 md:right-5 top-[50%] translate-y-[-50%] text-gray-400 font-bold text-xs sm:text-sm'>
            {showPass ? <img src={hide} alt="Hide" className='w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 invert' /> : <img src={show} alt="Show" className='w-5 sm:w-7 md:w-8 h-5 sm:h-7 md:h-8 invert' />}
          </button>
        </div>
        <p className='text-red-400 text-xs sm:text-sm py-2'>{errMessage || ""}</p>

        <button className='font-manrope text-center rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 md:p-4 opacity-100 font-bold text-sm sm:text-base md:text-lg cursor-pointer text-gray-200 
        bg-linear-50 from-red-800 hover:bg-linear-20 transition-colors duration-300 outline-none w-full mt-2 sm:mt-3 md:mt-4' onClick={handleBtn}>
          {!isSignIn ? "Sign Up" : "Sign In"}
        </button>

        <p className='font-inter text-gray-400 mt-4 sm:mt-6 md:mt-8 cursor-pointer font-medium text-xs sm:text-sm text-center hover:text-gray-300 transition-colors'
          onClick={toggleAuth}>{!isSignIn ? "Already User, Sign In Now" : "New to Netflix ? Sign Up Now"}
        </p>

      </form>
    </div>
  )
}

export default Login;