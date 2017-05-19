export const encode = value => {
  if (value === undefined || value === null) {
    return false
  } else if (typeof window === 'undefined' && (process && process.version !== 'undefined')) {
    return new Buffer(JSON.stringify(value)).toString('base64')
  } else {
    return window.btoa(JSON.stringify(value))
  }
}

export const decode = value => {
  if (value === undefined || value === null) {
    return false
  } else if (typeof window === 'undefined' && (process && process.version !== 'undefined')) {
    return JSON.parse(Buffer.from(value, 'base64').toString())
  } else {
    return JSON.parse(window.atob(value))
  }
}

export default {
  encode, decode
}
