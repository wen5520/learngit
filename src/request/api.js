import {request} from '@/request/request'


const api = {
	// home
  workTime(data) {
    return request('/home/GetWordTime', data)
  }
}


export default api