export type TriageCategory = "illness" | "injury";
export type TriageRoute = "urgent-care" | "primary-care";
export type TriageSeverity = 1 | 2 | 3 | 4 | "EMERGENCY";

export type SymptomOption = {
  id: string;
  label: string;
  category: TriageCategory;
  severity: TriageSeverity;
  route: TriageRoute;
};

export const EMERGENCY_KEYWORDS = [
  "chest pain",
  "difficulty breathing",
  "stroke",
];

export const TRIAGE_SYMPTOMS: SymptomOption[] = [
  {
    id: "chest-pain",
    label: "Chest pain",
    category: "illness",
    severity: "EMERGENCY",
    route: "urgent-care",
  },
  {
    id: "difficulty-breathing",
    label: "Difficulty breathing",
    category: "illness",
    severity: "EMERGENCY",
    route: "urgent-care",
  },
  {
    id: "stroke",
    label: "Stroke symptoms",
    category: "illness",
    severity: "EMERGENCY",
    route: "urgent-care",
  },
  {
    id: "fever",
    label: "Fever or flu symptoms",
    category: "illness",
    severity: 2,
    route: "primary-care",
  },
  {
    id: "sore-throat",
    label: "Sore throat",
    category: "illness",
    severity: 1,
    route: "primary-care",
  },
  {
    id: "ear-infection",
    label: "Ear pain or infection",
    category: "illness",
    severity: 2,
    route: "primary-care",
  },
  {
    id: "persistent-cough",
    label: "Persistent cough",
    category: "illness",
    severity: 3,
    route: "urgent-care",
  },
  {
    id: "stomach-bug",
    label: "Stomach bug or nausea",
    category: "illness",
    severity: 2,
    route: "primary-care",
  },
  {
    id: "migraine",
    label: "Severe headache or migraine",
    category: "illness",
    severity: 3,
    route: "urgent-care",
  },
  {
    id: "sprain",
    label: "Sprain or strain",
    category: "injury",
    severity: 2,
    route: "urgent-care",
  },
  {
    id: "minor-cut",
    label: "Minor cut or abrasion",
    category: "injury",
    severity: 1,
    route: "urgent-care",
  },
  {
    id: "possible-fracture",
    label: "Possible fracture",
    category: "injury",
    severity: 4,
    route: "urgent-care",
  },
  {
    id: "sports-injury",
    label: "Sports injury",
    category: "injury",
    severity: 3,
    route: "urgent-care",
  },
  {
    id: "workplace-injury",
    label: "Workplace injury",
    category: "injury",
    severity: 3,
    route: "urgent-care",
  },
  {
    id: "allergic-reaction",
    label: "Allergic reaction",
    category: "illness",
    severity: 4,
    route: "urgent-care",
  },
];

export const TRIAGE_CATEGORIES: Record<TriageCategory, string> = {
  illness: "Minor Illness",
  injury: "Minor Injury",
};

export const getSymptomsByCategory = (category: TriageCategory) =>
  TRIAGE_SYMPTOMS.filter((symptom) => symptom.category === category);

export const getSymptomById = (id: string | null) =>
  TRIAGE_SYMPTOMS.find((symptom) => symptom.id === id) ?? null;
