import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
console.log(import.meta.env.VITE_APP_BASE_API)

// 引入axios实例
import hwRequest from './service'
//返回数据的类型
interface DateType {
  data: any
  code: number
  message: string
}
hwRequest
  .get<DateType>({
    url: 'https://www.fastmock.site/mock/b7eabdc70b21d19726d2d7ee7f372da9/item/ip',
    showLoading: false
  })
  .then((res) => {
    console.log(res)
    // console.log(res.data)
  })
