// assign delete button to trash icon
const deleteBtn = document.querySelectorAll('.fa-trash')
// assign items to the list items
const item = document.querySelectorAll('.item span')
// assign completed items 
const itemCompleted = document.querySelectorAll('.item span.completed')

// array of delete buttons
Array.from(deleteBtn).forEach((element)=>{
    // when clicked run deleteItem
    element.addEventListener('click', deleteItem)
})
// array of list items
Array.from(item).forEach((element)=>{
    // when clicked run markComplete
    element.addEventListener('click', markComplete)
})
// array of completed items
Array.from(itemCompleted).forEach((element)=>{
    // when clicked run markUnComplete
    element.addEventListener('click', markUnComplete)
})

// asynchronous function to delete item
async function deleteItem(){
    // item text = text clicked on
    const itemText = this.parentNode.childNodes[1].innerText
    // try
    try{
        // wait for data to return and store in variable response
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'itemFromJS': itemText
            })
          })
        // store json response in data
        const data = await response.json()
        // log data
        console.log(data)
        // reload page
        location.reload()
    //log errors if they exist
    }catch(err){
        console.log(err)
    }
}

// asynchronous function to mark complete
async function markComplete(){
    //select the text of the item
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        // store response in the variable to mark complete
        const response = await fetch('markComplete', {
            // put method
            method: 'put',
            // declare content type as json
            headers: {'Content-Type': 'application/json'},
            // convert body content to json
            body: JSON.stringify({
                // item(s) to include
                'itemFromJS': itemText
            })
          })
        // data variable from response
        const data = await response.json()
        // log data locally
        console.log(data)
        // reload with new data
        location.reload()
    // log errors if they exist
    }catch(err){
        console.log(err)
    }
}

// asynchronous function to mark uncomplete
async function markUnComplete(){
    // select the text of the item
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        // store response in the variable to mark uncomplete
        const response = await fetch('markUnComplete', {
            // put method
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        // response from server
        const data = await response.json()
        // log data locally
        console.log(data)
        // refresh page
        location.reload()
    // log errors if they exist
    }catch(err){
        console.log(err)
    }
}