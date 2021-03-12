import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function addStylesheet(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.debug('Adding stylesheet to project.');
    return tree;
  };
}

// Just return the tree
export default function(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
