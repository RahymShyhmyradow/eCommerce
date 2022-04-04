import React, { useEffect, useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import QuantityItem from '../components/QuantityItem'
import { addItemToCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RiAddCircleLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import mediumZoom from 'medium-zoom'
import { RiEyeLine } from "react-icons/ri";

export default function Cart({ product }) {
    const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const [quantity, setQuantity] = useState(1)
    const handle = (r) => {
        cartItems.map(e => {
            // console.log(e.product.id,' ',r,' ',e.quantity);
            if (e.product.id === r) return setQuantity(e.quantity)
        })
    }
    // console.log(cartItems[0].quantity);
    // console.log('    ',quantity);
    const decriment = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }
    const incriment = () => {
        setQuantity(quantity + 1)
    }
    function ImageZoom({ zoom, src, alt, background }) {
        const zoomRef = React.useRef(zoom.clone({ background }))

        function attachZoom(image) {
            zoomRef.current.attach(image)
        }

        return <img src={src} alt={alt} ref={attachZoom} />
    }
    const zoom = React.useRef(mediumZoom({ background: '#000', margin: 5 }))
    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 1025) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return (
        <div className="w-full xs:mx-1  xl:mx-10 px-2 mb-8">
            <ToastContainer className=''
                autoClose={1900} />
            <div className="transition duration-500 ease-in-out hover:scale-105 cursor-pointer ">
                <Card className='md:p-4 p-2'>
                    <div className="">
                        <ImageZoom src={product.src} alt="Image" zoom={zoom.current} color="#BADA55" />
                        {/* <CardImage
                            src={product.src}
                            alt="Card Image"
                        /> */}
                    </div>
                    <CardBody className='p-0'>
                        <H6 color="gray">{product.title}</H6>
                        <Paragraph color="gray">
                            <p className="sm:text-sm xl:text-lg md:leading-4 leading-5">
                                {/* {width>=800 ? <p>{product.body}</p>:<p>123....</p>} */}
                                {!isMobile ? <p>{product.body}</p>:<p>{(product.body).slice(0,45)}...</p>}
                            </p>
                        </Paragraph>
                    </CardBody>
                    <CardFooter className='px-0 py-2'>
                        <div className="flex justify-between -mt-5">
                            {product.price &&
                                // <Button color="lightBlue" size="sm" ripple="light">
                                <p className="text-xs my-auto py-2 px-3 bg-blue-500 text-white rounded-md">{product.price}$</p>
                                // </Button>
                            }
                            <Button color="lightBlue" size="sm" ripple="light" onClick={() => { setShowModal(true), handle(product.id) }}>
                                {!isMobile ? <p className="text-xs">Read More</p>: <p className="text-lg"><RiEyeLine/></p>}
                            </Button>
                        </div>

                    </CardFooter>
                </Card>
            </div>
            <div className="">
                <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                    <ModalHeader toggler={() => setShowModal(false)}>
                        <p>{product.title}</p>
                    </ModalHeader>
                    <ModalBody>
                        <div className="flex w-full items-center md:flex-row flex-col">
                            <img src={product.src} className='md:w-3/4 w-full md:h-40 h-48 mr-3 md:mb-0 mb-2' />
                            <div className="flex flex-col">
                                <p>{product.body}</p>
                                <div className="flex justify-between items-center">
                                    {/* <QuantityItem quantity={quantity} setQuantity={setQuantity} /> */}
                                    <div className='my-5'>
                                        <div className='flex items-center'>
                                            <Button color="lightBlue" buttonType="filled" size="sm" rounded={false} block={false} iconOnly={false} ripple="light"><p onClick={() => decriment()} className='text-xl'>-</p></Button>
                                            <p className='md:mx-5 mx-2'>{quantity}</p>
                                            <Button color="lightBlue" buttonType="filled" size="sm" rounded={false} block={false} iconOnly={false} ripple="light"><p onClick={() => incriment()} className='text-xl'>+</p></Button>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="mr-3">
                                            <Button color='lightBlue' ripple='light'>
                                                <p>{product.price * quantity}$</p>
                                            </Button>
                                        </div>
                                        <Button color="lightBlue" ripple="light">
                                            <p className='text-lg' onClick={() => { dispatch(addItemToCart({ 'product': product, 'quantity': quantity })), toast.success('adding product card', { position: 'bottom-left' }) }}><RiAddCircleLine /></p>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="red"
                            buttonType="link"
                            onClick={() => setShowModal(false)}
                            ripple="dark"
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
}