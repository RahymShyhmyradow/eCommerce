import React from 'react'
import Cart from '../Cart'
import Button from "@material-tailwind/react/Button";
import H3 from "@material-tailwind/react/Heading3";

export default function Watches() {
    return (
        <div className='container mx-auto pt-10 pb-5'>
            <hr/>
            <div className='py-10 text-center'>
                <H3 color="teal">Brand Watches</H3>
            </div>
            <div className='flex justify-between pb-5'>
                <Cart img='https://im.bloha.ru/2021/09/2qCmJmbJ73QXckyyTFiPPi-1200-80.jpg' title='name1' className='w-1/4' />
                <Cart img='https://www.iphones.ru/wp-content/uploads/2020/09/460B62DD-E7BD-4F5D-A7A2-26B06F86EBE7.jpeg' title='name2' className='w-1/4' />
                <Cart img='https://smartchasy.com/wp-content/uploads/2021/11/tgvvtg55t5tgt5ggt5gt5g5gvggtvtvg-800x445.jpg' title='name3' className='w-1/4' />
            </div>
            <div className='flex justify-end'>

                <Button
                    color="lightBlue"
                    buttonType="filled"
                    size="regular"
                    rounded={true}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                >
                    Shol all
                </Button>
            </div>
        </div>
    )
}
