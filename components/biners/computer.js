import React from 'react'
import Cart from '../Cart'
import Button from "@material-tailwind/react/Button";
import H3 from "@material-tailwind/react/Heading3";

export default function Computer() {
    return (
        <div className='container mx-auto pt-10 pb-5'>
            <div className='py-10 text-center'>
                <H3 color="lightBlue">Brand Computers</H3>
            </div>
            <div className='flex justify-between pb-5'>
                <Cart img='https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8..v1583853669.jpg' title='name1' />
                <Cart img='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWPjnn?ver=d6ed&q=0&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=1378&y=397&s=1622&d=911&aim=true' title='name2' />
                <Cart img='https://www.pcworld.com/wp-content/uploads/2021/12/dscf0453_final-100797561-orig.jpg?quality=50&strip=all' title='name3' />
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
