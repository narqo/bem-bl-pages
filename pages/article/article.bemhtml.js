var BEMHTML = (function(exports) {
    var __r8, __r10, __r12, __r14, __r16, __r18, __r20, __r22, __r24, __r26, __r41, __r42, __r43, __r44;
    exports.apply = apply;
    function apply() {
        return $102.call(this);
    }
    function $2() {
        return {
            elem: "source",
            content: this["ctx"]["content"]
        };
        return;
    }
    function $3() {
        var BEM = {}, toString = Object["prototype"]["toString"], SHORT_TAGS = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            wbr: 1
        };
        (function(BEM, undefined) {
            var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
            var buildModPostfix = function(modName, modVal, buffer) {
                buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);
            };
            var buildBlockClass = function(name, modName, modVal, buffer) {
                buffer.push(name);
                modVal && buildModPostfix(modName, modVal, buffer);
            };
            var buildElemClass = function(block, name, modName, modVal, buffer) {
                buildBlockClass(block, undefined, undefined, buffer);
                buffer.push(ELEM_DELIM, name);
                modVal && buildModPostfix(modName, modVal, buffer);
            };
            BEM["INTERNAL"] = {
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function(modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildClass: function(block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == "string") {
                        if (typeof modVal != "string") {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != "undefined") {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != "string") {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    undefined;
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    undefined;
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildModsClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (mods.hasOwnProperty(modName)) {
                                var modVal = mods[modName];
                                res.push(" ");
                                elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                    undefined;
                    return buffer ? res : res.join("");
                },
                buildClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join("");
                }
            };
        })(BEM);
        var buildEscape = function() {
            var ts = {
                '"': "&quot;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, f = function(t) {
                return ts[t] || t;
            };
            return function(r) {
                r = new RegExp(r, "g");
                return function(s) {
                    return ("" + s).replace(r, f);
                };
            };
        }(), ctx = {
            ctx: this,
            _start: true,
            apply: apply,
            _buf: [],
            _: {
                isArray: function(obj) {
                    return toString.call(obj) === "[object Array]";
                },
                isSimple: function(obj) {
                    var t = typeof obj;
                    return t === "string" || t === "number";
                },
                isShortTag: function(t) {
                    return SHORT_TAGS.hasOwnProperty(t);
                },
                extend: function(o1, o2) {
                    if (!o1 || !o2) {
                        return o1 || o2;
                    } else {
                        undefined;
                    }
                    undefined;
                    var res = {}, n;
                    for (n in o1) {
                        o1.hasOwnProperty(n) && (res[n] = o1[n]);
                    }
                    undefined;
                    for (n in o2) {
                        o2.hasOwnProperty(n) && (res[n] = o2[n]);
                    }
                    undefined;
                    return res;
                },
                xmlEscape: buildEscape("[&<>]"),
                attrEscape: buildEscape('["&<>]')
            },
            BEM: BEM,
            isFirst: function() {
                return this["position"] === 1;
            },
            isLast: function() {
                return this["position"] === this["_listLength"];
            }
        };
        ctx.apply();
        return ctx["_buf"].join("");
        return;
    }
    function $4() {
        return this["ctx"]["content"];
        return;
    }
    function $5() {
        if (!!this["_start"] === false) {
            return $3.call(this);
        } else {
            return $4.call(this);
        }
    }
    function $9() {
        return true;
        return;
    }
    function $10() {
        return undefined;
        return;
    }
    function $11() {
        if (!!this["_start"] === false) {
            return $3.call(this);
        } else {
            return $10.call(this);
        }
    }
    function $13() {
        var _this = this, BEM = _this["BEM"], v = this["ctx"], buf = this["_buf"], tag;
        tag = ("", __r8 = this["_mode"], this["_mode"] = "tag", __r9 = $102.call(this), this["_mode"] = __r8, "", __r9);
        typeof tag != "undefined" || (tag = v["tag"]);
        typeof tag != "undefined" || (tag = "div");
        if (tag) {
            var jsParams, js;
            if (this["block"] && v["js"] !== false) {
                js = ("", __r12 = this["_mode"], this["_mode"] = "js", __r13 = $102.call(this), this["_mode"] = __r12, "", __r13);
                js = js ? this["_"].extend(v["js"], js === true ? {} : js) : v["js"] === true ? {} : v["js"];
                js && ((jsParams = {})[BEM["INTERNAL"].buildClass(this["block"], v["elem"])] = js);
            } else {
                undefined;
            }
            undefined;
            buf.push("<", tag);
            var isBEM = ("", __r14 = this["_mode"], this["_mode"] = "bem", __r15 = $102.call(this), this["_mode"] = __r14, "", __r15);
            typeof isBEM != "undefined" || (isBEM = typeof v["bem"] != "undefined" ? v["bem"] : v["block"] || v["elem"]);
            var cls = ("", __r16 = this["_mode"], this["_mode"] = "cls", __r17 = $102.call(this), this["_mode"] = __r16, "", __r17);
            cls || (cls = v["cls"]);
            var addJSInitClass = v["block"] && jsParams;
            if (isBEM || cls) {
                buf.push(' class="');
                if (isBEM) {
                    BEM["INTERNAL"].buildClasses(this["block"], v["elem"], v["elemMods"] || v["mods"], buf);
                    var mix = ("", __r18 = this["_mode"], this["_mode"] = "mix", __r19 = $102.call(this), this["_mode"] = __r18, "", __r19);
                    v["mix"] && (mix = mix ? mix.concat(v["mix"]) : v["mix"]);
                    if (mix) {
                        var i = 0, l = mix["length"], mixItem, hasItem, block;
                        while (i < l) {
                            mixItem = mix[i++];
                            hasItem = mixItem["block"] || mixItem["elem"], block = mixItem["block"] || _this["block"];
                            hasItem && buf.push(" ");
                            BEM["INTERNAL"][hasItem ? "buildClasses" : "buildModsClasses"](block, mixItem["elem"] || (mixItem["block"] ? undefined : _this["elem"]), mixItem["elemMods"] || mixItem["mods"], buf);
                            if (mixItem["js"]) {
                                (jsParams || (jsParams = {}))[BEM["INTERNAL"].buildClass(block, mixItem["elem"])] = mixItem["js"] === true ? {} : mixItem["js"];
                                addJSInitClass || (addJSInitClass = block && !mixItem["elem"]);
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                undefined;
                cls && buf.push(isBEM ? " " : "", cls);
                addJSInitClass && buf.push(" i-bem");
                buf.push('"');
            } else {
                undefined;
            }
            undefined;
            if (jsParams) {
                var jsAttr = ("", __r22 = this["_mode"], this["_mode"] = "jsAttr", __r23 = $102.call(this), this["_mode"] = __r22, "", __r23);
                buf.push(" ", jsAttr || "onclick", '="return ', this["_"].attrEscape(JSON.stringify(jsParams)), '"');
            } else {
                undefined;
            }
            undefined;
            var attrs = ("", __r24 = this["_mode"], this["_mode"] = "attrs", __r25 = $102.call(this), this["_mode"] = __r24, "", __r25);
            attrs = this["_"].extend(attrs, v["attrs"]);
            if (attrs) {
                var name;
                for (name in attrs) {
                    buf.push(" ", name, '="', this["_"].attrEscape(attrs[name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (this["_"].isShortTag(tag)) {
            buf.push("/>");
        } else {
            tag && buf.push(">");
            var content = ("", __r26 = this["_mode"], this["_mode"] = "content", __r27 = $102.call(this), this["_mode"] = __r26, "", __r27);
            if (content || content === 0) {
                var isBEM = this["block"] || this["elem"];
                {
                    "";
                    var __r28 = this["_notNewList"];
                    this["_notNewList"] = false;
                    var __r29 = this["position"];
                    this["position"] = isBEM ? 1 : this["position"];
                    var __r30 = this["_listLength"];
                    this["_listLength"] = isBEM ? 1 : this["_listLength"];
                    var __r31 = this["ctx"];
                    this["ctx"] = content;
                    var __r32 = this["_mode"];
                    this["_mode"] = "";
                    $102.call(this);
                    this["_notNewList"] = __r28;
                    this["position"] = __r29;
                    this["_listLength"] = __r30;
                    this["ctx"] = __r31;
                    this["_mode"] = __r32;
                    "";
                }
                undefined;
                undefined;
                undefined;
            } else {
                undefined;
            }
            undefined;
            tag && buf.push("</", tag, ">");
        }
        return;
    }
    function $14() {
        if (!!this["_start"] === false) {
            return $3.call(this);
        } else {
            return $13.call(this);
        }
    }
    function $24() {
        var __this = this;
        if (!!this["_mode"] === false) {
            if (!this["_"].isSimple(this["ctx"]) === false) {
                this["_listLength"]--;
                this["_buf"].push(this["ctx"]);
                return;
            } else {
                if (!!this["ctx"] === false) {
                    this["_listLength"]--;
                    return;
                } else {
                    if (!this["_"].isArray(this["ctx"]) === false) {
                        var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                        if (prevNotNewList) {
                            this["_listLength"] += l - 1;
                        } else {
                            this["position"] = 0;
                            this["_listLength"] = l;
                        }
                        this["_notNewList"] = true;
                        while (i < l) {
                            {
                                "";
                                var __r7 = this["ctx"];
                                this["ctx"] = v[i++];
                                apply.call(__this);
                                this["ctx"] = __r7;
                                "";
                            }
                            undefined;
                        }
                        undefined;
                        prevNotNewList || (this["position"] = prevPos);
                        return;
                    } else {
                        if (!true === false) {
                            var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                            "";
                            var __r0 = this["_mode"];
                            this["_mode"] = "default";
                            var __r1 = this["block"];
                            this["block"] = vBlock || (vElem ? block : undefined);
                            var __r2 = this["_currBlock"];
                            this["_currBlock"] = vBlock || vElem ? undefined : block;
                            var __r3 = this["elem"];
                            this["elem"] = this["ctx"]["elem"];
                            var __r4 = this["mods"];
                            this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                            var __r5 = this["elemMods"];
                            this["elemMods"] = this["ctx"]["elemMods"] || {};
                            this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                            $102.call(this);
                            undefined;
                            undefined;
                            this["_mode"] = __r0;
                            this["block"] = __r1;
                            this["_currBlock"] = __r2;
                            this["elem"] = __r3;
                            this["mods"] = __r4;
                            this["elemMods"] = __r5;
                            "";
                            undefined;
                            return;
                        } else {
                            return $e.call(this);
                        }
                    }
                }
            }
        } else {
            return $e.call(this, []);
        }
    }
    function $25() {
        if (!!this["_start"] === false) {
            return $3.call(this);
        } else {
            return $24.call(this);
        }
    }
    function $30() {
        var __this = this;
        if (!!this["_start"] === false) {
            return $3.call(this);
        } else {
            var __t = this["_mode"];
            if (__t === "content") {
                return this["ctx"]["content"];
                return;
            } else if (__t === "tag") {
                return undefined;
                return;
            } else if (__t === "js") {
                return undefined;
                return;
            } else if (__t === "attrs") {
                return undefined;
                return;
            } else if (__t === "mix") {
                return undefined;
                return;
            } else if (__t === "bem") {
                return undefined;
                return;
            } else if (__t === "default") {
                return $13.call(this);
            } else if (__t === "jsAttr") {
                return undefined;
                return;
            } else if (__t === "cls") {
                return undefined;
                return;
            } else {
                if (!!this["_mode"] === false) {
                    if (!this["_"].isSimple(this["ctx"]) === false) {
                        this["_listLength"]--;
                        this["_buf"].push(this["ctx"]);
                        return;
                    } else {
                        if (!!this["ctx"] === false) {
                            this["_listLength"]--;
                            return;
                        } else {
                            if (!this["_"].isArray(this["ctx"]) === false) {
                                var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                if (prevNotNewList) {
                                    this["_listLength"] += l - 1;
                                } else {
                                    this["position"] = 0;
                                    this["_listLength"] = l;
                                }
                                this["_notNewList"] = true;
                                while (i < l) {
                                    {
                                        "";
                                        var __r7 = this["ctx"];
                                        this["ctx"] = v[i++];
                                        apply.call(__this);
                                        this["ctx"] = __r7;
                                        "";
                                    }
                                    undefined;
                                }
                                undefined;
                                prevNotNewList || (this["position"] = prevPos);
                                return;
                            } else {
                                if (!true === false) {
                                    var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                    "";
                                    var __r0 = this["_mode"];
                                    this["_mode"] = "default";
                                    var __r1 = this["block"];
                                    this["block"] = vBlock || (vElem ? block : undefined);
                                    var __r2 = this["_currBlock"];
                                    this["_currBlock"] = vBlock || vElem ? undefined : block;
                                    var __r3 = this["elem"];
                                    this["elem"] = this["ctx"]["elem"];
                                    var __r4 = this["mods"];
                                    this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                    var __r5 = this["elemMods"];
                                    this["elemMods"] = this["ctx"]["elemMods"] || {};
                                    this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                    $102.call(this);
                                    undefined;
                                    undefined;
                                    this["_mode"] = __r0;
                                    this["block"] = __r1;
                                    this["_currBlock"] = __r2;
                                    this["elem"] = __r3;
                                    this["mods"] = __r4;
                                    this["elemMods"] = __r5;
                                    "";
                                    undefined;
                                    return;
                                } else {
                                    return $e.call(this, []);
                                }
                            }
                        }
                    }
                } else {
                    return $e.call(this, []);
                }
            }
        }
    }
    function $31() {
        var __this = this;
        if (!!this["elem"] === false) {
            var __t = this["_mode"];
            if (__t === "content") {
                return {
                    elem: "source",
                    content: this["ctx"]["content"]
                };
                return;
            } else if (__t === "tag") {
                return "pre";
                return;
            } else if (__t === "js") {
                return true;
                return;
            } else if (__t === "attrs") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "mix") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "bem") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "default") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return $13.call(this);
                }
            } else if (__t === "jsAttr") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "cls") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    if (!!this["_mode"] === false) {
                        if (!this["_"].isSimple(this["ctx"]) === false) {
                            this["_listLength"]--;
                            this["_buf"].push(this["ctx"]);
                            return;
                        } else {
                            if (!!this["ctx"] === false) {
                                this["_listLength"]--;
                                return;
                            } else {
                                if (!this["_"].isArray(this["ctx"]) === false) {
                                    var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                    if (prevNotNewList) {
                                        this["_listLength"] += l - 1;
                                    } else {
                                        this["position"] = 0;
                                        this["_listLength"] = l;
                                    }
                                    this["_notNewList"] = true;
                                    while (i < l) {
                                        {
                                            "";
                                            var __r7 = this["ctx"];
                                            this["ctx"] = v[i++];
                                            apply.call(__this);
                                            this["ctx"] = __r7;
                                            "";
                                        }
                                        undefined;
                                    }
                                    undefined;
                                    prevNotNewList || (this["position"] = prevPos);
                                    return;
                                } else {
                                    if (!true === false) {
                                        var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                        "";
                                        var __r0 = this["_mode"];
                                        this["_mode"] = "default";
                                        var __r1 = this["block"];
                                        this["block"] = vBlock || (vElem ? block : undefined);
                                        var __r2 = this["_currBlock"];
                                        this["_currBlock"] = vBlock || vElem ? undefined : block;
                                        var __r3 = this["elem"];
                                        this["elem"] = this["ctx"]["elem"];
                                        var __r4 = this["mods"];
                                        this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                        var __r5 = this["elemMods"];
                                        this["elemMods"] = this["ctx"]["elemMods"] || {};
                                        this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                        $102.call(this);
                                        undefined;
                                        undefined;
                                        this["_mode"] = __r0;
                                        this["block"] = __r1;
                                        this["_currBlock"] = __r2;
                                        this["elem"] = __r3;
                                        this["mods"] = __r4;
                                        this["elemMods"] = __r5;
                                        "";
                                        undefined;
                                        return;
                                    } else {
                                        return $e.call(this, []);
                                    }
                                }
                            }
                        }
                    } else {
                        return $e.call(this, []);
                    }
                }
            }
        } else {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                var __t = this["_mode"];
                if (__t === "content") {
                    return this["ctx"]["content"];
                    return;
                } else if (__t === "tag") {
                    return undefined;
                    return;
                } else if (__t === "js") {
                    return undefined;
                    return;
                } else if (__t === "attrs") {
                    return undefined;
                    return;
                } else if (__t === "mix") {
                    return undefined;
                    return;
                } else if (__t === "bem") {
                    return undefined;
                    return;
                } else if (__t === "default") {
                    return $13.call(this);
                } else if (__t === "jsAttr") {
                    return undefined;
                    return;
                } else if (__t === "cls") {
                    return undefined;
                    return;
                } else {
                    if (!!this["_mode"] === false) {
                        if (!this["_"].isSimple(this["ctx"]) === false) {
                            this["_listLength"]--;
                            this["_buf"].push(this["ctx"]);
                            return;
                        } else {
                            if (!!this["ctx"] === false) {
                                this["_listLength"]--;
                                return;
                            } else {
                                if (!this["_"].isArray(this["ctx"]) === false) {
                                    var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                    if (prevNotNewList) {
                                        this["_listLength"] += l - 1;
                                    } else {
                                        this["position"] = 0;
                                        this["_listLength"] = l;
                                    }
                                    this["_notNewList"] = true;
                                    while (i < l) {
                                        {
                                            "";
                                            var __r7 = this["ctx"];
                                            this["ctx"] = v[i++];
                                            apply.call(__this);
                                            this["ctx"] = __r7;
                                            "";
                                        }
                                        undefined;
                                    }
                                    undefined;
                                    prevNotNewList || (this["position"] = prevPos);
                                    return;
                                } else {
                                    if (!true === false) {
                                        var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                        "";
                                        var __r0 = this["_mode"];
                                        this["_mode"] = "default";
                                        var __r1 = this["block"];
                                        this["block"] = vBlock || (vElem ? block : undefined);
                                        var __r2 = this["_currBlock"];
                                        this["_currBlock"] = vBlock || vElem ? undefined : block;
                                        var __r3 = this["elem"];
                                        this["elem"] = this["ctx"]["elem"];
                                        var __r4 = this["mods"];
                                        this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                        var __r5 = this["elemMods"];
                                        this["elemMods"] = this["ctx"]["elemMods"] || {};
                                        this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                        $102.call(this);
                                        undefined;
                                        undefined;
                                        this["_mode"] = __r0;
                                        this["block"] = __r1;
                                        this["_currBlock"] = __r2;
                                        this["elem"] = __r3;
                                        this["mods"] = __r4;
                                        this["elemMods"] = __r5;
                                        "";
                                        undefined;
                                        return;
                                    } else {
                                        return $e.call(this, []);
                                    }
                                }
                            }
                        }
                    } else {
                        return $e.call(this, []);
                    }
                }
            }
        }
    }
    function $35() {
        var __this = this;
        if (!!this["elem"] === false) {
            var __t = this["_mode"];
            if (__t === "content") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return this["ctx"]["content"];
                    return;
                }
            } else if (__t === "tag") {
                return "ul";
                return;
            } else if (__t === "js") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "attrs") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "mix") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "bem") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "default") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return $13.call(this);
                }
            } else if (__t === "jsAttr") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "cls") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    if (!!this["_mode"] === false) {
                        if (!this["_"].isSimple(this["ctx"]) === false) {
                            this["_listLength"]--;
                            this["_buf"].push(this["ctx"]);
                            return;
                        } else {
                            if (!!this["ctx"] === false) {
                                this["_listLength"]--;
                                return;
                            } else {
                                if (!this["_"].isArray(this["ctx"]) === false) {
                                    var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                    if (prevNotNewList) {
                                        this["_listLength"] += l - 1;
                                    } else {
                                        this["position"] = 0;
                                        this["_listLength"] = l;
                                    }
                                    this["_notNewList"] = true;
                                    while (i < l) {
                                        {
                                            "";
                                            var __r7 = this["ctx"];
                                            this["ctx"] = v[i++];
                                            apply.call(__this);
                                            this["ctx"] = __r7;
                                            "";
                                        }
                                        undefined;
                                    }
                                    undefined;
                                    prevNotNewList || (this["position"] = prevPos);
                                    return;
                                } else {
                                    if (!true === false) {
                                        var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                        "";
                                        var __r0 = this["_mode"];
                                        this["_mode"] = "default";
                                        var __r1 = this["block"];
                                        this["block"] = vBlock || (vElem ? block : undefined);
                                        var __r2 = this["_currBlock"];
                                        this["_currBlock"] = vBlock || vElem ? undefined : block;
                                        var __r3 = this["elem"];
                                        this["elem"] = this["ctx"]["elem"];
                                        var __r4 = this["mods"];
                                        this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                        var __r5 = this["elemMods"];
                                        this["elemMods"] = this["ctx"]["elemMods"] || {};
                                        this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                        $102.call(this);
                                        undefined;
                                        undefined;
                                        this["_mode"] = __r0;
                                        this["block"] = __r1;
                                        this["_currBlock"] = __r2;
                                        this["elem"] = __r3;
                                        this["mods"] = __r4;
                                        this["elemMods"] = __r5;
                                        "";
                                        undefined;
                                        return;
                                    } else {
                                        return $e.call(this, []);
                                    }
                                }
                            }
                        }
                    } else {
                        return $e.call(this, []);
                    }
                }
            }
        } else {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                var __t = this["_mode"];
                if (__t === "content") {
                    return this["ctx"]["content"];
                    return;
                } else if (__t === "tag") {
                    return undefined;
                    return;
                } else if (__t === "js") {
                    return undefined;
                    return;
                } else if (__t === "attrs") {
                    return undefined;
                    return;
                } else if (__t === "mix") {
                    return undefined;
                    return;
                } else if (__t === "bem") {
                    return undefined;
                    return;
                } else if (__t === "default") {
                    return $13.call(this);
                } else if (__t === "jsAttr") {
                    return undefined;
                    return;
                } else if (__t === "cls") {
                    return undefined;
                    return;
                } else {
                    if (!!this["_mode"] === false) {
                        if (!this["_"].isSimple(this["ctx"]) === false) {
                            this["_listLength"]--;
                            this["_buf"].push(this["ctx"]);
                            return;
                        } else {
                            if (!!this["ctx"] === false) {
                                this["_listLength"]--;
                                return;
                            } else {
                                if (!this["_"].isArray(this["ctx"]) === false) {
                                    var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                    if (prevNotNewList) {
                                        this["_listLength"] += l - 1;
                                    } else {
                                        this["position"] = 0;
                                        this["_listLength"] = l;
                                    }
                                    this["_notNewList"] = true;
                                    while (i < l) {
                                        {
                                            "";
                                            var __r7 = this["ctx"];
                                            this["ctx"] = v[i++];
                                            apply.call(__this);
                                            this["ctx"] = __r7;
                                            "";
                                        }
                                        undefined;
                                    }
                                    undefined;
                                    prevNotNewList || (this["position"] = prevPos);
                                    return;
                                } else {
                                    if (!true === false) {
                                        var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                        "";
                                        var __r0 = this["_mode"];
                                        this["_mode"] = "default";
                                        var __r1 = this["block"];
                                        this["block"] = vBlock || (vElem ? block : undefined);
                                        var __r2 = this["_currBlock"];
                                        this["_currBlock"] = vBlock || vElem ? undefined : block;
                                        var __r3 = this["elem"];
                                        this["elem"] = this["ctx"]["elem"];
                                        var __r4 = this["mods"];
                                        this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                        var __r5 = this["elemMods"];
                                        this["elemMods"] = this["ctx"]["elemMods"] || {};
                                        this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                        $102.call(this);
                                        undefined;
                                        undefined;
                                        this["_mode"] = __r0;
                                        this["block"] = __r1;
                                        this["_currBlock"] = __r2;
                                        this["elem"] = __r3;
                                        this["mods"] = __r4;
                                        this["elemMods"] = __r5;
                                        "";
                                        undefined;
                                        return;
                                    } else {
                                        return $e.call(this, []);
                                    }
                                }
                            }
                        }
                    } else {
                        return $e.call(this, []);
                    }
                }
            }
        }
    }
    function $37() {
        var __this = this;
        var __t = this["_mode"];
        if (__t === "content") {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return this["ctx"]["content"];
                return;
            }
        } else if (__t === "tag") {
            return "li";
            return;
        } else if (__t === "js") {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return undefined;
                return;
            }
        } else if (__t === "attrs") {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return undefined;
                return;
            }
        } else if (__t === "mix") {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return undefined;
                return;
            }
        } else if (__t === "bem") {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return undefined;
                return;
            }
        } else if (__t === "default") {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return $13.call(this);
            }
        } else if (__t === "jsAttr") {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return undefined;
                return;
            }
        } else if (__t === "cls") {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return undefined;
                return;
            }
        } else {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                if (!!this["_mode"] === false) {
                    if (!this["_"].isSimple(this["ctx"]) === false) {
                        this["_listLength"]--;
                        this["_buf"].push(this["ctx"]);
                        return;
                    } else {
                        if (!!this["ctx"] === false) {
                            this["_listLength"]--;
                            return;
                        } else {
                            if (!this["_"].isArray(this["ctx"]) === false) {
                                var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                if (prevNotNewList) {
                                    this["_listLength"] += l - 1;
                                } else {
                                    this["position"] = 0;
                                    this["_listLength"] = l;
                                }
                                this["_notNewList"] = true;
                                while (i < l) {
                                    {
                                        "";
                                        var __r7 = this["ctx"];
                                        this["ctx"] = v[i++];
                                        apply.call(__this);
                                        this["ctx"] = __r7;
                                        "";
                                    }
                                    undefined;
                                }
                                undefined;
                                prevNotNewList || (this["position"] = prevPos);
                                return;
                            } else {
                                if (!true === false) {
                                    var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                    "";
                                    var __r0 = this["_mode"];
                                    this["_mode"] = "default";
                                    var __r1 = this["block"];
                                    this["block"] = vBlock || (vElem ? block : undefined);
                                    var __r2 = this["_currBlock"];
                                    this["_currBlock"] = vBlock || vElem ? undefined : block;
                                    var __r3 = this["elem"];
                                    this["elem"] = this["ctx"]["elem"];
                                    var __r4 = this["mods"];
                                    this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                    var __r5 = this["elemMods"];
                                    this["elemMods"] = this["ctx"]["elemMods"] || {};
                                    this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                    $102.call(this);
                                    undefined;
                                    undefined;
                                    this["_mode"] = __r0;
                                    this["block"] = __r1;
                                    this["_currBlock"] = __r2;
                                    this["elem"] = __r3;
                                    this["mods"] = __r4;
                                    this["elemMods"] = __r5;
                                    "";
                                    undefined;
                                    return;
                                } else {
                                    return $e.call(this, []);
                                }
                            }
                        }
                    }
                } else {
                    return $e.call(this, []);
                }
            }
        }
    }
    function $39() {
        return "a";
        return;
    }
    function $55() {
        var __this = this;
        if (!!this["elem"] === false) {
            var __t = this["_mode"];
            if (__t === "content") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return this["ctx"]["content"];
                    return;
                }
            } else if (__t === "tag") {
                return "ol";
                return;
            } else if (__t === "js") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "attrs") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "mix") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "bem") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "default") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return $13.call(this);
                }
            } else if (__t === "jsAttr") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "cls") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    if (!!this["_mode"] === false) {
                        if (!this["_"].isSimple(this["ctx"]) === false) {
                            this["_listLength"]--;
                            this["_buf"].push(this["ctx"]);
                            return;
                        } else {
                            if (!!this["ctx"] === false) {
                                this["_listLength"]--;
                                return;
                            } else {
                                if (!this["_"].isArray(this["ctx"]) === false) {
                                    var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                    if (prevNotNewList) {
                                        this["_listLength"] += l - 1;
                                    } else {
                                        this["position"] = 0;
                                        this["_listLength"] = l;
                                    }
                                    this["_notNewList"] = true;
                                    while (i < l) {
                                        {
                                            "";
                                            var __r7 = this["ctx"];
                                            this["ctx"] = v[i++];
                                            apply.call(__this);
                                            this["ctx"] = __r7;
                                            "";
                                        }
                                        undefined;
                                    }
                                    undefined;
                                    prevNotNewList || (this["position"] = prevPos);
                                    return;
                                } else {
                                    if (!true === false) {
                                        var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                        "";
                                        var __r0 = this["_mode"];
                                        this["_mode"] = "default";
                                        var __r1 = this["block"];
                                        this["block"] = vBlock || (vElem ? block : undefined);
                                        var __r2 = this["_currBlock"];
                                        this["_currBlock"] = vBlock || vElem ? undefined : block;
                                        var __r3 = this["elem"];
                                        this["elem"] = this["ctx"]["elem"];
                                        var __r4 = this["mods"];
                                        this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                        var __r5 = this["elemMods"];
                                        this["elemMods"] = this["ctx"]["elemMods"] || {};
                                        this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                        $102.call(this);
                                        undefined;
                                        undefined;
                                        this["_mode"] = __r0;
                                        this["block"] = __r1;
                                        this["_currBlock"] = __r2;
                                        this["elem"] = __r3;
                                        this["mods"] = __r4;
                                        this["elemMods"] = __r5;
                                        "";
                                        undefined;
                                        return;
                                    } else {
                                        return $e.call(this, []);
                                    }
                                }
                            }
                        }
                    } else {
                        return $e.call(this, []);
                    }
                }
            }
        } else {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                var __t = this["_mode"];
                if (__t === "content") {
                    return this["ctx"]["content"];
                    return;
                } else if (__t === "tag") {
                    return undefined;
                    return;
                } else if (__t === "js") {
                    return undefined;
                    return;
                } else if (__t === "attrs") {
                    return undefined;
                    return;
                } else if (__t === "mix") {
                    return undefined;
                    return;
                } else if (__t === "bem") {
                    return undefined;
                    return;
                } else if (__t === "default") {
                    return $13.call(this);
                } else if (__t === "jsAttr") {
                    return undefined;
                    return;
                } else if (__t === "cls") {
                    return undefined;
                    return;
                } else {
                    if (!!this["_mode"] === false) {
                        if (!this["_"].isSimple(this["ctx"]) === false) {
                            this["_listLength"]--;
                            this["_buf"].push(this["ctx"]);
                            return;
                        } else {
                            if (!!this["ctx"] === false) {
                                this["_listLength"]--;
                                return;
                            } else {
                                if (!this["_"].isArray(this["ctx"]) === false) {
                                    var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                    if (prevNotNewList) {
                                        this["_listLength"] += l - 1;
                                    } else {
                                        this["position"] = 0;
                                        this["_listLength"] = l;
                                    }
                                    this["_notNewList"] = true;
                                    while (i < l) {
                                        {
                                            "";
                                            var __r7 = this["ctx"];
                                            this["ctx"] = v[i++];
                                            apply.call(__this);
                                            this["ctx"] = __r7;
                                            "";
                                        }
                                        undefined;
                                    }
                                    undefined;
                                    prevNotNewList || (this["position"] = prevPos);
                                    return;
                                } else {
                                    if (!true === false) {
                                        var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                        "";
                                        var __r0 = this["_mode"];
                                        this["_mode"] = "default";
                                        var __r1 = this["block"];
                                        this["block"] = vBlock || (vElem ? block : undefined);
                                        var __r2 = this["_currBlock"];
                                        this["_currBlock"] = vBlock || vElem ? undefined : block;
                                        var __r3 = this["elem"];
                                        this["elem"] = this["ctx"]["elem"];
                                        var __r4 = this["mods"];
                                        this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                        var __r5 = this["elemMods"];
                                        this["elemMods"] = this["ctx"]["elemMods"] || {};
                                        this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                        $102.call(this);
                                        undefined;
                                        undefined;
                                        this["_mode"] = __r0;
                                        this["block"] = __r1;
                                        this["_currBlock"] = __r2;
                                        this["elem"] = __r3;
                                        this["mods"] = __r4;
                                        this["elemMods"] = __r5;
                                        "";
                                        undefined;
                                        return;
                                    } else {
                                        return $e.call(this, []);
                                    }
                                }
                            }
                        }
                    } else {
                        return $e.call(this, []);
                    }
                }
            }
        }
    }
    function $57() {
        return "h" + this["mods"]["level"];
        return;
    }
    function $58() {
        return "h1";
        return;
    }
    function $68() {
        this["_buf"].push("<!DOCTYPE html>");
        "";
        var __r35 = this["_mode"];
        this["_mode"] = "";
        var __r36 = this["ctx"];
        this["ctx"] = {
            tag: "html",
            attrs: {
                "class": "i-ua_js_no i-ua_css_standard"
            },
            content: [ {
                elem: "head",
                content: [ {
                    tag: "meta",
                    attrs: {
                        charset: "utf-8"
                    }
                }, {
                    tag: "meta",
                    attrs: {
                        "http-equiv": "X-UA-Compatible",
                        content: "IE=EmulateIE7, IE=edge"
                    }
                }, {
                    tag: "title",
                    content: this["ctx"]["title"]
                }, this["ctx"]["favicon"] ? {
                    elem: "favicon",
                    url: this["ctx"]["favicon"]
                } : "", this["ctx"]["meta"], {
                    block: "i-ua"
                }, this["ctx"]["head"] ]
            }, {
                elem: "body",
                mix: [ this["ctx"] ],
                content: [ this["ctx"]["content"] ]
            } ]
        };
        this.apply();
        this["_mode"] = __r35;
        this["ctx"] = __r36;
        "";
        return;
    }
    function $70() {
        var __this = this;
        if (!!this["elem"] === false) {
            var __t = this["_mode"];
            if (__t === "content") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return this["ctx"]["content"];
                    return;
                }
            } else if (__t === "tag") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "js") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "attrs") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "mix") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "bem") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "default") {
                return $68.call(this);
            } else if (__t === "jsAttr") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else if (__t === "cls") {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return undefined;
                    return;
                }
            } else {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    if (!!this["_mode"] === false) {
                        if (!this["_"].isSimple(this["ctx"]) === false) {
                            this["_listLength"]--;
                            this["_buf"].push(this["ctx"]);
                            return;
                        } else {
                            if (!!this["ctx"] === false) {
                                this["_listLength"]--;
                                return;
                            } else {
                                if (!this["_"].isArray(this["ctx"]) === false) {
                                    var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                    if (prevNotNewList) {
                                        this["_listLength"] += l - 1;
                                    } else {
                                        this["position"] = 0;
                                        this["_listLength"] = l;
                                    }
                                    this["_notNewList"] = true;
                                    while (i < l) {
                                        {
                                            "";
                                            var __r7 = this["ctx"];
                                            this["ctx"] = v[i++];
                                            apply.call(__this);
                                            this["ctx"] = __r7;
                                            "";
                                        }
                                        undefined;
                                    }
                                    undefined;
                                    prevNotNewList || (this["position"] = prevPos);
                                    return;
                                } else {
                                    if (!true === false) {
                                        var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                        "";
                                        var __r0 = this["_mode"];
                                        this["_mode"] = "default";
                                        var __r1 = this["block"];
                                        this["block"] = vBlock || (vElem ? block : undefined);
                                        var __r2 = this["_currBlock"];
                                        this["_currBlock"] = vBlock || vElem ? undefined : block;
                                        var __r3 = this["elem"];
                                        this["elem"] = this["ctx"]["elem"];
                                        var __r4 = this["mods"];
                                        this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                        var __r5 = this["elemMods"];
                                        this["elemMods"] = this["ctx"]["elemMods"] || {};
                                        this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                        $102.call(this);
                                        undefined;
                                        undefined;
                                        this["_mode"] = __r0;
                                        this["block"] = __r1;
                                        this["_currBlock"] = __r2;
                                        this["elem"] = __r3;
                                        this["mods"] = __r4;
                                        this["elemMods"] = __r5;
                                        "";
                                        undefined;
                                        return;
                                    } else {
                                        return $e.call(this, []);
                                    }
                                }
                            }
                        }
                    } else {
                        return $e.call(this, []);
                    }
                }
            }
        } else {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                var __t = this["_mode"];
                if (__t === "content") {
                    return this["ctx"]["content"];
                    return;
                } else if (__t === "tag") {
                    return undefined;
                    return;
                } else if (__t === "js") {
                    return undefined;
                    return;
                } else if (__t === "attrs") {
                    return undefined;
                    return;
                } else if (__t === "mix") {
                    return undefined;
                    return;
                } else if (__t === "bem") {
                    return undefined;
                    return;
                } else if (__t === "default") {
                    return $13.call(this);
                } else if (__t === "jsAttr") {
                    return undefined;
                    return;
                } else if (__t === "cls") {
                    return undefined;
                    return;
                } else {
                    if (!!this["_mode"] === false) {
                        if (!this["_"].isSimple(this["ctx"]) === false) {
                            this["_listLength"]--;
                            this["_buf"].push(this["ctx"]);
                            return;
                        } else {
                            if (!!this["ctx"] === false) {
                                this["_listLength"]--;
                                return;
                            } else {
                                if (!this["_"].isArray(this["ctx"]) === false) {
                                    var v = this["ctx"], l = v["length"], i = 0, prevPos = this["position"], prevNotNewList = this["_notNewList"];
                                    if (prevNotNewList) {
                                        this["_listLength"] += l - 1;
                                    } else {
                                        this["position"] = 0;
                                        this["_listLength"] = l;
                                    }
                                    this["_notNewList"] = true;
                                    while (i < l) {
                                        {
                                            "";
                                            var __r7 = this["ctx"];
                                            this["ctx"] = v[i++];
                                            apply.call(__this);
                                            this["ctx"] = __r7;
                                            "";
                                        }
                                        undefined;
                                    }
                                    undefined;
                                    prevNotNewList || (this["position"] = prevPos);
                                    return;
                                } else {
                                    if (!true === false) {
                                        var vBlock = this["ctx"]["block"], vElem = this["ctx"]["elem"], block = this["_currBlock"] || this["block"];
                                        "";
                                        var __r0 = this["_mode"];
                                        this["_mode"] = "default";
                                        var __r1 = this["block"];
                                        this["block"] = vBlock || (vElem ? block : undefined);
                                        var __r2 = this["_currBlock"];
                                        this["_currBlock"] = vBlock || vElem ? undefined : block;
                                        var __r3 = this["elem"];
                                        this["elem"] = this["ctx"]["elem"];
                                        var __r4 = this["mods"];
                                        this["mods"] = (vBlock ? this["ctx"]["mods"] : this["mods"]) || {};
                                        var __r5 = this["elemMods"];
                                        this["elemMods"] = this["ctx"]["elemMods"] || {};
                                        this["block"] || this["elem"] ? this["position"] = (this["position"] || 0) + 1 : this["_listLength"]--;
                                        $102.call(this);
                                        undefined;
                                        undefined;
                                        this["_mode"] = __r0;
                                        this["block"] = __r1;
                                        this["_currBlock"] = __r2;
                                        this["elem"] = __r3;
                                        this["mods"] = __r4;
                                        this["elemMods"] = __r5;
                                        "";
                                        undefined;
                                        return;
                                    } else {
                                        return $e.call(this, []);
                                    }
                                }
                            }
                        }
                    } else {
                        return $e.call(this, []);
                    }
                }
            }
        }
    }
    function $71() {
        return "link";
        return;
    }
    function $73() {
        return false;
        return;
    }
    function $74() {
        if (!!this["elem"] === false) {
            this["_buf"].push("<!DOCTYPE html>");
            "";
            var __r35 = this["_mode"];
            this["_mode"] = "";
            var __r36 = this["ctx"];
            this["ctx"] = {
                tag: "html",
                attrs: {
                    "class": "i-ua_js_no i-ua_css_standard"
                },
                content: [ {
                    elem: "head",
                    content: [ {
                        tag: "meta",
                        attrs: {
                            charset: "utf-8"
                        }
                    }, {
                        tag: "meta",
                        attrs: {
                            "http-equiv": "X-UA-Compatible",
                            content: "IE=EmulateIE7, IE=edge"
                        }
                    }, {
                        tag: "title",
                        content: this["ctx"]["title"]
                    }, this["ctx"]["favicon"] ? {
                        elem: "favicon",
                        url: this["ctx"]["favicon"]
                    } : "", this["ctx"]["meta"], {
                        block: "i-ua"
                    }, this["ctx"]["head"] ]
                }, {
                    elem: "body",
                    mix: [ this["ctx"] ],
                    content: [ this["ctx"]["content"] ]
                } ]
            };
            this.apply();
            this["_mode"] = __r35;
            this["ctx"] = __r36;
            "";
            return;
        } else {
            if (!!this["_start"] === false) {
                return $3.call(this);
            } else {
                return $13.call(this);
            }
        }
    }
    function $76() {
        return "script";
        return;
    }
    function $83() {
        if (!this["ctx"].hasOwnProperty("ie") === false) {
            if (!!this["ctx"]["_ieCommented"] === false) {
                var hideRule = !this["ctx"]["ie"] ? [ "gt IE 7", "<!-->", "<!--" ] : [ this["ctx"]["ie"], "", "" ];
                "";
                var __r37 = this["_mode"];
                this["_mode"] = "";
                var __r38 = this["ctx"], __r39 = __r38["_ieCommented"];
                __r38["_ieCommented"] = true;
                var __r40 = this["ctx"];
                this["ctx"] = [ "<!--[if " + hideRule[0] + "]>", hideRule[1], this["ctx"], hideRule[2], "<![endif]-->" ];
                this.apply();
                this["_mode"] = __r37;
                __r38["_ieCommented"] = __r39;
                this["ctx"] = __r40;
                "";
                return;
            } else {
                if (!!this["elem"] === false) {
                    this["_buf"].push("<!DOCTYPE html>");
                    "";
                    var __r35 = this["_mode"];
                    this["_mode"] = "";
                    var __r36 = this["ctx"];
                    this["ctx"] = {
                        tag: "html",
                        attrs: {
                            "class": "i-ua_js_no i-ua_css_standard"
                        },
                        content: [ {
                            elem: "head",
                            content: [ {
                                tag: "meta",
                                attrs: {
                                    charset: "utf-8"
                                }
                            }, {
                                tag: "meta",
                                attrs: {
                                    "http-equiv": "X-UA-Compatible",
                                    content: "IE=EmulateIE7, IE=edge"
                                }
                            }, {
                                tag: "title",
                                content: this["ctx"]["title"]
                            }, this["ctx"]["favicon"] ? {
                                elem: "favicon",
                                url: this["ctx"]["favicon"]
                            } : "", this["ctx"]["meta"], {
                                block: "i-ua"
                            }, this["ctx"]["head"] ]
                        }, {
                            elem: "body",
                            mix: [ this["ctx"] ],
                            content: [ this["ctx"]["content"] ]
                        } ]
                    };
                    this.apply();
                    this["_mode"] = __r35;
                    this["ctx"] = __r36;
                    "";
                    return;
                } else {
                    if (!!this["_start"] === false) {
                        return $3.call(this);
                    } else {
                        return $13.call(this);
                    }
                }
            }
        } else {
            if (!!this["elem"] === false) {
                this["_buf"].push("<!DOCTYPE html>");
                "";
                var __r35 = this["_mode"];
                this["_mode"] = "";
                var __r36 = this["ctx"];
                this["ctx"] = {
                    tag: "html",
                    attrs: {
                        "class": "i-ua_js_no i-ua_css_standard"
                    },
                    content: [ {
                        elem: "head",
                        content: [ {
                            tag: "meta",
                            attrs: {
                                charset: "utf-8"
                            }
                        }, {
                            tag: "meta",
                            attrs: {
                                "http-equiv": "X-UA-Compatible",
                                content: "IE=EmulateIE7, IE=edge"
                            }
                        }, {
                            tag: "title",
                            content: this["ctx"]["title"]
                        }, this["ctx"]["favicon"] ? {
                            elem: "favicon",
                            url: this["ctx"]["favicon"]
                        } : "", this["ctx"]["meta"], {
                            block: "i-ua"
                        }, this["ctx"]["head"] ]
                    }, {
                        elem: "body",
                        mix: [ this["ctx"] ],
                        content: [ this["ctx"]["content"] ]
                    } ]
                };
                this.apply();
                this["_mode"] = __r35;
                this["ctx"] = __r36;
                "";
                return;
            } else {
                if (!!this["_start"] === false) {
                    return $3.call(this);
                } else {
                    return $13.call(this);
                }
            }
        }
    }
    function $102() {
        var __this = this;
        var __t = this["block"];
        if (__t === "code") {
            var __t = this["elem"];
            if (__t === "source") {
                var __t = this["_mode"];
                if (__t === "content") {
                    if (!!this["ctx"]["_joined"] === false) {
                        var text, charMap = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;"
                        };
                        text = ("", __r41 = this["ctx"], __r42 = __r41["_joined"], __r41["_joined"] = true, __r43 = this["ctx"], __r44 = __r43["content"], __r43["content"] = this["ctx"]["content"].join("\n"), __r45 = apply.call(__this), __r41["_joined"] = __r42, __r43["content"] = __r44, "", __r45);
                        var _translateChar = function(ch) {
                            return charMap[ch] || ch;
                        };
                        return text.replace(/[&<>]/g, _translateChar);
                        return;
                    } else {
                        if (!!this["elem"] === false) {
                            return $2.call(this);
                        } else {
                            return $5.call(this);
                        }
                    }
                } else if (__t === "tag") {
                    return "code";
                    return;
                } else if (__t === "js") {
                    if (!!this["elem"] === false) {
                        return $9.call(this);
                    } else {
                        return $11.call(this);
                    }
                } else if (__t === "attrs") {
                    return $11.call(this);
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $11.call(this);
                } else if (__t === "default") {
                    return $14.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else if (__t === "item") {
                return $31.call(this);
            } else if (__t === "favicon") {
                return $31.call(this);
            } else if (__t === "js") {
                return $31.call(this);
            } else if (__t === "css") {
                return $31.call(this);
            } else if (__t === "meta") {
                return $31.call(this);
            } else if (__t === "body") {
                return $31.call(this);
            } else if (__t === "head") {
                return $31.call(this);
            } else if (__t === "core") {
                return $31.call(this);
            } else {
                return $31.call(this);
            }
        } else if (__t === "ulist") {
            var __t = this["elem"];
            if (__t === "source") {
                return $35.call(this);
            } else if (__t === "item") {
                return $37.call(this);
            } else if (__t === "favicon") {
                return $35.call(this);
            } else if (__t === "js") {
                return $35.call(this);
            } else if (__t === "css") {
                return $35.call(this);
            } else if (__t === "meta") {
                return $35.call(this);
            } else if (__t === "body") {
                return $35.call(this);
            } else if (__t === "head") {
                return $35.call(this);
            } else if (__t === "core") {
                return $35.call(this);
            } else {
                return $35.call(this);
            }
        } else if (__t === "link") {
            if (!!this["elem"] === false) {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    if (!this["ctx"]["url"] === false) {
                        return $39.call(this);
                    } else {
                        return "span";
                        return;
                    }
                } else if (__t === "js") {
                    return $9.call(this);
                } else if (__t === "attrs") {
                    var ctx = this["ctx"], aas = {};
                    ctx["id"] && (aas["id"] = ctx["id"]);
                    ctx["url"] && (aas["href"] = ctx["url"]);
                    ctx["target"] && (aas["_target"] = ctx["target"]);
                    return aas;
                    return;
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $11.call(this);
                } else if (__t === "default") {
                    return $14.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else {
                if (!this["ctx"]["url"] === false) {
                    var __t = this["_mode"];
                    if (__t === "content") {
                        return $5.call(this);
                    } else if (__t === "tag") {
                        return $39.call(this);
                    } else if (__t === "js") {
                        return $11.call(this);
                    } else if (__t === "attrs") {
                        return $11.call(this);
                    } else if (__t === "mix") {
                        return $11.call(this);
                    } else if (__t === "bem") {
                        return $11.call(this);
                    } else if (__t === "default") {
                        return $14.call(this);
                    } else if (__t === "jsAttr") {
                        return $11.call(this);
                    } else if (__t === "cls") {
                        return $11.call(this);
                    } else {
                        return $25.call(this);
                    }
                } else {
                    return $30.call(this);
                }
            }
        } else if (__t === "emph") {
            if (!!this["elem"] === false) {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    return "em";
                    return;
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return $11.call(this);
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $11.call(this);
                } else if (__t === "default") {
                    return $14.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else {
                return $30.call(this);
            }
        } else if (__t === "para") {
            if (!!this["elem"] === false) {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    return "p";
                    return;
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return $11.call(this);
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $11.call(this);
                } else if (__t === "default") {
                    return $14.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else {
                return $30.call(this);
            }
        } else if (__t === "olist") {
            var __t = this["elem"];
            if (__t === "source") {
                return $55.call(this);
            } else if (__t === "item") {
                return $37.call(this);
            } else if (__t === "favicon") {
                return $55.call(this);
            } else if (__t === "js") {
                return $55.call(this);
            } else if (__t === "css") {
                return $55.call(this);
            } else if (__t === "meta") {
                return $55.call(this);
            } else if (__t === "body") {
                return $55.call(this);
            } else if (__t === "head") {
                return $55.call(this);
            } else if (__t === "core") {
                return $55.call(this);
            } else {
                return $55.call(this);
            }
        } else if (__t === "headline") {
            if (!(!this["mods"] || !this["mods"]["level"]) === false) {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    if (!(this["mods"] && this["mods"]["level"]) === false) {
                        return $57.call(this);
                    } else {
                        if (!!this["elem"] === false) {
                            return $58.call(this);
                        } else {
                            return $11.call(this);
                        }
                    }
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return $11.call(this);
                } else if (__t === "mix") {
                    return [ {
                        mods: {
                            level: 1
                        }
                    } ];
                    return;
                } else if (__t === "bem") {
                    return $11.call(this);
                } else if (__t === "default") {
                    return $14.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else {
                if (!(this["mods"] && this["mods"]["level"]) === false) {
                    var __t = this["_mode"];
                    if (__t === "content") {
                        return $5.call(this);
                    } else if (__t === "tag") {
                        return $57.call(this);
                    } else if (__t === "js") {
                        return $11.call(this);
                    } else if (__t === "attrs") {
                        return $11.call(this);
                    } else if (__t === "mix") {
                        return $11.call(this);
                    } else if (__t === "bem") {
                        return $11.call(this);
                    } else if (__t === "default") {
                        return $14.call(this);
                    } else if (__t === "jsAttr") {
                        return $11.call(this);
                    } else if (__t === "cls") {
                        return $11.call(this);
                    } else {
                        return $25.call(this);
                    }
                } else {
                    if (!!this["elem"] === false) {
                        var __t = this["_mode"];
                        if (__t === "content") {
                            return $5.call(this);
                        } else if (__t === "tag") {
                            return $58.call(this);
                        } else if (__t === "js") {
                            return $11.call(this);
                        } else if (__t === "attrs") {
                            return $11.call(this);
                        } else if (__t === "mix") {
                            return $11.call(this);
                        } else if (__t === "bem") {
                            return $11.call(this);
                        } else if (__t === "default") {
                            return $14.call(this);
                        } else if (__t === "jsAttr") {
                            return $11.call(this);
                        } else if (__t === "cls") {
                            return $11.call(this);
                        } else {
                            return $25.call(this);
                        }
                    } else {
                        return $30.call(this);
                    }
                }
            }
        } else if (__t === "b-page") {
            var __t = this["elem"];
            if (__t === "source") {
                return $70.call(this);
            } else if (__t === "item") {
                return $70.call(this);
            } else if (__t === "favicon") {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    return $71.call(this);
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return {
                        rel: "shortcut icon",
                        href: this["ctx"]["url"]
                    };
                    return;
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $73.call(this);
                } else if (__t === "default") {
                    return $74.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else if (__t === "js") {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    return $76.call(this);
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    if (!this["ctx"]["url"] === false) {
                        return {
                            src: this["ctx"]["url"]
                        };
                        return;
                    } else {
                        return $11.call(this);
                    }
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $73.call(this);
                } else if (__t === "default") {
                    return $74.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else if (__t === "css") {
                if (!this["ctx"]["url"] === false) {
                    var __t = this["_mode"];
                    if (__t === "content") {
                        return $5.call(this);
                    } else if (__t === "tag") {
                        return $71.call(this);
                    } else if (__t === "js") {
                        return $11.call(this);
                    } else if (__t === "attrs") {
                        return {
                            rel: "stylesheet",
                            href: this["ctx"]["url"]
                        };
                        return;
                    } else if (__t === "mix") {
                        return $11.call(this);
                    } else if (__t === "bem") {
                        return $73.call(this);
                    } else if (__t === "default") {
                        return $83.call(this);
                    } else if (__t === "jsAttr") {
                        return $11.call(this);
                    } else if (__t === "cls") {
                        return $11.call(this);
                    } else {
                        return $25.call(this);
                    }
                } else {
                    var __t = this["_mode"];
                    if (__t === "content") {
                        return $5.call(this);
                    } else if (__t === "tag") {
                        return "style";
                        return;
                    } else if (__t === "js") {
                        return $11.call(this);
                    } else if (__t === "attrs") {
                        return $11.call(this);
                    } else if (__t === "mix") {
                        return $11.call(this);
                    } else if (__t === "bem") {
                        return $73.call(this);
                    } else if (__t === "default") {
                        return $83.call(this);
                    } else if (__t === "jsAttr") {
                        return $11.call(this);
                    } else if (__t === "cls") {
                        return $11.call(this);
                    } else {
                        return $25.call(this);
                    }
                }
            } else if (__t === "meta") {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    return "meta";
                    return;
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return this["ctx"]["attrs"];
                    return;
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $73.call(this);
                } else if (__t === "default") {
                    return $74.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else if (__t === "body") {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    return "body";
                    return;
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return $11.call(this);
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $11.call(this);
                } else if (__t === "default") {
                    return $74.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else if (__t === "head") {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    return "head";
                    return;
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return $11.call(this);
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $73.call(this);
                } else if (__t === "default") {
                    return $74.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else if (__t === "core") {
                return $70.call(this);
            } else {
                return $70.call(this);
            }
        } else if (__t === "i-jquery") {
            var __t = this["elem"];
            if (__t === "source") {
                return $30.call(this);
            } else if (__t === "item") {
                return $30.call(this);
            } else if (__t === "favicon") {
                return $30.call(this);
            } else if (__t === "js") {
                return $30.call(this);
            } else if (__t === "css") {
                return $30.call(this);
            } else if (__t === "meta") {
                return $30.call(this);
            } else if (__t === "body") {
                return $30.call(this);
            } else if (__t === "head") {
                return $30.call(this);
            } else if (__t === "core") {
                var __t = this["_mode"];
                if (__t === "content") {
                    return $5.call(this);
                } else if (__t === "tag") {
                    return $11.call(this);
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return $11.call(this);
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $11.call(this);
                } else if (__t === "default") {
                    "";
                    var __r33 = this["_mode"];
                    this["_mode"] = "";
                    var __r34 = this["ctx"];
                    this["ctx"] = {
                        block: "b-page",
                        elem: "js",
                        url: "//yandex.st/jquery/1.6.2/jquery.min.js"
                    };
                    this.apply();
                    this["_mode"] = __r33;
                    this["ctx"] = __r34;
                    "";
                    return;
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else {
                return $30.call(this);
            }
        } else if (__t === "i-ua") {
            if (!!this["elem"] === false) {
                var __t = this["_mode"];
                if (__t === "content") {
                    return [ ";(function(d,e,c,r){", "e=d.documentElement;", 'c="className";', 'r="replace";', 'e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");', 'if(d.compatMode!="CSS1Compat")', 'e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")', "})(document);" ].join("");
                    return;
                } else if (__t === "tag") {
                    return $76.call(this);
                } else if (__t === "js") {
                    return $11.call(this);
                } else if (__t === "attrs") {
                    return $11.call(this);
                } else if (__t === "mix") {
                    return $11.call(this);
                } else if (__t === "bem") {
                    return $73.call(this);
                } else if (__t === "default") {
                    return $14.call(this);
                } else if (__t === "jsAttr") {
                    return $11.call(this);
                } else if (__t === "cls") {
                    return $11.call(this);
                } else {
                    return $25.call(this);
                }
            } else {
                return $30.call(this);
            }
        } else {
            return $30.call(this);
        }
    }
    function $e() {
        throw new Error;
        return;
    }
    return exports;
})(typeof exports === "undefined" ? {} : exports);;BEMHTML = BEMHTML.apply;