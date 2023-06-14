import { Text, View, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";
import BirthControlQuestions from "./BirthControlQuestions";
import GeneralQuestions from "./GeneralQuestions";

interface ConsultationsType {
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
  herpesConsultConditions: boolean | null;
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
  recentVaricellaOrZosterVaccination: null;
  regularMenstrualCycles: boolean | null;
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
  uterinePolyps: null;
  vaginalDrynessOrPainWithSex: boolean | null;
  weight: string | null;
  weightGain: boolean | null;
}

const Consultations = ({
  consultations,
}: {
  consultations: ConsultationsType[];
}) => {
  return (
    <View style={styles.consultations}>
      {consultations.map((c, index) => {
        const createdAtDate = moment(new Date(c.createdAt)).format("LL");

        return (
          <View key={index}>
            <Text style={styles.pageHeader}>
              Consultation Date: {createdAtDate}
            </Text>
            <GeneralQuestions
              weight={c.weight}
              height={c.height}
              allergies={c.allergies}
              allergiesNote={c.allergiesNote}
              bloodClots={c.bloodClots}
              bloodClotsNote={c.bloodClotsNote}
              bloodPressure={c.bloodPressure}
              diabetes={c.diabetes}
              diabetesNote={c.diabetesNote}
              heartConditions={c.heartConditions}
              heartConditionsNote={c.heartConditionsNote}
              liverConditions={c.liverConditions}
              liverConditionsNote={c.liverConditionsNote}
              medications={c.medications}
              medicationsNote={c.medicationsNote}
              migraines={c.migraines}
              otherConditions={c.otherConditions}
              otherConditionsNote={c.otherConditionsNote}
              stateCode={c.stateCode}
              surgeries={c.surgeries}
              surgeriesNote={c.surgeriesNote}
              tobacco={c.tobacco}
              tobaccoNote={c.tobaccoNote}
            />
            <BirthControlQuestions
              pregnant={c.pregnant}
              givenBirth={c.givenBirth}
              isBreastfeeding={c.isBreastfeeding}
              periodPreference={c.periodPreference}
              primaryReason={c.primaryReason}
              previousBirthControlPart1={c.previousBirthControlPart1}
              previousBirthControlPart2={c.previousBirthControlPart2}
              previousBirthControlPart2Note={c.previousBirthControlPart2Note}
              sideEffectConcerns={c.sideEffectConcerns}
              sideEffectConcernsNote={c.sideEffectConcernsNote}
              progestinOnlyPillQuestions={c.progestinOnlyPillQuestions}
              isGenericOk={c.isGenericOk}
              drospirenoneWaiver={c.drospirenoneWaiver}
              questionsForDoctor={c.questionsForDoctor}
              questionsForDoctorNote={c.questionsForDoctorNote}
              currentBirthControl={c.currentBirthControl}
              currentBirthControlNote={c.currentBirthControlNote}
            />
            <Text style={styles.subHeader}>Herpes/Antiviral</Text>
            <Text style={styles.subHeader}>Fertility</Text>
            <Text style={styles.subHeader}>Perimenopause</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  consultations: {
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

export default Consultations;
