import $ from 'jquery';
import './header.js';
import { wiLoad } from './widev.js';

['citas', 'biblia', 'musica', 'acerca'].forEach(v => {
  wiLoad(`#${v}`, async () => {
    const { [v]: fn } = await import(`./web/${v}.js`); fn();
  });
});

import './footer.js';