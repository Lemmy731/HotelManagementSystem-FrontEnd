import { Link } from 'react-router-dom'

import React from 'react'

function CardItem(props) {
  return (
    <>
        <li className='cards__item'>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.lable}>
                    <img src={props.src} alt='Hotel'
                    className='cards__item__img'/>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </figure>
            </Link>
        </li>
    </>
  )
}

export default CardItem
