import activityAssignedEmail from './templates/builders/activityAssignedBuilder';
import courseApprovedBuilder from './templates/builders/courseApprovedBuilder';
import courseAssignedBuilder from './templates/builders/courseAssignedBuilder';
import courseCertificateBuilder from './templates/builders/courseCertificateBuilder';
import courseReviewBuilder from './templates/builders/courseReviewBuilder';
import eventCertificateBuilder from './templates/builders/eventCertificateBuilder';
import eventInvitationBuilder from './templates/builders/eventInvitationBuilder';
import eventRegistrationBuilder from './templates/builders/eventRegistrationBuilder';
import firmInviteBuilder from './templates/builders/firmInviteBuilder';
import trackAssignedBuilder from './templates/builders/trackAssignedBuilder';
import userComplaince from './templates/builders/userCompliance';

const engine = async event => {
  const { body } = event;
  switch (body.template) {
    case 'userCompliance':
      const email = await userCompliance(body.completeCompliance, body.imageUrl);
      return email;

    case 'activityAssigned':
      const email = await activityAssignedEmail(body.activity, body.user, body.imageUrl);
      return email;

    case 'courseApproved':
      const email = await courseApprovedBuilder(body.course, body.imageUrl);
      return email;

    case 'courseAssigned':
      const email = await courseAssignedBuilder(body.course, body.imageUrl);
      return email;

    case 'courseCertificate':
      const email = await courseCertificateBuilder(body.course, body.user, body.certificate, body.imageUrl);
      return email;

    case 'courseReview':
      const email = await courseReviewBuilder(body.course, body.imageUrl);
      return email;

    case 'eventCertificate':
      const email = await eventCertificateBuilder(body.event, body.user, body.certificate, body.imageUrl);
      return email;

    case 'eventInvitation':
      const email = await eventInvitationBuilder(body.event, body.imageUrl);
      return email;

    case 'eventRegistration':
      const email = await eventRegistrationBuilder(body.event, body.imageUrl);
      return email;

    case 'firmInvite':
      const email = await firmInviteBuilder(body.user, body.company, body.imageUrl);
      return email;

    case 'trackAssigned':
      const email = await trackAssignedBuilder(body.track, body.imageUrl);
      return email;
    default:
      throw new Error('Not a valid template');
  }
};

export default engine;
