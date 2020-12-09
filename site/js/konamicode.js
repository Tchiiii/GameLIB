/*
 * konamicode.js
 * VILLENEUVE Noé
 */
const pressed = [];
    	const secretCode = 'cookie';

		window.addEventListener('keyup', (e) => {
			/*console.log(e.key);*/
			pressed.push(e.key);
			pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
			if (pressed.join('').includes(secretCode)) {
				/*console.log('DING DING !');*/
				KonamiCode();
			}
			/*console.log(pressed);*/
        });

function KonamiCode() {
    window.open('html\\clicker.html');
}