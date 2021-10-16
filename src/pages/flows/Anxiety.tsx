import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import AnxietyBanner from '../../components/flows/AnxietyBanner';
import Activities from '../../components/flows/Activities';
import Meditations from '../../components/flows/Meditations';

const Anxiety: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Anxiety</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="blur-background" fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol><AnxietyBanner /></IonCol></IonRow>
          <IonRow className="height25"><IonCol></IonCol></IonRow>
          <IonRow className="height25"><IonCol><Activities /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><Meditations /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Anxiety;
