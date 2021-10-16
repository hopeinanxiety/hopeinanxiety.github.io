import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import WelcomeBanner from '../components/WelcomeBanner';
import InspirationLink from '../components/inspiration/InspirationLink';
import InformationLink from '../components/information/InformationLink';
import InterventionLink from '../components/intervention/InterventionLink';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow><IonCol><WelcomeBanner /></IonCol></IonRow>
          <IonRow><IonCol><InspirationLink /></IonCol></IonRow>
          <IonRow><IonCol><InformationLink /></IonCol></IonRow>
          <IonRow><IonCol><InterventionLink /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
