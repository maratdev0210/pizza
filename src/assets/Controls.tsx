// "+" and "-" icons

function RemoveOne() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="cursor-pointer"
    >
      <rect width="10" height="2" y="4" fill="#454B54" rx="1"></rect>
    </svg>
  );
}

function AddOne() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="cursor-pointer"
    >
      <g fill="#454B54">
        <rect width="2" height="10" x="4" ry="1"></rect>
        <rect width="10" height="2" y="4" rx="1"></rect>
      </g>
    </svg>
  );
}

export { RemoveOne, AddOne };
