import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from '@ionic/react';
import { useParams } from 'react-router';
import { useState } from 'react';
import './Page.css';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string; }>();
  const [incidentName, setIncidentName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ incidentName, location, description });
    // Handle form submission logic here
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Incident Name</IonLabel>
            <IonInput value={incidentName} onIonChange={e => setIncidentName(e.detail.value!)} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Location</IonLabel>
            <IonInput value={location} onIonChange={e => setLocation(e.detail.value!)} required />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea value={description} onIonChange={e => setDescription(e.detail.value!)} required />
          </IonItem>
          <IonButton expand="block" type="submit">Submit Incident Report</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Page;
