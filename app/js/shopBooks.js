
var listShow = document.querySelector('.categories__inner');
var treeLis = listShow.querySelectorAll('.categories__inner__list');

function myFun() {
    for (var i = 0; i < treeLis.length; i++) {
        var li = treeLis[i];
        var span = document.createElement('span');
        span.className += 'categories__inner__list__titel';
        li.insertBefore(span, li.firstChild);
        span.appendChild(span.nextSibling);
    }
      
    listShow.addEventListener('click', function (event) {
        var targetList = event.target;
        
        if (targetList.tagName != 'SPAN') {
            return;
        }
        
        var childrenContainer = targetList.parentNode.getElementsByTagName('ul')[0];
        console.log(childrenContainer);
        if (!childrenContainer) return;
        childrenContainer.hidden = !childrenContainer.hidden;
    });
}
myFun();
