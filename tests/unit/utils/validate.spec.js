import { validuserCode, isExternal } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validuserCode', () => {
    expect(validuserCode('admin')).toBe(true)
    expect(validuserCode('editor')).toBe(true)
    expect(validuserCode('xxxx')).toBe(false)
  })
  it('isExternal', () => {
    expect(isExternal('https://github.com/PanJiaChen/vue-element-admin')).toBe(true)
    expect(isExternal('http://github.com/PanJiaChen/vue-element-admin')).toBe(true)
    expect(isExternal('github.com/PanJiaChen/vue-element-admin')).toBe(false)
    expect(isExternal('/dashboard')).toBe(false)
    expect(isExternal('./dashboard')).toBe(false)
    expect(isExternal('dashboard')).toBe(false)
  })
})
