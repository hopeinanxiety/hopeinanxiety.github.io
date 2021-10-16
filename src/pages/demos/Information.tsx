import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import InterventionLink from '../../components/intervention/InterventionLink';

const Information: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Information</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol></IonCol></IonRow>
          <IonRow className="height25"><IonCol></IonCol></IonRow>
          <IonRow className="height25"><IonCol></IonCol></IonRow>
          <IonRow className="height25"><IonCol><InterventionLink /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Information;
