function parseMarks(text: string) {
	return text.split(";");
}

function constructMarks(marks: string[]) {
	return marks.join(";");
}

export { parseMarks, constructMarks };
