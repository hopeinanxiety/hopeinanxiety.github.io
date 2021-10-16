import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import MeditationBanner from '../../components/flows/MeditationBanner';
import MeditationPhotos from '../../components/flows/MeditationPhotos';

const Feeling: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feeling</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol><MeditationBanner /></IonCol></IonRow>
          <IonRow className="height75"><IonCol><MeditationPhotos /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Feeling;
