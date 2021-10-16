import { IonImg } from '@ionic/react';
import './ResultBanner.css';

interface ContainerProps { }

const ResultBanner: React.FC<ContainerProps> = () => {
  return (
    <IonImg src="\assets\images\meditations\z-s-nqVDLh2WLus-unsplash.jpg" />
  );
};

export default ResultBanner;
