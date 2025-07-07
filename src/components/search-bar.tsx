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
          className="ml-2 p-1.5 rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          aria-label="Expand search"
        >
          <svg
            fill="#000000"
            width="20"
            height="20"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M262.749 410.667H.000648499V282.667H262.749C292.139 145.504 414.06 42.6667 560 42.6667 705.94 42.6667 827.861 145.504 857.251 282.667H1920V410.667H857.251C827.861 547.829 705.94 650.667 560 650.667 414.06 650.667 292.139 547.829 262.749 410.667ZM384 346.667C384 249.465 462.798 170.667 560 170.667 657.202 170.667 736 249.465 736 346.667 736 443.869 657.202 522.667 560 522.667 462.798 522.667 384 443.869 384 346.667ZM.000648499 896H1009.42C1038.81 758.837 1160.73 656 1306.67 656 1452.61 656 1574.53 758.837 1603.92 896H1920V1024H1603.92C1574.53 1161.16 1452.61 1264 1306.67 1264 1160.73 1264 1038.81 1161.16 1009.42 1024H.000648499V896ZM1306.67 784C1209.46 784 1130.67 862.798 1130.67 960 1130.67 1057.2 1209.46 1136 1306.67 1136 1403.87 1136 1482.67 1057.2 1482.67 960 1482.67 862.798 1403.87 784 1306.67 784ZM857.251 1637.33C827.861 1774.5 705.94 1877.33 560 1877.33 414.06 1877.33 292.139 1774.5 262.749 1637.33H.000648499V1509.33H262.749C292.139 1372.17 414.06 1269.33 560 1269.33 705.94 1269.33 827.861 1372.17 857.251 1509.33H1920V1637.33H857.251ZM384 1573.33C384 1476.13 462.798 1397.33 560 1397.33 657.202 1397.33 736 1476.13 736 1573.33 736 1670.54 657.202 1749.33 560 1749.33 462.798 1749.33 384 1670.54 384 1573.33Z"
            />
          </svg>
        </button>

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
