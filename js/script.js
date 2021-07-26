

const display = document.querySelector('.container > .row');

// select element
const selectField = document.getElementById('filter');

const inputField = document.getElementById('search');

//# FUNZIONI

// #dinamic filter type

const renderOptions = (arr, targetElement) => {


    let iconTypes = [];
    arr.forEach((item) => {
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

    targetElement.innerHTML = selectOption;

};

// render icon type
renderOptions(icons, selectField);


// icon render

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



// #Filter



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



//# Bonus search per nome in tempo reale
inputField.addEventListener('keyup', () => {

    const inputValue = inputField.value;

    const search = icons.filter((item) => item.name.includes(inputValue));
    renderIcons(search, display);

});



















