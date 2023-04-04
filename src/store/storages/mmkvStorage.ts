import { MMKV } from 'react-native-mmkv'
import { Storage } from 'redux-persist'

const storage = new MMKV()

export interface KeyImageCache {
  get(key: string): string | undefined | Promise<string | undefined>
  set(key: string, value: string): Promise<boolean>
}

const getKeyImageCache = (prefix: string): KeyImageCache => ({
  set: (key, value): Promise<boolean> => {
    storage.set(`${prefix}-${key}`, value)

    return Promise.resolve(true)
  },
  get: (key: string): Promise<string | undefined> => {
    const value = storage.getString(`${prefix}-${key}`)

    return Promise.resolve(value)
  },
})

const mmkvStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value)

    return Promise.resolve(true)
  },
  getItem: (key) => {
    const value = storage.getString(key)

    return Promise.resolve(value)
  },
  removeItem: (key) => {
    storage.delete(key)

    return Promise.resolve()
  },
}

export const moneroKeyImageCache = getKeyImageCache('monero-cache')

export default mmkvStorage
