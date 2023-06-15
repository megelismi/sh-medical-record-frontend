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
import { response } from "../../mockResponse";
import Consultations from "./consultations";
import Insurance from "./Insurance";
import PatientInfo from "./PatientInfo";
import Prescriptions from "./Prescriptions";
import SHLogo from "../images/SH_logo.png";

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

const MyDoc = () => (
  <Document>
    <Page style={styles.page} size="A4">
      <View style={styles.section}>
        <PageHeader />
        <PatientInfo
          firstName={response.patient.firstName}
          lastName={response.patient.lastName}
          sex={response.patient.sex}
          dateOfBirth={response.patient.dateOfBirth}
          email={response.patient.email}
          phone={response.patient.phone}
          addressLine1={response.patient.addressLine1}
          addressLine2={response.patient.addressLine2}
          city={response.patient.city}
          stateCode={response.patient.stateCode}
          postalCode={response.patient.postalCode}
        />
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
    <Page style={styles.page} size="A4" break>
      <View style={styles.section}>
        <PageHeader />
        <Prescriptions />
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
    <Page style={styles.page} size="A4" break>
      <View style={styles.section}>
        <PageHeader />
        <Insurance />
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
    <Page style={styles.page} size="A4" break>
      <View style={styles.section}>
        <PageHeader />
        <Consultations consultations={response.patient.consultations} />
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

const PageHeader = () => (
  <View style={styles.logoContainer} fixed>
    <Image style={styles.logo} src={SHLogo} />
  </View>
);

const DownloadableDoc = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

export default DownloadableDoc;
