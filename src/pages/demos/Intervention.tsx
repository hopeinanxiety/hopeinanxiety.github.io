import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import HopefulInfographic from '../../components/intervention/HopefulInfographic';
import BreatheExercise from '../../components/intervention/BreatheExercise';
import CallFriends from '../../components/intervention/CallFriends';
import InterventionLink from '../../components/intervention/InterventionLink';

const Intervention: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Intervention</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol><HopefulInfographic /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><BreatheExercise /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><CallFriends /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><InterventionLink /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Intervention;
