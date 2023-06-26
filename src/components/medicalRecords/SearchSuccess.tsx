import { DownloadableDoc } from "../pdf";
import type { MedicalRecordsType } from "../pdf";

const SearchSuccess = ({
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
    <div style={{ maxWidth: "575px", minWidth: "350px" }} className="mt-10">
      <div
        className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-5 py-4 shadow-md"
        role="alert"
      >
        <div className="flex flex-col">
          <div className="flex">
            <svg
              className="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
            <p className="font-bold">Success!</p>
          </div>
          <p className="text-sm mt-3">
            The patient medical records for{" "}
            <span className="font-bold">
              {medicalRecords.patient.firstName}{" "}
              {medicalRecords.patient.lastName}{" "}
            </span>
            were found for and are available for download.
          </p>

          <div className="mt-6">
            <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>
                <DownloadableDoc
                  fileName={`${medicalRecords.patient.lastName}_${medicalRecords.patient.firstName}_SH_medical_records.pdf`}
                  medicalRecords={medicalRecords}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onBack}
          className="mt-14 text-stone-800 hover:text-stone-500 font-semibold underline"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default SearchSuccess;
