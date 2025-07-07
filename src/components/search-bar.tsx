import { useRef, type KeyboardEvent, type ReactElement } from 'react';
import { useNavigate } from 'react-router';

export default function SearchBar(): ReactElement {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const onSearchEnterKeydown = (evt: KeyboardEvent<HTMLInputElement>): void => {
    if (!searchRef.current || searchRef.current.value.length === 0) {
      return;
    }

    const searchQuery = searchRef.current.value;

    if (evt.key === 'Enter') {
      navigate(`/libraries/search/${searchQuery}`);
    }
  };

  const onSearchButtonClick = (): void => {
    if (!searchRef.current || searchRef.current.value.length === 0) {
      return;
    }

    const searchQuery = searchRef.current.value;

    navigate(`/libraries/search/${searchQuery}`);
  };

  return (
    <div className="flex max-w-xs w-full bg-white px-4 py-2.5 rounded-lg border border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all shadow-sm">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search library..."
        className="w-full text-sm bg-transparent outline-none pr-2 placeholder-gray-400"
        onKeyDown={onSearchEnterKeydown}
      />

      <div className="flex items-center">
        <button
          className="ml-2 px-3 py-1.5 rounded-md bg-blue-600 text-white border border-blue-700 hover:bg-blue-700 active:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 flex items-center justify-center"
          onClick={onSearchButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            className="w-4 h-4"
            fill="currentColor"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <span className="visually-hidden">Search</span>
        </button>
      </div>
    </div>
  );
}
