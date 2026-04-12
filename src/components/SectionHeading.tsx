interface Props {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: Props) => (
  <div className="text-center mb-12">
    {label && (
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-2">
        {label}
      </span>
    )}
    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    {description && (
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{description}</p>
    )}
  </div>
);

export default SectionHeading;
