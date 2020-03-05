(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/array/from"),__esModule:true};},{"core-js/library/fn/array/from":23}],2:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/get-iterator"),__esModule:true};},{"core-js/library/fn/get-iterator":24}],3:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/assign"),__esModule:true};},{"core-js/library/fn/object/assign":25}],4:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/create"),__esModule:true};},{"core-js/library/fn/object/create":26}],5:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/define-property"),__esModule:true};},{"core-js/library/fn/object/define-property":27}],6:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/get-prototype-of"),__esModule:true};},{"core-js/library/fn/object/get-prototype-of":28}],7:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/keys"),__esModule:true};},{"core-js/library/fn/object/keys":29}],8:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/object/set-prototype-of"),__esModule:true};},{"core-js/library/fn/object/set-prototype-of":30}],9:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/promise"),__esModule:true};},{"core-js/library/fn/promise":31}],10:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/symbol"),__esModule:true};},{"core-js/library/fn/symbol":32}],11:[function(require,module,exports){module.exports={"default":require("core-js/library/fn/symbol/iterator"),__esModule:true};},{"core-js/library/fn/symbol/iterator":33}],12:[function(require,module,exports){"use strict";exports.__esModule=true;var _promise=require("../core-js/promise");var _promise2=_interopRequireDefault(_promise);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default=function(fn){return function(){var gen=fn.apply(this,arguments);return new _promise2.default(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}
if(info.done){resolve(value);}else{return _promise2.default.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}
return step("next");});};};},{"../core-js/promise":9}],13:[function(require,module,exports){"use strict";exports.__esModule=true;exports.default=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};},{}],14:[function(require,module,exports){"use strict";exports.__esModule=true;var _defineProperty=require("../core-js/object/define-property");var _defineProperty2=_interopRequireDefault(_defineProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;(0,_defineProperty2.default)(target,descriptor.key,descriptor);}}
return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();},{"../core-js/object/define-property":5}],15:[function(require,module,exports){"use strict";exports.__esModule=true;var _setPrototypeOf=require("../core-js/object/set-prototype-of");var _setPrototypeOf2=_interopRequireDefault(_setPrototypeOf);var _create=require("../core-js/object/create");var _create2=_interopRequireDefault(_create);var _typeof2=require("../helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default=function(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":(0,_typeof3.default)(superClass)));}
subClass.prototype=(0,_create2.default)(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(subClass,superClass):subClass.__proto__=superClass;};},{"../core-js/object/create":4,"../core-js/object/set-prototype-of":8,"../helpers/typeof":18}],16:[function(require,module,exports){"use strict";exports.__esModule=true;var _typeof2=require("../helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default=function(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}
return call&&((typeof call==="undefined"?"undefined":(0,_typeof3.default)(call))==="object"||typeof call==="function")?call:self;};},{"../helpers/typeof":18}],17:[function(require,module,exports){"use strict";exports.__esModule=true;var _from=require("../core-js/array/from");var _from2=_interopRequireDefault(_from);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default=function(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}
return arr2;}else{return(0,_from2.default)(arr);}};},{"../core-js/array/from":1}],18:[function(require,module,exports){"use strict";exports.__esModule=true;var _iterator=require("../core-js/symbol/iterator");var _iterator2=_interopRequireDefault(_iterator);var _symbol=require("../core-js/symbol");var _symbol2=_interopRequireDefault(_symbol);var _typeof=typeof _symbol2.default==="function"&&typeof _iterator2.default==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj;};function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
exports.default=typeof _symbol2.default==="function"&&_typeof(_iterator2.default)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof(obj);}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof(obj);};},{"../core-js/symbol":10,"../core-js/symbol/iterator":11}],19:[function(require,module,exports){module.exports=require("regenerator-runtime");},{"regenerator-runtime":128}],20:[function(require,module,exports){'use strict'
exports.byteLength=byteLength
exports.toByteArray=toByteArray
exports.fromByteArray=fromByteArray
var lookup=[]
var revLookup=[]
var Arr=typeof Uint8Array!=='undefined'?Uint8Array:Array
var code='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for(var i=0,len=code.length;i<len;++i){lookup[i]=code[i]
revLookup[code.charCodeAt(i)]=i}
revLookup['-'.charCodeAt(0)]=62
revLookup['_'.charCodeAt(0)]=63
function getLens(b64){var len=b64.length
if(len%4>0){throw new Error('Invalid string. Length must be a multiple of 4')}
var validLen=b64.indexOf('=')
if(validLen===-1)validLen=len
var placeHoldersLen=validLen===len?0:4-(validLen%4)
return[validLen,placeHoldersLen]}
function byteLength(b64){var lens=getLens(b64)
var validLen=lens[0]
var placeHoldersLen=lens[1]
return((validLen+placeHoldersLen)*3/4)-placeHoldersLen}
function _byteLength(b64,validLen,placeHoldersLen){return((validLen+placeHoldersLen)*3/4)-placeHoldersLen}
function toByteArray(b64){var tmp
var lens=getLens(b64)
var validLen=lens[0]
var placeHoldersLen=lens[1]
var arr=new Arr(_byteLength(b64,validLen,placeHoldersLen))
var curByte=0
var len=placeHoldersLen>0?validLen-4:validLen
for(var i=0;i<len;i+=4){tmp=(revLookup[b64.charCodeAt(i)]<<18)|(revLookup[b64.charCodeAt(i+1)]<<12)|(revLookup[b64.charCodeAt(i+2)]<<6)|revLookup[b64.charCodeAt(i+3)]
arr[curByte++]=(tmp>>16)&0xFF
arr[curByte++]=(tmp>>8)&0xFF
arr[curByte++]=tmp&0xFF}
if(placeHoldersLen===2){tmp=(revLookup[b64.charCodeAt(i)]<<2)|(revLookup[b64.charCodeAt(i+1)]>>4)
arr[curByte++]=tmp&0xFF}
if(placeHoldersLen===1){tmp=(revLookup[b64.charCodeAt(i)]<<10)|(revLookup[b64.charCodeAt(i+1)]<<4)|(revLookup[b64.charCodeAt(i+2)]>>2)
arr[curByte++]=(tmp>>8)&0xFF
arr[curByte++]=tmp&0xFF}
return arr}
function tripletToBase64(num){return lookup[num>>18&0x3F]+
lookup[num>>12&0x3F]+
lookup[num>>6&0x3F]+
lookup[num&0x3F]}
function encodeChunk(uint8,start,end){var tmp
var output=[]
for(var i=start;i<end;i+=3){tmp=((uint8[i]<<16)&0xFF0000)+
((uint8[i+1]<<8)&0xFF00)+
(uint8[i+2]&0xFF)
output.push(tripletToBase64(tmp))}
return output.join('')}
function fromByteArray(uint8){var tmp
var len=uint8.length
var extraBytes=len%3
var parts=[]
var maxChunkLength=16383
for(var i=0,len2=len-extraBytes;i<len2;i+=maxChunkLength){parts.push(encodeChunk(uint8,i,(i+maxChunkLength)>len2?len2:(i+maxChunkLength)))}
if(extraBytes===1){tmp=uint8[len-1]
parts.push(lookup[tmp>>2]+
lookup[(tmp<<4)&0x3F]+
'==')}else if(extraBytes===2){tmp=(uint8[len-2]<<8)+uint8[len-1]
parts.push(lookup[tmp>>10]+
lookup[(tmp>>4)&0x3F]+
lookup[(tmp<<2)&0x3F]+
'=')}
return parts.join('')}},{}],21:[function(require,module,exports){var objectCreate=Object.create||objectCreatePolyfill
var objectKeys=Object.keys||objectKeysPolyfill
var bind=Function.prototype.bind||functionBindPolyfill
function EventEmitter(){if(!this._events||!Object.prototype.hasOwnProperty.call(this,'_events')){this._events=objectCreate(null);this._eventsCount=0;}
this._maxListeners=this._maxListeners||undefined;}
module.exports=EventEmitter;EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;var defaultMaxListeners=10;var hasDefineProperty;try{var o={};if(Object.defineProperty)Object.defineProperty(o,'x',{value:0});hasDefineProperty=o.x===0;}catch(err){hasDefineProperty=false}
if(hasDefineProperty){Object.defineProperty(EventEmitter,'defaultMaxListeners',{enumerable:true,get:function(){return defaultMaxListeners;},set:function(arg){if(typeof arg!=='number'||arg<0||arg!==arg)
throw new TypeError('"defaultMaxListeners" must be a positive number');defaultMaxListeners=arg;}});}else{EventEmitter.defaultMaxListeners=defaultMaxListeners;}
EventEmitter.prototype.setMaxListeners=function setMaxListeners(n){if(typeof n!=='number'||n<0||isNaN(n))
throw new TypeError('"n" argument must be a positive number');this._maxListeners=n;return this;};function $getMaxListeners(that){if(that._maxListeners===undefined)
return EventEmitter.defaultMaxListeners;return that._maxListeners;}
EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return $getMaxListeners(this);};function emitNone(handler,isFn,self){if(isFn)
handler.call(self);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].call(self);}}
function emitOne(handler,isFn,self,arg1){if(isFn)
handler.call(self,arg1);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].call(self,arg1);}}
function emitTwo(handler,isFn,self,arg1,arg2){if(isFn)
handler.call(self,arg1,arg2);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].call(self,arg1,arg2);}}
function emitThree(handler,isFn,self,arg1,arg2,arg3){if(isFn)
handler.call(self,arg1,arg2,arg3);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].call(self,arg1,arg2,arg3);}}
function emitMany(handler,isFn,self,args){if(isFn)
handler.apply(self,args);else{var len=handler.length;var listeners=arrayClone(handler,len);for(var i=0;i<len;++i)
listeners[i].apply(self,args);}}
EventEmitter.prototype.emit=function emit(type){var er,handler,len,args,i,events;var doError=(type==='error');events=this._events;if(events)
doError=(doError&&events.error==null);else if(!doError)
return false;if(doError){if(arguments.length>1)
er=arguments[1];if(er instanceof Error){throw er;}else{var err=new Error('Unhandled "error" event. ('+er+')');err.context=er;throw err;}
return false;}
handler=events[type];if(!handler)
return false;var isFn=typeof handler==='function';len=arguments.length;switch(len){case 1:emitNone(handler,isFn,this);break;case 2:emitOne(handler,isFn,this,arguments[1]);break;case 3:emitTwo(handler,isFn,this,arguments[1],arguments[2]);break;case 4:emitThree(handler,isFn,this,arguments[1],arguments[2],arguments[3]);break;default:args=new Array(len-1);for(i=1;i<len;i++)
args[i-1]=arguments[i];emitMany(handler,isFn,this,args);}
return true;};function _addListener(target,type,listener,prepend){var m;var events;var existing;if(typeof listener!=='function')
throw new TypeError('"listener" argument must be a function');events=target._events;if(!events){events=target._events=objectCreate(null);target._eventsCount=0;}else{if(events.newListener){target.emit('newListener',type,listener.listener?listener.listener:listener);events=target._events;}
existing=events[type];}
if(!existing){existing=events[type]=listener;++target._eventsCount;}else{if(typeof existing==='function'){existing=events[type]=prepend?[listener,existing]:[existing,listener];}else{if(prepend){existing.unshift(listener);}else{existing.push(listener);}}
if(!existing.warned){m=$getMaxListeners(target);if(m&&m>0&&existing.length>m){existing.warned=true;var w=new Error('Possible EventEmitter memory leak detected. '+
existing.length+' "'+String(type)+'" listeners '+
'added. Use emitter.setMaxListeners() to '+
'increase limit.');w.name='MaxListenersExceededWarning';w.emitter=target;w.type=type;w.count=existing.length;if(typeof console==='object'&&console.warn){console.warn('%s: %s',w.name,w.message);}}}}
return target;}
EventEmitter.prototype.addListener=function addListener(type,listener){return _addListener(this,type,listener,false);};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.prependListener=function prependListener(type,listener){return _addListener(this,type,listener,true);};function onceWrapper(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn);this.fired=true;switch(arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:var args=new Array(arguments.length);for(var i=0;i<args.length;++i)
args[i]=arguments[i];this.listener.apply(this.target,args);}}}
function _onceWrap(target,type,listener){var state={fired:false,wrapFn:undefined,target:target,type:type,listener:listener};var wrapped=bind.call(onceWrapper,state);wrapped.listener=listener;state.wrapFn=wrapped;return wrapped;}
EventEmitter.prototype.once=function once(type,listener){if(typeof listener!=='function')
throw new TypeError('"listener" argument must be a function');this.on(type,_onceWrap(this,type,listener));return this;};EventEmitter.prototype.prependOnceListener=function prependOnceListener(type,listener){if(typeof listener!=='function')
throw new TypeError('"listener" argument must be a function');this.prependListener(type,_onceWrap(this,type,listener));return this;};EventEmitter.prototype.removeListener=function removeListener(type,listener){var list,events,position,i,originalListener;if(typeof listener!=='function')
throw new TypeError('"listener" argument must be a function');events=this._events;if(!events)
return this;list=events[type];if(!list)
return this;if(list===listener||list.listener===listener){if(--this._eventsCount===0)
this._events=objectCreate(null);else{delete events[type];if(events.removeListener)
this.emit('removeListener',type,list.listener||listener);}}else if(typeof list!=='function'){position=-1;for(i=list.length-1;i>=0;i--){if(list[i]===listener||list[i].listener===listener){originalListener=list[i].listener;position=i;break;}}
if(position<0)
return this;if(position===0)
list.shift();else
spliceOne(list,position);if(list.length===1)
events[type]=list[0];if(events.removeListener)
this.emit('removeListener',type,originalListener||listener);}
return this;};EventEmitter.prototype.removeAllListeners=function removeAllListeners(type){var listeners,events,i;events=this._events;if(!events)
return this;if(!events.removeListener){if(arguments.length===0){this._events=objectCreate(null);this._eventsCount=0;}else if(events[type]){if(--this._eventsCount===0)
this._events=objectCreate(null);else
delete events[type];}
return this;}
if(arguments.length===0){var keys=objectKeys(events);var key;for(i=0;i<keys.length;++i){key=keys[i];if(key==='removeListener')continue;this.removeAllListeners(key);}
this.removeAllListeners('removeListener');this._events=objectCreate(null);this._eventsCount=0;return this;}
listeners=events[type];if(typeof listeners==='function'){this.removeListener(type,listeners);}else if(listeners){for(i=listeners.length-1;i>=0;i--){this.removeListener(type,listeners[i]);}}
return this;};EventEmitter.prototype.listeners=function listeners(type){var evlistener;var ret;var events=this._events;if(!events)
ret=[];else{evlistener=events[type];if(!evlistener)
ret=[];else if(typeof evlistener==='function')
ret=[evlistener.listener||evlistener];else
ret=unwrapListeners(evlistener);}
return ret;};EventEmitter.listenerCount=function(emitter,type){if(typeof emitter.listenerCount==='function'){return emitter.listenerCount(type);}else{return listenerCount.call(emitter,type);}};EventEmitter.prototype.listenerCount=listenerCount;function listenerCount(type){var events=this._events;if(events){var evlistener=events[type];if(typeof evlistener==='function'){return 1;}else if(evlistener){return evlistener.length;}}
return 0;}
EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?Reflect.ownKeys(this._events):[];};function spliceOne(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1)
list[i]=list[k];list.pop();}
function arrayClone(arr,n){var copy=new Array(n);for(var i=0;i<n;++i)
copy[i]=arr[i];return copy;}
function unwrapListeners(arr){var ret=new Array(arr.length);for(var i=0;i<ret.length;++i){ret[i]=arr[i].listener||arr[i];}
return ret;}
function objectCreatePolyfill(proto){var F=function(){};F.prototype=proto;return new F;}
function objectKeysPolyfill(obj){var keys=[];for(var k in obj)if(Object.prototype.hasOwnProperty.call(obj,k)){keys.push(k);}
return k;}
function functionBindPolyfill(context){var fn=this;return function(){return fn.apply(context,arguments);};}},{}],22:[function(require,module,exports){/*!
* The buffer module from node.js, for the browser.
*
* @author Feross Aboukhadijeh <https://feross.org>
* @license MIT
*/'use strict'
var base64=require('base64-js')
var ieee754=require('ieee754')
exports.Buffer=Buffer
exports.SlowBuffer=SlowBuffer
exports.INSPECT_MAX_BYTES=50
var K_MAX_LENGTH=0x7fffffff
exports.kMaxLength=K_MAX_LENGTH
Buffer.TYPED_ARRAY_SUPPORT=typedArraySupport()
if(!Buffer.TYPED_ARRAY_SUPPORT&&typeof console!=='undefined'&&typeof console.error==='function'){console.error('This browser lacks typed array (Uint8Array) support which is required by '+
'`buffer` v5.x. Use `buffer` v4.x if you require old browser support.')}
function typedArraySupport(){try{var arr=new Uint8Array(1)
arr.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}}
return arr.foo()===42}catch(e){return false}}
Object.defineProperty(Buffer.prototype,'parent',{get:function(){if(!(this instanceof Buffer)){return undefined}
return this.buffer}})
Object.defineProperty(Buffer.prototype,'offset',{get:function(){if(!(this instanceof Buffer)){return undefined}
return this.byteOffset}})
function createBuffer(length){if(length>K_MAX_LENGTH){throw new RangeError('Invalid typed array length')}
var buf=new Uint8Array(length)
buf.__proto__=Buffer.prototype
return buf}
function Buffer(arg,encodingOrOffset,length){if(typeof arg==='number'){if(typeof encodingOrOffset==='string'){throw new Error('If encoding is specified then the first argument must be a string')}
return allocUnsafe(arg)}
return from(arg,encodingOrOffset,length)}
if(typeof Symbol!=='undefined'&&Symbol.species&&Buffer[Symbol.species]===Buffer){Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:true,enumerable:false,writable:false})}
Buffer.poolSize=8192
function from(value,encodingOrOffset,length){if(typeof value==='number'){throw new TypeError('"value" argument must not be a number')}
if(isArrayBuffer(value)||(value&&isArrayBuffer(value.buffer))){return fromArrayBuffer(value,encodingOrOffset,length)}
if(typeof value==='string'){return fromString(value,encodingOrOffset)}
return fromObject(value)}
Buffer.from=function(value,encodingOrOffset,length){return from(value,encodingOrOffset,length)}
Buffer.prototype.__proto__=Uint8Array.prototype
Buffer.__proto__=Uint8Array
function assertSize(size){if(typeof size!=='number'){throw new TypeError('"size" argument must be of type number')}else if(size<0){throw new RangeError('"size" argument must not be negative')}}
function alloc(size,fill,encoding){assertSize(size)
if(size<=0){return createBuffer(size)}
if(fill!==undefined){return typeof encoding==='string'?createBuffer(size).fill(fill,encoding):createBuffer(size).fill(fill)}
return createBuffer(size)}
Buffer.alloc=function(size,fill,encoding){return alloc(size,fill,encoding)}
function allocUnsafe(size){assertSize(size)
return createBuffer(size<0?0:checked(size)|0)}
Buffer.allocUnsafe=function(size){return allocUnsafe(size)}
Buffer.allocUnsafeSlow=function(size){return allocUnsafe(size)}
function fromString(string,encoding){if(typeof encoding!=='string'||encoding===''){encoding='utf8'}
if(!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding)}
var length=byteLength(string,encoding)|0
var buf=createBuffer(length)
var actual=buf.write(string,encoding)
if(actual!==length){buf=buf.slice(0,actual)}
return buf}
function fromArrayLike(array){var length=array.length<0?0:checked(array.length)|0
var buf=createBuffer(length)
for(var i=0;i<length;i+=1){buf[i]=array[i]&255}
return buf}
function fromArrayBuffer(array,byteOffset,length){if(byteOffset<0||array.byteLength<byteOffset){throw new RangeError('"offset" is outside of buffer bounds')}
if(array.byteLength<byteOffset+(length||0)){throw new RangeError('"length" is outside of buffer bounds')}
var buf
if(byteOffset===undefined&&length===undefined){buf=new Uint8Array(array)}else if(length===undefined){buf=new Uint8Array(array,byteOffset)}else{buf=new Uint8Array(array,byteOffset,length)}
buf.__proto__=Buffer.prototype
return buf}
function fromObject(obj){if(Buffer.isBuffer(obj)){var len=checked(obj.length)|0
var buf=createBuffer(len)
if(buf.length===0){return buf}
obj.copy(buf,0,0,len)
return buf}
if(obj){if(ArrayBuffer.isView(obj)||'length'in obj){if(typeof obj.length!=='number'||numberIsNaN(obj.length)){return createBuffer(0)}
return fromArrayLike(obj)}
if(obj.type==='Buffer'&&Array.isArray(obj.data)){return fromArrayLike(obj.data)}}
throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object.')}
function checked(length){if(length>=K_MAX_LENGTH){throw new RangeError('Attempt to allocate Buffer larger than maximum '+
'size: 0x'+K_MAX_LENGTH.toString(16)+' bytes')}
return length|0}
function SlowBuffer(length){if(+length!=length){length=0}
return Buffer.alloc(+length)}
Buffer.isBuffer=function isBuffer(b){return b!=null&&b._isBuffer===true}
Buffer.compare=function compare(a,b){if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){throw new TypeError('Arguments must be Buffers')}
if(a===b)return 0
var x=a.length
var y=b.length
for(var i=0,len=Math.min(x,y);i<len;++i){if(a[i]!==b[i]){x=a[i]
y=b[i]
break}}
if(x<y)return-1
if(y<x)return 1
return 0}
Buffer.isEncoding=function isEncoding(encoding){switch(String(encoding).toLowerCase()){case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'latin1':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return true
default:return false}}
Buffer.concat=function concat(list,length){if(!Array.isArray(list)){throw new TypeError('"list" argument must be an Array of Buffers')}
if(list.length===0){return Buffer.alloc(0)}
var i
if(length===undefined){length=0
for(i=0;i<list.length;++i){length+=list[i].length}}
var buffer=Buffer.allocUnsafe(length)
var pos=0
for(i=0;i<list.length;++i){var buf=list[i]
if(ArrayBuffer.isView(buf)){buf=Buffer.from(buf)}
if(!Buffer.isBuffer(buf)){throw new TypeError('"list" argument must be an Array of Buffers')}
buf.copy(buffer,pos)
pos+=buf.length}
return buffer}
function byteLength(string,encoding){if(Buffer.isBuffer(string)){return string.length}
if(ArrayBuffer.isView(string)||isArrayBuffer(string)){return string.byteLength}
if(typeof string!=='string'){string=''+string}
var len=string.length
if(len===0)return 0
var loweredCase=false
for(;;){switch(encoding){case 'ascii':case 'latin1':case 'binary':return len
case 'utf8':case 'utf-8':case undefined:return utf8ToBytes(string).length
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return len*2
case 'hex':return len>>>1
case 'base64':return base64ToBytes(string).length
default:if(loweredCase)return utf8ToBytes(string).length
encoding=(''+encoding).toLowerCase()
loweredCase=true}}}
Buffer.byteLength=byteLength
function slowToString(encoding,start,end){var loweredCase=false
if(start===undefined||start<0){start=0}
if(start>this.length){return ''}
if(end===undefined||end>this.length){end=this.length}
if(end<=0){return ''}
end>>>=0
start>>>=0
if(end<=start){return ''}
if(!encoding)encoding='utf8'
while(true){switch(encoding){case 'hex':return hexSlice(this,start,end)
case 'utf8':case 'utf-8':return utf8Slice(this,start,end)
case 'ascii':return asciiSlice(this,start,end)
case 'latin1':case 'binary':return latin1Slice(this,start,end)
case 'base64':return base64Slice(this,start,end)
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return utf16leSlice(this,start,end)
default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding)
encoding=(encoding+'').toLowerCase()
loweredCase=true}}}
Buffer.prototype._isBuffer=true
function swap(b,n,m){var i=b[n]
b[n]=b[m]
b[m]=i}
Buffer.prototype.swap16=function swap16(){var len=this.length
if(len%2!==0){throw new RangeError('Buffer size must be a multiple of 16-bits')}
for(var i=0;i<len;i+=2){swap(this,i,i+1)}
return this}
Buffer.prototype.swap32=function swap32(){var len=this.length
if(len%4!==0){throw new RangeError('Buffer size must be a multiple of 32-bits')}
for(var i=0;i<len;i+=4){swap(this,i,i+3)
swap(this,i+1,i+2)}
return this}
Buffer.prototype.swap64=function swap64(){var len=this.length
if(len%8!==0){throw new RangeError('Buffer size must be a multiple of 64-bits')}
for(var i=0;i<len;i+=8){swap(this,i,i+7)
swap(this,i+1,i+6)
swap(this,i+2,i+5)
swap(this,i+3,i+4)}
return this}
Buffer.prototype.toString=function toString(){var length=this.length
if(length===0)return ''
if(arguments.length===0)return utf8Slice(this,0,length)
return slowToString.apply(this,arguments)}
Buffer.prototype.toLocaleString=Buffer.prototype.toString
Buffer.prototype.equals=function equals(b){if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer')
if(this===b)return true
return Buffer.compare(this,b)===0}
Buffer.prototype.inspect=function inspect(){var str=''
var max=exports.INSPECT_MAX_BYTES
if(this.length>0){str=this.toString('hex',0,max).match(/.{2}/g).join(' ')
if(this.length>max)str+=' ... '}
return '<Buffer '+str+'>'}
Buffer.prototype.compare=function compare(target,start,end,thisStart,thisEnd){if(!Buffer.isBuffer(target)){throw new TypeError('Argument must be a Buffer')}
if(start===undefined){start=0}
if(end===undefined){end=target?target.length:0}
if(thisStart===undefined){thisStart=0}
if(thisEnd===undefined){thisEnd=this.length}
if(start<0||end>target.length||thisStart<0||thisEnd>this.length){throw new RangeError('out of range index')}
if(thisStart>=thisEnd&&start>=end){return 0}
if(thisStart>=thisEnd){return-1}
if(start>=end){return 1}
start>>>=0
end>>>=0
thisStart>>>=0
thisEnd>>>=0
if(this===target)return 0
var x=thisEnd-thisStart
var y=end-start
var len=Math.min(x,y)
var thisCopy=this.slice(thisStart,thisEnd)
var targetCopy=target.slice(start,end)
for(var i=0;i<len;++i){if(thisCopy[i]!==targetCopy[i]){x=thisCopy[i]
y=targetCopy[i]
break}}
if(x<y)return-1
if(y<x)return 1
return 0}
function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){if(buffer.length===0)return-1
if(typeof byteOffset==='string'){encoding=byteOffset
byteOffset=0}else if(byteOffset>0x7fffffff){byteOffset=0x7fffffff}else if(byteOffset<-0x80000000){byteOffset=-0x80000000}
byteOffset=+byteOffset
if(numberIsNaN(byteOffset)){byteOffset=dir?0:(buffer.length-1)}
if(byteOffset<0)byteOffset=buffer.length+byteOffset
if(byteOffset>=buffer.length){if(dir)return-1
else byteOffset=buffer.length-1}else if(byteOffset<0){if(dir)byteOffset=0
else return-1}
if(typeof val==='string'){val=Buffer.from(val,encoding)}
if(Buffer.isBuffer(val)){if(val.length===0){return-1}
return arrayIndexOf(buffer,val,byteOffset,encoding,dir)}else if(typeof val==='number'){val=val&0xFF
if(typeof Uint8Array.prototype.indexOf==='function'){if(dir){return Uint8Array.prototype.indexOf.call(buffer,val,byteOffset)}else{return Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset)}}
return arrayIndexOf(buffer,[val],byteOffset,encoding,dir)}
throw new TypeError('val must be string, number or Buffer')}
function arrayIndexOf(arr,val,byteOffset,encoding,dir){var indexSize=1
var arrLength=arr.length
var valLength=val.length
if(encoding!==undefined){encoding=String(encoding).toLowerCase()
if(encoding==='ucs2'||encoding==='ucs-2'||encoding==='utf16le'||encoding==='utf-16le'){if(arr.length<2||val.length<2){return-1}
indexSize=2
arrLength/=2
valLength/=2
byteOffset/=2}}
function read(buf,i){if(indexSize===1){return buf[i]}else{return buf.readUInt16BE(i*indexSize)}}
var i
if(dir){var foundIndex=-1
for(i=byteOffset;i<arrLength;i++){if(read(arr,i)===read(val,foundIndex===-1?0:i-foundIndex)){if(foundIndex===-1)foundIndex=i
if(i-foundIndex+1===valLength)return foundIndex*indexSize}else{if(foundIndex!==-1)i-=i-foundIndex
foundIndex=-1}}}else{if(byteOffset+valLength>arrLength)byteOffset=arrLength-valLength
for(i=byteOffset;i>=0;i--){var found=true
for(var j=0;j<valLength;j++){if(read(arr,i+j)!==read(val,j)){found=false
break}}
if(found)return i}}
return-1}
Buffer.prototype.includes=function includes(val,byteOffset,encoding){return this.indexOf(val,byteOffset,encoding)!==-1}
Buffer.prototype.indexOf=function indexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,true)}
Buffer.prototype.lastIndexOf=function lastIndexOf(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,false)}
function hexWrite(buf,string,offset,length){offset=Number(offset)||0
var remaining=buf.length-offset
if(!length){length=remaining}else{length=Number(length)
if(length>remaining){length=remaining}}
var strLen=string.length
if(length>strLen/2){length=strLen/2}
for(var i=0;i<length;++i){var parsed=parseInt(string.substr(i*2,2),16)
if(numberIsNaN(parsed))return i
buf[offset+i]=parsed}
return i}
function utf8Write(buf,string,offset,length){return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length)}
function asciiWrite(buf,string,offset,length){return blitBuffer(asciiToBytes(string),buf,offset,length)}
function latin1Write(buf,string,offset,length){return asciiWrite(buf,string,offset,length)}
function base64Write(buf,string,offset,length){return blitBuffer(base64ToBytes(string),buf,offset,length)}
function ucs2Write(buf,string,offset,length){return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length)}
Buffer.prototype.write=function write(string,offset,length,encoding){if(offset===undefined){encoding='utf8'
length=this.length
offset=0}else if(length===undefined&&typeof offset==='string'){encoding=offset
length=this.length
offset=0}else if(isFinite(offset)){offset=offset>>>0
if(isFinite(length)){length=length>>>0
if(encoding===undefined)encoding='utf8'}else{encoding=length
length=undefined}}else{throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported')}
var remaining=this.length-offset
if(length===undefined||length>remaining)length=remaining
if((string.length>0&&(length<0||offset<0))||offset>this.length){throw new RangeError('Attempt to write outside buffer bounds')}
if(!encoding)encoding='utf8'
var loweredCase=false
for(;;){switch(encoding){case 'hex':return hexWrite(this,string,offset,length)
case 'utf8':case 'utf-8':return utf8Write(this,string,offset,length)
case 'ascii':return asciiWrite(this,string,offset,length)
case 'latin1':case 'binary':return latin1Write(this,string,offset,length)
case 'base64':return base64Write(this,string,offset,length)
case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':return ucs2Write(this,string,offset,length)
default:if(loweredCase)throw new TypeError('Unknown encoding: '+encoding)
encoding=(''+encoding).toLowerCase()
loweredCase=true}}}
Buffer.prototype.toJSON=function toJSON(){return{type:'Buffer',data:Array.prototype.slice.call(this._arr||this,0)}}
function base64Slice(buf,start,end){if(start===0&&end===buf.length){return base64.fromByteArray(buf)}else{return base64.fromByteArray(buf.slice(start,end))}}
function utf8Slice(buf,start,end){end=Math.min(buf.length,end)
var res=[]
var i=start
while(i<end){var firstByte=buf[i]
var codePoint=null
var bytesPerSequence=(firstByte>0xEF)?4:(firstByte>0xDF)?3:(firstByte>0xBF)?2:1
if(i+bytesPerSequence<=end){var secondByte,thirdByte,fourthByte,tempCodePoint
switch(bytesPerSequence){case 1:if(firstByte<0x80){codePoint=firstByte}
break
case 2:secondByte=buf[i+1]
if((secondByte&0xC0)===0x80){tempCodePoint=(firstByte&0x1F)<<0x6|(secondByte&0x3F)
if(tempCodePoint>0x7F){codePoint=tempCodePoint}}
break
case 3:secondByte=buf[i+1]
thirdByte=buf[i+2]
if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0xC|(secondByte&0x3F)<<0x6|(thirdByte&0x3F)
if(tempCodePoint>0x7FF&&(tempCodePoint<0xD800||tempCodePoint>0xDFFF)){codePoint=tempCodePoint}}
break
case 4:secondByte=buf[i+1]
thirdByte=buf[i+2]
fourthByte=buf[i+3]
if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80&&(fourthByte&0xC0)===0x80){tempCodePoint=(firstByte&0xF)<<0x12|(secondByte&0x3F)<<0xC|(thirdByte&0x3F)<<0x6|(fourthByte&0x3F)
if(tempCodePoint>0xFFFF&&tempCodePoint<0x110000){codePoint=tempCodePoint}}}}
if(codePoint===null){codePoint=0xFFFD
bytesPerSequence=1}else if(codePoint>0xFFFF){codePoint-=0x10000
res.push(codePoint>>>10&0x3FF|0xD800)
codePoint=0xDC00|codePoint&0x3FF}
res.push(codePoint)
i+=bytesPerSequence}
return decodeCodePointsArray(res)}
var MAX_ARGUMENTS_LENGTH=0x1000
function decodeCodePointsArray(codePoints){var len=codePoints.length
if(len<=MAX_ARGUMENTS_LENGTH){return String.fromCharCode.apply(String,codePoints)}
var res=''
var i=0
while(i<len){res+=String.fromCharCode.apply(String,codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH))}
return res}
function asciiSlice(buf,start,end){var ret=''
end=Math.min(buf.length,end)
for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i]&0x7F)}
return ret}
function latin1Slice(buf,start,end){var ret=''
end=Math.min(buf.length,end)
for(var i=start;i<end;++i){ret+=String.fromCharCode(buf[i])}
return ret}
function hexSlice(buf,start,end){var len=buf.length
if(!start||start<0)start=0
if(!end||end<0||end>len)end=len
var out=''
for(var i=start;i<end;++i){out+=toHex(buf[i])}
return out}
function utf16leSlice(buf,start,end){var bytes=buf.slice(start,end)
var res=''
for(var i=0;i<bytes.length;i+=2){res+=String.fromCharCode(bytes[i]+(bytes[i+1]*256))}
return res}
Buffer.prototype.slice=function slice(start,end){var len=this.length
start=~~start
end=end===undefined?len:~~end
if(start<0){start+=len
if(start<0)start=0}else if(start>len){start=len}
if(end<0){end+=len
if(end<0)end=0}else if(end>len){end=len}
if(end<start)end=start
var newBuf=this.subarray(start,end)
newBuf.__proto__=Buffer.prototype
return newBuf}
function checkOffset(offset,ext,length){if((offset%1)!==0||offset<0)throw new RangeError('offset is not uint')
if(offset+ext>length)throw new RangeError('Trying to access beyond buffer length')}
Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var val=this[offset]
var mul=1
var i=0
while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul}
return val}
Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert){checkOffset(offset,byteLength,this.length)}
var val=this[offset+--byteLength]
var mul=1
while(byteLength>0&&(mul*=0x100)){val+=this[offset+--byteLength]*mul}
return val}
Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,1,this.length)
return this[offset]}
Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,2,this.length)
return this[offset]|(this[offset+1]<<8)}
Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,2,this.length)
return(this[offset]<<8)|this[offset+1]}
Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return((this[offset])|(this[offset+1]<<8)|(this[offset+2]<<16))+
(this[offset+3]*0x1000000)}
Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset]*0x1000000)+
((this[offset+1]<<16)|(this[offset+2]<<8)|this[offset+3])}
Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var val=this[offset]
var mul=1
var i=0
while(++i<byteLength&&(mul*=0x100)){val+=this[offset+i]*mul}
mul*=0x80
if(val>=mul)val-=Math.pow(2,8*byteLength)
return val}
Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var i=byteLength
var mul=1
var val=this[offset+--i]
while(i>0&&(mul*=0x100)){val+=this[offset+--i]*mul}
mul*=0x80
if(val>=mul)val-=Math.pow(2,8*byteLength)
return val}
Buffer.prototype.readInt8=function readInt8(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,1,this.length)
if(!(this[offset]&0x80))return(this[offset])
return((0xff-this[offset]+1)*-1)}
Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,2,this.length)
var val=this[offset]|(this[offset+1]<<8)
return(val&0x8000)?val|0xFFFF0000:val}
Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,2,this.length)
var val=this[offset+1]|(this[offset]<<8)
return(val&0x8000)?val|0xFFFF0000:val}
Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset])|(this[offset+1]<<8)|(this[offset+2]<<16)|(this[offset+3]<<24)}
Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset]<<24)|(this[offset+1]<<16)|(this[offset+2]<<8)|(this[offset+3])}
Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return ieee754.read(this,offset,true,23,4)}
Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,4,this.length)
return ieee754.read(this,offset,false,23,4)}
Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,8,this.length)
return ieee754.read(this,offset,true,52,8)}
Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){offset=offset>>>0
if(!noAssert)checkOffset(offset,8,this.length)
return ieee754.read(this,offset,false,52,8)}
function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw new TypeError('"buffer" argument must be a Buffer instance')
if(value>max||value<min)throw new RangeError('"value" argument is out of bounds')
if(offset+ext>buf.length)throw new RangeError('Index out of range')}
Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){value=+value
offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1
checkInt(this,value,offset,byteLength,maxBytes,0)}
var mul=1
var i=0
this[offset]=value&0xFF
while(++i<byteLength&&(mul*=0x100)){this[offset+i]=(value/mul)&0xFF}
return offset+byteLength}
Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){value=+value
offset=offset>>>0
byteLength=byteLength>>>0
if(!noAssert){var maxBytes=Math.pow(2,8*byteLength)-1
checkInt(this,value,offset,byteLength,maxBytes,0)}
var i=byteLength-1
var mul=1
this[offset+i]=value&0xFF
while(--i>=0&&(mul*=0x100)){this[offset+i]=(value/mul)&0xFF}
return offset+byteLength}
Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,1,0xff,0)
this[offset]=(value&0xff)
return offset+1}
Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,2,0xffff,0)
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
return offset+2}
Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,2,0xffff,0)
this[offset]=(value>>>8)
this[offset+1]=(value&0xff)
return offset+2}
Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0)
this[offset+3]=(value>>>24)
this[offset+2]=(value>>>16)
this[offset+1]=(value>>>8)
this[offset]=(value&0xff)
return offset+4}
Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0)
this[offset]=(value>>>24)
this[offset+1]=(value>>>16)
this[offset+2]=(value>>>8)
this[offset+3]=(value&0xff)
return offset+4}
Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){value=+value
offset=offset>>>0
if(!noAssert){var limit=Math.pow(2,(8*byteLength)-1)
checkInt(this,value,offset,byteLength,limit-1,-limit)}
var i=0
var mul=1
var sub=0
this[offset]=value&0xFF
while(++i<byteLength&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i-1]!==0){sub=1}
this[offset+i]=((value/mul)>>0)-sub&0xFF}
return offset+byteLength}
Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){value=+value
offset=offset>>>0
if(!noAssert){var limit=Math.pow(2,(8*byteLength)-1)
checkInt(this,value,offset,byteLength,limit-1,-limit)}
var i=byteLength-1
var mul=1
var sub=0
this[offset+i]=value&0xFF
while(--i>=0&&(mul*=0x100)){if(value<0&&sub===0&&this[offset+i+1]!==0){sub=1}
this[offset+i]=((value/mul)>>0)-sub&0xFF}
return offset+byteLength}
Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80)
if(value<0)value=0xff+value+1
this[offset]=(value&0xff)
return offset+1}
Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000)
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
return offset+2}
Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000)
this[offset]=(value>>>8)
this[offset+1]=(value&0xff)
return offset+2}
Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000)
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
this[offset+2]=(value>>>16)
this[offset+3]=(value>>>24)
return offset+4}
Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){value=+value
offset=offset>>>0
if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000)
if(value<0)value=0xffffffff+value+1
this[offset]=(value>>>24)
this[offset+1]=(value>>>16)
this[offset+2]=(value>>>8)
this[offset+3]=(value&0xff)
return offset+4}
function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length)throw new RangeError('Index out of range')
if(offset<0)throw new RangeError('Index out of range')}
function writeFloat(buf,value,offset,littleEndian,noAssert){value=+value
offset=offset>>>0
if(!noAssert){checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38)}
ieee754.write(buf,value,offset,littleEndian,23,4)
return offset+4}
Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){return writeFloat(this,value,offset,true,noAssert)}
Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){return writeFloat(this,value,offset,false,noAssert)}
function writeDouble(buf,value,offset,littleEndian,noAssert){value=+value
offset=offset>>>0
if(!noAssert){checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308)}
ieee754.write(buf,value,offset,littleEndian,52,8)
return offset+8}
Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){return writeDouble(this,value,offset,true,noAssert)}
Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){return writeDouble(this,value,offset,false,noAssert)}
Buffer.prototype.copy=function copy(target,targetStart,start,end){if(!Buffer.isBuffer(target))throw new TypeError('argument should be a Buffer')
if(!start)start=0
if(!end&&end!==0)end=this.length
if(targetStart>=target.length)targetStart=target.length
if(!targetStart)targetStart=0
if(end>0&&end<start)end=start
if(end===start)return 0
if(target.length===0||this.length===0)return 0
if(targetStart<0){throw new RangeError('targetStart out of bounds')}
if(start<0||start>=this.length)throw new RangeError('Index out of range')
if(end<0)throw new RangeError('sourceEnd out of bounds')
if(end>this.length)end=this.length
if(target.length-targetStart<end-start){end=target.length-targetStart+start}
var len=end-start
if(this===target&&typeof Uint8Array.prototype.copyWithin==='function'){this.copyWithin(targetStart,start,end)}else if(this===target&&start<targetStart&&targetStart<end){for(var i=len-1;i>=0;--i){target[i+targetStart]=this[i+start]}}else{Uint8Array.prototype.set.call(target,this.subarray(start,end),targetStart)}
return len}
Buffer.prototype.fill=function fill(val,start,end,encoding){if(typeof val==='string'){if(typeof start==='string'){encoding=start
start=0
end=this.length}else if(typeof end==='string'){encoding=end
end=this.length}
if(encoding!==undefined&&typeof encoding!=='string'){throw new TypeError('encoding must be a string')}
if(typeof encoding==='string'&&!Buffer.isEncoding(encoding)){throw new TypeError('Unknown encoding: '+encoding)}
if(val.length===1){var code=val.charCodeAt(0)
if((encoding==='utf8'&&code<128)||encoding==='latin1'){val=code}}}else if(typeof val==='number'){val=val&255}
if(start<0||this.length<start||this.length<end){throw new RangeError('Out of range index')}
if(end<=start){return this}
start=start>>>0
end=end===undefined?this.length:end>>>0
if(!val)val=0
var i
if(typeof val==='number'){for(i=start;i<end;++i){this[i]=val}}else{var bytes=Buffer.isBuffer(val)?val:new Buffer(val,encoding)
var len=bytes.length
if(len===0){throw new TypeError('The value "'+val+
'" is invalid for argument "value"')}
for(i=0;i<end-start;++i){this[i+start]=bytes[i%len]}}
return this}
var INVALID_BASE64_RE=/[^+/0-9A-Za-z-_]/g
function base64clean(str){str=str.split('=')[0]
str=str.trim().replace(INVALID_BASE64_RE,'')
if(str.length<2)return ''
while(str.length%4!==0){str=str+'='}
return str}
function toHex(n){if(n<16)return '0'+n.toString(16)
return n.toString(16)}
function utf8ToBytes(string,units){units=units||Infinity
var codePoint
var length=string.length
var leadSurrogate=null
var bytes=[]
for(var i=0;i<length;++i){codePoint=string.charCodeAt(i)
if(codePoint>0xD7FF&&codePoint<0xE000){if(!leadSurrogate){if(codePoint>0xDBFF){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
continue}else if(i+1===length){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
continue}
leadSurrogate=codePoint
continue}
if(codePoint<0xDC00){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
leadSurrogate=codePoint
continue}
codePoint=(leadSurrogate-0xD800<<10|codePoint-0xDC00)+0x10000}else if(leadSurrogate){if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)}
leadSurrogate=null
if(codePoint<0x80){if((units-=1)<0)break
bytes.push(codePoint)}else if(codePoint<0x800){if((units-=2)<0)break
bytes.push(codePoint>>0x6|0xC0,codePoint&0x3F|0x80)}else if(codePoint<0x10000){if((units-=3)<0)break
bytes.push(codePoint>>0xC|0xE0,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80)}else if(codePoint<0x110000){if((units-=4)<0)break
bytes.push(codePoint>>0x12|0xF0,codePoint>>0xC&0x3F|0x80,codePoint>>0x6&0x3F|0x80,codePoint&0x3F|0x80)}else{throw new Error('Invalid code point')}}
return bytes}
function asciiToBytes(str){var byteArray=[]
for(var i=0;i<str.length;++i){byteArray.push(str.charCodeAt(i)&0xFF)}
return byteArray}
function utf16leToBytes(str,units){var c,hi,lo
var byteArray=[]
for(var i=0;i<str.length;++i){if((units-=2)<0)break
c=str.charCodeAt(i)
hi=c>>8
lo=c%256
byteArray.push(lo)
byteArray.push(hi)}
return byteArray}
function base64ToBytes(str){return base64.toByteArray(base64clean(str))}
function blitBuffer(src,dst,offset,length){for(var i=0;i<length;++i){if((i+offset>=dst.length)||(i>=src.length))break
dst[i+offset]=src[i]}
return i}
function isArrayBuffer(obj){return obj instanceof ArrayBuffer||(obj!=null&&obj.constructor!=null&&obj.constructor.name==='ArrayBuffer'&&typeof obj.byteLength==='number')}
function numberIsNaN(obj){return obj!==obj}},{"base64-js":20,"ieee754":127}],23:[function(require,module,exports){require('../../modules/es6.string.iterator');require('../../modules/es6.array.from');module.exports=require('../../modules/_core').Array.from;},{"../../modules/_core":41,"../../modules/es6.array.from":110,"../../modules/es6.string.iterator":120}],24:[function(require,module,exports){require('../modules/web.dom.iterable');require('../modules/es6.string.iterator');module.exports=require('../modules/core.get-iterator');},{"../modules/core.get-iterator":109,"../modules/es6.string.iterator":120,"../modules/web.dom.iterable":126}],25:[function(require,module,exports){require('../../modules/es6.object.assign');module.exports=require('../../modules/_core').Object.assign;},{"../../modules/_core":41,"../../modules/es6.object.assign":112}],26:[function(require,module,exports){require('../../modules/es6.object.create');var $Object=require('../../modules/_core').Object;module.exports=function create(P,D){return $Object.create(P,D);};},{"../../modules/_core":41,"../../modules/es6.object.create":113}],27:[function(require,module,exports){require('../../modules/es6.object.define-property');var $Object=require('../../modules/_core').Object;module.exports=function defineProperty(it,key,desc){return $Object.defineProperty(it,key,desc);};},{"../../modules/_core":41,"../../modules/es6.object.define-property":114}],28:[function(require,module,exports){require('../../modules/es6.object.get-prototype-of');module.exports=require('../../modules/_core').Object.getPrototypeOf;},{"../../modules/_core":41,"../../modules/es6.object.get-prototype-of":115}],29:[function(require,module,exports){require('../../modules/es6.object.keys');module.exports=require('../../modules/_core').Object.keys;},{"../../modules/_core":41,"../../modules/es6.object.keys":116}],30:[function(require,module,exports){require('../../modules/es6.object.set-prototype-of');module.exports=require('../../modules/_core').Object.setPrototypeOf;},{"../../modules/_core":41,"../../modules/es6.object.set-prototype-of":117}],31:[function(require,module,exports){require('../modules/es6.object.to-string');require('../modules/es6.string.iterator');require('../modules/web.dom.iterable');require('../modules/es6.promise');require('../modules/es7.promise.finally');require('../modules/es7.promise.try');module.exports=require('../modules/_core').Promise;},{"../modules/_core":41,"../modules/es6.object.to-string":118,"../modules/es6.promise":119,"../modules/es6.string.iterator":120,"../modules/es7.promise.finally":122,"../modules/es7.promise.try":123,"../modules/web.dom.iterable":126}],32:[function(require,module,exports){require('../../modules/es6.symbol');require('../../modules/es6.object.to-string');require('../../modules/es7.symbol.async-iterator');require('../../modules/es7.symbol.observable');module.exports=require('../../modules/_core').Symbol;},{"../../modules/_core":41,"../../modules/es6.object.to-string":118,"../../modules/es6.symbol":121,"../../modules/es7.symbol.async-iterator":124,"../../modules/es7.symbol.observable":125}],33:[function(require,module,exports){require('../../modules/es6.string.iterator');require('../../modules/web.dom.iterable');module.exports=require('../../modules/_wks-ext').f('iterator');},{"../../modules/_wks-ext":106,"../../modules/es6.string.iterator":120,"../../modules/web.dom.iterable":126}],34:[function(require,module,exports){module.exports=function(it){if(typeof it!='function')throw TypeError(it+' is not a function!');return it;};},{}],35:[function(require,module,exports){module.exports=function(){};},{}],36:[function(require,module,exports){module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||(forbiddenField!==undefined&&forbiddenField in it)){throw TypeError(name+': incorrect invocation!');}return it;};},{}],37:[function(require,module,exports){var isObject=require('./_is-object');module.exports=function(it){if(!isObject(it))throw TypeError(it+' is not an object!');return it;};},{"./_is-object":61}],38:[function(require,module,exports){var toIObject=require('./_to-iobject');var toLength=require('./_to-length');var toAbsoluteIndex=require('./_to-absolute-index');module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIObject($this);var length=toLength(O.length);var index=toAbsoluteIndex(fromIndex,length);var value;if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];if(value!=value)return true;}else for(;length>index;index++)if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0;}return!IS_INCLUDES&&-1;};};},{"./_to-absolute-index":98,"./_to-iobject":100,"./_to-length":101}],39:[function(require,module,exports){var cof=require('./_cof');var TAG=require('./_wks')('toStringTag');var ARG=cof(function(){return arguments;}())=='Arguments';var tryGet=function(it,key){try{return it[key];}catch(e){}};module.exports=function(it){var O,T,B;return it===undefined?'Undefined':it===null?'Null':typeof(T=tryGet(O=Object(it),TAG))=='string'?T:ARG?cof(O):(B=cof(O))=='Object'&&typeof O.callee=='function'?'Arguments':B;};},{"./_cof":40,"./_wks":107}],40:[function(require,module,exports){var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1);};},{}],41:[function(require,module,exports){var core=module.exports={version:'2.5.5'};if(typeof __e=='number')__e=core;},{}],42:[function(require,module,exports){'use strict';var $defineProperty=require('./_object-dp');var createDesc=require('./_property-desc');module.exports=function(object,index,value){if(index in object)$defineProperty.f(object,index,createDesc(0,value));else object[index]=value;};},{"./_object-dp":74,"./_property-desc":87}],43:[function(require,module,exports){var aFunction=require('./_a-function');module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}
return function(){return fn.apply(that,arguments);};};},{"./_a-function":34}],44:[function(require,module,exports){module.exports=function(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it;};},{}],45:[function(require,module,exports){module.exports=!require('./_fails')(function(){return Object.defineProperty({},'a',{get:function(){return 7;}}).a!=7;});},{"./_fails":50}],46:[function(require,module,exports){var isObject=require('./_is-object');var document=require('./_global').document;var is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{};};},{"./_global":52,"./_is-object":61}],47:[function(require,module,exports){module.exports=('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf').split(',');},{}],48:[function(require,module,exports){var getKeys=require('./_object-keys');var gOPS=require('./_object-gops');var pIE=require('./_object-pie');module.exports=function(it){var result=getKeys(it);var getSymbols=gOPS.f;if(getSymbols){var symbols=getSymbols(it);var isEnum=pIE.f;var i=0;var key;while(symbols.length>i)if(isEnum.call(it,key=symbols[i++]))result.push(key);}return result;};},{"./_object-gops":79,"./_object-keys":82,"./_object-pie":83}],49:[function(require,module,exports){var global=require('./_global');var core=require('./_core');var ctx=require('./_ctx');var hide=require('./_hide');var has=require('./_has');var PROTOTYPE='prototype';var $export=function(type,name,source){var IS_FORCED=type&$export.F;var IS_GLOBAL=type&$export.G;var IS_STATIC=type&$export.S;var IS_PROTO=type&$export.P;var IS_BIND=type&$export.B;var IS_WRAP=type&$export.W;var exports=IS_GLOBAL?core:core[name]||(core[name]={});var expProto=exports[PROTOTYPE];var target=IS_GLOBAL?global:IS_STATIC?global[name]:(global[name]||{})[PROTOTYPE];var key,own,out;if(IS_GLOBAL)source=name;for(key in source){own=!IS_FORCED&&target&&target[key]!==undefined;if(own&&has(exports,key))continue;out=own?target[key]:source[key];exports[key]=IS_GLOBAL&&typeof target[key]!='function'?source[key]:IS_BIND&&own?ctx(out,global):IS_WRAP&&target[key]==out?(function(C){var F=function(a,b,c){if(this instanceof C){switch(arguments.length){case 0:return new C();case 1:return new C(a);case 2:return new C(a,b);}return new C(a,b,c);}return C.apply(this,arguments);};F[PROTOTYPE]=C[PROTOTYPE];return F;})(out):IS_PROTO&&typeof out=='function'?ctx(Function.call,out):out;if(IS_PROTO){(exports.virtual||(exports.virtual={}))[key]=out;if(type&$export.R&&expProto&&!expProto[key])hide(expProto,key,out);}}};$export.F=1;$export.G=2;$export.S=4;$export.P=8;$export.B=16;$export.W=32;$export.U=64;$export.R=128;module.exports=$export;},{"./_core":41,"./_ctx":43,"./_global":52,"./_has":53,"./_hide":54}],50:[function(require,module,exports){module.exports=function(exec){try{return!!exec();}catch(e){return true;}};},{}],51:[function(require,module,exports){var ctx=require('./_ctx');var call=require('./_iter-call');var isArrayIter=require('./_is-array-iter');var anObject=require('./_an-object');var toLength=require('./_to-length');var getIterFn=require('./core.get-iterator-method');var BREAK={};var RETURN={};var exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var iterFn=ITERATOR?function(){return iterable;}:getIterFn(iterable);var f=ctx(fn,that,entries?2:1);var index=0;var length,step,iterator,result;if(typeof iterFn!='function')throw TypeError(iterable+' is not iterable!');if(isArrayIter(iterFn))for(length=toLength(iterable.length);length>index;index++){result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]);if(result===BREAK||result===RETURN)return result;}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;){result=call(iterator,f,step.value,entries);if(result===BREAK||result===RETURN)return result;}};exports.BREAK=BREAK;exports.RETURN=RETURN;},{"./_an-object":37,"./_ctx":43,"./_is-array-iter":59,"./_iter-call":62,"./_to-length":101,"./core.get-iterator-method":108}],52:[function(require,module,exports){var global=module.exports=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self:Function('return this')();if(typeof __g=='number')__g=global;},{}],53:[function(require,module,exports){var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key);};},{}],54:[function(require,module,exports){var dP=require('./_object-dp');var createDesc=require('./_property-desc');module.exports=require('./_descriptors')?function(object,key,value){return dP.f(object,key,createDesc(1,value));}:function(object,key,value){object[key]=value;return object;};},{"./_descriptors":45,"./_object-dp":74,"./_property-desc":87}],55:[function(require,module,exports){var document=require('./_global').document;module.exports=document&&document.documentElement;},{"./_global":52}],56:[function(require,module,exports){module.exports=!require('./_descriptors')&&!require('./_fails')(function(){return Object.defineProperty(require('./_dom-create')('div'),'a',{get:function(){return 7;}}).a!=7;});},{"./_descriptors":45,"./_dom-create":46,"./_fails":50}],57:[function(require,module,exports){module.exports=function(fn,args,that){var un=that===undefined;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);}return fn.apply(that,args);};},{}],58:[function(require,module,exports){var cof=require('./_cof');module.exports=Object('z').propertyIsEnumerable(0)?Object:function(it){return cof(it)=='String'?it.split(''):Object(it);};},{"./_cof":40}],59:[function(require,module,exports){var Iterators=require('./_iterators');var ITERATOR=require('./_wks')('iterator');var ArrayProto=Array.prototype;module.exports=function(it){return it!==undefined&&(Iterators.Array===it||ArrayProto[ITERATOR]===it);};},{"./_iterators":67,"./_wks":107}],60:[function(require,module,exports){var cof=require('./_cof');module.exports=Array.isArray||function isArray(arg){return cof(arg)=='Array';};},{"./_cof":40}],61:[function(require,module,exports){module.exports=function(it){return typeof it==='object'?it!==null:typeof it==='function';};},{}],62:[function(require,module,exports){var anObject=require('./_an-object');module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value);}catch(e){var ret=iterator['return'];if(ret!==undefined)anObject(ret.call(iterator));throw e;}};},{"./_an-object":37}],63:[function(require,module,exports){'use strict';var create=require('./_object-create');var descriptor=require('./_property-desc');var setToStringTag=require('./_set-to-string-tag');var IteratorPrototype={};require('./_hide')(IteratorPrototype,require('./_wks')('iterator'),function(){return this;});module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)});setToStringTag(Constructor,NAME+' Iterator');};},{"./_hide":54,"./_object-create":73,"./_property-desc":87,"./_set-to-string-tag":92,"./_wks":107}],64:[function(require,module,exports){'use strict';var LIBRARY=require('./_library');var $export=require('./_export');var redefine=require('./_redefine');var hide=require('./_hide');var Iterators=require('./_iterators');var $iterCreate=require('./_iter-create');var setToStringTag=require('./_set-to-string-tag');var getPrototypeOf=require('./_object-gpo');var ITERATOR=require('./_wks')('iterator');var BUGGY=!([].keys&&'next'in[].keys());var FF_ITERATOR='@@iterator';var KEYS='keys';var VALUES='values';var returnThis=function(){return this;};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var getMethod=function(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function keys(){return new Constructor(this,kind);};case VALUES:return function values(){return new Constructor(this,kind);};}return function entries(){return new Constructor(this,kind);};};var TAG=NAME+' Iterator';var DEF_VALUES=DEFAULT==VALUES;var VALUES_BUG=false;var proto=Base.prototype;var $native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT];var $default=$native||getMethod(DEFAULT);var $entries=DEFAULT?!DEF_VALUES?$default:getMethod('entries'):undefined;var $anyNative=NAME=='Array'?proto.entries||$native:$native;var methods,key,IteratorPrototype;if($anyNative){IteratorPrototype=getPrototypeOf($anyNative.call(new Base()));if(IteratorPrototype!==Object.prototype&&IteratorPrototype.next){setToStringTag(IteratorPrototype,TAG,true);if(!LIBRARY&&typeof IteratorPrototype[ITERATOR]!='function')hide(IteratorPrototype,ITERATOR,returnThis);}}
if(DEF_VALUES&&$native&&$native.name!==VALUES){VALUES_BUG=true;$default=function values(){return $native.call(this);};}
if((!LIBRARY||FORCED)&&(BUGGY||VALUES_BUG||!proto[ITERATOR])){hide(proto,ITERATOR,$default);}
Iterators[NAME]=$default;Iterators[TAG]=returnThis;if(DEFAULT){methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries};if(FORCED)for(key in methods){if(!(key in proto))redefine(proto,key,methods[key]);}else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);}
return methods;};},{"./_export":49,"./_hide":54,"./_iter-create":63,"./_iterators":67,"./_library":68,"./_object-gpo":80,"./_redefine":89,"./_set-to-string-tag":92,"./_wks":107}],65:[function(require,module,exports){var ITERATOR=require('./_wks')('iterator');var SAFE_CLOSING=false;try{var riter=[7][ITERATOR]();riter['return']=function(){SAFE_CLOSING=true;};Array.from(riter,function(){throw 2;});}catch(e){}
module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return false;var safe=false;try{var arr=[7];var iter=arr[ITERATOR]();iter.next=function(){return{done:safe=true};};arr[ITERATOR]=function(){return iter;};exec(arr);}catch(e){}
return safe;};},{"./_wks":107}],66:[function(require,module,exports){module.exports=function(done,value){return{value:value,done:!!done};};},{}],67:[function(require,module,exports){module.exports={};},{}],68:[function(require,module,exports){module.exports=true;},{}],69:[function(require,module,exports){var META=require('./_uid')('meta');var isObject=require('./_is-object');var has=require('./_has');var setDesc=require('./_object-dp').f;var id=0;var isExtensible=Object.isExtensible||function(){return true;};var FREEZE=!require('./_fails')(function(){return isExtensible(Object.preventExtensions({}));});var setMeta=function(it){setDesc(it,META,{value:{i:'O'+ ++id,w:{}}});};var fastKey=function(it,create){if(!isObject(it))return typeof it=='symbol'?it:(typeof it=='string'?'S':'P')+it;if(!has(it,META)){if(!isExtensible(it))return 'F';if(!create)return 'E';setMeta(it);}return it[META].i;};var getWeak=function(it,create){if(!has(it,META)){if(!isExtensible(it))return true;if(!create)return false;setMeta(it);}return it[META].w;};var onFreeze=function(it){if(FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META))setMeta(it);return it;};var meta=module.exports={KEY:META,NEED:false,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze};},{"./_fails":50,"./_has":53,"./_is-object":61,"./_object-dp":74,"./_uid":104}],70:[function(require,module,exports){var global=require('./_global');var macrotask=require('./_task').set;var Observer=global.MutationObserver||global.WebKitMutationObserver;var process=global.process;var Promise=global.Promise;var isNode=require('./_cof')(process)=='process';module.exports=function(){var head,last,notify;var flush=function(){var parent,fn;if(isNode&&(parent=process.domain))parent.exit();while(head){fn=head.fn;head=head.next;try{fn();}catch(e){if(head)notify();else last=undefined;throw e;}}last=undefined;if(parent)parent.enter();};if(isNode){notify=function(){process.nextTick(flush);};}else if(Observer&&!(global.navigator&&global.navigator.standalone)){var toggle=true;var node=document.createTextNode('');new Observer(flush).observe(node,{characterData:true});notify=function(){node.data=toggle=!toggle;};}else if(Promise&&Promise.resolve){var promise=Promise.resolve();notify=function(){promise.then(flush);};}else{notify=function(){macrotask.call(global,flush);};}
return function(fn){var task={fn:fn,next:undefined};if(last)last.next=task;if(!head){head=task;notify();}last=task;};};},{"./_cof":40,"./_global":52,"./_task":97}],71:[function(require,module,exports){'use strict';var aFunction=require('./_a-function');function PromiseCapability(C){var resolve,reject;this.promise=new C(function($$resolve,$$reject){if(resolve!==undefined||reject!==undefined)throw TypeError('Bad Promise constructor');resolve=$$resolve;reject=$$reject;});this.resolve=aFunction(resolve);this.reject=aFunction(reject);}
module.exports.f=function(C){return new PromiseCapability(C);};},{"./_a-function":34}],72:[function(require,module,exports){'use strict';var getKeys=require('./_object-keys');var gOPS=require('./_object-gops');var pIE=require('./_object-pie');var toObject=require('./_to-object');var IObject=require('./_iobject');var $assign=Object.assign;module.exports=!$assign||require('./_fails')(function(){var A={};var B={};var S=Symbol();var K='abcdefghijklmnopqrst';A[S]=7;K.split('').forEach(function(k){B[k]=k;});return $assign({},A)[S]!=7||Object.keys($assign({},B)).join('')!=K;})?function assign(target,source){var T=toObject(target);var aLen=arguments.length;var index=1;var getSymbols=gOPS.f;var isEnum=pIE.f;while(aLen>index){var S=IObject(arguments[index++]);var keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S);var length=keys.length;var j=0;var key;while(length>j)if(isEnum.call(S,key=keys[j++]))T[key]=S[key];}return T;}:$assign;},{"./_fails":50,"./_iobject":58,"./_object-gops":79,"./_object-keys":82,"./_object-pie":83,"./_to-object":102}],73:[function(require,module,exports){var anObject=require('./_an-object');var dPs=require('./_object-dps');var enumBugKeys=require('./_enum-bug-keys');var IE_PROTO=require('./_shared-key')('IE_PROTO');var Empty=function(){};var PROTOTYPE='prototype';var createDict=function(){var iframe=require('./_dom-create')('iframe');var i=enumBugKeys.length;var lt='<';var gt='>';var iframeDocument;iframe.style.display='none';require('./_html').appendChild(iframe);iframe.src='javascript:';iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(lt+'script'+gt+'document.F=Object'+lt+'/script'+gt);iframeDocument.close();createDict=iframeDocument.F;while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];return createDict();};module.exports=Object.create||function create(O,Properties){var result;if(O!==null){Empty[PROTOTYPE]=anObject(O);result=new Empty();Empty[PROTOTYPE]=null;result[IE_PROTO]=O;}else result=createDict();return Properties===undefined?result:dPs(result,Properties);};},{"./_an-object":37,"./_dom-create":46,"./_enum-bug-keys":47,"./_html":55,"./_object-dps":75,"./_shared-key":93}],74:[function(require,module,exports){var anObject=require('./_an-object');var IE8_DOM_DEFINE=require('./_ie8-dom-define');var toPrimitive=require('./_to-primitive');var dP=Object.defineProperty;exports.f=require('./_descriptors')?Object.defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,true);anObject(Attributes);if(IE8_DOM_DEFINE)try{return dP(O,P,Attributes);}catch(e){}
if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported!');if('value'in Attributes)O[P]=Attributes.value;return O;};},{"./_an-object":37,"./_descriptors":45,"./_ie8-dom-define":56,"./_to-primitive":103}],75:[function(require,module,exports){var dP=require('./_object-dp');var anObject=require('./_an-object');var getKeys=require('./_object-keys');module.exports=require('./_descriptors')?Object.defineProperties:function defineProperties(O,Properties){anObject(O);var keys=getKeys(Properties);var length=keys.length;var i=0;var P;while(length>i)dP.f(O,P=keys[i++],Properties[P]);return O;};},{"./_an-object":37,"./_descriptors":45,"./_object-dp":74,"./_object-keys":82}],76:[function(require,module,exports){var pIE=require('./_object-pie');var createDesc=require('./_property-desc');var toIObject=require('./_to-iobject');var toPrimitive=require('./_to-primitive');var has=require('./_has');var IE8_DOM_DEFINE=require('./_ie8-dom-define');var gOPD=Object.getOwnPropertyDescriptor;exports.f=require('./_descriptors')?gOPD:function getOwnPropertyDescriptor(O,P){O=toIObject(O);P=toPrimitive(P,true);if(IE8_DOM_DEFINE)try{return gOPD(O,P);}catch(e){}
if(has(O,P))return createDesc(!pIE.f.call(O,P),O[P]);};},{"./_descriptors":45,"./_has":53,"./_ie8-dom-define":56,"./_object-pie":83,"./_property-desc":87,"./_to-iobject":100,"./_to-primitive":103}],77:[function(require,module,exports){var toIObject=require('./_to-iobject');var gOPN=require('./_object-gopn').f;var toString={}.toString;var windowNames=typeof window=='object'&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function(it){try{return gOPN(it);}catch(e){return windowNames.slice();}};module.exports.f=function getOwnPropertyNames(it){return windowNames&&toString.call(it)=='[object Window]'?getWindowNames(it):gOPN(toIObject(it));};},{"./_object-gopn":78,"./_to-iobject":100}],78:[function(require,module,exports){var $keys=require('./_object-keys-internal');var hiddenKeys=require('./_enum-bug-keys').concat('length','prototype');exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return $keys(O,hiddenKeys);};},{"./_enum-bug-keys":47,"./_object-keys-internal":81}],79:[function(require,module,exports){exports.f=Object.getOwnPropertySymbols;},{}],80:[function(require,module,exports){var has=require('./_has');var toObject=require('./_to-object');var IE_PROTO=require('./_shared-key')('IE_PROTO');var ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){O=toObject(O);if(has(O,IE_PROTO))return O[IE_PROTO];if(typeof O.constructor=='function'&&O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectProto:null;};},{"./_has":53,"./_shared-key":93,"./_to-object":102}],81:[function(require,module,exports){var has=require('./_has');var toIObject=require('./_to-iobject');var arrayIndexOf=require('./_array-includes')(false);var IE_PROTO=require('./_shared-key')('IE_PROTO');module.exports=function(object,names){var O=toIObject(object);var i=0;var result=[];var key;for(key in O)if(key!=IE_PROTO)has(O,key)&&result.push(key);while(names.length>i)if(has(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key);}
return result;};},{"./_array-includes":38,"./_has":53,"./_shared-key":93,"./_to-iobject":100}],82:[function(require,module,exports){var $keys=require('./_object-keys-internal');var enumBugKeys=require('./_enum-bug-keys');module.exports=Object.keys||function keys(O){return $keys(O,enumBugKeys);};},{"./_enum-bug-keys":47,"./_object-keys-internal":81}],83:[function(require,module,exports){exports.f={}.propertyIsEnumerable;},{}],84:[function(require,module,exports){var $export=require('./_export');var core=require('./_core');var fails=require('./_fails');module.exports=function(KEY,exec){var fn=(core.Object||{})[KEY]||Object[KEY];var exp={};exp[KEY]=exec(fn);$export($export.S+$export.F*fails(function(){fn(1);}),'Object',exp);};},{"./_core":41,"./_export":49,"./_fails":50}],85:[function(require,module,exports){module.exports=function(exec){try{return{e:false,v:exec()};}catch(e){return{e:true,v:e};}};},{}],86:[function(require,module,exports){var anObject=require('./_an-object');var isObject=require('./_is-object');var newPromiseCapability=require('./_new-promise-capability');module.exports=function(C,x){anObject(C);if(isObject(x)&&x.constructor===C)return x;var promiseCapability=newPromiseCapability.f(C);var resolve=promiseCapability.resolve;resolve(x);return promiseCapability.promise;};},{"./_an-object":37,"./_is-object":61,"./_new-promise-capability":71}],87:[function(require,module,exports){module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};},{}],88:[function(require,module,exports){var hide=require('./_hide');module.exports=function(target,src,safe){for(var key in src){if(safe&&target[key])target[key]=src[key];else hide(target,key,src[key]);}return target;};},{"./_hide":54}],89:[function(require,module,exports){module.exports=require('./_hide');},{"./_hide":54}],90:[function(require,module,exports){var isObject=require('./_is-object');var anObject=require('./_an-object');var check=function(O,proto){anObject(O);if(!isObject(proto)&&proto!==null)throw TypeError(proto+": can't set as prototype!");};module.exports={set:Object.setPrototypeOf||('__proto__'in{}?function(test,buggy,set){try{set=require('./_ctx')(Function.call,require('./_object-gopd').f(Object.prototype,'__proto__').set,2);set(test,[]);buggy=!(test instanceof Array);}catch(e){buggy=true;}
return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__=proto;else set(O,proto);return O;};}({},false):undefined),check:check};},{"./_an-object":37,"./_ctx":43,"./_is-object":61,"./_object-gopd":76}],91:[function(require,module,exports){'use strict';var global=require('./_global');var core=require('./_core');var dP=require('./_object-dp');var DESCRIPTORS=require('./_descriptors');var SPECIES=require('./_wks')('species');module.exports=function(KEY){var C=typeof core[KEY]=='function'?core[KEY]:global[KEY];if(DESCRIPTORS&&C&&!C[SPECIES])dP.f(C,SPECIES,{configurable:true,get:function(){return this;}});};},{"./_core":41,"./_descriptors":45,"./_global":52,"./_object-dp":74,"./_wks":107}],92:[function(require,module,exports){var def=require('./_object-dp').f;var has=require('./_has');var TAG=require('./_wks')('toStringTag');module.exports=function(it,tag,stat){if(it&&!has(it=stat?it:it.prototype,TAG))def(it,TAG,{configurable:true,value:tag});};},{"./_has":53,"./_object-dp":74,"./_wks":107}],93:[function(require,module,exports){var shared=require('./_shared')('keys');var uid=require('./_uid');module.exports=function(key){return shared[key]||(shared[key]=uid(key));};},{"./_shared":94,"./_uid":104}],94:[function(require,module,exports){var global=require('./_global');var SHARED='__core-js_shared__';var store=global[SHARED]||(global[SHARED]={});module.exports=function(key){return store[key]||(store[key]={});};},{"./_global":52}],95:[function(require,module,exports){var anObject=require('./_an-object');var aFunction=require('./_a-function');var SPECIES=require('./_wks')('species');module.exports=function(O,D){var C=anObject(O).constructor;var S;return C===undefined||(S=anObject(C)[SPECIES])==undefined?D:aFunction(S);};},{"./_a-function":34,"./_an-object":37,"./_wks":107}],96:[function(require,module,exports){var toInteger=require('./_to-integer');var defined=require('./_defined');module.exports=function(TO_STRING){return function(that,pos){var s=String(defined(that));var i=toInteger(pos);var l=s.length;var a,b;if(i<0||i>=l)return TO_STRING?'':undefined;a=s.charCodeAt(i);return a<0xd800||a>0xdbff||i+1===l||(b=s.charCodeAt(i+1))<0xdc00||b>0xdfff?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-0xd800<<10)+(b-0xdc00)+0x10000;};};},{"./_defined":44,"./_to-integer":99}],97:[function(require,module,exports){var ctx=require('./_ctx');var invoke=require('./_invoke');var html=require('./_html');var cel=require('./_dom-create');var global=require('./_global');var process=global.process;var setTask=global.setImmediate;var clearTask=global.clearImmediate;var MessageChannel=global.MessageChannel;var Dispatch=global.Dispatch;var counter=0;var queue={};var ONREADYSTATECHANGE='onreadystatechange';var defer,channel,port;var run=function(){var id=+this;if(queue.hasOwnProperty(id)){var fn=queue[id];delete queue[id];fn();}};var listener=function(event){run.call(event.data);};if(!setTask||!clearTask){setTask=function setImmediate(fn){var args=[];var i=1;while(arguments.length>i)args.push(arguments[i++]);queue[++counter]=function(){invoke(typeof fn=='function'?fn:Function(fn),args);};defer(counter);return counter;};clearTask=function clearImmediate(id){delete queue[id];};if(require('./_cof')(process)=='process'){defer=function(id){process.nextTick(ctx(run,id,1));};}else if(Dispatch&&Dispatch.now){defer=function(id){Dispatch.now(ctx(run,id,1));};}else if(MessageChannel){channel=new MessageChannel();port=channel.port2;channel.port1.onmessage=listener;defer=ctx(port.postMessage,port,1);}else if(global.addEventListener&&typeof postMessage=='function'&&!global.importScripts){defer=function(id){global.postMessage(id+'','*');};global.addEventListener('message',listener,false);}else if(ONREADYSTATECHANGE in cel('script')){defer=function(id){html.appendChild(cel('script'))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run.call(id);};};}else{defer=function(id){setTimeout(ctx(run,id,1),0);};}}
module.exports={set:setTask,clear:clearTask};},{"./_cof":40,"./_ctx":43,"./_dom-create":46,"./_global":52,"./_html":55,"./_invoke":57}],98:[function(require,module,exports){var toInteger=require('./_to-integer');var max=Math.max;var min=Math.min;module.exports=function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length);};},{"./_to-integer":99}],99:[function(require,module,exports){var ceil=Math.ceil;var floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it);};},{}],100:[function(require,module,exports){var IObject=require('./_iobject');var defined=require('./_defined');module.exports=function(it){return IObject(defined(it));};},{"./_defined":44,"./_iobject":58}],101:[function(require,module,exports){var toInteger=require('./_to-integer');var min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),0x1fffffffffffff):0;};},{"./_to-integer":99}],102:[function(require,module,exports){var defined=require('./_defined');module.exports=function(it){return Object(defined(it));};},{"./_defined":44}],103:[function(require,module,exports){var isObject=require('./_is-object');module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=='function'&&!isObject(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value");};},{"./_is-object":61}],104:[function(require,module,exports){var id=0;var px=Math.random();module.exports=function(key){return 'Symbol('.concat(key===undefined?'':key,')_',(++id+px).toString(36));};},{}],105:[function(require,module,exports){var global=require('./_global');var core=require('./_core');var LIBRARY=require('./_library');var wksExt=require('./_wks-ext');var defineProperty=require('./_object-dp').f;module.exports=function(name){var $Symbol=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{});if(name.charAt(0)!='_'&&!(name in $Symbol))defineProperty($Symbol,name,{value:wksExt.f(name)});};},{"./_core":41,"./_global":52,"./_library":68,"./_object-dp":74,"./_wks-ext":106}],106:[function(require,module,exports){exports.f=require('./_wks');},{"./_wks":107}],107:[function(require,module,exports){var store=require('./_shared')('wks');var uid=require('./_uid');var Symbol=require('./_global').Symbol;var USE_SYMBOL=typeof Symbol=='function';var $exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&Symbol[name]||(USE_SYMBOL?Symbol:uid)('Symbol.'+name));};$exports.store=store;},{"./_global":52,"./_shared":94,"./_uid":104}],108:[function(require,module,exports){var classof=require('./_classof');var ITERATOR=require('./_wks')('iterator');var Iterators=require('./_iterators');module.exports=require('./_core').getIteratorMethod=function(it){if(it!=undefined)return it[ITERATOR]||it['@@iterator']||Iterators[classof(it)];};},{"./_classof":39,"./_core":41,"./_iterators":67,"./_wks":107}],109:[function(require,module,exports){var anObject=require('./_an-object');var get=require('./core.get-iterator-method');module.exports=require('./_core').getIterator=function(it){var iterFn=get(it);if(typeof iterFn!='function')throw TypeError(it+' is not iterable!');return anObject(iterFn.call(it));};},{"./_an-object":37,"./_core":41,"./core.get-iterator-method":108}],110:[function(require,module,exports){'use strict';var ctx=require('./_ctx');var $export=require('./_export');var toObject=require('./_to-object');var call=require('./_iter-call');var isArrayIter=require('./_is-array-iter');var toLength=require('./_to-length');var createProperty=require('./_create-property');var getIterFn=require('./core.get-iterator-method');$export($export.S+$export.F*!require('./_iter-detect')(function(iter){Array.from(iter);}),'Array',{from:function from(arrayLike){var O=toObject(arrayLike);var C=typeof this=='function'?this:Array;var aLen=arguments.length;var mapfn=aLen>1?arguments[1]:undefined;var mapping=mapfn!==undefined;var index=0;var iterFn=getIterFn(O);var length,result,step,iterator;if(mapping)mapfn=ctx(mapfn,aLen>2?arguments[2]:undefined,2);if(iterFn!=undefined&&!(C==Array&&isArrayIter(iterFn))){for(iterator=iterFn.call(O),result=new C();!(step=iterator.next()).done;index++){createProperty(result,index,mapping?call(iterator,mapfn,[step.value,index],true):step.value);}}else{length=toLength(O.length);for(result=new C(length);length>index;index++){createProperty(result,index,mapping?mapfn(O[index],index):O[index]);}}
result.length=index;return result;}});},{"./_create-property":42,"./_ctx":43,"./_export":49,"./_is-array-iter":59,"./_iter-call":62,"./_iter-detect":65,"./_to-length":101,"./_to-object":102,"./core.get-iterator-method":108}],111:[function(require,module,exports){'use strict';var addToUnscopables=require('./_add-to-unscopables');var step=require('./_iter-step');var Iterators=require('./_iterators');var toIObject=require('./_to-iobject');module.exports=require('./_iter-define')(Array,'Array',function(iterated,kind){this._t=toIObject(iterated);this._i=0;this._k=kind;},function(){var O=this._t;var kind=this._k;var index=this._i++;if(!O||index>=O.length){this._t=undefined;return step(1);}
if(kind=='keys')return step(0,index);if(kind=='values')return step(0,O[index]);return step(0,[index,O[index]]);},'values');Iterators.Arguments=Iterators.Array;addToUnscopables('keys');addToUnscopables('values');addToUnscopables('entries');},{"./_add-to-unscopables":35,"./_iter-define":64,"./_iter-step":66,"./_iterators":67,"./_to-iobject":100}],112:[function(require,module,exports){var $export=require('./_export');$export($export.S+$export.F,'Object',{assign:require('./_object-assign')});},{"./_export":49,"./_object-assign":72}],113:[function(require,module,exports){var $export=require('./_export');$export($export.S,'Object',{create:require('./_object-create')});},{"./_export":49,"./_object-create":73}],114:[function(require,module,exports){var $export=require('./_export');$export($export.S+$export.F*!require('./_descriptors'),'Object',{defineProperty:require('./_object-dp').f});},{"./_descriptors":45,"./_export":49,"./_object-dp":74}],115:[function(require,module,exports){var toObject=require('./_to-object');var $getPrototypeOf=require('./_object-gpo');require('./_object-sap')('getPrototypeOf',function(){return function getPrototypeOf(it){return $getPrototypeOf(toObject(it));};});},{"./_object-gpo":80,"./_object-sap":84,"./_to-object":102}],116:[function(require,module,exports){var toObject=require('./_to-object');var $keys=require('./_object-keys');require('./_object-sap')('keys',function(){return function keys(it){return $keys(toObject(it));};});},{"./_object-keys":82,"./_object-sap":84,"./_to-object":102}],117:[function(require,module,exports){var $export=require('./_export');$export($export.S,'Object',{setPrototypeOf:require('./_set-proto').set});},{"./_export":49,"./_set-proto":90}],118:[function(require,module,exports){},{}],119:[function(require,module,exports){'use strict';var LIBRARY=require('./_library');var global=require('./_global');var ctx=require('./_ctx');var classof=require('./_classof');var $export=require('./_export');var isObject=require('./_is-object');var aFunction=require('./_a-function');var anInstance=require('./_an-instance');var forOf=require('./_for-of');var speciesConstructor=require('./_species-constructor');var task=require('./_task').set;var microtask=require('./_microtask')();var newPromiseCapabilityModule=require('./_new-promise-capability');var perform=require('./_perform');var promiseResolve=require('./_promise-resolve');var PROMISE='Promise';var TypeError=global.TypeError;var process=global.process;var $Promise=global[PROMISE];var isNode=classof(process)=='process';var empty=function(){};var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper;var newPromiseCapability=newGenericPromiseCapability=newPromiseCapabilityModule.f;var USE_NATIVE=!!function(){try{var promise=$Promise.resolve(1);var FakePromise=(promise.constructor={})[require('./_wks')('species')]=function(exec){exec(empty,empty);};return(isNode||typeof PromiseRejectionEvent=='function')&&promise.then(empty)instanceof FakePromise;}catch(e){}}();var isThenable=function(it){var then;return isObject(it)&&typeof(then=it.then)=='function'?then:false;};var notify=function(promise,isReject){if(promise._n)return;promise._n=true;var chain=promise._c;microtask(function(){var value=promise._v;var ok=promise._s==1;var i=0;var run=function(reaction){var handler=ok?reaction.ok:reaction.fail;var resolve=reaction.resolve;var reject=reaction.reject;var domain=reaction.domain;var result,then,exited;try{if(handler){if(!ok){if(promise._h==2)onHandleUnhandled(promise);promise._h=1;}
if(handler===true)result=value;else{if(domain)domain.enter();result=handler(value);if(domain){domain.exit();exited=true;}}
if(result===reaction.promise){reject(TypeError('Promise-chain cycle'));}else if(then=isThenable(result)){then.call(result,resolve,reject);}else resolve(result);}else reject(value);}catch(e){if(domain&&!exited)domain.exit();reject(e);}};while(chain.length>i)run(chain[i++]);promise._c=[];promise._n=false;if(isReject&&!promise._h)onUnhandled(promise);});};var onUnhandled=function(promise){task.call(global,function(){var value=promise._v;var unhandled=isUnhandled(promise);var result,handler,console;if(unhandled){result=perform(function(){if(isNode){process.emit('unhandledRejection',value,promise);}else if(handler=global.onunhandledrejection){handler({promise:promise,reason:value});}else if((console=global.console)&&console.error){console.error('Unhandled promise rejection',value);}});promise._h=isNode||isUnhandled(promise)?2:1;}promise._a=undefined;if(unhandled&&result.e)throw result.v;});};var isUnhandled=function(promise){return promise._h!==1&&(promise._a||promise._c).length===0;};var onHandleUnhandled=function(promise){task.call(global,function(){var handler;if(isNode){process.emit('rejectionHandled',promise);}else if(handler=global.onrejectionhandled){handler({promise:promise,reason:promise._v});}});};var $reject=function(value){var promise=this;if(promise._d)return;promise._d=true;promise=promise._w||promise;promise._v=value;promise._s=2;if(!promise._a)promise._a=promise._c.slice();notify(promise,true);};var $resolve=function(value){var promise=this;var then;if(promise._d)return;promise._d=true;promise=promise._w||promise;try{if(promise===value)throw TypeError("Promise can't be resolved itself");if(then=isThenable(value)){microtask(function(){var wrapper={_w:promise,_d:false};try{then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1));}catch(e){$reject.call(wrapper,e);}});}else{promise._v=value;promise._s=1;notify(promise,false);}}catch(e){$reject.call({_w:promise,_d:false},e);}};if(!USE_NATIVE){$Promise=function Promise(executor){anInstance(this,$Promise,PROMISE,'_h');aFunction(executor);Internal.call(this);try{executor(ctx($resolve,this,1),ctx($reject,this,1));}catch(err){$reject.call(this,err);}};Internal=function Promise(executor){this._c=[];this._a=undefined;this._s=0;this._d=false;this._v=undefined;this._h=0;this._n=false;};Internal.prototype=require('./_redefine-all')($Promise.prototype,{then:function then(onFulfilled,onRejected){var reaction=newPromiseCapability(speciesConstructor(this,$Promise));reaction.ok=typeof onFulfilled=='function'?onFulfilled:true;reaction.fail=typeof onRejected=='function'&&onRejected;reaction.domain=isNode?process.domain:undefined;this._c.push(reaction);if(this._a)this._a.push(reaction);if(this._s)notify(this,false);return reaction.promise;},'catch':function(onRejected){return this.then(undefined,onRejected);}});OwnPromiseCapability=function(){var promise=new Internal();this.promise=promise;this.resolve=ctx($resolve,promise,1);this.reject=ctx($reject,promise,1);};newPromiseCapabilityModule.f=newPromiseCapability=function(C){return C===$Promise||C===Wrapper?new OwnPromiseCapability(C):newGenericPromiseCapability(C);};}
$export($export.G+$export.W+$export.F*!USE_NATIVE,{Promise:$Promise});require('./_set-to-string-tag')($Promise,PROMISE);require('./_set-species')(PROMISE);Wrapper=require('./_core')[PROMISE];$export($export.S+$export.F*!USE_NATIVE,PROMISE,{reject:function reject(r){var capability=newPromiseCapability(this);var $$reject=capability.reject;$$reject(r);return capability.promise;}});$export($export.S+$export.F*(LIBRARY||!USE_NATIVE),PROMISE,{resolve:function resolve(x){return promiseResolve(LIBRARY&&this===Wrapper?$Promise:this,x);}});$export($export.S+$export.F*!(USE_NATIVE&&require('./_iter-detect')(function(iter){$Promise.all(iter)['catch'](empty);})),PROMISE,{all:function all(iterable){var C=this;var capability=newPromiseCapability(C);var resolve=capability.resolve;var reject=capability.reject;var result=perform(function(){var values=[];var index=0;var remaining=1;forOf(iterable,false,function(promise){var $index=index++;var alreadyCalled=false;values.push(undefined);remaining++;C.resolve(promise).then(function(value){if(alreadyCalled)return;alreadyCalled=true;values[$index]=value;--remaining||resolve(values);},reject);});--remaining||resolve(values);});if(result.e)reject(result.v);return capability.promise;},race:function race(iterable){var C=this;var capability=newPromiseCapability(C);var reject=capability.reject;var result=perform(function(){forOf(iterable,false,function(promise){C.resolve(promise).then(capability.resolve,reject);});});if(result.e)reject(result.v);return capability.promise;}});},{"./_a-function":34,"./_an-instance":36,"./_classof":39,"./_core":41,"./_ctx":43,"./_export":49,"./_for-of":51,"./_global":52,"./_is-object":61,"./_iter-detect":65,"./_library":68,"./_microtask":70,"./_new-promise-capability":71,"./_perform":85,"./_promise-resolve":86,"./_redefine-all":88,"./_set-species":91,"./_set-to-string-tag":92,"./_species-constructor":95,"./_task":97,"./_wks":107}],120:[function(require,module,exports){'use strict';var $at=require('./_string-at')(true);require('./_iter-define')(String,'String',function(iterated){this._t=String(iterated);this._i=0;},function(){var O=this._t;var index=this._i;var point;if(index>=O.length)return{value:undefined,done:true};point=$at(O,index);this._i+=point.length;return{value:point,done:false};});},{"./_iter-define":64,"./_string-at":96}],121:[function(require,module,exports){'use strict';var global=require('./_global');var has=require('./_has');var DESCRIPTORS=require('./_descriptors');var $export=require('./_export');var redefine=require('./_redefine');var META=require('./_meta').KEY;var $fails=require('./_fails');var shared=require('./_shared');var setToStringTag=require('./_set-to-string-tag');var uid=require('./_uid');var wks=require('./_wks');var wksExt=require('./_wks-ext');var wksDefine=require('./_wks-define');var enumKeys=require('./_enum-keys');var isArray=require('./_is-array');var anObject=require('./_an-object');var isObject=require('./_is-object');var toIObject=require('./_to-iobject');var toPrimitive=require('./_to-primitive');var createDesc=require('./_property-desc');var _create=require('./_object-create');var gOPNExt=require('./_object-gopn-ext');var $GOPD=require('./_object-gopd');var $DP=require('./_object-dp');var $keys=require('./_object-keys');var gOPD=$GOPD.f;var dP=$DP.f;var gOPN=gOPNExt.f;var $Symbol=global.Symbol;var $JSON=global.JSON;var _stringify=$JSON&&$JSON.stringify;var PROTOTYPE='prototype';var HIDDEN=wks('_hidden');var TO_PRIMITIVE=wks('toPrimitive');var isEnum={}.propertyIsEnumerable;var SymbolRegistry=shared('symbol-registry');var AllSymbols=shared('symbols');var OPSymbols=shared('op-symbols');var ObjectProto=Object[PROTOTYPE];var USE_NATIVE=typeof $Symbol=='function';var QObject=global.QObject;var setter=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild;var setSymbolDesc=DESCRIPTORS&&$fails(function(){return _create(dP({},'a',{get:function(){return dP(this,'a',{value:7}).a;}})).a!=7;})?function(it,key,D){var protoDesc=gOPD(ObjectProto,key);if(protoDesc)delete ObjectProto[key];dP(it,key,D);if(protoDesc&&it!==ObjectProto)dP(ObjectProto,key,protoDesc);}:dP;var wrap=function(tag){var sym=AllSymbols[tag]=_create($Symbol[PROTOTYPE]);sym._k=tag;return sym;};var isSymbol=USE_NATIVE&&typeof $Symbol.iterator=='symbol'?function(it){return typeof it=='symbol';}:function(it){return it instanceof $Symbol;};var $defineProperty=function defineProperty(it,key,D){if(it===ObjectProto)$defineProperty(OPSymbols,key,D);anObject(it);key=toPrimitive(key,true);anObject(D);if(has(AllSymbols,key)){if(!D.enumerable){if(!has(it,HIDDEN))dP(it,HIDDEN,createDesc(1,{}));it[HIDDEN][key]=true;}else{if(has(it,HIDDEN)&&it[HIDDEN][key])it[HIDDEN][key]=false;D=_create(D,{enumerable:createDesc(0,false)});}return setSymbolDesc(it,key,D);}return dP(it,key,D);};var $defineProperties=function defineProperties(it,P){anObject(it);var keys=enumKeys(P=toIObject(P));var i=0;var l=keys.length;var key;while(l>i)$defineProperty(it,key=keys[i++],P[key]);return it;};var $create=function create(it,P){return P===undefined?_create(it):$defineProperties(_create(it),P);};var $propertyIsEnumerable=function propertyIsEnumerable(key){var E=isEnum.call(this,key=toPrimitive(key,true));if(this===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return false;return E||!has(this,key)||!has(AllSymbols,key)||has(this,HIDDEN)&&this[HIDDEN][key]?E:true;};var $getOwnPropertyDescriptor=function getOwnPropertyDescriptor(it,key){it=toIObject(it);key=toPrimitive(key,true);if(it===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return;var D=gOPD(it,key);if(D&&has(AllSymbols,key)&&!(has(it,HIDDEN)&&it[HIDDEN][key]))D.enumerable=true;return D;};var $getOwnPropertyNames=function getOwnPropertyNames(it){var names=gOPN(toIObject(it));var result=[];var i=0;var key;while(names.length>i){if(!has(AllSymbols,key=names[i++])&&key!=HIDDEN&&key!=META)result.push(key);}return result;};var $getOwnPropertySymbols=function getOwnPropertySymbols(it){var IS_OP=it===ObjectProto;var names=gOPN(IS_OP?OPSymbols:toIObject(it));var result=[];var i=0;var key;while(names.length>i){if(has(AllSymbols,key=names[i++])&&(IS_OP?has(ObjectProto,key):true))result.push(AllSymbols[key]);}return result;};if(!USE_NATIVE){$Symbol=function Symbol(){if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');var tag=uid(arguments.length>0?arguments[0]:undefined);var $set=function(value){if(this===ObjectProto)$set.call(OPSymbols,value);if(has(this,HIDDEN)&&has(this[HIDDEN],tag))this[HIDDEN][tag]=false;setSymbolDesc(this,tag,createDesc(1,value));};if(DESCRIPTORS&&setter)setSymbolDesc(ObjectProto,tag,{configurable:true,set:$set});return wrap(tag);};redefine($Symbol[PROTOTYPE],'toString',function toString(){return this._k;});$GOPD.f=$getOwnPropertyDescriptor;$DP.f=$defineProperty;require('./_object-gopn').f=gOPNExt.f=$getOwnPropertyNames;require('./_object-pie').f=$propertyIsEnumerable;require('./_object-gops').f=$getOwnPropertySymbols;if(DESCRIPTORS&&!require('./_library')){redefine(ObjectProto,'propertyIsEnumerable',$propertyIsEnumerable,true);}
wksExt.f=function(name){return wrap(wks(name));};}
$export($export.G+$export.W+$export.F*!USE_NATIVE,{Symbol:$Symbol});for(var es6Symbols=('hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables').split(','),j=0;es6Symbols.length>j;)wks(es6Symbols[j++]);for(var wellKnownSymbols=$keys(wks.store),k=0;wellKnownSymbols.length>k;)wksDefine(wellKnownSymbols[k++]);$export($export.S+$export.F*!USE_NATIVE,'Symbol',{'for':function(key){return has(SymbolRegistry,key+='')?SymbolRegistry[key]:SymbolRegistry[key]=$Symbol(key);},keyFor:function keyFor(sym){if(!isSymbol(sym))throw TypeError(sym+' is not a symbol!');for(var key in SymbolRegistry)if(SymbolRegistry[key]===sym)return key;},useSetter:function(){setter=true;},useSimple:function(){setter=false;}});$export($export.S+$export.F*!USE_NATIVE,'Object',{create:$create,defineProperty:$defineProperty,defineProperties:$defineProperties,getOwnPropertyDescriptor:$getOwnPropertyDescriptor,getOwnPropertyNames:$getOwnPropertyNames,getOwnPropertySymbols:$getOwnPropertySymbols});$JSON&&$export($export.S+$export.F*(!USE_NATIVE||$fails(function(){var S=$Symbol();return _stringify([S])!='[null]'||_stringify({a:S})!='{}'||_stringify(Object(S))!='{}';})),'JSON',{stringify:function stringify(it){var args=[it];var i=1;var replacer,$replacer;while(arguments.length>i)args.push(arguments[i++]);$replacer=replacer=args[1];if(!isObject(replacer)&&it===undefined||isSymbol(it))return;if(!isArray(replacer))replacer=function(key,value){if(typeof $replacer=='function')value=$replacer.call(this,key,value);if(!isSymbol(value))return value;};args[1]=replacer;return _stringify.apply($JSON,args);}});$Symbol[PROTOTYPE][TO_PRIMITIVE]||require('./_hide')($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf);setToStringTag($Symbol,'Symbol');setToStringTag(Math,'Math',true);setToStringTag(global.JSON,'JSON',true);},{"./_an-object":37,"./_descriptors":45,"./_enum-keys":48,"./_export":49,"./_fails":50,"./_global":52,"./_has":53,"./_hide":54,"./_is-array":60,"./_is-object":61,"./_library":68,"./_meta":69,"./_object-create":73,"./_object-dp":74,"./_object-gopd":76,"./_object-gopn":78,"./_object-gopn-ext":77,"./_object-gops":79,"./_object-keys":82,"./_object-pie":83,"./_property-desc":87,"./_redefine":89,"./_set-to-string-tag":92,"./_shared":94,"./_to-iobject":100,"./_to-primitive":103,"./_uid":104,"./_wks":107,"./_wks-define":105,"./_wks-ext":106}],122:[function(require,module,exports){'use strict';var $export=require('./_export');var core=require('./_core');var global=require('./_global');var speciesConstructor=require('./_species-constructor');var promiseResolve=require('./_promise-resolve');$export($export.P+$export.R,'Promise',{'finally':function(onFinally){var C=speciesConstructor(this,core.Promise||global.Promise);var isFunction=typeof onFinally=='function';return this.then(isFunction?function(x){return promiseResolve(C,onFinally()).then(function(){return x;});}:onFinally,isFunction?function(e){return promiseResolve(C,onFinally()).then(function(){throw e;});}:onFinally);}});},{"./_core":41,"./_export":49,"./_global":52,"./_promise-resolve":86,"./_species-constructor":95}],123:[function(require,module,exports){'use strict';var $export=require('./_export');var newPromiseCapability=require('./_new-promise-capability');var perform=require('./_perform');$export($export.S,'Promise',{'try':function(callbackfn){var promiseCapability=newPromiseCapability.f(this);var result=perform(callbackfn);(result.e?promiseCapability.reject:promiseCapability.resolve)(result.v);return promiseCapability.promise;}});},{"./_export":49,"./_new-promise-capability":71,"./_perform":85}],124:[function(require,module,exports){require('./_wks-define')('asyncIterator');},{"./_wks-define":105}],125:[function(require,module,exports){require('./_wks-define')('observable');},{"./_wks-define":105}],126:[function(require,module,exports){require('./es6.array.iterator');var global=require('./_global');var hide=require('./_hide');var Iterators=require('./_iterators');var TO_STRING_TAG=require('./_wks')('toStringTag');var DOMIterables=('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,'+
'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,'+
'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,'+
'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,'+
'TextTrackList,TouchList').split(',');for(var i=0;i<DOMIterables.length;i++){var NAME=DOMIterables[i];var Collection=global[NAME];var proto=Collection&&Collection.prototype;if(proto&&!proto[TO_STRING_TAG])hide(proto,TO_STRING_TAG,NAME);Iterators[NAME]=Iterators.Array;}},{"./_global":52,"./_hide":54,"./_iterators":67,"./_wks":107,"./es6.array.iterator":111}],127:[function(require,module,exports){exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m
var eLen=(nBytes*8)-mLen-1
var eMax=(1<<eLen)-1
var eBias=eMax>>1
var nBits=-7
var i=isLE?(nBytes-1):0
var d=isLE?-1:1
var s=buffer[offset+i]
i+=d
e=s&((1<<(-nBits))-1)
s>>=(-nBits)
nBits+=eLen
for(;nBits>0;e=(e*256)+buffer[offset+i],i+=d,nBits-=8){}
m=e&((1<<(-nBits))-1)
e>>=(-nBits)
nBits+=mLen
for(;nBits>0;m=(m*256)+buffer[offset+i],i+=d,nBits-=8){}
if(e===0){e=1-eBias}else if(e===eMax){return m?NaN:((s?-1:1)*Infinity)}else{m=m+Math.pow(2,mLen)
e=e-eBias}
return(s?-1:1)*m*Math.pow(2,e-mLen)}
exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c
var eLen=(nBytes*8)-mLen-1
var eMax=(1<<eLen)-1
var eBias=eMax>>1
var rt=(mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0)
var i=isLE?0:(nBytes-1)
var d=isLE?1:-1
var s=value<0||(value===0&&1/value<0)?1:0
value=Math.abs(value)
if(isNaN(value)||value===Infinity){m=isNaN(value)?1:0
e=eMax}else{e=Math.floor(Math.log(value)/Math.LN2)
if(value*(c=Math.pow(2,-e))<1){e--
c*=2}
if(e+eBias>=1){value+=rt/c}else{value+=rt*Math.pow(2,1-eBias)}
if(value*c>=2){e++
c/=2}
if(e+eBias>=eMax){m=0
e=eMax}else if(e+eBias>=1){m=((value*c)-1)*Math.pow(2,mLen)
e=e+eBias}else{m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen)
e=0}}
for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}
e=(e<<mLen)|m
eLen+=mLen
for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}
buffer[offset+i-d]|=s*128}},{}],128:[function(require,module,exports){var g=(function(){return this})()||Function("return this")();var hadRuntime=g.regeneratorRuntime&&Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime")>=0;var oldRuntime=hadRuntime&&g.regeneratorRuntime;g.regeneratorRuntime=undefined;module.exports=require("./runtime");if(hadRuntime){g.regeneratorRuntime=oldRuntime;}else{try{delete g.regeneratorRuntime;}catch(e){g.regeneratorRuntime=undefined;}}},{"./runtime":129}],129:[function(require,module,exports){!(function(global){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";var inModule=typeof module==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){module.exports=runtime;}
return;}
runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}
runtime.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}
var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}
function GeneratorFunction(){}
function GeneratorFunctionPrototype(){}
var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this;};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){IteratorPrototype=NativeIteratorPrototype;}
var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg);};});}
runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false;};runtime.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction";}}
genFun.prototype=Object.create(Gp);return genFun;};runtime.awrap=function(arg){return{__await:arg};};function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value&&typeof value==="object"&&hasOwn.call(value,"__await")){return Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}
return Promise.resolve(value).then(function(unwrapped){result.value=unwrapped;resolve(result);},reject);}}
var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject);});}
return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}
this._invoke=enqueue;}
defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this;};runtime.AsyncIterator=AsyncIterator;runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}
if(state===GenStateCompleted){if(method==="throw"){throw arg;}
return doneResult();}
context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}
if(context.method==="next"){context.sent=context._sent=context.arg;}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg;}
context.dispatchException(context.arg);}else if(context.method==="return"){context.abrupt("return",context.arg);}
state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue;}
return{value:record.arg,done:context.done};}else if(record.type==="throw"){state=GenStateCompleted;context.method="throw";context.arg=record.arg;}}};}
function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){context.delegate=null;if(context.method==="throw"){if(delegate.iterator.return){context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){return ContinueSentinel;}}
context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method");}
return ContinueSentinel;}
var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel;}
var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel;}
if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc;if(context.method!=="return"){context.method="next";context.arg=undefined;}}else{return info;}
context.delegate=null;return ContinueSentinel;}
defineIteratorMethods(Gp);Gp[toStringTagSymbol]="Generator";Gp[iteratorSymbol]=function(){return this;};Gp.toString=function(){return "[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}
if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}
this.tryEntries.push(entry);}
function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}
function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}
runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key);}
keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}
next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}
if(typeof iterable.next==="function"){return iterable;}
if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}
next.value=undefined;next.done=true;return next;};return next.next=next;}}
return{next:doneResult};}
runtime.values=values;function doneResult(){return{value:undefined,done:true};}
Context.prototype={constructor:Context,reset:function(skipTempReset){this.prev=0;this.next=0;this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}
return this.rval;},dispatchException:function(exception){if(this.done){throw exception;}
var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){context.method="next";context.arg=undefined;}
return!!caught;}
for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end");}
if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}
if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){finallyEntry=null;}
var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel;}
return this.complete(record);},complete:function(record,afterLoc){if(record.type==="throw"){throw record.arg;}
if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}
return ContinueSentinel;},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}
return thrown;}}
throw new Error("illegal catch attempt");},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){this.arg=undefined;}
return ContinueSentinel;}};})((function(){return this})()||Function("return this")());},{}],130:[function(require,module,exports){'use strict';module.exports=require('./lib/u2f-api');},{"./lib/u2f-api":132}],131:[function(require,module,exports){'use strict';var u2f=u2f||{};module.exports=u2f;u2f.EXTENSION_ID='kmendfapggjehodndflmmgagdbamhnfd';u2f.MessageTypes={'U2F_REGISTER_REQUEST':'u2f_register_request','U2F_SIGN_REQUEST':'u2f_sign_request','U2F_REGISTER_RESPONSE':'u2f_register_response','U2F_SIGN_RESPONSE':'u2f_sign_response'};u2f.ErrorCodes={'OK':0,'OTHER_ERROR':1,'BAD_REQUEST':2,'CONFIGURATION_UNSUPPORTED':3,'DEVICE_INELIGIBLE':4,'TIMEOUT':5};u2f.Request;u2f.Response;u2f.Error;u2f.SignRequest;u2f.SignResponse;u2f.RegisterRequest;u2f.RegisterResponse;u2f.disconnect=function(){if(u2f.port_&&u2f.port_.port_){u2f.port_.port_.disconnect();u2f.port_=null;}};u2f.getMessagePort=function(callback){if(typeof chrome!='undefined'&&chrome.runtime){var msg={type:u2f.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]};chrome.runtime.sendMessage(u2f.EXTENSION_ID,msg,function(){if(!chrome.runtime.lastError){u2f.getChromeRuntimePort_(callback);}else{u2f.getIframePort_(callback);}});}else{u2f.getIframePort_(callback);}};u2f.getChromeRuntimePort_=function(callback){var port=chrome.runtime.connect(u2f.EXTENSION_ID,{'includeTlsChannelId':true});setTimeout(function(){callback(null,new u2f.WrappedChromeRuntimePort_(port));},0);};u2f.WrappedChromeRuntimePort_=function(port){this.port_=port;};u2f.WrappedChromeRuntimePort_.prototype.postMessage=function(message){this.port_.postMessage(message);};u2f.WrappedChromeRuntimePort_.prototype.addEventListener=function(eventName,handler){var name=eventName.toLowerCase();if(name=='message'||name=='onmessage'){this.port_.onMessage.addListener(function(message){handler({'data':message});});}else{console.error('WrappedChromeRuntimePort only supports onMessage');}};u2f.getIframePort_=function(callback){var iframeOrigin='chrome-extension://'+u2f.EXTENSION_ID;var iframe=document.createElement('iframe');iframe.src=iframeOrigin+'/u2f-comms.html';iframe.setAttribute('style','display:none');document.body.appendChild(iframe);var hasCalledBack=false;var channel=new MessageChannel();var ready=function(message){if(message.data=='ready'){channel.port1.removeEventListener('message',ready);if(!hasCalledBack)
{hasCalledBack=true;callback(null,channel.port1);}}else{console.error('First event on iframe port was not "ready"');}};channel.port1.addEventListener('message',ready);channel.port1.start();iframe.addEventListener('load',function(){iframe.contentWindow.postMessage('init',iframeOrigin,[channel.port2]);});setTimeout(function(){if(!hasCalledBack)
{hasCalledBack=true;callback(new Error("IFrame extension not supported"));}},200);};u2f.EXTENSION_TIMEOUT_SEC=30;u2f.port_=null;u2f.waitingForPort_=[];u2f.reqCounter_=0;u2f.callbackMap_={};u2f.getPortSingleton_=function(callback){if(u2f.port_){callback(null,u2f.port_);}else{if(u2f.waitingForPort_.length==0){u2f.getMessagePort(function(err,port){if(!err){u2f.port_=port;u2f.port_.addEventListener('message',(u2f.responseHandler_));}
while(u2f.waitingForPort_.length)
u2f.waitingForPort_.shift()(err,port);});}
u2f.waitingForPort_.push(callback);}};u2f.responseHandler_=function(message){var response=message.data;var reqId=response['requestId'];if(!reqId||!u2f.callbackMap_[reqId]){console.error('Unknown or missing requestId in response.');return;}
var cb=u2f.callbackMap_[reqId];delete u2f.callbackMap_[reqId];cb(null,response['responseData']);};u2f.isSupported=function(callback){u2f.getPortSingleton_(function(err,port){callback(!err);});}
u2f.sign=function(signRequests,callback,opt_timeoutSeconds){u2f.getPortSingleton_(function(err,port){if(err)
return callback(err);var reqId=++u2f.reqCounter_;u2f.callbackMap_[reqId]=callback;var req={type:u2f.MessageTypes.U2F_SIGN_REQUEST,signRequests:signRequests,timeoutSeconds:(typeof opt_timeoutSeconds!=='undefined'?opt_timeoutSeconds:u2f.EXTENSION_TIMEOUT_SEC),requestId:reqId};port.postMessage(req);});};u2f.register=function(registerRequests,signRequests,callback,opt_timeoutSeconds){u2f.getPortSingleton_(function(err,port){if(err)
return callback(err);var reqId=++u2f.reqCounter_;u2f.callbackMap_[reqId]=callback;var req={type:u2f.MessageTypes.U2F_REGISTER_REQUEST,signRequests:signRequests,registerRequests:registerRequests,timeoutSeconds:(typeof opt_timeoutSeconds!=='undefined'?opt_timeoutSeconds:u2f.EXTENSION_TIMEOUT_SEC),requestId:reqId};port.postMessage(req);});};},{}],132:[function(require,module,exports){(function(global){'use strict';module.exports=API;var chromeApi=require('./google-u2f-api');var isBrowser=(typeof navigator!=='undefined')&&!!navigator.userAgent;var isSafari=isBrowser&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//);var isEDGE=isBrowser&&navigator.userAgent.match(/Edge\/1[2345]/);var _backend=null;function getBackend(Promise)
{if(!_backend)
_backend=new Promise(function(resolve,reject)
{function notSupported()
{resolve({u2f:null,native:true});}
if(!isBrowser)
return notSupported();if(isSafari)
return notSupported();var hasNativeSupport=(typeof window.u2f!=='undefined')&&(typeof window.u2f.sign==='function');if(hasNativeSupport)
resolve({u2f:window.u2f,native:true});if(isEDGE)
return notSupported();if(location.protocol==='http:')
return notSupported();if(typeof MessageChannel==='undefined')
return notSupported();chromeApi.isSupported(function(ok)
{if(ok)
resolve({u2f:chromeApi,native:false});else
notSupported();});});return _backend;}
function API(Promise)
{return{isSupported:isSupported.bind(Promise),ensureSupport:ensureSupport.bind(Promise),register:register.bind(Promise),sign:sign.bind(Promise),ErrorCodes:API.ErrorCodes,ErrorNames:API.ErrorNames};}
API.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5};API.ErrorNames={"-1":"CANCELLED","0":"OK","1":"OTHER_ERROR","2":"BAD_REQUEST","3":"CONFIGURATION_UNSUPPORTED","4":"DEVICE_INELIGIBLE","5":"TIMEOUT"};function makeError(msg,err)
{var code=err!=null?err.errorCode:1;var type=API.ErrorNames[''+code];var error=new Error(msg);error.metaData={type:type,code:code}
return error;}
function deferPromise(Promise,promise)
{var ret={};ret.promise=new Promise(function(resolve,reject){ret.resolve=resolve;ret.reject=reject;promise.then(resolve,reject);});ret.promise.cancel=function(msg,disconnect)
{getBackend(Promise).then(function(backend)
{if(disconnect&&!backend.native)
backend.u2f.disconnect();ret.reject(makeError(msg,{errorCode:-1}));});};return ret;}
function defer(Promise,fun)
{return deferPromise(Promise,new Promise(function(resolve,reject)
{try
{fun&&fun(resolve,reject);}
catch(err)
{reject(err);}}));}
function isSupported()
{var Promise=this;return getBackend(Promise).then(function(backend)
{return!!backend.u2f;});}
function _ensureSupport(backend)
{if(!backend.u2f)
{if(location.protocol==='http:')
throw new Error("U2F isn't supported over http, only https");throw new Error("U2F not supported");}}
function ensureSupport()
{var Promise=this;return getBackend(Promise).then(_ensureSupport);}
function register(registerRequests,signRequests,timeout)
{var Promise=this;if(!Array.isArray(registerRequests))
registerRequests=[registerRequests];if(typeof signRequests==='number'&&typeof timeout==='undefined')
{timeout=signRequests;signRequests=null;}
if(!signRequests)
signRequests=[];return deferPromise(Promise,getBackend(Promise).then(function(backend)
{_ensureSupport(backend);var native=backend.native;var u2f=backend.u2f;return new Promise(function(resolve,reject)
{function cbNative(response)
{if(response.errorCode)
reject(makeError("Registration failed",response));else
{delete response.errorCode;resolve(response);}}
function cbChrome(err,response)
{if(err)
reject(err);else if(response.errorCode)
reject(makeError("Registration failed",response));else
resolve(response);}
if(native)
{var appId=registerRequests[0].appId;u2f.register(appId,registerRequests,signRequests,cbNative,timeout);}
else
{u2f.register(registerRequests,signRequests,cbChrome,timeout);}});})).promise;}
function sign(signRequests,timeout)
{var Promise=this;if(!Array.isArray(signRequests))
signRequests=[signRequests];return deferPromise(Promise,getBackend(Promise).then(function(backend)
{_ensureSupport(backend);var native=backend.native;var u2f=backend.u2f;return new Promise(function(resolve,reject)
{function cbNative(response)
{if(response.errorCode)
reject(makeError("Sign failed",response));else
{delete response.errorCode;resolve(response);}}
function cbChrome(err,response)
{if(err)
reject(err);else if(response.errorCode)
reject(makeError("Sign failed",response));else
resolve(response);}
if(native)
{var appId=signRequests[0].appId;var challenge=signRequests[0].challenge;u2f.sign(appId,challenge,signRequests,cbNative,timeout);}
else
{u2f.sign(signRequests,cbChrome,timeout);}});})).promise;}
function makeDefault(func)
{API[func]=function()
{if(!global.Promise)
throw new Error("The platform doesn't natively support promises");var args=[].slice.call(arguments);return API(global.Promise)[func].apply(null,args);};}
makeDefault('isSupported');makeDefault('ensureSupport');makeDefault('register');makeDefault('sign');}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./google-u2f-api":131}],133:[function(require,module,exports){(function(Buffer){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _utils=require("./utils");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var Tezos=function(){function Tezos(transport){(0,_classCallCheck3.default)(this,Tezos);this.transport=transport;transport.decorateAppAPIMethods(this,["getAddress","signOperation","getVersion"],"XTZ");}
(0,_createClass3.default)(Tezos,[{key:"getAddress",value:function getAddress(path,boolDisplay,curve,apdu){if(!apdu){if(boolDisplay){apdu=0x03;}else{apdu=0x02;}}
var paths=(0,_utils.splitPath)(path);var buffer=new Buffer(1+paths.length*4);buffer[0]=paths.length;paths.forEach(function(element,index){buffer.writeUInt32BE(element,1+4*index);});return this.transport.send(0x80,apdu,0,curve?curve:0x00,buffer).then(function(response){var result={};var publicKeyLength=response[0];result.publicKey=response.slice(1,1+publicKeyLength).toString("hex");return result;});}},{key:"signOperation",value:function signOperation(path,rawTxHex,curve){var _this=this;var paths=(0,_utils.splitPath)(path);var offset=0;var rawTx=new Buffer(rawTxHex,"hex");var toSend=[];var response=void 0;curve=curve?curve:0x00;{var buffer=new Buffer(paths.length*4+1);buffer[0]=paths.length;paths.forEach(function(element,index){buffer.writeUInt32BE(element,1+4*index);});toSend.push(buffer);}
while(offset!==rawTx.length){var maxChunkSize=255;var chunkSize=void 0;if(offset+maxChunkSize>=rawTx.length){chunkSize=rawTx.length-offset;}else{chunkSize=maxChunkSize;}
var _buffer=new Buffer(chunkSize);rawTx.copy(_buffer,0,offset,offset+chunkSize);toSend.push(_buffer);offset+=chunkSize;}
return(0,_utils.foreach)(toSend,function(data,i){var code=0x01;if(i===0){code=0x00;}else if(i===toSend.length-1){code=0x81;}
return _this.transport.send(0x80,0x04,code,curve,data).then(function(apduResponse){response=apduResponse;});}).then(function(){var signature=response.slice(0,response.length-2).toString("hex");return{signature:signature};});}},{key:"getVersion",value:function getVersion(){return this.transport.send(0x80,0x00,0x00,0x00,new Buffer(0)).then(function(apduResponse){var bakingApp=apduResponse[0]==1;var major=apduResponse[1];var minor=apduResponse[2];var patch=apduResponse[3];return{major:major,minor:minor,patch:patch,bakingApp:bakingApp};});}}]);return Tezos;}();exports.default=Tezos;}).call(this,require("buffer").Buffer)},{"./utils":134,"babel-runtime/helpers/classCallCheck":13,"babel-runtime/helpers/createClass":14,"buffer":22}],134:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _promise=require("babel-runtime/core-js/promise");var _promise2=_interopRequireDefault(_promise);exports.defer=defer;exports.splitPath=splitPath;exports.eachSeries=eachSeries;exports.foreach=foreach;exports.doIf=doIf;exports.asyncWhile=asyncWhile;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function defer(){var resolve=void 0,reject=void 0;var promise=new _promise2.default(function(success,failure){resolve=success;reject=failure;});if(!resolve||!reject)throw "defer() error";return{promise:promise,resolve:resolve,reject:reject};}
function splitPath(path){var result=[];var components=path.split("/");components.forEach(function(element){var number=parseInt(element,10);if(isNaN(number)){return;}
if(element.length>1&&element[element.length-1]==="'"){number+=0x80000000;}
result.push(number);});return result;}
function eachSeries(arr,fun){return arr.reduce(function(p,e){return p.then(function(){return fun(e);});},_promise2.default.resolve());}
function foreach(arr,callback){function iterate(index,array,result){if(index>=array.length){return result;}else return callback(array[index],index).then(function(res){result.push(res);return iterate(index+1,array,result);});}
return _promise2.default.resolve().then(function(){return iterate(0,arr,[]);});}
function doIf(condition,callback){return _promise2.default.resolve().then(function(){if(condition){return callback();}});}
function asyncWhile(predicate,callback){function iterate(result){if(!predicate()){return result;}else{return callback().then(function(res){result.push(res);return iterate(result);});}}
return _promise2.default.resolve([]).then(iterate);}},{"babel-runtime/core-js/promise":9}],135:[function(require,module,exports){(function(Buffer){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _promise=require("babel-runtime/core-js/promise");var _promise2=_interopRequireDefault(_promise);var _typeof2=require("babel-runtime/helpers/typeof");var _typeof3=_interopRequireDefault(_typeof2);var _getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _asyncToGenerator2=require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _u2fApi=require("u2f-api");var _hwTransport=require("@ledgerhq/hw-transport");var _hwTransport2=_interopRequireDefault(_hwTransport);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function wrapU2FTransportError(originalError,message,id){var err=new _hwTransport.TransportError(message,id);err.originalError=originalError;return err;}
function wrapApdu(apdu,key){var result=Buffer.alloc(apdu.length);for(var i=0;i<apdu.length;i++){result[i]=apdu[i]^key[i%key.length];}
return result;}
var webSafe64=function webSafe64(base64){return base64.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");};var normal64=function normal64(base64){return base64.replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*base64.length%4);};function attemptExchange(apdu,timeoutMillis,debug,scrambleKey){var keyHandle=wrapApdu(apdu,scrambleKey);var challenge=Buffer.from("0000000000000000000000000000000000000000000000000000000000000000","hex");var signRequest={version:"U2F_V2",keyHandle:webSafe64(keyHandle.toString("base64")),challenge:webSafe64(challenge.toString("base64")),appId:location.origin};if(debug){debug("=> "+apdu.toString("hex"));}
return(0,_u2fApi.sign)(signRequest,timeoutMillis/1000).then(function(response){var signatureData=response.signatureData;if(typeof signatureData==="string"){var data=Buffer.from(normal64(signatureData),"base64");var result=data.slice(5);if(debug){debug("<= "+result.toString("hex"));}
return result;}else{throw response;}});}
var transportInstances=[];function emitDisconnect(){transportInstances.forEach(function(t){return t.emit("disconnect");});transportInstances=[];}
function isTimeoutU2FError(u2fError){return u2fError.metaData.code===5;}
var TransportU2F=function(_Transport){(0,_inherits3.default)(TransportU2F,_Transport);(0,_createClass3.default)(TransportU2F,null,[{key:"open",value:function(){var _ref=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_){var _openTimeout=arguments.length>1&&arguments[1]!==undefined?arguments[1]:5000;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",new TransportU2F());case 1:case "end":return _context.stop();}}},_callee,this);}));function open(_x){return _ref.apply(this,arguments);}
return open;}()}]);function TransportU2F(){(0,_classCallCheck3.default)(this,TransportU2F);var _this=(0,_possibleConstructorReturn3.default)(this,(TransportU2F.__proto__||(0,_getPrototypeOf2.default)(TransportU2F)).call(this));transportInstances.push(_this);return _this;}
(0,_createClass3.default)(TransportU2F,[{key:"exchange",value:function(){var _ref2=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(apdu){var isU2FError;return _regenerator2.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return attemptExchange(apdu,this.exchangeTimeout,this.debug,this.scrambleKey);case 3:return _context2.abrupt("return",_context2.sent);case 6:_context2.prev=6;_context2.t0=_context2["catch"](0);isU2FError=(0,_typeof3.default)(_context2.t0.metaData)==="object";if(!isU2FError){_context2.next=14;break;}
if(isTimeoutU2FError(_context2.t0)){emitDisconnect();}
throw wrapU2FTransportError(_context2.t0,"Failed to sign with Ledger device: U2F "+_context2.t0.metaData.type,"U2F_"+_context2.t0.metaData.code);case 14:throw _context2.t0;case 15:case "end":return _context2.stop();}}},_callee2,this,[[0,6]]);}));function exchange(_x3){return _ref2.apply(this,arguments);}
return exchange;}()},{key:"setScrambleKey",value:function setScrambleKey(scrambleKey){this.scrambleKey=Buffer.from(scrambleKey,"ascii");}},{key:"close",value:function close(){var i=transportInstances.indexOf(this);if(i===-1){throw new Error("invalid transport instance");}
transportInstances.splice(i,1);return _promise2.default.resolve();}}]);return TransportU2F;}(_hwTransport2.default);TransportU2F.isSupported=_u2fApi.isSupported;TransportU2F.list=function(){return(0,_u2fApi.isSupported)().then(function(supported){return supported?[null]:[];});};TransportU2F.listen=function(observer){var unsubscribed=false;(0,_u2fApi.isSupported)().then(function(supported){if(unsubscribed)return;if(supported){observer.next({type:"add",descriptor:null});observer.complete();}else{observer.error(new _hwTransport.TransportError("U2F browser support is needed for Ledger. "+"Please use Chrome, Opera or Firefox with a U2F extension. "+"Also make sure you're on an HTTPS connection","U2FNotSupported"));}});return{unsubscribe:function unsubscribe(){unsubscribed=true;}};};exports.default=TransportU2F;}).call(this,require("buffer").Buffer)},{"@ledgerhq/hw-transport":136,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/asyncToGenerator":12,"babel-runtime/helpers/classCallCheck":13,"babel-runtime/helpers/createClass":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16,"babel-runtime/helpers/typeof":18,"babel-runtime/regenerator":19,"buffer":22,"u2f-api":130}],136:[function(require,module,exports){(function(Buffer){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.StatusCodes=undefined;var _promise=require("babel-runtime/core-js/promise");var _promise2=_interopRequireDefault(_promise);var _assign=require("babel-runtime/core-js/object/assign");var _assign2=_interopRequireDefault(_assign);var _getIterator2=require("babel-runtime/core-js/get-iterator");var _getIterator3=_interopRequireDefault(_getIterator2);var _toConsumableArray2=require("babel-runtime/helpers/toConsumableArray");var _toConsumableArray3=_interopRequireDefault(_toConsumableArray2);var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _asyncToGenerator2=require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _keys=require("babel-runtime/core-js/object/keys");var _keys2=_interopRequireDefault(_keys);exports.getAltStatusMessage=getAltStatusMessage;exports.TransportError=TransportError;exports.TransportStatusError=TransportStatusError;var _events2=require("events");var _events3=_interopRequireDefault(_events2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var StatusCodes=exports.StatusCodes={PIN_REMAINING_ATTEMPTS:0x63c0,INCORRECT_LENGTH:0x6700,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:0x6981,SECURITY_STATUS_NOT_SATISFIED:0x6982,CONDITIONS_OF_USE_NOT_SATISFIED:0x6985,INCORRECT_DATA:0x6a80,NOT_ENOUGH_MEMORY_SPACE:0x6a84,REFERENCED_DATA_NOT_FOUND:0x6a88,FILE_ALREADY_EXISTS:0x6a89,INCORRECT_P1_P2:0x6b00,INS_NOT_SUPPORTED:0x6d00,CLA_NOT_SUPPORTED:0x6e00,TECHNICAL_PROBLEM:0x6f00,OK:0x9000,MEMORY_PROBLEM:0x9240,NO_EF_SELECTED:0x9400,INVALID_OFFSET:0x9402,FILE_NOT_FOUND:0x9404,INCONSISTENT_FILE:0x9408,ALGORITHM_NOT_SUPPORTED:0x9484,INVALID_KCV:0x9485,CODE_NOT_INITIALIZED:0x9802,ACCESS_CONDITION_NOT_FULFILLED:0x9804,CONTRADICTION_SECRET_CODE_STATUS:0x9808,CONTRADICTION_INVALIDATION:0x9810,CODE_BLOCKED:0x9840,MAX_VALUE_REACHED:0x9850,GP_AUTH_FAILED:0x6300,LICENSING:0x6f42,HALTED:0x6faa};function getAltStatusMessage(code){switch(code){case 0x6700:return "Incorrect length";case 0x6982:return "Security not satisfied (dongle locked or have invalid access rights)";case 0x6985:return "Condition of use not satisfied (denied by the user?)";case 0x6a80:return "Invalid data received";case 0x6b00:return "Invalid parameter received";}
if(0x6f00<=code&&code<=0x6fff){return "Internal error, please report";}}
function TransportError(message,id){this.name="TransportError";this.message=message;this.stack=new Error().stack;this.id=id;}
TransportError.prototype=new Error();function TransportStatusError(statusCode){this.name="TransportStatusError";var statusText=(0,_keys2.default)(StatusCodes).find(function(k){return StatusCodes[k]===statusCode;})||"UNKNOWN_ERROR";var smsg=getAltStatusMessage(statusCode)||statusText;var statusCodeStr=statusCode.toString(16);this.message="Ledger device: "+smsg+" (0x"+statusCodeStr+")";this.stack=new Error().stack;this.statusCode=statusCode;this.statusText=statusText;}
TransportStatusError.prototype=new Error();var Transport=function(){function Transport(){var _this=this;(0,_classCallCheck3.default)(this,Transport);this.debug=null;this.exchangeTimeout=30000;this._events=new _events3.default();this.send=function(){var _ref=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(cla,ins,p1,p2){var data=arguments.length>4&&arguments[4]!==undefined?arguments[4]:Buffer.alloc(0);var statusList=arguments.length>5&&arguments[5]!==undefined?arguments[5]:[StatusCodes.OK];var response,sw;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(data.length>=256)){_context.next=2;break;}
throw new TransportError("data.length exceed 256 bytes limit. Got: "+data.length,"DataLengthTooBig");case 2:_context.next=4;return _this.exchange(Buffer.concat([Buffer.from([cla,ins,p1,p2]),Buffer.from([data.length]),data]));case 4:response=_context.sent;sw=response.readUInt16BE(response.length-2);if(statusList.some(function(s){return s===sw;})){_context.next=8;break;}
throw new TransportStatusError(sw);case 8:return _context.abrupt("return",response);case 9:case "end":return _context.stop();}}},_callee,_this);}));return function(_x,_x2,_x3,_x4){return _ref.apply(this,arguments);};}();this._appAPIlock=null;}
(0,_createClass3.default)(Transport,[{key:"on",value:function on(eventName,cb){this._events.on(eventName,cb);}},{key:"off",value:function off(eventName,cb){this._events.removeListener(eventName,cb);}},{key:"emit",value:function emit(event){var _events;for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}
(_events=this._events).emit.apply(_events,[event].concat((0,_toConsumableArray3.default)(args)));}},{key:"setDebugMode",value:function setDebugMode(debug){this.debug=typeof debug==="function"?debug:debug?function(log){return console.log(log);}:null;}},{key:"setExchangeTimeout",value:function setExchangeTimeout(exchangeTimeout){this.exchangeTimeout=exchangeTimeout;}},{key:"decorateAppAPIMethods",value:function decorateAppAPIMethods(self,methods,scrambleKey){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(0,_getIterator3.default)(methods),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var methodName=_step.value;self[methodName]=this.decorateAppAPIMethod(methodName,self[methodName],self,scrambleKey);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}},{key:"decorateAppAPIMethod",value:function decorateAppAPIMethod(methodName,f,ctx,scrambleKey){var _this2=this;return function(){var _ref2=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}
var _appAPIlock,_e;return _regenerator2.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_appAPIlock=_this2._appAPIlock;if(!_appAPIlock){_context2.next=5;break;}
_e=new TransportError("Ledger Device is busy (lock "+_appAPIlock+")","TransportLocked");(0,_assign2.default)(_e,{currentLock:_appAPIlock,methodName:methodName});return _context2.abrupt("return",_promise2.default.reject(_e));case 5:_context2.prev=5;_this2._appAPIlock=methodName;_this2.setScrambleKey(scrambleKey);_context2.next=10;return f.apply(ctx,args);case 10:return _context2.abrupt("return",_context2.sent);case 11:_context2.prev=11;_this2._appAPIlock=null;return _context2.finish(11);case 14:case "end":return _context2.stop();}}},_callee2,_this2,[[5,,11,14]]);}));return function(){return _ref2.apply(this,arguments);};}();}}],[{key:"create",value:function create(){var _this3=this;var openTimeout=arguments.length>0&&arguments[0]!==undefined?arguments[0]:3000;var listenTimeout=arguments.length>1&&arguments[1]!==undefined?arguments[1]:10000;return new _promise2.default(function(resolve,reject){var found=false;var sub=_this3.listen({next:function next(e){found=true;if(sub)sub.unsubscribe();clearTimeout(listenTimeoutId);_this3.open(e.descriptor,openTimeout).then(resolve,reject);},error:function error(e){clearTimeout(listenTimeoutId);reject(e);},complete:function complete(){clearTimeout(listenTimeoutId);if(!found){reject(new TransportError(_this3.ErrorMessage_NoDeviceFound,"NoDeviceFound"));}}});var listenTimeoutId=setTimeout(function(){sub.unsubscribe();reject(new TransportError(_this3.ErrorMessage_ListenTimeout,"ListenTimeout"));},listenTimeout);});}}]);return Transport;}();Transport.ErrorMessage_ListenTimeout="No Ledger device found (timeout)";Transport.ErrorMessage_NoDeviceFound="No Ledger device found";exports.default=Transport;}).call(this,require("buffer").Buffer)},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":3,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/asyncToGenerator":12,"babel-runtime/helpers/classCallCheck":13,"babel-runtime/helpers/createClass":14,"babel-runtime/helpers/toConsumableArray":17,"babel-runtime/regenerator":19,"buffer":22,"events":21}],137:[function(require,module,exports){"use strict";var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);var _asyncToGenerator2=require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var Transport=require("@ledgerhq/hw-transport-u2f").default;var App=require("../../hw-app-xtz").default;var tezledger={getAddress:function(){var _ref=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path){var transport,xtz,result;return _regenerator2.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return Transport.create(60*1000);case 2:transport=_context.sent;xtz=new App(transport);_context.next=6;return xtz.getAddress(path,true);case 6:result=_context.sent;return _context.abrupt("return",result);case 8:case "end":return _context.stop();}}},_callee,undefined);}));return function getAddress(_x){return _ref.apply(this,arguments);};}(),sign:function(){var _ref2=(0,_asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path,data){var transport,xtz,result;return _regenerator2.default.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return Transport.create(60*1000);case 2:transport=_context2.sent;xtz=new App(transport);_context2.next=6;return xtz.signOperation(path,data);case 6:result=_context2.sent;return _context2.abrupt("return",result);case 8:case "end":return _context2.stop();}}},_callee2,undefined);}));return function sign(_x2,_x3){return _ref2.apply(this,arguments);};}()};module.exports=tezledger;window.tezledger=tezledger;},{"../../hw-app-xtz":133,"@ledgerhq/hw-transport-u2f":135,"babel-runtime/helpers/asyncToGenerator":12,"babel-runtime/regenerator":19}]},{},[137])