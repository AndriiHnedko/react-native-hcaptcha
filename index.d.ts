import React from 'react';
import { NativeSyntheticEvent } from 'react-native';

export type HcaptchaProps = {
  siteKey: string;
  passiveSiteKey?: boolean;
  baseUrl?: string;
  onMessage?: (event: NativeSyntheticEvent<{ data: string; }>) => void;
  languageCode?: string;
  cancelButtonText?: string;
  backgroundColor?: string;
  showLoading?: boolean;
  loadingIndicatorColor?: string;
  theme?: 'dark' | 'light' | 'contrast';
  rqdata?: string;
};

export default class ConfirmHcaptcha extends React.Component<HcaptchaProps> {
  show(): void;

  hide(): void;
}
