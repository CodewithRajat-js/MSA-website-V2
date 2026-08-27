(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/MotionController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionController",
    ()=>MotionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/motion.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MotionController() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "MotionController.useLayoutEffect": ()=>{
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const { gsap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGsap"])();
            const context = gsap.context({
                "MotionController.useLayoutEffect.context": ()=>{
                    gsap.from(".hero h1", {
                        autoAlpha: 0,
                        y: 34,
                        duration: 0.9,
                        ease: "power3.out",
                        delay: 0.1
                    });
                    gsap.from(".hero-meta", {
                        autoAlpha: 0,
                        y: 16,
                        duration: 0.65,
                        ease: "power2.out",
                        delay: 0.5
                    });
                    gsap.from(".hero-image", {
                        scale: 1.06,
                        duration: 1.2,
                        ease: "power2.out"
                    });
                    gsap.to(".hero-image", {
                        yPercent: 7,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".hero",
                            start: "top top",
                            end: "bottom top",
                            scrub: true
                        }
                    });
                    [
                        ".about-content",
                        ".event-feature",
                        ".people-stage",
                        ".project-feature"
                    ].forEach({
                        "MotionController.useLayoutEffect.context": (selector)=>{
                            gsap.from(selector, {
                                autoAlpha: 0,
                                y: 44,
                                duration: 0.85,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: selector,
                                    start: "top 82%",
                                    once: true
                                }
                            });
                        }
                    }["MotionController.useLayoutEffect.context"]);
                    gsap.from(".moment-wall .moment-image", {
                        autoAlpha: 0,
                        scale: 0.96,
                        stagger: 0.08,
                        duration: 0.7,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".moment-wall",
                            start: "top 78%",
                            once: true
                        }
                    });
                    gsap.from(".join-cta > div", {
                        autoAlpha: 0,
                        y: 34,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".join-cta",
                            start: "top 75%",
                            once: true
                        }
                    });
                }
            }["MotionController.useLayoutEffect.context"]);
            return ({
                "MotionController.useLayoutEffect": ()=>context.revert()
            })["MotionController.useLayoutEffect"];
        }
    }["MotionController.useLayoutEffect"], []);
    return null;
}
_s(MotionController, "n7/vCynhJvM+pLkyL2DMQUF0odM=");
_c = MotionController;
var _c;
__turbopack_context__.k.register(_c, "MotionController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navigation/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SiteHeader() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "site-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "site-mark",
                href: "#top",
                "aria-label": "MSA BIT Jaipur home",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "✦"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SiteHeader.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    "MSA BIT JAIPUR"
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/SiteHeader.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "mobile-navigation",
                className: menuOpen ? "is-open" : "",
                "aria-label": "Primary navigation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "nav-list",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: ()=>setMenuOpen(false),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/navigation/SiteHeader.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/components/navigation/SiteHeader.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/navigation/SiteHeader.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation/SiteHeader.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "join-link",
                href: "#apply",
                children: [
                    "JOIN US ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SiteHeader.tsx",
                        lineNumber: 24,
                        columnNumber: 52
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/SiteHeader.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "menu-button",
                type: "button",
                "aria-expanded": menuOpen,
                "aria-controls": "mobile-navigation",
                onClick: ()=>setMenuOpen((open)=>!open),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Toggle navigation"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SiteHeader.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: menuOpen ? "×" : "☰"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SiteHeader.tsx",
                        lineNumber: 26,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/SiteHeader.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navigation/SiteHeader.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/GalleryWall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryWall",
    ()=>GalleryWall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/home.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GalleryWall() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryWall.useEffect": ()=>{
            const closeOnEscape = {
                "GalleryWall.useEffect.closeOnEscape": (event)=>{
                    if (event.key === "Escape") setSelected(null);
                }
            }["GalleryWall.useEffect.closeOnEscape"];
            window.addEventListener("keydown", closeOnEscape);
            return ({
                "GalleryWall.useEffect": ()=>window.removeEventListener("keydown", closeOnEscape)
            })["GalleryWall.useEffect"];
        }
    }["GalleryWall.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "moment-wall",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moments"].map((moment, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "moment-image",
                        type: "button",
                        onClick: ()=>setSelected(index),
                        "aria-label": `Open ${moment.alt}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: moment.src,
                            alt: moment.alt,
                            fill: true,
                            sizes: "(max-width: 700px) 50vw, 33vw"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/GalleryWall.tsx",
                            lineNumber: 16,
                            columnNumber: 199
                        }, this)
                    }, moment.src, false, {
                        fileName: "[project]/components/sections/GalleryWall.tsx",
                        lineNumber: 16,
                        columnNumber: 66
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/GalleryWall.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, this),
            selected !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lightbox",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Expanded gallery image",
                onClick: ()=>setSelected(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lightbox-close",
                        type: "button",
                        onClick: ()=>setSelected(null),
                        children: "CLOSE ×"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/GalleryWall.tsx",
                        lineNumber: 17,
                        columnNumber: 154
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lightbox-image",
                        onClick: (event)=>event.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moments"][selected].src,
                            alt: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moments"][selected].alt,
                            fill: true,
                            sizes: "90vw",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/components/sections/GalleryWall.tsx",
                            lineNumber: 17,
                            columnNumber: 330
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/GalleryWall.tsx",
                        lineNumber: 17,
                        columnNumber: 253
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/GalleryWall.tsx",
                lineNumber: 17,
                columnNumber: 26
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/GalleryWall.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_s(GalleryWall, "PTPPEvXEN45kGdaEyuL8EhrK8gY=");
_c = GalleryWall;
var _c;
__turbopack_context__.k.register(_c, "GalleryWall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/PeopleShowcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PeopleShowcase",
    ()=>PeopleShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/home.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PhotoSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PhotoSlot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SectionHeading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PeopleShowcase() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeMember = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamMembers"][activeIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "people",
        className: "people section-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
                number: "03",
                title: "THE PEOPLE",
                description: "The minds and hearts behind the movement."
            }, void 0, false, {
                fileName: "[project]/components/sections/PeopleShowcase.tsx",
                lineNumber: 10,
                columnNumber: 63
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "people-stage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "people-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-number",
                                children: String(activeIndex + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/components/sections/PeopleShowcase.tsx",
                                lineNumber: 10,
                                columnNumber: 227
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: activeMember.name
                            }, void 0, false, {
                                fileName: "[project]/components/sections/PeopleShowcase.tsx",
                                lineNumber: 10,
                                columnNumber: 303
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: activeMember.role
                            }, void 0, false, {
                                fileName: "[project]/components/sections/PeopleShowcase.tsx",
                                lineNumber: 10,
                                columnNumber: 331
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Building communities, creating opportunities."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/PeopleShowcase.tsx",
                                lineNumber: 10,
                                columnNumber: 377
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "asset-note",
                                children: "Profile bio and social links to be verified."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/PeopleShowcase.tsx",
                                lineNumber: 10,
                                columnNumber: 429
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/PeopleShowcase.tsx",
                        lineNumber: 10,
                        columnNumber: 198
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PhotoSlot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoSlot"], {
                        className: "portrait-slot",
                        label: `${activeMember.name} portrait`,
                        src: activeMember.image
                    }, void 0, false, {
                        fileName: "[project]/components/sections/PeopleShowcase.tsx",
                        lineNumber: 10,
                        columnNumber: 515
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/PeopleShowcase.tsx",
                lineNumber: 10,
                columnNumber: 168
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "member-strip",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$home$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["teamMembers"].map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: index === activeIndex ? "is-active" : "",
                            onClick: ()=>setActiveIndex(index),
                            "aria-pressed": index === activeIndex,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: String(index + 1).padStart(2, "0")
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PeopleShowcase.tsx",
                                    lineNumber: 10,
                                    columnNumber: 862
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: member.name
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PeopleShowcase.tsx",
                                    lineNumber: 10,
                                    columnNumber: 911
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: member.role
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PeopleShowcase.tsx",
                                    lineNumber: 10,
                                    columnNumber: 941
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/PeopleShowcase.tsx",
                            lineNumber: 10,
                            columnNumber: 712
                        }, this)
                    }, member.name, false, {
                        fileName: "[project]/components/sections/PeopleShowcase.tsx",
                        lineNumber: 10,
                        columnNumber: 690
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/PeopleShowcase.tsx",
                lineNumber: 10,
                columnNumber: 625
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/PeopleShowcase.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_s(PeopleShowcase, "rd+5N/MkYjuYD0I+B+MlySxQysU=");
_c = PeopleShowcase;
var _c;
__turbopack_context__.k.register(_c, "PeopleShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PhotoSlot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoSlot",
    ()=>PhotoSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function PhotoSlot({ label, className = "", src }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `photo-slot ${src ? "has-image" : ""} ${className}`,
        role: src ? undefined : "img",
        "aria-label": src ? undefined : `${label}. Approved MSA photography to be added.`,
        children: [
            src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "photo-asset",
                src: src,
                alt: label,
                fill: true,
                sizes: "(max-width: 700px) 100vw, 60vw"
            }, void 0, false, {
                fileName: "[project]/components/ui/PhotoSlot.tsx",
                lineNumber: 6,
                columnNumber: 12
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "photo-slot-copy",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "MSA BIT JAIPUR"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PhotoSlot.tsx",
                        lineNumber: 7,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PhotoSlot.tsx",
                        lineNumber: 7,
                        columnNumber: 65
                    }, this),
                    src ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: "APPROVED PHOTOGRAPHY PENDING"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PhotoSlot.tsx",
                        lineNumber: 7,
                        columnNumber: 103
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/PhotoSlot.tsx",
                lineNumber: 7,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/PhotoSlot.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}
_c = PhotoSlot;
var _c;
__turbopack_context__.k.register(_c, "PhotoSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/SectionHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeading({ number, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "section-number",
                children: number
            }, void 0, false, {
                fileName: "[project]/components/ui/SectionHeading.tsx",
                lineNumber: 2,
                columnNumber: 127
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SectionHeading.tsx",
                        lineNumber: 2,
                        columnNumber: 174
                    }, this),
                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SectionHeading.tsx",
                        lineNumber: 2,
                        columnNumber: 205
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/SectionHeading.tsx",
                lineNumber: 2,
                columnNumber: 169
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/SectionHeading.tsx",
        lineNumber: 2,
        columnNumber: 94
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/home.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moments",
    ()=>moments,
    "partners",
    ()=>partners,
    "projects",
    ()=>projects,
    "publicEvent",
    ()=>publicEvent,
    "teamMembers",
    ()=>teamMembers
]);
const teamMembers = [
    {
        name: "Rudraksh Goyal",
        role: "Lead, MSA BITJ",
        image: "/images/people/rudraksh-goyal.jpg"
    },
    {
        name: "Shreya Mishra",
        role: "Co-Lead, MSA BITJ",
        image: "/images/people/shreya-mishra.jpeg"
    },
    {
        name: "Deep Kabra",
        role: "General Secretary",
        image: "/images/people/deep-kabra.jpg"
    }
];
const publicEvent = {
    name: "SparkFactory Ideathon 2025",
    type: "Innovation & pitching event",
    description: "A one-day space for students to identify real-world problems, shape bold solutions, and pitch them.",
    venue: "BIT Jaipur"
};
const projects = [
    {
        name: "MSA BITJ Website",
        category: "Web Development",
        description: "A centralized platform for MSA BITJ members and attendees to discover events and projects.",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS"
        ]
    }
];
const partners = [
    {
        name: "SI-UK Global",
        image: "/images/partners/si-uk-global.jpg",
        description: "Guiding students and institutions worldwide toward opportunity."
    },
    {
        name: "Global AI",
        image: "/images/partners/global-ai.png",
        description: "AI-powered solutions for businesses and organizations."
    },
    {
        name: "Urban Pizza",
        image: "/images/partners/urban-pizza.jpg",
        description: "Bringing every flavor and every craving in Jaipur together."
    }
];
const moments = Array.from({
    length: 9
}, (_, index)=>({
        alt: `MSA community moment ${String(index + 1).padStart(2, "0")}`,
        src: `/images/moments/${String(index + 1).padStart(2, "0")}.jpg`
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigationItems",
    ()=>navigationItems,
    "registrationFormUrl",
    ()=>registrationFormUrl
]);
const navigationItems = [
    {
        label: "HOME",
        href: "#top"
    },
    {
        label: "EVENTS",
        href: "#events"
    },
    {
        label: "PEOPLE",
        href: "#people"
    },
    {
        label: "PROJECTS",
        href: "#projects"
    },
    {
        label: "PARTNERS",
        href: "#partners"
    }
];
const registrationFormUrl = "";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0quorf6._.js.map