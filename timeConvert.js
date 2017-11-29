// PROMPT: Have the function timeConvert(num) take the num parameter being passed and
// return the number of hours and minutes the parameter converts to (ie. if num = 63 t
// hen the output should be 1:3). Separate the number of hours and minutes with a colon.

const timeConvert = (num) => {
  let hours = Math.floor(num / 60)
  let minutes = num % 60

  return hours + ':' + minutes
}

console.log(timeConvert(63))
