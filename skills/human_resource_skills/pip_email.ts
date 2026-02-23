export type EmailDraft = {
  to: string;
  subject: string;
  body: string;
  status: "draft";
};

export type PipEmailData = {
  to: string;
  employee_name: string;
  occupation: string;
  reason_1: string;
  reason_2?: string;
  reason_3?: string;
  meeting_date: string;
  meeting_time: string;
  hr_name: string;
  company_name: string;
};

const PIP_SUBJECT = "Performance Improvement Plan (PIP) Notification";

const PIP_BODY = `Hello {{employee_name}},

This email is to inform you that we are initiating a Performance Improvement Plan (PIP) for your role as {{occupation}}.

Reason(s) for the PIP:
- {{reason_1}}
{{reason_2_line}}
{{reason_3_line}}

The PIP is intended to clarify expectations and provide structured support to help you be successful. We will review the plan together in a meeting on {{meeting_date}} at {{meeting_time}}. Your manager and HR will be present.

You will receive a written plan that includes:
- Specific performance expectations
- Support and resources available
- Milestones and check-in schedule
- Timeline and next steps

If you have questions before the meeting, please reply to this email.

Regards,
{{hr_name}}
Human Resources
{{company_name}}
`;

function renderTemplate(template: string, vars: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_match, key) => vars[key] ?? "");
}

/**
 * Prepares the email for display and confirmation before sending.
 * This does not send the email; it returns a draft object.
 */
export function write_email(
  to_email_address: string,
  subject: string,
  body: string
): EmailDraft {
  return {
    to: to_email_address,
    subject,
    body,
    status: "draft",
  };
}

/**
 * Renders a PIP notification email draft from structured inputs.
 */
export function renderPipEmail(data: PipEmailData): EmailDraft {
  const reason_2_line = data.reason_2 ? `- ${data.reason_2}` : "";
  const reason_3_line = data.reason_3 ? `- ${data.reason_3}` : "";

  const body = renderTemplate(PIP_BODY, {
    employee_name: data.employee_name,
    occupation: data.occupation,
    reason_1: data.reason_1,
    reason_2_line,
    reason_3_line,
    meeting_date: data.meeting_date,
    meeting_time: data.meeting_time,
    hr_name: data.hr_name,
    company_name: data.company_name,
  });

  return write_email(data.to, PIP_SUBJECT, body);
}
