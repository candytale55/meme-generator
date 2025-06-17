// Import the troll face image from the local images folder
import trollFace from "../images/troll-face.png"

export default function Header() {
  return (
    <header className="header">
      {/* Logo image for the meme generator */}
      <img
        src={trollFace}
        alt="Troll Face Logo" // Always a good idea for accessibility
      />

      {/* Title of the app */}
      <h1>Meme Generator</h1>
    </header>
  )
}
