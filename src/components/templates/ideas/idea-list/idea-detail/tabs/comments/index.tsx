import React, { useRef, useState } from 'react';
import Quill from 'quill';
import useApiTokenStore from '@/store/apiTokenStore';
import { useQueryClient } from '@tanstack/react-query';
import { useComment, useComments } from '@/react-query/comments';
import { useStyles } from './style';
import { Button } from '@fluentui/react-components';
import { CommentType } from '@/utils/ts/types/comment';
import CommentCard from '@/components/templates/ideas/idea-list/idea-detail/tabs/comments/comment-card';
import Editor from '@/components/molecules/editor';

const Comments = ({ ideaId }: { ideaId: number }) => {
  const classes = useStyles();

  const { apiToken } = useApiTokenStore();
  const queryClient = useQueryClient();

  const [commentText, setCommentText] = useState<string>('');

  const editorRef = useRef<Quill>();

  const { data: comments, isLoading } = useComments(apiToken, ideaId);
  const commentMutation = useComment(apiToken, ideaId);

  console.log(comments, 'comments');
  const setNewComments = (newComments: Array<CommentType>) => {
    queryClient.setQueryData(['GET_COMMENTS', apiToken], { data: newComments });
  };

  const handleCommentSubmit = async () => {
    const data = await commentMutation.mutateAsync({ content: commentText });
    const newComment = data.data;
    const newComments = comments?.length ? [newComment, ...comments] : [newComment];
    setNewComments(newComments);
    editorRef.current?.setText('');
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className={classes.comments}>
      <div>{comments?.map(comment => <CommentCard key={comment.id} comment={comment} />)}</div>

      <Editor
        ref={editorRef}
        className={classes.editor}
        onTextChange={value => {
          setCommentText(value);
        }}
      />
      <div className={classes.submitComment}>
        <Button appearance="primary" onClick={handleCommentSubmit}>
          Submit comment
        </Button>
      </div>
    </div>
  );
};

export default Comments;
