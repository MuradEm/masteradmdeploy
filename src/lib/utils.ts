export const DEBUG = process.env.NODE_ENV === "development"

export let APP_URL = ""
if (DEBUG) {
  APP_URL = "https://tools.info-rmi.com/timesheetapi/ISAPI.dll"
} else {
  APP_URL = "https://tools.info-rmi.com/timesheetapi/ISAPI.dll"
}