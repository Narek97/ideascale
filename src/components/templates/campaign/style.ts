import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  search: {
    minWidth: '320px',
    borderRadius: '4px',
    backgroundColor: '#F5F5F5',
    ...shorthands.border('none'),
    '&:after': { display: 'none' },
  },

  dropdown: {
    backgroundColor: '#D8D8DC !important',
    color: '#3D3F42 !important',
    '&:hover': {
      opacity: 0.7,
    },
  },
});
