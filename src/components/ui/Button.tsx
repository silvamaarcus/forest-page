interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <>
      <button
        className={`${className} bg-gradient inline-flex rounded-full px-5 py-2  text-verde-900`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
