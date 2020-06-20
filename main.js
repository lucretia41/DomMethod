const bodyElement = document.createElement('body')
const scriptElement = document.createElement('script')
const buttonElement = document.createElement('button')
buttonElement.append('Remove')
bodyElement.append(buttonElement)

const mainElement = document.createElement('main')
bodyElement.append(mainElement, scriptElement)

const anchorElement = document.createElement('a')
anchorElement.className = ('link')
anchorElement.href = 'https://www.google.com/'
anchorElement.target = ' _blank'
anchorElement.append('Vincent St Remy')

const imageElement = document.createElement('img')
imageElement.className = 'image'
imageElement.src = 'https://www.google.com/'
imageElement.alt = 'Vincent van Gogh St Remy'

mainElement.append(imageElement, anchorElement)

buttonElement.addEventListener('click', function () {
    mainElement.remove()

})

const inputElement = document.createElement('input')
inputElement.type = 'text'
inputElement.name = 'Remove Class'
inputElement.id = 'removeClass'
inputElement.placeholder = 'Remove CSS Selector'
bodyElement.append(inputElement)

const inputButtonElement = document.createElement('button')
inputButtonElement.append('Remove Selector')
bodyElement.append(inputButtonElement)

inputButtonElement.addEventListener('click', function () {
    const removeCSSElement = document.querySelector(inputElement.value)
    removeCSSElement.remove()

})

const inputCreateElement = document.createElement('input')
inputCreateElement.type = 'text'
inputCreateElement.name = 'Create element'
inputCreateElement.id = 'create Element'
inputCreateElement.placeholder = 'Create An Element'
bodyElement.append(inputCreateElement)

const creatElementButton = document.createElement('button')
creatElementButton.append('Create Element')
bodyElement.append(creatElementButton)
creatElementButton.addEventListener('click', function () {
    const createElementInput = document.createElementByID('create Element').value
    const createdElement = document.createElement('div')
    createdElement.append(createElementInput)
    bodyElement.append(createdElement)
})