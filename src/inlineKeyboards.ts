import { InlineKeyboard } from "grammy";

export const inlineKeyboards = {
  start: "start",
}

export const startKeyboard = new InlineKeyboard()
  .url("Инструкция", "https://docs.google.com/spreadsheets/d/1nT0_Nm5D2sqPyO3nik1zlUigEx-DSt3abBUzU_GY5Go/edit?gid=0#gid=0").row()
  .text("Научные направления", "start_scientists").row()
  .url("Оборудование", "https://labspmi.ru/search?department=%5B%22%D0%9D%D0%A6%20%C2%AB%D0%9F%D0%B5%D1%80%D0%B5%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D0%BE%D0%B2%C2%BB%22%5D").row()
  .url("СНК \"Технолог\"", "https://vk.com/ssc_technologist")

export const scientistKeyboard = new InlineKeyboard()
  .text("Углерод", "scientist_carbon").row()
  .text("Алюминий", "scientist_aluminium").row()
  .text("Кремнегель", "scientists_silicaGel").row()
  .text("Катализаторы", "scientists_catalyst").row()
  .text("Сапонит", "scientists_saponite").row()
  .text("Агломерация", "scientists_agglomeration")
