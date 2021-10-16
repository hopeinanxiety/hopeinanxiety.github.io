import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import WelcomeBanner from '../../components/home/WelcomeBanner';
import StartDay from '../../components/flows/StartDay';
import Gratitude from '../../components/flows/Gratitude';
import Anxiety from '../../components/flows/Anxiety';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="blur-background" fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol><WelcomeBanner /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><StartDay /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><Gratitude /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><Anxiety /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
