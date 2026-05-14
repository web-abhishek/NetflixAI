import React, { useEffect } from 'react';
import NetflixLogo from '../assets/images/NetflixLogo.png';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/GptSearchSlice';
import { SUPPORTED_LANGUAGES } from '../utils/Constants';
import { changeLanguage } from '../utils/configSlice';
import { FaSearch } from "react-icons/fa";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // When User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
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
    <header className="sticky top-0 z-30 w-full header-glass backdrop-blur-xl px-6 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link to="/">
          <img src={NetflixLogo} alt="NetflixAI" className='w-28 object-contain' />
        </Link>
        {user && (
          <div className='flex flex-wrap items-center gap-3'>
            {showGptSearch && (
              <select className='min-w-[150px] rounded-2xl border border-white/10 bg-black/75 px-4 py-2 text-sm text-white outline-none transition hover:border-white/20'
                onChange={handleLangChange}>
                {
                  SUPPORTED_LANGUAGES.map((lan) => (
                    <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>
                  ))
                }
              </select>
            )}
            <button className='rounded-2xl border border-transparent bg-linear-to-r from-red-600 via-red-500 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-card transition duration-200 hover:brightness-110'
              onClick={handleGptSearch}>
              {showGptSearch ? "All Movies" : (
                <span className='flex items-center gap-2'>
                  GPT Search <FaSearch />
                </span>
              )}
            </button>
            <img className='h-10 w-10 rounded-full object-cover' src={user.photoURL} alt={user.displayName || 'User'} />
            <button className='rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-100 transition hover:bg-white/10'
              onClick={handleSignOut}>Sign Out</button>
          </div>
        )}
      </div>
    </header>

  )
}

export default Header;