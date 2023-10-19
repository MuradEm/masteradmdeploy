export function ParseHourFormat(time: string) {
  let newHour: string;
  if (
    time.split(":")[1].charAt(0) == "0" &&
    time.split(":")[1].charAt(1) == "0"
  ) {
    if (time.split(":")[0].charAt(0) == "0") {
      newHour =
        time.split(":")[0].charAt(1) + time.split(" ")[1].toLocaleLowerCase();
    } else {
      newHour = time.split(":")[0] + time.split(" ")[1].toLocaleLowerCase();
    }
  } else {
    if (time.split(":")[0].charAt(0) == "0") {
      newHour = time.substring(1).replace(" ", "").toLocaleLowerCase();
    } else {
      newHour = time.replace(" ", "").toLocaleLowerCase();
    }
  }

  return newHour;
}
