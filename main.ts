import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// This program writes a single short text for the make.fun
// "feel held" bounty, and does nothing else. The text never tells
// its reader to relax. It just puts them in a chair at the end of
// the day with a dog asleep against their leg, trusting the weight
// of that to do the work: an animal does not lean its whole body
// on someone it is not completely at ease with, and being leaned
// on like that is its own kind of being held. The street outside
// has finished for the night, the tea in their hands is still
// warm, and the day has stopped asking things of them. That last
// part is the picture the text leaves behind.
const ENTRY_TEXT =
  "The dog is asleep against your leg, all his weight given over to you. The street outside has gone quiet, and the last of the tea is still warm in your hands. The evening asks nothing more of you.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
