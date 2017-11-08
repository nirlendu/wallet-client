// @flow
import * as buttons from './buttons';
import * as layout from './layout';
import * as text from './text';
import * as form from './form';
import * as theme from './theme';
import * as tabs from './tabs';
import * as progress from './progress';
import Modal from './modal';

export * from './buttons';
export * from './layout';
export * from './text';
export * from './form';
export * from './theme';
export * from './tabs';
export * from './progress';
export { default as Modal } from './modal';

export default {
  ...buttons,
  ...layout,
  ...text,
  ...form,
  ...theme,
  ...tabs,
  ...progress,
  Modal,
};
