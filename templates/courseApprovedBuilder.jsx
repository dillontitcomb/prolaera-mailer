import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import CourseApproved from '../components/courseApproved/courseApproved';
import CourseApprovedSubHeader from '../components/courseApproved/courseApprovedSubHeader';
import Footer from '../components/footer';
import builderHeader from '../components/header';
import css from './templateCSS.js';

const courseApprovedBuilder = async (imageUrl, completeUser, completeCourse) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="Course approved on Prolaera" headCSS={css}>
        <Header />
        <CourseApprovedSubHeader />
        <CourseApproved {...completeUser} {...completeCourse} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default courseApprovedBuilder;
