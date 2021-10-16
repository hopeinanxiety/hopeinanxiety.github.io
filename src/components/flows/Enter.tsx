import { IonButton } from '@ionic/react';
import './Enter.css';

interface ContainerProps { }

const Enter: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton fill="clear" href="/menu">Enter</IonButton>
    </div>
  );
};

export default Enter;
