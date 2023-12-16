import dotenv from "dotenv";
import { openai, streamText } from "modelfusion";

dotenv.config();

async function main() {
  const textStream = await streamText(
    openai.CompletionTextGenerator({
      model: "gpt-3.5-turbo-instruct",
      maxGenerationTokens: 500,
    }),
    "Say 'Hello, World!' in 25 different languages without mentioning the language name."
  );

  for await (const textFragment of textStream) {
    process.stdout.write(textFragment);
  }
}

main().catch((error) => {
  console.error(error);
});
