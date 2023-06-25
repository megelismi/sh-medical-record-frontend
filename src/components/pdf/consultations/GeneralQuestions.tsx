import { Text, View, StyleSheet } from "@react-pdf/renderer";
import ConsultationRow from "./ConsultationRow";
import type { GeneralQuestionType } from "../../../types";

const GeneralQuestions = (props: GeneralQuestionType) => {
  // Make sure we have some values to display, otherwise don't
  // show the "Birth Control" title
  const generalValues = Object.values(props).filter((value) => value !== null);

  return (
    <View>
      {generalValues.length ? (
        <Text style={styles.subHeader}>General</Text>
      ) : null}
      {props.weight !== null ? (
        <ConsultationRow
          question={"What is your weight?"}
          answer={`${props.weight} lbs`}
        />
      ) : null}
      {props.height !== null ? (
        <ConsultationRow
          question={"What is your height?"}
          answer={`${props.height} in`}
        />
      ) : null}
      {props.allergies !== null ? (
        <ConsultationRow
          question={"Are you allergic to any medications?"}
          answer={props.allergies ? "Yes" : "No"}
          note={props.allergiesNote}
        />
      ) : null}
      {props.bloodClots !== null ? (
        <ConsultationRow
          question={
            "Do you have a personal or family history of deep vein thrombosis (DVT), pulmonary embolism (PE), or blood clotting disorder?"
          }
          answer={props.bloodClots ? "Yes" : "No"}
          note={props.bloodClotsNote}
        />
      ) : null}
      {props.bloodPressure !== null ? (
        <ConsultationRow
          question={"What was your most recent blood pressure reading?"}
          answer={props.bloodPressure}
        />
      ) : null}
      {props.diabetes !== null ? (
        <ConsultationRow
          question={"Do you have diabetes?"}
          answer={props.diabetes ? "Yes" : "No"}
          note={props.diabetesNote}
        />
      ) : null}
      {props.heartConditions !== null ? (
        <ConsultationRow
          question={"Do you have any heart or cholesterol conditions?"}
          answer={props.heartConditions ? "Yes" : "No"}
          note={props.heartConditionsNote}
        />
      ) : null}
      {props.liverConditions !== null ? (
        <ConsultationRow
          question={"Do you have any liver or gallbladder conditions?"}
          answer={props.liverConditions ? "Yes" : "No"}
          note={props.liverConditionsNote}
        />
      ) : null}
      {props.medications !== null ? (
        <ConsultationRow
          question={
            "Please tell us what medications and supplements you currently take."
          }
          answer={props.medications}
          note={props.medicationsNote}
        />
      ) : null}
      {props.migraines !== null ? (
        <ConsultationRow
          question={"Do you have migraines with aura?"}
          answer={props.migraines ? "Yes" : "No"}
        />
      ) : null}
      {props.otherConditions !== null ? (
        <ConsultationRow
          question={"Do you have any other medical conditions?"}
          answer={props.otherConditions ? "Yes" : "No"}
          note={props.otherConditionsNote}
        />
      ) : null}
      {props.stateCode !== null ? (
        <ConsultationRow
          question={"Please confirm some information: State of residence."}
          answer={props.stateCode}
        />
      ) : null}
      {props.surgeries !== null ? (
        <ConsultationRow
          question={
            "Have you had any major surgeries or do you have any upcoming surgeries?"
          }
          answer={props.surgeries ? "Yes" : "No"}
          note={props.surgeriesNote}
        />
      ) : null}
      {props.tobacco !== null ? (
        <ConsultationRow
          question={
            "Do you ever smoke tobacco or use a nicotine/e-cigarette device?"
          }
          answer={props.tobacco ? "Yes" : "No"}
          note={props.tobaccoNote}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: { fontWeight: "bold", margin: "10px 0" },
});

export default GeneralQuestions;
