export const theme = `
body {
  --c-primary: #000000; // Primary color
  --c-bg: #ffffff; // Background color

  --c-light: #f8f8f8; // Elements color on hover before selection
  --c-border: #e8e8e8; // Elements border color
  --mp-border-radius: 8px; // Elements border radius
  --mp-border-width: 1px; // Elements border width
  --c-overlay-bg: #0004; // Popup elements background color
  --mp-pop-up-shadow: 0 8px 16px 8px #00000018; // Tooltip, select dropdown & search dropdown components shadow

  --mp-input-border-width: 1px; // Input fields border width
  --c-input-border: #e8e8e8; // Input fields border color
  --c-input-border-hover: #d8d8d8; // Input fields border color on hover
  --c-input-border-active: #b8b8b8; // Input fields border color on active
  --mp-input-box-shadow: 0 0 2px 0px #0001; // Input fields box shadow
  --mp-input-box-shadow-hover: 0 0 4px 0px #0001; // Input fields box shadow on hover
  --mp-input-box-shadow-active: 0 0 4px 0px #0002; // Input fields box shadow on active

  --c-font-dark: #282828; // Font color dark
  --c-font: #484848; // Font color default
  --c-font-light: #888888; // Font color light
  --c-font-light: #b8b8b8; // Font color of input field placeholder
}

body[data-theme='dark'] {
  --c-primary: #e8e8e8; // Primary color
  --c-bg: #080808; // Background color

  --c-light: #101010; // Elements color on hover before selection
  --c-border: #282828; // Elements border color
  --mp-border-radius: 8px; // Elements border radius
  --mp-border-width: 1px; // Elements border width
  --c-overlay-bg: #000b; // Popup elements background color
  --mp-pop-up-shadow: 0 8px 16px 8px #00000088; // Tooltip, select dropdown & search dropdown components shadow

  --mp-input-border-width: 1px; // Input fields border width
  --c-input-border: #282828; // Input fields border color
  --c-input-border-hover: #383838; // Input fields border color on hover
  --c-input-border-active: #585858; // Input fields border color on active
  --mp-input-box-shadow: 0 0 2px 0px #fff1; // Input fields box shadow
  --mp-input-box-shadow-hover: 0 0 4px 0px #0001; // Input fields box shadow on hover
  --mp-input-box-shadow-active: 0 0 4px 0px #fff2; // Input fields box shadow on active

  --c-font-dark: #d8d8d8; // Font color dark
  --c-font: #b8b8b8; // Font color default
  --c-font-light: #888888; // Font color light
  --c-font-light: #484848; // Font color of input field placeholder
}
`
