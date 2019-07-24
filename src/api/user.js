import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login.auth',
    method: 'post',
    data
  })
}

export function getInfo(_token) {
  return request({
    url: '/auth/getcurrentuserinfo.do',
    method: 'get',
    params: { _token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
