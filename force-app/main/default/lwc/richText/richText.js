import { LightningElement, api } from 'lwc';

export default class RichText extends LightningElement {
       @api recordId;
        get myVal() {
            return '**Hello!**';
        }
}
