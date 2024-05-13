import React, { useState, useMemo, useRef } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    // Your code starts here
    const totalValue = useMemo(() => {
        let sum = 0;
        items.forEach((ele) => {
            sum = sum + ele.value;
        })
        return sum;
    }, [items]);
    // Your code ends here
    const nameref = useRef();
    const valueref = useRef();
    const handleClick = () => {
        const name = nameref.current.value;
        const value = parseInt(valueref.current.value);
        const data = {
            name: name,
            value: value
        }
        console.log(data);
        setItems([...items, data]);
        nameref.current.value = " ";
        valueref.current.value = " ";
    }
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
            <input placeholder='Enter the name of item' ref={nameref} ></input>
            <input placeholder='Enter the value of item' ref={valueref}></input>
            <button onClick={handleClick}>Submit</button>
        </div>
    );
};
