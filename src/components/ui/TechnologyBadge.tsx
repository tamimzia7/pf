interface TechnologyBadgeProps {
  technology: string;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
}

const TechnologyBadge = ({ technology, variant = 'secondary', size = 'default' }: TechnologyBadgeProps) => {
  const px = size === 'large' ? 'px-3' : 'px-2.5';
  const py = size === 'large' ? 'py-1.5' : 'py-1';
  const base = `${px} ${py} text-xs font-medium rounded-full transition-colors`;
  
  let classes = base;
  if (variant === 'primary') {
    classes = `${base} text-primary bg-primary/10 border border-primary/20 hover:bg-primary/20`;
  } else {
    // secondary
    classes = `${base} text-secondary-text bg-secondary-text/5 border border-secondary-text/20 hover:border-primary/50 hover:text-primary`;
  }
  
  return (
    <span className={classes}>
      {technology}
    </span>
  );
};

export default TechnologyBadge;