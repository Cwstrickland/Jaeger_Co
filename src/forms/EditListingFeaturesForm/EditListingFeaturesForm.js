import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FormattedMessage } from '../../util/reactIntl';
import { findOptionsForSelectFilter } from '../../util/search';
import { propTypes } from '../../util/types';
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
        handleSubmit,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
        filterConfig,
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

      const medium = 'salesMedium';
      const mediumOptions = findOptionsForSelectFilter( medium, filterConfig);

      const experiance = 'yearsExperiance';
      const experianceOptions = findOptionsForSelectFilter( experiance, filterConfig);

      const focusKey = 'industryFocus';
      const focusOptions = findOptionsForSelectFilter( focusKey, filterConfig);

      
      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}
          {errorMessageShowListing}

          <FieldSelect className={css.features} id={focusKey} name={focusKey} label={"Industry Focus"}>
            {focusOptions.map(o => (
              <option key={o.key} value={o.key}> 
                {o.label}
              </option>
            ))}
          </FieldSelect>
          <FieldSelect className={css.features} id={experiance} name={experiance} label={"Years of Experiance"}>
            {experianceOptions.map(l => (
              <option key={l.key} value={l.key}> 
                {l.label}
              </option>
            ))}
          </FieldSelect>

          <FieldCheckboxGroup className={css.features} id={medium} name={medium} options={mediumOptions} label={"Sales Channels"}/>

          <p className={css.error2}>  
            <FormattedMessage id="EditListingFeaturesForm.ensureVerified" />
          </p>
          
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
};

const EditListingFeaturesForm = EditListingFeaturesFormComponent;

export default EditListingFeaturesForm;
