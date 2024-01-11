export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`btn p-0 shadow-none border-0 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
