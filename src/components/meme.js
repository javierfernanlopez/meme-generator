import "../css/meme.css"
import React from "react"

function Meme() {

    const[meme, setMeme] = React.useState(
    {
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/3si4.jpg"
    })
    
    const [allMemeImages, setAllMemeImage] = React.useState([])


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImage(data.data.memes))
    }, [])

    function getMemeImage(){
        const img = allMemeImages[Math.floor(Math.random()*allMemeImages.length)].url
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImg: img
            }
        }) 
    }

    return (
        <div className="meme">
            <div action="" className="meme--form">
                <input 
                    type="text" 
                    name="topText" 
                    placeholder="Top text"
                    onChange={handleChange}
                    value={meme.topText}
                    />

                <input 
                    type="text" 
                    name="bottomText" 
                    placeholder="Bottom text"
                    onChange={handleChange}
                    value = {meme.bottomText}
                    />
            </div>
            <button type="submit" onClick={getMemeImage}>Get a new image 🖼️</button>
            <div className="meme-image">
                <img src={meme.randomImg} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme;

