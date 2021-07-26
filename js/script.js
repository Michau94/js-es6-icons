

const display = document.querySelector('.container > .row');


//# FUNZIONI


// stampa template icone

const renderIcons = (arr, targetElement) => {

    let itemTemplate = '';
    arr.forEach((item) => {


        itemTemplate +=
            ` <div class="col-4">
                        <div class="card text-center">
                            <div class="card-body">
                                <i class="${item.family} ${item.prefix}${item.name} fa-2x ${item.type}"></i>
                                <h2>${item.name.toLocaleUpperCase()}</h2>
                            </div>
                        </div>
                    </div>`;


        targetElement.innerHTML = itemTemplate;


    });

}



// #Filtro

// select element
const selectField = document.getElementById('filter');


// on change
selectField.addEventListener('change', () => {

    const selectValue = selectField.value;

    if (selectValue === 'all') {
        renderIcons(icons, display);
        return;
    }


    const filtered = icons.filter((item) => selectValue === item.type);
    renderIcons(filtered, display);

});


// #dinamic filter type

let iconTypes = [];
icons.forEach((item) => {
    if (!iconTypes.includes(item.type)) {
        iconTypes.push(item.type);
    }
})

console.log(iconTypes);


selectOption = '<option value="all" selected>All</option>';

iconTypes.forEach((type) => {

    selectOption += `<option value="${type}" selected>${type}</option>`;

    console.log(type);
});

selectField.innerHTML = selectOption;










