export default function CartArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      fill="none"
      viewBox="0 0 13 11"
      className="absolute animate-cartArrow-appear top-3.5 right-8"
    >
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M1 5.483h11m0 0L7.286 1M12 5.483 7.286 10"
      ></path>
    </svg>
  );
}
