import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    actionsBlock: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        margin: "0",
        padding: "16px 0 40px 0",
        borderBottom: "1px solid #EBEBEB"
      },
      actionList: {
        listStyleType: "none",
        display: "flex",
        gap: "4px",
        cursor: "pointer",
        height: "20px"
      },
})