/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-04 22:33:03
 * @LastEditTime: 2021-08-05 14:35:00
*/
import { useEffect, useState  } from 'react';

const isFalsy= (value) => value === 0 ? false : !value

export function cleanObject(object){
  const result = {...object}
  Object.keys(result).forEach(key=>{
    const value = result[key]
    if(isFalsy(value)){
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback) => {
 useEffect(()=>{
  callback()
 }, [])
}

// 防抖 在极短时间内多次触发一个函数 那么只执行最后一次 例如搜索框change
// export const debounce = (callback, delay) => {
//   let timeout
//   return (...params) => {
//     if(timeout){
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(()=>{
//       callback(...params)
//     }, delay)
//   }
// }
// const log = debounce(()=>console.log('call'), 5000)
// log()
// log()
// log()
// 这三个函数都是同步操作，所以他们都是在0-1s这个时间段内瞬间完成的;
// log1 首次执行            timeout1
// log2 发现timeout1 clear timeout2
// log3 发现timeout2 clear timeout3

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebounceValue] = useState(value)
  useEffect(()=>{
    // 当value发生变化时 设置一个定时器
    const timeout = setTimeout(()=>setDebounceValue(value), delay)
    // 每次在上一个useEffect处理完之后再运行
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue
}