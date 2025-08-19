import hash from 'object-hash';
import pc from 'picocolors';
import type { Declaration, Plugin } from 'postcss';
import * as R from 'ramda';

type PluginGenerator = (dictionary: Record<string, string>) => Plugin;

const printDelete = (text: string) => console.log(`${pc.red('Deleted:')} ${text}`.replace(/"|'/g, ''));

const deleteMsg = (decl: Declaration, from: string) =>
  `${pc.yellow(from)} @ ${pc.gray(`${JSON.stringify(decl.source?.input.file)}:${decl.source?.start?.line}:${decl.source?.start?.column}`)}`;

export const cssClassRename: PluginGenerator = (dictionary) => ({
  postcssPlugin: `Renames CSS classes ${hash(dictionary)}`,
  Rule(rule) {
    const selector = rule.selector;

    if (!selector) return;

    for (const [from, to] of Object.entries(dictionary)) {
      if (!selector.includes(from)) return;

      const newSelector = selector.replace(new RegExp(from, 'g'), to);

      rule.selector = newSelector;
    }
  },
});

export const cssVarRename: PluginGenerator = (dictionary) => ({
  postcssPlugin: `Replaces CSS variables ${hash(dictionary)}`,
  Declaration(decl) {
    const { value, prop } = decl;

    const deleted = new Set<string>();

    for (const [from, to] of Object.entries(dictionary)) {
      if (R.isNotEmpty(to)) {
        if (to === '[delete]') {
          deleted.add(deleteMsg(decl, from));
        }

        if (R.includes(from, value)) {
          decl.value = value.replace(from, to);
          continue;
        }

        if (R.includes(from, prop) && decl.variable) {
          decl.prop = prop.replace(from, to);
        }
      }
    }

    if (deleted.size > 0) {
      Array.from(deleted).forEach(printDelete);
    }
  },
});
