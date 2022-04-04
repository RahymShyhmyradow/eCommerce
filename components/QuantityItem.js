import React from 'react'
import Button from "@material-tailwind/react/Button";
export default function QuantityItem(props) {
    const decrement=()=>{
        props.setQuantity(props.quantity-1)
    }
    const increment=()=>{
        props.setQuantity(props.quantity+1)
    }
    return (
        <div className='my-5'>
            <div className='flex items-center'>
                <Button color="lightBlue" buttonType="filled" size="sm" rounded={false} block={false} iconOnly={false} ripple="light"><p onClick={()=>decrement()} className='text-xl'>-</p></Button>
                <p className='mx-5'>{props.quantity}</p>
                <Button color="lightBlue" buttonType="filled" size="sm" rounded={false} block={false} iconOnly={false} ripple="light"><p onClick={()=>increment()} className='text-xl'>+</p></Button>
            </div>
        </div>
    )
}
