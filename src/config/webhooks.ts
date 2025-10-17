export const WEBHOOKS = {
  CONTACT_FORM: "https://n8n.panvatech.com/webhook/contact-form",
  PARTNER_FORM: "https://n8n.panvatech.com/webhook/contact-form",
  //: "https://n8n.panvatech.com/webhook-test/contact-form", // Using same endpoint for now
} as const;

export const CONFIG = {
  WEBHOOKS,
} as const;
