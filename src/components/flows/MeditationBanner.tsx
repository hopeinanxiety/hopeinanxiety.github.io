import './MeditationBanner.css';

interface ContainerProps { }

const MeditationBanner: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <p>What are you feeling</p>
      <p>anxious about?</p>
    </div>
  );
};

export default MeditationBanner;
