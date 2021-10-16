import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import WelcomeBanner from '../../components/home/WelcomeBanner';
import InspirationLink from '../../components/inspiration/InspirationLink';
import InformationLink from '../../components/information/InformationLink';
import InterventionLink from '../../components/intervention/InterventionLink';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
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

export default Menu;
