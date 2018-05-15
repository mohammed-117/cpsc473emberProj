import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({

  responseMessage: '',
  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),
  isLongEnough: gte("yourProperty.length", 5),
  isBothTrue: and('firstComputedProperty', 'secondComputedProperty'),

  actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you ${this.get('name')},for your payment!`);
      this.set('name', '');
      this.set('email', '');
      this.set('address', '');
      this.set('city', '');
      this.set('state', '');
      this.set('zip', '');
      this.set('cardName', '');
      this.set('cardNum', '');
      this.set('exp', '');
      this.set('cvv', '');
    }
  }

});
