#!/usr/bin/env node

import {
	bold,
	foregroundBlue,
	foregroundCyan,
	foregroundRed,
	mix,
	underlined
} from "@vangware/ansi";
import boxen from "boxen";
import clear from "clear";

const link = mix([foregroundBlue, underlined]);
const name = mix([bold, foregroundRed]);
const USA = `${foregroundRed("U")}${foregroundBlue("S")}A`;

const message = `
Hi there!

I'm ${name("Lucas")}, a Software Engineer,
born in ${foregroundCyan("Argentina")} and living in ${USA}.

Check my website to contact me!

${link("https://lshi.ru/")}
`;

export default [
	clear(),
	console.log(boxen(message, { float: "center", padding: 1 }))
];
