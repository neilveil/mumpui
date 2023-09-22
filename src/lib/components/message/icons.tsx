export const info = (
  <svg width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='128' y='128' width='128' height='128' rx='64' transform='rotate(-180 128 128)' fill='#1EA6FF' />
    <rect x='52' y='27' width='24' height='24' rx='12' fill='white' />
    <rect x='76' y='101' width='24' height='42' rx='12' transform='rotate(-180 76 101)' fill='white' />
  </svg>
)

export const error = (
  <svg width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='128' height='128' rx='64' fill='#E83E0A' />
    <rect x='86.5685' y='30' width='16' height='80' rx='8' transform='rotate(45 86.5685 30)' fill='white' />
    <rect x='30' y='41.3137' width='16' height='80' rx='8' transform='rotate(-45 30 41.3137)' fill='white' />
  </svg>
)

export const success = (
  <svg width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='128' height='128' rx='64' fill='#55C610' />
    <rect x='23' y='65.8414' width='16' height='45.401' rx='8' transform='rotate(-45 23 65.8414)' fill='white' />
    <rect x='94.4865' y='36' width='16' height='71.3987' rx='8' transform='rotate(45 94.4865 36)' fill='white' />
  </svg>
)

export const warn = (
  <svg width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='128' height='128' rx='64' fill='#FFD93B' />
    <rect x='52' y='77' width='24' height='24' rx='12' fill='white' />
    <rect x='52' y='27' width='24' height='42' rx='12' fill='white' />
  </svg>
)

export const loading = (
  <svg viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg' className='mp-message-loader'>
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
