let _width = $(window).width()*0.99; let _height = $(window).height() * 0.8;
var canv;
var size = Math.floor(_width/8);
var arr = [size]; var state = [size];
var start = 0; var end = size - 1;
let rectW = Math.floor(_width/size); let button; var sorting; let backToSA;

function setup() {

    canv = createCanvas(_width, _height);
    canv.position(_width*0.005, _height*0.2);
    for(let i = 0; i < size; i++ ) {
        arr[i] = _height * Math.random();
        state[i] = -1;
    }
    let h = createElement('h1', 'Quick Sort');
    h.style('color', '#222222');
    h.position(_width*0.01, 0);
    h.size(_width, _height/5)
    button = createButton('Restart Sort (sort must be completed)');
    button.position(10, 70);
    
    backToSA = createA('https://spencerdwallace.github.io/sorting_algorithms', 'Back to Sorting Algorithms', '_self');
    backToSA.position(_width/2 - textWidth('Back to Sorting Algorithms')/2,30);
    
    quickSort(arr, start, end);
}

function draw() {
    clear();
    background(10);

    for(let i = 0; i < size; i++ )
    {
        if (state[i] == 0) {
            fill('#EE5555');
        } else if (state[i] == 1) {
            fill('#55FF55');
        } else {
            fill('#FFFFFFF');
        }

        rect(i*rectW, _height - arr[i], rectW, arr[i]);
    }

    button.mousePressed(resetArr);

}

function resetArr()
{
    if(!sorting)
    setup();
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(arr, n1, n2)
{
    await sleep(15);
    let temp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = temp;
}

async function partition(arr, low, high)
{
        // pivot (Element to be placed at right position)
    let pivot = arr[high];
    state[high] = 0;
    var i = low - 1; // Index of smaller element and indicates the
          //state[i] = 0;             // right position of pivot found so far

    for (let j = low; j <= high - 1; j++)
    {
            // If current element is smaller than the pivot
        if (arr[j] < pivot)
        {
            if(state[i] != 1)
                state[i] = -1;
            i++;
            state[i] = 0;// increment index of smaller element
            await swap(arr, i, j);

        }
    }
    state[i] = 1;
    await swap(arr, i + 1, high);

    return (i + 1);

}

async function quickSort(arr, start, end)
{
    if (start >= end) {
        return;
    }
        /* pi is partitioning index, arr[pi] is now
           at right place */
    sorting = true;
    let partitionIndex = await partition(arr, start, end);
    //state[partitionIndex] = -1;
    //await Promise.all([quickSort(arr, start, partitionIndex - 1), quickSort(arr, partitionIndex + 1, end)])
    for(let i = 0; i < start; i++){
        state[i] = 1;
    }
    await quickSort(arr, start, partitionIndex - 1);

    await quickSort(arr, partitionIndex + 1, end);

    for(let i = start; i <= end; i++){
        state[i] = 1;
    }
    sorting = false;
}

