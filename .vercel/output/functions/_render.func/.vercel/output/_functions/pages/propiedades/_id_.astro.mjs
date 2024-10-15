import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_C2mYN7Gc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_D7N9dCHs.mjs';
import { useSSRContext, ref, reactive, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'Form',
  setup(__props, { expose: __expose }) {
  __expose();

const name = ref('');
const email = ref('');

const formData = reactive({
  data: {
    clienteNombre: "Pepito",
    clienteApellido: "Wedsa",
  },
});


const handleSubmit = async () => {

    console.log('Product data saved:');

  try {
    const response = await fetch("http://localhost:1337/api/solicitudes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

const __returned__ = { name, email, formData, handleSubmit, ref, reactive };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ type: "submit" }, _attrs))}>Submit</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Form = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  Astro2.url;
  const publicApi = "http://localhost:1337";
  const fetchData = async () => {
    const response = await fetch(publicApi + "/api/propiedades/" + id + "?populate=*");
    const data = await response.json();
    return data;
  };
  const dataPropiedad = await fetchData();
  const { nombre, precio, descripcion, detalles, imagen, piscina } = dataPropiedad.data.attributes;
  dataPropiedad.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": nombre, "data-astro-cid-dqufin5z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-dqufin5z> ${nombre} </h1> <img class="image-container"${addAttribute(publicApi + imagen.data.attributes.url, "src")}${addAttribute(nombre, "alt")} data-astro-cid-dqufin5z> <h2 data-astro-cid-dqufin5z> ${descripcion} </h2> <h3 data-astro-cid-dqufin5z> ${precio} </h3> <p data-astro-cid-dqufin5z> ${detalles}</p> <ul data-astro-cid-dqufin5z> <li data-astro-cid-dqufin5z> Piscina: <strong data-astro-cid-dqufin5z> ${piscina ? renderTemplate`<p data-astro-cid-dqufin5z>'sí'</p>` : "no"} </strong> </li> </ul> ` })} ${renderComponent($$result, "Form", Form, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/gonza/OneDrive/Documentos/tutoriales/strapi/my-astro-project/src/components/Form.vue", "client:component-export": "default", "data-astro-cid-dqufin5z": true })} `;
}, "C:/Users/gonza/OneDrive/Documentos/tutoriales/strapi/my-astro-project/src/pages/propiedades/[id].astro", void 0);
const $$file = "C:/Users/gonza/OneDrive/Documentos/tutoriales/strapi/my-astro-project/src/pages/propiedades/[id].astro";
const $$url = "/propiedades/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
