
import React from "react"
// import memeData from "../memeData.js"

function Main() {


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemeImages(data.data.memes))
    }
    ,[])

    // const [image, setImage] = React.useState(demo)
    const demoUrl = "https://i.imgflip.com/30b1gx.jpg"
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: demoUrl
    })

    const [allMemeImages, setallMemeImages] = React.useState([])

    function handleImageClick(){
        // const memesArray = allMemeImages.data.memes
        const rand = Math.floor(Math.random()*allMemeImages.length)
        const newUrl = allMemeImages[rand].url
        setMeme(prevState => ({
            ...prevState,
            randomImage: newUrl
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <div className="w-full md:flex p-12">
            <div className="flex-1 max-w-xl relative mr-5">
                <img src={meme.randomImage} alt="logo"/>
                <div className = "w-full text-center absolute top-5 text-[#e9e9e9] uppercase font-bold text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{meme.topText}</div>
                <div className = "w-full text-center absolute bottom-5 text-[#e9e9e9] uppercase font-bold text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{meme.bottomText}</div>
            </div>
            <div className="flex-1">
                <div className="w-full flex mt-4">
                    <input 
                        type = "text"
                        onChange = {handleChange}
                        name = "topText"
                        value = {meme.topText}
                        placeholder="Write Top Text Here..." 
                        className="flex-1 mr-2 w-2/5 my-3 p-2 border-solid border-black border-2 rounded-md">
                    </input>
                    <input 
                        type = "text"
                        onChange = {handleChange}
                        name = "bottomText"
                        value = {meme.bottomText}
                        placeholder="Write Bottom Text Here..." 
                        className="flex-1 ml-2 w-2/5 my-3 p-2 border-solid border-black border-2 rounded-md">
                    </input>
                </div>
                <button onClick={handleImageClick}className="mt-5 cursor-pointer py-2 w-full text-[#e9e9e9] align-middle 
                                   bg-gradient-to-r from-violet-500 to-fuchsia-500
                                   font-sans font-semibold text-2xl rounded-xl" type="submit">
                    Get new meme image
                </button>

            </div>
        </div>
    )
}

export default Main