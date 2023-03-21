import React from 'react';

import './List.css';
import svg from '../../images/svg'
import {AnimationNumber} from "../AnimationNumber";
import { useInView } from 'react-intersection-observer';

const Bitcoin = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1208_13637)">
            <path d="M9 17.5C13.6944 17.5 17.5 13.6944 17.5 9C17.5 4.30558 13.6944 0.5 9 0.5C4.30558 0.5 0.5 4.30558 0.5 9C0.5 13.6944 4.30558 17.5 9 17.5Z" fill="white"/>
            <path d="M17.2456 11.0563C16.1102 15.6098 11.4977 18.3811 6.943 17.2455C2.39024 16.1103 -0.381315 11.498 0.754618 6.9447C1.88949 2.39059 6.50203 -0.380912 11.0553 0.754359C15.6097 1.88963 18.381 6.50242 17.2456 11.0563ZM12.7467 7.7891C12.9159 6.65807 12.0547 6.05008 10.8771 5.64445L11.2591 4.11236L10.3264 3.87994L9.95444 5.37167C9.70926 5.31057 9.45741 5.25295 9.20719 5.19582L9.58175 3.69426L8.64955 3.46185L8.2673 4.99342C8.06433 4.9472 7.86511 4.90151 7.6717 4.85345L7.67276 4.84867L6.38646 4.52751L6.13833 5.52361C6.13833 5.52361 6.83038 5.68217 6.81575 5.69201C7.19354 5.78629 7.26179 6.03626 7.25038 6.23442L6.81522 7.97982L6.20371 10.4315C6.15746 10.5463 6.04034 10.7184 5.77627 10.653C5.78555 10.6666 5.09832 10.4839 5.09832 10.4839L4.63529 11.5514L5.84905 11.8539C6.07487 11.9105 6.29615 11.9697 6.514 12.0255L6.12799 13.5752L7.05963 13.8076L7.44192 12.2744C7.69642 12.3435 7.94345 12.4072 8.1852 12.4673L7.80426 13.9933L8.73696 14.2257L9.12297 12.6789C10.7134 12.9799 11.9094 12.8585 12.4128 11.4202C12.8185 10.262 12.3926 9.59401 11.5558 9.15838C12.1652 9.01785 12.6243 8.61704 12.7467 7.7891ZM10.6157 10.7771C10.3275 11.9352 8.37727 11.3091 7.74501 11.1521L8.25721 9.09913C8.88947 9.25691 10.9169 9.56929 10.6157 10.7771ZM10.9042 7.77235C10.6412 8.82582 9.01803 8.2906 8.49149 8.15938L8.95587 6.29735C9.48238 6.42857 11.1781 6.67348 10.9042 7.77235Z" fill="#F7931A"/>
        </g>
        <defs>
            <clipPath id="clip0_1208_13637">
                <rect width="17" height="17" fill="white" transform="translate(0.5 0.5)"/>
            </clipPath>
        </defs>
    </svg>
);

const List = ({ data }) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
        triggerOnce: true,
        delay: 500,
    });
    console.log(inView);
  return (
    <div className='List' ref={ref}>
        {data.map(item => (
            <div key={item.label} className="Items">
                <div className='Item_title'>
                    <Bitcoin />
                    <b>R$ {inView && <AnimationNumber limit={item.price} clxs={'down'} />}</b>
                </div>
                <div className='Item_subtitle'>
                    <span>{item.label} {item.balance}</span>
                </div>
                <div className='Divider'/>
            </div>
        ))}
    </div>
  )
}

export default List