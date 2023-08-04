// v1.1.0

const wrapper = (functionName, ...args) => {
  if ('wrapper' in window && [functionName] in window.wrapper) return window.wrapper[functionName](...args)
}

wrapper.async = (method, ...args) =>
  new Promise(resolve => {
    wrapper(method, ...args)

    const wcb = 'WCB_' + method

    const listener = ({ detail }) => {
      window.removeEventListener(wcb, listener)
      resolve(detail)
    }

    window.addEventListener(wcb, listener)
  })

if (window.navigator.userAgent === 'ANDROID_WRAPPER') window.env = 'ANDROID'
else if (window.navigator.userAgent === 'IOS_WRAPPER') window.env = 'IOS'
else if (navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) window.env = 'PWA'
else window.env = 'WEB'

wrapper.IS_WRAPPER = 'wrapper' in window

wrapper.READY = 'READY'
wrapper.GET_VERSION = 'GET_VERSION'
wrapper.UPDATE = 'UPDATE'

wrapper.TOAST = 'TOAST'
wrapper.CLEAR_STORAGE = 'CLEAR_STORAGE'
wrapper.CLEAR_HISTORY = 'CLEAR_HISTORY'
wrapper.COPY_TO_CLIPBOARD = 'COPY_TO_CLIPBOARD'
wrapper.OPEN_IN_BROWSER = 'OPEN_IN_BROWSER'
wrapper.IS_IN_BACKGROUND = 'IS_IN_BACKGROUND'

wrapper.VIBRATE = 'VIBRATE'
wrapper.VIBRATE_short = 50
wrapper.VIBRATE_default = 250
wrapper.VIBRATE_long = 500

wrapper.REQUEST_PERMISSION = 'REQUEST_PERMISSION'
wrapper.GET_PERMISSIONS_LIST = 'GET_PERMISSIONS_LIST'
wrapper.ON_PERMISSION_CHANGE = 'ON_PERMISSION_CHANGE'

wrapper.SET_STATUS_BAR_COLOR = 'SET_STATUS_BAR_COLOR'
wrapper.SET_STATUS_BAR_COLOR_fg_light = 'LIGHT'
wrapper.SET_STATUS_BAR_COLOR_fg_dark = 'DARK'

wrapper.SET_FULL_SCREEN = 'SET_FULL_SCREEN'
wrapper.RESET_FULL_SCREEN = 'RESET_FULL_SCREEN'

wrapper.KEEP_SCREEN_ON = 'KEEP_SCREEN_ON'
wrapper.RESET_KEEP_SCREEN_ON = 'RESET_KEEP_SCREEN_ON'

wrapper.REQUEST_LOCATION = 'REQUEST_LOCATION'

wrapper.CHOOSE_FILE = 'CHOOSE_FILE'

wrapper.TEST_NOTIFICATION = 'TEST_NOTIFICATION'
wrapper.GET_FCM_TOKEN = 'GET_FCM_TOKEN'
wrapper.ON_FCM_NOTIFICATION = 'ON_FCM_NOTIFICATION'

wrapper.START_AUDIO_RECORDING = 'START_AUDIO_RECORDING'
wrapper.STOP_AUDIO_RECORDING = 'STOP_AUDIO_RECORDING'
wrapper.READ_AUDIO_RECORDING = 'READ_AUDIO_RECORDING'

wrapper.THERMAL_PRINT_BT_PERMISSION_STATUS = 'THERMAL_PRINT_BT_PERMISSION_STATUS'
wrapper.THERMAL_PRINT_BT_PERMISSION_REQUEST = 'THERMAL_PRINT_BT_PERMISSION_REQUEST'
wrapper.THERMAL_PRINT_BT_TEST = 'THERMAL_PRINT_BT_TEST'
wrapper.THERMAL_PRINT_BT = 'THERMAL_PRINT_BT'

wrapper.THERMAL_PRINT_USB_TEST = 'THERMAL_PRINT_USB_TEST'
wrapper.THERMAL_PRINT_USB = 'THERMAL_PRINT_USB'

wrapper.DOWNLOAD_DATA = 'DOWNLOAD_DATA'

wrapper.permission_RECORD_AUDIO = 'RECORD_AUDIO'
wrapper.permission_READ_EXTERNAL_STORAGE = 'READ_EXTERNAL_STORAGE'
wrapper.permission_ACCESS_COARSE_LOCATION = 'ACCESS_COARSE_LOCATION'
wrapper.permission_ACCESS_FINE_LOCATION = 'ACCESS_FINE_LOCATION'
wrapper.permission_POST_NOTIFICATIONS = 'POST_NOTIFICATIONS'

wrapper.hasPermission = async permission => {
  if (!wrapper.IS_WRAPPER) return false
  else {
    const permissions = await wrapper.async(wrapper.GET_PERMISSIONS_LIST)
    return permissions
      .split(' ')
      .filter(x => x)
      .includes(permission)
  }
}

export default wrapper

// Debug
// Object.keys(wrapper).forEach(cb => {
//   if (cb.startsWith('WCB_')) window.addEventListener(cb, ({ detail }) => console.log(cb, '::', JSON.stringify(detail)))
// })

// window.addEventListener('load', async () => wrapper(wrapper.READY))
