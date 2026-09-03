interface SectionHeaderProps {
  label: string;
  title?: string;
  index?: string;
}

const SectionHeader = ({ label, title, index }: SectionHeaderProps) => {
  return (
    <div className="flex items-center gap-4 md:block">
      {index && <span className="font-mono text-xs text-primary">0x{index}</span>}
      <h2 className="font-display text-xs font-bold text-foreground uppercase tracking-[0.18em] md:mt-3">
        [ {label} ]
      </h2>
      {title && (
        <p className="text-xs text-muted-foreground mt-3 hidden md:block max-w-32 leading-relaxed">{title}</p>
      )}
    </div>
  );
};

export default SectionHeader;