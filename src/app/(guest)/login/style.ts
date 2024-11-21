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
  leftTop: { position: 'absolute', left: 0, top: 0 },
  rightBottom: { position: 'absolute', right: 0, bottom: 0 },
});
