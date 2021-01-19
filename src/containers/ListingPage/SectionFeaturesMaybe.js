import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import { array, shape, string } from 'prop-types';

import css from './ListingPage.module.css';

const SectionFeaturesMaybe = props => {
  const { roleOptions, focusOptions, experianceOptions, mediumOptions, publicData } = props;
  if (!publicData) {
    return null;
  }

  const salesRole = publicData.salesRole;
  const salesRoleOption = roleOptions.find(
    option => option.key === salesRole
  );

  const industry = publicData.industryFocus;
  const industryOption = focusOptions.find(
    option => option.key === industry
  );

  const experiance = publicData.yearsExperiance;
  const experianceOption = experianceOptions.find(
    option => option.key === experiance
  );

  const medium = publicData.salesMedium;
  const mediumOption = mediumOptions.find(
    option => option.key === medium
  );
  
  
  return  (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>

      <p ><strong>Sales Role:</strong> {salesRoleOption.label}</p>
      <p ><strong>Industry Focus:</strong> {industryOption.label}</p> 
      <p ><strong>Years of Experiance:</strong> {experianceOption.label}</p>
      <p ><strong>Sales Medium:</strong> {mediumOption.label}</p>
    </div>
  );
};

SectionFeaturesMaybe.propTypes = {
  options: array.isRequired,
  publicData: shape({
    salesRole: string,
    industry: string,
    experiance: string,
  }).isRequired,
};


export default SectionFeaturesMaybe;
