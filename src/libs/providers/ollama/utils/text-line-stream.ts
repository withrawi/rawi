export class TextLineStream extends TransformStream<string, string> {
  #buffer = '';

  constructor() {
    super({
      flush: (controller) => {
        if (this.#buffer.length === 0) return;

        controller.enqueue(this.#buffer);
      },
      transform: (chunkText, controller) => {
        let text = this.#buffer + chunkText;

        while (true) {
          const EOL = text.indexOf('\n');

          if (EOL === -1) break;

          controller.enqueue(text.slice(0, EOL));
          text = text.slice(EOL + 1);
        }

        this.#buffer = text;
      },
    });
  }
}
