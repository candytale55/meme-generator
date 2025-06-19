import { useState } from "react"

export default function Main() {
  
  // Define initial meme state with default text and image (hardcoded)
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg" 
  })
  


  // Event handler for input changes
  function handleChange(event) {
    const { name, value } = event.currentTarget

    // Update the state dynamically based on the input's name
    // This allows the same function to update both topText and bottomText
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      {/* Meme caption form */}
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText} // Controlled input
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText} // Controlled input
          />
        </label>

        {/* Button will later be used to fetch a new meme image */}
        <button>Get a new meme image 🖼</button>
      </div>

      {/* Meme preview section */}
      <div className="meme">
        <img src={meme.imageUrl} alt="Meme" />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  )
}
