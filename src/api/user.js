import request from '@/utils/request'
import loginRequest from '@/utils/loginRequest'

export function login(data) {
  console.log(data, 'Credintials')
  return loginRequest({
    url: '/auth/',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
