import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./Example.scss";
import icon1 from "../assets/arrow-right.svg";
import icon2 from "../assets/left.svg";
import icon from "../assets/add-square.svg";
import { MenuItem, Select } from "@mui/material";
import { useState, useRef } from "react";

function Example() {
  const [lang, setLang] = useState("uz");
  const [shablonRef, setShablon] = useState("");
  const [texts, setText] = useState('')
  const textRef = useRef();

  function validate(text, shablon) {
    if (!text.current.value) {
      text.current.focus();
      alert("Textga matn kiriting!");
      return false;
    }
    if (!shablon) {
      alert("Shablonni tanlang!");
      return false;
    }
    return true;
  }

  function handleClick() {
    const isValid = validate(textRef, shablonRef);
    if (isValid) {
      setText(textRef.current?.value);
      textRef.current.value = '';
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between title">
        <h1 className="flex align-center gap-2 textTitle">
          <img src={`${icon2}`} alt="icon2" />
          {(lang == "uz" && "Yangi loyiha ochish") ||
            (lang == "ru" && "Открыть новый проект") ||
            (lang == "en" && "Open a new project")}
        </h1>
        <button className="flex px-4 py-2 bg-blue-600 text-white rounded-lg">
          {(lang == "uz" && "Davom etish") ||
            (lang == "ru" && "Продолжать") ||
            (lang == "en" && "Continue")}
          <img width={24} src={`${icon1}`} alt="icon1" />
        </button>
      </div>

      <div className="timeline">
        <Timeline position="right">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              09:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              12:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              9:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Repeat</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <div className="messageView">
        <div className="messageView__text">
          <h1>
            {(lang == "uz" && "Xabarning ko’rinishi") ||
              (lang == "ru" && "Внешний вид сообщения") ||
              (lang == "en" && "Appearance of the message")}
          </h1>

          <div className="shablon flex flex-col">
            <label htmlFor="shablon">
              {(lang == "uz" && "Shablon") ||
                (lang == "ru" && "Шаблон") ||
                (lang == "en" && "Template")}
            </label>
            <Select
              onChange={(e) => {
                setShablon(e.target.value);
              }}
              id="shablon"
              sx={{ bgcolor: "white" }}
              className="select"
            >
              <MenuItem value="">
                <em>
                  {(lang == "uz" && "Bo'sh") ||
                    (lang == "ru" && "Никто") ||
                    (lang == "en" && "None")}
                </em>
              </MenuItem>
              <MenuItem value={10}>
                {(lang == "uz" && "Shablon1") ||
                  (lang == "ru" && "Шаблон1") ||
                  (lang == "en" && "Template1")}
              </MenuItem>
              <MenuItem value={20}>
                {(lang == "uz" && "Shablon2") ||
                  (lang == "ru" && "Шаблон2") ||
                  (lang == "en" && "Template2")}
              </MenuItem>
              <MenuItem value={30}>
                {(lang == "uz" && "Shablon3") ||
                  (lang == "ru" && "Шаблон3") ||
                  (lang == "en" && "Template3")}
              </MenuItem>
            </Select>
            <div className="flex gap-2 justify-end mr-2 mt-2 cursor-pointer ShablonSaved">
              <img className="shablonSave" src={icon} alt="" />
              <p className="shablonSave" onClick={handleClick}>
                {(lang == "uz" && "Shablon holatda saqlash") ||
                  (lang == "ru" && "Сохранить как шаблон") ||
                  (lang == "en" && "Save as template")}
              </p>
            </div>
          </div>

          <div className="habar">
            <h1>
              {(lang == "uz" && "Xabar") ||
                (lang == "ru" && "Сообщение") ||
                (lang == "en" && "Message")}
            </h1>
            <ul className="flex justify-between">
              <li
                onClick={() => {
                  setLang("uz");
                }}
                className={`${
                  lang == "uz"
                    ? "bg-white text-blue-600 border border-gray"
                    : "bg-gray text-gray-400"
                } transition-all hover:bg-gray-200`}
              >
                <a>O’zbekcha</a>
              </li>
              <li
                onClick={() => {
                  setLang("ru");
                }}
                className={`${
                  lang == "ru"
                    ? "bg-white text-blue-600 border border-gray"
                    : "bg-gray text-gray-400"
                } transition-all hover:bg-gray-200`}
              >
                <a>Русский</a>
              </li>
              <li
                onClick={() => {
                  setLang("en");
                }}
                className={`${
                  lang == "en"
                    ? "bg-white text-blue-600 border border-gray"
                    : "bg-gray text-gray-400"
                } transition-all hover:bg-gray-200`}
              >
                <a>English</a>
              </li>
            </ul>
            <textarea
              ref={textRef}
              placeholder={
                (lang == "uz" && "Xabar matni...") ||
                (lang == "ru" && "Текст сообщения...") ||
                (lang == "en" && "Message text...")
              }
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="messageView__background">
          <div>
            <a
              href="#"
              className={`linkMessage block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${
                (shablonRef == 10 || shablonRef == "") && "bg-gray-200" ||
                shablonRef == 20 && "bg-blue-200" ||
                shablonRef == 30 && "bg-yellow-200" 
              }`}
            >
              {((shablonRef == 10 || shablonRef == "") &&
                ((lang == "uz" && (
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <b>{texts}</b > <br />
                    "Imkon-sug'urta" MCHJ SK. 56000 so'm; <br />
                    Muddati:17.01.2022-16.01.2023 <br />
                    EISL00000004
                  </p>
                )) ||
                  (lang == "ru" && (
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                     <b>{texts}</b> <br />
                      ООО «Имкон-сугурта» СК. 56 000 сум; <br />
                      Срок: 17.01.2022-16.01.2023 <br />
                      ЭИСЛ00000004
                    </p>
                  )) ||
                  (lang == "en" && (
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                     <b>{texts}</b> <br />
                      "Imkon-sugurta" LLC SK. 56,000 sums;
                      <br />
                      Term: 17.01.2022-16.01.2023 <br />
                      EISL00000004
                    </p>
                  )))) ||
                (shablonRef == 20 &&
                  ((lang == "uz" && (
                    <p className="font-normal text-gray-700 dark:text-blue-400">
                      EISL00000004 <br />
                      Muddati:17.01.2022-16.01.2023 <br />
                      "Imkon-sug'urta" MCHJ SK. 56000 so'm; <br />
                      <b>{texts}</b   > <br />
                    </p>
                  )) ||
                    (lang == "ru" && (
                      <p className="font-normal text-gray-700 dark:text-blue-400">
                        ЭИСЛ00000004 <br />
                        Срок: 17.01.2022-16.01.2023 <br />
                        ООО «Имкон-сугурта» СК. 56 000 сум; <br />
                       <b>{texts}</b  >
                      </p>
                    )) ||
                    (lang == "en" && (
                      <p className="font-normal text-gray-700 dark:text-blue-400">
                        EISL00000004 <br />
                        Term: 17.01.2022-16.01.2023 <br />
                        "Imkon-sugurta" LLC SK. 56,000 sums; <br />
                       <b>{texts}</b  >
                      </p>
                    )))) ||
                (shablonRef == 30 &&
                  ((lang == "uz" && (
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      <b>{texts}</b   > <br />
                      "Imkon-sug'urta" MCHJ SK. 56000 so'm; <br />
                      Muddati:17.01.2022-16.01.2023 <br />
                      EISL00000004
                    </p>
                  )) ||
                    (lang == "ru" && (
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                       <b>{texts}</b  > <br />
                        ООО «Имкон-сугурта» СК. 56 000 сум; <br />
                        Срок: 17.01.2022-16.01.2023 <br />
                        ЭИСЛ00000004
                      </p>
                    )) ||
                    (lang == "en" && (
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                       <b>{texts}</b  > <br />
                        "Imkon-sugurta" LLC SK. 56,000 sums;
                        <br />
                        Term: 17.01.2022-16.01.2023 <br />
                        EISL00000004
                      </p>
                    ))))}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;