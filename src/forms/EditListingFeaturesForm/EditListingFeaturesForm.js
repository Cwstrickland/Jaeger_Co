import React from 'react';
import { bool, func, shape, string, arrayOf } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { compose } from 'redux';
import { intlShape,
  injectIntl, FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
import { required } from '../../util/validators';
import config from '../../config';
import { Button, FieldCheckboxGroup, FieldSelect , Form } from '../../components';

import css from './EditListingFeaturesForm.module.css';

const EditListingFeaturesFormComponent = props => (
  <FinalForm
    {...props}
    mutators={{ ...arrayMutators }}
    render={formRenderProps => {
      const {
        disabled,
        ready,
        rootClassName,
        className,
        name,
        intl,
        invalid,
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
        fetchErrors,
        filterConfig,
        industryOptions,
        experianceOptions,
      } = formRenderProps;

      const classes = classNames(rootClassName || css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = disabled || submitInProgress;

      const { updateListingError, showListingsError } = fetchErrors || {};
      const errorMessage = updateListingError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.updateFailed" />
        </p>
      ) : null;

      const errorMessageShowListing = showListingsError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingFeaturesForm.showListingFailed" />
        </p>
      ) : null;

      // custom field const's
      //industry field

      const industryPlaceholder = intl.formatMessage({
        id: 'EditListingFeatureForm.industryPlaceholder',
      });

      const industryRequired = required(
        intl.formatMessage({
          id: 'EditListingFeaturesForm.industryRequired',
        })
      );

      const FocusMessage = intl.formatMessage({ id: 'EditListingFeaturesForm.FocusMessage' });

      //years of experiance

      const experiancePlaceholder = intl.formatMessage({
        id: 'EditListingFeatureForm.experiancePlaceholder',
      });

      const experianceRequired = required(
        intl.formatMessage({
          id: 'EditListingFeaturesForm.experianceRequired',
        })
      );

      const ExperianceMessage = intl.formatMessage({ id: 'EditListingFeaturesForm.ExperianceMessage' });

      // const medium = 'salesMedium';
      // const mediumOptions = findOptionsForSelectFilter( medium, filterConfig);

      // const experiance = 'yearsExperiance';
      // const experianceOptions = findOptionsForSelectFilter( experiance, filterConfig);

      // const focusKey = 'industryFocus';
      // const focusOptions = findOptionsForSelectFilter( focusKey, filterConfig);

      
      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <FieldSelect
            className={css.features}
            name="industryFocus"
            id="industryFocus"
            label={FocusMessage}
            validate={industryRequired}
          >
            <option value="">{industryPlaceholder}</option>
            {industryOptions.map(c => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </FieldSelect> 

          <FieldSelect
            className={css.features}
            name="yearsExperiance"
            id="yearsExperiance"
            label={ExperianceMessage}
            validate={experianceRequired}
          >
            <option value="">{experiancePlaceholder}</option>
            {experianceOptions.map(c => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </FieldSelect> 
          
          {/* <FieldSelect className={css.features} id={experiance} name={experiance} label={"Years of Experiance"}>
            {experianceOptions.map(l => (
              <option key={l.key} value={l.key}> 
                {l.label}
              </option>
            ))}
          </FieldSelect>

          <FieldCheckboxGroup className={css.features} id={medium} name={medium} options={mediumOptions} label={"Sales Channels"}/> */}
          
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

EditListingFeaturesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  fetchErrors: null,
  filterConfig: config.custom.filters,
};

EditListingFeaturesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
  name: string.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  filterConfig: propTypes.filterConfig,
  industryOptions: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default compose(injectIntl)(EditListingFeaturesForm);
