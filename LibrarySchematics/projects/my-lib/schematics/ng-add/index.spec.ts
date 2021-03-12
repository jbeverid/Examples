import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
const collectionPath = path.join(__dirname, '../collection.json');

describe('ng-add', () => {
  let runner: SchematicTestRunner;
  beforeEach(() => {
     runner = new SchematicTestRunner('schematics', collectionPath);
  });

  it('works', () => {
    console.log(runner);
    expect(true).toEqual(true);
  });
});
