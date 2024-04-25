import { IoLocationOutline, IoMailOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { LiaPhoneAltSolid } from "react-icons/lia";



export const profileMenu = [
    {
        title: "Profile",
        url: "/profile"
    },
    {
        title: "Wallet",
        url: "/wallet"
    },
    {
        title: "Order history",
        url: "/history"
    }
]

export const servicesMenu = [
    {
        title: "Privacy Policy",
        url: "/privacy"
    },
    {
        title: "Orders Tracking",
        url: "/tracking"
    },
    {
        title: "Return and Refund",
        url: "/return"
    },
    {
        title: "Contact Us",
        url: "/contact"
    },
    {
        title: "About Us",
        url: "/about"
    },
    {
        title: "FAQs",
        url: "/faqs"
    }
]

export const contactMenu = [
    {
        icon: <IoLocationOutline />,
        title: "74 group Tech4Dev, Lagos Nigeria",
        url: "/address",
    },
    {
        icon: <IoMailOutline />,
        title: "74 group @ Tech4Dev.com",
        url: "/email",
    },
    {
        icon: <LiaPhoneAltSolid />,
        title: +1234567890,
        url: "/phone",
    },
    {
        whatsappIcon: <IoLogoWhatsapp />,
        instagramIcon: <IoLogoInstagram />,
        facebookIcon: <IoLogoFacebook />
    },
]