import type { ReactElement } from 'react';

export default function Filter(): ReactElement {
  return (
    <div className="hidden">
      <div className="w-full max-w-[300px] shrink-0 shadow-md px-6 sm:px-8 min-h-screen py-6">
        <div className="flex items-center border-b border-gray-300 pb-2 mb-6">
          <h3 className="text-slate-900 text-lg font-semibold">Filter</h3>
          <button
            type="button"
            className="text-sm text-red-500 font-semibold ml-auto cursor-pointer"
          >
            Clear all
          </button>
        </div>
        <div>
          <h6 className="text-slate-900 text-sm font-semibold">Brand</h6>
          <div className="flex px-3 py-1.5 rounded-md border border-gray-300 bg-gray-100 overflow-hidden mt-2">
            <input
              type="email"
              placeholder="Search brand"
              className="w-full bg-transparent outline-none text-gray-900 text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              className="w-3 fill-gray-600"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <input
                id="zara"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="zara"
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                Zara
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                id="hm"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="hm"
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                H&amp;M
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                id="uniqlo"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="uniqlo"
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                Uniqlo
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                id="levis"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="levis"
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                Levi’s
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                id="nike"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="nike"
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                Nike
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                id="adidas"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="adidas"
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                Adidas
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                id="puma"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="puma"
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                Puma
              </label>
            </li>
            <li className="flex items-center gap-3">
              <input
                id="tommy"
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="tommy"
                className="text-slate-600 font-medium text-sm cursor-pointer"
              >
                Tommy Hilfiger
              </label>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300" />
        <div>
          <h6 className="text-slate-900 text-sm font-semibold">Size</h6>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              type="button"
              className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
            >
              XS
            </button>
            <button
              type="button"
              className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
            >
              S
            </button>
            <button
              type="button"
              className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
            >
              M
            </button>
            <button
              type="button"
              className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
            >
              L
            </button>
            <button
              type="button"
              className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
            >
              XL
            </button>
            <button
              type="button"
              className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
            >
              XXL
            </button>
            <button
              type="button"
              className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
            >
              XXXL
            </button>
            <button
              type="button"
              className="cursor-pointer border border-gray-300 hover:border-blue-600 rounded-md text-[13px] text-slate-600 font-medium py-1 px-1 min-w-14"
            >
              4XL
            </button>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div>
          <h6 className="text-slate-900 text-sm font-semibold">Price</h6>
          <div className="relative mt-6">
            <div className="h-1.5 bg-gray-300 relative">
              <div
                id="activeTrack"
                className="absolute h-1.5 bg-pink-500 rounded-full w-9/12"
              />
            </div>
            <input
              type="range"
              id="minRange"
              min={0}
              max={1000}
              defaultValue={0}
              className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-5 
              [&::-webkit-slider-thumb]:h-5 
              [&::-webkit-slider-thumb]:bg-pink-500 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:border-2 
              [&::-webkit-slider-thumb]:border-white 
              [&::-webkit-slider-thumb]:shadow-md 
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-5 
              [&::-moz-range-thumb]:h-5 
              [&::-moz-range-thumb]:bg-pink-500 
              [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:border-2 
              [&::-moz-range-thumb]:border-white 
              [&::-moz-range-thumb]:shadow-md 
              [&::-moz-range-thumb]:cursor-pointer
              [&::-moz-range-thumb]:border-none"
            />
            <input
              type="range"
              id="maxRange"
              min={0}
              max={1000}
              defaultValue={750}
              className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-5 
              [&::-webkit-slider-thumb]:h-5 
              [&::-webkit-slider-thumb]:bg-pink-500 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:border-2 
              [&::-webkit-slider-thumb]:border-white 
              [&::-webkit-slider-thumb]:shadow-md 
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-5 
              [&::-moz-range-thumb]:h-5 
              [&::-moz-range-thumb]:bg-pink-500 
              [&::-moz-range-thumb]:rounded-full 
              [&::-moz-range-thumb]:border-2 
              [&::-moz-range-thumb]:border-white 
              [&::-moz-range-thumb]:shadow-md 
              [&::-moz-range-thumb]:cursor-pointer
              [&::-moz-range-thumb]:border-none"
            />
            <div className="flex justify-between text-slate-600 font-medium text-sm mt-4">
              <span id="minPrice">$750</span>
              <span id="maxPrice">$1000</span>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div>
          <h6 className="text-slate-900 text-sm font-semibold">Color</h6>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              type="button"
              className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-blue-700 w-8 h-8 hover:scale-[1.05] transition-all"
            />
            <button
              type="button"
              className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-purple-700 w-8 h-8 hover:scale-[1.05] transition-all"
            />
            <button
              type="button"
              className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-pink-700 w-8 h-8 hover:scale-[1.05] transition-all"
            />
            <button
              type="button"
              className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-orange-700 w-8 h-8 hover:scale-[1.05] transition-all"
            />
            <button
              type="button"
              className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-red-700 w-8 h-8 hover:scale-[1.05] transition-all"
            />
            <button
              type="button"
              className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-yellow-700 w-8 h-8 hover:scale-[1.05] transition-all"
            />
            <button
              type="button"
              className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-black w-8 h-8 hover:scale-[1.05] transition-all"
            />
            <button
              type="button"
              className="cursor-pointer rounded-full text-[13px] text-white font-medium bg-gray-700 w-8 h-8 hover:scale-[1.05] transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
