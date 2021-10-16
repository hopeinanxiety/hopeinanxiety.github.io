import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import WelcomeBanner from '../../components/home/WelcomeBanner';
import InspirationLink from '../../components/inspiration/InspirationLink';
import InformationLink from '../../components/information/InformationLink';
import InterventionLink from '../../components/intervention/InterventionLink';

const Anxiety: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Anxiety</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol><WelcomeBanner /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><InspirationLink /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><InformationLink /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><InterventionLink /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Anxiety;
