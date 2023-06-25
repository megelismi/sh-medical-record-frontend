import { Text, View, StyleSheet } from "@react-pdf/renderer";
import ConsultationRow from "./ConsultationRow";
import type { FertilityQuestionType } from "../../../types";

const FertilityQuestions = (props: FertilityQuestionType) => {
  // Make sure we have some values to display, otherwise don't
  // show the "Birth Control" title
  const fertilityValues = Object.values(props).filter(
    (value) => value !== null
  );

  return (
    <View>
      {fertilityValues.length ? (
        <Text style={styles.subHeader}>Fertility</Text>
      ) : null}
      {props.abdominalOrPelvicSurgeries !== null ? (
        <ConsultationRow
          question={"Have you ever had any abdominal or pelvic surgeries?"}
          answer={props.abdominalOrPelvicSurgeries ? "Yes" : "No"}
        />
      ) : null}
      {props.averageMenstrualCycle !== null ? (
        <ConsultationRow
          question={
            "What’s the average amount of time from the start (day 1) of your period to the start (day 1) of your next period?"
          }
          answer={props.averageMenstrualCycle}
        />
      ) : null}
      {props.endometriosis !== null ? (
        <ConsultationRow
          question={
            "Has a doctor ever diagnosed you with any of the following? Endometriosis"
          }
          answer={props.endometriosis ? "Yes" : "No"}
        />
      ) : null}
      {props.excessHairGrowth !== null ? (
        <ConsultationRow
          question={
            "Have you ever had any of the following: Excess hair growth on the face, chest, abdomen, or upper thighs?"
          }
          answer={props.excessHairGrowth ? "Yes" : "No"}
        />
      ) : null}
      {props.exerciseFrequency !== null ? (
        <ConsultationRow
          question={"How often do you exercise?"}
          answer={props.exerciseFrequency}
        />
      ) : null}
      {props.fibroids !== null ? (
        <ConsultationRow
          question={
            "Has a doctor ever diagnosed you with any of the following: Fibriods?"
          }
          answer={props.fibroids ? "Yes" : "No"}
        />
      ) : null}
      {props.hairLoss !== null ? (
        <ConsultationRow
          question={
            "Have you ever had any of the following: Hair loss or hair thinning?"
          }
          answer={props.hairLoss ? "Yes" : "No"}
        />
      ) : null}
      {props.highBloodPressure !== null ? (
        <ConsultationRow
          question={"Have you ever been told you have high blood pressure?"}
          answer={props.highBloodPressure ? "Yes" : "No"}
          note={props.highBloodPressureNote}
        />
      ) : null}
      {props.highProlactinLevel !== null ? (
        <ConsultationRow
          question={
            "Have you ever been told by a doctor that you have or had any of the following: A high prolactin level"
          }
          answer={props.highProlactinLevel ? "Yes" : "No"}
        />
      ) : null}
      {props.menstrualCycleDetails !== null ? (
        <ConsultationRow
          question={"Do any of the following apply to you?"}
          answer={props.menstrualCycleDetails}
        />
      ) : null}
      {props.monthlyMenstrualCycles !== null ? (
        <ConsultationRow
          question={"Do you usually have a period each month?"}
          answer={props.monthlyMenstrualCycles ? "Yes" : "No"}
        />
      ) : null}
      {props.ovarianCysts !== null ? (
        <ConsultationRow
          question={
            "Has a doctor ever diagnosed you with any of the following: Ovarian cysts?"
          }
          answer={props.ovarianCysts ? "Yes" : "No"}
        />
      ) : null}
      {props.painBowelMovements !== null ? (
        <ConsultationRow
          question={
            "Have you ever had any of the following: Pain with bowel movements?"
          }
          answer={props.painBowelMovements ? "Yes" : "No"}
        />
      ) : null}
      {props.painDeepPenetrativeSex !== null ? (
        <ConsultationRow
          question={
            "Have you ever had any of the following: Pain with deep penetrative sex?"
          }
          answer={props.painDeepPenetrativeSex ? "Yes" : "No"}
        />
      ) : null}
      {props.painPelvic !== null ? (
        <ConsultationRow
          question={
            "Have you ever had any of the following: Pelvic pain (especially cyclic pain that worsens with periods)?"
          }
          answer={props.painPelvic ? "Yes" : "No"}
        />
      ) : null}
      {props.patchesOfThickenedDarkenedSkin !== null ? (
        <ConsultationRow
          question={
            "Have you ever had any of the following: Patches of thickened, velvety, darkened skin?"
          }
          answer={props.patchesOfThickenedDarkenedSkin ? "Yes" : "No"}
        />
      ) : null}
      {props.polycysticOvarianSyndrome !== null ? (
        <ConsultationRow
          question={
            "Has a doctor ever diagnosed you with any of the following: PCOS (polycystic ovarian syndrome)?"
          }
          answer={props.polycysticOvarianSyndrome ? "Yes" : "No"}
        />
      ) : null}
      {props.rheumatologicOrAutoimmuneDisorder !== null ? (
        <ConsultationRow
          question={
            "Have you ever had any of the following: Rheumatologic or autoimmune disorder (such as lupus, rheumatoid arthritis, celiac disease)?"
          }
          answer={props.rheumatologicOrAutoimmuneDisorder ? "Yes" : "No"}
        />
      ) : null}
      {props.severeAcne !== null ? (
        <ConsultationRow
          question={"Have you ever had any of the following: Severe acne?"}
          answer={props.severeAcne ? "Yes" : "No"}
        />
      ) : null}
      {props.severeMenstrualCramping !== null ? (
        <ConsultationRow
          question={
            "Have you ever had any of the following: Severe menstrual cramping that doesn’t get better with over the counter pain medication?"
          }
          answer={props.severeMenstrualCramping ? "Yes" : "No"}
        />
      ) : null}
      {props.sexuallyTransmittedInfection !== null ? (
        <ConsultationRow
          question={
            "Has a doctor ever diagnosed you with any of the following: STIs (e.g. herpes, chlamydia, gonorrhea, pelvic inflammatory disease)?"
          }
          answer={props.sexuallyTransmittedInfection ? "Yes" : "No"}
        />
      ) : null}
      {props.supplements !== null ? (
        <ConsultationRow
          question={"Do you take any vitamins or supplements?"}
          answer={props.supplements}
        />
      ) : null}
      {props.tobaccoUsage !== null ? (
        <ConsultationRow
          question={"How often do you smoke cigarettes?"}
          answer={props.tobaccoUsage}
        />
      ) : null}
      {props.thyroidDisorder !== null ? (
        <ConsultationRow
          question={
            "Have you ever been told by a doctor that you have or had any of the following: A thyroid disorder?"
          }
          answer={props.thyroidDisorder ? "Yes" : "No"}
        />
      ) : null}
      {props.uterinePolyps !== null ? (
        <ConsultationRow
          question={
            "Has a doctor ever diagnosed you with any of the following: Uterine polyps?"
          }
          answer={props.uterinePolyps ? "Yes" : "No"}
        />
      ) : null}
      {props.weightGain !== null ? (
        <ConsultationRow
          question={"Do you experience any of the following: Weight gain?"}
          answer={props.weightGain ? "Yes" : "No"}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: { fontWeight: "bold", margin: "10px 0" },
});

export default FertilityQuestions;
