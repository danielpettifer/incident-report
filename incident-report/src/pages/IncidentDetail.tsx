import React from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';

interface Incident {
  id: string;
  name: string;
  location: string;
  description: string;
}

interface IncidentDetailProps {
  incidents: Incident[];
}

const IncidentDetail: React.FC<IncidentDetailProps> = ({ incidents }) => {
  const { id } = useParams<{ id: string }>();
  const incident = incidents.find(inc => inc.id === id);

  if (!incident) {
    return <IonPage><IonContent>Incident not found</IonContent></IonPage>;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page/Incidents" />
          </IonButtons>
          <IonTitle>{incident.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{incident.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="ion-padding">
          <h2>Incident Details</h2>
          <p><strong>Location:</strong> {incident.location}</p>
          <p><strong>Description:</strong> {incident.description}</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IncidentDetail;
