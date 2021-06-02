let _width; let _height; let homeDir; let quickSort; let selSort; let insSort;

function setup(){
    _width = $(window).width()*0.98;
    _height = $(window).height()*0.97;
    createCanvas(_width, _height);
    algos();
}

function draw(){
    clear();
    background(255);

}

function algos(){
    fill(25);
    textStyle(NORMAL);


    let projectHeader = createElement('h1', "Sorting Algorithms");
    projectHeader.position(_width*0.01, 0)
    homeDir =  createA('https://spencerdwallace.github.io/Home', 'Back to Home Directory', "_self");
    homeDir.position(_width/2 - textWidth('Back to Home Directory')/2, 30);
    quickSort = createA('https://spencerdwallace.github.io/sorting_algorithms/Quick%20Sort/', 'Quick Sort', "_self");
    quickSort.position(_width*0.01, _height* 0.1);
    selSort = createA('https://spencerdwallace.github.io/sorting_algorithms/Selection%20Sort/', 'Selection Sort', "_self");
    selSort.position(_width*0.01, _height* 0.15);
    insSort = createA('https://spencerdwallace.github.io/sorting_algorithms/Insertion%20Sort/', 'Insertion Sort', "_self");
    insSort.position(_width*0.01, _height* 0.2);

}
