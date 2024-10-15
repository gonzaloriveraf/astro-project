import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro } from './astro/server_C2mYN7Gc.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <nav> <a href="/"> Home</a> </nav> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/gonza/OneDrive/Documentos/tutoriales/strapi/my-astro-project/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
