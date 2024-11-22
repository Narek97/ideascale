import { makeStyles } from '@fluentui/react-components';

export const useStyles = makeStyles({
  login: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#384EC1',
    height: '100dvh',
  },
  loginCard: {
    width: '558px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    backgroundColor: '#ffffff',
    padding: '48px',
  },
  title: {
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    color: '#272829',
  },
  leftTop: { position: 'absolute', left: 0, top: 0 },
  rightBottom: { position: 'absolute', right: 0, bottom: 0 },
});
