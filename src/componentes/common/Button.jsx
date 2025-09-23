function Button({ opened, setOpened, setShowNavBar,showNavBar }) {
  return (
    <button 
        className={`menu-button ${opened ? 'open' : 'closed'}`} 
        onClick={() => setShowNavBar(!showNavBar) & setOpened(!opened)}
      >
        ☰ 
    </button>
  )
}

export default Button;