import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionIntro.module.css';

import JaegerImage from './images/Jaegerco_sales-lady.png';
import businessImage from './images/jaegerco_business-front.png';
import aboutImage from './images/Jaegerco_guy-at-computer.png';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, pageTitle) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name={pageTitle} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionIntro.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionIntro = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionIntro.title" />
      </div>
      <div className={css.locations}>
      {locationLink(
          'Jaegers',
          JaegerImage,
          'Jaegers'
        )}
        {locationLink(
          'Businesses',
          businessImage,
          'Businesses'
        )}
        {locationLink(
          'Us',
          aboutImage,
          'AboutPage'
        )}
      </div>
    </div>
  );
};

SectionIntro.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionIntro.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionIntro;
