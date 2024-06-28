const Head = () => {
    return (
        <>
           <header className="w-full h-auto">
            <img className='w-full hidden md:block' src="./public/shop1.jpg" alt="" srcSet=""></img>
            <img className='w-full md:hidden ' src="./public/shop2.jpg" alt="" srcSet=""></img>
            <p className="absolute top-52 text-indigo-600 text-3xl font-semibold md:text-8xl md:text-white ">Welcome to the shop</p>
           </header>
        </>
    )
}
export default Head