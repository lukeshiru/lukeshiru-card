#!/usr/bin/env node

import {
	blueText,
	bold,
	cyanText,
	mix,
	redText,
	underlined
} from "@vangware/forcli";
import boxen from "boxen";

const link = mix([blueText, underlined]);
const name = mix([bold, redText]);

const message = `
✨ Hi there! ✨

I'm ${name("Lucas")}, a Software Engineer,
born in ${cyanText("Argentina")} and living in ${redText("U")}${blueText("S")}A.

Check my website to contact me!

${link("https://lshi.ru/")}
`;

export default console.log(boxen(message, { float: "center", padding: 1 }));
