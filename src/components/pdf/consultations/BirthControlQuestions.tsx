import { Text, View, StyleSheet } from "@react-pdf/renderer";
import ConsultationRow from "./ConsultationRow";
import type { BirthControlQuestionType } from "../../../types";

const BirthControlQuestions = (props: BirthControlQuestionType) => {
  // Make sure we have some values to display, otherwise don't
  // show the "Birth Control" title
  const birthControlValues = Object.values(props).filter(
    (value) => value !== null
  );

  return (
    <View>
      {birthControlValues.length ? (
        <Text style={styles.subHeader}>Birth Control</Text>
      ) : null}
      {props.pregnant !== null ? (
        <ConsultationRow
          question={
            "Are you currently pregnant or is there a chance you could be?"
          }
          answer={props.pregnant ? "Yes" : "No"}
        />
      ) : null}
      {props.givenBirth !== null ? (
        <ConsultationRow
          question={"Have you given birth in the last 6 weeks?"}
          answer={props.givenBirth ? "Yes" : "No"}
        />
      ) : null}
      {props.isBreastfeeding !== null ? (
        <ConsultationRow
          question={"Are you currently breastfeeding?"}
          answer={props.isBreastfeeding ? "Yes" : "No"}
        />
      ) : null}
      {props.periodPreference !== null ? (
        <ConsultationRow
          question={"How often do you want your period?"}
          answer={
            props.periodPreference === "MONTHLY"
              ? "Monthly period"
              : "Skip period"
          }
        />
      ) : null}
      {props.primaryReason !== null ? (
        <ConsultationRow
          question={"What are your primary reasons for using birth control?"}
          answer={props.primaryReason}
        />
      ) : null}
      {props.previousBirthControlPart1 !== null ? (
        <ConsultationRow
          question={"Have you been prescribed birth control in the past?"}
          answer={props.previousBirthControlPart1 ? "Yes" : "No"}
        />
      ) : null}
      {props.previousBirthControlPart2 !== null ? (
        <ConsultationRow
          question={"Do you want to get that birth control again?"}
          answer={props.previousBirthControlPart2 ? "Yes" : "No"}
          note={props.previousBirthControlPart2Note}
        />
      ) : null}
      {props.sideEffectConcerns !== null ? (
        <ConsultationRow
          question={"Are you concerned about any birth control side effects?"}
          answer={props.sideEffectConcerns ? "Yes" : "No"}
          note={props.sideEffectConcernsNote}
        />
      ) : null}
      {props.progestinOnlyPillQuestions !== null ? (
        <ConsultationRow
          question={
            "Because of your medical history, our doctor may prescribe you a progestin-only pill. Read more about progestin-only pills here. Would you like to include any notes or questions to the doctor about this medication?"
          }
          answer={props.progestinOnlyPillQuestions ? "Yes" : "No"}
        />
      ) : null}
      {props.isGenericOk !== null ? (
        <ConsultationRow
          question={
            "May we send you a more affordable equivalent generic birth control?"
          }
          answer={props.isGenericOk ? "Yes" : "No"}
        />
      ) : null}
      {props.drospirenoneWaiver !== null ? (
        <ConsultationRow
          question={
            "The brand of birth control you selected contains Drospirenone. Some studies have demonstrated a slightly higher risk of blood clots with birth control that contains drospirenone. This risk is still very low and is much lower than the risk of blood clots during pregnancy. If you would still like this brand of birth control, please read the following list of risk factors and confirm that none of these apply to you. Risk factors are: Smoking and age 35 years or older, Less than 21 days postpartum or 21-42 days postpartum with other risk factors, History of deep vein thrombosis or pulmonary embolism, Hereditary thrombophilia (including antiphospholipid syndrome), Inflammatory bowel disease with active or extensive disease, surgery, immobilization, corticosteroid use, vitamin deficiencies, or fluid depletion, Systemic lupus erythematosus with positive (or unknown) antiphospholipid antibodies, Major surgery with prolonged immobilization"
          }
          answer={props.drospirenoneWaiver ? "Yes" : "No"}
        />
      ) : null}
      {props.questionsForDoctor !== null ? (
        <ConsultationRow
          question={
            "Is there anything else you want the doctor to know or do you have any questions?"
          }
          answer={props.questionsForDoctor ? "Yes" : "No"}
          note={props.questionsForDoctorNote}
        />
      ) : null}
      {props.currentBirthControl !== null ? (
        <ConsultationRow
          question={"Are you currently using birth control / contraception?"}
          answer={props.currentBirthControl}
          note={props.currentBirthControlNote}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: { fontWeight: "bold", margin: "10px 0" },
});

export default BirthControlQuestions;
