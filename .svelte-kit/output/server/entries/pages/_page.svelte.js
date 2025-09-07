import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { v as pop, t as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  let title = [
    "検索してみよう！",
    "何かを探してみよう！",
    "Know,Now.",
    "気になることを調べよう！",
    "Searching..."
  ];
  let animationtitle = title[0];
  $$payload.out.push(`<main class="bg-gray-600 h-dvh flex flex-col justify-center p-10"><div class="bg-gray-500 backdrop-blur-md p-7 rounded-2xl"><!---->`);
  {
    $$payload.out.push(`<h1 class="text-white text-4xl font-bold flex justify-center animate-pulse pt-10">${escape_html(animationtitle)}</h1>`);
  }
  $$payload.out.push(`<!----> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></main>`);
  pop();
}
export {
  _page as default
};
