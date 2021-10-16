import { IonButton } from '@ionic/react';
import './InterventionLink.css';

interface ContainerProps { }

const InterventionLink: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton color="primary" shape="round" href="/home">Reset</IonButton>
      <IonButton color="warning" shape="round" href="/help">Don't Panic!</IonButton>
    </div>
  );
};

export default InterventionLink;
