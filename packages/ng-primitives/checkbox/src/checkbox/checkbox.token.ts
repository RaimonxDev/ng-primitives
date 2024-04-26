/**
 * Copyright © 2024 Angular Primitives.
 * https://github.com/ng-primitives/ng-primitives
 *
 * This source code is licensed under the CC BY-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InjectionToken, inject } from '@angular/core';
import type { NgpCheckboxDirective } from './checkbox.directive';

export const NgpCheckboxToken = new InjectionToken<NgpCheckboxDirective>('NgpCheckboxToken');

/**
 * Inject the Checkbox directive instance
 * @returns The Checkbox directive instance
 */
export function injectCheckbox(): NgpCheckboxDirective {
  return inject(NgpCheckboxToken);
}
