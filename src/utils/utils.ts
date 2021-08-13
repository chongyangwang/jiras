/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-04 22:33:03
 * @LastEditTime: 2021-08-12 11:53:44
 */
import { useEffect, useRef, useState } from "react";

// const isFalsy= (value: unknown) => value === 0 ? false : !value
const isVoid = (value: unknown) =>
  value === null || value === undefined || value === "";

export function cleanObject(object: { [key: string]: unknown }) {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    // 依赖项里加上callback 会造成无限循环  和useCallback有关系
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
// 泛型
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 当value发生变化时 设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};

export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;
  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    // 组件卸载时调用
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
};

export const resetRoute = () => (window.location.href = window.location.origin);
