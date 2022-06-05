const Button = ({ className, handleClick, disable, children }) => {
  return (
    <button className={className} disabled={disable} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
