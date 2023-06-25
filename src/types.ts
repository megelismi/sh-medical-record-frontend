export interface InsuranceType {
    planName: string;
    memberName: string;
    memberId: string;
    rxGroup: string | null;
    rxBin: string | null;
    pcn: string | null;
  }

  export interface PatientInfoType {
    firstName: string;
    lastName: string;
    sex: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string | null;
    city: string;
    stateCode: string;
    postalCode: string;
  }

  export interface PrescriptionType {
    prescriberSignature: string;
    prescriberLicenseNumber: string;
    npi: string;
    deaNumber: string;
    dateWritten: string;
    prescriberAddressLine1: string;
    prescriberAddressLine2: string | null;
    prescriberCity: string;
    prescriberState: string;
    prescriberPostalCode: string;
    prescriberPhone: string;
    medication: string;
    ndc: string;
    sig: string;
    quantity: number;
    unit: string;
    refills: number;
    daw: boolean;
    indication: string | null;
  }

  export interface BirthControlQuestionType {
    pregnant: boolean | null;
    givenBirth: boolean | null;
    isBreastfeeding: boolean | null;
    periodPreference: string | null;
    primaryReason: string | null;
    previousBirthControlPart1: boolean | null;
    previousBirthControlPart2: boolean | null;
    previousBirthControlPart2Note: string | null;
    sideEffectConcerns: boolean | null;
    sideEffectConcernsNote: string | null;
    progestinOnlyPillQuestions: boolean | null;
    isGenericOk: boolean | null;
    drospirenoneWaiver: boolean | null;
    questionsForDoctor: boolean | null;
    questionsForDoctorNote: string | null;
    currentBirthControl: string | null;
    currentBirthControlNote: string | null;
  }

  export interface FertilityQuestionType {
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
  }

  export interface GeneralQuestionType {
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
  }
  
  export interface HerpesAntiviralQuestionType {
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
  }

  export interface PerimenopauseQuestionType {
    bloating: boolean | null;
    cervicalDysplasiaOrAbnormalPaps: boolean | null;
    decreasedLibido: boolean | null;
    difficultySleeping: boolean | null;
    hadPeriodInPastYear: boolean | null;
    hotFlashesOrNightSweats: boolean | null;
    irritabilityAnxietyDepressionOrWorseningPMS: boolean | null;
    loseBalanceOrTripEasily: boolean | null;
    regularMenstrualCycles: string | null;
    usingHormonalBirthControl: boolean | null;
    vaginalDrynessOrPainWithSex: boolean | null;
  }

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