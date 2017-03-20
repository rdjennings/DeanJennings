function manageSideNav() {
	$(".button-collapse").click( function(ev) {
    ev.preventDefault()
    document.querySelector('.side-nav').style.left = '315px'
    $(document).off('click').click(function(ev) {
      let temp = ev.target
      if (temp.className.indexOf('menu-icon') > -1) {
        return
      }
      while(temp.tagName.toLowerCase() !== 'body' && temp.tagName.toLowerCase() !== 'a') {
        if (temp.className.indexOf('side-nav') > -1) {
          break
        }
        temp = temp.parentNode || document.querySelector('body')
      }
      if (temp.tagName.toLowerCase() === 'body' || temp.tagName.toLowerCase() === 'a') {
        document.querySelector('.side-nav').style.left = '0'
      }
    })
  })
}
export default manageSideNav