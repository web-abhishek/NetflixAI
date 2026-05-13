import React, { useRef, useState } from 'react'
import Header from './Header'
import NetflixBnr1 from '../assets/images/NetflixBnr1.jpg'
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/Constants';


const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null)


  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleBtn = () => {

    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

          }).catch((error) => {
            // An error occurred
            setErrMessage(error.message);
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMessage(errorCode + "-" + errorMessage)
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMessage(errorCode + "-" + errorMessage)
        });
    }

  }

  const toggleAuth = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={NetflixBnr1} alt='' className='' />
      </div>
      <form className='relative top-20 left-4/12 w-4/12 p-12 bg-black  rounded-3xl text-white' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-center text-gray-300 text-3xl mb-10 font-manrope'>{!isSignIn ? "Sign Up" : "Sign In"}</h1>

        {!isSignIn && (<input ref={name} type="text" placeholder='Full Name' className='font-inter block my-3 shadow-2xl p-3 rounded-3xl w-100' />)}
        <input ref={email} type="text" placeholder='Email' className='font-inter block my-3  shadow-xs shadow-red-900 p-3 rounded-3xl w-100' />
        <input ref={password} type="password" placeholder='Password' className='font-inter block my-3  shadow-xs shadow-red-900 p-3 rounded-3xl w-100' />

        <p className='text-red-800 text-lg py-2'>{errMessage}</p>

        <button className='font-manrope text-center rounded-3xl w-100 p-3 opacity-100 font-bold text-base cursor-pointer text-gray-200 
        bg-linear-50 from-red-800 hover:bg-linear-20 transition-colors duration-300 outline-none' onClick={handleBtn}>
          {!isSignIn ? "Sign Up" : "Sign In"}
        </button>
        <p className='font-inter text-gray-400 mt-6 cursor-pointer font-bold' onClick={toggleAuth}>{!isSignIn ? "Already User, Sign in now" : "New to Netflix ? Sign up now"}</p>
      </form>
    </div>
  )
}

export default Login;