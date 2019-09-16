import { LightningElement, api } from 'lwc';

export default class RichText extends LightningElement {
       @api RichTextInput;
        get richInput() {
            return this.RichTextInput;
        }
}
