import { DownloadableDoc } from "./pdf";
import type { MedicalRecordsType } from "./pdf";

const MedicalRecordsSuccess = ({
  medicalRecords,
  onBack,
}: {
  medicalRecords: MedicalRecordsType | null;
  onBack: () => void;
}) => {
  if (medicalRecords === null) {
    return null;
  }

  return (
    <div>
      Success! The patient medical records were found and are available for
      download.
      <DownloadableDoc
        fileName={`${medicalRecords.patient.lastName}_${medicalRecords.patient.firstName}_SH_medical_records.pdf`}
        medicalRecords={medicalRecords}
      />
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default MedicalRecordsSuccess;
