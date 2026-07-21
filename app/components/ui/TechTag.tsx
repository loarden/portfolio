type TechTagProps = {
  label: string;
};

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="rounded-sm border border-white/10 bg-white/5 px-3 py-1 font-label-sm text-label-sm uppercase text-muted-gray">
      {label}
    </span>
  );
}
