const compass = document.getElementById('compass');
const msg = document.getElementById('msg');
const angledeg = document.getElementById('angle-deg');
const angledir = document.getElementById('angle-dir');
const locationElem = document.getElementById('location');
const coordsElem = document.getElementById('coords');
const shareLinkElem = document.getElementById('share-link');
const locationSwitch = document.getElementById("locationSwitch");

let simulatedAngle = 0;

function isAppleDevice() {
    return [
        "iPad Simulator", "iPhone Simulator", "iPod Simulator",
        "iPad", "iPhone", "iPod"
    ].includes(navigator.platform) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

function handleOrientationEvent(e) {
    let calculatedHeading;
    if (e.webkitCompassHeading) {
        calculatedHeading = e.webkitCompassHeading - 180;
    } else {
        calculatedHeading = 180 + e.alpha;
    }
    calculatedHeading -= 180;
    if (calculatedHeading > 360) calculatedHeading -= 360;
    setCompassDirection(calculatedHeading);
}

function setCompassDirection(angle) {
    angledeg.innerHTML = Math.round((360 - angle) * 10) / 10 + "&deg;";
    angledir.innerHTML = getDirectionLabel(angle);
    compass.style.transform = "rotate(" + angle + "deg)";
}

function getDirectionLabel(angle) {
    if (angle >= 22.5 && angle < 67.5) return "North West";
    if (angle >= 67.5 && angle < 112.5) return "West";
    if (angle >= 112.5 && angle < 157.5) return "South West";
    if (angle >= 157.5 && angle < 202.5) return "South";
    if (angle >= 202.5 && angle < 247.5) return "South East";
    if (angle >= 247.5 && angle < 292.5) return "East";
    if (angle >= 292.5 && angle < 337.5) return "North East";
    return "North";
}

if (isAppleDevice()) {
    window.addEventListener("deviceorientation", handleOrientationEvent);
} else {
    window.addEventListener("deviceorientationabsolute", handleOrientationEvent, true);
}

// document.addEventListener("DOMContentLoaded", function () {

//     function supportsOrientation() {
//         return 'ondeviceorientation' in window || 'ondeviceorientationabsolute' in window;
//     }

//     function showNotSupportedMessage() {
//         msg.classList.remove("d-none");
//     }

//     if (supportsOrientation()) {
//         if (isAppleDevice()) {
//             window.addEventListener("deviceorientation", handleOrientationEvent);
//         } else {
//             window.addEventListener("deviceorientationabsolute", handleOrientationEvent, true);
//         }
//     } else {
//         showNotSupportedMessage();
//     }

//     if (localStorage.getItem('locationEnabled') === 'true') {
//         locationSwitch.checked = true;
//     } else {
//         locationSwitch.checked = false;
//     }

//     locationSwitch.addEventListener("change", function () {
//         if (this.checked && "geolocation" in navigator) {
//             navigator.geolocation.getCurrentPosition(function (position) {
//                 const latitude = position.coords.latitude;
//                 const longitude = position.coords.longitude;
//                 coordsElem.textContent = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
//                 shareLinkElem.href =
//                     `https://www.google.com/maps/?q=${latitude},${longitude}`;
//                 locationElem.classList.remove('d-none');
//             });
//             localStorage.setItem('locationEnabled', 'true');
//         } else {
//             coordsElem.textContent = '';
//             shareLinkElem.href = '#';
//             locationElem.classList.add('d-none');
//             localStorage.setItem('locationEnabled', 'false');
//         }
//     });

//     function copyLocationLink() {
//         var textArea = document.createElement("textarea");
//         textArea.value = document.getElementById("chromeLink").textContent;
//         document.body.appendChild(textArea);
//         textArea.select();
//         document.execCommand("Copy");
//         textArea.remove();
//     }

//     document.getElementById("copyButton").addEventListener("click", copyLocationLink);

//     var html = document.querySelector('html');
//     var initialTheme = html.getAttribute('data-bs-theme');
//     compass.src = initialTheme === 'dark' ? 'https://onlinedigitalcompass.com/images/compass-light.png' : 'https://onlinedigitalcompass.com/images/compass-dark.png';

//     var observer = new MutationObserver(function (mutations) {
//         mutations.forEach(function (mutation) {
//             if (mutation.attributeName === 'data-bs-theme') {
//                 var newTheme = html.getAttribute('data-bs-theme');
//                 compass.src = newTheme === 'dark' ? 'https://onlinedigitalcompass.com/images/compass-light.png' :
//                     'https://onlinedigitalcompass.com/images/compass-dark.png';
//             }
//         });
//     });

//     var config = {
//         attributes: true,
//         attributeFilter: ['data-bs-theme']
//     };
//     observer.observe(html, config);
// });
function showDialog() {
    let dialog = document.getElementById('dialog');
    dialog.classList.remove('hidden');
    setTimeout(() => {
        dialog.classList.remove('opacity-0');
    }, 20);
}


function hideDialog() {
    let dialog = document.getElementById('dialog');
    dialog.classList.add('opacity-0');
    setTimeout(() => {
        dialog.classList.add('hidden');
    }, 20);
}
var sideMenu = document.getElementById('side-menu');
function openMenu() {
    sideMenu.classList.remove('right-[-55%]');
    sideMenu.classList.add('right-0');
}

function closeMenu() {
    sideMenu.classList.remove('right-0');
    sideMenu.classList.add('right-[-55%]');
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        
        showSuccess();

        // reset to default state
        setTimeout(() => {
            resetToDefault();
        }, 2000);
   
    });
    const $defaultMessage = document.getElementById('copylinkbutton');
        const $successMessage = document.getElementById('removelinkbutton');
    const showSuccess = () => {
        $defaultMessage.classList.add('hidden');
        $successMessage.classList.remove('hidden');
    }

    const resetToDefault = () => {
        $defaultMessage.classList.remove('hidden');
        $successMessage.classList.add('hidden');
    }
    
}
let calibrationdialog = document.getElementById('calibrationdialog');
calibrationdialog.classList.remove('hidden');
    setTimeout(() => {
        calibrationdialog.classList.remove('opacity-0');
    }, 20);
    function hidecalibrationDialog() {
        let calibrationdialog = document.getElementById('calibrationdialog');
        calibrationdialog.classList.add('opacity-0');
        setTimeout(() => {
            calibrationdialog.classList.add('hidden');
        }, 20);
    }

