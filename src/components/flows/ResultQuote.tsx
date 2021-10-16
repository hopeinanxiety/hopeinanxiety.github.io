import './ResultQuote.css';

interface ContainerProps { }

const ResultQuote: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <p>Psalm 94:19</p>
      <p>When anxiety was great within me,</p>
      <p>your consolation brought me joy.</p>
    </div>
  );
};

export default ResultQuote;
