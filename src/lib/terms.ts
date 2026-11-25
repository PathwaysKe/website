/**
 * Pathways Terms of Service — single source for /terms, /terms/print and the downloadable PDF.
 * The mobile app links here (mobile-app-v1/lib/helpers/links.dart → https://pathways.ke/terms).
 *
 * Long-term document: no dated offers and no fixed school prices (each School Agreement carries those).
 * It describes the intended product; features it relies on that are not yet built are tracked in GitHub
 * issues (see OPEN_POINTS). Decisions behind each clause: memory "terms-and-agreement-decisions".
 *
 * The School Services Agreement (print-collateral/proposal-short.html) is one signed page that refers here
 * for everything except the option, learners covered, Seat Price, start date and contacts. Keep the
 * "School Agreement" section in step with that page.
 *
 * Numbering is generated (see legal.ts): {{.3}}, {{id}}, {{id.3}}, and {{pp:id}} for Privacy Policy sections.
 */
import { ENTITY, LEGAL_STATUS, numberSections, type Section } from './legal';
import { PRIVACY_NUM } from './privacy';

export const TERMS = {
  ...LEGAL_STATUS,
  ...ENTITY,
  version: '1.0',
  pdf: '/legal/pathways-terms-of-service-v1.0.pdf',
};

/** Points still open before publication; shown only while draft is true. */
export const OPEN_POINTS = [
  'Features these Terms describe that are still being built are tracked in GitHub issues: in-app account deletion and unlinking, paid-period reminders, instalment billing with access from signing, learner reporting and safeguarding alerts in the Learning Assistant, and recorded acceptance (backend#2289–2295, mobile-app-v1#681–685, pathways-web#1314). Publish once they ship, or adjust the wording.',
  'Advocate review, in particular the liability, data-processing and third-party content sections.',
];

/** Plain-language summary shown above the Terms. It is not part of the Terms. */
export const TERMS_SUMMARY = [
  'Pathways is provided by Stawi Edtech LLP. Accounts are for adults; children use Pathways through a profile their parent or school sets up.',
  'Parents: there is a free plan and paid plans priced per household. You pay by M-PESA when you choose to. Nothing renews or charges automatically.',
  'Schools: the portal, set-up, training and support cost nothing. A school that chooses to fund the app for its learners pays the per-learner price in its School Agreement, in two instalments each term.',
  'Personal data is never sold or used for advertising. Schools control the data they enter; we process it for them.',
  'The Learning Assistant is an AI study aid. Reported conversations are reviewed by our team, and safeguarding concerns are passed to parents.',
  'If something goes wrong: talk to us first, then mediation, then the Kenyan courts.',
];

const T = ENTITY;
const PARENTS = 'Parents and learners';
const SCHOOLS = 'Schools';
const ALL = 'Everyone';

const RAW: Section[] = [
  /* ---------------------------------------------------------------- General */
  {
    id: 'about',
    part: 'About these Terms',
    title: 'Who we are and what these Terms cover',
    html: `
<p><strong>{{.1}}</strong> These Terms of Service (the <strong>Terms</strong>) are an agreement between you and <strong>${T.company}</strong>, a limited liability partnership registered in Kenya (number ${T.reg}), trading as <strong>${T.trading}</strong> (<strong>we</strong>, <strong>us</strong>).</p>
<p><strong>{{.2}}</strong> They apply to the Pathways mobile app, the Pathways school portal at platform.pathways.ke, the website at pathways.ke, and any related service we provide (the <strong>Services</strong>).</p>
<p><strong>{{.3}} Accepting them.</strong> A Parent accepts these Terms when creating an account, a School by signing a School Agreement, and a School User when first signing in to the Portal. We record the version accepted and when. If you do not agree, please do not use the Services.</p>
<p><strong>{{.4}} Related documents.</strong> Our <a href="/privacy">Privacy Policy</a> explains how we handle personal data. For Schools, the School Agreement and the Data Processing Schedule (section {{dps}}) also apply. Section {{general.2}} says which applies if they differ.</p>
<p><strong>{{.5}} How these Terms are arranged.</strong> Sections {{about}} to {{accounts}} apply to everyone. Sections {{parent-plans}} to {{linking}} apply to Parents and Learners, and sections {{school-agreement}} to {{school-duties}} to Schools. Sections {{acceptable-use}} to {{contact}} apply to everyone. The Data Processing Schedule (section {{dps}}) applies to Schools.</p>`,
  },
  {
    id: 'definitions',
    title: 'Definitions',
    html: `
<ul>
<li><strong>App:</strong> the Pathways mobile app for parents and learners.</li>
<li><strong>Portal:</strong> the Pathways web platform used by Schools.</li>
<li><strong>Parent:</strong> a parent, guardian or other person with parental responsibility under the Children Act, 2022, who holds an account and manages Learner profiles.</li>
<li><strong>Learner:</strong> a child who uses Pathways through a profile created by a Parent or a School.</li>
<li><strong>School:</strong> a school that uses the Portal under a School Agreement.</li>
<li><strong>School User:</strong> a head teacher, administrator, teacher or other staff member given Portal access by a School.</li>
<li><strong>School Agreement:</strong> the School Services Agreement signed by a School and Pathways (section {{school-agreement}}).</li>
<li><strong>School Collects</strong> and <strong>Parents Pay Directly:</strong> the two funding options a School chooses between in its School Agreement (section {{school-agreement.3}}).</li>
<li><strong>Covered Learner:</strong> an active Learner in a level the School covers under School Collects.</li>
<li><strong>Seat Price:</strong> the price per Covered Learner per School Term set in the School Agreement.</li>
<li><strong>School Term:</strong> a term of the School's academic year, as set in its published calendar.</li>
<li><strong>Pathways Content:</strong> study notes, study cards, questions, tests, curriculum mapping, illustrations, the Pola mascot, software and other material we create.</li>
<li><strong>Third-Party Content:</strong> material we offer under a licence from someone else, such as an examination body, publisher or author.</li>
<li><strong>School Content:</strong> material a School or its School Users create or upload, such as schemes of work, lesson plans, records of work, tests, marks, announcements, timetables, attendance and library records.</li>
<li><strong>User Content:</strong> material a Parent or Learner submits, such as answers, photos of written work and messages.</li>
<li><strong>Learning Assistant:</strong> the AI study feature in the App (section {{learning.3}}), whatever name the App shows for it.</li>
</ul>`,
  },
  {
    id: 'eligibility',
    title: 'Who can use Pathways',
    html: `
<p><strong>{{.1}} Adults hold accounts.</strong> You must be 18 or older to create an account, and you confirm this when you sign up. Children use Pathways only through a Learner profile that their Parent or School sets up.</p>
<p><strong>{{.2}} Parents.</strong> By creating a Learner profile you confirm you are the child's Parent and consent to the child using the Services as these Terms and the Privacy Policy describe. You are responsible for supervising the child's use of the App.</p>
<p><strong>{{.3}} Schools.</strong> The person who signs a School Agreement confirms they are authorised to bind the School.</p>
<p><strong>{{.4}} School Users.</strong> A School User uses the Portal on behalf of their School, under these Terms and the School's School Agreement.</p>
<p><strong>{{.5}} No school needed.</strong> Any Parent may use the App without a School. Linking a Learner to a School is optional (section {{linking}}).</p>`,
  },
  {
    id: 'accounts',
    title: 'Accounts and security',
    html: `
<p><strong>{{.1}}</strong> Give accurate information when you sign up and keep it up to date.</p>
<p><strong>{{.2}}</strong> Keep your password, PIN and login codes secret. You are responsible for activity on your account and the Learner profiles you manage, unless it results from our failure to keep the Services secure. Tell us at once at ${T.email} if you think someone has used your account without permission.</p>
<p><strong>{{.3}}</strong> Accounts are personal and may not be shared, sold or transferred.</p>
<p><strong>{{.4}} Closing an account.</strong> A Parent can delete their account, or remove a Learner profile, at any time in the App or at <a href="/delete-data">pathways.ke/delete-data</a>. Sign-in stops straight away, and we delete the data within 30 days, except payment records the law requires us to keep (Privacy Policy section {{pp:retention}}). You can change your mind by contacting us within 7 days. School User accounts are closed by the School or through us. Records a linked School holds about a Learner stay with the School.</p>`,
  },

  /* ---------------------------------------------------------------- Parents and learners */
  {
    id: 'parent-plans',
    part: PARENTS,
    title: 'Plans and payments',
    html: `
<p><strong>{{.1}} Plans.</strong> The App has a free plan and paid plans. Each plan's features and price are shown in the App before you pay. Prices are per household and depend on the number of Learners on the account.</p>
<p><strong>{{.2}} Free trial.</strong> Where we offer a free trial, its length is shown in the App. Nothing is charged, and when it ends the account returns to the free plan unless you choose to pay.</p>
<p><strong>{{.3}} Paying.</strong> You pay by M-PESA, through a payment request sent to the phone number you give. A paid period starts when payment is confirmed. We never see your M-PESA PIN.</p>
<p><strong>{{.4}} No automatic charges.</strong> Paid plans never renew or charge you automatically, so there is nothing to cancel. We remind you in the App before a paid period ends. If you do not pay again, the account returns to the free plan and your Learners' progress is kept.</p>
<p><strong>{{.5}} Refunds.</strong> A payment is not refundable once its paid period has started. If you were charged twice, or paid without receiving access, tell us within 30 days and we will refund that amount.</p>
<p><strong>{{.6}} Learners funded by a School.</strong> A Covered Learner has the paid features through their School, and the Parent pays nothing for that Learner while the School funds them. When that ends, the Learner moves to the free plan unless the Parent chooses to pay.</p>
<p><strong>{{.7}} Promotions.</strong> Discount codes, free-access codes and referral rewards follow the conditions stated when issued. They have no cash value and cannot be sold.</p>
`,
  },
  {
    id: 'linking',
    title: 'Linking a learner to a school',
    html: `
<p><strong>{{.1}}</strong> A Parent may link a Learner's profile to the Learner's School. The App then shows the School's announcements, calendar, timetable, homework and results for that Learner, and attendance and library loans where the School turns them on.</p>
<p><strong>{{.2}}</strong> While linked, the School and its teachers see the Learner's work on tasks the School sets, such as homework, tests and assessments, and the progress built from it. They do not see Learning Assistant conversations or study the Learner does on their own (Privacy Policy section {{pp:schools}}).</p>
<p><strong>{{.3}}</strong> A Parent may unlink a Learner at any time in the App. The School then stops receiving the Learner's new activity, and any funding by the School for that Learner ends. Records the School already holds stay with the School.</p>`,
  },

  /* ---------------------------------------------------------------- Schools */
  {
    id: 'school-agreement',
    part: SCHOOLS,
    title: 'The School Agreement',
    html: `
<p><strong>{{.1}} What it contains.</strong> The School Agreement is a single signed page. It records the parties, the School's funding option, the levels and number of Learners covered, the Seat Price, the start date, and the School's contacts for notices and billing. It is signed, and stamped by the School. Everything else is set by these Terms.</p>
<p><strong>{{.2}} Included under either option.</strong> The Portal for all School Users, set-up, import of class lists, training and support are provided at no charge to the School.</p>
<p><strong>{{.3}} The two funding options.</strong></p>
<ol>
<li><strong>School Collects.</strong> The School funds the App's paid features for every Covered Learner, collects the cost with its school fees, and pays Pathways the Seat Price for each Covered Learner each School Term (section {{school-fees}}).</li>
<li><strong>Parents Pay Directly.</strong> Nothing is payable to Pathways by the School. Each Parent may subscribe in the App under section {{parent-plans}}.</li>
</ol>
<p><strong>{{.4}} Start.</strong> The School Agreement starts on the start date it shows, or when both parties have signed if that is later. Under School Collects, Covered Learners have access from then.</p>
<p><strong>{{.5}} Proposals.</strong> A proposal sent with a School Agreement is for information only and is not part of it.</p>
<p><strong>{{.6}} Trials.</strong> We may agree a free trial with a School in writing. It ends with nothing to pay unless the School signs a School Agreement.</p>`,
  },
  {
    id: 'school-fees',
    title: 'Fees under School Collects',
    html: `
<p><strong>{{.1}} Amount.</strong> Fees for each School Term are the Seat Price multiplied by the number of Covered Learners. The School confirms the number at the start of each School Term, and the invoice follows it. All active Learners in a covered level are included.</p>
<p><strong>{{.2}} The School pays.</strong> The School is responsible for the fees whether or not it has collected them from parents.</p>
<p><strong>{{.3}} Learners who join during a term</strong> get access straight away and are charged the full Seat Price if they join in the first third of the School Term, two-thirds of it in the middle third, and one-third in the final third.</p>
<p><strong>{{.4}} Learners who leave</strong> are not refunded for the current School Term and are not counted from the next one.</p>
<p><strong>{{.5}} Instalments.</strong> Each School Term's fees are paid in two equal instalments: the first by the end of week 3 of the School Term, and the second by the end of the second week after half-term (or, if there is no half-term, six weeks after the first). The School may pay both at once. Payment is by bank transfer or M-PESA to the details on our invoice.</p>
<p><strong>{{.6}} Holidays.</strong> A School Term's access continues through the holiday that follows it.</p>
<p><strong>{{.7}} Late payment.</strong> We send reminders when an instalment is overdue. If fees for a School Term are still unpaid when the next School Term starts, the School Agreement does not renew for that term (unless a payment is still being confirmed or the amount is in dispute, in which case we wait until that is settled). Covered Learners move to the free plan unless their Parents choose to pay, the Portal stays available, and no data is deleted. The unpaid fees remain due, and the School can return to School Collects from a later School Term once they are paid.</p>
<p><strong>{{.8}} Refunds.</strong> Fees for a School Term that has started are not refunded, except under section {{termination.3}}. Duplicate or mistaken payments are refunded or credited to the next invoice, as the School chooses.</p>`,
  },
  {
    id: 'school-term',
    title: 'Renewal, price changes and ending',
    html: `
<p><strong>{{.1}} Renewal.</strong> A School Agreement runs School Term by School Term and renews for each following School Term. Either party may stop renewal by written notice at least 30 days before the next School Term starts. It also does not renew while fees are unpaid (section {{school-fees.7}}). Fees already due remain payable.</p>
<p><strong>{{.2}} Changing option.</strong> A School may move between School Collects and Parents Pay Directly from the start of a School Term by written notice under section {{.1}}.</p>
<p><strong>{{.3}} Price changes.</strong> We may change the Seat Price by at least 30 days' written notice. The new price applies from the next School Term that starts after the notice, never part-way through a term. A School that does not accept it may end the School Agreement at the end of the current School Term, even if that is less than 30 days away.</p>
<p><strong>{{.4}} Other ways to end it</strong> are set out in sections {{availability.3}} and {{termination.3}}.</p>`,
  },
  {
    id: 'school-duties',
    title: "The School's responsibilities",
    html: `
<p>A School is responsible for:</p>
<ul>
<li><strong>Lawful data:</strong> having a lawful basis, including any consent needed from parents, for the personal data it enters into the Portal;</li>
<li><strong>Accuracy:</strong> what it records and publishes, including marks, merit lists, reports, attendance, timetables and announcements, and any marks suggested by automated tools before its staff publish them;</li>
<li><strong>Its own rules:</strong> its school policies, including library loan periods and fines, which Pathways records but does not set or collect;</li>
<li><strong>Its staff:</strong> who becomes a School User, their conduct on the Services, and removing access when they leave;</li>
<li><strong>Its messages:</strong> the content of announcements and messages it sends to Parents.</li>
</ul>
<p>We name a School as a Pathways client, or show its logo, only with its written consent (for example, the tick box in the School Agreement). The School may withdraw consent at any time.</p>`,
  },

  /* ---------------------------------------------------------------- Everyone */
  {
    id: 'acceptable-use',
    part: ALL,
    title: 'Rules for using Pathways',
    html: `
<p>You must not:</p>
<ul>
<li>break the law, including the Data Protection Act, 2019, the Computer Misuse and Cybercrimes Act, 2018 and the Children Act, 2022;</li>
<li>post or send anything abusive, threatening, discriminatory, sexual, defamatory or otherwise unsuitable for a service used by children;</li>
<li>collect or share someone else's personal data without a lawful reason, or contact Learners for any purpose outside the Services;</li>
<li>use the Services to cheat in a school or national assessment, or help someone else to;</li>
<li>copy, sell or publish Pathways Content or Third-Party Content outside the Services, except as section {{content}} allows;</li>
<li>access accounts, schools or data that are not yours, test or bypass our security, or interfere with the Services;</li>
<li>reverse-engineer the App or Portal, or extract content or data with automated tools, except where the law allows;</li>
<li>advertise or sell to other users without our written permission.</li>
</ul>
<p>We may remove content that breaks these rules and act under section {{termination}}.</p>`,
  },
  {
    id: 'content',
    title: 'Content and ownership',
    html: `
<p><strong>{{.1}} Pathways Content</strong> belongs to us. While you follow these Terms you may use it for learning and teaching. Schools may use it with their own Learners and staff, including printing it for class, but may not sell it or publish it outside the School.</p>
<p><strong>{{.2}} Third-Party Content</strong>, such as past examination papers, books or courses from other providers, belongs to its owners and is offered under a licence. It may be used only within the Services and on any conditions shown with it. We may change or remove it if a licence ends; if it was the main subject of a separate purchase, we will offer a similar replacement or refund the unused part.</p>
<p><strong>{{.3}} Paid content and add-ons.</strong> We may sell content or services separately from a plan, such as exam papers, revision packs or courses, from us or from partners. The price, what is included and how long access lasts are shown before you buy. Sections {{parent-plans.3}} and {{parent-plans.5}} apply unless different conditions are shown.</p>
<p><strong>{{.4}} School Content belongs to the School.</strong> The School lets us host, copy and display it only to provide the Services to that School, its Parents and Learners. We do not use it for another School or any other purpose without the School's written permission.</p>
<p><strong>{{.5}} User Content</strong> stays yours. You let us host, process and display it to provide the Services to you and, if you link a Learner to a School, to that School.</p>
<p><strong>{{.6}} Curriculum.</strong> Pathways Content follows the curriculum designs published by the Kenya Institute of Curriculum Development. Pathways is independent and is not endorsed by the Ministry of Education, KICD or KNEC unless we say so for a specific item.</p>
<p><strong>{{.7}} Feedback.</strong> We may use ideas you send us to improve the Services without owing you anything.</p>
<p><strong>{{.8}} Our brand.</strong> "Pathways", our logo and Pola are our trade marks.</p>`,
  },
  {
    id: 'learning',
    title: 'Learning, AI features and safeguarding',
    html: `
<p><strong>{{.1}} Supporting learning.</strong> Pathways supports learning at school and at home. It does not replace teachers, schools or parents, and we do not promise any particular mark or result.</p>
<p><strong>{{.2}} Our content.</strong> We prepare and review Pathways Content carefully and keep improving it. The grades and subjects available grow over time and are shown in the App and Portal. If something looks wrong or unclear, tell us in the App or at ${T.email} and we will review it.</p>
<p><strong>{{.3}} The Learning Assistant</strong> is an AI study feature in the App. It helps Learners work through questions and explains ideas step by step, in line with the curriculum they study. It works alongside notes, lessons and teachers.</p>
<p><strong>{{.4}} How it works.</strong> Its replies are generated automatically, so a person does not check each one before it is shown. We design and monitor it to keep it accurate, age-appropriate and focused on learning. Learners should check what they learn against their notes and ask their teacher about anything still unclear.</p>
<p><strong>{{.5}} Using it well.</strong> Learners should not share personal details such as a full name, address or phone number in a conversation, or use it to do work meant to be their own.</p>
<p><strong>{{.6}} Reporting.</strong> Learners and Parents can report a reply in the App or at ${T.email}. Our team reviews every report, so our staff may read the reported conversation. Otherwise, staff read conversations only for a safeguarding concern (Privacy Policy section {{pp:ai}}).</p>
<p><strong>{{.7}} AI-assisted marking.</strong> Some features use AI to help mark answers, including photographed written work, and to suggest feedback. Teachers can review marks for School tasks before they are published, and those marks are the School's responsibility.</p>
<p><strong>{{.8}} Safeguarding.</strong> If a Learner's messages suggest they may be at risk of harm, such as abuse, bullying or self-harm, the Learning Assistant responds supportively and shows where to get help, such as Childline Kenya on 116. Our team reviews the conversation and informs the Learner's Parent and, where the law requires, the authorities.</p>`,
  },
  {
    id: 'privacy',
    title: 'Personal data',
    html: `
<p><strong>{{.1}}</strong> We handle personal data under the Data Protection Act, 2019, as our <a href="/privacy">Privacy Policy</a> describes. We never sell personal data and never use Learners' data for advertising.</p>
<p><strong>{{.2}} Parents' data.</strong> For a Parent's account and the Learner profiles they create, we decide how the data is used (we are the data controller).</p>
<p><strong>{{.3}} Schools' data.</strong> For personal data a School enters into the Portal, or receives through linking, the School is the data controller and we process it for the School under the Data Processing Schedule (section {{dps}}).</p>
<p><strong>{{.4}} Service providers.</strong> We use providers for hosting, AI features, payments, email, notifications and crash reporting, some outside Kenya. Privacy Policy sections {{pp:sharing}} and {{pp:transfers}} list them and the safeguards we use.</p>
<p><strong>{{.5}} How long we keep data</strong> is set out in Privacy Policy section {{pp:retention}}. In short: a Parent's data is deleted within 30 days of the account being deleted; a School's records are kept for 12 months after its School Agreement ends so it can ask for them back, then deleted (sooner if it asks); payment records are kept for 7 years. Results a School has shared with a linked Parent stay in that Parent's account.</p>
<p><strong>{{.6}} Your rights</strong> to access, correct or delete your data, and how to use them, are in Privacy Policy section {{pp:rights}}.</p>`,
  },
  {
    id: 'availability',
    title: 'Availability and changes to the Services',
    html: `
<p><strong>{{.1}}</strong> We use reasonable efforts to keep the Services available and working, but cannot promise they will never be interrupted. Availability also depends on things outside our control, such as mobile networks.</p>
<p><strong>{{.2}} Maintenance.</strong> We give advance notice of planned maintenance that interrupts the Services, and schedule it outside school hours where we can.</p>
<p><strong>{{.3}} Changes.</strong> We may add, change or remove features. If we remove a feature that is a significant part of a paid plan or a School Agreement, we will tell affected users in advance, and a School may end its School Agreement at the end of the current School Term without the notice in section {{school-term.1}}.</p>
<p><strong>{{.4}} New features</strong> may be labelled preview or beta, and may change before they are finished.</p>
<p><strong>{{.5}} Other providers.</strong> Parts of the Services rely on others, such as Safaricom for M-PESA and Google Play for the App. Their own terms apply to their services, and we are not responsible for their failures.</p>`,
  },
  {
    id: 'termination',
    title: 'Suspension and ending',
    html: `
<p><strong>{{.1}} By you.</strong> A Parent may stop using the App and delete their account at any time. A School may end its School Agreement under section {{school-term.1}}, {{school-term.3}}, {{availability.3}} or {{.3}}.</p>
<p><strong>{{.2}} By us.</strong> We may suspend or close an account, or a School's access, if it seriously or repeatedly breaks these Terms, if the law or an authority requires it, if needed to protect Learners or the Services. Where reasonable, we will warn you first and give you a chance to put things right.</p>
<p><strong>{{.3}} Serious breach.</strong> A School or Pathways may end a School Agreement by written notice if the other seriously breaks it, including the Data Processing Schedule, and does not put it right within 30 days of being asked. If a School ends it because of our breach, we refund the fees paid for the rest of the current School Term.</p>
<p><strong>{{.4}} Afterwards.</strong> The right to use the Services ends. Fees already due, and sections {{content}}, {{privacy}}, {{liability}}, {{school-claims}}, {{disputes}}, {{general}} and {{dps}}, continue to apply.</p>`,
  },
  {
    id: 'liability',
    title: 'Responsibility and limits',
    html: `
<p><strong>{{.1}} Your legal rights.</strong> Nothing in these Terms limits rights you have under the Consumer Protection Act, 2012, the Data Protection Act, 2019 or any other law that cannot be limited by agreement, or liability for fraud, wilful misconduct, or death or personal injury caused by negligence.</p>
<p><strong>{{.2}} Excluded losses.</strong> Subject to section {{.1}}, neither Pathways nor a School is responsible to the other, and Pathways is not responsible to a Parent, for loss of profit, business or opportunity, indirect or consequential loss, loss caused by information someone else entered or published (unless caused by our breach), or loss caused by events beyond reasonable control (section {{general.5}}).</p>
<p><strong>{{.3}} Limit for Parents.</strong> Subject to section {{.1}}, our total liability to a Parent is limited to the greater of what the Parent paid us in the 12 months before the event that caused the claim, and KES 5,000.</p>
<p><strong>{{.4}} Limit between Pathways and a School.</strong> Subject to section {{.1}}, each party's total liability to the other is limited to the fees paid and payable under the School Agreement in the 12 months before the event that caused the claim. This does not limit the School's duty to pay fees.</p>`,
  },
  {
    id: 'school-claims',
    title: 'Claims caused by a School',
    html: `
<p>A School will cover Pathways' reasonable costs of a claim by someone else that results from the School breaking section {{school-duties}}, for example by entering personal data without a lawful basis, subject to section {{liability.4}}. We will tell the School promptly about such a claim and cooperate in dealing with it. This section does not apply to Parents or Learners.</p>`,
  },
  {
    id: 'disputes',
    title: 'Complaints and disputes',
    html: `
<p><strong>{{.1}} Talk to us first.</strong> Contact us at ${T.email}. We aim to reply within 5 working days. If a dispute is not resolved, either side may give written notice of it, and both will try in good faith to settle it within 30 days.</p>
<p><strong>{{.2}} Mediation.</strong> If it is not settled, either side may refer it to a mediator agreed by both or, failing agreement within 14 days, appointed by the Chartered Institute of Arbitrators (Kenya Branch). Each side pays its own costs and half the mediator's fees.</p>
<p><strong>{{.3}} Courts.</strong> If mediation has not settled it within 60 days, or either side refuses to mediate, the courts of Kenya decide it. Either side may still ask a court for urgent relief, and anyone may complain to the Office of the Data Protection Commissioner or use other procedures the law gives them.</p>
<p><strong>{{.4}} Law.</strong> These Terms and every School Agreement are governed by the laws of Kenya.</p>`,
  },
  {
    id: 'changes',
    title: 'Changes to these Terms',
    html: `
<p><strong>{{.1}}</strong> Each version of these Terms has a number and date, shown at the top. Earlier versions are available on request.</p>
<p><strong>{{.2}}</strong> We give at least 30 days' notice of changes that materially affect your rights, by email, in the App or in the Portal. Corrections and changes that do not reduce your rights, or that the law requires, may apply straight away.</p>
<p><strong>{{.3}} Schools.</strong> A School stays on the version named in its School Agreement until the first School Term that starts after notice of a new version. Fee changes follow section {{school-term.3}}.</p>
<p><strong>{{.4}}</strong> If you keep using the Services after a change takes effect, the new version applies. If you do not agree, you may stop using the Services, and a School may end its School Agreement at the end of the current School Term.</p>`,
  },
  {
    id: 'general',
    title: 'General',
    html: `
<p><strong>{{.1}} Whole agreement.</strong> These Terms, the Privacy Policy and, for a School, its School Agreement are the whole agreement about the Services. Proposals, brochures and other marketing material are not part of it.</p>
<p><strong>{{.2}} Which document applies.</strong> For a School, its School Agreement applies first, then the Data Processing Schedule (for School data), then these Terms. For a Parent, these Terms apply, and the Privacy Policy applies to how personal data is handled.</p>
<p><strong>{{.3}} Transfer.</strong> You may not transfer your rights under these Terms without our written consent. We may transfer ours to an organisation that takes over the Services, and will tell you; your rights will not be reduced.</p>
<p><strong>{{.4}} Severability.</strong> If a court finds part of these Terms invalid, the rest still applies.</p>
<p><strong>{{.5}} Events beyond reasonable control.</strong> Neither side is responsible for failures caused by events beyond its reasonable control, such as power or network outages, natural disasters or civil unrest. This does not excuse payment for access already received.</p>
<p><strong>{{.6}} No waiver.</strong> A right not enforced straight away can still be enforced later.</p>
<p><strong>{{.7}} Notices.</strong> We send notices to the email or phone number on your account, in the App or Portal, or, for a School, to the contact for notices in its School Agreement (invoices go to its billing contact). Send notices to us at ${T.email} or ${T.postal}.</p>
<p><strong>{{.8}} Language.</strong> If these Terms are translated, the English version applies.</p>`,
  },
  {
    id: 'contact',
    title: 'Contact us',
    html: `
<p><strong>${T.company}, trading as ${T.trading}</strong><br>Registration number ${T.reg}<br>${T.office}<br>${T.postal}<br>Email: <a href="mailto:${T.email}">${T.email}</a><br>Phone and WhatsApp: ${T.phone}</p>`,
  },
  {
    id: 'dps',
    part: 'Schedule',
    title: 'Data Processing Schedule (Schools)',
    html: `
<p>This schedule is the written contract between a School, as data controller, and Pathways, as data processor, under the Data Protection Act, 2019. It applies to personal data we process for a School under section {{privacy.3}} (<strong>School Data</strong>) and forms part of every School Agreement.</p>
<p><strong>{{.1}} Purpose and duration.</strong> We process School Data to provide the Services to the School, its School Users, Parents and Learners, for as long as the School Agreement lasts, and then as section {{.9}} describes.</p>
<p><strong>{{.2}} Data.</strong> School Data may include Learners' names, grades, classes, admission numbers, gender, attendance, marks, assessment answers (including photos of written work), progress and library records; Parents' names and contact details; and School Users' names, contact details and roles (Privacy Policy section {{pp:collect.5}}).</p>
<p><strong>{{.3}} Instructions.</strong> We process School Data only on the School's instructions, given by the School Agreement, these Terms and its use of the Portal. If the law requires otherwise, we tell the School first where the law allows.</p>
<p><strong>{{.4}} Confidentiality and security.</strong> Our staff and contractors who access School Data are bound by confidentiality. We protect it with appropriate measures, including encryption, access controls and access only for those who need it (Privacy Policy section {{pp:security}}).</p>
<p><strong>{{.5}} Service providers.</strong> The School authorises the providers listed in Privacy Policy section {{pp:sharing}}. Each is bound by written terms protecting the data at least as well as this schedule. We give the School 30 days' notice of a new provider; the School may object on reasonable data-protection grounds and, if we cannot resolve it, end its School Agreement without penalty.</p>
<p><strong>{{.6}} Transfers outside Kenya</strong> happen only where the Data Protection Act, 2019 allows, with appropriate safeguards. We keep a record of them and share it with the School on request (Privacy Policy section {{pp:transfers}}).</p>
<p><strong>{{.7}} Breaches.</strong> We tell the School within 48 hours of becoming aware of a breach affecting School Data, with what it needs to meet its own duties, and help it notify the Data Protection Commissioner and affected people.</p>
<p><strong>{{.8}} Assistance.</strong> We help the School respond to people exercising their data rights, carry out impact assessments, and consult the Data Protection Commissioner.</p>
<p><strong>{{.9}} End of processing.</strong> When the School Agreement ends, we return School Data on request and delete it after 12 months, or sooner if the School asks, unless the law requires us to keep it.</p>
<p><strong>{{.10}} Audit.</strong> We give the School the information it reasonably needs to show compliance, and allow one audit a year by the School or its auditor, on 30 days' notice, during business hours and at the School's cost.</p>`,
  },
];

export const SECTIONS: Section[] = numberSections(RAW, 'terms.ts', { pp: PRIVACY_NUM });
