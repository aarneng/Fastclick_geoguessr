
(function main() {
  let iter = 0

  function reloadUntilFound() {
    setTimeout(function() {

      if (iter++ >= 100) return  // TODO: handle as error
      
      let buttonElem = document.getElementsByClassName("button_button__CnARx button_variantSecondary__lSxsR")[0]
    
      if (buttonElem === undefined) {
        reloadUntilFound();
        return
      }

      let totalBtnPresses = 50

      function pressBtn() {
        var i = 1;
        function myLoop() {
          setTimeout(function() {
            buttonElem.click()
            i++;
            if (i < totalBtnPresses) {
              myLoop();
            }
          }, 150)
        }
        myLoop()
      }

      let customElem = document.createElement("div")
      customElem.innerText = `Spam the button`
      customElem.classList.add("button_button__CnARx")
      customElem.onclick = pressBtn
      buttonElem.parentElement.appendChild(customElem)

    }, 100)
  }
  reloadUntilFound()
})()
