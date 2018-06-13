import React from 'react';
import { Email, renderEmail } from 'react-html-email';
import FirmInvite from '../components/firmInvite/firmInvite';
import InviteSubHeader from '../components/firmInvite/inviteSubHeader';
import Footer from '../components/footer';
import builderHeader from '../components/header';
import css from './templateCSS.js';

const firmInviteBuilder = async imageUrl => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="" headCSS={css}>
        <Header />
        <InviteSubHeader />
        <FirmInvite />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};

export default firmInviteBuilder;
