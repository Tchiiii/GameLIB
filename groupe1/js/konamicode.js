/*
 * konamicode.js
 * @author VILLENEUVE Noé
 */
const pressed = [];
    	const secretCode = 'cookie';

		window.addEventListener('keyup', (e) => {
			/*console.log(e.key);*/
			pressed.push(e.key);
			pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
			if (pressed.join('').includes(secretCode)) {
				/*console.log('DING DING !');*/
				window.open('html\\clicker.html')
			}
			/*console.log(pressed);*/
        });