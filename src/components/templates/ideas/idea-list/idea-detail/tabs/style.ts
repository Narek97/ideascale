import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    tabsListBlock:{
        display: "flex",
        gap: "8px",
        padding: "0"
    },
    defaultTab:{
        padding: "4px 12px",
        borderRadius: "4px",
        listStyle: "none",
        background: "#EDF1F4",
        cursor: "pointer"
    },
    selectedTab:{
        padding: "4px 12px",
        background: "#384EC1",
        color: "#fff",
    },
})