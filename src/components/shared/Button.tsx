type Props = {
  children: string | JSX.Element;
  version?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
};

const Button: React.FC<Props> = ({ children, version = 'primary', type = 'button', isDisabled = false }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`} >
      {children}
    </button>
  );
};

export default Button;
