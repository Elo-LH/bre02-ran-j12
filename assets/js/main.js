function selectColor(event) {
  let colorBox = event.target
  let color = colorBox.style.backgroundColor

  sessionStorage.setItem('selectedColor', color)
}

function getSelectedColor() {
  if (sessionStorage.getItem('selectedColor')) {
    return sessionStorage.getItem('selectedColor')
  }

  return null
}

function loadPalette(palette, headerDivs) {
  let colors = palette
  for (i = 0; i < colors.length; i++) {
    headerDivs[i].style.backgroundColor = colors[i]
  }
}

window.addEventListener('DOMContentLoaded', function () {
  let headerDivs = document.querySelectorAll('header div')
  let mainDivs = document.querySelectorAll('main div div ')
  console.log(mainDivs)
  loadPalette(
    [
      '#22f6f3',
      '#3daf7e',
      '#ffffff',
      '#ec8236',
      '#a9a7ee',
      '#ecc606',
      '#f783f2',
      '#e89e80',
    ],
    headerDivs
  )

  // le code de l'étape 2 se passe ici
  headerDivs.forEach((div) => {
    div.addEventListener('click', selectColor)
  })

  // le code de l'étape 3 se passe ici
  mainDivs.forEach((div) => {
    div.addEventListener('click', function () {
      let color = getSelectedColor()
      div.style.backgroundColor = color
    })
  })
})
