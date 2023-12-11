import { SSTConfig } from 'sst';
import { API } from './stacks/MyStack';
import { StorageStack } from './stacks/StorageStack';

export default {
  config(_input) {
    return {
      name: 'notes',
      region: 'ap-south-1',
    };
  },
  stacks(app) {
    app.stack(API);
    app.stack(StorageStack);
  },
} satisfies SSTConfig;
