'use strict'

function isBottom() {
  return window.scrollY + window.innerHeight >= document.body.offsetHeight
}

function timeout(interval, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, interval | 0)
  })
}

export {
  isBottom,
  timeout
}
