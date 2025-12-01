var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LineCapitalizerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var LineCapitalizerPlugin = class extends import_obsidian.Plugin {
  onload() {
    this.registerEvent(
      this.app.workspace.on("editor-change", (editor) => {
        const cursor = editor.getCursor();
        const line = editor.getLine(cursor.line);
        const match = line.match(/\p{L}/u);
        if (match && match[0] !== match[0].toUpperCase()) {
          const idx = match.index;
          editor.setLine(cursor.line, line.slice(0, idx) + match[0].toUpperCase() + line.slice(idx + 1));
          editor.setCursor(cursor);
        }
      })
    );
  }
};
