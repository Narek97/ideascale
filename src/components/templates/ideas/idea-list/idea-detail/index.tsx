import React, { FC } from 'react';
import { useStyles } from './style';

import { Dialog, DialogType } from '@fluentui/react';
import useApiTokenStore from '@/store/apiTokenStore';
import { useIdea } from '@/react-query/ideas';
import { UserInfo } from '@/components/templates/ideas/idea-list/idea-detail/userInfo';
import { IdeaDescription } from '@/components/templates/ideas/idea-list/idea-detail/description';
import { IdeaTags } from '@/components/templates/ideas/idea-list/idea-detail/tags';
import { IdeaActions } from '@/components/templates/ideas/idea-list/idea-detail/actions';
import { IdeaTabs } from '@/components/templates/ideas/idea-list/idea-detail/tabs';

interface IIdeaDetail {
  id: number;
  isOpen: boolean;
  onHandleCloseIdeaDetail: () => void;
}

const IdeaDetail: FC<IIdeaDetail> = ({ id, isOpen, onHandleCloseIdeaDetail }) => {
  const classes = useStyles();
  const { apiToken } = useApiTokenStore();

  const { data: idea, isLoading, error } = useIdea(apiToken, +id!);

  return (
    <>
      <Dialog
        hidden={!isOpen}
        dialogContentProps={{
          type: DialogType.normal,
        }}
        modalProps={{
          isBlocking: false,
          styles: {
            main: {},
          },
          className: 'custom-dialog',
        }}
        onDismiss={onHandleCloseIdeaDetail}>
        <div className={classes.body}>
          {error ? (
            <div>{error.message}</div>
          ) : isLoading || id !== idea?.id ? (
            <div>Loading</div>
          ) : idea ? (
            <>
              <div>
                <p className={classes.title}>{idea.campaignName}</p>
                <p className={classes.subTitle}>{idea.title}</p>
              </div>
              <UserInfo idea={idea} />
              <IdeaDescription text={idea.text} />
              <IdeaTags tags={idea.tags} />
              <IdeaActions idea={idea} />
              <IdeaTabs ideaId={idea.id} />
            </>
          ) : (
            <></>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default IdeaDetail;
