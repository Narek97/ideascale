import React, { FC, useRef, useState } from 'react';
import parse from 'html-react-parser';
import { useStyles } from './style';

interface IIdeaDescription {
  text: string;
}

export const IdeaDescription: FC<IIdeaDescription> = ({ text = '' }) => {
  const classes = useStyles();

  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const desc = parse(text);
  return (
    <>
      <h3 className={classes.descriptionTitle}>Description</h3>
      <div ref={contentRef}>
        <div>{desc}</div>
      </div>
      <button
        className={classes.descriptionBlockReadMoreButton}
        onClick={() => setIsExpanded(prev => !prev)}>
        Read {isExpanded ? 'less' : 'more'}
      </button>
    </>
  );
};
