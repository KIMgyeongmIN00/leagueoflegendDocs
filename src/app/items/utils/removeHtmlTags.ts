export function removeHtmlTags(desc: string): string {
  return desc.replace(/<[^>]*>/g, "");
}
