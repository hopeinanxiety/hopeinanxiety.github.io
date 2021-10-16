import { IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import './WhenLifeHurts.css';

interface ContainerProps { }

const WhenLifeHurts: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonGrid>
        <IonRow>
          <IonCol><IonImg src="\assets\images\when_life_hurts\answering.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\christ.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\dependence.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\discipling.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\equipping.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\faith.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\hearing.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\hearts.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\hope.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\humility.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\joy.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\participate.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\protecting.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\when_life_hurts\redeemed.png" /></IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default WhenLifeHurts;
