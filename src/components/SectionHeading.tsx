interface Props {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
}

const SectionHeading = ({ label, title, description, dark = false }: Props) => (
  <div className="text-center mb-12">
    {label && (
      <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-2 ${dark ? "text-accent" : "text-accent"}`}>
        {label}
      </span>
    )}
    <h2 className={`font-heading text-2xl md:text-3xl font-bold mb-2 ${dark ? "text-white" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-3 max-w-2xl mx-auto ${dark ? "text-white/80" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;

