import logo from './meme-img.png'
function Header(){
    return (
        <div className="p-3 flex flex-start bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full">
            <img className = "w-[70px]" src={logo} alt="LOGO"/>
            <h1 className="font-medium pt-[13px] pl-[10px] text-[#e9e9e9] font-sans text-4xl">Meme Generator</h1>
        </div>
    )
 }

 export default Header