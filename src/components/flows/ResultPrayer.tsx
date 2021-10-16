import './ResultPrayer.css';

interface ContainerProps { }

const ResultPrayer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <p>A Prayer</p>
      <p>Our Father in heaven,</p>
      <p>hallowed be your name...</p>
    </div>
  );
};

export default ResultPrayer;
