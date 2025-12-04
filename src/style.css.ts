import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '24px 1rem',
  flexDirection: 'column',
  gap: '12px',
  borderRadius: '12px',
  backgroundColor: '#F2F3F5',
  alignItems: 'center',
  textAlign: 'center',
});

const stepStyle = style({});
globalStyle(`${stepStyle} > div > div > div[class^="_option_"]`, {
  backgroundColor: 'var(--color-light-neutral-translucent-1300)',
  color: 'var(--color-light-text-primary-inverted)',
});

const cellItem = style({
  borderRadius: '12px',
  backgroundColor: '#F2F3F5',
  padding: '12px 16px',
});
const preItem = style({
  borderRadius: '16px',
  backgroundColor: '#F2F3F5',
  padding: '1rem',
});
const rowSb = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  stepStyle,
  cellItem,
  preItem,
  rowSb,
};
