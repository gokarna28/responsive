const Navbar = () => {
    return (
        <>
            <nav className="w-full h-14 bg-indigo-300 flex 
             justify-between px-4 md:p-8 items-center">
                <div className="text-2xl text-indigo-500 font-medium">LOgo</div>
                <ul className="md:flex font-semibold hidden">
                    <li className="mx-[10px] cursor-pointer hover:text-white">Home</li>
                    <li className="mx-[10px] cursor-pointer hover:text-white">About Us</li>
                    <li className="mx-[10px] cursor-pointer hover:text-white">Contact Us</li>
                </ul>
                <div className="hidden md:block px-4 py-2 bg-indigo-700 text-white rounded-lg">Login/signUp</div>
                <div className="md:hidden">
                    <a className="text-4xl font-medium" href='#'>&#8801;</a>
                </div>
            </nav>
        </>
    )
}
export default Navbar
