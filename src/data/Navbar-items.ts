import { navbarSchema } from "@/model/NavbarSchema"

const NavbarItems:navbarSchema[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
]

const NabarRihtItems: navbarSchema[] = [
    { name: 'Sign In', href: '/sign-in' },
    { name: 'Register', href: '/register' },
]

// const SideBarItems: navbarSchema[] =[
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Contact', href: '/contact' },
//     { name: 'Sign In', href: '/sign-in' },
//     { name: 'Register', href: '/register' },
// ]

export { NavbarItems, NabarRihtItems };