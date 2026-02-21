export const NavBar = ({scroll, elRefs}) => {
  return (
    <div className='nav-bar'>
        <ul>
            <li><button onClick={() => scroll(elRefs[0])}>Home</button></li>
            <li><button onClick={() => scroll(elRefs[1])}>About Me</button></li>
            <li><button onClick={() => scroll(elRefs[2])}>Projects</button></li>
            <li><button onClick={() => scroll(elRefs[3])}>Contact</button></li>
        </ul>
    </div>
  )
}
