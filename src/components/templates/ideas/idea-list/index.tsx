import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { IdeaType } from '@/utils/ts/types/idea';
import IdeaCard from '@/components/templates/ideas/idea-list/idea-card';
import IdeaCardSkeleton from '@/components/molecules/idea-card-skeleton';
import IdeaDetail from '@/components/templates/ideas/idea-list/idea-detail';

interface IIdeaList {
  ideas: Array<IdeaType>;
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isLoading?: boolean;
}

const IdeaList: FC<IIdeaList> = ({ ideas, fetchNextPage, hasNextPage, isLoading }) => {
  const [ideaDetail, setIdeaDetail] = useState<{
    id: number | null;
    isOpen: boolean;
  }>({
    id: null,
    isOpen: false,
  });

  const onHandleSelectIdea = useCallback((id: number) => {
    setIdeaDetail({
      id,
      isOpen: true,
    });
  }, []);

  const onHandleCloseIdeaDetail = useCallback(() => {
    setIdeaDetail({
      id: null,
      isOpen: false,
    });
  }, []);

  const handleScroll = useCallback(
    (e: any) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target.scrollingElement;

      const scrollPosition = (scrollTop + clientHeight) / scrollHeight;

      if (scrollPosition >= 1 && hasNextPage) {
        fetchNextPage?.();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {ideaDetail.id && (
        <IdeaDetail
          id={ideaDetail.id}
          isOpen={ideaDetail.isOpen}
          onHandleCloseIdeaDetail={onHandleCloseIdeaDetail}
        />
      )}

      <MyResponsiveMasonry>
        {ideas.length
          ? ideas.map((idea, i) => {
              return (
                <IdeaCard idea={idea} key={idea.id + i} onHandleSelectIdea={onHandleSelectIdea} />
              );
            })
          : null}
        {isLoading
          ? Array(8)
              .fill('')
              .map((_, i) => <IdeaCardSkeleton key={i} />)
          : null}
      </MyResponsiveMasonry>

      {isLoading || ideas.length ? null : (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          Choose a community and campaigns to see the ideas here.{' '}
        </div>
      )}
    </>
  );
};

export default IdeaList;

const MyResponsiveMasonry = ({ children }: { children: ReactNode }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
      <Masonry gutter="16px">{children}</Masonry>
    </ResponsiveMasonry>
  );
};
