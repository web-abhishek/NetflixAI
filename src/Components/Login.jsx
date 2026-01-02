import React, { useRef, useState } from 'react'
import Header from './Header'
import NetflixBnr from '../assets/images/NetflixBnr.jpg'
import { checkValidData } from '../Utilities/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utilities/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utilities/userSlice';
import { USER_AVATAR } from '../Utilities/Constants';


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
        <img src={NetflixBnr} alt='' />
      </div>
      <form className='relative top-20 left-4/12 w-4/12 p-12 bg-black opacity-80 text-white' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-3xl mb-6'>{!isSignIn ? "Sign Up" : "Sign In"}</h1>

        {!isSignIn && (<input ref={name} type="text" placeholder='Full Name' className='block my-3 border border-amber-50 p-3 rounded w-100' />)}
        <input ref={email} type="text" placeholder='Email' className='block my-3 border border-amber-50 p-3 rounded w-100' />
        <input ref={password} type="password" placeholder='Password' className='block my-3 border border-amber-50 p-3 rounded w-100' />
        <p className='text-red-800 text-lg py-2'>{errMessage}</p>
        <button className='bg-red-800 text-center rounded text-white w-100 text-xl p-3 font-bold opacity-100 cursor-pointer' onClick={handleBtn}>{!isSignIn ? "Sign Up" : "Sign In"}</button>
        <p className='text-gray-400 mt-6 cursor-pointer font-bold' onClick={toggleAuth}>{!isSignIn ? "Already User, Sign in now" : "New to Netflix ? Sign up now"}</p>
      </form>
    </div>
  )
}

export default Login