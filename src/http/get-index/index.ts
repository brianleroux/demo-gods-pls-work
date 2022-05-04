export async function handler (req: object) {
  return {
    deno: Deno.version
  }
}
