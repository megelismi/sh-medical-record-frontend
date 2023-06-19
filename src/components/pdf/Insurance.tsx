import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface InsuranceType {
  planName: string;
  memberName: string;
  memberId: string;
  rxGroup: string | null;
  rxBin: string | null;
  pcn: string | null;
}

const Insurance = ({ insurance }: { insurance: InsuranceType }) => (
  <View style={styles.insurancePolicy}>
    <Text style={styles.pageHeader}>Insurance Policy</Text>
    <View style={styles.insurancePolicyDetails}>
      <Text>Plan: {insurance.planName}</Text>
      <Text>Member Name: {insurance.memberName}</Text>
      <Text>Member ID: {insurance.memberId ?? "-"}</Text>
      <Text>RX Group: {insurance.rxGroup ?? "-"}</Text>
      <Text>RX Bin: {insurance.rxBin ?? "-"}</Text>
      <Text>PCN: {insurance.pcn ?? "-"}</Text>
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
