import { m as sanitize_props, r as rest_props, t as setContext, n as fallback, x as element, c as bind_props, p as pop, d as push, l as slot, o as spread_attributes, q as clsx, y as spread_props, g as getContext, f as attr_class, a as attr, b as escape_html } from "./index.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "./exports.js";
import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
const bgColors = {
  gray: "bg-gray-50 dark:bg-gray-800",
  red: "bg-red-50 dark:bg-gray-800",
  yellow: "bg-yellow-50 dark:bg-gray-800 ",
  green: "bg-green-50 dark:bg-gray-800 ",
  indigo: "bg-indigo-50 dark:bg-gray-800 ",
  purple: "bg-purple-50 dark:bg-gray-800 ",
  pink: "bg-pink-50 dark:bg-gray-800 ",
  blue: "bg-blue-50 dark:bg-gray-800 ",
  light: "bg-gray-50 dark:bg-gray-700",
  dark: "bg-gray-50 dark:bg-gray-800",
  default: "bg-white dark:bg-gray-800",
  dropdown: "bg-white dark:bg-gray-700",
  navbar: "bg-white dark:bg-gray-900",
  navbarUl: "bg-gray-50 dark:bg-gray-800",
  form: "bg-gray-50 dark:bg-gray-700",
  primary: "bg-primary-50 dark:bg-gray-800 ",
  orange: "bg-orange-50 dark:bg-orange-800",
  none: ""
};
function Frame($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "node",
    "use",
    "options",
    "role",
    "transition",
    "params",
    "open"
  ]);
  push();
  const noop = () => {
  };
  setContext("background", true);
  let tag = fallback($$props["tag"], () => $$restProps.href ? "a" : "div", true);
  let color = fallback($$props["color"], "default");
  let rounded = fallback($$props["rounded"], false);
  let border = fallback($$props["border"], false);
  let shadow = fallback($$props["shadow"], false);
  let node = fallback($$props["node"], () => void 0, true);
  let use = fallback($$props["use"], noop);
  let options = fallback($$props["options"], () => ({}), true);
  let role = fallback($$props["role"], () => void 0, true);
  let transition = fallback($$props["transition"], () => void 0, true);
  let params = fallback($$props["params"], () => ({}), true);
  let open = fallback($$props["open"], true);
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  color = color ?? "default";
  setContext("color", color);
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$sanitized_props.class);
  if (transition && open) {
    $$payload.out += "<!--[-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes(
          {
            role,
            ...$$restProps,
            class: clsx(divClass)
          }
        )}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!---->`;
      }
    );
  } else if (open) {
    $$payload.out += "<!--[1-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes(
          {
            role,
            ...$$restProps,
            class: clsx(divClass)
          }
        )}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    tag,
    color,
    rounded,
    border,
    shadow,
    node,
    use,
    options,
    role,
    transition,
    params,
    open
  });
  pop();
}
function Accordion($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "multiple",
    "flush",
    "activeClass",
    "inactiveClass",
    "defaultClass",
    "classActive",
    "classInactive"
  ]);
  push();
  let multiple = fallback($$props["multiple"], false);
  let flush = fallback($$props["flush"], false);
  let activeClass = fallback($$props["activeClass"], "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800");
  let inactiveClass = fallback($$props["inactiveClass"], "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800");
  let defaultClass = fallback($$props["defaultClass"], "text-gray-500 dark:text-gray-400");
  let classActive = fallback($$props["classActive"], "");
  let classInactive = fallback($$props["classInactive"], "");
  const ctx = {
    flush,
    activeClass: twMerge(activeClass, classActive),
    inactiveClass: twMerge(inactiveClass, classInactive),
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass;
  frameClass = twMerge(defaultClass, $$sanitized_props.class);
  Frame($$payload, spread_props([
    $$restProps,
    {
      class: frameClass,
      color: "none",
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, {
    multiple,
    flush,
    activeClass,
    inactiveClass,
    defaultClass,
    classActive,
    classInactive
  });
  pop();
}
function AccordionItem($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  let contentClass;
  let tag = fallback($$props["tag"], "h2");
  let open = fallback($$props["open"], false);
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  let inactiveClass = fallback($$props["inactiveClass"], () => void 0, true);
  let defaultClass = fallback($$props["defaultClass"], "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700");
  let transitionType = fallback($$props["transitionType"], "slide");
  let transitionParams = fallback($$props["transitionParams"], () => ({}), true);
  let paddingFlush = fallback($$props["paddingFlush"], "py-5");
  let paddingDefault = fallback($$props["paddingDefault"], "p-5");
  let textFlushOpen = fallback($$props["textFlushOpen"], "text-gray-900 dark:text-white");
  let textFlushDefault = fallback($$props["textFlushDefault"], "text-gray-500 dark:text-gray-400");
  let borderClass = fallback($$props["borderClass"], "border-s border-e group-first:border-t");
  let borderOpenClass = fallback($$props["borderOpenClass"], "border-s border-e");
  let borderBottomClass = fallback($$props["borderBottomClass"], "border-b");
  let borderSharedClass = fallback($$props["borderSharedClass"], "border-gray-200 dark:border-gray-700");
  let classActive = fallback($$props["classActive"], () => void 0, true);
  let classInactive = fallback($$props["classInactive"], () => void 0, true);
  let activeCls = twMerge(activeClass, classActive);
  let inactiveCls = twMerge(inactiveClass, classInactive);
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  open = false;
  let buttonClass;
  buttonClass = twMerge([
    defaultClass,
    ctx.flush || borderClass,
    borderBottomClass,
    borderSharedClass,
    ctx.flush ? paddingFlush : paddingDefault,
    open && (ctx.flush ? textFlushOpen : activeCls || ctx.activeClass),
    !open && (ctx.flush ? textFlushDefault : inactiveCls || ctx.inactiveClass),
    $$sanitized_props.class
  ]);
  contentClass = twMerge([
    ctx.flush ? paddingFlush : paddingDefault,
    ctx.flush ? "" : borderOpenClass,
    borderBottomClass,
    borderSharedClass
  ]);
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += ` class="group"`;
    },
    () => {
      $$payload.out += `<button type="button"${attr_class(clsx(buttonClass))}${attr("aria-expanded", open)}><!---->`;
      slot($$payload, $$props, "header", {}, null);
      $$payload.out += `<!----> `;
      if (open) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "arrowup", {}, () => {
          $$payload.out += `<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>`;
        });
        $$payload.out += `<!---->`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "arrowdown", {}, () => {
          $$payload.out += `<svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`;
        });
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]--></button>`;
    }
  );
  $$payload.out += ` `;
  if (open) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><div${attr_class(clsx(contentClass))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    tag,
    open,
    activeClass,
    inactiveClass,
    defaultClass,
    transitionType,
    transitionParams,
    paddingFlush,
    paddingDefault,
    textFlushOpen,
    textFlushDefault,
    borderClass,
    borderOpenClass,
    borderBottomClass,
    borderSharedClass,
    classActive,
    classInactive
  });
  pop();
}
function Drawer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "backdropClass",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  push();
  let activateClickOutside = fallback($$props["activateClickOutside"], true);
  let hidden = fallback($$props["hidden"], true);
  let position = fallback($$props["position"], "fixed");
  let leftOffset = fallback($$props["leftOffset"], "inset-y-0 start-0");
  let rightOffset = fallback($$props["rightOffset"], "inset-y-0 end-0");
  let topOffset = fallback($$props["topOffset"], "inset-x-0 top-0");
  let bottomOffset = fallback($$props["bottomOffset"], "inset-x-0 bottom-0");
  let width = fallback($$props["width"], "w-80");
  let backdrop = fallback($$props["backdrop"], true);
  let backdropClass = fallback($$props["backdropClass"], "");
  let bgColor = fallback($$props["bgColor"], "bg-gray-900");
  let bgOpacity = fallback($$props["bgOpacity"], "bg-black/75");
  let placement = fallback($$props["placement"], "left");
  let id = fallback($$props["id"], "drawer-example");
  let divClass = fallback($$props["divClass"], "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800");
  let transitionParams = fallback($$props["transitionParams"], () => ({}), true);
  let transitionType = fallback($$props["transitionType"], "fly");
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = twMerge("fixed top-0 start-0 z-50 w-full h-full", backdrop && bgColor, backdrop && bgOpacity, backdropClass);
  if (!hidden) {
    $$payload.out += "<!--[-->";
    if (backdrop && activateClickOutside) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div role="presentation"${attr_class(clsx(backdropDivClass))}></div>`;
    } else if (backdrop && !activateClickOutside) {
      $$payload.out += "<!--[1-->";
      $$payload.out += `<div role="presentation"${attr_class(clsx(backdropDivClass))}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${spread_attributes(
      {
        id,
        ...$$restProps,
        class: clsx(twMerge(divClass, width, position, placements[placement], $$sanitized_props.class)),
        tabindex: "-1",
        "aria-controls": id,
        "aria-labelledby": id
      }
    )}><!---->`;
    slot($$payload, $$props, "default", { hidden }, null);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    activateClickOutside,
    hidden,
    position,
    leftOffset,
    rightOffset,
    topOffset,
    bottomOffset,
    width,
    backdrop,
    backdropClass,
    bgColor,
    bgOpacity,
    placement,
    id,
    divClass,
    transitionParams,
    transitionType
  });
  pop();
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;
  else return 1 - v;
}
function Footer($$payload, $$props) {
  push();
  let info = $$props["info"];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out += `<footer class="xl:block hidden h-full w-full relative bg-lightbg bg-[url('/images/footer/Footer%20Lembongan.webp')] bg-cover bg-center"><div class="2xl:p-8 xl:p-8 relative"><div class="2xl:px-20 xl:px-16 2xl:pt-20 xl:pt-16 pb-3 flex flex-col 2xl:gap-12 xl:gap-10 border border-secondary border-solid"><div class="flex justify-between"><div class="flex flex-col 2xl:gap-14 xl:gap-12 w-1/4"><a data-sveltekit-reload="" href="/" class="2xl:w-64 w-56"><img src="/images/footer/lembongan-blacklogo.webp" class="object-cover h-full w-full" alt="logo lembongan beach club &amp; resort"></a> <p class="text-secondary font-marcel 2xl:text-5xl xl:text-4xl">Where Balinese Charm Meets Modern Luxury</p></div> <div class="w-1/4"></div> <div class="flex flex-col 2xl:gap-14 xl:gap-12 w-2/4"><ul class="2xl:gap-28 xl:gap-24 font-manrope text-secondary 2xl:text-2xl xl:text-xl uppercase flex font-semibold"><li><ul class="flex flex-col 2xl:gap-4 xl:gap-3"><li><a data-sveltekit-reload="" href="/">Home</a></li> <li><a data-sveltekit-reload="" href="/accommodations">Accommodation</a></li> <li><a data-sveltekit-reload="" href="/special-offer">Special Offers</a></li> <li><a data-sveltekit-reload="" href="/dine">Dine</a></li></ul></li> <li><ul class="flex flex-col 2xl:gap-4 xl:gap-3"><li><a data-sveltekit-reload="" href="/explore">Explore</a></li> <li><a data-sveltekit-reload="" href="/gallery">Gallery</a></li> <li><a data-sveltekit-reload="" href="/blog">Blog</a></li> <li><a data-sveltekit-reload="" href="/contact-us">Contact Us</a></li></ul></li></ul> <ul class="flex flex-col 2xl:gap-2 xl:gap-1"><li><a class="flex gap-3 items-center font-manrope 2xl:text-xl xl:text-base font-light text-secondary" target="_blank"${attr("href", info[0].address[2])}><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-7 w-6 h-full" viewBox="0 0 20 20" fill="none"><path d="M10 5.15625C9.41284 5.15625 8.83886 5.33036 8.35065 5.65657C7.86244 5.98278 7.48193 6.44644 7.25723 6.98891C7.03254 7.53138 6.97374 8.12829 7.08829 8.70417C7.20284 9.28006 7.48559 9.80904 7.90078 10.2242C8.31596 10.6394 8.84494 10.9222 9.42083 11.0367C9.99671 11.1513 10.5936 11.0925 11.1361 10.8678C11.6786 10.6431 12.1422 10.2626 12.4684 9.77435C12.7946 9.28614 12.9688 8.71216 12.9688 8.125C12.9688 7.33764 12.656 6.58253 12.0992 6.02578C11.5425 5.46903 10.7874 5.15625 10 5.15625ZM10 10.1562C9.59826 10.1562 9.20554 10.0371 8.8715 9.81392C8.53746 9.59073 8.27711 9.27349 8.12337 8.90233C7.96963 8.53116 7.9294 8.12275 8.00778 7.72872C8.08616 7.3347 8.27961 6.97276 8.56369 6.68869C8.84776 6.40461 9.2097 6.21116 9.60372 6.13278C9.99775 6.0544 10.4062 6.09463 10.7773 6.24837C11.1485 6.40211 11.4657 6.66246 11.6889 6.9965C11.9121 7.33054 12.0312 7.72326 12.0312 8.125C12.0312 8.66372 11.8172 9.18038 11.4363 9.56131C11.0554 9.94224 10.5387 10.1562 10 10.1562ZM10 1.40625C8.21871 1.40832 6.51097 2.11685 5.25141 3.37641C3.99185 4.63597 3.28332 6.34371 3.28125 8.125C3.28125 10.5398 4.40156 13.1047 6.52109 15.5422C7.47774 16.6478 8.55442 17.6435 9.73125 18.5109C9.81003 18.5661 9.90385 18.5956 10 18.5956C10.0961 18.5956 10.19 18.5661 10.2688 18.5109C11.4456 17.6435 12.5223 16.6478 13.4789 15.5422C15.5984 13.1047 16.7188 10.5422 16.7188 8.125C16.7167 6.34371 16.0082 4.63597 14.7486 3.37641C13.489 2.11685 11.7813 1.40832 10 1.40625ZM10 17.5398C8.82812 16.6352 4.21875 12.7828 4.21875 8.125C4.21875 6.59172 4.82784 5.12123 5.91204 4.03704C6.99623 2.95284 8.46672 2.34375 10 2.34375C11.5333 2.34375 13.0038 2.95284 14.088 4.03704C15.1722 5.12123 15.7812 6.59172 15.7812 8.125C15.7812 12.7828 11.1719 16.6352 10 17.5398Z" fill="#3B3422"></path></svg> ${escape_html(info[0].address[1])}</a></li> <li class="flex"><a class="flex gap-3 items-start font-manrope 2xl:text-xl xl:text-base font-light text-secondary 2xl:pr-6 xl:pr-4" target="_blank"${attr("href", info[0].phone["reservlink"])}><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 w-5 h-full" viewBox="0 0 20 21" fill="none"><path d="M17.3117 13.0234L13.6211 11.3695C13.4539 11.2978 13.2714 11.269 13.0903 11.2856C12.9091 11.3023 12.735 11.3638 12.5836 11.4648C12.5682 11.4746 12.5536 11.4856 12.5399 11.4976L10.6109 13.1382C10.5909 13.1491 10.5687 13.1552 10.5459 13.156C10.5231 13.1568 10.5004 13.1523 10.4797 13.1429C9.23985 12.5445 7.95548 11.2679 7.3547 10.0452C7.34469 10.0248 7.33949 10.0024 7.33949 9.97961C7.33949 9.95686 7.34469 9.93442 7.3547 9.91399L9.00079 7.96086C9.0126 7.94641 9.02356 7.93128 9.0336 7.91555C9.13312 7.7636 9.19324 7.58926 9.20851 7.40826C9.22379 7.22726 9.19375 7.04531 9.1211 6.87883L7.47892 3.19445C7.38566 2.97696 7.22437 2.79558 7.01927 2.67754C6.81418 2.55949 6.57632 2.51115 6.34142 2.53977C5.3205 2.67398 4.38338 3.17534 3.70518 3.95016C3.02699 4.72497 2.65412 5.72022 2.65626 6.74992C2.65626 12.8671 7.63282 17.8437 13.75 17.8437C14.7797 17.8456 15.7748 17.4727 16.5496 16.7946C17.3244 16.1164 17.8258 15.1794 17.9602 14.1585C17.9887 13.9247 17.941 13.6879 17.8242 13.4834C17.7074 13.2789 17.5276 13.1175 17.3117 13.0234ZM13.75 16.9062C8.15001 16.9062 3.59376 12.3499 3.59376 6.74992C3.59115 5.9483 3.88048 5.17316 4.4077 4.56931C4.93492 3.96545 5.66396 3.57421 6.4586 3.46867H6.47657C6.50805 3.46926 6.53863 3.47935 6.56428 3.49761C6.58993 3.51587 6.60946 3.54146 6.62032 3.57102L8.26876 7.25148C8.27816 7.27195 8.28303 7.2942 8.28303 7.31672C8.28303 7.33924 8.27816 7.36149 8.26876 7.38195L6.61954 9.33977C6.60724 9.35374 6.59601 9.36863 6.58595 9.3843C6.48275 9.54184 6.42198 9.72337 6.40952 9.91129C6.39707 10.0992 6.43335 10.2872 6.51485 10.457C7.20782 11.8757 8.63751 13.2945 10.0719 13.9874C10.2427 14.0685 10.4315 14.1039 10.6201 14.0902C10.8086 14.0765 10.9904 14.0142 11.1477 13.9093C11.1625 13.8991 11.1774 13.8882 11.1914 13.8765L13.1195 12.2359C13.1386 12.2256 13.1596 12.2196 13.1812 12.2183C13.2028 12.2169 13.2244 12.2203 13.2445 12.228L16.9359 13.882C16.9661 13.8948 16.9915 13.9168 17.0084 13.9448C17.0254 13.9729 17.0331 14.0055 17.0305 14.0382C16.9255 14.8332 16.5346 15.5628 15.9309 16.0906C15.3272 16.6184 14.5519 16.9083 13.75 16.9062Z" fill="#3B3422"></path></svg> Reservation: ${escape_html(info[0].phone["reserv"])}</a> <a class="flex gap-3 items-start font-manrope 2xl:text-xl xl:text-base font-light text-secondary 2xl:pl-6 xl:pl-4 border-secondary border-l border-solid"${attr("href", info[0].phone["folink"])}><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 w-5 h-full" viewBox="0 0 20 21" fill="none"><path d="M17.3117 13.0234L13.6211 11.3695C13.4539 11.2978 13.2714 11.269 13.0903 11.2856C12.9091 11.3023 12.735 11.3638 12.5836 11.4648C12.5682 11.4746 12.5536 11.4856 12.5399 11.4976L10.6109 13.1382C10.5909 13.1491 10.5687 13.1552 10.5459 13.156C10.5231 13.1568 10.5004 13.1523 10.4797 13.1429C9.23985 12.5445 7.95548 11.2679 7.3547 10.0452C7.34469 10.0248 7.33949 10.0024 7.33949 9.97961C7.33949 9.95686 7.34469 9.93442 7.3547 9.91399L9.00079 7.96086C9.0126 7.94641 9.02356 7.93128 9.0336 7.91555C9.13312 7.7636 9.19324 7.58926 9.20851 7.40826C9.22379 7.22726 9.19375 7.04531 9.1211 6.87883L7.47892 3.19445C7.38566 2.97696 7.22437 2.79558 7.01927 2.67754C6.81418 2.55949 6.57632 2.51115 6.34142 2.53977C5.3205 2.67398 4.38338 3.17534 3.70518 3.95016C3.02699 4.72497 2.65412 5.72022 2.65626 6.74992C2.65626 12.8671 7.63282 17.8437 13.75 17.8437C14.7797 17.8456 15.7748 17.4727 16.5496 16.7946C17.3244 16.1164 17.8258 15.1794 17.9602 14.1585C17.9887 13.9247 17.941 13.6879 17.8242 13.4834C17.7074 13.2789 17.5276 13.1175 17.3117 13.0234ZM13.75 16.9062C8.15001 16.9062 3.59376 12.3499 3.59376 6.74992C3.59115 5.9483 3.88048 5.17316 4.4077 4.56931C4.93492 3.96545 5.66396 3.57421 6.4586 3.46867H6.47657C6.50805 3.46926 6.53863 3.47935 6.56428 3.49761C6.58993 3.51587 6.60946 3.54146 6.62032 3.57102L8.26876 7.25148C8.27816 7.27195 8.28303 7.2942 8.28303 7.31672C8.28303 7.33924 8.27816 7.36149 8.26876 7.38195L6.61954 9.33977C6.60724 9.35374 6.59601 9.36863 6.58595 9.3843C6.48275 9.54184 6.42198 9.72337 6.40952 9.91129C6.39707 10.0992 6.43335 10.2872 6.51485 10.457C7.20782 11.8757 8.63751 13.2945 10.0719 13.9874C10.2427 14.0685 10.4315 14.1039 10.6201 14.0902C10.8086 14.0765 10.9904 14.0142 11.1477 13.9093C11.1625 13.8991 11.1774 13.8882 11.1914 13.8765L13.1195 12.2359C13.1386 12.2256 13.1596 12.2196 13.1812 12.2183C13.2028 12.2169 13.2244 12.2203 13.2445 12.228L16.9359 13.882C16.9661 13.8948 16.9915 13.9168 17.0084 13.9448C17.0254 13.9729 17.0331 14.0055 17.0305 14.0382C16.9255 14.8332 16.5346 15.5628 15.9309 16.0906C15.3272 16.6184 14.5519 16.9083 13.75 16.9062Z" fill="#3B3422"></path></svg> Front Office: ${escape_html(info[0].phone["fo"])}</a></li> <li><a class="flex gap-3 items-start font-manrope 2xl:text-xl xl:text-base font-light text-secondary"${attr("href", info[0].email["emaillink"])}><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-6 w-5 h-full" viewBox="0 0 20 21" fill="none"><path d="M17.5 3.99609H2.5C2.37568 3.99609 2.25645 4.04548 2.16854 4.13339C2.08064 4.2213 2.03125 4.34052 2.03125 4.46484V15.0898C2.03125 15.3799 2.14648 15.6581 2.3516 15.8632C2.55672 16.0684 2.83492 16.1836 3.125 16.1836H16.875C17.1651 16.1836 17.4433 16.0684 17.6484 15.8632C17.8535 15.6581 17.9688 15.3799 17.9688 15.0898V4.46484C17.9688 4.34052 17.9194 4.2213 17.8315 4.13339C17.7435 4.04548 17.6243 3.99609 17.5 3.99609ZM16.2953 4.93359L10 10.7039L3.70469 4.93359H16.2953ZM16.875 15.2461H3.125C3.08356 15.2461 3.04382 15.2296 3.01451 15.2003C2.98521 15.171 2.96875 15.1313 2.96875 15.0898V5.53047L9.6875 11.6852C9.77391 11.7642 9.88679 11.8081 10.0039 11.8081C10.121 11.8081 10.2339 11.7642 10.3203 11.6852L17.0312 5.53047V15.0898C17.0312 15.1313 17.0148 15.171 16.9855 15.2003C16.9562 15.2296 16.9164 15.2461 16.875 15.2461Z" fill="#3B3422"></path></svg> ${escape_html(info[0].email["email"])}</a></li></ul></div></div> <div class="2xl:py-6 xl:py-4 flex justify-between font-manrope"><p class="text-secondary">Copyright © ${escape_html(currentYear)} Lembongan Beach Club &amp; Resort All rights reserved.</p> <ul class="flex 2xl:gap-5 xl:gap-4"><li><a target="_blank"${attr("href", info[0].social["instagram"])} aria-label="follow our instagram"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-8 xl:w-7 h-full" viewBox="0 0 32 32" fill="none"><path d="M16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9108 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C21.9983 14.4092 21.3657 12.884 20.2408 11.7592C19.116 10.6343 17.5908 10.0017 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20ZM22 3H10C8.14409 3.00199 6.36477 3.74012 5.05245 5.05245C3.74012 6.36477 3.00199 8.14409 3 10V22C3.00199 23.8559 3.74012 25.6352 5.05245 26.9476C6.36477 28.2599 8.14409 28.998 10 29H22C23.8559 28.998 25.6352 28.2599 26.9476 26.9476C28.2599 25.6352 28.998 23.8559 29 22V10C28.998 8.14409 28.2599 6.36477 26.9476 5.05245C25.6352 3.74012 23.8559 3.00199 22 3ZM27 22C27 23.3261 26.4732 24.5979 25.5355 25.5355C24.5979 26.4732 23.3261 27 22 27H10C8.67392 27 7.40215 26.4732 6.46447 25.5355C5.52678 24.5979 5 23.3261 5 22V10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5H22C23.3261 5 24.5979 5.52678 25.5355 6.46447C26.4732 7.40215 27 8.67392 27 10V22ZM24 9.5C24 9.79667 23.912 10.0867 23.7472 10.3334C23.5824 10.58 23.3481 10.7723 23.074 10.8858C22.7999 10.9994 22.4983 11.0291 22.2074 10.9712C21.9164 10.9133 21.6491 10.7704 21.4393 10.5607C21.2296 10.3509 21.0867 10.0836 21.0288 9.79264C20.9709 9.50166 21.0007 9.20006 21.1142 8.92597C21.2277 8.65189 21.42 8.41762 21.6666 8.2528C21.9133 8.08797 22.2033 8 22.5 8C22.8978 8 23.2794 8.15804 23.5607 8.43934C23.842 8.72064 24 9.10218 24 9.5Z" fill="#3B3422"></path></svg></a></li> <li><a target="_blank"${attr("href", info[0].social["facebook"])} aria-label="follow our facebook"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-8 xl:w-7 h-full" viewBox="0 0 32 32" fill="none"><path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM17 26.9538V19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17H17V14C17 13.4696 17.2107 12.9609 17.5858 12.5858C17.9609 12.2107 18.4696 12 19 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H19C17.9391 10 16.9217 10.4214 16.1716 11.1716C15.4214 11.9217 15 12.9391 15 14V17H12C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H15V26.9538C12.181 26.6964 9.56971 25.3622 7.7093 23.2287C5.8489 21.0952 4.8826 18.3266 5.0114 15.4988C5.1402 12.671 6.35419 10.0017 8.40085 8.04613C10.4475 6.09057 13.1693 4.9993 16 4.9993C18.8307 4.9993 21.5525 6.09057 23.5992 8.04613C25.6458 10.0017 26.8598 12.671 26.9886 15.4988C27.1174 18.3266 26.1511 21.0952 24.2907 23.2287C22.4303 25.3622 19.819 26.6964 17 26.9538Z" fill="#3B3422"></path></svg></a></li> <li><a target="_blank"${attr("href", info[0].social["youtube"])} aria-label="subscribe our youtube channel"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-8 xl:w-7 h-full" viewBox="0 0 32 32" fill="none"><path d="M20.555 15.1675L14.555 11.1675C14.4044 11.067 14.2293 11.0093 14.0484 11.0005C13.8675 10.9918 13.6877 11.0323 13.528 11.1177C13.3684 11.2032 13.2349 11.3304 13.1419 11.4858C13.0489 11.6412 12.9999 11.8189 13 12V20C12.9999 20.1811 13.0489 20.3588 13.1419 20.5142C13.2349 20.6696 13.3684 20.7968 13.528 20.8823C13.6877 20.9677 13.8675 21.0082 14.0484 20.9995C14.2293 20.9907 14.4044 20.933 14.555 20.8325L20.555 16.8325C20.6922 16.7412 20.8047 16.6175 20.8825 16.4722C20.9603 16.327 21.001 16.1648 21.001 16C21.001 15.8352 20.9603 15.673 20.8825 15.5278C20.8047 15.3826 20.6922 15.2588 20.555 15.1675ZM15 18.1313V13.875L18.1975 16L15 18.1313ZM29.2913 8.69C29.1735 8.22919 28.9478 7.80298 28.6329 7.44654C28.318 7.09011 27.9228 6.81366 27.48 6.64C23.195 4.985 16.375 5 16 5C15.625 5 8.805 4.985 4.52 6.64C4.0772 6.81366 3.68204 7.09011 3.36712 7.44654C3.05219 7.80298 2.82653 8.22919 2.70875 8.69C2.385 9.9375 2 12.2175 2 16C2 19.7825 2.385 22.0625 2.70875 23.31C2.82636 23.771 3.05194 24.1975 3.36687 24.5542C3.68181 24.9108 4.07706 25.1875 4.52 25.3613C8.625 26.945 15.05 27 15.9175 27H16.0825C16.95 27 23.3787 26.945 27.48 25.3613C27.9229 25.1875 28.3182 24.9108 28.6331 24.5542C28.9481 24.1975 29.1736 23.771 29.2913 23.31C29.615 22.06 30 19.7825 30 16C30 12.2175 29.615 9.9375 29.2913 8.69ZM27.355 22.815C27.3169 22.9684 27.243 23.1105 27.1394 23.2298C27.0357 23.3491 26.9053 23.4421 26.7588 23.5013C22.8025 25.0288 16.0738 25.0013 16.0088 25.0013H16C15.9325 25.0013 9.20875 25.0263 5.25 23.5013C5.10346 23.4421 4.97303 23.3491 4.86938 23.2298C4.76574 23.1105 4.69184 22.9684 4.65375 22.815C4.35 21.6738 4 19.5713 4 16C4 12.4288 4.35 10.3263 4.645 9.19125C4.68239 9.03698 4.75596 8.89382 4.85965 8.77362C4.96333 8.65342 5.09413 8.55963 5.24125 8.5C9.05625 7.02625 15.4487 7 15.9725 7H16.0063C16.0738 7 22.8038 6.9775 26.7563 8.5C26.9028 8.55915 27.0332 8.65217 27.1369 8.77146C27.2405 8.89074 27.3144 9.03289 27.3525 9.18625C27.65 10.3263 28 12.4288 28 16C28 19.5713 27.65 21.6738 27.355 22.8088V22.815Z" fill="#3B3422"></path></svg></a></li> <li><a target="_blank"${attr("href", info[0].social["linkedin"])} aria-label="follow our linkedin"><svg xmlns="http://www.w3.org/2000/svg" class="2xl:w-8 xl:w-7 h-full" viewBox="0 0 32 32" fill="none"><path d="M27 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V27C3 27.5304 3.21071 28.0391 3.58579 28.4142C3.96086 28.7893 4.46957 29 5 29H27C27.5304 29 28.0391 28.7893 28.4142 28.4142C28.7893 28.0391 29 27.5304 29 27V5C29 4.46957 28.7893 3.96086 28.4142 3.58579C28.0391 3.21071 27.5304 3 27 3ZM27 27H5V5H27V27ZM12 14V22C12 22.2652 11.8946 22.5196 11.7071 22.7071C11.5196 22.8946 11.2652 23 11 23C10.7348 23 10.4804 22.8946 10.2929 22.7071C10.1054 22.5196 10 22.2652 10 22V14C10 13.7348 10.1054 13.4804 10.2929 13.2929C10.4804 13.1054 10.7348 13 11 13C11.2652 13 11.5196 13.1054 11.7071 13.2929C11.8946 13.4804 12 13.7348 12 14ZM23 17.5V22C23 22.2652 22.8946 22.5196 22.7071 22.7071C22.5196 22.8946 22.2652 23 22 23C21.7348 23 21.4804 22.8946 21.2929 22.7071C21.1054 22.5196 21 22.2652 21 22V17.5C21 16.837 20.7366 16.2011 20.2678 15.7322C19.7989 15.2634 19.163 15 18.5 15C17.837 15 17.2011 15.2634 16.7322 15.7322C16.2634 16.2011 16 16.837 16 17.5V22C16 22.2652 15.8946 22.5196 15.7071 22.7071C15.5196 22.8946 15.2652 23 15 23C14.7348 23 14.4804 22.8946 14.2929 22.7071C14.1054 22.5196 14 22.2652 14 22V14C14.0012 13.7551 14.0923 13.5191 14.256 13.3369C14.4197 13.1546 14.6446 13.0388 14.888 13.0114C15.1314 12.9839 15.3764 13.0468 15.5765 13.188C15.7767 13.3292 15.918 13.539 15.9738 13.7775C16.6502 13.3186 17.4389 13.0526 18.2552 13.0081C19.0714 12.9637 19.8844 13.1424 20.6067 13.5251C21.329 13.9078 21.9335 14.48 22.3551 15.1803C22.7768 15.8806 22.9997 16.6825 23 17.5ZM12.5 10.5C12.5 10.7967 12.412 11.0867 12.2472 11.3334C12.0824 11.58 11.8481 11.7723 11.574 11.8858C11.2999 11.9994 10.9983 12.0291 10.7074 11.9712C10.4164 11.9133 10.1491 11.7704 9.93934 11.5607C9.72956 11.3509 9.5867 11.0836 9.52882 10.7926C9.47094 10.5017 9.50065 10.2001 9.61418 9.92597C9.72771 9.65189 9.91997 9.41762 10.1666 9.2528C10.4133 9.08797 10.7033 9 11 9C11.3978 9 11.7794 9.15804 12.0607 9.43934C12.342 9.72064 12.5 10.1022 12.5 10.5Z" fill="#3B3422"></path></svg></a></li></ul></div></div></div></footer> <footer class="block xl:hidden h-full w-full relative bg-lightbg bg-[url('/images/footer/Footer%20Lembongan.webp')] bg-cover bg-center pb-40"><div class="md:p-6 p-4 relative"><div class="px-29 py-10 border border-secondary border-solid flex flex-col lg:gap-28 md:gap-20 gap-5"><div class="px-10 md:px-20 lg:px-28 flex flex-col w-full justify-center items-center text-center gap-8 pb-7"><a href="/" data-sveltekit-reload="" class="lg:w-72 md:w-56 w-48"><img src="/images/footer/lembongan-blacklogo.webp" class="object-cover w-full h-full" alt="Logo TRM Lembongan"></a> <p class="text-secondary font-marcel lg:text-6xl md:text-4xl text-3xl">Where Balinese Charm Meets Modern Luxury</p></div> `;
  Accordion($$payload, {
    defaultClass: "text-secondary dark:text-secondary mx-10 md:mx-20 lg:mx-28 !border-b border-secondary",
    activeClass: "bg-transparent text-secondary dark:text-secondary !border-none",
    children: ($$payload2) => {
      AccordionItem($$payload2, {
        tag: "h5",
        defaultClass: "flex items-center justify-between w-full font-medium text-left border-secondary",
        paddingDefault: "pb-2",
        borderSharedClass: "border-none",
        children: ($$payload3) => {
          $$payload3.out += `<ul class="flex justify-between gap-10 pt-2 font-manrope text-secondary text-base uppercase"><li><ul class="flex flex-col md:gap-4 gap-3"><li><a data-sveltekit-reload="" href="/">Home</a></li> <li><a data-sveltekit-reload="" href="/accommodations">Accommodation</a></li> <li><a data-sveltekit-reload="" href="/special-offer">Special Offers</a></li> <li><a data-sveltekit-reload="" href="/dine">Dine</a></li></ul></li> <li><ul class="flex flex-col md:gap-4 gap-3"><li><a data-sveltekit-reload="" href="/gallery">Gallery</a></li> <li><a data-sveltekit-reload="" href="/blog">Blog</a></li> <li><a data-sveltekit-reload="" href="/contact-us">Contact Us</a></li></ul></li></ul>`;
        },
        $$slots: {
          default: true,
          header: ($$payload3) => {
            $$payload3.out += `<span slot="header" class="font-medium font-marcel uppercase">Sitemap</span>`;
          },
          arrowup: ($$payload3) => {
            $$payload3.out += `<div slot="arrowup"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -me-0.5" fill="#3b3422" viewBox="0 0 256 256"><path d="M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"></path></svg></div>`;
          },
          arrowdown: ($$payload3) => {
            $$payload3.out += `<span slot="arrowdown"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 -me-0.5" fill="#3b3422" viewBox="0 0 256 256"><path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path></svg></span>`;
          }
        }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="mx-10 md:mx-20 lg:mx-28 flex flex-col"><ul class="flex flex-col gap-2 justify-center font-manrope text-sm pt-2 pb-3 text-secondary"><li><a target="_blank"${attr("href", info[0].address[2])} class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" class="md:w-6 md:h-6 w-12 h-12" viewBox="0 0 20 21" fill="none"><path d="M10 5.34863C9.41284 5.34863 8.83886 5.52275 8.35065 5.84896C7.86244 6.17517 7.48193 6.63882 7.25723 7.18129C7.03254 7.72376 6.97374 8.32068 7.08829 8.89656C7.20284 9.47244 7.48559 10.0014 7.90078 10.4166C8.31596 10.8318 8.84494 11.1145 9.42083 11.2291C9.99671 11.3436 10.5936 11.2848 11.1361 11.0602C11.6786 10.8355 12.1422 10.4549 12.4684 9.96673C12.7946 9.47852 12.9688 8.90455 12.9688 8.31738C12.9688 7.53002 12.656 6.77491 12.0992 6.21816C11.5425 5.66141 10.7874 5.34863 10 5.34863ZM10 10.3486C9.59826 10.3486 9.20554 10.2295 8.8715 10.0063C8.53746 9.78311 8.27711 9.46587 8.12337 9.09471C7.96963 8.72355 7.9294 8.31513 8.00778 7.92111C8.08616 7.52708 8.27961 7.16515 8.56369 6.88107C8.84776 6.597 9.2097 6.40354 9.60372 6.32516C9.99775 6.24679 10.4062 6.28701 10.7773 6.44075C11.1485 6.59449 11.4657 6.85484 11.6889 7.18888C11.9121 7.52292 12.0312 7.91564 12.0312 8.31738C12.0312 8.8561 11.8172 9.37276 11.4363 9.75369C11.0554 10.1346 10.5387 10.3486 10 10.3486ZM10 1.59863C8.21871 1.6007 6.51097 2.30923 5.25141 3.56879C3.99185 4.82835 3.28332 6.53609 3.28125 8.31738C3.28125 10.7322 4.40156 13.2971 6.52109 15.7346C7.47774 16.8401 8.55442 17.8358 9.73125 18.7033C9.81003 18.7584 9.90385 18.788 10 18.788C10.0961 18.788 10.19 18.7584 10.2688 18.7033C11.4456 17.8358 12.5223 16.8401 13.4789 15.7346C15.5984 13.2971 16.7188 10.7346 16.7188 8.31738C16.7167 6.53609 16.0082 4.82835 14.7486 3.56879C13.489 2.30923 11.7813 1.6007 10 1.59863ZM10 17.7322C8.82812 16.8275 4.21875 12.9752 4.21875 8.31738C4.21875 6.7841 4.82784 5.31362 5.91204 4.22942C6.99623 3.14523 8.46672 2.53613 10 2.53613C11.5333 2.53613 13.0038 3.14523 14.088 4.22942C15.1722 5.31362 15.7812 6.7841 15.7812 8.31738C15.7812 12.9752 11.1719 16.8275 10 17.7322Z" fill="#3B3422"></path></svg> ${escape_html(info[0].address[1])}</a></li> <li><a target="_blank"${attr("href", info[0].phone["reservlink"])} class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 14 15" fill="none"><path d="M12.1182 9.26638L9.53477 8.10864C9.41772 8.05849 9.29 8.03832 9.16319 8.04997C9.03638 8.06162 8.91448 8.10472 8.80852 8.17536C8.79777 8.18226 8.78753 8.18994 8.7779 8.19833L7.42766 9.34677C7.41365 9.35441 7.39806 9.35868 7.38211 9.35925C7.36617 9.35982 7.35031 9.35667 7.33579 9.35005C6.4679 8.93114 5.56883 8.03755 5.14829 7.18169C5.14128 7.16739 5.13764 7.15168 5.13764 7.13575C5.13764 7.11983 5.14128 7.10412 5.14829 7.08981L6.30055 5.72263C6.30882 5.71251 6.31649 5.70192 6.32352 5.69091C6.39319 5.58454 6.43527 5.4625 6.44596 5.33581C6.45665 5.20911 6.43562 5.08174 6.38477 4.9652L5.23524 2.38614C5.16996 2.2339 5.05706 2.10693 4.91349 2.0243C4.76992 1.94167 4.60343 1.90783 4.43899 1.92786C3.72435 2.02181 3.06837 2.37276 2.59363 2.91513C2.11889 3.4575 1.85788 4.15418 1.85938 4.87497C1.85938 9.157 5.34298 12.6406 9.62501 12.6406C10.3458 12.642 11.0424 12.3809 11.5847 11.9062C12.1271 11.4315 12.4781 10.7756 12.5721 10.061C12.5921 9.89732 12.5587 9.73157 12.4769 9.5884C12.3952 9.44523 12.2693 9.33229 12.1182 9.26638ZM9.62501 11.9843C5.70501 11.9843 2.51563 8.79497 2.51563 4.87497C2.5138 4.31384 2.71634 3.77123 3.08539 3.34854C3.45444 2.92584 3.96477 2.65197 4.52102 2.5781H4.5336C4.55564 2.57851 4.57704 2.58557 4.59499 2.59835C4.61295 2.61114 4.62662 2.62905 4.63423 2.64974L5.78813 5.22606C5.79471 5.24039 5.79812 5.25596 5.79812 5.27173C5.79812 5.28749 5.79471 5.30307 5.78813 5.31739L4.63368 6.68786C4.62507 6.69764 4.6172 6.70806 4.61016 6.71903C4.53792 6.82931 4.49538 6.95638 4.48667 7.08793C4.47795 7.21947 4.50334 7.35104 4.5604 7.46989C5.04548 8.46302 6.04626 9.45614 7.05032 9.94122C7.16986 9.99796 7.30207 10.0227 7.43405 10.0132C7.56603 10.0036 7.69327 9.95995 7.80337 9.88653C7.81376 9.87942 7.82415 9.87177 7.83399 9.86356L9.18368 8.71513C9.19701 8.70796 9.21173 8.70377 9.22683 8.70282C9.24193 8.70188 9.25706 8.70421 9.27118 8.70966L11.8552 9.86739C11.8763 9.87638 11.894 9.89178 11.9059 9.91141C11.9178 9.93103 11.9232 9.9539 11.9213 9.97677C11.8478 10.5333 11.5742 11.044 11.1516 11.4134C10.729 11.7829 10.1863 11.9859 9.62501 11.9843Z" fill="#3B3422"></path></svg> Reservation: ${escape_html(info[0].phone["reserv"])}</a></li> <li><a target="_blank"${attr("href", info[0].phone["folink"])} class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 14 15" fill="none"><path d="M12.1182 9.26638L9.53477 8.10864C9.41772 8.05849 9.29 8.03832 9.16319 8.04997C9.03638 8.06162 8.91448 8.10472 8.80852 8.17536C8.79777 8.18226 8.78753 8.18994 8.7779 8.19833L7.42766 9.34677C7.41365 9.35441 7.39806 9.35868 7.38211 9.35925C7.36617 9.35982 7.35031 9.35667 7.33579 9.35005C6.4679 8.93114 5.56883 8.03755 5.14829 7.18169C5.14128 7.16739 5.13764 7.15168 5.13764 7.13575C5.13764 7.11983 5.14128 7.10412 5.14829 7.08981L6.30055 5.72263C6.30882 5.71251 6.31649 5.70192 6.32352 5.69091C6.39319 5.58454 6.43527 5.4625 6.44596 5.33581C6.45665 5.20911 6.43562 5.08174 6.38477 4.9652L5.23524 2.38614C5.16996 2.2339 5.05706 2.10693 4.91349 2.0243C4.76992 1.94167 4.60343 1.90783 4.43899 1.92786C3.72435 2.02181 3.06837 2.37276 2.59363 2.91513C2.11889 3.4575 1.85788 4.15418 1.85938 4.87497C1.85938 9.157 5.34298 12.6406 9.62501 12.6406C10.3458 12.642 11.0424 12.3809 11.5847 11.9062C12.1271 11.4315 12.4781 10.7756 12.5721 10.061C12.5921 9.89732 12.5587 9.73157 12.4769 9.5884C12.3952 9.44523 12.2693 9.33229 12.1182 9.26638ZM9.62501 11.9843C5.70501 11.9843 2.51563 8.79497 2.51563 4.87497C2.5138 4.31384 2.71634 3.77123 3.08539 3.34854C3.45444 2.92584 3.96477 2.65197 4.52102 2.5781H4.5336C4.55564 2.57851 4.57704 2.58557 4.59499 2.59835C4.61295 2.61114 4.62662 2.62905 4.63423 2.64974L5.78813 5.22606C5.79471 5.24039 5.79812 5.25596 5.79812 5.27173C5.79812 5.28749 5.79471 5.30307 5.78813 5.31739L4.63368 6.68786C4.62507 6.69764 4.6172 6.70806 4.61016 6.71903C4.53792 6.82931 4.49538 6.95638 4.48667 7.08793C4.47795 7.21947 4.50334 7.35104 4.5604 7.46989C5.04548 8.46302 6.04626 9.45614 7.05032 9.94122C7.16986 9.99796 7.30207 10.0227 7.43405 10.0132C7.56603 10.0036 7.69327 9.95995 7.80337 9.88653C7.81376 9.87942 7.82415 9.87177 7.83399 9.86356L9.18368 8.71513C9.19701 8.70796 9.21173 8.70377 9.22683 8.70282C9.24193 8.70188 9.25706 8.70421 9.27118 8.70966L11.8552 9.86739C11.8763 9.87638 11.894 9.89178 11.9059 9.91141C11.9178 9.93103 11.9232 9.9539 11.9213 9.97677C11.8478 10.5333 11.5742 11.044 11.1516 11.4134C10.729 11.7829 10.1863 11.9859 9.62501 11.9843Z" fill="#3B3422"></path></svg> Front Office: ${escape_html(info[0].phone["fo"])}</a></li> <li><a target="_blank"${attr("href", info[0].email["emaillink"])} class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 21" fill="none"><path d="M17.5 4.09863H2.5C2.37568 4.09863 2.25645 4.14802 2.16854 4.23593C2.08064 4.32383 2.03125 4.44306 2.03125 4.56738V15.1924C2.03125 15.4825 2.14648 15.7607 2.3516 15.9658C2.55672 16.1709 2.83492 16.2861 3.125 16.2861H16.875C17.1651 16.2861 17.4433 16.1709 17.6484 15.9658C17.8535 15.7607 17.9688 15.4825 17.9688 15.1924V4.56738C17.9688 4.44306 17.9194 4.32383 17.8315 4.23593C17.7435 4.14802 17.6243 4.09863 17.5 4.09863ZM16.2953 5.03613L10 10.8064L3.70469 5.03613H16.2953ZM16.875 15.3486H3.125C3.08356 15.3486 3.04382 15.3322 3.01451 15.3029C2.98521 15.2736 2.96875 15.2338 2.96875 15.1924V5.63301L9.6875 11.7877C9.77391 11.8668 9.88679 11.9106 10.0039 11.9106C10.121 11.9106 10.2339 11.8668 10.3203 11.7877L17.0312 5.63301V15.1924C17.0312 15.2338 17.0148 15.2736 16.9855 15.3029C16.9562 15.3322 16.9164 15.3486 16.875 15.3486Z" fill="#3B3422"></path></svg> ${escape_html(info[0].email["email"])}</a></li></ul> <p class="text-center text-secondary text-base pt-4 pb-3 border-t border-solid border-secondary">Copyright © ${escape_html(currentYear)} Lembongan Beach Club &amp; Resort All rights reserved.</p> <ul class="flex gap-5 justify-center items-center"><li><a target="_blank"${attr("href", info[0].social["instagram"])} aria-label="follow our instagram"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 7.5C11.11 7.5 10.24 7.76392 9.49993 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18868 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0243 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.148C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM20.25 16.5C20.25 17.4946 19.8549 18.4484 19.1517 19.1517C18.4484 19.8549 17.4946 20.25 16.5 20.25H7.5C6.50544 20.25 5.55161 19.8549 4.84835 19.1517C4.14509 18.4484 3.75 17.4946 3.75 16.5V7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75H16.5C17.4946 3.75 18.4484 4.14509 19.1517 4.84835C19.8549 5.55161 20.25 6.50544 20.25 7.5V16.5ZM18 7.125C18 7.3475 17.934 7.56501 17.8104 7.75002C17.6868 7.93502 17.5111 8.07922 17.3055 8.16436C17.1 8.24951 16.8738 8.27179 16.6555 8.22838C16.4373 8.18498 16.2368 8.07783 16.0795 7.9205C15.9222 7.76316 15.815 7.56271 15.7716 7.34448C15.7282 7.12625 15.7505 6.90005 15.8356 6.69448C15.9208 6.48891 16.065 6.31321 16.25 6.1896C16.435 6.06598 16.6525 6 16.875 6C17.1734 6 17.4595 6.11853 17.6705 6.3295C17.8815 6.54048 18 6.82663 18 7.125Z" fill="#3B3422"></path></svg></a></li> <li><a target="_blank"${attr("href", info[0].social["facebook"])} aria-label="follow our facebook"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12.75 20.2153V14.25H15C15.1989 14.25 15.3897 14.171 15.5303 14.0303C15.671 13.8897 15.75 13.6989 15.75 13.5C15.75 13.3011 15.671 13.1103 15.5303 12.9697C15.3897 12.829 15.1989 12.75 15 12.75H12.75V10.5C12.75 10.1022 12.908 9.72064 13.1893 9.43934C13.4706 9.15804 13.8522 9 14.25 9H15.75C15.9489 9 16.1397 8.92098 16.2803 8.78033C16.421 8.63968 16.5 8.44891 16.5 8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5H14.25C13.4544 7.5 12.6913 7.81607 12.1287 8.37868C11.5661 8.94129 11.25 9.70435 11.25 10.5V12.75H9C8.80109 12.75 8.61033 12.829 8.46967 12.9697C8.32902 13.1103 8.25 13.3011 8.25 13.5C8.25 13.6989 8.32902 13.8897 8.46967 14.0303C8.61033 14.171 8.80109 14.25 9 14.25H11.25V20.2153C9.13575 20.0223 7.17728 19.0217 5.78198 17.4215C4.38667 15.8214 3.66195 13.7449 3.75855 11.6241C3.85515 9.50324 4.76564 7.50127 6.30064 6.0346C7.83563 4.56793 9.87696 3.74947 12 3.74947C14.1231 3.74947 16.1644 4.56793 17.6994 6.0346C19.2344 7.50127 20.1449 9.50324 20.2415 11.6241C20.3381 13.7449 19.6133 15.8214 18.218 17.4215C16.8227 19.0217 14.8643 20.0223 12.75 20.2153Z" fill="#3B3422"></path></svg></a></li> <li><a target="_blank"${attr("href", info[0].social["youtube"])} aria-label="subscribe our youtube channel "><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M15.4163 11.3756L10.9163 8.37563C10.8033 8.30025 10.6719 8.25697 10.5363 8.2504C10.4006 8.24382 10.2657 8.27421 10.146 8.33831C10.0263 8.40241 9.92619 8.49783 9.85645 8.61436C9.7867 8.7309 9.74991 8.86419 9.75 9V15C9.74991 15.1358 9.7867 15.2691 9.85645 15.3856C9.92619 15.5022 10.0263 15.5976 10.146 15.6617C10.2657 15.7258 10.4006 15.7562 10.5363 15.7496C10.6719 15.743 10.8033 15.6998 10.9163 15.6244L15.4163 12.6244C15.5191 12.5559 15.6035 12.4631 15.6618 12.3542C15.7202 12.2452 15.7507 12.1236 15.7507 12C15.7507 11.8764 15.7202 11.7548 15.6618 11.6458C15.6035 11.5369 15.5191 11.4441 15.4163 11.3756ZM11.25 13.5984V10.4063L13.6481 12L11.25 13.5984ZM21.9684 6.5175C21.8801 6.17189 21.7109 5.85224 21.4747 5.58491C21.2385 5.31758 20.9421 5.11024 20.61 4.98C17.3962 3.73875 12.2812 3.75 12 3.75C11.7188 3.75 6.60375 3.73875 3.39 4.98C3.0579 5.11024 2.76153 5.31758 2.52534 5.58491C2.28915 5.85224 2.1199 6.17189 2.03156 6.5175C1.78875 7.45313 1.5 9.16313 1.5 12C1.5 14.8369 1.78875 16.5469 2.03156 17.4825C2.11977 17.8283 2.28895 18.1481 2.52515 18.4156C2.76136 18.6831 3.0578 18.8906 3.39 19.0209C6.46875 20.2088 11.2875 20.25 11.9381 20.25H12.0619C12.7125 20.25 17.5341 20.2088 20.61 19.0209C20.9422 18.8906 21.2386 18.6831 21.4748 18.4156C21.711 18.1481 21.8802 17.8283 21.9684 17.4825C22.2113 16.545 22.5 14.8369 22.5 12C22.5 9.16313 22.2113 7.45313 21.9684 6.5175ZM20.5162 17.1113C20.4877 17.2263 20.4323 17.3329 20.3545 17.4224C20.2768 17.5118 20.179 17.5816 20.0691 17.6259C17.1019 18.7716 12.0553 18.7509 12.0066 18.7509H12C11.9494 18.7509 6.90656 18.7697 3.9375 17.6259C3.8276 17.5816 3.72977 17.5118 3.65204 17.4224C3.57431 17.3329 3.51888 17.2263 3.49031 17.1113C3.2625 16.2553 3 14.6784 3 12C3 9.32157 3.2625 7.74469 3.48375 6.89344C3.51179 6.77774 3.56697 6.67037 3.64473 6.58022C3.7225 6.49007 3.8206 6.41972 3.93094 6.375C6.79219 5.26969 11.5866 5.25 11.9794 5.25H12.0047C12.0553 5.25 17.1028 5.23313 20.0672 6.375C20.1771 6.41936 20.2749 6.48913 20.3526 6.57859C20.4304 6.66806 20.4858 6.77467 20.5144 6.88969C20.7375 7.74469 21 9.32157 21 12C21 14.6784 20.7375 16.2553 20.5162 17.1066V17.1113Z" fill="#3B3422"></path></svg></a></li> <li><a target="_blank"${attr("href", info[0].social["linkedin"])} aria-label="follow our linkedin"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M20.25 2.25H3.75C3.35218 2.25 2.97064 2.40804 2.68934 2.68934C2.40804 2.97064 2.25 3.35218 2.25 3.75V20.25C2.25 20.6478 2.40804 21.0294 2.68934 21.3107C2.97064 21.592 3.35218 21.75 3.75 21.75H20.25C20.6478 21.75 21.0294 21.592 21.3107 21.3107C21.592 21.0294 21.75 20.6478 21.75 20.25V3.75C21.75 3.35218 21.592 2.97064 21.3107 2.68934C21.0294 2.40804 20.6478 2.25 20.25 2.25ZM20.25 20.25H3.75V3.75H20.25V20.25ZM9 10.5V16.5C9 16.6989 8.92098 16.8897 8.78033 17.0303C8.63968 17.171 8.44891 17.25 8.25 17.25C8.05109 17.25 7.86032 17.171 7.71967 17.0303C7.57902 16.8897 7.5 16.6989 7.5 16.5V10.5C7.5 10.3011 7.57902 10.1103 7.71967 9.96967C7.86032 9.82902 8.05109 9.75 8.25 9.75C8.44891 9.75 8.63968 9.82902 8.78033 9.96967C8.92098 10.1103 9 10.3011 9 10.5ZM17.25 13.125V16.5C17.25 16.6989 17.171 16.8897 17.0303 17.0303C16.8897 17.171 16.6989 17.25 16.5 17.25C16.3011 17.25 16.1103 17.171 15.9697 17.0303C15.829 16.8897 15.75 16.6989 15.75 16.5V13.125C15.75 12.6277 15.5525 12.1508 15.2008 11.7992C14.8492 11.4475 14.3723 11.25 13.875 11.25C13.3777 11.25 12.9008 11.4475 12.5492 11.7992C12.1975 12.1508 12 12.6277 12 13.125V16.5C12 16.6989 11.921 16.8897 11.7803 17.0303C11.6397 17.171 11.4489 17.25 11.25 17.25C11.0511 17.25 10.8603 17.171 10.7197 17.0303C10.579 16.8897 10.5 16.6989 10.5 16.5V10.5C10.5009 10.3163 10.5693 10.1393 10.692 10.0026C10.8148 9.86596 10.9834 9.7791 11.166 9.75852C11.3485 9.73794 11.5323 9.78508 11.6824 9.89099C11.8325 9.99691 11.9385 10.1542 11.9803 10.3331C12.4877 9.98894 13.0792 9.78947 13.6914 9.75611C14.3036 9.72276 14.9133 9.85679 15.455 10.1438C15.9968 10.4308 16.4501 10.86 16.7664 11.3852C17.0826 11.9105 17.2498 12.5119 17.25 13.125ZM9.375 7.875C9.375 8.0975 9.30902 8.31501 9.1854 8.50002C9.06179 8.68502 8.88609 8.82922 8.68052 8.91436C8.47495 8.99951 8.24875 9.02179 8.03052 8.97838C7.81229 8.93498 7.61184 8.82783 7.4545 8.6705C7.29717 8.51316 7.19002 8.31271 7.14662 8.09448C7.10321 7.87625 7.12549 7.65005 7.21064 7.44448C7.29578 7.23891 7.43998 7.06321 7.62498 6.9396C7.80999 6.81598 8.0275 6.75 8.25 6.75C8.54837 6.75 8.83452 6.86853 9.0455 7.0795C9.25647 7.29048 9.375 7.57663 9.375 7.875Z" fill="#3B3422"></path></svg></a></li></ul></div></div></div></footer>`;
  bind_props($$props, { info });
  pop();
}
Swiper.use([Autoplay, Navigation, EffectFade, Pagination]);
export {
  Drawer as D,
  Footer as F,
  sineIn as s
};
