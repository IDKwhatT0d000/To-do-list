import React from 'react';
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Task = (props) => {
    const handle = (index) => {
        props.setList((list) => list.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col">
            {props.list.map((item, index) => (
                <div className="flex flex-row" key={index}>
                    <p className="text-blue-900 font-xl">{item}</p>
                    <IoCheckmarkDoneCircle onClick={() => handle(index)} className="mx-5 my-1" />
                </div>
            ))}
        </div>
    );
};

export default Task;
