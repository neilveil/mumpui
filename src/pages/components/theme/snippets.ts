export const s1 = `
// Light theme
body {
  --mp-c-primary: #282828;
}

// Dark theme
body[data-theme='dark'] {
  --mp-c-primary: #d8d8d8;
}
`

export const s2 = `
// Light theme
body {
  --mp-c-font-dark: #181818;
  --mp-c-font: #686868;
  --mp-c-font-dark: #b8b8b8;
}

// Dark theme
body[data-theme='dark'] {
  --mp-c-font-dark: #b8b8b8;
  --mp-c-font: #888888;
  --mp-c-font-dark: #484848;
}
`

export const s3 = `
// Light theme
body {
  --mp-c-red: #f53b3b;
  --mp-c-blue: #0095f8;
  --mp-c-green: #68bf32;
  --mp-c-yellow: #f9c900;
  --mp-c-orange: #ff8a1f;
  --mp-c-pink: #ff41a9;
  --mp-c-purple: #b932c5;
  --mp-c-violet: #722ed1;
  --mp-c-indigo: #284eee;
  --mp-c-light: #f8f8f8;
}

// Dark theme
body[data-theme='dark'] {
  --mp-c-red: #5c0909;
  --mp-c-blue: #00609f;
  --mp-c-green: #224e08;
  --mp-c-yellow: #695500;
  --mp-c-orange: #7b3b00;
  --mp-c-pink: #7c0b49;
  --mp-c-purple: #6c0075;
  --mp-c-violet: #4b0f9f;
  --mp-c-indigo: #001d96;
  --mp-c-light: #101010;
}
`

export const s4 = `
// Light theme
body {
  --mp-c-bg: #fff;
  --mp-c-border: #e8e8e8;
}

// Dark theme
body[data-theme='dark'] {
  --mp-c-bg: #080808;
  --mp-c-border: #282828;
}
`

export const s5 = `
// Light theme
body {
  --mp-c-black: #000000;
  --mp-c-white: #ffffff;
}

// Dark theme
body[data-theme='dark'] {
  --mp-c-black: #ffffff;
  --mp-c-white: #000000;
}
`

export const s6 = `
// Light theme
body {
  --mp-border-radius: 8px; // Elements border radius
  --mp-border-width: 1px; // Elements border width
  --mp-c-overlay-bg: #0004; // Modal & confirm dialog background color
  --mp-pop-up-shadow: 0 8px 16px 0px #00000010; // Tooltip, select dropdown & search dropdown components shadow

  --mp-input-border-width: 1px; // Input fields border width
  --mp-c-input-border: #e8e8e8; // Input fields border color
  --mp-c-input-border-hover: #d8d8d8; // Input fields border color on hover
  --mp-c-input-border-active: #b8b8b8; // Input fields border color on active
  --mp-input-box-shadow: 0 0 2px 0px #0001; // Input fields box shadow
  --mp-input-box-shadow-hover: 0 0 4px 0px #0001; // Input fields box shadow on hover
  --mp-input-box-shadow-active: 0 0 4px 0px #0002; // Input fields box shadow on active
}

// Dark theme
body[data-theme='dark'] {
  --mp-border-radius: 8px; // Elements border radius
  --mp-border-width: 1px; // Elements border width
  --mp-c-overlay-bg: #000b; // Modal & confirm dialog background color
  --mp-pop-up-shadow: 0 8px 16px 8px #00000088; // Tooltip, select dropdown & search dropdown components shadow

  --mp-input-border-width: 1px; // Input fields border width
  --mp-c-input-border: #282828; // Input fields border color
  --mp-c-input-border-hover: #383838; // Input fields border color on hover
  --mp-c-input-border-active: #585858; // Input fields border color on active
  --mp-input-box-shadow: 0 0 2px 0px #fff1; // Input fields box shadow
  --mp-input-box-shadow-hover: 0 0 4px 0px #0001; // Input fields box shadow on hover
  --mp-input-box-shadow-active: 0 0 4px 0px #fff2; // Input fields box shadow on active
}
`
