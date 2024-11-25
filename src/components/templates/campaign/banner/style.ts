import { makeStyles } from '@fluentui/react-components';

export const useStyles = makeStyles({
  banner: {
    display: 'flex',
    alignItems: 'flex-end',
    padding: '20px 40px',
    height: '154px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  bannerContent: { display: 'flex', gap: '10px' },
  smallImage: {
    height: '48px',
  },
  bannerInfo: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: { margin: 0, color: '#ffffff' },
  title: { fontSize: '22px' },
  subtitle: { fontWeight: '700', fontSize: '12px' },
});
