import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import HopefulInfographic from '../components/intervention/HopefulInfographic';
import BreatheExercise from '../components/intervention/BreatheExercise';
import CallFriends from '../components/intervention/CallFriends';
import InterventionLink from '../components/intervention/InterventionLink';
import './Intervention.css';

const Intervention: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Intervention</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow><IonCol><HopefulInfographic /></IonCol></IonRow>
          <IonRow><IonCol><BreatheExercise /></IonCol></IonRow>
          <IonRow><IonCol><CallFriends /></IonCol></IonRow>
          <IonRow><IonCol><InterventionLink /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Intervention;
