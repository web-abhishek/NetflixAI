import React, { useEffect, useState } from 'react';
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
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoInvertMode } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Header = () => {

  const [userProfileOpen, setUserProfileOpen] = useState(false);
  // const [showSuggestions, setShowSuggestions] = useState(false);

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
        navigate("/home")
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
    <header className="sticky top-0 z-30 w-full header-glass backdrop-blur-xl px-6 py-2">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link to="/home">
          <img src={NetflixLogo} alt="NetflixAI" className='w-28 object-contain' />
        </Link>
        {user && (
          <div className='flex flex-wrap items-center gap-3'>
            <ul className='flex items-center'>
             <Link to="/top-rated"> <li className='px-4 py-2 cursor-pointer hover:text-red-500 transition ease-in-out text-gray-300 font-medium text-base'>Top Rated</li> </Link>
             <Link to="/trending"> <li className='px-4 py-2 cursor-pointer hover:text-red-500 transition ease-in-out text-gray-300 font-medium text-base'>Trending</li> </Link>
             <Link to="/popular"> <li className='px-4 py-2 cursor-pointer hover:text-red-500 transition ease-in-out text-gray-300 font-medium text-base'>Popular</li> </Link>
             <Link to="/upcoming"> <li className='px-4 py-2 cursor-pointer hover:text-red-500 transition ease-in-out text-gray-300 font-medium text-base'>Upcoming</li> </Link>
            </ul>
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
            
            <button className='rounded-2xl cursor-pointer border border-transparent bg-gradient-to-r from-red-600 via-red-500 to-pink-600 px-4 py-2 text-sm font-semibold 
            text-white shadow-card transition duration-200 hover:brightness-110'
              onClick={handleGptSearch}>
              {showGptSearch ? "All Movies" : (
                <span className='flex items-center gap-2'>
                  GPT Search <FaSearch />
                </span>
              )}
            </button>
            <div>

              <div className='flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-100 transition'
                onClick={() => setUserProfileOpen(!userProfileOpen)}
                onFocus={(e) => setUserProfileOpen(false)}
                onBlur={(e) => setUserProfileOpen(false)}
              > 
                <img className='h-10 w-10 rounded-full object-cover'
                  src={user.photoURL} alt={user.displayName || 'User'} />
                <IoIosArrowDown className={`transition-transform duration-200 
                ${
                  userProfileOpen ? 'rotate-180' : ''
                }`} />
              </div>
              {
               userProfileOpen && (
                  <div className='absolute right-4 mt-2 w-48 rounded-md bg-black/90 backdrop-blur-lg shadow-lg py-2 z-50'>
                   <Link to="/favourite">
                      <button className='border-b-2 border-red-900 px-4 py-2 text-sm font-semibold text-gray-300 shadow-card
                          transition duration-200 hover:brightness-110 cursor-pointer w-full text-left'>
                         <span className='flex items-center gap-2'>
                            <FaRegHeart className='text-red-500' /> Favourite
                         </span>
                      </button>
                   </Link>

                    {/* <button className='border-b-2 border-red-900 px-4 py-2 text-sm font-semibold text-gray-300 shadow-card
                       transition duration-200 hover:brightness-110 cursor-pointer w-full text-left'>
                      <span className='flex items-center gap-2'>
                        <IoInvertMode className='text-red-500' /> Light/Dark Mode
                      </span>
                    </button> */}

                    <button className='border-b-2 border-red-900 px-4 py-2 text-sm font-semibold text-gray-300 shadow-card
                       transition duration-200 hover:brightness-110 cursor-pointer w-full text-left'
                      onClick={handleSignOut}>
                      <span className='flex items-center gap-2'>
                        <LiaSignOutAltSolid className='text-red-500' /> Sign Out
                      </span>
                    </button>
                  </div>
                )
              }
            </div>
          </div>
        )}
      </div>
    </header>

  )
}

export default Header;