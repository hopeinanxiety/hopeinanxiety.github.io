import { IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import './Ephesians1.css';

interface ContainerProps { }

const Ephesians1: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonGrid>
        <IonRow>
          <IonCol><IonImg src="\assets\images\ephesians_1\adopted.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\called.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\chosen.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\guaranteed.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\included.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\loved.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\peace.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\redeemed.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\sealed.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\ephesians_1\spiritual blessing.png" /></IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Ephesians1;
