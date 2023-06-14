import { Text, View, StyleSheet } from "@react-pdf/renderer";

const ConsultationRow = ({
  question,
  answer,
  note,
}: {
  question: string;
  answer: string;
  note?: string | null;
}) => (
  <View style={styles.consultationRow}>
    <View style={styles.consultationQALine}>
      <View style={styles.consultationQuestion}>
        <Text>{question}</Text>
      </View>
      <View>
        <Text>{answer}</Text>
      </View>
    </View>
    {note ? (
      <View style={styles.consultationNote}>
        <Text>Note: {note}</Text>
      </View>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  consultationRow: {
    margin: "8px 12px",
    borderBottom: "1px solid #33333",
  },
  consultationQALine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  consultationQuestion: {
    maxWidth: "350px",
  },
  consultationNote: {
    marginTop: "-4px",
    color: "#616161",
  },
});

export default ConsultationRow;
