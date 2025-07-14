import * as migration_20250714_211535_init from './20250714_211535_init';

export const migrations = [
  {
    up: migration_20250714_211535_init.up,
    down: migration_20250714_211535_init.down,
    name: '20250714_211535_init'
  },
];
