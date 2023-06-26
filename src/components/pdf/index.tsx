import {
  Font,
  Image,
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import Consultations from "./consultations";
import Insurance from "./Insurance";
import PatientInfo from "./PatientInfo";
import Prescription from "./Prescription";
import SHLogo from "../../images/SH_logo.png";
import type { ConsultationType } from "../../types";
import type { InsuranceType } from "../../types";
import type { PrescriptionType } from "../../types";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

Font.register({
  family: "Red Hat Mono",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/redhatmono/v10/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQV3I-7HNuW4QuKI.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/redhatmono/v10/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQYPP-7HNuW4QuKI.ttf",
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/redhatmono/v10/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLE_LHvUwVqKIJuw.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  section: { margin: 30 },
  logo: {
    width: "250px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "24px",
  },
  pageHeader: {
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: "12px 0",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  subHeader: { fontWeight: "bold", margin: "10px 0" },
  page: {
    padding: "24px 12px 56px 12px",
  },
});

interface Patient {
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
  prescriptions: PrescriptionType[];
  insurancePolicies: InsuranceType[];
  consultations: ConsultationType[];
}

export interface MedicalRecordsType {
  patient: Patient;
}

const MedicalRecords = ({
  medicalRecords,
}: {
  medicalRecords: MedicalRecordsType;
}) => (
  <Document>
    <Page style={styles.page} size="A4">
      <View style={styles.section}>
        <PageHeader />
        <PatientInfo
          firstName={medicalRecords.patient.firstName}
          lastName={medicalRecords.patient.lastName}
          sex={medicalRecords.patient.sex}
          dateOfBirth={medicalRecords.patient.dateOfBirth}
          email={medicalRecords.patient.email}
          phone={medicalRecords.patient.phone}
          addressLine1={medicalRecords.patient.addressLine1}
          addressLine2={medicalRecords.patient.addressLine2}
          city={medicalRecords.patient.city}
          stateCode={medicalRecords.patient.stateCode}
          postalCode={medicalRecords.patient.postalCode}
        />
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
    {medicalRecords.patient.prescriptions.map(
      (prescription: PrescriptionType, index: number) => (
        <Page key={`prescription-${index}`} style={styles.page} size="A4" break>
          <View style={styles.section}>
            <PageHeader />
            <Prescription prescription={prescription} />
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )
    )}

    {medicalRecords.patient.insurancePolicies.map(
      (insurance: InsuranceType, index: number) => (
        <Page key={`insurance-${index}`} style={styles.page} size="A4" break>
          <View style={styles.section}>
            <PageHeader />
            <Insurance insurance={insurance} />
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )
    )}

    {medicalRecords.patient.consultations.map(
      (consultation: ConsultationType, index: number) => (
        <Page key={`consultation-${index}`} style={styles.page} size="A4" break>
          <View style={styles.section}>
            <PageHeader />
            <Consultations consultation={consultation} />
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )
    )}
  </Document>
);

const PageHeader = () => (
  <View style={styles.logoContainer} fixed>
    <Image style={styles.logo} src={SHLogo} />
  </View>
);

export const DownloadableDoc = ({
  medicalRecords,
  fileName,
}: {
  medicalRecords: MedicalRecordsType;
  fileName: string;
}) => (
  <div>
    <PDFDownloadLink
      document={<MedicalRecords medicalRecords={medicalRecords} />}
      fileName={fileName}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download"
      }
    </PDFDownloadLink>
  </div>
);

export default DownloadableDoc;
