import React from 'react'
import Cart from '../Cart'
import Button from "@material-tailwind/react/Button";
import H3 from "@material-tailwind/react/Heading3";

export default function Phones() {
    return (
        <div className='container mx-auto pt-10 pb-5'>
            <hr/>
            <div className='py-10 text-center'>
                <H3 color="blueGray">Brand Phones</H3>
            </div>
            <div className='flex justify-between pb-5'>
                <Cart img='https://i.pcmag.com/imagery/reviews/01pr6hmgqz7A5wX5hSQWqRs-1.fit_lpad.size_625x365.v1632764534.jpg' title='name1' className='w-1/4' />
                <Cart img='https://i.pcmag.com/imagery/reviews/03D1ZXVNpUaqVl6KHkDWl4t-5.fit_lim.size_625x365.v1634846487.jpg' title='name2' className='w-1/4' />
                <Cart img='https://i.pcmag.com/imagery/reviews/04NpYDBMWlMBzaJK82UVqe1-12.fit_lim.size_625x365.v1629200903.jpg' title='name3' className='w-1/4' />
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
