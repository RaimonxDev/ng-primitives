/**
 * Copyright © 2024 Angular Primitives.
 * https://github.com/ng-primitives/ng-primitives
 *
 * This source code is licensed under the CC BY-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render } from '@testing-library/angular';
import { NgpSliderRange } from './slider-range.directive';

describe('NgpSliderRange', () => {
  it('should initialise correctly', async () => {
    const container = await render(`<div ngpSliderRange></div>`, {
      imports: [NgpSliderRange],
    });
  });
});
