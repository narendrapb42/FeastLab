import Link from "next/link";
import logoimg from '@/public/images/logo.png'
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader(){
    return <>
    <MainHeaderBackground/>
    <header className={classes.header}>
        <Link className= {classes.logo} href="/">
            <Image priority src={logoimg} alt="A plate with food on it"></Image>
            FeastLab
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                   <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                <NavLink href="/community">Browse Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
}