// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

import { Beresheet } from '@edgeware/node-types';

export default {
  ...Beresheet.types,
  // chain-specific overrides
  RefCount: 'u32'
};
