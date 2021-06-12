import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import {
  intlShape,
  injectIntl,
  FormattedMessage,
} from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { required } from '../../util/validators';
import { Form, Button, FieldSelect } from '../../components';

// Create this file using EditListingFeaturesForm.module.css
// as a template.
import css from './EditListingPaymentForm.module.css';

export const EditListingPaymentFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
      } = formRenderProps;



      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          
          <h2>Payment setup</h2>
          <p>Please have your account and routing number ready to setup your payout. This can be changes later if needed.</p>

          <h2>Verification</h2>
          <p>This is the most important step because it’s how we make sure all the Jaegers and businesses are legitimate. Click the get verified button after entering your payout preferences. You will make a quick stop on our page with Stripe for your financial verification. Be sure to complete all steps in this process to complete your signup. </p>

          <h3>Why we need this, you ask?</h3>
          <p>So you can make legitimate money, of course. This info is needed to get you paid, and for 1099s to be created for tax purposes. All you data is secure, only used for legal and tax purposes, and not shared with anyone else. </p>



          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingPaymentFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingPaymentFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
  
};

export default compose(injectIntl)(EditListingPaymentFormComponent);