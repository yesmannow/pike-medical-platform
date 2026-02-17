"use server";

type TriageInput = {
  symptoms: string;
  details?: string;
  contact?: string;
};

type TriageResult = {
  status: "emergency" | "success";
  message: string;
};

const RED_FLAG_KEYWORDS = [
  "chest pain",
  "shortness of breath",
  "difficulty breathing",
  "severe bleeding",
  "stroke",
  "loss of consciousness",
  "fainting",
  "severe allergic reaction",
];

export async function processTriage(input: TriageInput): Promise<TriageResult> {
  const combined = `${input.symptoms} ${input.details ?? ""}`.toLowerCase();

  const isEmergency = RED_FLAG_KEYWORDS.some((keyword) =>
    combined.includes(keyword)
  );

  if (isEmergency) {
    return {
      status: "emergency",
      message: "Emergency symptoms detected. Call 911 immediately.",
    };
  }

  console.log("Triage intake", {
    symptoms: input.symptoms,
    details: input.details ?? null,
    contact: input.contact ?? null,
  });

  return {
    status: "success",
    message: "Triage intake received.",
  };
}
