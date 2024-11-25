import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  userInfoBlock: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
  userInfo: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "34px",
  },
  userBadge: {
    display: "flex",
    gap: "4px",
    position: "absolute",
    left: "20px",
    top: "14px",
    background: "#fff",
    color: "#333333",
  },
  userName: {
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#384EC1",
  },
  ideaImg: {
    marginTop: "32px",
  },
  estimateTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#333333",
  },
  estimatePercent: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#333333",
  },
  estimateSubTitle: {
    fontSize: "12px",
  },
  funnelBlock: {
    padding: "7px 16px",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    background: "#EDEFF3",
    color: "#333333",
  },
});
