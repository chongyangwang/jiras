/*
 * @Description:
 * @Author: cy2020
 * @Date: 2021-08-06 14:14:26
 * @LastEditTime: 2021-08-13 14:10:41
 */
import React from "react";
import { useArray, useMount } from "utils/utils";
interface User {
  name: string;
  age: number;
}

export const TryUseArray = () => {
  const persons: User[] = [
    {
      name: "Jack",
      age: 15,
    },
    {
      name: "Anny",
      age: 21,
    },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  return (
    // 3:24
    <div>
      <button onClick={() => add({ name: "john", age: 14 })}>ADD</button>
      <button onClick={() => removeIndex(0)}>Remove</button>
      <button onClick={() => clear()}>Clear</button>
      {value.map((person, index) => {
        return (
          <div>
            <span>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        );
      })}
    </div>
  );
};
