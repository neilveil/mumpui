import s from './styles.module.scss'

export const info = (
  <svg viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='128' y='128' width='128' height='128' rx='64' transform='rotate(-180 128 128)' fill='var(--mp-c-info)' />
    <rect x='64.3137' y='48.6274' width='16' height='16' rx='8' transform='rotate(-135 64.3137 48.6274)' fill='white' />
    <rect x='72' y='99' width='16' height='42' rx='8' transform='rotate(-180 72 99)' fill='white' />
  </svg>
)

export const error = (
  <svg viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='128' height='128' rx='64' fill='var(--mp-c-error)' />
    <rect
      x='85.5649'
      y='27'
      width='19.4419'
      height='81.4091'
      rx='9.72096'
      transform='rotate(45 85.5649 27)'
      fill='white'
    />
    <rect
      x='28'
      y='40.7475'
      width='19.4419'
      height='81.4091'
      rx='9.72096'
      transform='rotate(-45 28 40.7475)'
      fill='white'
    />
  </svg>
)

export const success = (
  <svg viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='128' height='128' rx='64' fill='var(--mp-c-success)' />
    <rect
      x='22'
      y='66.8414'
      width='18.1604'
      height='45.401'
      rx='9.08021'
      transform='rotate(-45 22 66.8414)'
      fill='white'
    />
    <rect
      x='92.1844'
      y='35.2867'
      width='18.1604'
      height='71.3987'
      rx='9.08021'
      transform='rotate(45 92.1844 35.2867)'
      fill='white'
    />
  </svg>
)

export const warn = (
  <svg viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='128' height='128' rx='64' fill='var(--mp-c-warning)' />
    <rect x='64.3137' y='78' width='16' height='16' rx='8' transform='rotate(45 64.3137 78)' fill='white' />
    <rect x='56' y='28' width='16' height='42' rx='8' fill='white' />
  </svg>
)

export const loading = (
  <svg viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg' className={s.loaderRotate}>
    <mask
      id='mask0_302_8'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='64'
      y='64'
      width='52'
      height='52'
    >
      <rect width='52' height='52' transform='matrix(-1 0 0 1 116 64)' fill='white' />
    </mask>
    <g mask='url(#mask0_302_8)'>
      <rect
        x='-8'
        y='8'
        width='88'
        height='88'
        rx='44'
        transform='matrix(-1 0 0 1 100 12)'
        stroke='#2987DD'
        strokeWidth='16'
      />
    </g>
    <rect x='56' y='100' width='16' height='16' rx='8' fill='#2987DD' />
    <mask
      id='mask1_302_8'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='64'
      y='12'
      width='52'
      height='52'
    >
      <rect x='116' y='64' width='52' height='52' transform='rotate(-180 116 64)' fill='white' />
    </mask>
    <g mask='url(#mask1_302_8)'>
      <rect
        x='108'
        y='108'
        width='88'
        height='88'
        rx='44'
        transform='rotate(-180 108 108)'
        stroke='#B2DAFF'
        strokeWidth='16'
      />
    </g>
    <mask
      id='mask2_302_8'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='12'
      y='12'
      width='52'
      height='52'
    >
      <rect width='52' height='52' transform='matrix(1 0 0 -1 12 64)' fill='white' />
    </mask>
    <g mask='url(#mask2_302_8)'>
      <rect
        x='8'
        y='-8'
        width='88'
        height='88'
        rx='44'
        transform='matrix(1 0 0 -1 12 100)'
        stroke='#EEF7FF'
        strokeWidth='16'
      />
    </g>
    <rect x='12' y='58' width='16' height='16' rx='8' fill='url(#paint0_linear_302_8)' />
    <defs>
      <linearGradient id='paint0_linear_302_8' x1='20' y1='58' x2='20' y2='74' gradientUnits='userSpaceOnUse'>
        <stop offset='0.307292' stopColor='#EEF6FF' />
        <stop offset='1' stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
)
