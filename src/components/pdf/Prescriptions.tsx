import { Path, Text, View, StyleSheet, Svg } from "@react-pdf/renderer";

const Prescriptions = () => {
  return (
    <View style={styles.prescriptions}>
      <View style={styles.prescriptionsHeader}>
        <View>
          <Text style={styles.bold}>Dr. Laura Petrovich</Text>
          <Text>License Number: A 166396</Text>
          <Text>NPI: 12345</Text>
          <Text>DEA Number: 67890</Text>
        </View>
        <View>
          <Text>Issue Date: 01/09/2021</Text>
          <Text>Expiration Date: 01/09/2022</Text>
        </View>
      </View>
      <View style={styles.prescriptionAddress}>
        <Text>51 West Center Street</Text>
        <Text>Orem, UT 84057</Text>
      </View>

      <View style={styles.prescriptionPhone}>
        <Text>Phone: 801-316-7252</Text>
      </View>

      <View style={styles.prescriptionDetails}>
        <View style={styles.prescriptionsHeader}>
          <View>
            <Text>Norethindrone 0.35mg tablet</Text>
            <Text>NDC: 1234567890</Text>
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
          <Text>One at a time</Text>
          <Text>4 Pack(s)</Text>
          <Text>3 Refills</Text>
          <Text>Allow generic substitutions</Text>
          <Text>Indications</Text>
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

export default Prescriptions;
