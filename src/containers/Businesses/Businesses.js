import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
   LayoutSingleColumn,
   LayoutWrapperTopbar,
   LayoutWrapperMain,
   LayoutWrapperFooter,
   Footer,
} from '../../components';

import image from './Jaegerco_sales-meeting.png'; 
import image2 from './Jaegerco_business_collaboration.png';
import image3 from './Jaegerco_guy-on-tablet.png';

import css from './Businesses.module.css';
 
const Businesses = () => {
   return (
      <StaticPage
      title="How to Become a Jaeger"
      schema={{
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "description": "Everything you need to know as a business to find the perfect sales professional for your needs.",
        "name": "Becoming a Jaeger",
      }}
      >
         <LayoutSingleColumn>
            <LayoutWrapperTopbar>
               <TopbarContainer />
            </LayoutWrapperTopbar>

            <LayoutWrapperMain className={css.mainWrapper}>
               <h1>
                  Finding your Jaeger.
               </h1>
               <img className={css.coverImage} src={image} alt="sales meeting" />
               <div>
                  <p>Do you have a sales opportunity in your small business, but your payroll cannot afford another full time employee? Are you always forced to settle for lesser sales options due to the size of your business? The Jaeger Co is the best solution for this problem via our marketplace of highly skilled and diverse pool professional salespeople that we call “Jaegers.” These Jaegers are on demand, freelance hires to help even the playing field for you against competitors in your industry. Armed with Jaegers on demand, you can now hunt more quality leads, and be more competitive in your market than ever before. Hire only when you need them, and expand your business as much or as little as payroll allows.
                  </p>
                  <p>Let’s break down on how it works:</p>
                  <ol>
                     <li>You have a sales opportunity</li>
                     <li>Go online <a href="/s">HERE</a> to browse our Jaegers</li>
                     <li>Work with your chosen Jaeger to negotiate the project scope</li>
                     <li>Sit back and enjoy while your new Jaeger goes on the hunt for you</li>
                     <li><b>Profit</b></li>
                  </ol>
                  <img className={css.coverImage} src={image2} alt="sales meeting 2" />
                  <p>That’s it! When you need sales on demand, you need a skilled sales hunter… You need a Jaeger.</p>
                  <p>From our plan you gain:</p>
                  <ul>
                     <li>- Freedom and flexibility</li>
                     <li>- Access to talent</li>
                     <li>- Relase from the inescapable frustration of sales staffing</li>
                  </ul>
                  <img className={css.coverImage} src={image3} alt="Guy on tablet" />
                  <p>No longer will you get passed over simply because you are a small business. And the competition among Jaegers sharpens this free market on a continuous basis. Every completed project receives a review from both the business, and the Jaeger. The cream will always rise to the top.</p>
                  <p>Now you’re ready to take control of the hunt for success!</p>
                  <a href="/signup">SIGN UP HERE TODAY.</a>

               </div>

            </LayoutWrapperMain>

            <LayoutWrapperFooter>
               <Footer />
            </LayoutWrapperFooter>

         </LayoutSingleColumn>
      </StaticPage>
   );
};

export default Businesses;