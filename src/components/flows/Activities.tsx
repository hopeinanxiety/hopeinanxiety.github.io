import { IonButton } from '@ionic/react';
import './Activities.css';

interface ContainerProps { }

const Activities: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton>Activities</IonButton>
    </div>
  );
};

export default Activities;
