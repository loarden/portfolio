type SectionHeadingProps = {
  label: string;
  className?: string;
};

export default function SectionHeading({
  label,
  className = "mb-16",
}: SectionHeadingProps) {
  return (
    <h2
      className={`reveal font-label-md text-label-md uppercase tracking-[0.2em] text-primary ${className}`}
    >
      {label}
    </h2>
  );
}
