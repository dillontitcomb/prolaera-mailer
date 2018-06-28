'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = categoryName;
function categoryName(category) {
  var categoryReadable = {
    a_a: 'A & A',
    a_a_g: 'Government A & A',
    a_a_t: 'A & A & Tax',
    'accounting auditing': 'A & A',
    'accounting auditing tax': 'A & A & Tax',
    allothers: 'All Others',
    aicpa: 'AICPA',
    behavioural: 'Behavioural',
    businessvaluation: 'Business Valuation',
    computer: 'Computer',
    cpa: 'CPA',
    'cpa attestation': 'CPA Attestation',
    'cpa government auditing': 'CPA Government Auditing',
    ea: 'EA',
    employee_benefit: 'Employee Benefits',
    ethics_general: 'General Ethics',
    ethics_state: 'Ethics State',
    federal_taxes: 'Federal Taxes',
    fraud: 'Fraud',
    'government accounting auditing': 'Government A & A',
    hours: 'General Hours',
    lunch_learn: 'Lunch & Learn',
    nontech: 'Non-Tech',
    pcaob: 'PCAOB',
    'personal development': 'Personal Dev.',
    personal_development: 'Personal Development',
    publication: 'Publication',
    proficiency: 'Proficiency',
    regulatoryreview: 'Regulatory Review',
    self_study: 'Self Study',
    'strategic business management': 'Strategic & Business Management',
    tax: 'Tax',
    tech: 'Technical',
    yellowbook: 'Government A & A',
    instruction: 'Instruction'
  };
  return categoryReadable[category.toLowerCase()] || category;
}