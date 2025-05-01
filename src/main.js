import Alpine from 'alpinejs';
import { dropdown } from './components/dropdown.js';
import { formController } from './components/formController.js';
import { numberInput } from './components/numberInput.js';
import { moneyInput } from './components/moneyInput.js';
import { selector } from './components/selector.js';
import './style.css';

window.dropdown = dropdown;
window.formController = formController;
window.numberInput = numberInput;
window.moneyInput = moneyInput;
window.selector = selector;

window.Alpine = Alpine;
Alpine.start();
