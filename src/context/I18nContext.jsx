import { createContext, useCallback, useContext, useMemo } from "react";
import { MESSAGES } from "@/constants/messages";
import { DEFAULT_LANGUAGE, LANGUAGES } from "@/constants";
import useLocalStorage from "@/hooks/useLocalStorage";

const I18nContext = createContext(null);

const interpolate = (template, params) =>
  params
    ? template.replace(/\{(\w+)\}/g, (match, key) =>
        params[key] === undefined ? match : String(params[key]),
      )
    : template;

export function I18nProvider({ children, defaultLanguage = DEFAULT_LANGUAGE }) {
  const [stored, setStored] = useLocalStorage("jtc.lang", defaultLanguage);
  const lang = LANGUAGES.includes(stored) ? stored : DEFAULT_LANGUAGE;

  const t = useCallback(
    (key, params) => {
      if (!key) return "";
      const template = MESSAGES[lang]?.[key] ?? MESSAGES[DEFAULT_LANGUAGE][key];
      return template === undefined ? key : interpolate(template, params);
    },
    [lang],
  );

  const tm = useCallback(
    (message) => {
      if (!message) return "";
      if (typeof message === "string") return message;
      return t(message.key, message.params);
    },
    [t],
  );

  const value = useMemo(
    () => ({ lang, setLang: setStored, t, tm }),
    [lang, setStored, t, tm],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

export default I18nContext;
