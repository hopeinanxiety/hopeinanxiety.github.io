import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Ephesians1 from '../../components/inspiration/Ephesians1';
import GodIs from '../../components/inspiration/GodIs';
import WhenLifeHurts from '../../components/inspiration/WhenLifeHurts';
import InterventionLink from '../../components/intervention/InterventionLink';

const Inspiration: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inspiration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol><Ephesians1 /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><GodIs /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><WhenLifeHurts /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><InterventionLink /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inspiration;
