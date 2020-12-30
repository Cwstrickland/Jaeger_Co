import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
   LayoutSingleColumn,
   LayoutWrapperTopbar,
   LayoutWrapperMain,
   LayoutWrapperFooter,
   Footer,
} from '../../components';

import css from './Jaegers.module.css';
import image1 from './railing_guy.jpg';
import image2 from './crosswalk.jpg';
import image3 from './hand_up_guy.jpg';

const Jaegers = () => {
   return (
      <StaticPage
      title="How to Become a Jaeger"
      schema={{
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "description": "Everything you need to know about joining the hunt and bringing your sales skills to become a Jaeger.",
        "name": "Becoming a Jaeger",
      }}
      >
         <LayoutSingleColumn>
            <LayoutWrapperTopbar>
               <TopbarContainer />
            </LayoutWrapperTopbar>

            <LayoutWrapperMain className={css.mainWrapper}>
               <h1 className={css.headingText}>
                  How to become a Jaeger.
               </h1>
               <img className={css.coverImage} src={image1} alt="sales person at on phone at railing" />
               <div>
                  <p>Have you ever wondered to yourself if my employer has my best interest in mind? Let’s be honest, we know the answer… Now is the time to write the script to your own narrative. If you have been unceremoniously shown the door after years of loyalty to your company, then you belong here with us. If you are fresh out of school and cannot seem to start your career in any meaningful way, then you belong with us. If you simply want more financial opportunities for yourself and your family, and to thrive, you belong with us. The Jaeger Co is your best chance to have freedom to cultivate your career on your terms. No longer is your career in the hands of anyone but yourself. Forge your own path, diversify your opportunities, and secure your future.

                  </p>
                  <p>The dictionary definition for Jaeger is hunter or huntsman. This is a person who hunts game, or searches for something. In the business world, the equivalent would be the sales staff of a company. At The Jaeger Co, a Jaeger is one of our sales professionals who hunt opportunities for a contracting business. Does this describe you? Are you a sales expert that is ready to take control of your hunt?

                  </p>
                  <p>
                  “How does this all work?” First, you will want to set up your profile to effectively demonstrate your skill sets as a Jaeger to any clients. Think of this as your elevator pitch. Next, businesses will reach out on opportunities based on your skills. Now you will have the chance to negotiate a mutually beneficial project scope with your client. Once a deal has been reached, it’s showtime. Now, release the hounds, you are on the hunt. Once you are successful in your hunt, it’s time to reap your rewards, and enjoy your spoils. It’s that simple.
                  </p>
                  <div className={css.grid}>
                     <img className={css.gridImage} src={image2} alt="person in crosswalk" />
                     <div className={css.block}>
                        <p><b>Our format has 3 primary benefits for you:</b></p>
                        <ol>
                           <li><b>Career Freedom</b> - Work as often, for your agreed upon pay, and for whom you want. You have the ability to write your own career narrative, free from micromanagement, company politics and HR red tape. Your career is in your hands.</li>
                           <li><b> Diversification of opportunities</b> - You now have the ability to diversify your sales opportunities by contracting with multiple companies, and even multiple industries, thus effectively shielding your personal revenue from risks, or downturns. There no longer needs to be a slow season for your commissions. Set yourself up with gigs to strategically pay you all year.</li>
                           <li><b>New sales opportunities previously unavailable</b> – By contracting with small to medium sized businesses, there are exponentially more sales opportunities than traditional corporate sales roles. These businesses may not be able to hire a full-time salesperson for a number of reasons, but there are sales opportunities to be had, and now you have a method of connecting with those qualified leads.</li>
                        </ol>
                     </div>
                  </div>
                  <p>At The Jaeger Co, we want to change the relationship between companies and sales professionals by opening up an underutilized segment of business opportunities.  The role of the Jaegers can utilize this to propel their own careers. We want to put the project negotiations, pay, and power in your hands. In a world where your career is increasingly out of your control, The Jaeger Co is the option for sales professionals to obtain total control of their career. Work as often, get paid your price, and for whom you want to work for. This is a revolutionary opportunity to diversify your revenue streams, and secure your future.</p>
                  <br></br>
               </div>
               <img className={css.coverImage} src={image3} alt="succesful hands up" />

            </LayoutWrapperMain>

            <LayoutWrapperFooter>
               <Footer />
            </LayoutWrapperFooter>

         </LayoutSingleColumn>
      </StaticPage>
   );
};

export default Jaegers;