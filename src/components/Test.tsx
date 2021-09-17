import {
  IonInput,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import React from "react";

const Test = (): JSX.Element => {
  return (
    <div>
      <IonRadioGroup value={2}>
        <IonItem>
          <IonLabel>Radio 1</IonLabel>
          <IonRadio slot="start" value={1} data-testid="radioWithTestId" />
        </IonItem>
        <IonItem>
          <IonLabel>Radio 2</IonLabel>
          <IonRadio slot="start" value={2} />
        </IonItem>
        <IonItem>
          <IonLabel>Input</IonLabel>
          <IonInput value="hello ionic"></IonInput>
        </IonItem>
      </IonRadioGroup>
    </div>
  );
};

export default Test;
