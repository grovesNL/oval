export default function containing(text: string) {
  return new RegExp(`[\\s\\S]*${text}[\\s\\S]*`);
}
