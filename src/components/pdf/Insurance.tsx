import { Text, View, StyleSheet } from "@react-pdf/renderer";

const Insurance = () => (
  <View style={styles.insurancePolicy}>
    <Text style={styles.pageHeader}>Insurance Policies</Text>
    <View style={styles.insurancePolicyDetails}>
      <Text>Name: Jaclyn Fry</Text>
      <Text>Member ID: 1234567890</Text>
      <Text>RX Group: PHRCRML</Text>
      <Text>RX Bin: 003858</Text>
      <Text>Plan: Priority</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  insurancePolicy: {
    fontFamily: "Red Hat Mono",
    fontSize: "12px",
    lineHeight: "1.5",
  },
  insurancePolicyDetails: {
    border: "1px solid #333333",
    padding: "16px",
    borderRadius: "4px",
    marginTop: "12px",
  },
  pageHeader: {
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: "12px 0",
  },
});

export default Insurance;
