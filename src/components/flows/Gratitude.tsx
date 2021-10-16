import { IonButton } from '@ionic/react';
import './Gratitude.css';

interface ContainerProps { }

const Gratitude: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton fill="clear">Develop gratitude</IonButton>
    </div>
  );
};

export default Gratitude;
