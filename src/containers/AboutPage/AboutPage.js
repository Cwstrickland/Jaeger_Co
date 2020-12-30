import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './coffee_guy.jpg';
import image2 from './chessboard.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore 
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>What is a Jaeger?</h1>
          <img className={css.coverImage} src={image} alt="sales person at laptop" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>You need a skilled sales hunter… You need a Jaeger.</p>
            </div> 

            <div className={css.contentMain}>
              <p><i>The dictionary definition for Jaeger is a hunter or huntsman. This is a person who hunts game, or searches for something. In the business world, this would be analogous to the sales staff of a company. At The Jaeger Co, a Jaeger is one of our sales professionals who hunt opportunities for a contracting business.
              </i></p>
              <h2>
              In a world where your career is increasingly out of your control, The Jaeger Co is the option for professional salesmen to take that control back. Work how often, how much, and for whom you want. Diversify your revenue streams, and secure your future.

              </h2>

              <p>
              If you have been unceremoniously shown the door after years of loyalty to your company, then you belong here with us. If you are fresh out of school and cannot get your career started in any meaningful way, then you belong with us. If you simply want to improve your financial opportunities for yourself and your family, you belong with us. The Jaeger Co is your best chance for you to have the freedom to cultivate your career on your terms. No longer is your career in the hands of anyone but yourself. Forge your own path, diversify your opportunities, and secure your future.
              </p>
              <p>
              The greatest cliché that modern business executives say is “people are our greatest asset.” Evidence to the contrary is that when cost savings measures are implemented, employee layoffs or pay cuts are the first option considered. They don’t care about you; only their profits. With The Jaeger Co, we want to change this relationship by opening up an underutilized segment of business opportunities the Jaeger can utilize to take control of their own careers.
              </p>
              <img className={css.coverImage} src={image2} alt="chess board" />
              <h3 className={css.subtitle}>Are you a business looking for a Jaeger?</h3>

              <p>
              Does your small to medium sized business have sales opportunities that are being under explored? Many small businesses cannot afford to hire a full time sales staff to capture these leads. With The Jaeger Co, you now have the ability to contract with professional sales Jaegers to fully realize those opportunities, and turn them into profits for your company. A sales staff for your company is no longer just reserved for the large corporations to utilize. Our Jaegers are salesmen and saleswomen on demand that can help even the playing field for small businesses against the much larger competitors in their industry. You have access to all the benefits of, but no longer must internally employ sales professionals during lean times of the sales cycle, or when your payroll cannot afford it. Hire Jaegers when you need them, and relieve strain on your payroll when you don’t. You don’t need a salesman, you need a Jaeger.
              </p>
              {/* Leaving this in for example link setup. to-do */}
              <p>
              
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
