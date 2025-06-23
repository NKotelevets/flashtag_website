import Header from "@/components/Header";
import React from "react";
import "../app/globals.css"; // Adjust the path as necessary
import Link from "next/link";
import styles from "./documents.module.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const geistInter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={`${geistInter.variable}`}>
      <Header />
      <Link href="/" className={styles.goBackButton}>
        <Image
          src="/assets/arrow-left.png"
          alt="Logo"
          width="24"
          height="24"
          className={styles.logo}
        />
        Back to Homepage
      </Link>

      <h2 className={styles.titlePage}>Privacy Policy</h2>

      <div className={styles.container}>
        <p className={styles.effectiveDate}>
          Effective Date: <span>06/23/2025</span>
        </p>

        <p className={styles.content}>
          This Privacy Policy is designed to help you understand how w, Inc. (“
          <strong>Flashboard</strong>”, “<strong>we</strong>”, “
          <strong>us</strong>” or “<strong>our</strong>”) collects, uses and
          shares personal information.
        </p>

        <p className={styles.tableTitle}>Table of Contents</p>

        <div className={styles.linksContainer}>
          <Link href="/privacy-policy#what-this-privacy-policy-covers">
            1. What this Privacy Policy Covers
          </Link>

          <Link href="/privacy-policy#personal-information-we-collect">
            2. Personal Information We Collect
          </Link>

          <Link href="/privacy-policy#how-we-use-your-personal-information">
            3. How We Use Your Personal Information
          </Link>

          <Link href="/privacy-policy#how-we-share-your-personal-information">
            4. How We Share Your Personal Information
          </Link>

          <Link href="/privacy-policy#your-choices">5. Your Choices</Link>

          <Link href="/privacy-policy#other-important-privacy-information">
            6. Other Important Privacy Information
          </Link>
          <Link href="/privacy-policy#how-to-contact-us">
            7. How to Contact Us
          </Link>
        </div>

        <h3 className={styles.title} id="what-this-privacy-policy-covers">
          1. What this Privacy Policy Covers.
        </h3>
        <p className={styles.content}>
          This Privacy Policy applies to our collection, use and sharing of your
          personal information when you use our services through an account on
          the mobile application (“App”) or receive our marketing
          communications. For convenience, we refer to the App and our other
          services collectively as the “<strong>Service</strong>”.
        </p>

        <h3 className={styles.title} id="personal-information-we-collect">
          2. Personal Information We Collect.
        </h3>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>2.1 Information you give us. </strong> Personal information
          you may provide through the Service or otherwise communicate to us
          includes:
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(a) Registration and contact information. </strong> We collect
          information about you when you register to use the Service through a
          customer account, or otherwise provide contact information to us in
          person, via email or mail, or through the Service. This information
          may include your contact details (such as your name, email and mailing
          addresses, date of birth, as well as phone number), a profile picture
          or other useful identifying information, and your account email and
          password.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(b) User content. </strong> In using our Service, you are
          allowed to create and post or upload content, including, without
          limitation, data, text, audio, photographs, graphics, video,
          documents, messages, or other materials that you create or provide to
          us through either a public or private transmission. Any user content
          you post for public posting (for example, public stories) will be
          viewable by us and all other App users. Any user content you post for
          sharing with identified contacts only (for example, limited-view
          stories) will be viewable by us and those other App users you have
          designated.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(c) Geolocation information. </strong> If you authorize our
          App to access your location, we will collect information concerning
          your geolocation.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(d) Usage information. </strong> Information about how you use
          the Service and interact with us, including, without limitation,
          information associated with any content you upload to the Service or
          otherwise submit to us, and information you provide when you use any
          interactive feature of the Service.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(e) Phonebook information. </strong> If you provide us
          permission, we will collect information from your device’s phonebook.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(f) Cameras, microphone and photos. </strong> If you provide
          us permission, we will collect information from your device’s camera,
          microphone and photos. This information enables you to share User
          content with the Service.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(g) Correspondence. </strong> We may collect information about
          you when you request information from us or otherwise correspond with
          us.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(h) Survey information. </strong> If you participate in one of
          our surveys, we may collect the information you provide to us through
          the survey.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(i) Invitation data. </strong> If you invite a third party to
          create an account with the Service, we will collect your and the third
          party’s name and email address in order to communicate with the third
          party. You are responsible for obtaining whatever consents from the
          third party that may be required by law to allow us to use the third
          party’s name and email address for this purpose in accordance with
          this Privacy Policy.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(j) Other information. </strong> We may collect other
          information from you that is not specifically listed here. We will use
          such information in accordance with this Privacy Policy.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>
            2.2 Information we get from others including other social media
            networks.{" "}
          </strong>
          We may collect your name and email address from third parties who
          invite you to create an account with the Service, which we will use
          only to send you communications regarding account creation. We may
          also maintain pages or accounts for our company and our Service on a
          variety of third party platforms, such as Facebook, Twitter, YouTube,
          Instagram, and other social media services. Our Service may also
          include third party social media features, buttons, forms or widgets
          (“Social Media Features”), and we may receive information from these
          Social Media Features. When you provide information to third parties
          we work with, interact with Social Media Features, or pages or
          accounts on third party sites or social media, your information is
          subject to the third party’s privacy policy. For some third parties
          such as social media platforms and with respect to Social Media
          Features, the information (for example, your contacts’ information) we
          receive is dependent upon your privacy settings with the social media
          network. You should always review and, if necessary, adjust your
          privacy settings on third party websites and services before linking
          or connecting them to our Service.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>2.3 Information automatically collected. </strong> Our servers
          and third party service providers may automatically record certain
          information about how you use the Service, such as your Internet
          Protocol (IP) address, domain name, device and browser type, operating
          system, Internet service provider, referring/exit pages, clickstream
          data, the features of the Service that you browse and the time you
          spend on those features, the frequency with which you use the Service,
          the links that you click on or use and other statistics. We collect
          this information in server logs.
        </p>

        <h3 className={styles.title} id="how-we-use-your-personal-information">
          3. How We Use Your Personal Information.
        </h3>

        <p className={styles.content}>
          We use your personal information for the following purposes and as
          otherwise described to you in this Privacy Policy or at the time of
          collection:
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.1 To provide the Service. </strong> We use your personal
          information:
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(a)</strong> to provide, operate, administer, develop, review
          and improve the Service;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(b)</strong> to communicate with you regarding the Service,
          including by sending you announcements, updates, security alerts, and
          support and administrative messages;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(c)</strong> to enforce our Terms of Service and other
          agreements;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(d)</strong> to administer promotions, surveys, polls, or
          other Service features;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(e)</strong> to personalize our Service by customizing the
          content we show to you, including advertisements;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(f)</strong> to monitor and analyze user trends and usage;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(g)</strong> to provide and improve targeted advertising; and
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(h)</strong> to respond to your requests, questions and
          feedback related to the Service.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.2 For research and development. </strong> We analyze use of
          the Service to study trends and users’ movements around the Service,
          gather demographic information about our user base, improve the
          Service and develop new products and services.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.3 To send you marketing and survey communications. </strong>{" "}
          We may send you surveys or other marketing communications, but you may
          opt out of receiving them as described in the Opt out of marketing
          section below.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.4 To create anonymous data. </strong> We may create
          aggregated or other anonymous data from our users’ information. We
          make personal information into anonymous data by removing information
          that makes the data personally identifiable. We may use this anonymous
          or aggregated data to create analytics, for internal reporting, to
          count and track visitors’ activities on the Sites, share with third
          parties, to understand improve our Services and for other lawful
          business purposes.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.5 For compliance, fraud prevention and safety. </strong> We
          may use your personal information as we believe appropriate to (a)
          investigate violations of and enforce our Terms of Service; (b)
          protect our, your or others’ rights, privacy, safety or property
          (including by making and defending legal claims); and (c) protect,
          investigate and deter against fraudulent, harmful, unauthorized,
          unethical or illegal activity.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.6 For compliance with law. </strong> We may use your
          personal information as we believe appropriate to (a) comply with
          applicable laws, lawful requests and legal process, such as to respond
          to subpoenas or requests from government authorities; and (b) where
          permitted by law in connection with a legal investigation.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.7 With your consent. </strong> In some cases we may ask for
          your consent to collect, use or share your personal information, such
          as when required by law or our agreements with third parties.
        </p>

        <h3
          className={styles.title}
          id="how-we-share-your-personal-information"
        >
          4. How We Share your Personal Information.
        </h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.1 Other users. </strong> Depending on your privacy choice
          selections, we will share your personal information with other Service
          users.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.2 Business partners. </strong> We may share information with
          our business partners to select and personalize advertisements,
          offers, and other sponsored content that we show to you. We may allow
          third parties to use cookies and similar technologies to track your
          Service activity over time and third party websites.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.3 Service providers. </strong> We may share your personal
          information with third party companies and individuals as needed for
          them to provide us with services that help us with our business
          activities and to provide the Service (such as user support, hosting
          and storage, website analytics, email delivery, marketing/advertising,
          technical support, quality assurance, database management services and
          legal and other professional advice). These third parties will be
          given limited access to your personal information that is reasonably
          necessary for them to provide their services.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.4 For legal reasons. </strong> We may disclose your personal
          information as we believe appropriate to government or law enforcement
          officials or private parties for the purposes described above under
          the following sections: For compliance, fraud prevention and safety
          and For compliance with law.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.5 Business transfers. </strong> We may sell, transfer or
          otherwise share some or all of our business or assets, including your
          personal information, in connection with a business deal (or potential
          business deal) such as a corporate divestiture, merger, consolidation,
          acquisition, reorganization or sale of assets, or in the event of
          bankruptcy or dissolution.
        </p>

        <h3 className={styles.title} id="your-choices">
          5. Your Choices.
        </h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>5.1 Access or update your account. </strong> Account holders
          may review or update information in their registration profile by
          logging into their account or contacting us at
          info@flashtapmobile.com. If you no longer wish to participate in our
          Service, you may close your account by sending a request to
          info@flashtapmobile.com.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>5.2 Opt out of marketing. </strong> You may opt out of
          marketing-related emails and text messages by following the
          unsubscribe instructions in the email or in the text message. You may
          continue to receive Service-related and other non-marketing emails and
          texts.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>5.3 Targeted advertising. </strong> Some of the business
          partners that collect information about users’ activities on our
          Service may be members of organizations or programs that provide
          choices to individuals regarding the use of their browsing behavior
          for purposes of targeted advertising. Users may opt out of receiving
          targeted advertising on websites through members of the Network
          Advertising Initiative by clicking{" "}
          <Link
            href="https://optout.networkadvertising.org/?c=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }} // Inline style for underline
          >
            here
          </Link>{" "}
          or the Digital Advertising{" "}
          <Link
            href="https://youradchoices.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }} // Inline style for underline
          >
            here
          </Link>
          .
        </p>

        <p className={styles.content}>
          Please note that we also may work with business partners that offer
          their own opt-out mechanisms and may not participate in the opt-out
          mechanisms that we linked above.
        </p>

        <p className={styles.content}>
          If you choose to opt-out of targeted advertisements, you will still
          see advertisements online but they may not be relevant to you. Even if
          you do choose to opt out, not all business partners that serve online
          behavioural advertising are included in this list, and so you may
          still receive some cookies and tailored advertisements from companies
          that are not listed.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>5.4 Choosing not to share your personal information. </strong>{" "}
          Where we are required by law to collect your personal information, or
          where we need your personal information in order to provide the
          Service to you, if you do not provide this information when requested
          (or you later ask to delete it), we may not be able to provide you
          with our Service. We will tell you what information you must provide
          to receive the Service by designating it as required in or on the
          Service or through other appropriate means.
        </p>

        <h3 className={styles.title} id="other-important-privacy-information">
          6. Other Important Privacy Information.
        </h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>6.1 Third party sites and services. </strong> The Service may
          contain links to other services operated by third parties. These links
          are not an endorsement of, or representation that we are affiliated
          with, any third party. We do not control third party websites,
          applications or services, and are not responsible for their actions.
          Other websites and services follow different rules regarding their
          collection, use and sharing of your personal information. We encourage
          you to read their privacy policies to learn more.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>6.2 Security practices. </strong> The security of your
          personal information is important to us. We employ a number of
          organizational, technical and physical safeguards designed to protect
          the personal information we collect. However, security risk is
          inherent in all internet and information technologies and we cannot
          guarantee the absolute security of your personal information. If you
          discover any security vulnerabilities relating to the Service, please
          notify us at info@flashtapmobile.com.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>6.3 International data use. </strong> We are headquartered in
          the United States and may engage service providers in other countries,
          and your personal information may be collected, used and stored in the
          United States or other locations outside of your home country. Privacy
          laws in the locations where we handle your personal information may
          not be as protective as the privacy laws in your home country.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>6.4 Do Not Track. </strong> Some Internet browsers may be
          configured to send “Do Not Track” signals to the online services that
          you visit. We currently do not respond to “Do Not Track” or similar
          signals. To find out more about “Do Not Track,” please visit{" "}
          <Link
            href=" http://www.allaboutdnt.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }} // Inline style for underline
          >
            http://www.allaboutdnt.com
          </Link>
          .
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>6.5 Children.</strong>
          The Service is not directed at, and we do not knowingly collect
          personal information from, anyone under the age of 13. If we learn
          that we have collected personal information from a child under age 13,
          we will attempt to delete that information as soon as possible.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>6.6 Retention.</strong> We retain personal information where
          we have an ongoing legitimate business need to do so (for example, to
          provide you with the Service; to comply with applicable legal, tax or
          accounting requirements; to establish or defend legal claims; or for
          fraud prevention). When we have no ongoing legitimate business need to
          process your personal information, we will either delete or anonymize
          it or, if this is not possible (for example, because your personal
          information has been stored in backup archives), then we will securely
          store your personal information until deletion is possible.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>6.7 Changes to this Privacy Policy.</strong> We reserve the
          right to modify this Privacy Policy at any time. If we make changes to
          this Privacy Policy we will post them on the Sites and indicate the
          effective date of the change. If we make material changes to this
          Privacy Policy we will notify you by email or through the Service.
        </p>

        <h3 className={styles.title} id="how-to-contact-us">
          7. How to Contact Us.
        </h3>

        <p className={styles.content}>
          If you have questions about these Terms, please contact us at:
        </p>

        <p className={`${styles.content} `}>
          <strong>Flashboard, Inc.</strong>
        </p>
        <p className={`${styles.content} `}>
          <strong>📍 Address: </strong> 200 West 67th Street New York, NY 10023
        </p>
        <p className={`${styles.content}`}>
          <strong>📧 Email: </strong> info@flashtapmobile.com
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
