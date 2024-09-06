import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonList } from '@ionic/react';
import { useParams, useHistory } from 'react-router-dom';
import './Page.css';

interface Incident {
  id: string;
  name: string;
  location: string;
  description: string;
}

interface PageProps {
  incidents: Incident[];
  setIncidents: React.Dispatch<React.SetStateAction<Incident[]>>;
}

const Page: React.FC<PageProps> = ({ incidents, setIncidents }) => {
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();
  const [incidentName, setIncidentName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIncident: Incident = {
      id: Date.now().toString(),
      name: incidentName,
      location,
      description,
    };
    setIncidents([...incidents, newIncident]);
    setIncidentName('');
    setLocation('');
    setDescription('');
  };

  const handleSelectIncident = (id: string) => {
    history.push(`/incident/${id}`);
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

        <IonList>
          {incidents.map((incident) => (
            <IonItem key={incident.id} button onClick={() => handleSelectIncident(incident.id)}>
              <IonLabel>{incident.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        <form onSubmit={handleSubmit}>
          <IonList>
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
          </IonList>
          <IonButton expand="block" type="submit">Submit Incident Report</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Page;
