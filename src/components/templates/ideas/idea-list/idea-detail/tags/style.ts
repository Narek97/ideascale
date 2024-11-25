import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    tagsBlock: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "10px",
      },
      tag: {
        borderRadius: "56px",
        border: "1px solid #DDDDDD",
        padding: "8px 12px",
        lineHeight: "12px",
        color: "#333333",
      },
      addModeratortagButton: {
        borderRadius: "56px",
        cursor: "pointer",
        marginTop: "8px",
        color: "#333333",
        background: "transparent",
        fontWeight: "400",
      },
})