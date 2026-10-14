const CurvedVector = () => (
  <svg
    className="absolute left-0 top-[265px] w-[250px] md:w-[320px]"
    viewBox="0 0 320 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 24C78 7 175 8 310 24"
      stroke="#4FBD98"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <path
      d="M3 27C78 10 175 11 310 27"
      stroke="#79D4B6"
      strokeWidth="1"
      strokeLinecap="round"
    />

    <circle
      cx="3"
      cy="24"
      r="4.5"
      fill="white"
      stroke="#4FBD98"
      strokeWidth="2"
    />

    <circle
      cx="310"
      cy="24"
      r="4.5"
      fill="white"
      stroke="#4FBD98"
      strokeWidth="2"
    />
  </svg>
);
export default CurvedVector;
