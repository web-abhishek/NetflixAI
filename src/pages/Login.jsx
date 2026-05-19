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
    <div>
      {/* <Link to="/">
        <img src={NetflixLogo} alt="NetflixAI" className='w-28 object-contain absolute top-5 left-5 z-50' />
      </Link> */}
      <div className='relative'>
        <img src={NetflixBnr1} alt='' className='h-screen w-screen object-cover' />
      </div>
      <form className='w-2/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-15 bg-gray-950 shadow-2xs shadow-red-900 rounded-3xl text-white' onSubmit={(e) => e.preventDefault()}>
        <h1 className='font-bold text-center text-gray-300 text-3xl mb-10 font-manrope'>{!isSignIn ? "Sign Up" : "Sign In"}</h1>

        {!isSignIn && (<input ref={name} type="text" placeholder='Full Name'
          className='font-inter block my-3  shadow-xs shadow-red-900 focus:ring-2 
          focus:ring-red-900 focus:outline-none p-3 rounded-3xl w-full text-sm text-gray-400' />)}

        <input ref={email} type="text" placeholder='Email'
          className='font-inter block my-3 shadow-xs shadow-red-900 focus:ring-2 
          focus:ring-red-900 focus:outline-none p-3 rounded-3xl outline-red-900 w-full text-sm text-gray-400' />

        <div className='relative'>
          <input ref={password} type={showPass ? "text" : "password"} placeholder='Password'
            className='font-inter block my-3 shadow-xs shadow-red-900 focus:ring-2 
          focus:ring-red-900 focus:outline-none  p-3 rounded-3xl outline-red-900 w-full text-sm
           text-gray-400' />
          <button type="button" onClick={() => setShowPass(!showPass)}
            className='absolute right-5 top-[50%] translate-y-[-50%] text-gray-400 font-bold text-sm'>
            {showPass ? <img src={hide} alt="Hide" className='w-10 h-10 invert' /> : <img src={show} alt="Show" className='w-8 h-8 invert' />}
          </button>
        </div>
        <p className='text-red-400 text-sm py-2'>{errMessage || ""}</p>

        <button className='font-manrope text-center rounded-3xl p-3 opacity-100 font-bold text-base cursor-pointer text-gray-200 
        bg-linear-50 from-red-800 hover:bg-linear-20 transition-colors duration-300 outline-none w-full' onClick={handleBtn}>
          {!isSignIn ? "Sign Up" : "Sign In"}
        </button>

        <p className='font-inter text-gray-400 mt-6 cursor-pointer font-medium text-sm text-center'
          onClick={toggleAuth}>{!isSignIn ? "Already User, Sign In Now" : "New to Netflix ? Sign Up Now"}
        </p>

      </form>
    </div>
  )
}

export default Login;