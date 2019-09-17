import { LightningElement, api, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Test__c from '@salesforce/schema/Test__c';

export default class AcctList extends LightningElement {
    @api text;
        get text2() {
            this.text='hi';
            return this.text;
        }

    @api acctL
        get acctList(){
            return this.acctL;
        }

        @api custom
        get customL(){
            return this.custom;
        }
}