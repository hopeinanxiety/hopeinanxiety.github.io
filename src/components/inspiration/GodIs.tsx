import { IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import './GodIs.css';

interface ContainerProps { }

const GodIs: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonGrid className="height100">
        <IonRow className="height25">
          <IonCol><IonImg src="\assets\images\god_is\defender.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\fortress.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\hiding_place.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\living_god.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\lord_god_almighty.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\loving.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\mighty_one.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\refuge.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\rock.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\shepherd.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\shield.png" /></IonCol>
          <IonCol><IonImg src="\assets\images\god_is\stronghold.png" /></IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default GodIs;
