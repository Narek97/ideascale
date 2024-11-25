import { useStyles } from './style';
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import MoreIcon from '@/public/more.svg';
import EyeIcon from '@/public/eye.svg';
import CommentIcon from '@/public/comment.svg';
import StarIcon from '@/public/star.svg';
import ShareIcon from '@/public/share.svg';
import { FC } from 'react';
import { IdeaType } from '@/utils/ts/types/idea';

interface IIdeaActions {
  idea: IdeaType;
}

export const IdeaActions: FC<IIdeaActions> = ({ idea }) => {
  const classes = useStyles();

  const actionIcons: Array<{
    id: number;
    icon: React.ReactNode;
    count?: number;
  }> = [
    { id: 1, icon: <EyeIcon />, count: 1 },
    { id: 2, icon: <CommentIcon />, count: idea?.commentCount },
    { id: 3, icon: <StarIcon />, count: 1 },
    { id: 4, icon: <ShareIcon /> },
  ];

  const onHandleActionClick = (id: number) => {
    switch (id) {
      case 1: {
        console.log(1);
        break;
      }
      default:
        break;
    }
  };

  return (
    <ul className={classes.actionsBlock}>
      {actionIcons.map(action => (
        <li
          key={action.id}
          onClick={() => onHandleActionClick(action.id)}
          className={classes.actionList}>
          <span>{action.icon}</span>
          <span>{action.count}</span>
        </li>
      ))}
      <li className={classes.actionList}>
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <Button
              appearance="transparent"
              icon={<MoreIcon fill="#666666" />}
              style={{
                padding: 0,
                minWidth: 'auto',
              }}
            />
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem>CV2 Test community</MenuItem>
              <MenuItem>Ideas for IdeaScale</MenuItem>
              <MenuItem>Human Resources</MenuItem>
              <MenuItem>Financial</MenuItem>
              <MenuItem>Research and Development</MenuItem>
              <MenuItem>Sales and marketing</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </li>
    </ul>
  );
};
