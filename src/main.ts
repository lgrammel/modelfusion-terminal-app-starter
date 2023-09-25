import dotenv from "dotenv";
import { OpenAITextGenerationModel, streamText } from "modelfusion";

dotenv.config();

(async () => {
  const textStream = await streamText(
    new OpenAITextGenerationModel({
      model: "gpt-3.5-turbo-instruct",
      maxCompletionTokens: 500,
    }),
    "Say 'Hello, World!' in 25 different languages without mentioning the language name."
  );

  for await (const textFragment of textStream) {
    process.stdout.write(textFragment);
  }
})();
