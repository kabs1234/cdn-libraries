import { useEffect, useRef, useState, type ReactElement } from 'react';
import { NavLink, useLocation } from 'react-router';
import SearchBar from './search-bar';

export default function Header(): ReactElement {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const onMenuButtonClick = (): void => {
    if (!navMenuRef.current) {
      return;
    }

    const navMenuElement = navMenuRef.current;

    if (isNavMenuOpen) {
      navMenuElement.style.display = 'none';
      setIsNavMenuOpen(false);
    } else {
      navMenuElement.style.display = 'block';
      setIsNavMenuOpen(true);
    }
  };

  useEffect(() => {
    if (!navMenuRef.current) {
      return;
    }

    const navMenuElement = navMenuRef.current;

    navMenuElement.style.display = 'none';
    setIsNavMenuOpen(false);
  }, [location]);

  return (
    <header className="flex border-b border-gray-300 py-3 px-4 sm:px-10 bg-white min-h-[65px] tracking-wide relative z-50">
      <nav className="flex flex-wrap justify-center items-center gap-4 max-w-screen-xl mx-auto w-full">
        <NavLink to={'/'} className="max-sm:hidden">
          <img src="img/cdn-logo.svg" alt="logo" className="w-[134px]" />
        </NavLink>
        <NavLink to={'/'} className="hidden max-sm:block">
          <img src="img/cdn-logo.svg" alt="logo" className="w-30" />
        </NavLink>
        <div
          ref={navMenuRef}
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
            onClick={onMenuButtonClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 fill-slate-900"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>
          <ul className="lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <NavLink to={'/'}>
                <img src="img/cdn-logo.svg" alt="logo" className="w-36" />
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <NavLink
                to={'/'}
                className="font-medium lg:hover:text-blue-700 block text-[15px]"
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                })}
              >
                Intro
              </NavLink>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <NavLink
                to={'/libraries'}
                className="font-medium lg:hover:text-blue-700 block text-[15px]"
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                })}
              >
                All Libraries
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 ml-auto">
          <SearchBar />
          <button
            id="toggleOpen"
            className="lg:hidden cursor-pointer"
            onClick={onMenuButtonClick}
          >
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>

            <span className="visually-hidden">open navigation menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
