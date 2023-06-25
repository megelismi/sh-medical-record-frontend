import { Text, View, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";
import type { PatientInfoType } from "../../types";

const PatientInfo = ({
  firstName,
  lastName,
  sex,
  dateOfBirth,
  email,
  phone,
  addressLine1,
  addressLine2,
  city,
  stateCode,
  postalCode,
}: PatientInfoType) => (
  <View style={styles.patientInfo}>
    <Text style={styles.pageHeader}>Patient Information</Text>
    <Text>
      Name: {firstName} {lastName}{" "}
    </Text>
    <Text>Sex: {sex === "FEMALE" ? "Female" : "Male"}</Text>
    <Text>DOB: {moment(dateOfBirth).format("LL")}</Text>
    <Text>Email: {email}</Text>
    <Text>Phone: {phone}</Text>
    <Text>
      Address: {addressLine1}, {addressLine2 ? `${addressLine2}, ` : ""}
      {city}, {stateCode}, {postalCode}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  patientInfo: {
    fontFamily: "Red Hat Mono",
    fontSize: "12px",
    lineHeight: "1.5",
  },
  pageHeader: {
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: "12px 0",
  },
});

export default PatientInfo;
