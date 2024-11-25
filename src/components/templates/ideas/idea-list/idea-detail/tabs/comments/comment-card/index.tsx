import React from 'react';
import { Avatar } from '@fluentui/react-components';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import { CommentType, LabelColorKey } from '@/utils/ts/types/comment';
import { useStyles } from '@/components/templates/ideas/idea-list/idea-detail/tabs/comments/comment-card/style';

const CommentCard = ({ comment }: { comment: CommentType }) => {
  const classes = useStyles();

  const colorKey: Record<LabelColorKey, string> = {
    moderator: '#3d8d00',
    'idea-submitter': '#384ec1',
  };

  return (
    <div className={classes.comment}>
      <Avatar
        name={comment.authorInfo.name}
        image={{
          src: comment.authorInfo.avatarUrl,
        }}
      />
      <div>
        <div>
          <span className={classes.authorInfoName}>{comment.authorInfo.name}</span>{' '}
          <span className={classes.authorInfoEmail}>({comment.authorInfo.email})</span>
        </div>
        <div>{dayjs(comment.editedAt).format('dddd, MMMM D YYYY hh:mm A')}</div>
        <div className={classes.labels}>
          {comment.labels.map(label => (
            <div
              key={label.id}
              style={{
                background: colorKey[label.colorKey] || '#F5F5F5',
              }}
              className={classes.label}>
              {label.name}
            </div>
          ))}
        </div>
        <div>{parse(comment.text)}</div>
      </div>
    </div>
  );
};

export default CommentCard;
