import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import Link from "next/link";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import NavItem from "@material-tailwind/react/NavItem";
import { useRouter } from "next/router";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { cartShow } from "../features/cart/cartSlice";
function Menu() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const route = useRouter();
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch=useDispatch()
    return (
        <div style={{marginBottom:'0px !important'}}>
            <Navbar color="lightBlue" navbar>
                <NavbarContainer>
                    <NavbarWrapper>
                        <NavItem ripple="light"><Link href='/'><a className="text-lg border border-blue-400 border-b-white">RB Shopping</a></Link></NavItem>
                        <NavbarToggler
                            color="white"
                            onClick={() => setOpenNavbar(!openNavbar)}
                            ripple="light"
                        />
                    </NavbarWrapper>

                    <NavbarCollapse open={openNavbar}>
                        <Nav>
                            <NavItem active={route.pathname == '/products' ? 'light' : ''} ripple="light"><Link href='/products'><a>Products</a></Link></NavItem>
                            <NavItem active={route.pathname == '/about' ? 'light' : ''} ripple="light"><Link href='/about'><a>About</a></Link></NavItem>
                            <NavItem active={route.pathname == '/contacts' ? 'light' : ''} ripple="light"><Link href='/contacts'><a>Contacts</a></Link></NavItem>
                        </Nav>
                        <div className="text-sm lg:mx-5 md:my-0 my-3">
                            <NavbarInput type="text" placeholder="Search here" />
                        </div>
                        <Link href='/cart'><a className="text-lg">
                            <div style={{ fontSize: '30px' }} className="cursor-pointer text-sky-200 relative w-8">
                                <TiShoppingCart />
                                <div style={{ fontSize: '10px' }} className="absolute top-0 right-0 px-1 bg-red-500 rounded-3xl h-4 flex items-center">
                                    {cartItems.length}
                                </div>
                            </div>
                        </a></Link>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </div>
    );
}

export default Menu