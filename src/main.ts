import { OpenAIChatMessage, OpenAIChatModel, streamText } from "modelfusion";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const textStream = await streamText(
    new OpenAIChatModel({ model: "gpt-3.5-turbo", maxCompletionTokens: 500 }),
    [
      OpenAIChatMessage.system(
        "Say 'Hello, World!' in 25 different languages without mentioning the language name."
      ),
    ]
  );

  for await (const textFragment of textStream) {
    process.stdout.write(textFragment);
  }
})();
