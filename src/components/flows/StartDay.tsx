import { IonButton } from '@ionic/react';
import './StartDay.css';

interface ContainerProps { }

const StartDay: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton fill="clear">Start my day well</IonButton>
    </div>
  );
};

export default StartDay;
