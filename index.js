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


    listDiv.addEventListener('click', () => {
        const allListItems = document.querySelectorAll('.list-item');
        allListItems.forEach(item => item.classList.remove('clicked'));
        listDiv.classList.add('clicked');
    });

    const clearBtn = listDiv.querySelector('.clear-btn');
    clearBtn.addEventListener('click', () => {
        event.stopPropagation();
        listDiv.remove();
    });
    listsDisplay.appendChild(listDiv);

    listNameInput.value = 'New List';

}

createListButton.addEventListener('click', createList);
