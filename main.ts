import { Plugin, Editor } from 'obsidian'

export default class LineCapitalizerPlugin extends Plugin {
	onload() {
		this.registerEvent(
			this.app.workspace.on('editor-change', (editor: Editor) => {
				const cursor = editor.getCursor()
				const line = editor.getLine(cursor.line)

				// Find first letter and capitalize if lowercase
				const match = line.match(/\p{L}/u)
				if (match && match[0] !== match[0].toUpperCase()) {
					const idx = match.index!
					editor.setLine(cursor.line, line.slice(0, idx) + match[0].toUpperCase() + line.slice(idx + 1))
					editor.setCursor(cursor)
				}
			})
		)
	}
}
