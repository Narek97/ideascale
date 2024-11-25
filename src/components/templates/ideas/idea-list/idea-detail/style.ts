import { makeStyles } from '@fluentui/react-components';

export const useStyles = makeStyles({
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '80vw',
    maxWidth: '680px',
    height: '80dvh',
    overflowY: 'auto',
    margin: 'auto',
    color: '#666666',
  },
  title: {
    fontSize: '12px',
    color: '#616161',
    padding: 0,
    margin: 0,
  },
  subTitle: {
    fontSize: '18px',
    color: '#252423',
    fontWeight: 700,
    padding: 0,
    margin: 0,
  },
});
