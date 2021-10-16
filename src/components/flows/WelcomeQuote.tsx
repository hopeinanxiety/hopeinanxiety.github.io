import './WelcomeQuote.css';

interface ContainerProps { }

const WelcomeQuote: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <p>... Your Consolations cheer</p>
      <p>my soul</p>
      <p>Psalm 94:19</p>
    </div>
  );
};

export default WelcomeQuote;
