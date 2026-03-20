#!/usr/bin/env node
/**
 * parse-bib.mjs
 * Parses bio/horie.bib → site/src/data/publications.json
 * Merges metadata from site/src/data/publication-meta.json if present.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const BIB_PATH = resolve(ROOT, 'bio/horie.bib');
const META_PATH = resolve(ROOT, 'site/src/data/publication-meta.json');
const OUTPUT_PATH = resolve(ROOT, 'site/src/data/publications.json');

// ── BibTeX type → publication type mapping ──
const TYPE_MAP = {
  article: 'journal',
  inproceedings: 'conference',
  incollection: 'demo',
};

// ── Parse BibTeX ──

function parseBibTeX(content) {
  const entries = [];
  // Match each @type{key, ... } block
  const entryRegex = /@(\w+)\s*\{([^,]+),\s*([\s\S]*?)(?=\n@|\n*$)/g;
  let match;

  while ((match = entryRegex.exec(content)) !== null) {
    const bibType = match[1].toLowerCase();
    const key = match[2].trim();
    const body = match[3];

    if (!TYPE_MAP[bibType]) continue; // skip @preamble, @string, etc.

    const fields = parseFields(body);
    const pub = {
      key,
      type: TYPE_MAP[bibType],
      title: cleanTeX(fields.title || ''),
      authors: formatAuthors(fields.author || ''),
      venue: extractVenue(fields, bibType),
      year: parseInt(fields.year, 10) || 0,
    };

    if (fields.doi) pub.doi = fields.doi;
    if (fields.url && fields.url !== 'TBD') pub.url = fields.url;

    entries.push(pub);
  }

  // Sort by year descending, then by key
  entries.sort((a, b) => b.year - a.year || a.key.localeCompare(b.key));
  return entries;
}

function parseFields(body) {
  const fields = {};
  // Match field = {value} or field = value
  const fieldRegex = /(\w+)\s*=\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g;
  let m;
  while ((m = fieldRegex.exec(body)) !== null) {
    fields[m[1].toLowerCase()] = m[2].trim();
  }
  return fields;
}

function cleanTeX(text) {
  return text
    .replace(/\{|\}/g, '')      // remove braces
    .replace(/\\\\/g, '')       // remove line breaks
    .replace(/\\[a-zA-Z]+/g, '') // remove TeX commands
    .replace(/'/g, "'")         // normalize quotes
    .replace(/\s+/g, ' ')       // normalize whitespace
    .trim();
}

function formatAuthors(authorStr) {
  // BibTeX authors are separated by " and "
  const authors = authorStr.split(/\s+and\s+/);
  return authors.map(a => {
    // Clean braces and extra quotes from author names
    const cleaned = a.trim().replace(/[{}]/g, '').replace(/'/g, "'");
    const parts = cleaned.split(',').map(s => s.trim());
    if (parts.length >= 2) {
      // "Last, First" → "Last, F."
      const last = parts[0];
      const firstNames = parts.slice(1).join(' ').trim();
      const initials = firstNames
        .split(/\s+/)
        .filter(n => n.length > 0)
        .map(n => n.charAt(0) + '.')
        .join(' ');
      return `${last}, ${initials}`;
    }
    // "First Last" → "Last, F."
    const words = parts[0].split(/\s+/);
    if (words.length >= 2) {
      const last = words[words.length - 1];
      const initials = words.slice(0, -1).map(n => n.charAt(0) + '.').join(' ');
      return `${last}, ${initials}`;
    }
    return parts[0];
  }).join(', ');
}

function extractVenue(fields, bibType) {
  if (bibType === 'article') {
    let venue = cleanTeX(fields.journal || '');
    if (fields.volume) {
      venue += `, ${fields.volume}`;
      if (fields.number) venue += `(${fields.number})`;
    }
    if (fields.pages) venue += `, ${cleanTeX(fields.pages)}`;
    return venue;
  }
  // Fall back to series or location if booktitle is missing
  const booktitle = cleanTeX(fields.booktitle || '');
  if (booktitle) return booktitle;
  const series = cleanTeX(fields.series || '');
  if (series) return series;
  return cleanTeX(fields.location || '');
}

// ── Merge with metadata overrides ──

function mergeMetadata(entries, metaPath) {
  if (!existsSync(metaPath)) return entries;

  const meta = JSON.parse(readFileSync(metaPath, 'utf-8'));

  return entries.map(entry => {
    const override = meta[entry.key];
    if (!override) return entry;
    return { ...entry, ...override };
  });
}

// ── Main ──

function main() {
  console.log(`Reading BibTeX from: ${BIB_PATH}`);
  const bibContent = readFileSync(BIB_PATH, 'utf-8');
  let publications = parseBibTeX(bibContent);

  console.log(`Parsed ${publications.length} entries`);

  publications = mergeMetadata(publications, META_PATH);
  console.log(`Merged metadata from: ${META_PATH}`);

  const json = JSON.stringify(publications, null, 2);
  writeFileSync(OUTPUT_PATH, json + '\n', 'utf-8');
  console.log(`Written to: ${OUTPUT_PATH}`);
}

main();
