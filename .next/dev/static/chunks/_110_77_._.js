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
            const mm = gsap.matchMedia();
            mm.add({
                isDesktop: "(min-width: 768px)",
                isMobile: "(max-width: 767px)"
            }, {
                "MotionController.useLayoutEffect": (context)=>{
                    const { isMobile } = context.conditions;
                    const yOffset = isMobile ? 24 : 50;
                    const parallaxY = isMobile ? 6 : 12;
                    const insetReveal = isMobile ? "inset(2% 2% 2% 2%)" : "inset(4% 4% 4% 4%)";
                    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
                        gsap.fromTo(".hero h1, .hero p, .hero .button-link", {
                            y: 40,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1.2,
                            stagger: 0.1,
                            ease: "power3.out"
                        });
                        gsap.to(".hero-brand", {
                            yPercent: 50,
                            ease: "none",
                            scrollTrigger: {
                                trigger: ".hero",
                                start: "top top",
                                end: "bottom top",
                                scrub: true
                            }
                        });
                        gsap.utils.toArray(".about-content > div, .project-feature, .partner-list > div, .moment-wall .photo-slot").forEach({
                            "MotionController.useLayoutEffect": (el)=>{
                                gsap.fromTo(el, {
                                    y: 40,
                                    opacity: 0
                                }, {
                                    y: 0,
                                    opacity: 1,
                                    duration: 0.8,
                                    ease: "power2.out",
                                    scrollTrigger: {
                                        trigger: el,
                                        start: "top 85%"
                                    }
                                });
                            }
                        }["MotionController.useLayoutEffect"]);
                        gsap.utils.toArray(".photo-slot-inset").forEach({
                            "MotionController.useLayoutEffect": (el)=>{
                                gsap.fromTo(el, {
                                    clipPath: "inset(100% 0 0 0)"
                                }, {
                                    clipPath: "inset(0% 0 0 0)",
                                    duration: 1,
                                    ease: "power3.out",
                                    scrollTrigger: {
                                        trigger: el,
                                        start: "top 80%"
                                    }
                                });
                            }
                        }["MotionController.useLayoutEffect"]);
                        gsap.fromTo(".join-cta > div", {
                            y: 50,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: ".join-cta",
                                start: "top 70%"
                            }
                        });
                    }
                }
            }["MotionController.useLayoutEffect"]);
            return ({
                "MotionController.useLayoutEffect": ()=>mm.revert()
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SiteHeader() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formUrl = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microsoftFormEmbedUrl"].replace("&embed=true", "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "site-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "site-mark",
                href: "#top",
                "aria-label": "MSA BIT Jaipur home",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/brand/msa-logo-transparent.png",
                        alt: "",
                        width: 34,
                        height: 32,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SiteHeader.tsx",
                        lineNumber: 13,
                        columnNumber: 77
                    }, this),
                    "MSA BIT JAIPUR"
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/SiteHeader.tsx",
                lineNumber: 13,
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
                                lineNumber: 18,
                                columnNumber: 15
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/components/navigation/SiteHeader.tsx",
                            lineNumber: 17,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/navigation/SiteHeader.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/navigation/SiteHeader.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "join-link",
                href: formUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    "JOIN US ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SiteHeader.tsx",
                        lineNumber: 23,
                        columnNumber: 95
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/SiteHeader.tsx",
                lineNumber: 23,
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
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: menuOpen ? "×" : "☰"
                    }, void 0, false, {
                        fileName: "[project]/components/navigation/SiteHeader.tsx",
                        lineNumber: 25,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navigation/SiteHeader.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navigation/SiteHeader.tsx",
        lineNumber: 12,
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
"[project]/data/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "microsoftFormEmbedUrl",
    ()=>microsoftFormEmbedUrl,
    "navigationItems",
    ()=>navigationItems
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
        label: "PROJECTS",
        href: "#projects"
    },
    {
        label: "PARTNERS",
        href: "#partners"
    }
];
const microsoftFormEmbedUrl = "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__UVx-MNUN0ROOExIVDRQQUhGVU1NR1dEVERRSzJDSS4u&embed=true";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_110_77_._.js.map