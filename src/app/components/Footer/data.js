import { IoLocationOutline, IoMailOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { LiaPhoneAltSolid } from "react-icons/lia";


export const profileMenu = [
    {
        title: "Profile",
        url: "about"
    },
    {
        title: "Wallet",
        url: "wallet"
    },
    {
        title: "Order history",
        url: "order-history"
    }
]

export const servicesMenu = [
    {
        title: "Privacy Policy",
        url: "privacy-policy"
    },
    {
        title: "Orders Tracking",
        url: "orders-tracking"
    },
    {
        title: "Return and Refund",
        url: "return-and-refund"
    },
    {
        title: "Contact Us",
        url: "contact-us"
    },
    {
        title: "About Us",
        url: "about-us"
    },
    {
        title: "FAQs",
        url: "faqs"
    }
]

export const contactMenu = [
    {
        icon: <IoLocationOutline />,
        title: "74 group Tech4Dev, Lagos Nigeria",
        url: "address"
    },
    {
        icon: <IoMailOutline />,
        title: "74 group @ Tech4Dev.com",
        url: "email"
    },
    {
        icon: <LiaPhoneAltSolid />,
        title: +1234567890,
        url: "phone-number"
    },
    {
        whatsappIcon: <IoLogoWhatsapp />,
        instagramIcon: <IoLogoInstagram />,
        facebookicon: <IoLogoFacebook />
    },
]