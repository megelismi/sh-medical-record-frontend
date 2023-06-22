import { Text, View, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";
import BirthControlQuestions from "./BirthControlQuestions";
import FertilityQuestions from "./Fertility";
import GeneralQuestions from "./GeneralQuestions";
import HerpesAntiviralQuestions from "./HerpesAntiviral";
import PerimenopauseQuestions from "./Perimenopause";

// export enum Frequency {
//   NEVER,
//   FEW_TIMES_A_YEAR,
//   FEW_TIMES_A_MONTH,
//   FEW_TIMES_A_WEEK,
//   FEW_TIMES_A_DAY,
//   DAILY,
// }

// export enum MenstrualCycleDetail {
//   BLEED_LONGER_7_DAYS,
//   BLEED_LESS_2_DAYS,
//   CHANGE_TAMPON_EVERY_HOUR,
//   CYCLE_SHORTER_21_DAYS,
//   HEAVY_BLEEDING,
//   PASS_BLOOD_CLOTS,
//   MID_CYCLE_BLEEDING,
// }

export interface ConsultationType {
  createdAt: string;
  abdominalOrPelvicSurgeries: boolean | null;
  alcoholUsage: string | null;
  allergies: boolean | null;
  allergiesNote: string | null;
  averageMenstrualCycle: string | null;
  bloating: boolean | null;
  bloodClots: boolean | null;
  bloodClotsNote: string | null;
  bloodPressure: string | null;
  breastPainBeforePeriod: boolean | null;
  cervicalDysplasiaOrAbnormalPaps: boolean | null;
  coldSoresFrequency: string | null;
  consentToTelehealth: string | null;
  currentBirthControl: string | null;
  currentBirthControlNote: string | null;
  currentColdSoresOutbreak: boolean | null;
  currentGenitalHerpesOutbreak: boolean | null;
  decreasedLibido: boolean | null;
  diabetes: boolean | null;
  diabetesNote: string | null;
  difficultySleeping: boolean | null;
  drospirenoneWaiver: boolean | null;
  endometriosis: boolean | null;
  excessHairGrowth: boolean | null;
  exerciseFrequency: string | null;
  fibroids: boolean | null;
  genitalHerpesFrequency: string | null;
  givenBirth: boolean | null;
  hadPeriodInPastYear: boolean | null;
  hairLoss: boolean | null;
  heartConditions: boolean | null;
  heartConditionsNote: string | null;
  height: string | null;
  herpesConsultConditions: string | null;
  herpesConsultMedications: string | null;
  highBloodPressure: boolean | null;
  highBloodPressureNote: string | null;
  highProlactinLevel: boolean | null;
  hivOrAids: boolean | null;
  hotFlashesOrNightSweats: boolean | null;
  irritabilityAnxietyDepressionOrWorseningPMS: boolean | null;
  isBreastfeeding: boolean | null;
  isGenericOk: boolean | null;
  liverConditions: boolean | null;
  liverConditionsNote: string | null;
  loseBalanceOrTripEasily: boolean | null;
  medications: string | null;
  medicationsNote: string | null;
  menstrualCycleDetails: string | null;
  migraines: boolean | null;
  monthlyMenstrualCycles: boolean | null;
  otherConditions: boolean | null;
  otherConditionsNote: string | null;
  ovarianCysts: boolean | null;
  painBowelMovements: boolean | null;
  painDeepPenetrativeSex: boolean | null;
  painPelvic: boolean | null;
  patchesOfThickenedDarkenedSkin: boolean | null;
  periodPreference: string | null;
  polycysticOvarianSyndrome: boolean | null;
  pregnant: boolean | null;
  previousBirthControlPart1: boolean | null;
  previousBirthControlPart2: boolean | null;
  previousBirthControlPart2Note: string | null;
  previouslyDiagnosedColdSores: boolean | null;
  previouslyDiagnosedGenitalHerpes: boolean | null;
  primaryReason: string | null;
  progestinOnlyPillQuestions: boolean | null;
  questionsForDoctor: boolean | null;
  questionsForDoctorNote: string | null;
  recentVaricellaOrZosterVaccination: boolean | null;
  regularMenstrualCycles: string | null;
  rheumatologicOrAutoimmuneDisorder: boolean | null;
  severeAcne: boolean | null;
  severeMenstrualCramping: boolean | null;
  sexuallyTransmittedInfection: boolean | null;
  sideEffectConcerns: boolean | null;
  sideEffectConcernsNote: string | null;
  stateCode: string | null;
  supplements: string | null;
  surgeries: boolean | null;
  surgeriesNote: string | null;
  thyroidDisorder: boolean | null;
  tobacco: boolean | null;
  tobaccoNote: string | null;
  tobaccoUsage: string | null;
  usingHormonalBirthControl: boolean | null;
  uterinePolyps: boolean | null;
  vaginalDrynessOrPainWithSex: boolean | null;
  weight: string | null;
  weightGain: boolean | null;
}

const Consultation = ({ consultation }: { consultation: ConsultationType }) => {
  const createdAtDate = moment(new Date(consultation.createdAt)).format("LL");

  return (
    <View style={styles.consultation}>
      <Text style={styles.pageHeader}>Consultation Date: {createdAtDate}</Text>
      <GeneralQuestions
        weight={consultation.weight}
        height={consultation.height}
        allergies={consultation.allergies}
        allergiesNote={consultation.allergiesNote}
        bloodClots={consultation.bloodClots}
        bloodClotsNote={consultation.bloodClotsNote}
        bloodPressure={consultation.bloodPressure}
        diabetes={consultation.diabetes}
        diabetesNote={consultation.diabetesNote}
        heartConditions={consultation.heartConditions}
        heartConditionsNote={consultation.heartConditionsNote}
        liverConditions={consultation.liverConditions}
        liverConditionsNote={consultation.liverConditionsNote}
        medications={consultation.medications}
        medicationsNote={consultation.medicationsNote}
        migraines={consultation.migraines}
        otherConditions={consultation.otherConditions}
        otherConditionsNote={consultation.otherConditionsNote}
        stateCode={consultation.stateCode}
        surgeries={consultation.surgeries}
        surgeriesNote={consultation.surgeriesNote}
        tobacco={consultation.tobacco}
        tobaccoNote={consultation.tobaccoNote}
      />
      <BirthControlQuestions
        pregnant={consultation.pregnant}
        givenBirth={consultation.givenBirth}
        isBreastfeeding={consultation.isBreastfeeding}
        periodPreference={consultation.periodPreference}
        primaryReason={consultation.primaryReason}
        previousBirthControlPart1={consultation.previousBirthControlPart1}
        previousBirthControlPart2={consultation.previousBirthControlPart2}
        previousBirthControlPart2Note={
          consultation.previousBirthControlPart2Note
        }
        sideEffectConcerns={consultation.sideEffectConcerns}
        sideEffectConcernsNote={consultation.sideEffectConcernsNote}
        progestinOnlyPillQuestions={consultation.progestinOnlyPillQuestions}
        isGenericOk={consultation.isGenericOk}
        drospirenoneWaiver={consultation.drospirenoneWaiver}
        questionsForDoctor={consultation.questionsForDoctor}
        questionsForDoctorNote={consultation.questionsForDoctorNote}
        currentBirthControl={consultation.currentBirthControl}
        currentBirthControlNote={consultation.currentBirthControlNote}
      />
      <HerpesAntiviralQuestions
        coldSoresFrequency={consultation.coldSoresFrequency}
        currentColdSoresOutbreak={consultation.currentColdSoresOutbreak}
        currentGenitalHerpesOutbreak={consultation.currentGenitalHerpesOutbreak}
        genitalHerpesFrequency={consultation.genitalHerpesFrequency}
        herpesConsultConditions={consultation.herpesConsultConditions}
        herpesConsultMedications={consultation.herpesConsultMedications}
        hivOrAids={consultation.hivOrAids}
        previouslyDiagnosedColdSores={consultation.previouslyDiagnosedColdSores}
        previouslyDiagnosedGenitalHerpes={
          consultation.previouslyDiagnosedGenitalHerpes
        }
        recentVaricellaOrZosterVaccination={
          consultation.recentVaricellaOrZosterVaccination
        }
      />
      <FertilityQuestions
        abdominalOrPelvicSurgeries={consultation.abdominalOrPelvicSurgeries}
        averageMenstrualCycle={consultation.averageMenstrualCycle}
        endometriosis={consultation.endometriosis}
        excessHairGrowth={consultation.excessHairGrowth}
        exerciseFrequency={consultation.exerciseFrequency}
        fibroids={consultation.fibroids}
        hairLoss={consultation.hairLoss}
        highBloodPressure={consultation.highBloodPressure}
        highBloodPressureNote={consultation.highBloodPressureNote}
        highProlactinLevel={consultation.highProlactinLevel}
        menstrualCycleDetails={consultation.menstrualCycleDetails}
        monthlyMenstrualCycles={consultation.monthlyMenstrualCycles}
        ovarianCysts={consultation.ovarianCysts}
        painBowelMovements={consultation.painBowelMovements}
        painDeepPenetrativeSex={consultation.painDeepPenetrativeSex}
        painPelvic={consultation.painPelvic}
        patchesOfThickenedDarkenedSkin={
          consultation.patchesOfThickenedDarkenedSkin
        }
        polycysticOvarianSyndrome={consultation.polycysticOvarianSyndrome}
        rheumatologicOrAutoimmuneDisorder={
          consultation.rheumatologicOrAutoimmuneDisorder
        }
        severeAcne={consultation.severeAcne}
        severeMenstrualCramping={consultation.severeMenstrualCramping}
        sexuallyTransmittedInfection={consultation.sexuallyTransmittedInfection}
        supplements={consultation.supplements}
        tobaccoUsage={consultation.tobaccoUsage}
        thyroidDisorder={consultation.thyroidDisorder}
        uterinePolyps={consultation.uterinePolyps}
        weightGain={consultation.weightGain}
      />
      <PerimenopauseQuestions
        bloating={consultation.bloating}
        cervicalDysplasiaOrAbnormalPaps={
          consultation.cervicalDysplasiaOrAbnormalPaps
        }
        decreasedLibido={consultation.decreasedLibido}
        difficultySleeping={consultation.difficultySleeping}
        hadPeriodInPastYear={consultation.hadPeriodInPastYear}
        hotFlashesOrNightSweats={consultation.hotFlashesOrNightSweats}
        irritabilityAnxietyDepressionOrWorseningPMS={
          consultation.irritabilityAnxietyDepressionOrWorseningPMS
        }
        loseBalanceOrTripEasily={consultation.loseBalanceOrTripEasily}
        regularMenstrualCycles={consultation.regularMenstrualCycles}
        usingHormonalBirthControl={consultation.usingHormonalBirthControl}
        vaginalDrynessOrPainWithSex={consultation.vaginalDrynessOrPainWithSex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  consultation: {
    fontFamily: "Red Hat Mono",
    fontSize: "12px",
    lineHeight: "1.5",
  },
  pageHeader: {
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: "12px 0",
  },
  subHeader: { fontWeight: "bold", margin: "10px 0" },
});

export default Consultation;
