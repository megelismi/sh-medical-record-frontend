import { Text, View, StyleSheet } from "@react-pdf/renderer";
import ConsultationRow from "./ConsultationRow";

const GeneralQuestions = ({
  weight,
  height,
  allergies,
  allergiesNote,
  bloodClots,
  bloodClotsNote,
  bloodPressure,
  diabetes,
  diabetesNote,
  heartConditions,
  heartConditionsNote,
  liverConditions,
  liverConditionsNote,
  medications,
  medicationsNote,
  migraines,
  otherConditions,
  otherConditionsNote,
  stateCode,
  surgeries,
  surgeriesNote,
  tobacco,
  tobaccoNote,
}: {
  weight: string | null;
  height: string | null;
  allergies: boolean | null;
  allergiesNote: string | null;
  bloodClots: boolean | null;
  bloodClotsNote: string | null;
  bloodPressure: string | null;
  diabetes: boolean | null;
  diabetesNote: string | null;
  heartConditions: boolean | null;
  heartConditionsNote: string | null;
  liverConditions: boolean | null;
  liverConditionsNote: string | null;
  medications: string | null;
  medicationsNote: string | null;
  migraines: boolean | null;
  otherConditions: boolean | null;
  otherConditionsNote: string | null;
  stateCode: string | null;
  surgeries: boolean | null;
  surgeriesNote: string | null;
  tobacco: boolean | null;
  tobaccoNote: string | null;
}) => {
  const getGeneralValues = (): string[] => {
    const generalValues = [];

    if (weight) {
      generalValues.push("weight");
    }

    if (height) {
      generalValues.push("height");
    }

    if (allergies !== null) {
      generalValues.push("allergies");
    }

    if (bloodClots !== null) {
      generalValues.push("bloodClots");
    }

    if (bloodPressure) {
      generalValues.push("bloodPressure");
    }

    if (diabetes !== null) {
      generalValues.push("diabetes");
    }

    if (heartConditions !== null) {
      generalValues.push("heartConditions");
    }

    if (liverConditions !== null) {
      generalValues.push("liverConditions");
    }

    if (medications) {
      generalValues.push("medications");
    }

    if (migraines) {
      generalValues.push("migraines");
    }

    if (otherConditions) {
      generalValues.push("otherConditions");
    }

    if (stateCode) {
      generalValues.push("stateCode");
    }

    if (surgeries !== null) {
      generalValues.push("surgeries");
    }

    if (tobacco !== null) {
      generalValues.push("tobacco");
    }

    return generalValues;
  };

  const generalValues = getGeneralValues();

  return (
    <View>
      {generalValues.length ? (
        <Text style={styles.subHeader}>General</Text>
      ) : null}
      {weight ? (
        <ConsultationRow
          question={"What is your weight?"}
          answer={`${weight} lbs`}
        />
      ) : null}
      {height ? (
        <ConsultationRow
          question={"What is your height?"}
          answer={`${height} in`}
        />
      ) : null}
      {allergies !== null ? (
        <ConsultationRow
          question={"Are you allergic to any medications?"}
          answer={allergies ? "Yes" : "No"}
          note={allergiesNote}
        />
      ) : null}
      {bloodClots !== null ? (
        <ConsultationRow
          question={
            "Do you have a personal or family history of deep vein thrombosis (DVT), pulmonary embolism (PE), or blood clotting disorder?"
          }
          answer={bloodClots ? "Yes" : "No"}
          note={bloodClotsNote}
        />
      ) : null}
      {bloodPressure ? (
        <ConsultationRow
          question={"What was your most recent blood pressure reading?"}
          answer={bloodPressure}
        />
      ) : null}
      {diabetes !== null ? (
        <ConsultationRow
          question={"Do you have diabetes?"}
          answer={diabetes ? "Yes" : "No"}
          note={diabetesNote}
        />
      ) : null}
      {heartConditions !== null ? (
        <ConsultationRow
          question={"Do you have any heart or cholesterol conditions?"}
          answer={heartConditions ? "Yes" : "No"}
          note={heartConditionsNote}
        />
      ) : null}
      {liverConditions !== null ? (
        <ConsultationRow
          question={"Do you have any liver or gallbladder conditions?"}
          answer={liverConditions ? "Yes" : "No"}
          note={liverConditionsNote}
        />
      ) : null}
      {medications ? (
        <ConsultationRow
          question={
            "Please tell us what medications and supplements you currently take."
          }
          answer={medications}
          note={medicationsNote}
        />
      ) : null}
      {migraines !== null ? (
        <ConsultationRow
          question={"Do you have migraines with aura?"}
          answer={migraines ? "Yes" : "No"}
        />
      ) : null}
      {otherConditions !== null ? (
        <ConsultationRow
          question={"Do you have any other medical conditions?"}
          answer={otherConditions ? "Yes" : "No"}
          note={otherConditionsNote}
        />
      ) : null}
      {stateCode ? (
        <ConsultationRow
          question={"Please confirm some information: State of residence."}
          answer={stateCode}
        />
      ) : null}
      {surgeries !== null ? (
        <ConsultationRow
          question={
            "Have you had any major surgeries or do you have any upcoming surgeries?"
          }
          answer={surgeries ? "Yes" : "No"}
          note={surgeriesNote}
        />
      ) : null}
      {tobacco !== null ? (
        <ConsultationRow
          question={
            "Do you ever smoke tobacco or use a nicotine/e-cigarette device?"
          }
          answer={tobacco ? "Yes" : "No"}
          note={tobaccoNote}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: { fontWeight: "bold", margin: "10px 0" },
});

export default GeneralQuestions;
