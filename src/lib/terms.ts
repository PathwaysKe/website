/**
 * Pathways Terms of Service — single source for the /terms page (and its printed copy).
 * The mobile app links here (mobile-app-v1/lib/helpers/links.dart → https://pathways.ke/terms).
 *
 * Long-term document: no dated offers and no fixed prices (the App and each School Agreement carry those).
 * The Terms describe the intended product; features they rely on that are not yet built are tracked in
 * GitHub issues (see OPEN_POINTS). Decisions behind each clause: memory "terms-and-agreement-decisions".
 *
 * Numbering is generated: inside a section's html, `{{.3}}` becomes "<section no>.3", and `{{id}}` or
 * `{{id.3}}` becomes the number of the section with that id. Never type section numbers by hand.
 */
export const TERMS = {
  draft: true,
  version: '1.0',
  effective: 'to be set on publication',
  updated: '23 November 2026',
  company: 'Stawi Edtech LLP',
  trading: 'Pathways',
  reg: 'LLP-BP5SDE',
  email: 'support@pathways.ke',
  phone: '0764 626 668',
  office: 'Greatwall Gardens, Wuyi Road, Athi River, Machakos County',
  postal: 'P.O. Box 44682-00100, Nairobi',
};

/** Points still open before publication; shown only while draft is true. */
export const OPEN_POINTS = [
  'Features these Terms describe that are still being built (in-app account deletion, unlinking a learner, paid-period reminders, instalment billing with access from signing, learner reporting in the Learning Assistant, safeguarding alerts, recorded acceptance) are tracked in GitHub issues. Publish once they ship, or adjust the wording.',
  'Republish the Privacy Policy alongside these Terms (same entity, school data, all service providers).',
  'Advocate review of the whole document, in particular the liability, data-processing and third-party content clauses.',
];

type Section = { id: string; title: string; html: string };
const T = TERMS;

const RAW: Section[] = [
  {
    id: 'about',
    title: 'About these terms',
    html: `
<p><strong>{{.1}}</strong> These Terms of Service (the <strong>Terms</strong>) are a legal agreement between you and <strong>${T.company}</strong>, a limited liability partnership registered in Kenya (registration number ${T.reg}), trading as <strong>${T.trading}</strong> (<strong>Pathways</strong>, <strong>we</strong>, <strong>us</strong> or <strong>our</strong>).</p>
<p><strong>{{.2}}</strong> They apply whenever you use any part of Pathways: the Pathways mobile app, the Pathways school portal at platform.pathways.ke, the website at pathways.ke, and any related service we provide (together, the <strong>Services</strong>).</p>
<p><strong>{{.3}} How you accept them.</strong> A Parent accepts these Terms by confirming acceptance when creating an account. A School accepts them by signing a School Agreement. A School User accepts them when first signing in to the Portal. We keep a record of the version accepted and when. If you do not agree to these Terms, please do not use the Services.</p>
<p><strong>{{.4}}</strong> These Terms work together with our <a href="/privacy">Privacy Policy</a> and, for Schools, the School Agreement and the Data Processing Schedule in section {{dps}}. Section {{general.2}} explains which applies if they differ.</p>`,
  },
  {
    id: 'definitions',
    title: 'Definitions',
    html: `
<p>In these Terms:</p>
<ul>
<li><strong>App</strong> means the Pathways mobile application for parents and learners.</li>
<li><strong>Portal</strong> means the Pathways web platform used by Schools and School Users.</li>
<li><strong>Parent</strong> means a parent, legal guardian or other person with parental responsibility for a child under the Children Act, 2022, who holds a Pathways account and manages one or more Learner profiles.</li>
<li><strong>Learner</strong> means a child who uses Pathways through a profile created by a Parent or by a School.</li>
<li><strong>School</strong> means a school or other educational institution that uses the Portal under a School Agreement.</li>
<li><strong>School User</strong> means a head teacher, administrator, teacher or other staff member given access to the Portal by a School.</li>
<li><strong>School Agreement</strong> means the School Services Agreement signed by a School and Pathways, made up of its schedule and key terms. A proposal that accompanies it is for information only and does not form part of it.</li>
<li><strong>Seat Price</strong> means the price per Learner per School Term set in a School Agreement.</li>
<li><strong>Sponsorship</strong> means an arrangement under which a School pays for its Learners' access to the paid features of the App.</li>
<li><strong>School Term</strong> means a term of the School's academic year, as set in the School's published calendar.</li>
<li><strong>Pathways Content</strong> means study notes, study cards, worked examples, questions, tests, curriculum mapping, illustrations, the Pola mascot, software and other material that we create.</li>
<li><strong>Third-Party Content</strong> means material we make available under a licence or arrangement with someone else, such as examination bodies, publishers, authors or other content partners.</li>
<li><strong>School Content</strong> means material created or uploaded by a School or its School Users, such as schemes of work, lesson plans, records of work, questions, tests, marks, announcements, timetables, attendance and library records.</li>
<li><strong>User Content</strong> means material a Parent or Learner submits, such as answers, photos of written work, messages and profile details.</li>
<li><strong>Learning Assistant</strong> means the AI-powered study feature in the App described in section {{learning.3}}, whatever name it is shown under in the App.</li>
</ul>`,
  },
  {
    id: 'eligibility',
    title: 'Who can use Pathways',
    html: `
<p><strong>{{.1}} Adults hold accounts.</strong> You must be at least 18 years old to create a Pathways account, and you confirm this when you sign up. Children use Pathways only through a Learner profile created and managed by their Parent, or set up by their School.</p>
<p><strong>{{.2}} Parents.</strong> By creating a Learner profile you confirm that you are that child's Parent, and that you consent to the child using the Services as described in these Terms and the Privacy Policy. You are responsible for supervising the child's use of the App.</p>
<p><strong>{{.3}} Schools.</strong> The person who signs a School Agreement confirms that they are authorised to bind the School. A School decides which staff become School Users and must remove access when a staff member leaves.</p>
<p><strong>{{.4}} School Users.</strong> If you use the Portal as a School User, you do so on behalf of your School. Your School's School Agreement and these Terms both apply to you.</p>
<p><strong>{{.5}} Independent use of the App.</strong> Any Parent may use the App without a School. Linking a Learner to a School is optional and is described in section {{linking}}.</p>`,
  },
  {
    id: 'accounts',
    title: 'Accounts and security',
    html: `
<p><strong>{{.1}}</strong> You must give accurate information when you create an account and keep it up to date.</p>
<p><strong>{{.2}}</strong> Keep your password, PIN and any login codes secret. You are responsible for activity on your account and on the Learner profiles you manage, unless it results from our failure to keep the Services secure.</p>
<p><strong>{{.3}}</strong> Tell us at once at ${T.email} if you believe someone has accessed your account without permission.</p>
<p><strong>{{.4}}</strong> Accounts are personal. Do not share an account, sell it or transfer it to someone else. A School may reassign a staff member's classes to another School User, but not a School User's login.</p>
<p><strong>{{.5}} Closing your account.</strong> A Parent can delete their account, or remove a Learner profile, at any time in the App or at <a href="/delete-data">pathways.ke/delete-data</a>. Section {{privacy.7}} explains what happens to the data.</p>`,
  },
  {
    id: 'parent-plans',
    title: 'Plans and payments for parents',
    html: `
<p><strong>{{.1}} Plans.</strong> The App offers a free plan and one or more paid plans. The features and price of each plan are shown in the App before you pay. Prices are per household and depend on the number of Learners on the account. The price shown when you pay applies to that period.</p>
<p><strong>{{.2}} Free trial.</strong> Where we offer a free trial of a paid plan, its length is shown in the App. No payment is taken for a trial, and when it ends your account returns to the free plan unless you choose to pay.</p>
<p><strong>{{.3}} Paying.</strong> Parents pay by M-PESA through a payment request sent to the phone number you give. A paid period starts when your payment is confirmed. We do not see or store your M-PESA PIN.</p>
<p><strong>{{.4}} No automatic charges.</strong> Paid plans do not renew or charge you automatically, so there is nothing to cancel. Before a paid period ends we remind you in the App. If you do not pay for the next period, your account returns to the free plan when the current period ends, and your Learners' progress and history are kept.</p>
<p><strong>{{.5}} Refunds.</strong> Payments are not refundable once a paid period has started, and we do not refund part of a period if you stop using the App. If you were charged twice for the same period, or charged for a payment that did not give you access, contact us within 30 days and we will refund the extra or failed amount.</p>
<p><strong>{{.6}} Sponsored Learners.</strong> If a School sponsors a Learner, the Parent does not pay for that Learner's access while the Sponsorship lasts, and sections {{.2}} to {{.5}} do not apply to that Learner. When a Sponsorship ends, the Learner moves to the free plan unless the Parent chooses to pay.</p>
<p><strong>{{.7}} Promotional codes and rewards.</strong> Discount codes, free-access codes and referral rewards are subject to the conditions stated when they are issued (for example, some cannot be used during a free trial). They have no cash value and may not be sold.</p>
<p><strong>{{.8}} Taxes.</strong> Pathways is not registered for VAT, so no VAT is added to prices. If that changes, we will give at least 30 days' notice of any effect on prices.</p>`,
  },
  {
    id: 'school-services',
    title: 'School services, fees and payment',
    html: `
<p><strong>{{.1}} School Agreement.</strong> A School's chosen option, the grades and Learners covered, the Seat Price and the start date are set out in its School Agreement.</p>
<p><strong>{{.2}} Trials.</strong> We may agree a free trial with a School. Its length and scope are those agreed in writing, and it ends with nothing to pay unless the School signs a School Agreement for a paid option.</p>
<p><strong>{{.3}} Access.</strong> Sponsored access starts when the School Agreement is signed, or on the start date in it if later. Every active Learner in a covered grade receives access, including Learners admitted during a School Term, and is counted for billing. A School Term's access continues through the holiday that follows it, until the next School Term begins.</p>
<p><strong>{{.4}} Fees.</strong> Fees for each School Term are the Seat Price multiplied by the number of covered Learners. The number of Learners is confirmed with the School at the start of each School Term, and that School Term's invoice follows the confirmed number.</p>
<p><strong>{{.5}} Learners who join or leave during a School Term.</strong> A Learner who joins in the first third of a School Term is charged the full Seat Price, in the middle third two-thirds of it, and in the final third one-third of it. Fees for a Learner who leaves during a School Term are not refunded; the Learner is not counted from the next School Term.</p>
<p><strong>{{.6}} Instalments.</strong> Each School Term's fees are payable in two equal instalments:</p>
<ol>
<li>the first, by the end of the third week of the School Term; and</li>
<li>the second, by the end of the second week after the School Term's half-term break, or, if the School Term has no half-term break, six weeks after the first instalment is due.</li>
</ol>
<p>A School may pay a School Term's fees at once. Payment is by bank transfer or M-PESA to the details on our invoice.</p>
<p><strong>{{.7}} Taxes.</strong> Pathways is not registered for VAT, so no VAT is added to fees. If that changes, we will give at least 30 days' notice of any effect on fees.</p>
<p><strong>{{.8}} Late payment.</strong> If an instalment is not paid when due we will send reminders. If any fees for a School Term remain unpaid when the following School Term starts, we may suspend the School's Sponsorship and paid Portal features during that following School Term until the outstanding amount is paid. Suspension does not delete any data, and full access returns once payment is received.</p>
<p><strong>{{.9}} Duration and renewal.</strong> A School Agreement runs School Term by School Term and renews automatically for each following School Term. Either side may stop renewal by giving written notice at least 30 days before the next School Term starts. Fees already due remain payable.</p>
<p><strong>{{.10}} Price changes.</strong> We may change the Seat Price by giving at least 30 days' written notice. The new price applies from the first School Term that starts after the notice period ends, never part-way through a School Term. A School that does not accept a new price may end its School Agreement at the end of the current School Term, even if that is less than 30 days away.</p>
<p><strong>{{.11}} Refunds.</strong> Fees for a School Term that has started are not refundable, except under section {{termination.3}}. Duplicate or mistaken payments are refunded or credited to the next invoice, at the School's choice.</p>
<p><strong>{{.12}} What is included.</strong> Unless the School Agreement says otherwise, the fees include set-up, import of the School's class lists, training for School Users, and support by phone, WhatsApp and email during business hours.</p>`,
  },
  {
    id: 'school-responsibilities',
    title: "Schools' responsibilities",
    html: `
<p>A School is responsible for:</p>
<ul>
<li><strong>Lawful data.</strong> having a lawful basis, including any consent required from parents, for the personal data of Learners, Parents and staff that it enters into the Portal;</li>
<li><strong>Accuracy.</strong> the accuracy of the information it records and publishes, including marks, merit lists, reports, attendance, timetables, calendars and announcements, and any marks suggested with the help of automated or AI tools before a School User publishes them;</li>
<li><strong>Its own policies.</strong> its school rules and decisions, including any library loan periods or fines, which Pathways records for the School but does not set, charge or collect;</li>
<li><strong>School Users.</strong> the conduct of its School Users on the Services, and removing access for staff who leave;</li>
<li><strong>Communications.</strong> the content of announcements and messages it sends to Parents through the Services.</li>
</ul>`,
  },
  {
    id: 'acceptable-use',
    title: 'Rules for using Pathways',
    html: `
<p>When you use the Services you must not:</p>
<ul>
<li>break any law, including the Data Protection Act, 2019, the Computer Misuse and Cybercrimes Act, 2018 and the Children Act, 2022;</li>
<li>post or send anything that is abusive, threatening, discriminatory, sexually explicit, defamatory or otherwise unsuitable for a learning service used by children;</li>
<li>collect or share another person's personal data without a lawful reason, or contact Learners outside the purposes of the Services;</li>
<li>use the Services to cheat in a school or national assessment, or to help someone else do so;</li>
<li>copy, sell, publish or redistribute Pathways Content or Third-Party Content outside the Services, except as allowed in section {{content}};</li>
<li>try to access accounts, schools or data that are not yours, test or bypass our security, or interfere with the Services;</li>
<li>copy, decompile or reverse-engineer the App or Portal, or use automated tools to extract content or data, except where the law allows it;</li>
<li>use the Services to advertise or sell to other users without our written permission.</li>
</ul>
<p>We may remove content that breaks these rules and may act under section {{termination}}.</p>`,
  },
  {
    id: 'content',
    title: 'Content and intellectual property',
    html: `
<p><strong>{{.1}} Pathways Content.</strong> We own Pathways Content and the Services. While you use the Services in line with these Terms, we give you a personal, non-exclusive, non-transferable licence to use Pathways Content for learning and teaching. Schools may use Pathways Content with their own Learners and staff, including printing it for classroom use, but may not sell it or publish it outside the School.</p>
<p><strong>{{.2}} Third-Party Content.</strong> Some content, such as past examination papers, books, assessments or courses from other providers, belongs to third parties and is made available under a licence or arrangement with them. Where practical, we show its source. Third-Party Content may be used only within the Services, for the purpose and on any further conditions shown with it, and its owners keep all their rights. If a licence ends or its owner asks us to, we may change or remove Third-Party Content. If that content was the main subject of a separate purchase, we will offer a replacement of similar value or a refund of the unused part.</p>
<p><strong>{{.3}} Paid content and add-ons.</strong> We may offer content or services sold separately from a plan, such as exam papers, revision packs, courses or other paid items, from us or from content partners. Their price, what is included, and how long access lasts are shown before you buy, and sections {{parent-plans.3}} and {{parent-plans.5}} apply to them unless different conditions are shown at the time of purchase.</p>
<p><strong>{{.4}} School Content belongs to the School.</strong> Schemes of work, lesson plans, records of work, questions, tests and other material created by School Users in the Portal belong to the School. The School gives us a licence to host, store, copy and display School Content only as needed to provide the Services to that School and its Parents and Learners. We will not use School Content for any other School, or for any other purpose, without the School's written permission.</p>
<p><strong>{{.5}} User Content.</strong> You keep ownership of User Content. You give us a licence to host, store, process and display it as needed to provide the Services to you and, where you have linked a Learner to a School, to that School.</p>
<p><strong>{{.6}} Curriculum.</strong> Pathways Content is organised around the curriculum designs published by the Kenya Institute of Curriculum Development. Pathways is independent and is not endorsed by, or affiliated with, the Ministry of Education, KICD or KNEC, unless we say so for a specific item.</p>
<p><strong>{{.7}} Feedback.</strong> If you send us ideas or suggestions, we may use them to improve the Services without owing you anything.</p>
<p><strong>{{.8}} Names and logos.</strong> "Pathways", our logo and Pola are our trade marks. We will name a School as a Pathways client, or show its logo, only with the School's written consent, which the School may withdraw at any time.</p>`,
  },
  {
    id: 'learning',
    title: 'Learning content, AI features and safeguarding',
    html: `
<p><strong>{{.1}} Supporting learning.</strong> Pathways is designed to support learning at school and at home. It does not replace teachers, schools or parents, and learning outcomes depend on many things beyond the Services. We do not promise any particular mark, grade or result in a school or national assessment.</p>
<p><strong>{{.2}} Our content.</strong> We prepare and review Pathways Content carefully and keep improving it. The grades, subjects and content available grow over time and are shown in the App and Portal. If you think something is incorrect or unclear, please tell us in the App or at ${T.email}, and we will review it promptly.</p>
<p><strong>{{.3}} The Learning Assistant.</strong> The Learning Assistant is an AI-powered feature in the App that helps Learners work through questions and explains concepts step by step, in line with the curriculum they are studying. It is a study aid that works alongside notes, lessons and teachers.</p>
<p><strong>{{.4}} How it works.</strong> Learning Assistant responses are generated automatically for each conversation, so a person does not check them before they are shown. We design and monitor it to keep it accurate, age-appropriate and focused on learning. Learners should check what they learn against their notes and lessons and ask their teacher about anything that remains unclear, and Parents should take an interest in how their children use it.</p>
<p><strong>{{.5}} Using it well.</strong> The Learning Assistant is for learning. Learners should not share personal details such as their full name, address or phone number in a conversation, and should not use it to complete work that is meant to be their own.</p>
<p><strong>{{.6}} Reporting.</strong> Learners and Parents can report a response that seems unsuitable or confusing in the App, or at ${T.email}. Our team reviews every report, which means a member of our staff may read the reported conversation.</p>
<p><strong>{{.7}} AI-assisted marking.</strong> Some features use AI to help mark answers, including written and photographed work, and to suggest feedback. Marks and feedback set by a School are the School's responsibility, and its teachers can review them before they are published.</p>
<p><strong>{{.8}} Safeguarding.</strong> If a Learner's messages suggest they may be at risk of harm, such as abuse, bullying or self-harm, the Learning Assistant responds supportively and shows where to get help, such as Childline Kenya on 116. Our team reviews the conversation and informs the Learner's Parent, and, where the law requires it, the relevant authorities.</p>`,
  },
  {
    id: 'linking',
    title: 'Linking a learner to a school',
    html: `
<p><strong>{{.1}}</strong> A Parent may link a Learner's profile to the Learner's School. When linked, the App shows the School's information for that Learner, such as announcements, the calendar, timetables, homework, results and, where the School turns them on, attendance and library loans.</p>
<p><strong>{{.2}}</strong> While linked, the Learner's School and teachers can see the Learner's work on tasks the School sets (such as homework, tests and assessments) and the progress built from it. The Privacy Policy describes this in detail.</p>
<p><strong>{{.3}}</strong> A Parent may unlink a Learner at any time in the App. The School then stops receiving the Learner's new activity, and any Sponsorship for that Learner ends. Records the School already holds remain with the School.</p>`,
  },
  {
    id: 'privacy',
    title: 'Privacy and data protection',
    html: `
<p><strong>{{.1}}</strong> We handle personal data in line with the Data Protection Act, 2019.</p>
<p><strong>{{.2}} Data a Parent gives us.</strong> For a Parent's account and the Learner profiles a Parent creates, Pathways decides how the data is used, as described in the <a href="/privacy">Privacy Policy</a>.</p>
<p><strong>{{.3}} Data a School gives us.</strong> For personal data that a School enters into the Portal, and data a School receives through linking under section {{linking}}, the School decides how it is used, and Pathways processes it on the School's behalf under the Data Processing Schedule in section {{dps}}.</p>
<p><strong>{{.4}} We never sell personal data</strong> and never use Learners' data for advertising.</p>
<p><strong>{{.5}} Service providers.</strong> We use carefully chosen providers for hosting, AI features, payments, notifications and crash reporting, some of which process data outside Kenya. The Privacy Policy lists them and explains the safeguards we use.</p>
<p><strong>{{.6}} After a School leaves.</strong> When a School Agreement ends, we keep the School's records for 12 months so that the School can return or ask for an export, and then delete them, except records we must keep by law such as invoices. A School may ask us to delete its records sooner. Information the School shared with a linked Parent, such as published results, stays in that Parent's account unless the Parent deletes it.</p>
<p><strong>{{.7}} After a Parent closes an account.</strong> When a Parent deletes their account, we delete their data and their Learners' data as the Privacy Policy describes, except records we must keep by law such as payment records. Records a linked School holds about a Learner remain with the School.</p>`,
  },
  {
    id: 'availability',
    title: 'Availability and changes to the Services',
    html: `
<p><strong>{{.1}}</strong> We use reasonable efforts to keep the Services available and working well, but we cannot promise they will always be available, uninterrupted or free of faults. Availability also depends on things outside our control, such as internet and mobile network services.</p>
<p><strong>{{.2}} Maintenance.</strong> We give advance notice of planned maintenance that will interrupt the Services, and schedule it outside school hours where we can.</p>
<p><strong>{{.3}} Changes.</strong> We keep improving the Services and may add, change or remove features. If we remove a feature that is a significant part of a paid plan or a School Agreement, we will tell affected users in advance, and a School may end its School Agreement at the end of the current School Term without the 30 days' notice in section {{school-services.9}}.</p>
<p><strong>{{.4}} New features.</strong> Some features may be labelled as new, preview or beta. They are offered so that you can try them and help us improve them, and may change before they are finished.</p>
<p><strong>{{.5}} Third-party services.</strong> Some parts of the Services rely on other providers, such as Safaricom for M-PESA payments, Google Play for distributing the App, and our hosting and AI providers. Their own terms apply to your use of their services. We choose them carefully but are not responsible for their failures.</p>`,
  },
  {
    id: 'termination',
    title: 'Suspension and termination',
    html: `
<p><strong>{{.1}} By you.</strong> A Parent may stop using the App and delete their account at any time. A School may end its School Agreement under section {{school-services.9}}, {{school-services.10}}, {{availability.3}} or {{.3}}.</p>
<p><strong>{{.2}} By us.</strong> We may suspend or close an account, or suspend a School's access, if:</p>
<ul>
<li>it seriously or repeatedly breaks these Terms;</li>
<li>we must do so to comply with the law or a lawful request from an authority;</li>
<li>it is needed to protect Learners, other users or the security of the Services; or</li>
<li>fees remain unpaid as described in section {{school-services.8}}.</li>
</ul>
<p>Where it is reasonable, we will warn you first and give you a chance to put things right.</p>
<p><strong>{{.3}} Serious breach.</strong> Either a School or Pathways may end a School Agreement by written notice if the other seriously breaks it, including by a serious breach of the Data Processing Schedule, and does not put it right within 30 days of being asked to. If a School ends it because of our breach, we refund the fees paid for the rest of the current School Term.</p>
<p><strong>{{.4}} What happens next.</strong> When an account or School Agreement ends, the right to use the Services ends. Fees already due, and sections {{content}}, {{privacy.6}}, {{privacy.7}}, {{liability}}, {{indemnity}}, {{disputes}}, {{general}} and {{dps}}, continue to apply.</p>`,
  },
  {
    id: 'liability',
    title: 'Responsibility and limits',
    html: `
<p><strong>{{.1}} Your legal rights.</strong> Nothing in these Terms limits any right you have under the Consumer Protection Act, 2012, the Data Protection Act, 2019 or any other law that cannot be limited by agreement. Nothing limits liability for fraud, wilful misconduct, or death or personal injury caused by negligence.</p>
<p><strong>{{.2}} What is excluded.</strong> Subject to section {{.1}}, neither Pathways nor a School is responsible to the other, and Pathways is not responsible to a Parent, for:</p>
<ul>
<li>loss of profit, revenue, business or opportunity, or any indirect or consequential loss;</li>
<li>loss caused by information a School or user enters, publishes or relies on, except where it results from our breach;</li>
<li>loss caused by events beyond reasonable control (section {{general.5}}); or</li>
<li>loss caused by the other party's breach of these Terms.</li>
</ul>
<p><strong>{{.3}} Limit for Parents.</strong> Subject to section {{.1}}, our total liability to a Parent for all claims connected with the Services is limited to the greater of the amount the Parent paid us in the 12 months before the event that caused the claim, and KES 5,000.</p>
<p><strong>{{.4}} Limit between Pathways and a School.</strong> Subject to section {{.1}}, each party's total liability to the other for all claims connected with a School Agreement is limited to the fees paid and payable under it in the 12 months before the event that caused the claim. This limit does not apply to the School's obligation to pay fees.</p>`,
  },
  {
    id: 'indemnity',
    title: 'Claims caused by a School',
    html: `
<p>A School agrees to compensate Pathways for reasonable costs and losses arising from a claim by a third party that results from the School's breach of section {{school-responsibilities}} (for example, entering personal data without a lawful basis, or publishing unlawful content through the Services), subject to section {{liability.4}}. We will tell the School promptly about any such claim and cooperate reasonably in dealing with it. This section does not apply to Parents or Learners.</p>`,
  },
  {
    id: 'disputes',
    title: 'Governing law and disputes',
    html: `
<p><strong>{{.1}}</strong> These Terms and every School Agreement are governed by the laws of Kenya.</p>
<p><strong>{{.2}} Talk to us first.</strong> If you have a complaint, contact us at ${T.email}. We aim to reply within 5 working days. If a dispute is not resolved, either side may give written notice of the dispute, and both sides will try in good faith to settle it within 30 days of that notice.</p>
<p><strong>{{.3}} Mediation.</strong> If the dispute is not settled within those 30 days, either side may refer it to mediation by a mediator agreed by both sides or, if they cannot agree within 14 days, appointed by the Chartered Institute of Arbitrators (Kenya Branch). Each side pays its own costs and shares the mediator's fees equally.</p>
<p><strong>{{.4}} Courts.</strong> If the dispute is not settled within 60 days of the mediator being appointed, or either side refuses to mediate, it may be taken to the courts of Kenya, which have exclusive jurisdiction. Nothing in this section stops either side from seeking urgent relief from a court, or stops a consumer or data subject from using any complaint procedure the law gives them, including complaints to the Office of the Data Protection Commissioner.</p>`,
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    html: `
<p><strong>{{.1}}</strong> We may update these Terms, for example to reflect changes to the Services or the law. Each version has a number and date shown at the top of this page, and earlier versions are available on request.</p>
<p><strong>{{.2}}</strong> For changes that materially affect your rights, we will give at least 30 days' notice by email, in the App or in the Portal before they take effect.</p>
<p><strong>{{.3}} Schools.</strong> A School is bound by the version of these Terms named in its School Agreement until the first School Term that starts after notice of a new version, and changes to fees follow section {{school-services.10}}.</p>
<p><strong>{{.4}}</strong> If you continue to use the Services after a change takes effect, the updated Terms apply. If you do not agree to a change, you may stop using the Services and, for a School, end its School Agreement at the end of the current School Term.</p>
<p><strong>{{.5}}</strong> We may make changes without notice where the law requires it or where they do not reduce your rights, such as correcting errors or clarifying wording.</p>`,
  },
  {
    id: 'general',
    title: 'General',
    html: `
<p><strong>{{.1}} Whole agreement.</strong> These Terms, the Privacy Policy and, for a School, its School Agreement and the Data Processing Schedule are the whole agreement about the Services. Proposals, brochures and other marketing material are not part of it.</p>
<p><strong>{{.2}} Which document applies.</strong> If documents conflict: for a School, its School Agreement applies first, then the Data Processing Schedule (on School data), then these Terms. For a Parent, these Terms apply, and the Privacy Policy applies on how a Parent's data is handled.</p>
<p><strong>{{.3}} Transfer.</strong> You may not transfer your rights under these Terms without our written consent. We may transfer ours to another organisation that takes over the Services, and will tell you if we do; this will not reduce your rights.</p>
<p><strong>{{.4}} Severability.</strong> If a court finds any part of these Terms invalid, the rest stays in force.</p>
<p><strong>{{.5}} Events beyond reasonable control.</strong> Neither side is responsible for delays or failures caused by events beyond its reasonable control, such as power or network outages, natural disasters, civil unrest, or actions of government or service providers. The affected side will tell the other and do what it reasonably can to limit the effect. This does not excuse the payment of fees for access already received.</p>
<p><strong>{{.6}} No waiver.</strong> If a right is not enforced straight away, it can still be enforced later.</p>
<p><strong>{{.7}} Notices.</strong> We send notices to the email address or phone number on your account, in the App or Portal, or, for Schools, to the contact person named in the School Agreement (and invoices to its billing contact). You can send notices to ${T.email} or by post to ${T.postal}.</p>
<p><strong>{{.8}} Language.</strong> These Terms are written in English. If they are translated, the English version applies.</p>`,
  },
  {
    id: 'dps',
    title: 'Data Processing Schedule (Schools)',
    html: `
<p>This schedule applies to personal data that Pathways processes on a School's behalf under section {{privacy.3}} (<strong>School Data</strong>). It forms part of every School Agreement and is the written contract between the School, as data controller, and Pathways, as data processor, under the Data Protection Act, 2019.</p>
<p><strong>{{.1}} Subject and duration.</strong> Pathways processes School Data to provide the Services to the School, its School Users, and its Parents and Learners, for as long as the School Agreement lasts and then as described in section {{.9}}.</p>
<p><strong>{{.2}} Data and people.</strong> School Data may include Learners' names, grades, classes, admission numbers, gender, attendance, marks, assessment answers (including photos of written work), progress and library records; Parents' names and contact details; and School Users' names, contact details and roles.</p>
<p><strong>{{.3}} Instructions.</strong> Pathways processes School Data only on the School's documented instructions, which are given by the School Agreement, these Terms and the School's use of the Portal. If the law requires otherwise, we tell the School first where the law allows.</p>
<p><strong>{{.4}} Confidentiality and security.</strong> Pathways ensures that its staff and contractors who access School Data are bound by confidentiality, and protects School Data with appropriate technical and organisational measures, including encryption in transit, access controls and limiting access to those who need it.</p>
<p><strong>{{.5}} Service providers.</strong> The School authorises Pathways to use the service providers listed in the Privacy Policy to process School Data. Each is bound by written terms that protect the data to a standard at least equivalent to this schedule. We give the School at least 30 days' notice of a new provider, and the School may object on reasonable data-protection grounds; if we cannot resolve the objection, the School may end its School Agreement without penalty.</p>
<p><strong>{{.6}} Transfers outside Kenya.</strong> Some providers process data outside Kenya. Pathways transfers School Data only where the Data Protection Act, 2019 allows it, with appropriate safeguards such as contractual protections, and keeps a record of the safeguards, which it shares with the School on request.</p>
<p><strong>{{.7}} Breaches.</strong> Pathways tells the School without undue delay, and in any event within 48 hours, after becoming aware of a breach affecting School Data, with the information the School needs to meet its own obligations, and helps the School to notify the Data Protection Commissioner and affected people where required.</p>
<p><strong>{{.8}} Assistance.</strong> Pathways helps the School, taking into account the nature of the processing, to respond to requests from people exercising their data protection rights, to carry out data protection impact assessments, and to consult the Data Protection Commissioner.</p>
<p><strong>{{.9}} End of processing.</strong> At the end of the School Agreement, Pathways returns School Data to the School on request and deletes it as described in section {{privacy.6}}, unless the law requires it to be kept.</p>
<p><strong>{{.10}} Information and audit.</strong> Pathways makes available the information the School reasonably needs to show compliance with this schedule, and allows an audit by the School or its appointed auditor once a year, on at least 30 days' notice, during business hours and at the School's cost.</p>`,
  },
  {
    id: 'contact',
    title: 'Contact us',
    html: `
<p><strong>${T.company}, trading as ${T.trading}</strong><br>Registration number ${T.reg}<br>${T.office}<br>${T.postal}<br>Email: <a href="mailto:${T.email}">${T.email}</a><br>Phone and WhatsApp: ${T.phone}</p>`,
  },
];

/** Resolve {{.n}} (own section) and {{id}} / {{id.n}} (other sections) to generated numbers. */
const NUM: Record<string, number> = Object.fromEntries(RAW.map((s, i) => [s.id, i + 1]));
export const SECTIONS: Section[] = RAW.map((s, i) => ({
  ...s,
  html: s.html.replace(/\{\{([a-z-]*)(\.\d+)?\}\}/g, (_m, id: string, sub?: string) => {
    const n = id ? NUM[id] : i + 1;
    if (!n) throw new Error(`terms.ts: unknown section id "${id}"`);
    return `${n}${sub ?? ''}`;
  }),
}));
