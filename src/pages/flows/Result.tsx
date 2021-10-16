import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ResultBanner from '../../components/flows/ResultBanner';
import ResultQuote from '../../components/flows/ResultQuote';
import ResultCopy from '../../components/flows/ResultCopy';
import ResultPrayer from '../../components/flows/ResultPrayer';

const Result: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Result</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="blur-background" fullscreen>
        <IonGrid className="height100">
          <IonRow className="height25"><IonCol><ResultBanner /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><ResultQuote /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><ResultCopy /></IonCol></IonRow>
          <IonRow className="height25"><IonCol><ResultPrayer /></IonCol></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Result;
