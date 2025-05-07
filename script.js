const displayOne = () => {
    var tab = document.getElementById("tab1");
    var tabTwo = document.getElementById("tab2");
    var tabThree = document.getElementById("tab3");
    var tabFour = document.getElementById("tab4");

    tab.style.display = "block";
    tabTwo.style.display = "none";
    tabThree.style.display = "none";
    tabFour.style.display = "none";
}

const displayTwo = () => {
    var tab = document.getElementById("tab1");
    var tabTwo = document.getElementById("tab2");
    var tabThree = document.getElementById("tab3");
    var tabFour = document.getElementById("tab4");

    tab.style.display = "none";
    tabTwo.style.display = "block";
    tabThree.style.display = "none";
    tabFour.style.display = "none";
}

const displayThree = () => {
    var tab = document.getElementById("tab1");
    var tabTwo = document.getElementById("tab2");
    var tabThree = document.getElementById("tab3");
    var tabFour = document.getElementById("tab4");

    tab.style.display = "none";
    tabTwo.style.display = "none";
    tabThree.style.display = "block";
    tabFour.style.display = "none";
}

const displayFour = () => {
    var tab = document.getElementById("tab1");
    var tabTwo = document.getElementById("tab2");
    var tabThree = document.getElementById("tab3");
    var tabFour = document.getElementById("tab4");

    tab.style.display = "none";
    tabTwo.style.display = "none";
    tabThree.style.display = "none";
    tabFour.style.display = "block";
}

displayFour();
displayTwo();
displayThree();
displayOne();