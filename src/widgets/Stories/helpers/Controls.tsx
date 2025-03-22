// left and right arrow for scrolling

// "<" control
function LeftControl() {
  return (
    <div className="text-orange-500">
      <svg
        width="18"
        height="24"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 11L1 6L6 1"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

// ">" control
function RightConrol() {
  return (
    <div className="text-orange-500">
      <svg
        width="18"
        height="24"
        viewBox="0 0 7 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 11L6 6L1 1"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export { LeftControl, RightConrol };
