import { Path, Text, View, StyleSheet, Svg } from "@react-pdf/renderer";
import moment from "moment";

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

const Prescription = ({ prescription }: { prescription: PrescriptionType }) => {
  const issueDate = moment(new Date(prescription.dateWritten)).format("LL");
  const expirationDate = moment(issueDate).add(1, "y").format("LL");

  return (
    <View style={styles.prescriptions}>
      <View style={styles.prescriptionsHeader}>
        <View>
          <Text style={styles.bold}>{prescription.prescriberSignature}</Text>
          <Text>License Number: {prescription.prescriberLicenseNumber}</Text>
          <Text>NPI: {prescription.npi}</Text>
          <Text>DEA Number: {prescription.deaNumber}</Text>
        </View>
        <View>
          <Text>Issue Date: {issueDate}</Text>
          <Text>Expiration Date: {expirationDate}</Text>
        </View>
      </View>
      <View style={styles.prescriptionAddress}>
        <Text>{prescription.prescriberAddressLine1}</Text>
        {prescription.prescriberAddressLine2 ? (
          <Text>{prescription.prescriberAddressLine2}</Text>
        ) : null}
        <Text>
          {prescription.prescriberCity}, {prescription.prescriberState}{" "}
          {prescription.prescriberPostalCode}
        </Text>
      </View>

      <View style={styles.prescriptionPhone}>
        <Text>Phone: {prescription.prescriberPhone}</Text>
      </View>

      <View style={styles.prescriptionDetails}>
        <View style={styles.prescriptionsHeader}>
          <View>
            <Text>{prescription.medication}</Text>
            <Text>NDC: {prescription.ndc}</Text>
          </View>
          <View>
            <Svg
              style={{ height: "20px", width: "20px" }}
              viewBox="0 0 448 512"
            >
              <Path
                d="M32 0C14.3 0 0 14.3 0 32V192v96c0 17.7 14.3 32 32 32s32-14.3 32-32V224h50.7l128 128L137.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 397.3 393.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L333.3 352 438.6 246.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 306.7l-85.8-85.8C251.4 209.1 288 164.8 288 112C288 50.1 237.9 0 176 0H32zM176 160H64V64H176c26.5 0 48 21.5 48 48s-21.5 48-48 48z"
                stroke="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                strokeWidth={3}
              />
            </Svg>
          </View>
        </View>

        <View style={styles.prescriptionsBody}>
          <Text>{prescription.sig}</Text>
          <Text>
            {prescription.quantity} {prescription.unit}
          </Text>
          <Text>{prescription.refills} Refills</Text>
          <Text>
            {prescription.daw
              ? "No substitutions allowed"
              : "Allow generic substitutions"}
          </Text>
          <Text>{prescription.indication ?? ""}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  prescriptions: {
    fontFamily: "Red Hat Mono",
    fontSize: "12px",
    lineHeight: "1.5",
  },
  prescriptionsBody: {
    marginTop: "24px",
  },
  prescriptionDetails: {
    border: "1px solid #333333",
    padding: "16px",
    borderRadius: "4px",
  },
  prescriptionsHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prescriptionAddress: {
    marginTop: "24px",
  },
  prescriptionPhone: {
    marginTop: "24px",
    marginBottom: "16px",
  },
});

export default Prescription;
