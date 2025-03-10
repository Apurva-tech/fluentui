/** @jsxRuntime classic */
/** @jsx createElement */

import { createElement } from '@fluentui/react-jsx-runtime';

import { getSlotsNext } from '@fluentui/react-utilities';
import type { SplitButtonSlots, SplitButtonState } from './SplitButton.types';

/**
 * Renders a SplitButton component by passing the state defined props to the appropriate slots.
 */
export const renderSplitButton_unstable = (state: SplitButtonState) => {
  const { slots, slotProps } = getSlotsNext<SplitButtonSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.primaryActionButton && <slots.primaryActionButton {...slotProps.primaryActionButton} />}
      {slots.menuButton && <slots.menuButton {...slotProps.menuButton} />}
    </slots.root>
  );
};
