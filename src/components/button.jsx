export default function Button() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <button id="click-button" onClick={handleClick}>
      Click
    </button>
  )
}