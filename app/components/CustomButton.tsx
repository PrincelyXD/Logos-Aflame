import React from "react";

const CustomButton = ({
  beforeIcon,
  afterIcon,
  text,
  href,
  handleClick,
  className,
}: {
  beforeIcon?: React.ReactNode;
  text: string;
  afterIcon?: React.ReactNode;
  href: string;
  handleClick?: () => void;
  className?: string;
}) => {
  return (
    <a href={href} onClick={handleClick} className={className}>
      {beforeIcon}
      {text}
      {afterIcon}
    </a>
  );
};

export default CustomButton;
