var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var gesuredZone = document;

gesuredZone.addEventListener('touchstart', function(event) {
    console.log(event);
    console.log(touchstartX = event.changedTouches[0].screenX);
    console.log(touchstartY = event.changedTouches[0].screenY);
}, false);

gesuredZone.addEventListener('touchend', function(event) {
    console.log(event);
    console.log(touchendX = event.changedTouches[0].screenX);
    console.log(touchendY = event.changedTouches[0].screenY);
    handleGesure();
}, false); 

function handleGesure() {
    var swiped = 'swiped: ';
    if ((touchendX - touchstartX) <= -130) {
        console.log(swiped + 'left!');
        document.dispatchEvent(new KeyboardEvent('keydown', {keyCode: 39}));
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 39}));
    }
    else if ((touchendX - touchstartX) >= 130) {
        console.log(swiped + 'right!');
        document.dispatchEvent(new KeyboardEvent('keydown', {keyCode: 37}));
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 37}));
    }
    else if ((touchendY - touchstartY) <= -130) {
        console.log(swiped + 'down!');
        document.dispatchEvent(new KeyboardEvent('keydown', {keyCode: 40}));
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 40}));
    }
    else if ((touchendY - touchstartY) >= 130) {
        console.log(swiped + 'up!');
        document.dispatchEvent(new KeyboardEvent('keydown', {keyCode: 38}));
        document.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 38}));
    }
}
