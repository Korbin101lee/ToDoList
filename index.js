const listNameInput = document.getElementById('list-name');
const createListButton = document.getElementById('create-list-btn');
const listsDisplay = document.getElementById('lists-display');
const listItems = document.getElementsByClassName('list-item');


function createList() {
    const listName = listNameInput.value.trim();

    if (listName === '') {
        alert('Please Enter a list name');
        return;
    }

    const listDiv = document.createElement('div');
    listDiv.className = 'list-item';
    listDiv.innerHTML = `
    <h3>${listName}</h3>
    <div class="listContainer">
    <div class="input-container">
    <button type="button" class="clear-btn" aria-label="Delete list">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 svg-icon"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    </button>
    </div>
    </div>
`;

    listsDisplay.appendChild(listDiv);
    listNameInput.value = 'New List';
}

listsDisplay.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.list-item') && !target.closest('.clear-btn')) {
        const listItem = target.closest('.list-item');

        const allListItems = document.querySelectorAll('.list-item');
        allListItems.forEach(item => item.classList.remove('clicked'));

        listItem.classList.add('clicked');
    }

    if (target.closest('.clear-btn')) {
        event.stopPropagation(); // Prevent the parent '.list-item' click handler from being triggered
        const listItem = target.closest('.list-item');
        if (listItem) {
            listItem.remove();
        }
    }
});


createListButton.addEventListener('click', createList);


const toDoButton = document.getElementById('to-do-button');
const toDoAddContainer = document.getElementById('to-Do-Add-Container');
const cancelButton = document.getElementById('cancel-button');  
const addButton = document.getElementById('add-button');
const toDoContainer = document.getElementById('to-do-container');
const toDoTitle = document.getElementById('to-do-name');
const datePicker1 = document.getElementById('date-picker1');
const datePicker2 = document.getElementById('date-picker2');

toDoButton.addEventListener('click', () => {
    toDoAddContainer.style.display = 'block';
});

cancelButton.addEventListener('click', () => {
    toDoAddContainer.style.display = 'none';
});

addButton.addEventListener('click', addListItem);


function addListItem(event) {
    event.preventDefault(); // Prevents form submission

    if (toDoTitle.value.trim() === '') {
        alert('Please enter a title');
        return;
    }

    if (datePicker1.value.trim() === '') {
        alert('Please enter a start date');
        return;
    }

    if (datePicker2.value.trim() === '') {
        alert('Please enter a end date');
        return;
    }
    
    const newToDoItem = document.createElement('div');
    newToDoItem.classList.add('toDoItem');

    newToDoItem.innerHTML = `
        <div class="toDoHeader">
            <input type="checkbox" class="priority-toggle" />
            <h6 class="toDoTitle">${toDoTitle.value}</h6>
        </div>
        <p class="dateText">${datePicker1.value} - ${datePicker2.value}</p>
    `;

    toDoContainer.appendChild(newToDoItem);

    toDoTitle.value = "";
    datePicker1.value = "";
    datePicker2.value = "";

}