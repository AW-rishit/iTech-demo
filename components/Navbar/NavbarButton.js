export default function NavbarButton({text}) {
  return (
    <button className="group relative flex items-center gap-2 font-semibold text-[20px] cursor-pointer border-none bg-none p-0 m-0">
      <p className="relative text-[#111] transition-all duration-300">
        {text}
        <span className="absolute inset-0 w-0 overflow-hidden text-red-500 transition-all duration-300 group-hover:w-full">
          {text}
        </span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[15px] text-[#111] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
      {/* underline effect */}
      <span className="absolute bottom-[-7px] left-0 h-[2px] w-0 text-red-500 transition-all duration-300 group-hover:w-full" />
    </button>
  );
}
