import { Text, View, StyleSheet } from "@react-pdf/renderer";

const PatientInfo = () => {
  return (
    <View style={styles.patientInfo}>
      <Text style={styles.pageHeader}>Patient Information</Text>
      <Text>Name: Megan Smith</Text>
      <Text>Sex: Female</Text>
      <Text>DOB: September 30, 1988</Text>
      <Text>Email: meg.eli.smi@gmail.com</Text>
      <Text>Phone: (415) 933-7578</Text>
      <Text>Address: 3615 McKinley Boulevard, Sacramento, CA, 95816</Text>
    </View>
  );
};

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
