export const consultationQuestions = {
    "consentToTelehealth": "Agree",
}

const general  = [
    "weight", 
    "height",
    "allergies",
    "allergiesNote",
    "bloodClots",
    "bloodClotsNote",
    "bloodPressure",
    "diabetes",
    "diabetesNote",
    "heartConditions",
    "heartConditionsNote",
    "liverConditions",
    "liverConditionsNote",
    "medications",
    "medicationsNote",
    "migraines",
    "otherConditions",
    "otherConditionsNote",
    "stateCode",
    "surgeries",
    "surgeriesNote",
    "tobacco",
    "tobaccoNote",
]; 
const birthControl = [
    "pregnant", 
    "givenBirth", 
    "isBreastfeeding",  
    "periodPreference", 
    "primaryReason", 
    "previousBirthControlPart1",
    "previousBirthControlPart2",
    "previousBirthControlPart2Note",
    "sideEffectConcerns",
    "sideEffectConcernsNote",
    "progestinOnlyPillQuestions",
    "isGenericOk",
    "drospirenoneWaiver",
    "questionsForDoctor",
    "questionsForDoctorNote",
    "currentBirthControl",
    "currentBirthControlNote",
]; 
const herpesAntiviral = [
    "coldSoresFrequency",
    "currentColdSoresOutbreak",
    "currentGenitalHerpesOutbreak",
    "genitalHerpesFrequency",
    "herpesConsultConditions",
    "herpesConsultMedications",
    "hivOrAids",
    "previouslyDiagnosedColdSores",
    "previouslyDiagnosedGenitalHerpes",
    "recentVaricellaOrZosterVaccination",
]; 

const fertility = [
    "abdominalOrPelvicSurgeries",
    "alcoholUsage",
    "averageMenstrualCycle",
    "endometriosis",
    "excessHairGrowth",
    "exerciseFrequency",
    "fibroids",
    "hairLoss",
    "highBloodPressure",
    "highBloodPressureNote",
    "highProlactinLevel",
    "menstrualCycleDetails",
    "migraines",
    "monthlyMenstrualCycles",
    "ovarianCysts",
    "painBowelMovements",
    "painDeepPenetrativeSex",
    "painPelvic",
    "patchesOfThickenedDarkenedSkin",
    "polycysticOvarianSyndrome",
    "rheumatologicOrAutoimmuneDisorder",
    "severeAcne",
    "severeMenstrualCramping",
    "sexuallyTransmittedInfection",
    "supplements",
    "tobaccoUsage",
    "thyroidDisorder",
    "uterinePolyps",
    "weightGain",
]; 

const perimenopause = [
    "bloating", 
    "breastPainBeforePeriod", 
    "cervicalDysplasiaOrAbnormalPaps", 
    "decreasedLibido",
    "difficultySleeping",
    "hadPeriodInPastYear",
    "hotFlashesOrNightSweats",
    "irritabilityAnxietyDepressionOrWorseningPMS",
    "loseBalanceOrTripEasily",
    "regularMenstrualCycles",
    "usingHormonalBirthControl",
    "vaginalDrynessOrPainWithSex",
]; 

const medicalKeysToQuestions = {
    allergies: {
      question: 'Are you allergic to any medications?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please be specific.'],
    },
    bloodClots: {
      question:
        'Do you have a personal or family history of deep vein thrombosis (DVT), pulmonary embolism (PE), or blood clotting disorder?',
      answerChoices: ['Yes', 'No'],
      notes: [
        'If yes - Please tell us more about your history. Who had the blood clot(s)? What type of blood clot occurred?',
      ],
    },
    bloodPressure: {
      question: 'What was your most recent blood pressure reading?',
      answerChoices: [
        '0-99/0-59',
        '0-99/60-89',
        '0-99/90+',
        '100-139/0-59',
        '100-139/60-89',
        '100-139/90+',
        '140+/0-59',
        '140+/60-89',
        '140+/90+',
        'I want to submit my blood pressure later.',
      ],
    },
    consentToTelehealth: {
      question:
        'I understand that by clicking the button above, I am electronically signing and agreeing to the terms of the telehealth and pharmacy consent.',
      answerChoices: ['Agree and Continue'],
    },
    diabetes: {
      question: 'Do you have diabetes?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please provide more information.'],
    },
    givenBirth: {
      question: 'Have you given birth in the last 6 weeks?',
      answerChoices: ['Yes', 'No'],
    },
    heartConditions: {
      question: 'Do you have any heart or cholesterol conditions?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please provide more information.'],
    },
    height: {
      question:
        'Let’s calculate your BMI. By calculating your BMI, SimpleHealth doctors can measure the effectiveness and safety of specific birth controls that might be right for you.',
      answerChoices: ['User input'],
    },
    highBloodPressure: {
      question: 'Have you ever been told you have high blood pressure?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please provide more information.'],
    },
    isBreastfeeding: {
      question: 'Are you currently breastfeeding?',
      answerChoices: ['Yes', 'No'],
    },
    isGenericOk: {
      question:
        'May we send you a more affordable equivalent generic birth control?',
      answerChoices: ['Yes', 'No'],
    },
    liverConditions: {
      question: 'Do you have any liver or gallbladder conditions?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please provide more information.'],
    },
    medications: {
      question:
        'Please tell us what medications and supplements you currently take.',
      answerChoices: [
        "I don't take any medications or supplements",
        'Fosamprenavir (FPV)',
        'Rifampin',
        'Rifabutin',
        'Phenytoin',
        'Carbamazepine',
        'Oxcarbazepine',
        'Primidone',
        'Lamotrigine',
        'Topiramate',
        'Any barbiturate medication',
        'Qsymia',
        "St. John's Wort",
        'Other',
      ],
      notes: ['If other - Please list the brand and/or generic names.'],
    },
    migraines: {
      question: 'Do you have migraines with aura?',
      answerChoices: ['Yes', 'No'],
    },
    otherConditions: {
      question: 'Do you have any other medical conditions?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please list anything not mentioned previously.'],
    },
    periodPreference: {
      question: 'How often do you want your period?',
      answerChoices: ['Monthly period', 'Skip period'],
    },
    pregnant: {
      question: 'Are you currently pregnant or is there a chance you could be?',
      answerChoices: ['Yes', 'No'],
    },
    previousBirthControlPart1: {
      question: 'Have you been prescribed birth control in the past?',
      answerChoices: ['Yes', 'No'],
    },
    primaryReason: {
      question: 'What are your primary reasons for using birth control?',
      answerChoices: [
        'Prevent pregnancy',
        'Regulate periods',
        'Reduce cramps',
        'Doctor diagnosis (PCOS, etc.)',
        'Improve skin',
        'Other',
      ],
      notes: ['If other - Please provide more information.'],
    },
    questionsForDoctor: {
      question:
        'Is there anything else you want the doctor to know or do you have any questions?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please list specific concerns for the doctor.'],
    },
    sideEffectConcerns: {
      question: 'Are you concerned about any birth control side effects?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please list specific concerns for the doctor.'],
    },
    stateCode: {
      question: 'Please confirm some information: State of residence.',
      answerChoices: [
        'AL',
        'AK',
        'AZ',
        'AR',
        'CA',
        'CO',
        'CT',
        'DE',
        'DC',
        'FL',
        'GA',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NJ',
        'NM',
        'NY',
        'NC',
        'ND',
        'OH',
        'OK',
        'OR',
        'PA',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VT',
        'VA',
        'WA',
        'WV',
        'WI',
        'WY',
        'AE',
        'AP',
        'AA',
      ],
    },
    surgeries: {
      question:
        'Have you had any major surgeries or do you have any upcoming surgeries?',
      answerChoices: ['Yes', 'No'],
      notes: ['If yes - Please list the date and type of surgery.'],
    },
    tobacco: {
      question: 'Do you ever smoke tobacco or use a nicotine/e-cigarette device?',
      answerChoices: ['Yes', 'No'],
      notes: [
        'If yes - Please tell us more about your smoking. What do you smoke? How much do you smoke per week?',
      ],
    },
    weight: {
      question:
        'Let’s calculate your BMI. By calculating your BMI, SimpleHealth doctors can measure the effectiveness and safety of specific birth controls that might be right for you.',
      answerChoices: ['User input'],
    },
    previousBirthControlPart2: {
      question: 'Do you want to get that birth control again?',
      answerChoices: ['Yes', 'No'],
      notes: [
        'If no - What birth control did you use? Why did you stop using it?',
      ],
    },
    progestinOnlyPillQuestions: {
      question:
        'Because of your medical history, our doctor may prescribe you a progestin-only pill. Read more about progestin-only pills here. Would you like to include any notes or questions to the doctor about this medication?',
      answerChoices: ['User input'],
    },
    drospirenoneWaiver: {
      question:
        '[Brand of birth control patient selected] contains Drospirenone. Some studies have demonstrated a slightly higher risk of blood clots with birth control that contains drospirenone. This risk is still very low and is much lower than the risk of blood clots during pregnancy. If you would still like this brand of birth control, please read the following list of risk factors and confirm that none of these apply to you.',
      answerChoices: [
        'Smoking and age 35 years or older',
        'Less than 21 days postpartum or 21-42 days postpartum with other risk factors',
        'History of deep vein thrombosis or pulmonary embolism',
        'Hereditary thrombophilia (including antiphospholipid syndrome)',
        'Inflammatory bowel disease with active or extensive disease, surgery, immobilization, corticosteroid use, vitamin deficiencies, or fluid depletion',
        'Systemic lupus erythematosus with positive (or unknown) antiphospholipid antibodies',
        'Major surgery with prolonged immobilization',
      ],
    },
    alcoholUsage: {
      question: 'How often do you consume alcohol?',
      answerChoices: [
        'Never',
        'A few times a month',
        'A few times a week',
        'Daily (one drink)',
        'Daily (two or more drinks)',
      ],
    },
    bloating: {
      question: 'Do you experience any of the following?',
      answerChoices: ['Bloating'],
    },
    breastPainBeforePeriod: {
      question: 'Do you experience any of the following?',
      answerChoices: ['Breast pain prior to your periods'],
    },
    decreasedLibido: {
      question: 'Do you experience any of the following?',
      answerChoices: ['Decreased libido'],
    },
    difficultySleeping: {
      question: 'Do you experience any of the following?',
      answerChoices: ['Difficulty sleeping'],
    },
    exerciseFrequency: {
      question: 'How often do you exercise?',
      answerChoices: [
        'Never',
        'A few times a month',
        'A few times a week',
        'Daily',
      ],
    },
    hadPeriodInPastYear: {
      question: 'Have you had a period within the past 12 months?',
      answerChoices: ['Yes', 'No'],
    },
    hotFlashesOrNightSweats: {
      question: 'Do you experience any of the following?',
      answerChoices: ['Hot flashes or night sweats'],
    },
    irritabilityAnxietyDepressionOrWorseningPMS: {
      question: 'Do you experience any of the following?',
      answerChoices: [
        'Irritability, anxiety, depression, or worsening of PMS symptoms',
      ],
    },
    loseBalanceOrTripEasily: {
      question: 'Do you find that you lose your balance or trip and fall easily?',
      answerChoices: ['Yes', 'No'],
    },
    menstrualCycleDetails: {
      question: 'Do any of the following apply to you?',
      answerChoices: [
        'I bleed longer than 7 days',
        'I bleed less than 2 days',
        'I change my pad/tampon every hour or more on my heaviest days',
        'I more than occassionally pass blood clots',
        'I’ve had mid-cycle bleeding/spotting on more than one occassion',
        'None of the above',
      ],
    },
    regularMenstrualCycles: {
      question:
        'Are your menstrual cycles roughly the same length each month? In other words, they don’t vary in length by more than three days from month to month.',
      answerChoices: [
        'Yes',
        'No, and they have always been this way',
        'No, and this is new for me',
      ],
    },
    supplements: {
      question: 'Do you take any vitamins or supplements?',
      answerChoices: [
        'Multivitamin',
        'B vitamin / complex',
        'C vitamin',
        'D vitamin',
        'Calcium',
        'Coenzyme Q10',
        'Fish Oil',
        'Folate',
        'Iron',
        'Magnesium',
        'Probiotic',
        'Zinc',
        'Other',
        'None',
      ],
      notes: ['If other - Please specify which supplements.'],
    },
    tobaccoUsage: {
      question: 'How often do you smoke cigarettes?',
      answerChoices: [
        'Never',
        'A few times a month',
        'A few times a week',
        'Daily',
      ],
    },
    usingHormonalBirthControl: {
      question:
        'Are you using any type of hormonal contraception (such as birth control pills, patch, ring, injection, implant, or a hormone-containing IUD)?',
      answerChoices: ['Yes', 'No'],
    },
    vaginalDrynessOrPainWithSex: {
      question: 'Do you experience any of the following?',
      answerChoices: ['Vaginal dryness or pain with sex'],
    },
    weightGain: {
      question: 'Do you experience any of the following?',
      answerChoices: ['Weight gain'],
    },
    coldSoresFrequency: {
      question: 'How often do you have cold sore outbreaks?',
      answerChoices: ['0 to 9 Times per Year', 'Over 9 Times per Year'],
    },
    currentColdSoresOutbreak: {
      question: 'Do you currently have or suspect a cold sore outbreak?',
      answerChoices: ['Yes', 'No'],
    },
    herpesConsultConditions: {
      question:
        'Do any of these conditions apply to you? (select all that apply)',
      answerChoices: [
        'Genital herpes',
        'Ocular herpes (outbreak in your eye)',
        'HIV/AIDS',
        'Kidney disease',
        'History of bone marrow transplant or kidney transplant',
        'Weakened immune system not related to HIV infection',
        'Aseptic encephalitis or transverse myelitis',
        'Seizures',
        'Urinary retention',
        'Widespread herpes simplex virus',
      ],
    },
    herpesConsultMedications: {
      question:
        'Do you take any of the following medications? (select all that apply)',
      answerChoices: [
        'Cladribine (Mavenclad)',
        'Clozapine (Clozaril, Versacloz)',
        'Foscarnet (Foscavir)',
        'Mycophenolate (Myfortic, CellCept)',
        'Talimogene laherparepvec (Imlygic)',
        'Tenofovir products (Cimduo, Descovy, Truvada, Complera, Symfi, Atripla, Selstrigo, Stribild, Viread, Biktarvy, Gemvoya, Odefsey, Symtuza)',
        'Theophylline derivatives (Uniphyl)',
        'Tizanidine (Zanaflex)',
        'Zidovudine (Retrovir, Combivir)',
        'No, I don’t take any of these medications',
      ],
    },
    hivOrAids: {
      question:
        'Do any of these conditions apply to you? (select all that apply)',
      answerChoices: ['HIV/AIDS'],
    },
    previouslyDiagnosedColdSores: {
      question:
        'Have you previously been diagnosed with recurrent cold sores (oral herpes) by a healthcare provider?',
      answerChoices: ['Yes', 'No'],
    },
    recentVaricellaOrZosterVaccination: {
      question:
        'Have you received a varicella or zoster vaccination in the past 2 weeks?',
      answerChoices: ['Yes', 'No'],
    },
    abdominalOrPelvicSurgeries: {
      question: 'Have you ever had any abdominal or pelvic surgeries?',
      answerChoices: ['Yes', 'No'],
    },
    cervicalDysplasiaOrAbnormalPaps: {
      question: 'Has a doctor ever diagnosed you with any of the following?',
      answerChoices: ['Cervical dysplasia/abnormal paps'],
    },
    currentBirthControl: {
      question: 'Are you currently using birth control / contraception?',
      answerChoices: [
        'I am not currently using contraception',
        'Hormonal birth control pills, patch, or ring',
        'Progesterone IUD or progesterone implant',
        'Copper IUD (Paraguard)',
        'Depo-Provera injection',
        'Barrier contraception (condoms, FC2)',
        'Other, please specify',
      ],
      notes: ['If other - Which birth control did you use?'],
    },
    endometriosis: {
      question: 'Has a doctor ever diagnosed you with any of the following?',
      answerChoices: ['Endometriosis'],
    },
    excessHairGrowth: {
      question: 'Have you ever had any of the following?',
      answerChoices: [
        'Excess hair growth on the face, chest, abdomen, or upper thighs',
      ],
    },
    fibroids: {
      question: 'Has a doctor ever diagnosed you with any of the following?',
      answerChoices: ['Fibroids'],
    },
    hairLoss: {
      question: 'Have you ever had any of the following?',
      answerChoices: ['Hair loss or hair thinning'],
    },
    highProlactinLevel: {
      question:
        'Have you ever been told by a doctor that you have or had any of the following?',
      answerChoices: ['A high prolactin level'],
    },
    monthlyMenstrualCycles: {
      question: 'Do you usually have a period each month?',
      answerChoices: ['Yes', 'No'],
    },
    ovarianCysts: {
      question: 'Has a doctor ever diagnosed you with any of the following?',
      answerChoices: ['Ovarian cysts'],
    },
    painBowelMovements: {
      question: 'Have you ever had any of the following?',
      answerChoices: ['Pain with bowel movements'],
    },
    painDeepPenetrativeSex: {
      question: 'Have you ever had any of the following?',
      answerChoices: ['Pain with deep penetrative sex'],
    },
    painPelvic: {
      question: 'Have you ever had any of the following?',
      answerChoices: [
        'Pelvic pain (especially cyclic pain that worsens with periods)',
      ],
    },
    patchesOfThickenedDarkenedSkin: {
      question: 'Have you ever had any of the following?',
      answerChoices: ['Patches of thickened, velvety, darkened skin'],
    },
    polycysticOvarianSyndrome: {
      question: 'Has a doctor ever diagnosed you with any of the following?',
      answerChoices: ['PCOS (polycystic ovarian syndrome)'],
    },
    rheumatologicOrAutoimmuneDisorder: {
      question: 'Have you ever had any of the following?',
      answerChoices: [
        'Rheumatologic or autoimmune disorder (such as lupus, rheumatoid arthritis, celiac disease)',
      ],
    },
    severeAcne: {
      question: 'Have you ever had any of the following?',
      answerChoices: ['Severe acne'],
    },
    severeMenstrualCramping: {
      question: 'Have you ever had any of the following?',
      answerChoices: [
        'Severe menstrual cramping that doesn’t get better with over the counter pain medication',
      ],
    },
    sexuallyTransmittedInfection: {
      question: 'Has a doctor ever diagnosed you with any of the following?',
      answerChoices: [
        'STIs (e.g. herpes, chlamydia, gonorrhea, pelvic inflammatory disease)',
      ],
    },
    thyroidDisorder: {
      question:
        'Have you ever been told by a doctor that you have or had any of the following?',
      answerChoices: ['A thyroid disorder'],
    },
    uterinePolyps: {
      question: 'Has a doctor ever diagnosed you with any of the following?',
      answerChoices: ['Uterine polyps'],
    },
    previouslyDiagnosedGenitalHerpes: {
      question:
        'Have you previously been diagnosed with genital herpes by a healthcare provider?',
      answerChoices: ['Yes', 'No'],
    },
    averageMenstrualCycle: {
      question:
        'What’s the average amount of time from the start (day 1) of your period to the start (day 1) of your next period?',
      answerChoices: [
        'It varies more than 2-3 days month-to-month',
        'Don’t know / not sure',
      ],
    },
    currentGenitalHerpesOutbreak: {
      question: 'Do you currently have or suspect a genital herpes outbreak?',
      answerChoices: ['Yes', 'No'],
    },
    genitalHerpesFrequency: {
      question: 'How often do you have genital herpes outbreaks?',
      answerChoices: ['0 to 9 Times per Year', 'Over 9 Times per Year'],
    },
  };
  
