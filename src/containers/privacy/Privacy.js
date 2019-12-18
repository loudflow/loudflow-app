import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { FaCircle } from 'react-icons/fa';
import { withStyles } from '@material-ui/styles';
import styles from './style';

const Privacy = ({ classes }) => {

  return (
    <div>
      <Typography variant='h4' color='textSecondary' paragraph={true}>
        FarSimple Privacy Policy
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        This Privacy Policy describes how your personal information is collected, used, and shared when you use this website, www.loudflow.app (the "Site").
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        PERSONAL INFORMATION WE COLLECT
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        We collect Device Information using the following technologies:
      </Typography>
      <List dense disablePadding>
        <ListItem>
          <ListItemIcon className={classes.bulletContainer}>
            <FaCircle className={classes.bullet} />
          </ListItemIcon>
          <ListItemText primary='"Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.' />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.bulletContainer}>
            <FaCircle className={classes.bullet} />
          </ListItemIcon>
          <ListItemText primary='"Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.' />
        </ListItem>
      </List>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        Additionally when you subscribe for update notifications through the Site, we collect "Contact Information" which is currently limited to your email address only. When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Contact Information.
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        HOW DO WE USE YOUR PERSONAL INFORMATION?
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        We use the Contact Information that we collect to communicate with you, and in line with any preferences you have shared with us, to provide you with information or advertising relating to our products or services. We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        SHARING YOUR PERSONAL INFORMATION
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site - you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here:  https://tools.google.com/dlpage/gaoptout. Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        DO NOT TRACK
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        YOUR RIGHTS
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below. Please note that your information may be transferred outside of Europe, including to Canada and the United States.
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        DATA RETENTION
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        When you subscribe for updates through the Site, we will maintain your Contact Information for our records unless and until you ask us to delete this information.
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        LINKS TO OTHER WEBSITES
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide while visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        CHANGES
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
      </Typography>
      <Typography variant='h6' color='textSecondary' paragraph={true}>
        CONTACT US
      </Typography>
      <Typography variant='p' color='textPrimary' paragraph={true}>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@farsimple.com.
      </Typography>
    </div>
  );

};

Privacy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Privacy);
