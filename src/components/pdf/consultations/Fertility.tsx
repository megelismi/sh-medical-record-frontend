import { Text, View, StyleSheet } from "@react-pdf/renderer";
import ConsultationRow from "./ConsultationRow";
// import { Frequency, MenstrualCycleDetail } from "./index";

// interface FrequencyAnswers {
//   NEVER: string;
//   FEW_TIMES_A_YEAR: string;
//   FEW_TIMES_A_MONTH: string;
//   FEW_TIMES_A_WEEK: string;
//   FEW_TIMES_A_DAY: string;
//   DAILY: string;
// }

// const FREQUENCY_ANSWERS: FrequencyAnswers = {
//   NEVER: "Never",
//   FEW_TIMES_A_YEAR: "A few times a year",
//   FEW_TIMES_A_MONTH: "A few times a month",
//   FEW_TIMES_A_WEEK: "A few times a week",
//   FEW_TIMES_A_DAY: "A few times a day",
//   DAILY: "Daily",
// };

// interface MenstrualCycleAnswers {
//   BLEED_LONGER_7_DAYS: string;
//   BLEED_LESS_2_DAYS: string;
//   CHANGE_TAMPON_EVERY_HOUR: string;
//   CYCLE_SHORTER_21_DAYS: string;
//   HEAVY_BLEEDING: string;
//   PASS_BLOOD_CLOTS: string;
//   MID_CYCLE_BLEEDING: string;
// }

// const MENSTRUAL_CYCLE_ANSWERS: MenstrualCycleAnswers = {
//   BLEED_LONGER_7_DAYS: "I bleed longer than 7 days.",
//   BLEED_LESS_2_DAYS: "I bleed less than 2 days.",
//   CHANGE_TAMPON_EVERY_HOUR:
//     "I change my pad/tampon every hour or more on my heaviest days.",
//   CYCLE_SHORTER_21_DAYS: "My cycle is typically shorter than 21 days.",
//   HEAVY_BLEEDING:
//     "I change my pad/tampon every hour or more on my heaviest days.",
//   PASS_BLOOD_CLOTS: "I more than occassionally pass blood clots.",
//   MID_CYCLE_BLEEDING:
//     "I’ve had mid-cycle bleeding/spotting on more than one occassion.",
// };

const FertilityQuestions = (props: {
  abdominalOrPelvicSurgeries: boolean | null;
  averageMenstrualCycle: string | null;
  endometriosis: boolean | null;
  excessHairGrowth: boolean | null;
  exerciseFrequency: string | null;
  fibroids: boolean | null;
  hairLoss: boolean | null;
  highBloodPressure: boolean | null;
  highBloodPressureNote: string | null;
  highProlactinLevel: boolean | null;
  menstrualCycleDetails: string | null;
  monthlyMenstrualCycles: boolean | null;
  ovarianCysts: boolean | null;
  painBowelMovements: boolean | null;
  painDeepPenetrativeSex: boolean | null;
  painPelvic: boolean | null;
  patchesOfThickenedDarkenedSkin: boolean | null;
  polycysticOvarianSyndrome: boolean | null;
  rheumatologicOrAutoimmuneDisorder: boolean | null;
  severeAcne: boolean | null;
  severeMenstrualCramping: boolean | null;
  sexuallyTransmittedInfection: boolean | null;
  supplements: string | null;
  tobaccoUsage: string | null;
  thyroidDisorder: boolean | null;
  uterinePolyps: boolean | null;
  weightGain: boolean | null;
}) => {
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
