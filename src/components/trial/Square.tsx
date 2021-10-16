import './Square.css';

interface ContainerProps { }

const Square: React.FC<ContainerProps> = () => {
  return (
      
    <div > 
      <strong>Square</strong>
      <div className="square"></div>
      
      <button id="play">Play</button>
      <button id="pause">Pause</button>
      <button id="stop">Stop</button>
    </div>
  );    
};

export default Square;
