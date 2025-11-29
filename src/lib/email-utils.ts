/**
 * Creates a mailto link with multiple recipients and pre-filled content
 */
export const createEmailLink = (
  subject: string,
  body: string,
  recipients: string[] = ["support@httcoin.com", "Hotelcoinglobal@gmail.com"]
): string => {
  const to = recipients.join(",");
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
};

/**
 * Creates email body from form data
 */
export const createFormEmailBody = (formData: Record<string, string>): string => {
  return Object.entries(formData)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n\n");
};
