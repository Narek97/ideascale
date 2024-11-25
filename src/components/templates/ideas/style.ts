import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  filters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '24px 0 24px',
  },
  customStyle: {
    border: '1px solid #D2D4D6',
    '&:after': { display: 'none' },
    '&:hover': {
      border: '1px solid #D2D4D6',
    },

    '&:focus-within': {
      border: '1px solid #D2D4D6 !important',
    },
  },
  rowItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  },
  search: {
    maxWidth: '240px',
    width: '240px',
    backgroundColor: '#F5F5F5',
    ...shorthands.border('none'),
    '&:after': { display: 'none' },
  },
  combobox: {
    paddingLeft: '20px',
  },
  dropdown: {
    maxWidth: 'fit-content',
    minWidth: 'fit-content',
    width: '100%',
  },
  comboboxBlock: {
    position: 'relative',
  },
  comboboxIcon: {
    position: 'absolute',
    left: '7px',
    top: '6px',
  },
  dropdownLabel: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    color: '#605E5C',
    fontSize: '14px',
  },
});
