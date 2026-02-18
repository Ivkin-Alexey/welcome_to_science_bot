import 'dotenv/config'
import { Bot, GrammyError, HttpError } from 'grammy'
import { stickers, startText, scientistsText } from './constants.js'
import { startKeyboard, scientistKeyboard } from './inlineKeyboards.js'

const BOT_API_TOKEN = process.env.BOT_API_TOKEN

if(!BOT_API_TOKEN) {
  throw new Error("BOT_API_TOKEN is not defined")
}

const bot = new Bot(BOT_API_TOKEN)

bot.command('start', async (ctx) => {
  await ctx.replyWithSticker(stickers.hello)
  await ctx.reply(startText, { reply_markup: startKeyboard })
});

// Клик по «Научные направления» — показываем вторую клавиатуру
bot.callbackQuery('start_scientists', async (ctx) => {
  await ctx.answerCallbackQuery()
  await ctx.reply(scientistsText, { reply_markup: scientistKeyboard })
});

// Ответ на любое сообщение
bot.on('message:text', (ctx) => {
  ctx.reply(ctx.message.text);
});

// Обработка ошибок согласно документации
bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;

  if (e instanceof GrammyError) {
    console.error('Error in request:', e.description);
  } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e);
  } else {
    console.error('Unknown error:', e);
  }
});

async function startBot() {
  try {
    bot.start();
    console.log('Bot started');
  } catch (error) {
    console.error('Error in startBot:', error);
  }
}

startBot();


 