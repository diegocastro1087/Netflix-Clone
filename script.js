const question = document.querySelectorAll('.boxquestion')

question.forEach((thisQuestion, index) => {
    const descriptionquestion = thisQuestion.querySelector('.description_box')
    const questionicon = thisQuestion.querySelector('.material-symbols-outlined')
    thisQuestion.addEventListener('click', ()=>{
        descriptionquestion.classList.toggle('description_box_open')
        questionicon.classList.toggle('add')
    })
}
)
