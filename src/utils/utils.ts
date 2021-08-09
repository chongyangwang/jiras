/*
 * @Description: 
 * @Author: cy2020
 * @Date: 2021-08-04 22:33:03
 * @LastEditTime: 2021-08-05 16:19:31
*/
import { useEffect, useState  } from 'react';

const isFalsy= (value: unknown) => value === 0 ? false : !value

export function cleanObject(object:object){
  const result = {...object}
  Object.keys(result).forEach(key=>{
    // @ts-ignore
    const value = result[key]
    if(isFalsy(value)){
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback:() => void) => {
 useEffect(()=>{
  callback()
 }, [])
}
// 泛型
export const useDebounce = <V> (value: V, delay?: number) => {
  const [debouncedValue, setDebounceValue] = useState(value)
  useEffect(()=>{
    // 当value发生变化时 设置一个定时器
    const timeout = setTimeout(()=>setDebounceValue(value), delay)
    // 每次在上一个useEffect处理完之后再运行
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue
}

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray)
  return {
    value,
    setValue,
    add:(item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) =>{
      const copy = [...value]
      copy.splice(index, 1)
      setValue(copy)
    }
  }
}