let task = document.querySelector('input[type="text"]')
let sub = document.querySelector('#sub')
let time = document.querySelector('#time')
let level = document.querySelector('#level')
let form = document.querySelector('form')
let tasksDiv = document.querySelector('.tasks')
let spanNum1 = document.querySelector('.num1')
let spanNum2 = document.querySelector('.num2')
let fill = document.querySelector('.fill')


form.addEventListener('submit', function (e) {
    e.preventDefault()

    let taskValue = task.value.trim()

    if (taskValue === "") {
        toast()
        return
    }

    let subValue = sub.value
    let timeValue = time.value
    let levelValue = level.value

    let card2 = document.createElement('div')
    card2.classList.add('card2', 'addEvect')


    let deleteButton = document.createElement('button')
    deleteButton.classList.add('delete')
    let deleteImg = document.createElement('img')
    deleteImg.classList.add('deleteImg')
    deleteImg.src = 'trash.png'
    deleteButton.append(deleteImg)

    deleteButton.addEventListener('click', function () {
        card2.classList.remove('addEvect')
        card2.classList.add('deleteEvect')
        setTimeout(function () {
            card2.remove()
            updateCount()
        }, 600)
    })


    let taskEl = document.createElement('h2')
    taskEl.textContent = taskValue[0].toUpperCase() + taskValue.slice(1)
    taskEl.classList.add('main')

    let subEl = document.createElement('h3')
    subEl.textContent = subValue
    subEl.classList.add('secondy')

    let timeEl = document.createElement('h3')
    timeEl.textContent = timeValue
    timeEl.classList.add('secondy')

    let levelEl = document.createElement('h3')
    levelEl.textContent = levelValue
    levelEl.classList.add('secondy', levelValue) // easy / medium / hard

    let secDiv = document.createElement('div')
    secDiv.classList.add('secDiv')
    secDiv.append(levelEl, timeEl, subEl)


    let doneButton = document.createElement('button')
    doneButton.classList.add('done')
    let doneImg = document.createElement('img')
    doneImg.classList.add('doneImg')
    doneImg.src = 'checkmark.png'
    doneButton.append(doneImg)

    doneButton.addEventListener('click', function () {
        card2.classList.toggle('taskDone')
        updateCount()
    })

    card2.append(deleteButton, taskEl, secDiv, doneButton)
    tasksDiv.appendChild(card2)

    task.value = ""
    updateCount()
})

function toast() {
    let meg = document.createElement('div')
    meg.classList.add('meg')

    let warnimg = document.createElement('img')
    warnimg.classList.add('warnimg')
    warnimg.src = 'caution.png'

    let warText = document.createElement('h4')
    warText.textContent = "you have to enter a Task!"

    meg.append(warnimg, warText)
    document.body.appendChild(meg)

    setTimeout(() => {
        meg.classList.add('removmasg')
    }, 2000)

    setTimeout(() => {
        meg.remove()
    }, 2500)


}


function updateCount() {
    let total = document.querySelectorAll('.card2').length
    let done = document.querySelectorAll('.card2.taskDone').length

    spanNum1.textContent = done
    spanNum2.textContent = total

    let percent = total === 0 ? 0 : (done / total) * 100
    fill.style.width = percent + '%'
}

updateCount()