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

//bonus 6
function addEventToCanvas() {
  let mainDivs = document.querySelectorAll('main div div ')
  mainDivs.forEach((div) => {
    div.addEventListener('click', function () {
      if (div.style.backgroundColor === '') {
        let color = getSelectedColor()
        div.style.backgroundColor = color
      } else {
        div.style.backgroundColor = ''
      }
    })
  })
}
function generateGrid(number) {
  console.log(`Entered generate grid with number ${number} `)

  let main = document.querySelector('main')
  main.innerHTML = ''
  for (let i = 0; i < number; i++) {
    let rowDiv = document.createElement('div')
    rowDiv.id = `row-${i}`
    main.appendChild(rowDiv)
    for (let j = 0; j < number; j++) {
      let columnDiv = document.createElement('div')
      columnDiv.className = `col-${j}`
      rowDiv.appendChild(columnDiv)
    }
  }
  main.style.gridTemplateRows = `repeat(${number}, 1fr)`
  let mainDivs = document.querySelectorAll('main > div')
  console.log(mainDivs)
  mainDivs.forEach((div) => {
    div.style.gridTemplateColumns = `repeat(${number}, 1fr)`
  })
  addEventToCanvas()
}

window.addEventListener('DOMContentLoaded', function () {
  let headerDivs = document.querySelectorAll('header div')
  let mainDivs = document.querySelectorAll('main div div ')
  let headerInputs = document.querySelectorAll('header div input')
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
      '#102942',
      '#174019',
      '#000000',
      '#42240D',
      '#2E1042',
      '#A19010',
      '#892BA3',
      '#A35E53',
    ],
    headerDivs
  )

  // le code de l'étape 2 se passe ici
  headerDivs.forEach((div) => {
    div.addEventListener('click', selectColor)
  })

  //bonus6
  generateGrid(20)

  let inputNumber = document.getElementById('input-number')
  console.log(inputNumber.value)

  inputNumber.addEventListener('change', function () {
    let number = inputNumber.value
    generateGrid(number)
  })

  // le code de l'étape 3 se passe ici

  mainDivs.forEach((div) => {
    div.addEventListener('click', function () {
      if (div.style.backgroundColor === '') {
        let color = getSelectedColor()
        div.style.backgroundColor = color
      } else {
        div.style.backgroundColor = ''
      }
    })
  })
  //bonus 3
  headerInputs.forEach((input) => {
    input.addEventListener('change', function () {
      console.log(input.value)
      input.closest('div').style.backgroundColor = input.value
    })
  })
  //bonus5
  let captureButton = document.getElementById('capture-button')
  let captureDisplay = document.getElementById('capture-display')
  captureButton.addEventListener('click', function () {
    html2canvas(document.querySelector('#capture')).then((canvas) => {
      captureDisplay.innerHTML = ''
      captureDisplay.innerText = 'Download the png :'
      captureDisplay.appendChild(canvas)
    })
  })

  //end of dom event listener
})
