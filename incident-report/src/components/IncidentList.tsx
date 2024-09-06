import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

interface Incident {
  id: string;
  name: string;
  location: string;
  description: string;
}

interface IncidentListProps {
  incidents: Incident[];
  onSelectIncident: (id: string) => void;
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents, onSelectIncident }) => {
  return (
    <IonList>
      {incidents.map((incident) => (
        <IonItem key={incident.id} button onClick={() => onSelectIncident(incident.id)}>
          <IonLabel>
            <h2>{incident.name}</h2>
            <p>{incident.location}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default IncidentList;
