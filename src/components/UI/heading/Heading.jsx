"use client";

const Heading = ({
  level = "h2",
  children,
  align = "responsive",
  className = "",
}) => {
  const Tag = level;

  const alignStyles = {
    center: "text-center",
    start: "text-start",
    responsive: "text-center md:text-start",
  };

  const finallClass = `custom-${level} ${alignStyles[align]} ${className}`;
  return <Tag className={finallClass.trim()}>{children}</Tag>;
};

export default Heading;
