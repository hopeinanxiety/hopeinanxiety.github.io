import { IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import './MeditationPhotos.css';

interface ContainerProps { }

const MeditationPhotos: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
        <IonGrid className="height100">
          <IonRow className="height25">
            <IonCol><IonImg src="\assets\images\meditations\colton-duke-QRU0i5AqEJA-unsplash.jpg" /></IonCol>
            <IonCol><IonImg src="\assets\images\meditations\jacek-smoter-guhKZly2fVM-unsplash.jpg" /></IonCol>
          </IonRow>
          <IonRow className="height25">
            <IonCol><IonImg src="\assets\images\meditations\pascal-debrunner-oxN9M1CRU-0-unsplash.jpg" /></IonCol>
            <IonCol><IonImg src="\assets\images\meditations\pierre-herman-GHmkQztBoC8-unsplash.jpg" /></IonCol>
          </IonRow>
          <IonRow className="height25">
            <IonCol><IonImg src="\assets\images\meditations\vinicius-henrique-photography-tlCzxI2RQAc-unsplash.jpg" /></IonCol>
            <IonCol><IonImg src="\assets\images\meditations\z-s-nqVDLh2WLus-unsplash.jpg" /></IonCol>
          </IonRow>
        </IonGrid>
    </div>
  );
};

export default MeditationPhotos;
