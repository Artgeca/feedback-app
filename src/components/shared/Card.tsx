type Props = {
  children: JSX.Element;
  reverse?: boolean;
};

const Card: React.FC<Props> = ({ children, reverse = false }) => {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  );
};
export default Card;
