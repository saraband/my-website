export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)]
}

const intervals = [
  {label: 'year',     seconds: 31536000},
  {label: 'month',    seconds: 2592000},
  {label: 'day',      seconds: 86400},
  {label: 'hour',     seconds: 3600},
  {label: 'minute',   seconds: 60},
  {label: 'second',   seconds: 0}
]

export const timeSince = (date) => {
  if((Date.now() - date) / 1000 < 60)
    return 'just now';

  const seconds = Math.floor((Date.now() - date) / 1000)
  const interval = intervals.find(i => i.seconds < seconds)
  const count = Math.floor(seconds / interval.seconds)

  return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`
}

export const sleep = /*async*/ (ms) => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms))
}

export const prettyPrice = (price) => {
  if(price < 1000)
    return price

  const p = '' + price
  return p.substr(0, p.length - 3) + ' ' + p.substr(p.length - 3)
}