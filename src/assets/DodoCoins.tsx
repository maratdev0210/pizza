interface FillColor {
  fill: string;
}

export default function DodoCoins({ fill }: FillColor) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M11 1a1 1 0 0 1 1 1v2a8 8 0 1 1 0 16v2a1 1 0 1 1-2 0v-2H6.6c-.56 0-.84 0-1.05-.1a1 1 0 0 1-.44-.45C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.1-1.05a1 1 0 0 1 .45-.44C5.76 4 6.04 4 6.6 4H10V2a1 1 0 0 1 1-1m1 17a6 6 0 0 0 0-12H7v12z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
