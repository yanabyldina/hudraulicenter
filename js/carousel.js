var buttonBackward = document.getElementById('buttonBackward');
var buttonForward = document.getElementById('buttonForward');

buttonForward.onclick = doStep;
buttonBackward.onclick = doStep;


function doStep() {
    buttonForward.onclick = null;
    buttonBackward.onclick = null;

    var container = document.getElementById('container');
    var list = container.getElementsByTagName('ul')[0];
    var step = parseInt(getComputedStyle(list.firstElementChild).width);
    var listItems = list.getElementsByTagName('li');
    var maxPosition = (listItems.length - 1) * step;

    for (var i = 0; i < listItems.length; i++) {
        var itemLeft = parseInt(getComputedStyle(listItems[i]).left);
        var nextStep = (this.id == 'buttonForward') ? itemLeft - step : itemLeft + step;

        if (nextStep > 0) nextStep = 0;
        if (nextStep < (0 - maxPosition)) nextStep = (0 - maxPosition);

        listItems[i].style.left = nextStep + 'px';
    }

    setTimeout(function() {
        buttonForward.onclick = doStep;
        buttonBackward.onclick = doStep;
    }, 200);

}
