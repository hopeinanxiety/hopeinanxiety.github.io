import { IonButton } from '@ionic/react';
import './Meditations.css';

interface ContainerProps { }

const Meditations: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton href="/feeling">Verse Meditations</IonButton>
    </div>
  );
};

export default Meditations;
