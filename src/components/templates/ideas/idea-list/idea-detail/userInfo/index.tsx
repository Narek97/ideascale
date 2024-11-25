import { FC } from 'react';
import { useStyles } from './style';
import { Avatar, Badge, Caption1 } from '@fluentui/react-components';
import KudosIcon from '@/public/kudos.svg';
import dayjs from 'dayjs';
import { IdeaType } from '@/utils/ts/types/idea';

interface IUserInfo {
  idea: IdeaType;
}

export const UserInfo: FC<IUserInfo> = ({ idea }) => {
  const classes = useStyles();

  return (
    <div className={classes.userInfoBlock}>
      <div>
        <div className={classes.userInfo}>
          <Avatar
            name={idea.authorInfo.name}
            image={{
              src: idea.authorInfo.avatarUrl,
            }}
          />
          <Badge className={classes.userBadge}>
            <KudosIcon width={14} />
            <span>8</span>
          </Badge>
          <p className={classes.userName}>{idea.authorInfo.name}</p>
        </div>
        <Caption1>
          {dayjs(idea.editedAt).format('MM/DD/YYYY hh:mm A')}
          <span /> Idea #{idea.ideaNumber}
        </Caption1>
        <div className={classes.ideaImg}>
          <img src={idea.url} alt={'Image'} />
        </div>
      </div>
      <div>
        <p className={classes.estimateTitle}>Estimate</p>
        <p>
          <span className={classes.estimatePercent}>85% </span>
          <sub className={classes.estimateSubTitle}>Return on Investment</sub>
        </p>
        <div className={classes.funnelBlock}>{idea.funnelName}</div>
      </div>
    </div>
  );
};
