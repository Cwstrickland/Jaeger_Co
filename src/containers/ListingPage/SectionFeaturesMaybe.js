import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import { array, shape, string } from 'prop-types';

import css from './ListingPage.module.css';

const SectionFeaturesMaybe = props => {
  const { options, publicData } = props;
  if (!publicData) {
    return null;
  }

  const salesRole = publicData.salesRole;
  const salesRoleOption = options.find(
    option => option.key === salesRole
  );
  
  return salesRoleOption ? (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.featuresTitle" />
      </h2>
      <p ><strong>Sales Role:</strong> {salesRoleOption.label}</p>
    </div>
  ) : null;
};

SectionFeaturesMaybe.propTypes = {
  options: array.isRequired,
  publicData: shape({
    salesRole: string,
  }).isRequired,
};


export default SectionFeaturesMaybe;
