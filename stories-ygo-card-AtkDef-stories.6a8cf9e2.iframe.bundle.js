"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[169],{"./src/stories/ygo-card/AtkDef.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LinkMonster:()=>LinkMonster,NormalMonster:()=>NormalMonster,NormalMonsterUndefinedStats:()=>NormalMonsterUndefinedStats,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_ygo_card_AtkDef__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ygo-card/AtkDef.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_ygo_card_AtkDef__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const __WEBPACK_DEFAULT_EXPORT__={title:"Yugioh-Card/Attack-Defense",component:_components_ygo_card_AtkDef__WEBPACK_IMPORTED_MODULE_1__.Z},NormalMonster=Template.bind({});NormalMonster.args={monsterAtk:"2500",monsterDef:"2000",cardColor:"Normal"};const NormalMonsterUndefinedStats=Template.bind({});NormalMonsterUndefinedStats.args={monsterAtk:void 0,monsterDef:void 0,cardColor:"Normal"};const LinkMonster=Template.bind({});LinkMonster.args={monsterAtk:"2500",monsterDef:"2000",cardColor:"Link"},NormalMonster.parameters={...NormalMonster.parameters,docs:{...NormalMonster.parameters?.docs,source:{originalSource:"args => <AtkDef {...args} />",...NormalMonster.parameters?.docs?.source}}},NormalMonsterUndefinedStats.parameters={...NormalMonsterUndefinedStats.parameters,docs:{...NormalMonsterUndefinedStats.parameters?.docs,source:{originalSource:"args => <AtkDef {...args} />",...NormalMonsterUndefinedStats.parameters?.docs?.source}}},LinkMonster.parameters={...LinkMonster.parameters,docs:{...LinkMonster.parameters?.docs,source:{originalSource:"args => <AtkDef {...args} />",...LinkMonster.parameters?.docs?.source}}};const __namedExportsOrder=["NormalMonster","NormalMonsterUndefinedStats","LinkMonster"]},"./src/components/ygo-card/AtkDef.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ygo_card_AtkDef});var Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),atk_def=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/css/ygo-card/atk-def.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(atk_def.Z,options);atk_def.Z&&atk_def.Z.locals&&atk_def.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const modifyStat=stat=>void 0===stat?"?":stat,AtkDef=({monsterAtk,monsterDef,cardColor})=>(0,jsx_runtime.jsx)("div",{className:"monster-stat-parent",children:(0,jsx_runtime.jsxs)("div",{className:"monster-stat-sub-parent",children:[(0,jsx_runtime.jsx)(Typography.Z,{className:"monster-stat monster-attack-stat",variant:"body1",children:modifyStat(monsterAtk)}),"Link"!==cardColor?(0,jsx_runtime.jsx)(Typography.Z,{className:"monster-stat monster-defense-stat",variant:"body1",children:modifyStat(monsterDef)}):void 0]})});AtkDef.displayName="AtkDef";const ygo_card_AtkDef=AtkDef},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/css/ygo-card/atk-def.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monster-stat-parent {\n\twidth: 100%;\n\ttext-align: right;\n}\n\n.monster-stat-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.75);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n}\n\n.monster-stat {\n\tdisplay: inline-block;\n\tfont-weight: 800;\n}\n\n.monster-attack-stat {\n\tcolor: rgb(255, 77, 77, 0.93);\n}\n\n.monster-defense-stat {\n\tmargin-left: 0.6rem;\n\tcolor: rgba(77, 166, 255, 0.9);\n}\n","",{version:3,sources:["webpack://./src/css/ygo-card/atk-def.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,iBAAiB;AAClB;;AAEA;CACC,qCAAqC;CACrC,qBAAqB;CACrB,mBAAmB;CACnB,sBAAsB;CACtB,oBAAoB;CACpB,qBAAqB;CACrB,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;CACrB,gBAAgB;AACjB;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,mBAAmB;CACnB,8BAA8B;AAC/B",sourcesContent:[".monster-stat-parent {\n\twidth: 100%;\n\ttext-align: right;\n}\n\n.monster-stat-sub-parent {\n\tbackground: rgba(255, 255, 255, 0.75);\n\tdisplay: inline-block;\n\tpadding-top: 0.2rem;\n\tpadding-bottom: 0.2rem;\n\tpadding-left: 0.7rem;\n\tpadding-right: 0.7rem;\n\tborder-radius: 4rem;\n}\n\n.monster-stat {\n\tdisplay: inline-block;\n\tfont-weight: 800;\n}\n\n.monster-attack-stat {\n\tcolor: rgb(255, 77, 77, 0.93);\n}\n\n.monster-defense-stat {\n\tmargin-left: 0.6rem;\n\tcolor: rgba(77, 166, 255, 0.9);\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);