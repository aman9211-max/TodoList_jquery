let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let inpNewTask = $('#inpNewTask');
let btnCleanup = $('#btnCleanup')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort');
let count = $('#count');
function addItem() {
    let listitem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })
    listitem.click((event) => {
        $(event.target).toggleClass('done')
        count.text($('#ulTasks :not(.done)').length)
    })
    if (inpNewTask.val().length > 0)
        ulTasks.append(listitem);
    inpNewTask.val('');
    toggleinputbuttons();
    // console.log(inpNewTask.val())
}

function toggleinputbuttons() {
    btnReset.prop('disabled', $('#ulTasks').length = 0);
    btnAdd.prop('disabled', inpNewTask.val() == '');
    btnSort.prop('disabled', ulTasks.children().length < 1);
    btnCleanup.prop('disabled', ulTasks.children().length < 1);
    count.text(ulTasks.children().length);
}
inpNewTask.on('input', toggleinputbuttons)

inpNewTask.keypress((e) => {
    if (e.which == 13) addItem();
})


function clearDone() {
    $('#ulTasks .done').remove();
    toggleinputbuttons();
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks);
}

btnAdd.click(addItem);

btnReset.click(() => {
    let p = alert('Do you want to reset all tasks');
    if (p = 'ok') {
        $(ulTasks).empty();
        toggleinputbuttons();
    }

})
btnCleanup.click(clearDone);
btnSort.click(sortTasks);

