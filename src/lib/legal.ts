/**
 * Shared by the Terms of Service (terms.ts) and the Privacy Policy (privacy.ts): who we are, how to reach us,
 * the publication status, and the section-numbering helper.
 *
 * Numbering is generated, never typed. Inside a section's html:
 *   {{.3}}        → "<this section>.3"
 *   {{id}}        → number of the section with that id;   {{id.3}} → "<n>.3"
 *   {{pp:id}}     → number of a Privacy Policy section (only where the caller passes those numbers)
 * An unknown id fails the build, so cross-references cannot drift.
 */
export const ENTITY = {
  company: 'Stawi Edtech LLP',
  trading: 'Pathways',
  reg: 'LLP-BP5SDE',
  email: 'support@pathways.ke',
  phone: '0764 626 668',
  office: 'Greatwall Gardens, Wuyi Road, Athi River, Machakos County',
  postal: 'P.O. Box 44682-00100, Nairobi',
  web: 'pathways.ke',
};

/** Both documents are published together, so they share one status. */
export const LEGAL_STATUS = {
  draft: true,
  effective: 'to be set on publication',
  updated: '23 November 2026',
};

export type Section = { id: string; title: string; part?: string; html: string };

export function numberSections(raw: Section[], doc: string, external: Record<string, Record<string, number>> = {}): Section[] {
  const own: Record<string, number> = Object.fromEntries(raw.map((s, i) => [s.id, i + 1]));
  return raw.map((s, i) => ({
    ...s,
    html: s.html.replace(/\{\{(?:([a-z]+):)?([a-z-]*)(\.\d+)?\}\}/g, (_m, ns: string | undefined, id: string, sub?: string) => {
      const table = ns ? external[ns] : own;
      if (!table) throw new Error(`${doc}: unknown reference namespace "${ns}"`);
      const n = id ? table[id] : i + 1;
      if (!n) throw new Error(`${doc}: unknown section id "${ns ? ns + ':' : ''}${id}"`);
      return `${n}${sub ?? ''}`;
    }),
  }));
}

export const sectionNumbers = (raw: Section[]) => Object.fromEntries(raw.map((s, i) => [s.id, i + 1]));
