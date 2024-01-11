import Next from "./next.svg";

interface NextIconProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function NextIcon({
  width = 40,
  height = 40,
  color = "black",
}: NextIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 20H35" stroke={color} />
      <path d="M28.3333 15L35 20L28.3333 25" stroke={color} />
    </svg>
  );
}
