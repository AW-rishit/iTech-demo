import Button from "./Button"
import NavbarButton from "./NavbarButton"

export default function Navbar(){
    return(
        <div id="container" className="flex justify-between w-[90vw] m-auto mt-[2rem]">
            <h1 className="text-4xl font-bold tracking-tighter">iTech</h1>
            <div className="flex gap-[3rem] tracking-tighter">
                <NavbarButton text={`Home`}/>
                <NavbarButton text={`About`}/>
                <NavbarButton text={`Services`}/>
                <NavbarButton text={`Cases`}/>
                <NavbarButton text={`Pages`}/>
                <NavbarButton text={`Contact`}/>
            </div>
            <Button text={'Get Started'}/>
        </div>
    )
}