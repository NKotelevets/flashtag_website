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

const TermOfServices: React.FC = () => {
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
      <h2 className={styles.titlePage}>Terms of Service</h2>
      <div className={styles.container}>
        <p className={styles.effectiveDate}>
          Effective Date: <span>06/23/2025</span>
        </p>

        <p className={styles.content}>
          WELCOME TO FLASHBOARD! Flashboard, Inc. (“<strong>Flashboard</strong>
          ”) offers a mobile application (the “<strong>App</strong>”) designed
          to share moments with friends. These Terms of Use (the “
          <strong>Terms of Use</strong>”) govern your use of the pre-release
          version of the Flashboard services and resources available or enabled
          via our App (the “<strong>Services</strong>”). In addition to the
          Terms of Use, please read our Privacy Policy to learn more about on
          how your submitted content and information is handled by Flashboard.
        </p>

        <p className={styles.content}>
          BY CLICKING ON THE “I ACCEPT” BUTTON, COMPLETING THE REGISTRATION
          PROCESS, AND/OR DOWNLOADING THE APP, YOU REPRESENT THAT (1) YOU HAVE
          READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS OF USE, (2) YOU
          UNDERSTAND THAT YOU ARE RECEIVING A PRE-RELEASE VERESION OF THE
          SERVICES AND THAT FLASHBOARD HAS NOT COMPLETED QUALITY ASSURANCE
          TESTING OF THE SERVICES, (3) YOU ARE OF LEGAL AGE TO FORM A BINDING
          CONTRACT WITH FLASHBOARD, AND (3) YOU HAVE THE AUTHORITY TO ENTER INTO
          THE TERMS OF USE PERSONALLY OR ON BEHALF OF FLASHBOARD YOU HAVE NAMED
          AS THE USER, AND TO BIND THAT FLASHBOARD TO THE TERMS OF USE. THE TERM
          “YOU” REFERS TO THE INDIVIDUAL OR LEGAL ENTITY, AS APPLICABLE,
          IDENTIFIED AS THE USER WHEN YOU REGISTERED ON THE APP.
          <strong>
            IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS OF USE, YOU MAY NOT
            ACCESS OR USE THIS APP OR THE SERVICES.
          </strong>
        </p>

        <p className={styles.content}>
          <strong>
            PLEASE BE AWARE THAT SECTION 15 OF THESE TERMS OF USE, BELOW,
            CONTAINS PROVISIONS GOVERNING HOW CLAIMS THAT YOU AND WE HAVE
            AGAINST EACH OTHER ARE RESOLVED, INCLUDING, WITHOUT LIMITATION, ANY
            CLAIMS THAT AROSE OR WERE ASSERTED PRIOR TO THE EFFECTIVE DATE OF
            THE TERMS OF USE. IN PARTICULAR, IT CONTAINS AN ARBITRATION
            AGREEMENT WHICH WILL, WITH LIMITED EXCEPTIONS, REQUIRE DISPUTES
            BETWEEN US TO BE SUBMITTED TO BINDING AND FINAL ARBITRATION. UNLESS
            YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1) YOU WILL ONLY BE
            PERMITTED TO PURSUE CLAIMS AND SEEK RELIEF AGAINST US ON AN
            INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR
            REPRESENTATIVE ACTION OR PROCEEDING; AND (2) YOU ARE WAIVING YOUR
            RIGHT TO SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL ON
            YOUR CLAIMS.{" "}
          </strong>
        </p>

        <p className={styles.content}>
          Your use of, and participation in, certain Services may be subject to
          additional terms (“<strong>Supplemental Terms</strong>”) and such
          Supplemental Terms will either be listed in the Terms of Use or will
          be presented to you for your acceptance when you sign up to use the
          supplemental Service. If the Terms of Use are inconsistent with the
          Supplemental Terms, the Supplemental Terms shall control with respect
          to such Service. The Terms of Use and any applicable Supplemental
          Terms are referred to herein as the “<strong>Agreement.</strong>”
        </p>

        <p className={styles.content}>
          PLEASE NOTE THAT THE AGREEMENT IS SUBJECT TO CHANGE BY FLASHBOARD IN
          ITS SOLE DISCRETION AT ANY TIME. When changes are made, Flashboard
          will make a new copy of the Terms of Use available in the App and any
          new Supplemental Terms will be made available from within, or through,
          the affected Service on the App. We will also update the “Last
          Updated” date at the top of the Terms of Use. If we make material
          changes to the Terms of Use, we may (and, where required by law, will)
          also provide notification of changes in another way that we believe is
          reasonably likely to reach you, such as via e-mail if you have an
          Account (as defined in Section 2.1) or another manner through the
          Service (which may include posting an announcement on our App).
          Flashboard may require you to provide consent to the updated Agreement
          in a specified manner before further use of the App and/or the
          Services is permitted. If you do not agree to any change(s) after
          receiving a notice of such change(s), you shall stop using the App
          and/or the Services. Otherwise, your continued use of the App and/or
          Services constitutes your acceptance of such change(s). PLEASE
          REGULARLY CHECK THE APP TO VIEW THE THEN-CURRENT TERMS.
        </p>
        <h3 className={styles.title}>
          1. USE OF THE SERVICES AND FLASHBOARD PROPERTIES.
        </h3>
        <p className={styles.content}>
          The App, the Software, the Services, and the information and content
          available on the App and the Services (as these terms are defined
          herein) (each, a “<strong>Flashboard Property</strong>” and
          collectively, the “<strong>Flashboard Properties</strong>”) are
          protected by U.S. copyright laws. Subject to the Agreement, Flashboard
          grants you a limited license to reproduce portions of Flashboard
          Properties for the sole purpose of using the Services for your
          personal or internal business purposes. Unless otherwise specified by
          Flashboard in a separate license, your right to use any and all
          Flashboard Properties is subject to the Agreement.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>1.1 App License.</strong> Subject to your compliance with the
          Agreement, Flashboard grants you a limited non-exclusive,
          non-transferable, non-sublicensable, revocable license to download,
          install and use a copy of the App on a single mobile device or
          computer that you own or control and to run such copy of the App
          solely for your own personal or internal business purposes.
          Furthermore, with respect to any App accessed through or downloaded
          from the Apple App Store (an “
          <strong>App Store Sourced Application</strong>”), you will only use
          the App Store Sourced Application (a) on an Apple-branded product that
          runs the iOS (Apple’s proprietary operating system) and (b) as
          permitted by the “Usage Rules” set forth in the Apple App Store Terms
          of Service. Notwithstanding the first sentence in this section, with
          respect to any Application access through or downloaded from the
          Google Play store (a “<strong>Google Play Sourced Application</strong>
          ”), you may have additional license rights with respect to use of the
          Application on a shared basis within your designated family group.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>1.2 Updates.</strong> You understand that Flashboard
          Properties are evolving. As a result, Flashboard may require you to
          accept updates to Flashboard Properties that you have installed on
          your mobile device. You acknowledge and agree that Flashboard may
          update Flashboard Properties with or without notifying you. You may
          need to update third-party software from time to time in order to use
          Flashboard Properties.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>1.3 Certain Restrictions.</strong> The rights granted to you
          in the Agreement are subject to the following restrictions: (a) you
          shall not license, sell, rent, lease, transfer, assign, reproduce,
          distribute, host or otherwise commercially exploit Flashboard
          Properties or any portion of Flashboard Properties, including the App,
          (b) you shall not frame or utilize framing techniques to enclose any
          trademark, logo, or other Flashboard Properties (including images,
          text, page layout or form) of Flashboard; (c) you shall not use any
          metatags or other “hidden text” using Flashboard’s name or trademarks;
          (d) you shall not modify, translate, adapt, merge, make derivative
          works of, disassemble, decompile, reverse compile or reverse engineer
          any part of Flashboard Properties except to the extent the foregoing
          restrictions are expressly prohibited by applicable law; (e) you shall
          not use any manual or automated software, devices or other processes
          (including but not limited to spiders, robots, scrapers, crawlers,
          avatars, data mining tools or the like) to “scrape” or download data
          from any web pages contained in the App (except that we grant the
          operators of public search engines revocable permission to use spiders
          to copy materials from the App for the sole purpose of and solely to
          the extent necessary for creating publicly available searchable
          indices of the materials, but not caches or archives of such
          materials); (f) you shall not access Flashboard Properties in order to
          build a similar or competitive App or service; (g) except as expressly
          stated herein, no part of Flashboard Properties may be copied,
          reproduced, distributed, republished, downloaded, displayed, posted or
          transmitted in any form or by any means; and (h) you shall not remove
          or destroy any copyright notices or other proprietary markings
          contained on or in Flashboard Properties. Any future release, update
          or other addition to Flashboard Properties shall be subject to the
          Agreement. Flashboard, its suppliers and service providers reserve all
          rights not granted in the Agreement. Any unauthorized use of any
          Flashboard Property terminates the licenses granted by Flashboard
          pursuant to the Agreement.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>1.4 Third-Party Materials.</strong> As a part of Flashboard
          Properties, you may have access to materials that are hosted by
          another party. You agree that it is impossible for Flashboard to
          monitor such materials and that you access these materials at your own
          risk.
        </p>

        <h3 className={styles.title}>2. REGISTRATION.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>2.1 Registering Your Account.</strong>
          In order to access certain features of Flashboard Properties you may
          be required to become a Registered User. For purposes of the
          Agreement, a “<strong>Registered User</strong>” is a user who has
          registered an account on the App (“<strong>Account</strong>”) or has a
          valid account on the social networking service (“<strong>SNS</strong>
          ”) through which the user has connected to the App (each such account,
          a “<strong>Third-Party Account </strong>“).
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>2.2 Access Through a SNS.</strong> If you access the
          Flashboard Properties through a SNS as part of the functionality of
          the App and/or the Services, you may link your Account with
          Third-Party Accounts, by allowing Flashboard to access your
          Third-Party Account, as is permitted under the applicable terms and
          conditions that govern your use of each Third-Party Account. You
          represent that you are entitled to disclose your Third-Party Account
          login information to Flashboard and/or grant Flashboard access to your
          Third-Party Account (including, but not limited to, for use for the
          purposes described herein) without breach by you of any of the terms
          and conditions that govern your use of the applicable Third-Party
          Account and without obligating Flashboard to pay any fees or making
          Flashboard subject to any usage limitations imposed by such
          third-party service providers. By granting Flashboard access to any
          Third-Party Accounts, you understand that Flashboard may access, make
          available and store (if applicable) any information, data, text,
          software, music, sound, photographs, graphics, video, messages, tags
          and/or other materials accessible through Flashboard Properties
          (collectively, “<strong>Content</strong>”) that you have provided to
          and stored in your Third-Party Account (“<strong>SNS Content</strong>
          ”) so that it is available on and through Flashboard Properties via
          your Account. Unless otherwise specified in the Agreement, all SNS
          Content shall be considered to be Your Content (as defined in Section
          3.1) for all purposes of the Agreement. Depending on the Third-Party
          Accounts you choose and subject to the privacy settings that you have
          set in such Third-Party Accounts, personally identifiable information
          that you post to your Third-Party Accounts may be available on and
          through your Account on Flashboard Properties. Please note that if a
          Third-Party Account or associated service becomes unavailable or
          Flashboard’s access to such Third-Party Account is terminated by the
          third-party service provider, then SNS Content will no longer be
          available on and through Flashboard Properties. You have the ability
          to disable the connection between your Account and your Third-Party
          Accounts at any time by accessing the “Settings” section of the App.
          PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE
          PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY
          BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS, AND
          FLASHBOARD DISCLAIMS ANY LIABILITY FOR PERSONALLY IDENTIFIABLE
          INFORMATION THAT MAY BE PROVIDED TO IT BY SUCH THIRD-PARTY SERVICE
          PROVIDERS IN VIOLATION OF THE PRIVACY SETTINGS THAT YOU HAVE SET IN
          SUCH THIRD-PARTY ACCOUNTS. Flashboard makes no effort to review any
          SNS Content for any purpose, including but not limited to, for
          accuracy, legality or noninfringement, and Flashboard is not
          responsible for any SNS Content.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>2.3 Registration Data.</strong> In registering an account on
          the App, you agree to (a) provide true, accurate, current and complete
          information about yourself as prompted by the registration form (the “
          <strong>Registration Data</strong>”); and (b) maintain and promptly
          update the Registration Data to keep it true, accurate, current and
          complete. You represent that you are (l) at least thirteen (13) years
          old; (m) not a convicted sex offender; (n) of legal age to form a
          binding contract; and (o) not a person barred from using Flashboard
          Properties under the laws of the United States, your place of
          residence or any other applicable jurisdiction. You are responsible
          for all activities that occur under your Account. You agree that you
          shall monitor your Account to restrict use by minors, and you will
          accept full responsibility for any unauthorized use of Flashboard
          Properties by minors. You may not share your Account or password with
          anyone, and you agree to (y) notify Flashboard immediately of any
          unauthorized use of your password or any other breach of security; and
          (z) exit from your Account at the end of each session. If you provide
          any information that is untrue, inaccurate, not current or incomplete,
          or Flashboard has reasonable grounds to suspect that any information
          you provide is untrue, inaccurate, not current or incomplete,
          Flashboard has the right to suspend or terminate your Account and
          refuse any and all current or future use of Flashboard Properties (or
          any portion thereof). You agree not to create an Account using a false
          identity or information, or on behalf of someone other than yourself.
          You agree that you shall not have more than one Account per platform
          or SNS at any given time. Flashboard reserves the right to remove or
          reclaim any usernames at any time and for any reason, including but
          not limited to, claims by a third party that a username violates the
          third party’s rights. You agree not to create an Account or use
          Flashboard Properties if you have been previously removed by
          Flashboard, or if you have been previously banned from any of
          Flashboard Properties.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>2.4 Your Account.</strong> Notwithstanding anything to the
          contrary herein, you acknowledge and agree that you shall have no
          ownership or other property interest in your Account, and you further
          acknowledge and agree that all rights in and to your Account are and
          shall forever be owned by and inure to the benefit of Flashboard.
          Flashboard reserves the right to terminate your Account if it has been
          inactive for three (3) days.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>2.5 Necessary Equipment and Software.</strong> You must
          provide all equipment and software necessary to connect to Flashboard
          Properties, including but not limited to, a mobile device that is
          suitable to connect with and use Flashboard Properties. You are solely
          responsible for any fees, including [Internet connection or] mobile
          fees, that you incur when accessing Flashboard Properties. By
          providing your cellphone number and using the Services, you hereby
          affirmatively consent to our use of your cellphone number for calls
          and texts in order to perform and improve upon the Services.
          Flashboard will not assess and charge for any calls or texts, but
          standard message charges or other charged from your wireless carrier
          may apply. You may opt out of receiving text messages from us by
          emailing info@flashtapmobile.com.
        </p>

        <h3 className={styles.title}>3. RESPONSIBILITY FOR CONTENT.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.1 Types of Content.</strong> You acknowledge that all
          Content, including Flashboard Properties, is the sole responsibility
          of the party from whom such Content originated. This means that you,
          and not Flashboard, are entirely responsible for all Content that you
          upload, post, e-mail, transmit or otherwise make available (“
          <strong>Make Available</strong>”) through Flashboard Properties (“
          <strong>Your Content</strong>”), and that you and other Registered
          Users of Flashboard Properties, and not Flashboard, are similarly
          responsible for all Content that you and they Make Available through
          Flashboard Properties (“<strong>User Content</strong>”).
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.2 No Obligation to Pre-Screen Content.</strong> You
          acknowledge that Flashboard has no obligation to pre-screen Content
          (including, but not limited to, User Content), although Flashboard
          reserves the right in its sole discretion to pre-screen, refuse or
          remove any Content. By entering into the Agreement, you hereby provide
          your irrevocable consent to such monitoring. You acknowledge and agree
          that you have no expectation of privacy concerning the transmission of
          Your Content, including without limitation chat, text, or voice
          communications. In the event that Flashboard pre-screens, refuses or
          removes any Content, you acknowledge that Flashboard will do so for
          Flashboard’s benefit, not yours. Without limiting the foregoing,
          Flashboard shall have the right to remove any Content that violates
          the Agreement or is otherwise objectionable.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>3.3 Storage.</strong> Unless expressly agreed to by Flashboard
          in writing elsewhere, Flashboard has no obligation to store any of
          Your Content that you Make Available on Flashboard Properties.
          Flashboard has no responsibility or liability for the deletion or
          accuracy of any Content, including Your Content; the failure to store,
          transmit or receive transmission of Content; or the security, privacy,
          storage, or transmission of other communications originating with or
          involving use of Flashboard Properties. Certain Services may enable
          you to specify the level at which such Services restrict access to
          Your Content. You are solely responsible for applying the appropriate
          level of access to Your Content. If you do not choose, the system may
          default to its most permissive setting. You agree that Flashboard
          retains the right to create reasonable limits on Flashboard’s use and
          storage of the Content, including Your Content, such as limits on file
          size, storage space, processing capacity, and similar limits described
          on the App and as otherwise determined by Flashboard in its sole
          discretion.
        </p>

        <h3 className={styles.title}>4. OWNERSHIP.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.1 Flashboard Properties.</strong> Except with respect to
          Your Content and User Content, you agree that Flashboard and its
          suppliers own all rights, title and interest in Flashboard Properties
          (including but not limited to, any computer code, themes, objects,
          concepts, artwork, animations, sounds, audiovisual effects, moral
          rights, and server software). You will not remove, alter or obscure
          any copyright, trademark, service mark or other proprietary rights
          notices incorporated in or accompanying any Flashboard Properties.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.2 Trademarks.</strong> Flashboard and all related graphics,
          logos, service marks and trade names used on or in connection with any
          Flashboard Properties or in connection with the Services are the
          trademarks of Flashboard and may not be used without permission in
          connection with your or any third-party products or services. Other
          trademarks, service marks and trade names that may appear on or in
          Flashboard Properties are the property of their respective owners.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.3 Other Content.</strong> Except with respect to Your
          Content, you agree that you have no right, title, or interest in or to
          any Content that appears on or in Flashboard Properties.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.4 Your Content.</strong> Flashboard does not claim ownership
          of Your Content. However, when you as a Registered User post or
          publish Your Content on or in Flashboard Properties, you represent
          that you own and/or have a royalty-free, perpetual, irrevocable,
          worldwide, non-exclusive right (including any moral rights) and
          license to use, license, reproduce, modify, adapt, publish, translate,
          create derivative works from, distribute, derive revenue or other
          remuneration from, and communicate to the public, perform and display
          Your Content (in whole or in part) worldwide and/or to incorporate it
          in other works in any form, media or technology now known or later
          developed, for the full term of any worldwide intellectual property
          right that may exist in Your Content.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.5 License to Your Content.</strong> Subject to any
          applicable account settings that you select, you grant Flashboard a
          fully paid, royalty-free, perpetual, irrevocable, worldwide,
          non-exclusive right (including any moral rights) and license to use,
          host, display, publish, license, distribute, reproduce, modify and
          adapt Your Content (in whole or in part) for the purposes of
          operating, providing, developing and improving Flashboard Properties
          to you and to our other Registered Users; as well as researching and
          developing new Services. You warrant that the holder of any worldwide
          intellectual property right, including moral rights, in Your Content,
          has completely and effectively waived all such rights and validly and
          irrevocably granted to you the right to grant the license stated
          above. You agree that you, not Flashboard, are responsible for all of
          Your Content that you Make Available on or in Flashboard Properties.
        </p>
        <p className={styles.content}>
          Please remember that other Registered Users may search for, see, use,
          modify, download and reproduce any of Your Content that you “publicly”
          upload or submit to Flashboard Properties (“
          <strong>Your Public Content</strong>”). In addition to the rights
          above, you grant Flashboard a fully paid, royalty-free, perpetual,
          irrevocable, worldwide, non-exclusive and fully sublicensable right
          (including any moral rights) and license to create derivative works
          from, exhibit, broadcast, promote, syndicate, publicly perform and
          publicly display Your Public Content for any purpose.
        </p>
        <p className={styles.content}>
          For more information on public verse private submissions, please
          consult our Privacy Policy .
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.6 Identification of Users.</strong> Notwithstanding anything
          contained herein to the contrary, by submitting Your Content to any
          comment sections or any other area on Flashboard Properties, you
          hereby expressly permit Flashboard to identify you by: (a) your
          username (which may be a pseudonym), or (b) if provided by you, your
          first and last name, as the contributor of Your Content in any
          publication in any form, media or technology now known or later
          developed in connection with Your Content.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.7 Your Profile.</strong> Any Content posted by you in your
          profile may not contain nudity, violence, sexually explicit, or
          offensive subject matter as determined by Flashboard in its sole
          discretion. You may not post or submit for print services a photograph
          of another person without that person’s permission.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>4.8 Feedback.</strong> You agree that submission of any ideas,
          suggestions, documents, and/or proposals to Flashboard through its
          suggestion, feedback, wiki, forum or similar pages (“
          <strong>Feedback</strong>”) is at your own risk and that Flashboard
          has no obligations (including without limitation obligations of
          confidentiality) with respect to such Feedback. You represent and
          warrant that you have all rights necessary to submit the Feedback. You
          hereby grant to Flashboard a fully paid, royalty-free, perpetual,
          irrevocable, worldwide, non-exclusive, and fully sublicensable right
          and license to use, reproduce, perform, display, distribute, adapt,
          modify, re-format, create derivative works of, and otherwise
          commercially or non-commercially exploit in any manner, any and all
          Feedback, and to sublicense the foregoing rights, in connection with
          the operation and maintenance of Flashboard Properties and/or
          Flashboard’s business.
        </p>

        <h3 className={styles.title}>5. USER CONDUCT.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>5.1 Cheating and Hacking</strong> You agree that you will not,
          under any circumstances:
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(a)</strong> Use cheats, exploits, automation software, bots,
          hacks, mods or any unauthorized software designed to modify or
          interfere with any Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(b)</strong> Interfere with or damage Flashboard Properties,
          including, without limitation, through the use of viruses, cancel
          bots, Trojan horses, harmful code, flood pings, denial-of-service
          attacks, packet or IP spoofing, forged routing or electronic mail
          address information, or similar methods or technology;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(c)</strong> Modify or cause to be modified any files that are
          a part of Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(d)</strong> Disrupt, overburden, or aid or assist in the
          disruption or overburdening of: (i) any computer or server used to
          offer or support Flashboard Properties; or (ii) the enjoyment of
          Flashboard Properties by any other person;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(e)</strong> Institute, assist, or become involved in any type
          of attack, including, but not limited to, distribution of a virus,
          denial of service attacks upon Flashboard Properties, or other
          attempts to disrupt Flashboard Properties or any other person’s use or
          enjoyment of Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(f)</strong> Attempt to gain unauthorized access to Flashboard
          Properties, accounts registered to others, or to the computers,
          servers or networks connected to Flashboard Properties by any means
          other than the user interface provided by Flashboard, including, but
          not limited to, by circumventing or modifying, attempting to
          circumvent or modify, or encouraging or assisting any other person to
          circumvent or modify, any security, technology, device or software
          that is part of Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(g)</strong> Access, tamper with or use non-public areas of
          Flashboard Properties, Flashboard’s computer systems, or the technical
          delivery systems of Flashboard’s providers;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(h)</strong> Attempt to probe, scan, or test the vulnerability
          of any Flashboard system or network, or breach any security or
          authentication measures;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(i)</strong> Disrupt or interfere with the security of, or
          otherwise cause harm to, Flashboard Properties, systems, resources,
          accounts, passwords, servers or networks connected to or accessible
          through Flashboard Properties or any affiliated or linked sites;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(j)</strong> Avoid, bypass, remove, deactivate, impair,
          descramble, or otherwise circumvent any technological measure
          implemented by Flashboard or any of Flashboard’s providers or any
          other third party (including another user) to protect Flashboard
          Properties.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>5.2 Commercial Activities.</strong> You agree that you will
          not, under any circumstances (except to the extent expressly
          authorized by the Agreement):
        </p>

        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(a)</strong> Reproduce, duplicate, copy, sell, trade, resell
          or exploit for any commercial purpose any portion of Flashboard
          Properties (including your Account), or access to or use of Flashboard
          Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(b)</strong> Upload, post, e-mail, transmit or otherwise make
          available any unsolicited or unauthorized advertising, promotional
          materials, “junk mail,” “spam,” “chain letters,” “pyramid schemes,” or
          any other form of solicitation in connection with any Flashboard
          Property;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(c)</strong> Use Flashboard Properties or any part thereof for
          any commercial purpose, including, but not limited to, communicating
          or facilitating any commercial advertisement or solicitation;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(d)</strong> Engage in any chain letters, contests, junk
          email, pyramid schemes, spamming, surveys or other duplicative or
          unsolicited messages (commercial or otherwise) in connection with
          Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(e)</strong> Market any goods or services for any business
          purposes on or in connection with any Flashboard Properties.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>5.3 Unauthorized Use or Access.</strong> You agree that you
          will not, under any circumstances:
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(a)</strong> Interfere or attempt to interfere with the proper
          functioning of Flashboard Properties or connect to or use Flashboard
          Properties in any way not expressly permitted by the Agreement;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(b)</strong> Systematically retrieve data or other content
          from Flashboard Properties to create or compile, directly or
          indirectly, in single or multiple downloads, a collection,
          compilation, database, directory or the like, whether by manual
          methods or through the use of bots, crawlers, spiders, or otherwise;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(c)</strong> Use, display, mirror or frame Flashboard
          Properties, or any individual element within Flashboard Properties,
          Flashboard’s name, any Flashboard trademark, logo or other proprietary
          information, or the layout and design of any page or form contained on
          a page, without Flashboard’s express written consent;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(d)</strong> Use any unauthorized software that accesses,
          intercepts, “mines” or otherwise collects information from or through
          Flashboard Properties or that is in transit from or to Flashboard
          Properties, including, but not limited to, any software that reads
          areas of RAM or streams of network traffic used by Flashboard
          Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(e)</strong> Intercept, examine or otherwise observe any
          proprietary communications protocol used by a client, a server or
          Flashboard Properties, whether through the use of a network analyzer,
          packet sniffer or other device;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(f)</strong> Make any automated use of Flashboard Properties,
          or take any action that imposes or may impose (in Flashboard’s sole
          discretion) an unreasonable or disproportionately large load on the
          infrastructure for Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(g)</strong> Bypass any robot exclusion headers or other
          measures Flashboard takes to restrict access to Flashboard Properties,
          or use any software, technology or device to send content or messages,
          scrape, spider or crawl Flashboard Properties, or harvest or
          manipulate data;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(h)</strong> Use, facilitate, create, or maintain any
          unauthorized connection to Flashboard Properties, including, but not
          limited to: (i) any connection to any unauthorized server that
          emulates, or attempts to emulate, any part of Flashboard Properties;
          or (ii) any connection using programs, tools or software not expressly
          approved by Flashboard;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(i)</strong> Reverse engineer, decompile, disassemble,
          decipher or otherwise attempt to derive the source code for any
          underlying software or other intellectual property used to provide
          Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(j)</strong> Forge headers or otherwise manipulate identifiers
          in order to disguise the origin of any Content transmitted through
          Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(k)</strong> Upload, post, e-mail, transmit or otherwise make
          available any material that contains software viruses or any other
          computer code, files or programs designed to interrupt, destroy or
          limit the functionality of any computer software or hardware or
          telecommunications equipment;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(l)</strong> Solicit or attempt to solicit personal
          information from other users of Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(m)</strong> Use Flashboard Properties to collect, harvest,
          transmit, distribute, post or submit any information concerning any
          other person or entity, including without limitation, photographs of
          others without their permission, personal contact information or
          credit, debit, calling card or account numbers;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(n)</strong> Forge any TCP/IP packet header or any part of the
          header information in any e-mail or newsgroup posting, or in any way
          use Flashboard Properties to send altered, deceptive or false
          source-identifying information;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(o)</strong> Upload or transmit (or attempt to upload or to
          transmit) any material that acts as a passive or active information
          collection or transmission mechanism, including, but not limited to,
          clear GIFs, 1x1 pixels, web bugs, cookies or other similar devices
          (sometimes referred to as “spyware,” “passive collection mechanisms”
          or “pcms”).
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>5.4 General.</strong> In connection with your use of
          Flashboard Properties, you shall not:
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(a)</strong> Make Available any Content that, in Flashboard’s
          sole discretion, (i) is unlawful, tortious, defamatory, vulgar,
          pornographic, obscene, libelous, or racially, ethnically or otherwise
          objectionable; (ii) contains nudity or is of a dangerous, graphic or
          explicit nature; (iii) violates, or encourages any conduct that would
          violate, any applicable law or regulation or would give rise to civil
          liability; (iv) promotes discrimination, bigotry, racism, hatred,
          harassment or harm against any individual or group; (v) is violent or
          threatening, or promotes violence or actions that are threatening to
          any other person; or (vi) promotes illegal or harmful activities;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(b)</strong> Harm minors in any way;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(c)</strong> Impersonate any person or entity, including, but
          not limited to, Flashboard personnel, or falsely state or otherwise
          misrepresent your affiliation with a person or entity;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(d)</strong> Make available any Content that you do not have a
          right to Make Available under any law or under contractual or
          fiduciary relationships (such as inside information, proprietary and
          confidential information learned or disclosed as part of employment
          relationships or under non-disclosure agreements);
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(e)</strong> Make Available any Content that infringes the
          rights of any person or entity, including without limitation, any
          patent, trademark, trade secret, copyright, privacy, publicity or
          other proprietary or contractual rights;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(f)</strong> Intentionally or unintentionally violate any
          applicable local, state, national or international law or regulation,
          or any order of a court;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(g)</strong> Register for more than one Account or register
          for an Account on behalf of an individual other than yourself;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(h)</strong> Stalk or otherwise harass, bully or intimidate
          any other user of our Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(i)</strong> Advocate, encourage or assist any third party in
          doing any of the foregoing activities in this section.
        </p>
        <h3 className={styles.title}>6. INVESTIGATIONS.</h3>
        <p className={styles.content}>
          Flashboard may, but is not obligated to, monitor or review Flashboard
          Properties and Content at any time. Without limiting the foregoing,
          Flashboard shall have the right, in its sole discretion, to remove any
          of Your Content for any reason (or no reason), including if such
          Content violates the Agreement or any applicable law. Although
          Flashboard does not generally monitor user activity occurring in
          connection with Flashboard Properties or Content, if Flashboard
          becomes aware of any possible violations by you of any provision of
          the Agreement, Flashboard reserves the right to investigate such
          violations, and Flashboard may, at its sole discretion, immediately
          terminate your license to use Flashboard Properties, or change, alter
          or remove Your Content, in whole or in part, without prior notice to
          you.
        </p>
        <h3 className={styles.title}>7. INTERACTIONS WITH OTHER USERS.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>7.1 User Responsibility.</strong> You are solely responsible
          for your interactions with other Registered Users and any other
          parties with whom you interact; provided, however, that Flashboard
          reserves the right, but has no obligation, to intercede in such
          disputes. You agree that Flashboard will not be responsible for any
          liability incurred as the result of such interactions.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>7.2 Content Provided by Other Users.</strong> Flashboard
          Properties may contain User Content provided by other Registered
          Users. Flashboard is not responsible for and does not control User
          Content. Flashboard has no obligation to review or monitor, and does
          not approve, endorse or make any representations or warranties with
          respect to User Content. You use all User Content and interact with
          other Registered Users at your own risk.
        </p>
        <h3 className={styles.title}>8. THIRD-PARTY SERVICES.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>8.1 Third-Party Websites, Applications and Ads.</strong>
          Flashboard Properties may contain links to third-party websites (“
          <strong>Third-Party Websites</strong>”) and applications (“
          <strong>Third-Party Applications</strong>”) and advertisements for
          third parties (“<strong>Third-Party Ads</strong>”). When you click on
          a link to a Third-Party Website, Third-Party Application or
          Third-Party Ad, we will not warn you that you have left Flashboard
          Properties and are subject to the terms and conditions (including
          privacy policies) of another website or destination. Such Third-Party
          Websites, Third-Party Applications and Third-Party Ads are not under
          the control of Flashboard. Flashboard is not responsible for any
          Third-Party Websites, Third-Party Applications or Third-Party Ads.
          Flashboard provides these Third-Party Websites, Third-Party
          Applications and Third Party Ads only as a convenience and does not
          review, approve, monitor, endorse, warrant, or make any
          representations with respect to Third-Party Websites, Third-Party
          Applications or Third-Party Ads, or any product or service provided in
          connection therewith. You use all links in Third-Party Websites,
          Third-Party Applications and Third-Party Ads at your own risk. When
          you leave our Website, the Agreement and policies no longer govern.
          You should review applicable terms and policies, including privacy and
          data gathering practices, of any Third-Party Websites or Third-Party
          Applications, and make whatever investigation you feel necessary or
          appropriate before proceeding with any transaction with any third
          party.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>8.2 App Stores.</strong> You acknowledge and agree that the
          availability of the App and the Services is dependent on the third
          party from whom you received the App license, e.g., the Apple App
          Store or Google Play (each, an “<strong>App Store</strong>”). You
          acknowledge that the Agreement is between you and Flashboard and not
          with the App Store. Flashboard, not the App Store, is solely
          responsible for Flashboard Properties, including the App, the content
          thereof, maintenance, support services, and warranty therefor, and
          addressing any claims relating thereto (e.g., product liability, legal
          compliance or intellectual property infringement). In order to use the
          App, you must have access to a wireless network, and you agree to pay
          all fees associated with such access. You also agree to pay all fees
          (if any) charged by the App Store in connection with Flashboard
          Properties, including the App. You agree to comply with, and your
          license to use the App is conditioned upon your compliance with all
          terms of agreement imposed by the applicable App Store when using any
          Flashboard Property, including the App. You acknowledge that the App
          Store (and its subsidiaries) are third-party beneficiaries of the
          Agreement and will have the right to enforce it.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>8.3 Advertising Revenue.</strong> Flashboard reserves the
          right to display Third-Party Ads before, after, or in conjunction with
          User Content posted on the Services, and you acknowledge and agree
          that Flashboard has no obligation to you in connection therewith
          (including, without limitation, any obligation to share revenue
          received by Flashboard as a result of such advertising).
        </p>

        <h3 className={styles.title}>9. Indemnification.</h3>

        <p className={styles.content}>
          You agree to indemnify and hold Flashboard, its parents, subsidiaries,
          affiliates, officers, employees, agents, partners, suppliers, and
          licensors (each, a “<strong>Flashboard Party</strong>” and
          collectively, the “<strong>Flashboard Parties</strong>”) harmless from
          any losses, costs, liabilities and expenses (including reasonable
          attorneys’ fees) relating to or arising out of any and all of the
          following: (a) Your Content; (b) your use of, or inability to use, any
          Flashboard Property; (c) your violation of the Agreement; (d) your
          violation of any rights of another party, including any Registered
          Users; or (e) your violation of any applicable laws, rules or
          regulations. Flashboard reserves the right, at its own cost, to assume
          the exclusive defense and control of any matter otherwise subject to
          indemnification by you, in which event you will fully cooperate with
          Flashboard in asserting any available defenses. This provision does
          not require you to indemnify any of the Flashboard Parties for any
          unconscionable commercial practice by such party or for such party’s
          fraud, deception, false promise, misrepresentation or concealment,
          suppression or omission of any material fact in connection with the
          App or any Services provided hereunder. You agree that the provisions
          in this section will survive any termination of your Account, the
          Agreement and/or your access to Flashboard Properties.
        </p>
        <h3 className={styles.title}>
          10. DISCLAIMER OF WARRANTIES AND CONDITIONS.
        </h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>10.1 As Is. </strong> YOU EXPRESSLY UNDERSTAND AND AGREE THAT
          TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR USE OF FLASHBOARD
          PROPERTIES IS AT YOUR SOLE RISK, AND FLASHBOARD PROPERTIES ARE
          PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITH ALL FAULTS.
          FLASHBOARD PARTIES EXPRESSLY DISCLAIM ALL WARRANTIES, REPRESENTATIONS,
          AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT
          NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NON-INFRINGEMENT. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING,
          YOU ACKNOWLEDGE THAT THE SERVICES ARE PRE-PRODUCTION AND HAVE NOT BEEN
          COMPLETELY TESTED IN ALL SITUATIONS.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>10.2 No Liability for Conduct of Third Parties.</strong> YOU
          ACKNOWLEDGE AND AGREE THAT FLASHBOARD PARTIES ARE NOT LIABLE, AND YOU
          AGREE NOT TO SEEK TO HOLD FLASHBOARD PARTIES LIABLE, FOR THE CONDUCT
          OF THIRD PARTIES, INCLUDING OPERATORS OF EXTERNAL SITES, AND THAT THE
          RISK OF INJURY FROM SUCH THIRD PARTIES RESTS ENTIRELY WITH YOU.
          FLASHBOARD MAKES NO WARRANTY THAT THE GOODS OR SERVICES PROVIDED BY
          THIRD PARTIES WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN
          UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. FLASHBOARD MAKES NO
          WARRANTY REGARDING THE QUALITY OF ANY SUCH GOODS OR SERVICES, OR THE
          ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY
          USER CONTENT OBTAINED THROUGH FLASHBOARD PROPERTIES.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>10.3 No Liability for Conduct of Other Users.</strong> YOU ARE
          SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS
          WITH OTHER USERS OF FLASHBOARD PROPERTIES. YOU UNDERSTAND THAT
          FLASHBOARD DOES NOT MAKE ANY ATTEMPT TO VERIFY THE STATEMENTS OF USERS
          OF FLASHBOARD PROPERTIES. FLASHBOARD MAKES NO REPRESENTATIONS OR
          WARRANTIES AS TO THE CONDUCT OF USERS OF FLASHBOARD PROPERTIES OR
          THEIR COMPATIBILITY WITH ANY CURRENT OR FUTURE USERS OF FLASHBOARD
          PROPERTIES. YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL
          COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF FLASHBOARD
          PROPERTIES, PARTICULARLY IF YOU DECIDE TO MEET OFFLINE OR IN PERSON.
        </p>

        <h3 className={styles.title}>11. LIMITATION OF LIABILITY.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>11.1 Disclaimer of Certain Damages.</strong> YOU UNDERSTAND
          AND AGREE THAT IN NO EVENT SHALL FLASHBOARD PARTIES BE LIABLE FOR ANY
          LOSS OF PROFITS, REVENUE OR DATA, INDIRECT, INCIDENTAL, SPECIAL, OR
          CONSEQUENTIAL DAMAGES, OR DAMAGES OR COSTS DUE TO LOSS OF PRODUCTION
          OR USE, BUSINESS INTERRUPTION, PROCUREMENT OF SUBSTITUTE GOODS OR
          SERVICES, IN EACH CASE WHETHER OR NOT FLASHBOARD HAS BEEN ADVISED OF
          THE POSSIBILITY OF SUCH DAMAGES, ARISING OUT OF OR IN CONNECTION WITH
          THE AGREEMENT OR ANY COMMUNICATIONS, INTERACTIONS OR MEETINGS WITH
          OTHER USERS OF FLASHBOARD PROPERTIES, ON ANY THEORY OF LIABILITY,
          RESULTING FROM: (1) THE USE OR INABILITY TO USE FLASHBOARD PROPERTIES;
          (2) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES RESULTING
          FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR
          MESSAGES RECEIVED FOR TRANSACTIONS ENTERED INTO THROUGH FLASHBOARD
          PROPERTIES; (3) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
          TRANSMISSIONS OR DATA; (4) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON
          FLASHBOARD PROPERTIES; OR (5) ANY OTHER MATTER RELATED TO FLASHBOARD
          PROPERTIES, WHETHER BASED ON WARRANTY, COPYRIGHT, CONTRACT, TORT
          (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY.
          THE FOREGOING CAP ON LIABILITY SHALL NOT APPLY TO LIABILITY OF A
          FLASHBOARD PARTY FOR (A) DEATH OR PERSONAL INJURY CAUSED BY A
          FLASHBOARD PARTY’S NEGLIGENCE; OR FOR (B) ANY INJURY CAUSED BY A
          FLASHBOARD PARTY’S FRAUD OR FRAUDULENT MISREPRESENTATION.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>11.2 Cap on Liability.</strong> UNDER NO CIRCUMSTANCES WILL
          FLASHBOARD PARTIES BE LIABLE TO YOU FOR MORE THAN THE GREATER OF (A)
          ONE HUNDRED DOLLARS ($100.00) AND (B) THE REMEDY OR PENALTY IMPOSED BY
          THE STATUTE UNDER WHICH SUCH CLAIM ARISES. THE FOREGOING CAP ON
          LIABILITY SHALL NOT APPLY TO LIABILITY OF A FLASHBOARD PARTY FOR (A)
          DEATH OR PERSONAL INJURY CAUSED BY A FLASHBOARD PARTY’S NEGLIGENCE; OR
          FOR (B) ANY INJURY CAUSED BY A FLASHBOARD PARTY’S FRAUD OR FRAUDULENT
          MISREPRESENTATION.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>11.3 User Content.</strong> EXCEPT FOR FLASHBOARD’S
          OBLIGATIONS TO PROTECT YOUR PERSONAL DATA AS SET FORTH IN THE
          FLASHBOARD’S PRIVACY POLICY, FLASHBOARD ASSUMES NO RESPONSIBILITY FOR
          THE TIMELINESS, DELETION, MIS-DELIVERY OR FAILURE TO STORE ANY CONTENT
          (INCLUDING, BUT NOT LIMITED TO, YOUR CONTENT AND USER CONTENT), USER
          COMMUNICATIONS OR PERSONALIZATION SETTINGS.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>11.4 Basis of the Bargain.</strong> THE LIMITATIONS OF DAMAGES
          SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN
          BETWEEN FLASHBOARD AND YOU.
        </p>

        <h3 className={styles.title}>
          12. PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT.
        </h3>

        <p className={styles.content}>
          It is Flashboard’s policy to terminate membership privileges of any
          Registered User who repeatedly infringes copyright upon prompt
          notification to Flashboard by the copyright owner or the copyright
          owner’s legal agent. Without limiting the foregoing, if you believe
          that your work has been copied and posted on Flashboard Properties in
          a way that constitutes copyright infringement, please provide our
          Copyright Agent with the following information: (a) an electronic or
          physical signature of the person authorized to act on behalf of the
          owner of the copyright interest; (b) a description of the copyrighted
          work that you claim has been infringed; (c) a description of the
          location on Flashboard Properties of the material that you claim is
          infringing; (d) your address, telephone number and e-mail address; (e)
          a written statement by you that you have a good faith belief that the
          disputed use is not authorized by the copyright owner, its agent or
          the law; and (f) a statement by you, made under penalty of perjury,
          that the above information in your notice is accurate and that you are
          the copyright owner or authorized to act on the copyright owner’s
          behalf. Contact information for Flashboard’s Copyright Agent for
          notice of claims of copyright infringement is as follows: Shervin
          Afshari-Tork, 200 West 67th Street, New York NY 10023.
        </p>
        <h3 className={styles.title}>13. REMEDIES.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>13.1 Violations. </strong> If Flashboard becomes aware of any
          possible violations by you of the Agreement, Flashboard reserves the
          right to investigate such violations. If, as a result of the
          investigation, Flashboard believes that criminal activity has
          occurred, Flashboard reserves the right to refer the matter to, and to
          cooperate with, any and all applicable legal authorities. Flashboard
          is entitled, except to the extent prohibited by applicable law, to
          disclose any information or materials on or in Flashboard Properties,
          including Your Content, in Flashboard’s possession in connection with
          your use of Flashboard Properties, to (a) comply with applicable laws,
          legal process or governmental request; (b) enforce the Terms, (c)
          respond to any claims that Your Content violates the rights of third
          parties, (d) respond to your requests for customer service, or (e)
          protect the rights, property or personal safety of Flashboard, its
          Registered Users or the public, and all enforcement or other
          government officials, as Flashboard in its sole discretion believes to
          be necessary or appropriate.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>13.2 Breach.</strong> In the event that Flashboard determines,
          in its sole discretion, that you have breached any portion of the
          Agreement, or have otherwise demonstrated conduct inappropriate for
          Flashboard Properties, Flashboard reserves the right to:
        </p>

        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(a)</strong> Warn you via e-mail (to any e-mail address you
          have provided to Flashboard) that you have violated the Agreement;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(b)</strong> Delete any of Your Content provided by you or
          your agent(s) to Flashboard Properties;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(c)</strong> Discontinue your registration(s) with any of
          Flashboard Properties, including any Services or any Flashboard
          community;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(d)</strong> Discontinue your subscription to any Services;
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(e)</strong> Notify and/or send Content to and/or fully
          cooperate with the proper law enforcement authorities for further
          action; and/or
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(f)</strong> Pursue any other action which Flashboard deems to
          be appropriate.
        </p>
        <h3 className={styles.title}>14. TERM AND TERMINATION.</h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>14.1 Term. </strong> The Agreement commences on the date when
          you accept them (as described in the preamble above) and remain in
          full force and effect while you use Flashboard Properties, unless
          terminated earlier in accordance with the Agreement.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>14.2 Prior Use. </strong> Notwithstanding the foregoing, you
          hereby acknowledge and agree that the Agreement commenced on the
          earlier to occur of (a) the date you first used Flashboard Properties
          or (b) the date you accepted the Agreement and will remain in full
          force and effect while you use any Flashboard Properties, unless
          earlier terminated in accordance with the Agreement.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>14.3 Termination of Services by Flashboard.</strong> If you
          have materially breached any provision of the Agreement, or if
          Flashboard is required to do so by law (e.g., where the provision of
          the App, the Software or the Services is, or becomes, unlawful),
          Flashboard has the right to, immediately and without notice, suspend
          or terminate any Services provided to you. You agree that all
          terminations for cause shall be made in Flashboard’s sole discretion
          and that Flashboard shall not be liable to you or any third party for
          any termination of your Account.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>14.4 Termination of Services by You. </strong> If you want to
          terminate the Services provided by Flashboard, you may do so by
          closing your Account for all of the Services that you use.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>14.5 Effect of Termination. </strong> Termination of any
          Service includes removal of access to such Service and barring of
          further use of the Service. Termination of all Services also includes
          deletion of your password and all related information, files and
          Content associated with or inside your Account (or any part thereof),
          including Your Content. Upon termination of any Service, your right to
          use such Service will automatically terminate immediately. You
          understand that any termination of Services may involve deletion of
          Your Content associated therewith from our live databases. Flashboard
          will not have any liability whatsoever to you for any suspension or
          termination, including for deletion of Your Content. All provisions of
          the Agreement which by their nature should survive, shall survive
          termination of Services, including without limitation, ownership
          provisions, warranty disclaimers, and limitation of liability.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>14.6 No Subsequent Registration.</strong> If your
          registration(s) with or ability to access Flashboard Properties, or
          any other Flashboard community is discontinued by Flashboard due to
          your violation of any portion of the Agreement or for conduct
          otherwise inappropriate for the community, then you agree that you
          shall not attempt to re-register with or access Flashboard Properties
          or any Flashboard community through use of a different member name or
          otherwise, and you acknowledge that you will not be entitled to
          receive a refund for fees related to those Flashboard Properties to
          which your access has been terminated. In the event that you violate
          the immediately preceding sentence, Flashboard reserves the right, in
          its sole discretion, to immediately take any or all of the actions set
          forth herein without any notice or warning to you.
        </p>
        <h3 className={styles.title}>15. DISPUTE RESOLUTION. </h3>
        <p className={styles.content}>
          <strong>
            <i>
              Please read the following arbitration agreement in this Section
              (“Arbitration Agreement”) carefully. It requires you to arbitrate
              disputes with Flashboard and limits the manner in which you can
              seek relief from us.
            </i>
          </strong>
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>15.1 Applicability of Arbitration Agreement.</strong> You
          agree that any dispute or claim relating in any way to your access or
          use of the App, to any products sold or distributed through the App,
          or to any aspect of your relationship with Flashboard, will be
          resolved by binding arbitration, rather than in court, except that (1)
          you may assert claims in small claims court if your claims qualify,;
          and (2) you or Flashboard may seek equitable relief in court for
          infringement or other misuse of intellectual property rights (such as
          trademarks, trade dress, domain names, trade secrets, copyrights, and
          patents).{" "}
          <strong>
            This Arbitration Agreement shall apply, without limitation, to all
            claims that arose or were asserted before the effective date of this
            Agreement or any prior version of this Agreement.
          </strong>
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>15.2 Arbitration Rules and Forum.</strong> The Federal
          Arbitration Act governs the interpretation and enforcement of this
          Arbitration Agreement. To begin an arbitration proceeding, you must
          send a letter requesting arbitration and describing your claim to our
          registered agent [include name and address of registered agent here].
          The arbitration will be conducted by JAMS, an established alternative
          dispute resolution provider. Disputes involving claims and
          counterclaims under $250,000, not inclusive of attorneys’ fees and
          interest, shall be subject to JAMS’s most current version of the
          Streamlined Arbitration Rules and procedures available at
          http://www.jamsadr.com/rules-streamlined-arbitration/; all other
          claims shall be subject to JAMS’s most current version of the
          Comprehensive Arbitration Rules and Procedures, available at
          http://www.jamsadr.com/rules-comprehensive-arbitration/. JAMS’s rules
          are also available at www.jamsadr.com or by calling JAMS at
          800-352-5267. If JAMS is not available to arbitrate, the parties will
          select an alternative arbitral forum. If the arbitrator finds that you
          cannot afford to pay JAMS’s filing, administrative, hearing and/or
          other fees and cannot obtain a waiver from JAMS, Flashboard will pay
          them for you. In addition, Flashboard will reimburse all such JAMS’s
          filing, administrative, hearing and/or other fees for claims totaling
          less than $10,000 unless the arbitrator determines the claims are
          frivolous.
        </p>
        <p className={styles.content}>
          You may choose to have the arbitration conducted by telephone, based
          on written submissions, or in person in the country where you live or
          at another mutually agreed location. Any judgment on the award
          rendered by the arbitrator may be entered in any court of competent
          jurisdiction.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>15.3 Authority of Arbitrator. </strong> The arbitrator shall
          have exclusive authority to (a) determine the scope and enforceability
          of this Arbitration Agreement and (b) resolve any dispute related to
          the interpretation, applicability, enforceability or formation of this
          Arbitration Agreement including, but not limited to, any claim that
          all or any part of this Arbitration Agreement is void or voidable. The
          arbitration will decide the rights and liabilities, if any, of you and
          Flashboard. The arbitration proceeding will not be consolidated with
          any other matters or joined with any other cases or parties. The
          arbitrator shall have the authority to grant motions dispositive of
          all or part of any claim. The arbitrator shall have the authority to
          award monetary damages and to grant any non-monetary remedy or relief
          available to an individual under applicable law, the arbitral forum’s
          rules, and the Agreement (including the Arbitration Agreement). The
          arbitrator shall issue a written award and statement of decision
          describing the essential findings and conclusions on which the award
          is based, including the calculation of any damages awarded. The
          arbitrator has the same authority to award relief on an individual
          basis that a judge in a court of law would have. The award of the
          arbitrator is final and binding upon you and us.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>15.4 Waiver of Jury Trial. </strong> YOU AND FLASHBOARD HEREBY
          WAIVE ANY CONSTITUTIONAL AND STATUTORY RIGHTS TO SUE IN COURT AND HAVE
          A TRIAL IN FRONT OF A JUDGE OR A JURY. You and Flashboard are instead
          electing that all claims and disputes shall be resolved by arbitration
          under this Arbitration Agreement, except as specified in Section 15.1
          above. An arbitrator can award on an individual basis the same damages
          and relief as a court and must follow this Agreement as a court would.
          However, there is no judge or jury in arbitration, and court review of
          an arbitration award is subject to very limited review.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>
            15.5 Waiver of Class or Other Non-Individualized Relief.{" "}
          </strong>
          ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT
          MUST BE ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS OR
          COLLECTIVE BASIS, ONLY INDIVIDUAL RELIEF IS AVAILABLE, AND CLAIMS OF
          MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR CONSOLIDATED
          WITH THOSE OF ANY OTHER CUSTOMER OR USER. If a decision is issued
          stating that applicable law precludes enforcement of any of this
          subsection’s limitations as to a given claim for relief, then the
          claim must be severed from the arbitration and brought into the State
          or Federal Courts located in the State of New York. All other claims
          shall be arbitrated.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>15.6 30-Day Right to Opt Out. </strong> You have the right to
          opt out of the provisions of this Arbitration Agreement by sending
          written notice of your decision to opt out to:
          info@flashtapmobile.com, within 30 days after first becoming subject
          to this Arbitration Agreement. Your notice must include your name and
          address, your Flashboard username (if any), the email address you used
          to set up your Flashboard account (if you have one), and an
          unequivocal statement that you want to opt out of this Arbitration
          Agreement. If you opt out of this Arbitration Agreement, all other
          parts of this Agreement will continue to apply to you. Opting out of
          this Arbitration Agreement has no effect on any other arbitration
          agreements that you may currently have, or may enter in the future,
          with us.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>15.7 Severability. </strong> Except as provided in subsection
          15.5, if any part or parts of this Arbitration Agreement are found
          under the law to be invalid or unenforceable, then such specific part
          or parts shall be of no force and effect and shall be severed and the
          remainder of the Arbitration Agreement shall continue in full force
          and effect.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>15.8 Survival of Agreement. </strong> This Arbitration
          Agreement will survive the termination of your relationship with
          Flashboard.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>15.9 Modification. </strong> Notwithstanding any provision in
          this Agreement to the contrary, we agree that if Flashboard makes any
          future material change to this Arbitration Agreement, you may reject
          that change within thirty (30) days of such change becoming effective
          by writing Flashboard at the following address:
          info@flashtapmobile.com.
        </p>

        <h3 className={styles.title}>16. GENERAL PROVISIONS. </h3>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.1 Electronic Communications. </strong> The communications
          between you and Flashboard may take place via electronic means,
          whether you visit Flashboard Properties or send Flashboard e-mails, or
          whether Flashboard posts notices on Flashboard Properties or
          communicates with you via e-mail. For contractual purposes, you (a)
          consent to receive communications from Flashboard in an electronic
          form; and (b) agree that all terms and conditions, agreements,
          notices, disclosures, and other communications that Flashboard
          provides to you electronically satisfy any legal requirement that such
          communications would satisfy if it were to be in writing. The
          foregoing does not affect your statutory rights.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.2 Release. </strong> You hereby release Flashboard Parties
          and their successors from claims, demands, any and all losses,
          damages, rights, and actions of any kind, including personal injuries,
          death, and property damage, that is either directly or indirectly
          related to or arises from your use of Flashboard Properties, including
          but not limited to, any interactions with or conduct of other Users or
          third-party websites of any kind arising in connection with or as a
          result of the Agreement or your use of Flashboard Properties. If you
          are a California resident, you hereby waive California Civil Code
          Section 1542, which states, “A general release does not extend to
          claims which the creditor does not know or suspect to exist in his
          favor at the time of executing the release, which, if known by him
          must have materially affected his settlement with the debtor.” The
          foregoing release does not apply to any claims, demands, or any
          losses, damages, rights and actions of any kind, including personal
          injuries, death or property damage for any unconscionable commercial
          practice by a Flashboard Party or for such party’s fraud, deception,
          false, promise, misrepresentation or concealment, suppression or
          omission of any material fact in connection with the App or any
          Services provided hereunder.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.3 Assignment. </strong> The Agreement, and your rights and
          obligations hereunder, may not be assigned, subcontracted, delegated
          or otherwise transferred by you without Flashboard’s prior written
          consent, and any attempted assignment, subcontract, delegation, or
          transfer in violation of the foregoing will be null and void.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.4 Force Majeure. </strong> Flashboard shall not be liable
          for any delay or failure to perform resulting from causes outside its
          reasonable control, including, but not limited to, acts of God, war,
          terrorism, riots, embargos, acts of civil or military authorities,
          fire, floods, accidents, strikes or shortages of transportation
          facilities, fuel, energy, labor or materials.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.5 Questions, Complaints, Claims. </strong> If you have any
          questions, complaints or claims with respect to Flashboard Properties,
          please contact us at: info@flashtapmobile.com. We will do our best to
          address your concerns. If you feel that your concerns have been
          addressed incompletely, we invite you to let us know for further
          investigation.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.6 Limitation Period. </strong> YOU AND FLASHBOARD AGREE
          THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE TERMS,
          FLASHBOARD PROPERTIES OR THE CONTENT MUST COMMENCE WITHIN ONE (1) YEAR
          AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS
          PERMANENTLY BARRED.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.7 Exclusive Venue.</strong> To the extent the parties are
          permitted under this Agreement to initiate litigation in a court, both
          you and Flashboard agree that all claims and disputes arising out of
          or relating to the Agreement will be litigated exclusively in the
          state or federal courts located in New York, New York.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.8 Governing Law. </strong> THE TERMS AND ANY ACTION RELATED
          THERETO WILL BE GOVERNED AND INTERPRETED BY AND UNDER THE LAWS OF THE
          STATE OF NEW YORK, NY, CONSISTENT WITH THE FEDERAL ARBITRATION ACT,
          WITHOUT GIVING EFFECT TO ANY PRINCIPLES THAT PROVIDE FOR THE
          APPLICATION OF THE LAW OF ANOTHER JURISDICTION. THE UNITED NATIONS
          CONVENTION ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS DOES NOT
          APPLY TO THE AGREEMENT.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.9 Choice of Language. </strong> It is the express wish of
          the parties that the Agreement and all related documents have been
          drawn up in English.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.10 Notice. </strong> Where Flashboard requires that you
          provide an e-mail address, you are responsible for providing
          Flashboard with your most current e-mail address. In the event that
          the last e-mail address you provided to Flashboard is not valid, or
          for any reason is not capable of delivering to you any notices
          required/ permitted by the Agreement, Flashboard’s dispatch of the
          e-mail containing such notice will nonetheless constitute effective
          notice. You may give notice to Flashboard at the following address:
          info@flashtapmobile.com. Such notice shall be deemed given when
          received by Flashboard by letter delivered by nationally recognized
          overnight delivery service or first class postage prepaid mail at the
          above address.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.11 Waiver. </strong> Any waiver or failure to enforce any
          provision of the Agreement on one occasion will not be deemed a waiver
          of any other provision or of such provision on any other occasion.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.12 Severability. </strong> If any portion of this Agreement
          is held invalid or unenforceable, that portion shall be construed in a
          manner to reflect, as nearly as possible, the original intention of
          the parties, and the remaining portions shall remain in full force and
          effect.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>
            16.13 Accessing and Downloading the Application from iTunes.
          </strong>{" "}
          The following applies to any App Store Sourced Application accessed
          through or downloaded from the Apple App Store:
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(a)</strong> You acknowledge and agree that (i) the Agreement
          is concluded between you and Flashboard only, and not Apple, and (ii)
          Flashboard, not Apple, is solely responsible for the App Store Sourced
          Application and content thereof. Your use of the App Store Sourced
          Application must comply with the App Store Terms of Service.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(b)</strong> You acknowledge that Apple has no obligation
          whatsoever to furnish any maintenance and support services with
          respect to the App Store Sourced Application.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(c)</strong> In the event of any failure of the App Store
          Sourced Application to conform to any applicable warranty, you may
          notify Apple, and Apple will refund the purchase price for the App
          Store Sourced Application to you and to the maximum extent permitted
          by applicable law, Apple will have no other warranty obligation
          whatsoever with respect to the App Store Sourced Application. As
          between Flashboard and Apple, any other claims, losses, liabilities,
          damages, costs or expenses attributable to any failure to conform to
          any warranty will be the sole responsibility of Flashboard.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(d)</strong> You and Flashboard acknowledge that, as between
          Flashboard and Apple, Apple is not responsible for addressing any
          claims you have or any claims of any third party relating to the App
          Store Sourced Application or your possession and use of the App Store
          Sourced Application, including, but not limited to: (i) product
          liability claims; (ii) any claim that the App Store Sourced
          Application fails to conform to any applicable legal or regulatory
          requirement; and (iii) claims arising under consumer protection or
          similar legislation.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(e)</strong> You and Flashboard acknowledge that, in the event
          of any third-party claim that the App Store Sourced Application or
          your possession and use of that App Store Sourced Application
          infringes that third party’s intellectual property rights, as between
          Flashboard and Apple, Flashboard, not Apple, will be solely
          responsible for the investigation, defense, settlement and discharge
          of any such intellectual property infringement claim to the extent
          required by the Agreement.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(f)</strong> You and Flashboard acknowledge and agree that
          Apple, and Apple’s subsidiaries, are third-party beneficiaries of the
          Agreement as related to your license of the App Store Sourced
          Application, and that, upon your acceptance of the terms and
          conditions of the Agreement, Apple will have the right (and will be
          deemed to have accepted the right) to enforce the Agreement as related
          to your license of the App Store Sourced Application against you as a
          third-party beneficiary thereof.
        </p>
        <p className={`${styles.content} ${styles.contentIndentDouble}`}>
          <strong>(g)</strong> Without limiting any other terms of the
          Agreement, you must comply with all applicable third-party terms of
          agreement when using the App Store Sourced Application.
        </p>

        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.14 Consumer Complaints. </strong> In accordance with
          California Civil Code §1789.3, you may report complaints to the
          Complaint Assistance Unit of the Division of Consumer Services of the
          California Department of Consumer Affairs by contacting them in
          writing at 400 R Street, Sacramento, CA 95814, or by telephone at
          (800) 952-5210.
        </p>
        <p className={`${styles.content} ${styles.contentIndent}`}>
          <strong>16.15 Entire Agreement. </strong> The Agreement is the final,
          complete and exclusive agreement of the parties with respect to the
          subject matter hereof and supersedes and merges all prior discussions
          between the parties with respect to such subject matter.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermOfServices;
