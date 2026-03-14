interface SectionHeaderProps {
  label: string;
  title?: string;
}

const SectionHeader = ({ label, title }: SectionHeaderProps) => {
  return (
    <div>
      <h2 className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
        {label}
      </h2>
      {title && (
        <p className="text-sm text-muted-foreground/60 mt-2 hidden md:block">{title}</p>
      )}
    </div>
  );
};

export default SectionHeader;
