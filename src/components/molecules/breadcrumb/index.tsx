import { FC, Fragment, ReactNode } from 'react';

import {
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbItem,
  Breadcrumb as BreadcrumbWrapper,
  makeStyles,
} from '@fluentui/react-components';

export type IBreadcrumbItem = {
  name?: string;
  path: string;
  icon?: ReactNode;
  className?: string;
  isCurrent?: boolean;
};

interface Props {
  items: Array<IBreadcrumbItem>;
}

const Breadcrumb: FC<Props> = ({ items }) => {
  const classes = useStyles();
  return (
    <BreadcrumbWrapper aria-label="Breadcrumb" className={classes.wrapper}>
      {items.map((item, index, array) => (
        <Fragment key={item.path}>
          <BreadcrumbItem>
            <BreadcrumbButton href={item.path} current={item.isCurrent}>
              {item.name}
            </BreadcrumbButton>
          </BreadcrumbItem>
          {index !== array.length - 1 && <BreadcrumbDivider />}
        </Fragment>
      ))}
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    borderRight: '1px solid #E0E0E0',
    height: '20px',
    paddingRight: '12px',
  },
});
