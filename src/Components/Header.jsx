import React, { useEffect } from 'react';
import NetflixLogo from '../assets/images/NetflixLogo.png';
import { signOut } from "firebase/auth";
import { auth } from '../Utilities/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utilities/userSlice';
import { toggleGptSearchView } from '../Utilities/GptSearchSlice';
import { SUPPORTED_LANGUAGES } from '../Utilities/Constants';
import { changeLanguage } from '../Utilities/configSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // When User is signed in
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
    navigate("/browse")
  } else {
    // When User is signed out
    dispatch(removeUser());
    navigate("/")
  }
    });
     return () => unsubscribe();
     
   }, [])
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  }
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLangChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute z-20 w-full  px-8 py-2 bg-linear-to-b from-black flex items-center justify-between">
      <img src={NetflixLogo} alt="" className='w-30' />
      {user && (
        <div className='flex items-center gap-2.5'>
          {showGptSearch && <select className='bg-purple-600 text-white py-2 px-4 rounded' onChange={handleLangChange}>
            {
              SUPPORTED_LANGUAGES.map((lan) => (
                <option key={lan.identifier} value={lan.identifier}>{ lan.name }</option>
              ))
            }
          </select>}
          <button className='rounded px-4 py-2 font-medium text-lg cursor-pointer text-white bg-red-700'
            onClick={handleGptSearch}>{ showGptSearch ? "All Movies":"GPT Search" }</button>
          <img className='rounded w-12 h-12' src={user.photoURL} />
          <button className='rounded font-medium text-lg cursor-pointer text-white'
            onClick={handleSignOut}>Sign Out</button>
      </div>
      )}
    </div>

  )
}

export default Header