import { useSettingsStore } from "@/features/settings/store";

export const reducedMotion = () => useSettingsStore.getState().settings.reducedMotion;
