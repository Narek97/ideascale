import { FC } from "react";
import { useStyles } from "./style";
import { ReactComponent as PlusIcon } from "../../../../assets/icons/plus-sign.svg";
import { Button } from "@fluentui/react-components";

interface IIdeaTags {
  tags: Array<string>;
}

export const IdeaTags: FC<IIdeaTags> = ({ tags = [] }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.tagsBlock}>
        {tags.map((tag, index) => (
          <div key={index} className={classes.tag}>
            {tag}
          </div>
        ))}
      </div>

      {/*<Button*/}
      {/*  icon={<PlusIcon />}*/}
      {/*  onClick={() => {}}*/}
      {/*  className={classes.addModeratortagButton}*/}
      {/*>*/}
      {/*  Add Moderator Tag*/}
      {/*</Button>*/}
    </div>
  );
};
