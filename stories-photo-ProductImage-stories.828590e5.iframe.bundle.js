/*! For license information please see stories-photo-ProductImage-stories.828590e5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkskc_rcl=self.webpackChunkskc_rcl||[]).push([[61],{"./src/stories/photo/ProductImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProductImage_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProductImage=({productID,variant,className,loading="eager"})=>{const onErrorCB=(0,react.useCallback)((e=>{e.currentTarget.src=`https://images.thesupremekingscastle.com/products/${variant}/default-product-image.png`}),[productID,variant]);return(0,jsx_runtime.jsx)("img",{className,role:"presentation",loading,src:`https://images.thesupremekingscastle.com/products/${variant}/${productID}.png`,onError:onErrorCB,width:"100%",height:"auto",alt:`Product - ${productID}`})};ProductImage.displayName="ProductImage";const ProductImage_stories={title:"Photo/Product Image",component:ProductImage,decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{width:"300px"},children:(0,jsx_runtime.jsx)(Story,{})})],args:{productID:"RA01",variant:"md",loading:"lazy"}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);