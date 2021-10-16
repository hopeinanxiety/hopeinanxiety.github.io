import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import WelcomeBanner from '../../components/home/WelcomeBanner';
import WelcomeQuote from '../../components/flows/WelcomeQuote';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background" fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol><WelcomeBanner /></IonCol></IonRow>
          <IonRow className="height25"><IonCol></IonCol></IonRow>
          <IonRow className="height25"><IonCol></IonCol></IonRow>
          <IonRow className="height25"><IonCol><WelcomeQuote /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
