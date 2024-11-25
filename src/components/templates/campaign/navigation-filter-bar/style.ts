import { makeStyles } from '@fluentui/react-components';

export const useStyles = makeStyles({
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '1px solid #EBEBEB',
    marginBottom: '12px',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
  },
  tab: {
    paddingLeft: 0,
    paddingRight: 0,

    '&:after': {
      left: 0,
      right: 0,
    },
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
  },
});
