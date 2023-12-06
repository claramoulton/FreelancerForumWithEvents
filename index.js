const names = ['Dr. Slice', 'Dr. Pressure', 'Prof. Possibility', 'Prof. Prism', 'Dr. Impulse', 'Prof. Spark', 'Dr. Wire', 'Prof. Goose'];
const occupations = ['gardener', 'programmer', 'teacher', 'gardner'];

const productsList = window.document.querySelector('#productsList');
const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', function(){
    products.push(generateRandom());
    render();
});

productsList.addEventListener('click', (ev)=> {
    if(ev.target.tagName === 'LI'){
        const li = ev.target;
        const ul = li.parentNode;
        const children = Array.from(ul.children);
        const idx = children.indexOf(li);
        products.splice(idx, 1);
        render();
    };
});

const spanAverageRate = document.querySelector('#spanAverageRate');

function generateRandom(){
    const nameIdx = Math.floor(Math.random()*names.length);
    const name = names[nameIdx];
    const occupationIdx = Math.floor(Math.random()*occupations.length);
    const occupation = occupations[occupationIdx];
    const price = Math.ceil(Math.random() * 100);

    return {
        name,
        occupation,
        price
    };
};

function render(){
    
    let sum = 0;
    products.forEach((product)=> {
        sum = sum + product.price;
    });
    const average = sum / products.length;
    spanAverageRate.innerHTML = average.toFixed(2);

    const lis = products.map(function(product){
        return `<li>${product.name} <br>
        price: $${product.price} <br>
        occupation: ${product.occupation}</li>`;
    }).join('');
    productsList.innerHTML = lis;
};

const products = [];
products.push(generateRandom());
products.push(generateRandom());

render();
