import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as createAstro, f as renderComponent } from '../chunks/astro/server_C2mYN7Gc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D7N9dCHs.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "C:/Users/gonza/OneDrive/Documentos/tutoriales/strapi/my-astro-project/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const fetchData = async () => {
    const response = await fetch("http://localhost:1337/api/propiedades");
    const data = await response.json();
    return data;
  };
  const dataList = await fetchData();
  console.log(dataList.data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${dataList.data.map((element) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": element.attributes.nombre, "body": "", "href": "propiedades/" + element.id, "data-astro-cid-j7pv25f6": true })}`)} </ul> </main> ` })} `;
}, "C:/Users/gonza/OneDrive/Documentos/tutoriales/strapi/my-astro-project/src/pages/index.astro", void 0);

const $$file = "C:/Users/gonza/OneDrive/Documentos/tutoriales/strapi/my-astro-project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
