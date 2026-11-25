/**
 * Pathways Privacy Policy — single source for /privacy (replaces the old static public/privacy/index.html).
 * Kept consistent with src/lib/terms.ts (same entity, contacts, version and draft flag). Service providers
 * were taken from the backend code (supabase/functions on origin/main, 2026-11-23); update the table when a
 * provider is added. Same {{.n}} / {{id.n}} numbering scheme as terms.ts.
 */
import { ENTITY, LEGAL_STATUS, numberSections, sectionNumbers, type Section } from './legal';

export const PRIVACY = {
  ...LEGAL_STATUS,
  version: '2.0',
  pdf: '/legal/pathways-privacy-policy-v2.0.pdf',
};

/** Plain-language summary shown above the policy. */
export const PRIVACY_SUMMARY = [
  'We collect what we need to run Pathways: account and learner details, learning activity, payments, and school data a school enters.',
  'For parents\' accounts we decide how data is used. For school data, the school decides and we process it for the school.',
  'We never sell personal data or use it for advertising, and children never see ads.',
  'A linked school sees work on tasks it sets, not Learning Assistant conversations or study a learner does on their own.',
  'Some providers, including AI services, process data outside Kenya, with safeguards.',
  'You can delete a learner profile or your whole account in the app at any time.',
];

export const PRIVACY_OPEN_POINTS = [
  'Confirm where each provider stores data (in particular the Supabase region) and the transfer safeguards in section 9.',
  'Retention of website enquiries (24 months) is a proposed default; confirm.',
  'Verify section 6.1 in the code: a linked School must not see Learning Assistant conversations or practice tests a Parent sets at home (only School tasks).',
  'Confirm each AI provider account is on terms that exclude training on our data (section 7.2).',
  'Publish together with the Terms of Service; the delete-data page should then match section 11.',
];

const T = ENTITY;

const RAW: Section[] = [
  {
    id: 'who',
    title: 'Who we are',
    html: `
<p>Pathways is provided by <strong>${T.company}</strong>, a limited liability partnership registered in Kenya (registration number ${T.reg}), trading as <strong>${T.trading}</strong> (<strong>we</strong>, <strong>us</strong>, <strong>our</strong>). This policy explains what personal data we collect, why, who we share it with, how long we keep it, and the rights you have under the Data Protection Act, 2019.</p>
<p>Contact: <a href="mailto:${T.email}">${T.email}</a> · Phone and WhatsApp ${T.phone} · ${T.postal}.</p>
<p>Words with capital letters, such as Parent, Learner, School and School User, have the meanings given in our <a href="/terms">Terms of Service</a>.</p>`,
  },
  {
    id: 'scope',
    title: 'What this policy covers, and our role',
    html: `
<p>This policy covers the Pathways mobile app, the Pathways school portal at platform.pathways.ke, and the website at pathways.ke.</p>
<ul>
<li><strong>Parents' accounts and the Learner profiles they create.</strong> We decide how this data is used, so we are the <strong>data controller</strong>.</li>
<li><strong>Data a School enters into the Portal, or receives when a Parent links a Learner.</strong> The School decides how this data is used and is the data controller; we process it on the School's behalf as <strong>data processor</strong>, under the Data Processing Schedule in our Terms of Service. If you have questions about how a School uses your or your child's data, please contact the School; we will help it respond.</li>
<li><strong>People who contact us through the website.</strong> We are the data controller.</li>
</ul>`,
  },
  {
    id: 'collect',
    title: 'Information we collect',
    html: `
<p><strong>{{.1}} Parent account.</strong> Your name, email address, phone number (used for M-PESA payments) and account type. If you sign in with Google, we receive your name and email address from Google.</p>
<p><strong>{{.2}} Learner profile.</strong> The child's first name, grade, an optional username for signing in, and an avatar choice (stored as a code, not a photo). If you link the child to a School, the School and the child's admission number.</p>
<p><strong>{{.3}} Learning activity.</strong> Progress through notes, answers to quizzes, tests, homework and assessments (including photos of written work a Learner submits for marking), scores, streaks, points and badges, and the topics viewed.</p>
<p><strong>{{.4}} Learning Assistant conversations.</strong> The messages a Learner or Parent sends to the Learning Assistant and its replies, linked to the account.</p>
<p><strong>{{.5}} School data (Portal).</strong> For Learners: names, grades, classes and streams, admission numbers, gender, attendance, marks and competence levels, assessment answers, progress and library loans. For Parents: names and contact details. For School Users: names, contact details and roles, and the schemes of work, lesson plans and other material they create.</p>
<p><strong>{{.6}} Payments.</strong> For M-PESA payments: the phone number, amount, M-PESA receipt number and payment status. For Schools: billing contacts, invoices and payment records. We never see or store M-PESA PINs.</p>
<p><strong>{{.7}} Devices and technical data.</strong> Crash reports and anonymised usage events from the app, a notification token so we can send you notifications, your device's IP address in server logs, and the app and operating system version.</p>
<p><strong>{{.8}} Website enquiries.</strong> When you book a demo or contact us through the website: your name, school, role, phone number, email address and message. We use a security check to block spam.</p>
<p><strong>{{.9}} What we do not collect.</strong> We do not collect a child's date of birth, home address, government ID or a photograph of the child, and we do not collect advertising identifiers. The only photos we receive are of written work submitted for marking.</p>`,
  },
  {
    id: 'use',
    title: 'How we use it, and our legal basis',
    html: `
<table>
<thead><tr><th>Purpose</th><th>Legal basis</th></tr></thead>
<tbody>
<tr><td>Provide, operate and personalise the App and Portal</td><td>Performance of our contract with you, or with the School</td></tr>
<tr><td>Provide School services on a School's instructions</td><td>The School's instructions, as its processor</td></tr>
<tr><td>Show Parents and, where linked, teachers a Learner's progress</td><td>Performance of contract; the Parent's choice to link</td></tr>
<tr><td>Generate Learning Assistant replies, flashcards and AI-assisted marking and feedback</td><td>Performance of contract</td></tr>
<tr><td>Process payments and invoices</td><td>Performance of contract; legal obligation (financial records)</td></tr>
<tr><td>Send service emails and app notifications (for example announcements, homework and payment reminders)</td><td>Performance of contract</td></tr>
<tr><td>Review reported conversations and act on safeguarding concerns</td><td>Legitimate interest in keeping children safe; protecting vital interests; legal obligation where it applies</td></tr>
<tr><td>Fix faults, keep the Services secure and understand how features are used</td><td>Legitimate interest</td></tr>
<tr><td>Respond to website enquiries</td><td>Legitimate interest; steps at your request before a contract</td></tr>
<tr><td>Comply with the law</td><td>Legal obligation</td></tr>
</tbody></table>
<p>We do not use personal data for advertising, do not sell it, and do not use it for any purpose not listed here.</p>`,
  },
  {
    id: 'children',
    title: "Children's data",
    html: `
<p><strong>{{.1}}</strong> A Learner profile is always created by a Parent, or by the Learner's School. Children cannot hold their own accounts. By creating a profile, a Parent gives consent for the child's data to be processed as this policy describes.</p>
<p><strong>{{.2}}</strong> In the Learner's view, children can use learning content only. They cannot change account settings, make payments or see billing information.</p>
<p><strong>{{.3}}</strong> We show no advertising, and a child's name, progress and messages are never public.</p>
<p><strong>{{.4}}</strong> Parents can see their child's progress, and can remove a Learner profile or delete the whole account in the App at any time.</p>
<p><strong>{{.5}} Safeguarding.</strong> If a Learner's messages to the Learning Assistant suggest they may be at risk of harm, the Learner is shown where to get help, our team reviews the conversation, and we inform the Parent and, where the law requires, the relevant authorities.</p>`,
  },
  {
    id: 'schools',
    title: 'Schools and linking',
    html: `
<p><strong>{{.1}} What a linked School sees.</strong> When a Parent links a Learner to a School, the School and the Learner's teachers can see the Learner's work on tasks the School sets (such as homework, tests and assessments) and the progress built from it. They do not see the Learner's Learning Assistant conversations or private study activity that is not part of a School task.</p>
<p><strong>{{.2}} What the Parent sees.</strong> The School's announcements, calendar, timetable, homework and results for the Learner, and attendance and library loans where the School turns them on.</p>
<p><strong>{{.3}} Unlinking.</strong> A Parent can unlink a Learner in the App at any time. The School then stops receiving the Learner's new activity. Records the School already holds remain with the School, which is responsible for them.</p>`,
  },
  {
    id: 'ai',
    title: 'AI features',
    html: `
<p><strong>{{.1}}</strong> Some features use AI services: the Learning Assistant, flashcard generation, and AI-assisted marking and feedback on answers, including photographed written work. For these features, the relevant text, answers or images, with the curriculum context needed, are sent to the AI provider to produce a result.</p>
<p><strong>{{.2}}</strong> We use AI providers' business services, under which they do not use our users' data to train their models. We send them only what is needed for the task.</p>
<p><strong>{{.3}}</strong> AI replies and suggested marks are produced automatically. Teachers can review marks for School tasks before they are published. Our staff read Learning Assistant conversations only when one is reported or raises a safeguarding concern.</p>`,
  },
  {
    id: 'sharing',
    title: 'Who we share it with',
    html: `
<p>We share personal data only with the following, and only as needed:</p>
<table>
<thead><tr><th>Recipient</th><th>What and why</th></tr></thead>
<tbody>
<tr><td>Supabase</td><td>Database, file storage and sign-in for the App and Portal</td></tr>
<tr><td>Google (Firebase)</td><td>Crash reports, anonymised usage events and app notifications; Google sign-in if you choose it</td></tr>
<tr><td>OpenAI</td><td>Learning Assistant replies and flashcard generation</td></tr>
<tr><td>Anthropic</td><td>AI-assisted marking and feedback</td></tr>
<tr><td>Vercel</td><td>Routing of some AI marking requests</td></tr>
<tr><td>TypeSafe</td><td>Reading the layout of files a School imports</td></tr>
<tr><td>Resend</td><td>Sending service emails</td></tr>
<tr><td>Safaricom (M-PESA)</td><td>Payment requests: phone number, amount and reference</td></tr>
<tr><td>Cloudflare</td><td>Hosting the website and protecting its forms from spam</td></tr>
<tr><td>A linked School</td><td>As described in section {{schools}}</td></tr>
<tr><td>Authorities</td><td>Where Kenyan law requires it, or to protect a child at risk</td></tr>
</tbody></table>
<p>Each provider is bound by terms that require it to protect the data. We will update this list before adding a provider, and give Schools notice as our Terms of Service describe. We do not sell, rent or trade personal data.</p>`,
  },
  {
    id: 'transfers',
    title: 'Transfers outside Kenya',
    html: `
<p>Several of our providers process data outside Kenya, for example in the United States or the European Union. We transfer personal data abroad only where the Data Protection Act, 2019 allows it, with appropriate safeguards such as contractual protections, and we keep a record of those safeguards. You can ask us for details at ${T.email}.</p>`,
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    html: `
<table>
<thead><tr><th>Data</th><th>How long</th></tr></thead>
<tbody>
<tr><td>Parent account and Learner profiles, learning activity, Learning Assistant conversations</td><td>Until the account or profile is deleted; then deleted within 30 days</td></tr>
<tr><td>School data</td><td>For the School Agreement, then 12 months so the School can return or ask for an export, then deleted (sooner if the School asks)</td></tr>
<tr><td>Payment and invoice records</td><td>7 years, as financial records the law requires. If the account is deleted, they are kept without the account's name or contact details</td></tr>
<tr><td>Reported or safeguarding-flagged conversations</td><td>As long as needed to deal with the report, and any longer period the law requires</td></tr>
<tr><td>Website enquiries</td><td>Up to 24 months after our last contact</td></tr>
<tr><td>Crash reports</td><td>90 days</td></tr>
<tr><td>Server logs</td><td>30 days</td></tr>
<tr><td>Anonymised usage events</td><td>14 months</td></tr>
</tbody></table>`,
  },
  {
    id: 'rights',
    title: 'Your rights',
    html: `
<p><strong>{{.1}}</strong> Under the Data Protection Act, 2019 you have the right to be informed, to access your data, to correct it, to object to its processing, to have it deleted, to data portability, and to withdraw consent at any time.</p>
<p><strong>{{.2}} How to use them.</strong> You can delete a Learner profile or your account in the App, or at <a href="/delete-data">pathways.ke/delete-data</a>. Sign-in stops straight away and the data is deleted within 30 days; you can change your mind by contacting us within 7 days. School Users should ask their School, or contact us. For anything else, email ${T.email} with the subject "Data rights request". We acknowledge requests within 3 working days and respond within 30 days, or sooner where the law requires.</p>
<p><strong>{{.3}} School data.</strong> For data a School controls, please contact the School. If you contact us, we pass the request to the School and help it respond.</p>
<p><strong>{{.4}} Complaints.</strong> You can complain to the Office of the Data Protection Commissioner at <a href="https://www.odpc.go.ke" rel="noopener">odpc.go.ke</a>.</p>`,
  },
  {
    id: 'security',
    title: 'Security and breaches',
    html: `
<ul>
<li><strong>Encryption:</strong> all communication uses HTTPS (TLS 1.2 or higher), and stored data is encrypted at rest.</li>
<li><strong>Access controls:</strong> a household can see only its own data, a School only its own data and what linked Parents share with it, and our staff only what they need for their work.</li>
<li><strong>Sign-in:</strong> short-lived sign-in tokens; payment credentials are never stored on our servers.</li>
</ul>
<p>If a breach puts personal data at risk, we notify the Data Protection Commissioner within 72 hours where the law requires, tell affected people without undue delay, and tell affected Schools within 48 hours as our Terms of Service describe.</p>`,
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    html: `
<p>We will update this policy when our Services or the law change, and show the new date at the top. For material changes we give notice in the App, the Portal or by email before they take effect. If a change materially affects how we use children's data, we will ask Parents to acknowledge it again.</p>`,
  },
  {
    id: 'contact',
    title: 'Contact us',
    html: `
<p><strong>${T.company}, trading as ${T.trading}</strong><br>Registration number ${T.reg}<br>${T.office}<br>${T.postal}<br>Email: <a href="mailto:${T.email}">${T.email}</a><br>Phone and WhatsApp: ${T.phone}</p>`,
  },
];

export const PRIVACY_NUM = sectionNumbers(RAW);
export const PRIVACY_SECTIONS: Section[] = numberSections(RAW, 'privacy.ts');
