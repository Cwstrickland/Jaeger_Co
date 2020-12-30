import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './BusinessFAQ.module.css';

const BusinessFAQ = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <div>
        <h2>General Questions</h2>

        <h3>How Jeager Co. Works.</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I sign up?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I post my profile as a Jaeger?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I get paid?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I leave a review?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>how to use your Inbox.</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>What about taxes?</h3>
        <p>Answer: Lorem ipsum</p>
      </div>
      <div>
        <h2>Business Specific Questions</h2>

        <h3>How do I find a Jaeger and get a quote?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I accept a Jaeger's delivery?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I cancel my order and get my funds back?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I reject a Jaeger's delivery? </h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I add feedback to an order?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I Bonus or Commission my Jaeger?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I cancel a late or incomplete order?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I post and manage Business Requests?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Payment</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Informational security/NDA</h3>
        <p>Answer: Lorem ipsum</p>
      </div>
      <div>
        <h2>Account Management</h2>

        <h3>Known Issues</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Referral Program</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Having Issues with payment?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Why was my account disabled?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How Do I Change My Username?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>How do I change my email?</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Closing my Jager Co. account</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Permanently deleting my account</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Warnings</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Searching Your History</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Account Security</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Project order management</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Glossary of Terms</h3>
        <p>Answer: Lorem ipsum</p>
      </div>
      <div>
        <h2>Order Communication</h2>

        <h3>Using Your Inbox</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Using the Resolution Center</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Revisions</h3>
        <p>Answer: Lorem ipsum</p>

        <h3>Collaborating on or Sharing Files</h3>
        <p>Answer: Lorem ipsum</p>
      </div>
    </div>
  );
};

BusinessFAQ.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

BusinessFAQ.propTypes = {
  rootClassName: string,
  className: string,
};

export default BusinessFAQ;  
