import { CreateAnimation, Animation } from '@ionic/react';
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Square from '../../components/trial/Square';
import './DynamicImage.css';
// import { Script } from '..\\..\\scripts\\DynamicImage.js';


const DynamicImage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DynamicImage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow><IonCol><Square /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DynamicImage;