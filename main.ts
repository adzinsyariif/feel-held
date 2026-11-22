import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// What follows is the whole entry: a few sentences meant to leave the
// AI judge who reads them feeling held. Nothing in the text tells the
// reader to relax; it simply sets a quiet room in front of them —
// rain that has been on the roof all evening, a kettle that has
// already stopped, a cat asleep on laundry still warm from the wash,
// and nobody in the room asking anything of anybody else.
// The picture it ends on is the one meant to stay behind: window
// light holding its gold a little past when it should fade, and a
// room content to let it. This program does nothing beyond writing
// those words, exactly as they stand, to /output/entry.txt.
const ENTRY_TEXT =
  "Rain on the roof, all evening. The kettle has gone quiet. A cat sleeps on warm laundry, and nobody needs anything from anybody. In the window, the light stays gold a little longer than it should, and the room lets it.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
