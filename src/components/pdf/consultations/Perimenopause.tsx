import { Text, View, StyleSheet } from "@react-pdf/renderer";
import ConsultationRow from "./ConsultationRow";
import type { PerimenopauseQuestionType } from "../../../types";

const PerimenopauseQuestions = (props: PerimenopauseQuestionType) => {
  // Make sure we have some values to display, otherwise don't
  // show the "Perimenopause" title
  const perimenopauseValues = Object.values(props).filter(
    (value) => value !== null
  );

  return (
    <View>
      {perimenopauseValues.length ? (
        <Text style={styles.subHeader}>Perimenopause</Text>
      ) : null}
      {props.bloating !== null ? (
        <ConsultationRow
          question={"Do you experience any of the following: Bloating?"}
          answer={props.bloating ? "Yes" : "No"}
        />
      ) : null}
      {props.cervicalDysplasiaOrAbnormalPaps !== null ? (
        <ConsultationRow
          question={
            "Has a doctor ever diagnosed you with any of the following: Cervical dysplasia/abnormal paps?"
          }
          answer={props.cervicalDysplasiaOrAbnormalPaps ? "Yes" : "No"}
        />
      ) : null}
      {props.decreasedLibido !== null ? (
        <ConsultationRow
          question={"Do you experience any of the following: Decreased libido?"}
          answer={props.decreasedLibido ? "Yes" : "No"}
        />
      ) : null}
      {props.difficultySleeping !== null ? (
        <ConsultationRow
          question={
            "Do you experience any of the following: Difficulty sleeping?"
          }
          answer={props.difficultySleeping ? "Yes" : "No"}
        />
      ) : null}
      {props.hadPeriodInPastYear !== null ? (
        <ConsultationRow
          question={"Have you had a period within the past 12 months?"}
          answer={props.hadPeriodInPastYear ? "Yes" : "No"}
        />
      ) : null}
      {props.hotFlashesOrNightSweats !== null ? (
        <ConsultationRow
          question={
            "Do you experience any of the following: Hot flashes or night sweats?"
          }
          answer={props.hotFlashesOrNightSweats ? "Yes" : "No"}
        />
      ) : null}
      {props.irritabilityAnxietyDepressionOrWorseningPMS !== null ? (
        <ConsultationRow
          question={
            "Do you experience any of the following: Irritability, anxiety, depression, or worsening of PMS symptoms?"
          }
          answer={
            props.irritabilityAnxietyDepressionOrWorseningPMS ? "Yes" : "No"
          }
        />
      ) : null}
      {props.loseBalanceOrTripEasily !== null ? (
        <ConsultationRow
          question={
            "Do you find that you lose your balance or trip and fall easily?"
          }
          answer={props.loseBalanceOrTripEasily ? "Yes" : "No"}
        />
      ) : null}
      {props.regularMenstrualCycles !== null ? (
        <ConsultationRow
          question={
            "Are your menstrual cycles roughly the same length each month? In other words, they don’t vary in length by more than three days from month to month."
          }
          answer={props.regularMenstrualCycles ? "Yes" : "No"}
        />
      ) : null}
      {props.usingHormonalBirthControl !== null ? (
        <ConsultationRow
          question={
            "Are you using any type of hormonal contraception (such as birth control pills, patch, ring, injection, implant, or a hormone-containing IUD)?"
          }
          answer={props.usingHormonalBirthControl ? "Yes" : "No"}
        />
      ) : null}
      {props.vaginalDrynessOrPainWithSex !== null ? (
        <ConsultationRow
          question={
            "Do you experience any of the following: Vaginal dryness or pain with sex?"
          }
          answer={props.vaginalDrynessOrPainWithSex ? "Yes" : "No"}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: { fontWeight: "bold", margin: "10px 0" },
});

export default PerimenopauseQuestions;
