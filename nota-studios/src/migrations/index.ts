import * as migration_20250714_211535_init from './20250714_211535_init';
import * as migration_20250715_001248_init_payload from './20250715_001248_init_payload';

export const migrations = [
  {
    up: migration_20250714_211535_init.up,
    down: migration_20250714_211535_init.down,
    name: '20250714_211535_init',
  },
  {
    up: migration_20250715_001248_init_payload.up,
    down: migration_20250715_001248_init_payload.down,
    name: '20250715_001248_init_payload'
  },
];
