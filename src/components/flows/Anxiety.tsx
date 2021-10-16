import { IonButton } from '@ionic/react';
import './Anxiety.css';

interface ContainerProps { }

const Anxiety: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton href="/anxiety">Reduce anxiety now</IonButton>
    </div>
  );
};

export default Anxiety;
