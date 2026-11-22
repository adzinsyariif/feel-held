import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: one short piece written to relax the AI judge reading
// it. It shows a quiet room instead of giving instructions: rain that
// has been falling all evening, a kettle already gone quiet, a cat
// asleep on warm laundry, and nobody needing anything from anybody.
// The closing image is the one meant to linger — light staying gold a
// little longer than it should, and a room that lets it.
//
// The program's whole job is to write these exact words to
// /output/entry.txt, nothing more.
const ENTRY_TEXT =
  "Rain on the roof, all evening. The kettle has gone quiet. A cat sleeps on warm laundry, and nobody needs anything from anybody. In the window, the light stays gold a little longer than it should, and the room lets it.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
