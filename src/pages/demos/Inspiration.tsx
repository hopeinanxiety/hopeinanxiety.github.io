import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Ephesians1 from '../../components/inspiration/Ephesians1';
import GodIs from '../../components/inspiration/GodIs';
import WhenLifeHurts from '../../components/inspiration/WhenLifeHurts';
import InterventionLink from '../../components/intervention/InterventionLink';
import './Inspiration.css';

const Inspiration: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inspiration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow><IonCol><Ephesians1 /></IonCol></IonRow>
          <IonRow><IonCol><GodIs /></IonCol></IonRow>
          <IonRow><IonCol><WhenLifeHurts /></IonCol></IonRow>
          <IonRow><IonCol><InterventionLink /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Inspiration;
