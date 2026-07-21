type MaterialIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export default function MaterialIcon({
  name,
  size = 24,
  className = "",
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      {name}
    </span>
  );
}
