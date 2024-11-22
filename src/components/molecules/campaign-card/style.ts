import { makeStyles } from '@fluentui/react-components';

export const useStyles = makeStyles({
  card: {
    width: '374px',
    height: '326px',
    padding: '16px',
    border: '1px solid #D2D4D6',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  cardHeader: { backgroundColor: 'transparent', marginTop: '16px' },
  background: {
    aspectRatio: 'auto 342/166',
    overflow: 'hidden',
    margin: '0px !important',
    borderRadius: '4px',
  },
  banner: { objectFit: 'cover' },
  caption: { display: 'flex', gap: '4px', alignItems: 'center' },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
  },
  action: { padding: 0, maxWidth: '24px', minWidth: '24px', height: '24px' },

  dot: {
    display: 'inline-flex',
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#6E7073',
  },
  desc: {
    margin: '0px',
    marginTop: '8px',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& *': { margin: 0 },
  },
});
