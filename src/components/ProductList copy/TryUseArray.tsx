import React from 'react';
import { useArray, useMount} from 'utils/utils'
interface User {
    name: string,
    age: number
}

export const TryUseArray = () => {
    const persons: User[] = [
        {
            name: 'Jack', age: 15
        },
        {
            name: 'Anny', age: 21
        }
    ];
    const { value, clear, removeIndex, add } = useArray(persons);
    useMount(() => {
        // console.log(value.isD)
        // add({'1111'})
        // removeIndex('111')
    });
    return (
        // 3:24
        <div>
            <button onClick={() => add({ name: "john", age: 14 })}>ADD</button>
            <button onClick={() => removeIndex(0)}>Remove</button>
            <button onClick={() => clear()}>Clear</button>
            {value.map((person, index) => {
                return <div>
                    <span>{index}</span>
                    <span>{person.name}</span>
                    <span>{person.age}</span>
                </div>;
            })}
        </div>
    );
}

 