import './WelcomeBanner.css';

interface ContainerProps { }

const WelcomeBanner: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>WelcomeBanner</strong>
    </div>
  );
};

export default WelcomeBanner;
