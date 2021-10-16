import './WelcomeBanner.css';

interface ContainerProps { }

const WelcomeBanner: React.FC<ContainerProps> = () => {
  return (
    <div className="containerYellow">
      <strong>Hope</strong>
      <p>in anxiety</p>
    </div>
  );
};

export default WelcomeBanner;
