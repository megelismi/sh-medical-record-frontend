import { Text, View, StyleSheet } from "@react-pdf/renderer";
import ConsultationRow from "./ConsultationRow";

const HerpesAntiviralQuestions = (props: {
  coldSoresFrequency: string | null;
  currentColdSoresOutbreak: boolean | null;
  currentGenitalHerpesOutbreak: boolean | null;
  genitalHerpesFrequency: string | null;
  herpesConsultConditions: string | null;
  herpesConsultMedications: string | null;
  hivOrAids: boolean | null;
  previouslyDiagnosedColdSores: boolean | null;
  previouslyDiagnosedGenitalHerpes: boolean | null;
  recentVaricellaOrZosterVaccination: boolean | null;
}) => {
  // Make sure we have some values to display, otherwise don't
  // show the "Herpes/Antiviral" title
  const herpesAntiviralValues = Object.values(props).filter(
    (value) => value !== null
  );

  return (
    <View>
      {herpesAntiviralValues.length ? (
        <Text style={styles.subHeader}>Herpes/Antiviral</Text>
      ) : null}
      {props.coldSoresFrequency !== null ? (
        <ConsultationRow
          question={"How often do you have cold sore outbreaks?"}
          answer={
            props.coldSoresFrequency === "NINE_OR_LESS_PER_YEAR"
              ? "0 to 9 Times per Year"
              : "Over 9 Times per Year"
          }
        />
      ) : null}
      {props.currentColdSoresOutbreak !== null ? (
        <ConsultationRow
          question={"Do you currently have or suspect a cold sore outbreak?"}
          answer={props.currentColdSoresOutbreak ? "Yes" : "No"}
        />
      ) : null}
      {props.currentGenitalHerpesOutbreak !== null ? (
        <ConsultationRow
          question={
            "Do you currently have or suspect a genital herpes outbreak?"
          }
          answer={props.currentGenitalHerpesOutbreak ? "Yes" : "No"}
        />
      ) : null}
      {props.genitalHerpesFrequency !== null ? (
        <ConsultationRow
          question={"How often do you have genital herpes outbreaks?"}
          answer={
            props.genitalHerpesFrequency === "NINE_OR_LESS_PER_YEAR"
              ? "0 to 9 Times per Year"
              : "Over 9 Times per Year"
          }
        />
      ) : null}
      {props.herpesConsultConditions !== null ? (
        <ConsultationRow
          question={
            "Do any of these conditions apply to you? (select all that apply)"
          }
          answer={props.herpesConsultConditions}
        />
      ) : null}
      {props.herpesConsultMedications !== null ? (
        <ConsultationRow
          question={
            "Do you take any of the following medications? (select all that apply)"
          }
          answer={props.herpesConsultMedications ? "Yes" : "No"}
        />
      ) : null}
      {props.hivOrAids !== null ? (
        <ConsultationRow
          question={
            "Do any of these conditions apply to you? (select all that apply) - HIV/AIDS"
          }
          answer={props.hivOrAids ? "Yes" : "No"}
        />
      ) : null}
      {props.previouslyDiagnosedColdSores !== null ? (
        <ConsultationRow
          question={
            "Have you previously been diagnosed with recurrent cold sores (oral herpes) by a healthcare provider?"
          }
          answer={props.previouslyDiagnosedColdSores ? "Yes" : "No"}
        />
      ) : null}
      {props.previouslyDiagnosedGenitalHerpes !== null ? (
        <ConsultationRow
          question={
            "Have you previously been diagnosed with genital herpes by a healthcare provider?"
          }
          answer={props.previouslyDiagnosedGenitalHerpes ? "Yes" : "No"}
        />
      ) : null}
      {props.recentVaricellaOrZosterVaccination !== null ? (
        <ConsultationRow
          question={
            "Have you received a varicella or zoster vaccination in the past 2 weeks?"
          }
          answer={props.recentVaricellaOrZosterVaccination ? "Yes" : "No"}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: { fontWeight: "bold", margin: "10px 0" },
});

export default HerpesAntiviralQuestions;
