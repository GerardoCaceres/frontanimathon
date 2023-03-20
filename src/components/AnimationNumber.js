import {useEffect, useRef, useState} from "react";
const clx = require('classnames');

export function AnimationNumber({limit, clxs}){
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < limit) {
                setCount(count + 1);
            }
        }, 1);

        return () => clearInterval(interval);
    }, [count, limit]);
    return (
            <p className={clx({[`${clxs}`]:count < limit})}>{count}</p>
    );
}
