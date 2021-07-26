

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
                                <i class="${item.family} ${item.prefix}${item.name} fa-2x"></i>
                                <h2>${item.name.toLocaleUpperCase()}</h2>
                            </div>
                        </div>
                    </div>`;


        targetElement.innerHTML = itemTemplate;


    });

}

// stampa su html con funzione


const selectField = document.getElementById('filter');

selectField.addEventListener('change', () => {

    const selectValue = selectField.value;

    if (selectValue === 'all') {

        renderIcons(icons, display);
    }


    const filtered = [];
    icons.forEach((item) => {


        if (selectValue === `${item.type}`) {

            filtered.push(item);
        }
        renderIcons(filtered, display)

    });

})


