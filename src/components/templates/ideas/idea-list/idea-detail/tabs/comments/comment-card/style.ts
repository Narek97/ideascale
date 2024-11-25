import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  comment: {
    display: "flex",
    gap: "24px",
    marginBottom: "40px",
  },
  authorInfoName: {
    fontWeight: "500",
    fontSize: "14px",
    color: "#384EC1",
  },
  authorInfoEmail: {
    fontWeight: "400",
    fontSize: "12px",
    color: "#666666",
  },
  labels: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    marginTop: "16px",
    marginBottom: "16px",
  },
  label: {
    padding: "4px 6px",
    borderRadius: "2px",
    fontSize: "12px",
    color: "#F5F5F5",
  },
});
