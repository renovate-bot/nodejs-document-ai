/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.cloud = (function() {
    
            /**
             * Namespace cloud.
             * @memberof google
             * @namespace
             */
            var cloud = {};
    
            cloud.documentai = (function() {
    
                /**
                 * Namespace documentai.
                 * @memberof google.cloud
                 * @namespace
                 */
                var documentai = {};
    
                documentai.v1beta1 = (function() {
    
                    /**
                     * Namespace v1beta1.
                     * @memberof google.cloud.documentai
                     * @namespace
                     */
                    var v1beta1 = {};
    
                    v1beta1.DocumentUnderstandingService = (function() {
    
                        /**
                         * Constructs a new DocumentUnderstandingService service.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a DocumentUnderstandingService
                         * @extends $protobuf.rpc.Service
                         * @constructor
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         */
                        function DocumentUnderstandingService(rpcImpl, requestDelimited, responseDelimited) {
                            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                        }
    
                        (DocumentUnderstandingService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DocumentUnderstandingService;
    
                        /**
                         * Creates new DocumentUnderstandingService service using the specified rpc implementation.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.DocumentUnderstandingService
                         * @static
                         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                         * @returns {DocumentUnderstandingService} RPC service. Useful where requests and/or responses are streamed.
                         */
                        DocumentUnderstandingService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                            return new this(rpcImpl, requestDelimited, responseDelimited);
                        };
    
                        /**
                         * Callback as used by {@link google.cloud.documentai.v1beta1.DocumentUnderstandingService#batchProcessDocuments}.
                         * @memberof google.cloud.documentai.v1beta1.DocumentUnderstandingService
                         * @typedef BatchProcessDocumentsCallback
                         * @type {function}
                         * @param {Error|null} error Error, if any
                         * @param {google.longrunning.Operation} [response] Operation
                         */
    
                        /**
                         * Calls BatchProcessDocuments.
                         * @function batchProcessDocuments
                         * @memberof google.cloud.documentai.v1beta1.DocumentUnderstandingService
                         * @instance
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsRequest} request BatchProcessDocumentsRequest message or plain object
                         * @param {google.cloud.documentai.v1beta1.DocumentUnderstandingService.BatchProcessDocumentsCallback} callback Node-style callback called with the error, if any, and Operation
                         * @returns {undefined}
                         * @variation 1
                         */
                        Object.defineProperty(DocumentUnderstandingService.prototype.batchProcessDocuments = function batchProcessDocuments(request, callback) {
                            return this.rpcCall(batchProcessDocuments, $root.google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest, $root.google.longrunning.Operation, request, callback);
                        }, "name", { value: "BatchProcessDocuments" });
    
                        /**
                         * Calls BatchProcessDocuments.
                         * @function batchProcessDocuments
                         * @memberof google.cloud.documentai.v1beta1.DocumentUnderstandingService
                         * @instance
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsRequest} request BatchProcessDocumentsRequest message or plain object
                         * @returns {Promise<google.longrunning.Operation>} Promise
                         * @variation 2
                         */
    
                        return DocumentUnderstandingService;
                    })();
    
                    v1beta1.BatchProcessDocumentsRequest = (function() {
    
                        /**
                         * Properties of a BatchProcessDocumentsRequest.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IBatchProcessDocumentsRequest
                         * @property {Array.<google.cloud.documentai.v1beta1.IProcessDocumentRequest>|null} [requests] BatchProcessDocumentsRequest requests
                         * @property {string|null} [parent] BatchProcessDocumentsRequest parent
                         */
    
                        /**
                         * Constructs a new BatchProcessDocumentsRequest.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a BatchProcessDocumentsRequest.
                         * @implements IBatchProcessDocumentsRequest
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsRequest=} [properties] Properties to set
                         */
                        function BatchProcessDocumentsRequest(properties) {
                            this.requests = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * BatchProcessDocumentsRequest requests.
                         * @member {Array.<google.cloud.documentai.v1beta1.IProcessDocumentRequest>} requests
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @instance
                         */
                        BatchProcessDocumentsRequest.prototype.requests = $util.emptyArray;
    
                        /**
                         * BatchProcessDocumentsRequest parent.
                         * @member {string} parent
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @instance
                         */
                        BatchProcessDocumentsRequest.prototype.parent = "";
    
                        /**
                         * Creates a new BatchProcessDocumentsRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsRequest=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest} BatchProcessDocumentsRequest instance
                         */
                        BatchProcessDocumentsRequest.create = function create(properties) {
                            return new BatchProcessDocumentsRequest(properties);
                        };
    
                        /**
                         * Encodes the specified BatchProcessDocumentsRequest message. Does not implicitly {@link google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsRequest} message BatchProcessDocumentsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BatchProcessDocumentsRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.requests != null && message.requests.length)
                                for (var i = 0; i < message.requests.length; ++i)
                                    $root.google.cloud.documentai.v1beta1.ProcessDocumentRequest.encode(message.requests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.parent);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified BatchProcessDocumentsRequest message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsRequest} message BatchProcessDocumentsRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BatchProcessDocumentsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a BatchProcessDocumentsRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest} BatchProcessDocumentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BatchProcessDocumentsRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.requests && message.requests.length))
                                        message.requests = [];
                                    message.requests.push($root.google.cloud.documentai.v1beta1.ProcessDocumentRequest.decode(reader, reader.uint32()));
                                    break;
                                case 2:
                                    message.parent = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a BatchProcessDocumentsRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest} BatchProcessDocumentsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BatchProcessDocumentsRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a BatchProcessDocumentsRequest message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BatchProcessDocumentsRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.requests != null && message.hasOwnProperty("requests")) {
                                if (!Array.isArray(message.requests))
                                    return "requests: array expected";
                                for (var i = 0; i < message.requests.length; ++i) {
                                    var error = $root.google.cloud.documentai.v1beta1.ProcessDocumentRequest.verify(message.requests[i]);
                                    if (error)
                                        return "requests." + error;
                                }
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                if (!$util.isString(message.parent))
                                    return "parent: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a BatchProcessDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest} BatchProcessDocumentsRequest
                         */
                        BatchProcessDocumentsRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest();
                            if (object.requests) {
                                if (!Array.isArray(object.requests))
                                    throw TypeError(".google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest.requests: array expected");
                                message.requests = [];
                                for (var i = 0; i < object.requests.length; ++i) {
                                    if (typeof object.requests[i] !== "object")
                                        throw TypeError(".google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest.requests: object expected");
                                    message.requests[i] = $root.google.cloud.documentai.v1beta1.ProcessDocumentRequest.fromObject(object.requests[i]);
                                }
                            }
                            if (object.parent != null)
                                message.parent = String(object.parent);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a BatchProcessDocumentsRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @static
                         * @param {google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest} message BatchProcessDocumentsRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BatchProcessDocumentsRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.requests = [];
                            if (options.defaults)
                                object.parent = "";
                            if (message.requests && message.requests.length) {
                                object.requests = [];
                                for (var j = 0; j < message.requests.length; ++j)
                                    object.requests[j] = $root.google.cloud.documentai.v1beta1.ProcessDocumentRequest.toObject(message.requests[j], options);
                            }
                            if (message.parent != null && message.hasOwnProperty("parent"))
                                object.parent = message.parent;
                            return object;
                        };
    
                        /**
                         * Converts this BatchProcessDocumentsRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BatchProcessDocumentsRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return BatchProcessDocumentsRequest;
                    })();
    
                    v1beta1.ProcessDocumentRequest = (function() {
    
                        /**
                         * Properties of a ProcessDocumentRequest.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IProcessDocumentRequest
                         * @property {google.cloud.documentai.v1beta1.IInputConfig|null} [inputConfig] ProcessDocumentRequest inputConfig
                         * @property {google.cloud.documentai.v1beta1.IOutputConfig|null} [outputConfig] ProcessDocumentRequest outputConfig
                         * @property {string|null} [documentType] ProcessDocumentRequest documentType
                         * @property {google.cloud.documentai.v1beta1.ITableExtractionParams|null} [tableExtractionParams] ProcessDocumentRequest tableExtractionParams
                         * @property {google.cloud.documentai.v1beta1.IFormExtractionParams|null} [formExtractionParams] ProcessDocumentRequest formExtractionParams
                         * @property {google.cloud.documentai.v1beta1.IEntityExtractionParams|null} [entityExtractionParams] ProcessDocumentRequest entityExtractionParams
                         * @property {google.cloud.documentai.v1beta1.IOcrParams|null} [ocrParams] ProcessDocumentRequest ocrParams
                         */
    
                        /**
                         * Constructs a new ProcessDocumentRequest.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a ProcessDocumentRequest.
                         * @implements IProcessDocumentRequest
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IProcessDocumentRequest=} [properties] Properties to set
                         */
                        function ProcessDocumentRequest(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ProcessDocumentRequest inputConfig.
                         * @member {google.cloud.documentai.v1beta1.IInputConfig|null|undefined} inputConfig
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @instance
                         */
                        ProcessDocumentRequest.prototype.inputConfig = null;
    
                        /**
                         * ProcessDocumentRequest outputConfig.
                         * @member {google.cloud.documentai.v1beta1.IOutputConfig|null|undefined} outputConfig
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @instance
                         */
                        ProcessDocumentRequest.prototype.outputConfig = null;
    
                        /**
                         * ProcessDocumentRequest documentType.
                         * @member {string} documentType
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @instance
                         */
                        ProcessDocumentRequest.prototype.documentType = "";
    
                        /**
                         * ProcessDocumentRequest tableExtractionParams.
                         * @member {google.cloud.documentai.v1beta1.ITableExtractionParams|null|undefined} tableExtractionParams
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @instance
                         */
                        ProcessDocumentRequest.prototype.tableExtractionParams = null;
    
                        /**
                         * ProcessDocumentRequest formExtractionParams.
                         * @member {google.cloud.documentai.v1beta1.IFormExtractionParams|null|undefined} formExtractionParams
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @instance
                         */
                        ProcessDocumentRequest.prototype.formExtractionParams = null;
    
                        /**
                         * ProcessDocumentRequest entityExtractionParams.
                         * @member {google.cloud.documentai.v1beta1.IEntityExtractionParams|null|undefined} entityExtractionParams
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @instance
                         */
                        ProcessDocumentRequest.prototype.entityExtractionParams = null;
    
                        /**
                         * ProcessDocumentRequest ocrParams.
                         * @member {google.cloud.documentai.v1beta1.IOcrParams|null|undefined} ocrParams
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @instance
                         */
                        ProcessDocumentRequest.prototype.ocrParams = null;
    
                        /**
                         * Creates a new ProcessDocumentRequest instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IProcessDocumentRequest=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.ProcessDocumentRequest} ProcessDocumentRequest instance
                         */
                        ProcessDocumentRequest.create = function create(properties) {
                            return new ProcessDocumentRequest(properties);
                        };
    
                        /**
                         * Encodes the specified ProcessDocumentRequest message. Does not implicitly {@link google.cloud.documentai.v1beta1.ProcessDocumentRequest.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IProcessDocumentRequest} message ProcessDocumentRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProcessDocumentRequest.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.inputConfig != null && message.hasOwnProperty("inputConfig"))
                                $root.google.cloud.documentai.v1beta1.InputConfig.encode(message.inputConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.outputConfig != null && message.hasOwnProperty("outputConfig"))
                                $root.google.cloud.documentai.v1beta1.OutputConfig.encode(message.outputConfig, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.documentType != null && message.hasOwnProperty("documentType"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.documentType);
                            if (message.tableExtractionParams != null && message.hasOwnProperty("tableExtractionParams"))
                                $root.google.cloud.documentai.v1beta1.TableExtractionParams.encode(message.tableExtractionParams, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.formExtractionParams != null && message.hasOwnProperty("formExtractionParams"))
                                $root.google.cloud.documentai.v1beta1.FormExtractionParams.encode(message.formExtractionParams, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                            if (message.entityExtractionParams != null && message.hasOwnProperty("entityExtractionParams"))
                                $root.google.cloud.documentai.v1beta1.EntityExtractionParams.encode(message.entityExtractionParams, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.ocrParams != null && message.hasOwnProperty("ocrParams"))
                                $root.google.cloud.documentai.v1beta1.OcrParams.encode(message.ocrParams, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ProcessDocumentRequest message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.ProcessDocumentRequest.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IProcessDocumentRequest} message ProcessDocumentRequest message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProcessDocumentRequest.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ProcessDocumentRequest message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.ProcessDocumentRequest} ProcessDocumentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProcessDocumentRequest.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.ProcessDocumentRequest();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.inputConfig = $root.google.cloud.documentai.v1beta1.InputConfig.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.outputConfig = $root.google.cloud.documentai.v1beta1.OutputConfig.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.documentType = reader.string();
                                    break;
                                case 4:
                                    message.tableExtractionParams = $root.google.cloud.documentai.v1beta1.TableExtractionParams.decode(reader, reader.uint32());
                                    break;
                                case 5:
                                    message.formExtractionParams = $root.google.cloud.documentai.v1beta1.FormExtractionParams.decode(reader, reader.uint32());
                                    break;
                                case 6:
                                    message.entityExtractionParams = $root.google.cloud.documentai.v1beta1.EntityExtractionParams.decode(reader, reader.uint32());
                                    break;
                                case 7:
                                    message.ocrParams = $root.google.cloud.documentai.v1beta1.OcrParams.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ProcessDocumentRequest message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.ProcessDocumentRequest} ProcessDocumentRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProcessDocumentRequest.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ProcessDocumentRequest message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ProcessDocumentRequest.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.inputConfig != null && message.hasOwnProperty("inputConfig")) {
                                var error = $root.google.cloud.documentai.v1beta1.InputConfig.verify(message.inputConfig);
                                if (error)
                                    return "inputConfig." + error;
                            }
                            if (message.outputConfig != null && message.hasOwnProperty("outputConfig")) {
                                var error = $root.google.cloud.documentai.v1beta1.OutputConfig.verify(message.outputConfig);
                                if (error)
                                    return "outputConfig." + error;
                            }
                            if (message.documentType != null && message.hasOwnProperty("documentType"))
                                if (!$util.isString(message.documentType))
                                    return "documentType: string expected";
                            if (message.tableExtractionParams != null && message.hasOwnProperty("tableExtractionParams")) {
                                var error = $root.google.cloud.documentai.v1beta1.TableExtractionParams.verify(message.tableExtractionParams);
                                if (error)
                                    return "tableExtractionParams." + error;
                            }
                            if (message.formExtractionParams != null && message.hasOwnProperty("formExtractionParams")) {
                                var error = $root.google.cloud.documentai.v1beta1.FormExtractionParams.verify(message.formExtractionParams);
                                if (error)
                                    return "formExtractionParams." + error;
                            }
                            if (message.entityExtractionParams != null && message.hasOwnProperty("entityExtractionParams")) {
                                var error = $root.google.cloud.documentai.v1beta1.EntityExtractionParams.verify(message.entityExtractionParams);
                                if (error)
                                    return "entityExtractionParams." + error;
                            }
                            if (message.ocrParams != null && message.hasOwnProperty("ocrParams")) {
                                var error = $root.google.cloud.documentai.v1beta1.OcrParams.verify(message.ocrParams);
                                if (error)
                                    return "ocrParams." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ProcessDocumentRequest message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.ProcessDocumentRequest} ProcessDocumentRequest
                         */
                        ProcessDocumentRequest.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.ProcessDocumentRequest)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.ProcessDocumentRequest();
                            if (object.inputConfig != null) {
                                if (typeof object.inputConfig !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.ProcessDocumentRequest.inputConfig: object expected");
                                message.inputConfig = $root.google.cloud.documentai.v1beta1.InputConfig.fromObject(object.inputConfig);
                            }
                            if (object.outputConfig != null) {
                                if (typeof object.outputConfig !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.ProcessDocumentRequest.outputConfig: object expected");
                                message.outputConfig = $root.google.cloud.documentai.v1beta1.OutputConfig.fromObject(object.outputConfig);
                            }
                            if (object.documentType != null)
                                message.documentType = String(object.documentType);
                            if (object.tableExtractionParams != null) {
                                if (typeof object.tableExtractionParams !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.ProcessDocumentRequest.tableExtractionParams: object expected");
                                message.tableExtractionParams = $root.google.cloud.documentai.v1beta1.TableExtractionParams.fromObject(object.tableExtractionParams);
                            }
                            if (object.formExtractionParams != null) {
                                if (typeof object.formExtractionParams !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.ProcessDocumentRequest.formExtractionParams: object expected");
                                message.formExtractionParams = $root.google.cloud.documentai.v1beta1.FormExtractionParams.fromObject(object.formExtractionParams);
                            }
                            if (object.entityExtractionParams != null) {
                                if (typeof object.entityExtractionParams !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.ProcessDocumentRequest.entityExtractionParams: object expected");
                                message.entityExtractionParams = $root.google.cloud.documentai.v1beta1.EntityExtractionParams.fromObject(object.entityExtractionParams);
                            }
                            if (object.ocrParams != null) {
                                if (typeof object.ocrParams !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.ProcessDocumentRequest.ocrParams: object expected");
                                message.ocrParams = $root.google.cloud.documentai.v1beta1.OcrParams.fromObject(object.ocrParams);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ProcessDocumentRequest message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @static
                         * @param {google.cloud.documentai.v1beta1.ProcessDocumentRequest} message ProcessDocumentRequest
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ProcessDocumentRequest.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.inputConfig = null;
                                object.outputConfig = null;
                                object.documentType = "";
                                object.tableExtractionParams = null;
                                object.formExtractionParams = null;
                                object.entityExtractionParams = null;
                                object.ocrParams = null;
                            }
                            if (message.inputConfig != null && message.hasOwnProperty("inputConfig"))
                                object.inputConfig = $root.google.cloud.documentai.v1beta1.InputConfig.toObject(message.inputConfig, options);
                            if (message.outputConfig != null && message.hasOwnProperty("outputConfig"))
                                object.outputConfig = $root.google.cloud.documentai.v1beta1.OutputConfig.toObject(message.outputConfig, options);
                            if (message.documentType != null && message.hasOwnProperty("documentType"))
                                object.documentType = message.documentType;
                            if (message.tableExtractionParams != null && message.hasOwnProperty("tableExtractionParams"))
                                object.tableExtractionParams = $root.google.cloud.documentai.v1beta1.TableExtractionParams.toObject(message.tableExtractionParams, options);
                            if (message.formExtractionParams != null && message.hasOwnProperty("formExtractionParams"))
                                object.formExtractionParams = $root.google.cloud.documentai.v1beta1.FormExtractionParams.toObject(message.formExtractionParams, options);
                            if (message.entityExtractionParams != null && message.hasOwnProperty("entityExtractionParams"))
                                object.entityExtractionParams = $root.google.cloud.documentai.v1beta1.EntityExtractionParams.toObject(message.entityExtractionParams, options);
                            if (message.ocrParams != null && message.hasOwnProperty("ocrParams"))
                                object.ocrParams = $root.google.cloud.documentai.v1beta1.OcrParams.toObject(message.ocrParams, options);
                            return object;
                        };
    
                        /**
                         * Converts this ProcessDocumentRequest to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentRequest
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ProcessDocumentRequest.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ProcessDocumentRequest;
                    })();
    
                    v1beta1.BatchProcessDocumentsResponse = (function() {
    
                        /**
                         * Properties of a BatchProcessDocumentsResponse.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IBatchProcessDocumentsResponse
                         * @property {Array.<google.cloud.documentai.v1beta1.IProcessDocumentResponse>|null} [responses] BatchProcessDocumentsResponse responses
                         */
    
                        /**
                         * Constructs a new BatchProcessDocumentsResponse.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a BatchProcessDocumentsResponse.
                         * @implements IBatchProcessDocumentsResponse
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsResponse=} [properties] Properties to set
                         */
                        function BatchProcessDocumentsResponse(properties) {
                            this.responses = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * BatchProcessDocumentsResponse responses.
                         * @member {Array.<google.cloud.documentai.v1beta1.IProcessDocumentResponse>} responses
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @instance
                         */
                        BatchProcessDocumentsResponse.prototype.responses = $util.emptyArray;
    
                        /**
                         * Creates a new BatchProcessDocumentsResponse instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsResponse=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse} BatchProcessDocumentsResponse instance
                         */
                        BatchProcessDocumentsResponse.create = function create(properties) {
                            return new BatchProcessDocumentsResponse(properties);
                        };
    
                        /**
                         * Encodes the specified BatchProcessDocumentsResponse message. Does not implicitly {@link google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsResponse} message BatchProcessDocumentsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BatchProcessDocumentsResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.responses != null && message.responses.length)
                                for (var i = 0; i < message.responses.length; ++i)
                                    $root.google.cloud.documentai.v1beta1.ProcessDocumentResponse.encode(message.responses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified BatchProcessDocumentsResponse message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBatchProcessDocumentsResponse} message BatchProcessDocumentsResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BatchProcessDocumentsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a BatchProcessDocumentsResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse} BatchProcessDocumentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BatchProcessDocumentsResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.responses && message.responses.length))
                                        message.responses = [];
                                    message.responses.push($root.google.cloud.documentai.v1beta1.ProcessDocumentResponse.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a BatchProcessDocumentsResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse} BatchProcessDocumentsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BatchProcessDocumentsResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a BatchProcessDocumentsResponse message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BatchProcessDocumentsResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.responses != null && message.hasOwnProperty("responses")) {
                                if (!Array.isArray(message.responses))
                                    return "responses: array expected";
                                for (var i = 0; i < message.responses.length; ++i) {
                                    var error = $root.google.cloud.documentai.v1beta1.ProcessDocumentResponse.verify(message.responses[i]);
                                    if (error)
                                        return "responses." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a BatchProcessDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse} BatchProcessDocumentsResponse
                         */
                        BatchProcessDocumentsResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse();
                            if (object.responses) {
                                if (!Array.isArray(object.responses))
                                    throw TypeError(".google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse.responses: array expected");
                                message.responses = [];
                                for (var i = 0; i < object.responses.length; ++i) {
                                    if (typeof object.responses[i] !== "object")
                                        throw TypeError(".google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse.responses: object expected");
                                    message.responses[i] = $root.google.cloud.documentai.v1beta1.ProcessDocumentResponse.fromObject(object.responses[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a BatchProcessDocumentsResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @static
                         * @param {google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse} message BatchProcessDocumentsResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BatchProcessDocumentsResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.responses = [];
                            if (message.responses && message.responses.length) {
                                object.responses = [];
                                for (var j = 0; j < message.responses.length; ++j)
                                    object.responses[j] = $root.google.cloud.documentai.v1beta1.ProcessDocumentResponse.toObject(message.responses[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this BatchProcessDocumentsResponse to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.BatchProcessDocumentsResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BatchProcessDocumentsResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return BatchProcessDocumentsResponse;
                    })();
    
                    v1beta1.ProcessDocumentResponse = (function() {
    
                        /**
                         * Properties of a ProcessDocumentResponse.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IProcessDocumentResponse
                         * @property {google.cloud.documentai.v1beta1.IInputConfig|null} [inputConfig] ProcessDocumentResponse inputConfig
                         * @property {google.cloud.documentai.v1beta1.IOutputConfig|null} [outputConfig] ProcessDocumentResponse outputConfig
                         */
    
                        /**
                         * Constructs a new ProcessDocumentResponse.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a ProcessDocumentResponse.
                         * @implements IProcessDocumentResponse
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IProcessDocumentResponse=} [properties] Properties to set
                         */
                        function ProcessDocumentResponse(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * ProcessDocumentResponse inputConfig.
                         * @member {google.cloud.documentai.v1beta1.IInputConfig|null|undefined} inputConfig
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @instance
                         */
                        ProcessDocumentResponse.prototype.inputConfig = null;
    
                        /**
                         * ProcessDocumentResponse outputConfig.
                         * @member {google.cloud.documentai.v1beta1.IOutputConfig|null|undefined} outputConfig
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @instance
                         */
                        ProcessDocumentResponse.prototype.outputConfig = null;
    
                        /**
                         * Creates a new ProcessDocumentResponse instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IProcessDocumentResponse=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.ProcessDocumentResponse} ProcessDocumentResponse instance
                         */
                        ProcessDocumentResponse.create = function create(properties) {
                            return new ProcessDocumentResponse(properties);
                        };
    
                        /**
                         * Encodes the specified ProcessDocumentResponse message. Does not implicitly {@link google.cloud.documentai.v1beta1.ProcessDocumentResponse.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IProcessDocumentResponse} message ProcessDocumentResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProcessDocumentResponse.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.inputConfig != null && message.hasOwnProperty("inputConfig"))
                                $root.google.cloud.documentai.v1beta1.InputConfig.encode(message.inputConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.outputConfig != null && message.hasOwnProperty("outputConfig"))
                                $root.google.cloud.documentai.v1beta1.OutputConfig.encode(message.outputConfig, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified ProcessDocumentResponse message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.ProcessDocumentResponse.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IProcessDocumentResponse} message ProcessDocumentResponse message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        ProcessDocumentResponse.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a ProcessDocumentResponse message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.ProcessDocumentResponse} ProcessDocumentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProcessDocumentResponse.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.ProcessDocumentResponse();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.inputConfig = $root.google.cloud.documentai.v1beta1.InputConfig.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.outputConfig = $root.google.cloud.documentai.v1beta1.OutputConfig.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a ProcessDocumentResponse message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.ProcessDocumentResponse} ProcessDocumentResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        ProcessDocumentResponse.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a ProcessDocumentResponse message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        ProcessDocumentResponse.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.inputConfig != null && message.hasOwnProperty("inputConfig")) {
                                var error = $root.google.cloud.documentai.v1beta1.InputConfig.verify(message.inputConfig);
                                if (error)
                                    return "inputConfig." + error;
                            }
                            if (message.outputConfig != null && message.hasOwnProperty("outputConfig")) {
                                var error = $root.google.cloud.documentai.v1beta1.OutputConfig.verify(message.outputConfig);
                                if (error)
                                    return "outputConfig." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a ProcessDocumentResponse message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.ProcessDocumentResponse} ProcessDocumentResponse
                         */
                        ProcessDocumentResponse.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.ProcessDocumentResponse)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.ProcessDocumentResponse();
                            if (object.inputConfig != null) {
                                if (typeof object.inputConfig !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.ProcessDocumentResponse.inputConfig: object expected");
                                message.inputConfig = $root.google.cloud.documentai.v1beta1.InputConfig.fromObject(object.inputConfig);
                            }
                            if (object.outputConfig != null) {
                                if (typeof object.outputConfig !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.ProcessDocumentResponse.outputConfig: object expected");
                                message.outputConfig = $root.google.cloud.documentai.v1beta1.OutputConfig.fromObject(object.outputConfig);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a ProcessDocumentResponse message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @static
                         * @param {google.cloud.documentai.v1beta1.ProcessDocumentResponse} message ProcessDocumentResponse
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        ProcessDocumentResponse.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.inputConfig = null;
                                object.outputConfig = null;
                            }
                            if (message.inputConfig != null && message.hasOwnProperty("inputConfig"))
                                object.inputConfig = $root.google.cloud.documentai.v1beta1.InputConfig.toObject(message.inputConfig, options);
                            if (message.outputConfig != null && message.hasOwnProperty("outputConfig"))
                                object.outputConfig = $root.google.cloud.documentai.v1beta1.OutputConfig.toObject(message.outputConfig, options);
                            return object;
                        };
    
                        /**
                         * Converts this ProcessDocumentResponse to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.ProcessDocumentResponse
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        ProcessDocumentResponse.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return ProcessDocumentResponse;
                    })();
    
                    v1beta1.OcrParams = (function() {
    
                        /**
                         * Properties of an OcrParams.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IOcrParams
                         * @property {Array.<string>|null} [languageHints] OcrParams languageHints
                         */
    
                        /**
                         * Constructs a new OcrParams.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents an OcrParams.
                         * @implements IOcrParams
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IOcrParams=} [properties] Properties to set
                         */
                        function OcrParams(properties) {
                            this.languageHints = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * OcrParams languageHints.
                         * @member {Array.<string>} languageHints
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @instance
                         */
                        OcrParams.prototype.languageHints = $util.emptyArray;
    
                        /**
                         * Creates a new OcrParams instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOcrParams=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.OcrParams} OcrParams instance
                         */
                        OcrParams.create = function create(properties) {
                            return new OcrParams(properties);
                        };
    
                        /**
                         * Encodes the specified OcrParams message. Does not implicitly {@link google.cloud.documentai.v1beta1.OcrParams.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOcrParams} message OcrParams message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OcrParams.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.languageHints != null && message.languageHints.length)
                                for (var i = 0; i < message.languageHints.length; ++i)
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.languageHints[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified OcrParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.OcrParams.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOcrParams} message OcrParams message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OcrParams.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an OcrParams message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.OcrParams} OcrParams
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OcrParams.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.OcrParams();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.languageHints && message.languageHints.length))
                                        message.languageHints = [];
                                    message.languageHints.push(reader.string());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an OcrParams message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.OcrParams} OcrParams
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OcrParams.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an OcrParams message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        OcrParams.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.languageHints != null && message.hasOwnProperty("languageHints")) {
                                if (!Array.isArray(message.languageHints))
                                    return "languageHints: array expected";
                                for (var i = 0; i < message.languageHints.length; ++i)
                                    if (!$util.isString(message.languageHints[i]))
                                        return "languageHints: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates an OcrParams message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.OcrParams} OcrParams
                         */
                        OcrParams.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.OcrParams)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.OcrParams();
                            if (object.languageHints) {
                                if (!Array.isArray(object.languageHints))
                                    throw TypeError(".google.cloud.documentai.v1beta1.OcrParams.languageHints: array expected");
                                message.languageHints = [];
                                for (var i = 0; i < object.languageHints.length; ++i)
                                    message.languageHints[i] = String(object.languageHints[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an OcrParams message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.OcrParams} message OcrParams
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        OcrParams.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.languageHints = [];
                            if (message.languageHints && message.languageHints.length) {
                                object.languageHints = [];
                                for (var j = 0; j < message.languageHints.length; ++j)
                                    object.languageHints[j] = message.languageHints[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this OcrParams to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.OcrParams
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        OcrParams.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return OcrParams;
                    })();
    
                    v1beta1.TableExtractionParams = (function() {
    
                        /**
                         * Properties of a TableExtractionParams.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface ITableExtractionParams
                         * @property {boolean|null} [enabled] TableExtractionParams enabled
                         * @property {Array.<google.cloud.documentai.v1beta1.ITableBoundHint>|null} [tableBoundHints] TableExtractionParams tableBoundHints
                         * @property {Array.<string>|null} [headerHints] TableExtractionParams headerHints
                         * @property {string|null} [modelVersion] TableExtractionParams modelVersion
                         */
    
                        /**
                         * Constructs a new TableExtractionParams.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a TableExtractionParams.
                         * @implements ITableExtractionParams
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.ITableExtractionParams=} [properties] Properties to set
                         */
                        function TableExtractionParams(properties) {
                            this.tableBoundHints = [];
                            this.headerHints = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * TableExtractionParams enabled.
                         * @member {boolean} enabled
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @instance
                         */
                        TableExtractionParams.prototype.enabled = false;
    
                        /**
                         * TableExtractionParams tableBoundHints.
                         * @member {Array.<google.cloud.documentai.v1beta1.ITableBoundHint>} tableBoundHints
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @instance
                         */
                        TableExtractionParams.prototype.tableBoundHints = $util.emptyArray;
    
                        /**
                         * TableExtractionParams headerHints.
                         * @member {Array.<string>} headerHints
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @instance
                         */
                        TableExtractionParams.prototype.headerHints = $util.emptyArray;
    
                        /**
                         * TableExtractionParams modelVersion.
                         * @member {string} modelVersion
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @instance
                         */
                        TableExtractionParams.prototype.modelVersion = "";
    
                        /**
                         * Creates a new TableExtractionParams instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.ITableExtractionParams=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.TableExtractionParams} TableExtractionParams instance
                         */
                        TableExtractionParams.create = function create(properties) {
                            return new TableExtractionParams(properties);
                        };
    
                        /**
                         * Encodes the specified TableExtractionParams message. Does not implicitly {@link google.cloud.documentai.v1beta1.TableExtractionParams.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.ITableExtractionParams} message TableExtractionParams message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TableExtractionParams.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
                            if (message.tableBoundHints != null && message.tableBoundHints.length)
                                for (var i = 0; i < message.tableBoundHints.length; ++i)
                                    $root.google.cloud.documentai.v1beta1.TableBoundHint.encode(message.tableBoundHints[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.headerHints != null && message.headerHints.length)
                                for (var i = 0; i < message.headerHints.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headerHints[i]);
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.modelVersion);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified TableExtractionParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.TableExtractionParams.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.ITableExtractionParams} message TableExtractionParams message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TableExtractionParams.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a TableExtractionParams message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.TableExtractionParams} TableExtractionParams
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TableExtractionParams.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.TableExtractionParams();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.enabled = reader.bool();
                                    break;
                                case 2:
                                    if (!(message.tableBoundHints && message.tableBoundHints.length))
                                        message.tableBoundHints = [];
                                    message.tableBoundHints.push($root.google.cloud.documentai.v1beta1.TableBoundHint.decode(reader, reader.uint32()));
                                    break;
                                case 3:
                                    if (!(message.headerHints && message.headerHints.length))
                                        message.headerHints = [];
                                    message.headerHints.push(reader.string());
                                    break;
                                case 4:
                                    message.modelVersion = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a TableExtractionParams message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.TableExtractionParams} TableExtractionParams
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TableExtractionParams.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a TableExtractionParams message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TableExtractionParams.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                if (typeof message.enabled !== "boolean")
                                    return "enabled: boolean expected";
                            if (message.tableBoundHints != null && message.hasOwnProperty("tableBoundHints")) {
                                if (!Array.isArray(message.tableBoundHints))
                                    return "tableBoundHints: array expected";
                                for (var i = 0; i < message.tableBoundHints.length; ++i) {
                                    var error = $root.google.cloud.documentai.v1beta1.TableBoundHint.verify(message.tableBoundHints[i]);
                                    if (error)
                                        return "tableBoundHints." + error;
                                }
                            }
                            if (message.headerHints != null && message.hasOwnProperty("headerHints")) {
                                if (!Array.isArray(message.headerHints))
                                    return "headerHints: array expected";
                                for (var i = 0; i < message.headerHints.length; ++i)
                                    if (!$util.isString(message.headerHints[i]))
                                        return "headerHints: string[] expected";
                            }
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                if (!$util.isString(message.modelVersion))
                                    return "modelVersion: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a TableExtractionParams message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.TableExtractionParams} TableExtractionParams
                         */
                        TableExtractionParams.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.TableExtractionParams)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.TableExtractionParams();
                            if (object.enabled != null)
                                message.enabled = Boolean(object.enabled);
                            if (object.tableBoundHints) {
                                if (!Array.isArray(object.tableBoundHints))
                                    throw TypeError(".google.cloud.documentai.v1beta1.TableExtractionParams.tableBoundHints: array expected");
                                message.tableBoundHints = [];
                                for (var i = 0; i < object.tableBoundHints.length; ++i) {
                                    if (typeof object.tableBoundHints[i] !== "object")
                                        throw TypeError(".google.cloud.documentai.v1beta1.TableExtractionParams.tableBoundHints: object expected");
                                    message.tableBoundHints[i] = $root.google.cloud.documentai.v1beta1.TableBoundHint.fromObject(object.tableBoundHints[i]);
                                }
                            }
                            if (object.headerHints) {
                                if (!Array.isArray(object.headerHints))
                                    throw TypeError(".google.cloud.documentai.v1beta1.TableExtractionParams.headerHints: array expected");
                                message.headerHints = [];
                                for (var i = 0; i < object.headerHints.length; ++i)
                                    message.headerHints[i] = String(object.headerHints[i]);
                            }
                            if (object.modelVersion != null)
                                message.modelVersion = String(object.modelVersion);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a TableExtractionParams message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.TableExtractionParams} message TableExtractionParams
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TableExtractionParams.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.tableBoundHints = [];
                                object.headerHints = [];
                            }
                            if (options.defaults) {
                                object.enabled = false;
                                object.modelVersion = "";
                            }
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                object.enabled = message.enabled;
                            if (message.tableBoundHints && message.tableBoundHints.length) {
                                object.tableBoundHints = [];
                                for (var j = 0; j < message.tableBoundHints.length; ++j)
                                    object.tableBoundHints[j] = $root.google.cloud.documentai.v1beta1.TableBoundHint.toObject(message.tableBoundHints[j], options);
                            }
                            if (message.headerHints && message.headerHints.length) {
                                object.headerHints = [];
                                for (var j = 0; j < message.headerHints.length; ++j)
                                    object.headerHints[j] = message.headerHints[j];
                            }
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                object.modelVersion = message.modelVersion;
                            return object;
                        };
    
                        /**
                         * Converts this TableExtractionParams to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.TableExtractionParams
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TableExtractionParams.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return TableExtractionParams;
                    })();
    
                    v1beta1.TableBoundHint = (function() {
    
                        /**
                         * Properties of a TableBoundHint.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface ITableBoundHint
                         * @property {number|null} [pageNumber] TableBoundHint pageNumber
                         * @property {google.cloud.documentai.v1beta1.IBoundingPoly|null} [boundingBox] TableBoundHint boundingBox
                         */
    
                        /**
                         * Constructs a new TableBoundHint.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a TableBoundHint.
                         * @implements ITableBoundHint
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.ITableBoundHint=} [properties] Properties to set
                         */
                        function TableBoundHint(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * TableBoundHint pageNumber.
                         * @member {number} pageNumber
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @instance
                         */
                        TableBoundHint.prototype.pageNumber = 0;
    
                        /**
                         * TableBoundHint boundingBox.
                         * @member {google.cloud.documentai.v1beta1.IBoundingPoly|null|undefined} boundingBox
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @instance
                         */
                        TableBoundHint.prototype.boundingBox = null;
    
                        /**
                         * Creates a new TableBoundHint instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @static
                         * @param {google.cloud.documentai.v1beta1.ITableBoundHint=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.TableBoundHint} TableBoundHint instance
                         */
                        TableBoundHint.create = function create(properties) {
                            return new TableBoundHint(properties);
                        };
    
                        /**
                         * Encodes the specified TableBoundHint message. Does not implicitly {@link google.cloud.documentai.v1beta1.TableBoundHint.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @static
                         * @param {google.cloud.documentai.v1beta1.ITableBoundHint} message TableBoundHint message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TableBoundHint.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.pageNumber != null && message.hasOwnProperty("pageNumber"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pageNumber);
                            if (message.boundingBox != null && message.hasOwnProperty("boundingBox"))
                                $root.google.cloud.documentai.v1beta1.BoundingPoly.encode(message.boundingBox, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified TableBoundHint message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.TableBoundHint.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @static
                         * @param {google.cloud.documentai.v1beta1.ITableBoundHint} message TableBoundHint message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TableBoundHint.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a TableBoundHint message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.TableBoundHint} TableBoundHint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TableBoundHint.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.TableBoundHint();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.pageNumber = reader.int32();
                                    break;
                                case 2:
                                    message.boundingBox = $root.google.cloud.documentai.v1beta1.BoundingPoly.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a TableBoundHint message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.TableBoundHint} TableBoundHint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TableBoundHint.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a TableBoundHint message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TableBoundHint.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.pageNumber != null && message.hasOwnProperty("pageNumber"))
                                if (!$util.isInteger(message.pageNumber))
                                    return "pageNumber: integer expected";
                            if (message.boundingBox != null && message.hasOwnProperty("boundingBox")) {
                                var error = $root.google.cloud.documentai.v1beta1.BoundingPoly.verify(message.boundingBox);
                                if (error)
                                    return "boundingBox." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a TableBoundHint message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.TableBoundHint} TableBoundHint
                         */
                        TableBoundHint.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.TableBoundHint)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.TableBoundHint();
                            if (object.pageNumber != null)
                                message.pageNumber = object.pageNumber | 0;
                            if (object.boundingBox != null) {
                                if (typeof object.boundingBox !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.TableBoundHint.boundingBox: object expected");
                                message.boundingBox = $root.google.cloud.documentai.v1beta1.BoundingPoly.fromObject(object.boundingBox);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a TableBoundHint message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @static
                         * @param {google.cloud.documentai.v1beta1.TableBoundHint} message TableBoundHint
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TableBoundHint.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.pageNumber = 0;
                                object.boundingBox = null;
                            }
                            if (message.pageNumber != null && message.hasOwnProperty("pageNumber"))
                                object.pageNumber = message.pageNumber;
                            if (message.boundingBox != null && message.hasOwnProperty("boundingBox"))
                                object.boundingBox = $root.google.cloud.documentai.v1beta1.BoundingPoly.toObject(message.boundingBox, options);
                            return object;
                        };
    
                        /**
                         * Converts this TableBoundHint to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.TableBoundHint
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TableBoundHint.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return TableBoundHint;
                    })();
    
                    v1beta1.FormExtractionParams = (function() {
    
                        /**
                         * Properties of a FormExtractionParams.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IFormExtractionParams
                         * @property {boolean|null} [enabled] FormExtractionParams enabled
                         * @property {Array.<google.cloud.documentai.v1beta1.IKeyValuePairHint>|null} [keyValuePairHints] FormExtractionParams keyValuePairHints
                         * @property {string|null} [modelVersion] FormExtractionParams modelVersion
                         */
    
                        /**
                         * Constructs a new FormExtractionParams.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a FormExtractionParams.
                         * @implements IFormExtractionParams
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IFormExtractionParams=} [properties] Properties to set
                         */
                        function FormExtractionParams(properties) {
                            this.keyValuePairHints = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * FormExtractionParams enabled.
                         * @member {boolean} enabled
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @instance
                         */
                        FormExtractionParams.prototype.enabled = false;
    
                        /**
                         * FormExtractionParams keyValuePairHints.
                         * @member {Array.<google.cloud.documentai.v1beta1.IKeyValuePairHint>} keyValuePairHints
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @instance
                         */
                        FormExtractionParams.prototype.keyValuePairHints = $util.emptyArray;
    
                        /**
                         * FormExtractionParams modelVersion.
                         * @member {string} modelVersion
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @instance
                         */
                        FormExtractionParams.prototype.modelVersion = "";
    
                        /**
                         * Creates a new FormExtractionParams instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IFormExtractionParams=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.FormExtractionParams} FormExtractionParams instance
                         */
                        FormExtractionParams.create = function create(properties) {
                            return new FormExtractionParams(properties);
                        };
    
                        /**
                         * Encodes the specified FormExtractionParams message. Does not implicitly {@link google.cloud.documentai.v1beta1.FormExtractionParams.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IFormExtractionParams} message FormExtractionParams message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        FormExtractionParams.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
                            if (message.keyValuePairHints != null && message.keyValuePairHints.length)
                                for (var i = 0; i < message.keyValuePairHints.length; ++i)
                                    $root.google.cloud.documentai.v1beta1.KeyValuePairHint.encode(message.keyValuePairHints[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.modelVersion);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified FormExtractionParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.FormExtractionParams.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IFormExtractionParams} message FormExtractionParams message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        FormExtractionParams.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a FormExtractionParams message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.FormExtractionParams} FormExtractionParams
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        FormExtractionParams.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.FormExtractionParams();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.enabled = reader.bool();
                                    break;
                                case 2:
                                    if (!(message.keyValuePairHints && message.keyValuePairHints.length))
                                        message.keyValuePairHints = [];
                                    message.keyValuePairHints.push($root.google.cloud.documentai.v1beta1.KeyValuePairHint.decode(reader, reader.uint32()));
                                    break;
                                case 3:
                                    message.modelVersion = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a FormExtractionParams message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.FormExtractionParams} FormExtractionParams
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        FormExtractionParams.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a FormExtractionParams message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        FormExtractionParams.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                if (typeof message.enabled !== "boolean")
                                    return "enabled: boolean expected";
                            if (message.keyValuePairHints != null && message.hasOwnProperty("keyValuePairHints")) {
                                if (!Array.isArray(message.keyValuePairHints))
                                    return "keyValuePairHints: array expected";
                                for (var i = 0; i < message.keyValuePairHints.length; ++i) {
                                    var error = $root.google.cloud.documentai.v1beta1.KeyValuePairHint.verify(message.keyValuePairHints[i]);
                                    if (error)
                                        return "keyValuePairHints." + error;
                                }
                            }
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                if (!$util.isString(message.modelVersion))
                                    return "modelVersion: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a FormExtractionParams message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.FormExtractionParams} FormExtractionParams
                         */
                        FormExtractionParams.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.FormExtractionParams)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.FormExtractionParams();
                            if (object.enabled != null)
                                message.enabled = Boolean(object.enabled);
                            if (object.keyValuePairHints) {
                                if (!Array.isArray(object.keyValuePairHints))
                                    throw TypeError(".google.cloud.documentai.v1beta1.FormExtractionParams.keyValuePairHints: array expected");
                                message.keyValuePairHints = [];
                                for (var i = 0; i < object.keyValuePairHints.length; ++i) {
                                    if (typeof object.keyValuePairHints[i] !== "object")
                                        throw TypeError(".google.cloud.documentai.v1beta1.FormExtractionParams.keyValuePairHints: object expected");
                                    message.keyValuePairHints[i] = $root.google.cloud.documentai.v1beta1.KeyValuePairHint.fromObject(object.keyValuePairHints[i]);
                                }
                            }
                            if (object.modelVersion != null)
                                message.modelVersion = String(object.modelVersion);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a FormExtractionParams message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.FormExtractionParams} message FormExtractionParams
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        FormExtractionParams.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.keyValuePairHints = [];
                            if (options.defaults) {
                                object.enabled = false;
                                object.modelVersion = "";
                            }
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                object.enabled = message.enabled;
                            if (message.keyValuePairHints && message.keyValuePairHints.length) {
                                object.keyValuePairHints = [];
                                for (var j = 0; j < message.keyValuePairHints.length; ++j)
                                    object.keyValuePairHints[j] = $root.google.cloud.documentai.v1beta1.KeyValuePairHint.toObject(message.keyValuePairHints[j], options);
                            }
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                object.modelVersion = message.modelVersion;
                            return object;
                        };
    
                        /**
                         * Converts this FormExtractionParams to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.FormExtractionParams
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        FormExtractionParams.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return FormExtractionParams;
                    })();
    
                    v1beta1.KeyValuePairHint = (function() {
    
                        /**
                         * Properties of a KeyValuePairHint.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IKeyValuePairHint
                         * @property {string|null} [key] KeyValuePairHint key
                         * @property {Array.<string>|null} [valueTypes] KeyValuePairHint valueTypes
                         */
    
                        /**
                         * Constructs a new KeyValuePairHint.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a KeyValuePairHint.
                         * @implements IKeyValuePairHint
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IKeyValuePairHint=} [properties] Properties to set
                         */
                        function KeyValuePairHint(properties) {
                            this.valueTypes = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * KeyValuePairHint key.
                         * @member {string} key
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @instance
                         */
                        KeyValuePairHint.prototype.key = "";
    
                        /**
                         * KeyValuePairHint valueTypes.
                         * @member {Array.<string>} valueTypes
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @instance
                         */
                        KeyValuePairHint.prototype.valueTypes = $util.emptyArray;
    
                        /**
                         * Creates a new KeyValuePairHint instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IKeyValuePairHint=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.KeyValuePairHint} KeyValuePairHint instance
                         */
                        KeyValuePairHint.create = function create(properties) {
                            return new KeyValuePairHint(properties);
                        };
    
                        /**
                         * Encodes the specified KeyValuePairHint message. Does not implicitly {@link google.cloud.documentai.v1beta1.KeyValuePairHint.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IKeyValuePairHint} message KeyValuePairHint message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        KeyValuePairHint.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.key != null && message.hasOwnProperty("key"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                            if (message.valueTypes != null && message.valueTypes.length)
                                for (var i = 0; i < message.valueTypes.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.valueTypes[i]);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified KeyValuePairHint message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.KeyValuePairHint.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IKeyValuePairHint} message KeyValuePairHint message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        KeyValuePairHint.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a KeyValuePairHint message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.KeyValuePairHint} KeyValuePairHint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        KeyValuePairHint.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.KeyValuePairHint();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.key = reader.string();
                                    break;
                                case 2:
                                    if (!(message.valueTypes && message.valueTypes.length))
                                        message.valueTypes = [];
                                    message.valueTypes.push(reader.string());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a KeyValuePairHint message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.KeyValuePairHint} KeyValuePairHint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        KeyValuePairHint.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a KeyValuePairHint message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        KeyValuePairHint.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.key != null && message.hasOwnProperty("key"))
                                if (!$util.isString(message.key))
                                    return "key: string expected";
                            if (message.valueTypes != null && message.hasOwnProperty("valueTypes")) {
                                if (!Array.isArray(message.valueTypes))
                                    return "valueTypes: array expected";
                                for (var i = 0; i < message.valueTypes.length; ++i)
                                    if (!$util.isString(message.valueTypes[i]))
                                        return "valueTypes: string[] expected";
                            }
                            return null;
                        };
    
                        /**
                         * Creates a KeyValuePairHint message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.KeyValuePairHint} KeyValuePairHint
                         */
                        KeyValuePairHint.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.KeyValuePairHint)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.KeyValuePairHint();
                            if (object.key != null)
                                message.key = String(object.key);
                            if (object.valueTypes) {
                                if (!Array.isArray(object.valueTypes))
                                    throw TypeError(".google.cloud.documentai.v1beta1.KeyValuePairHint.valueTypes: array expected");
                                message.valueTypes = [];
                                for (var i = 0; i < object.valueTypes.length; ++i)
                                    message.valueTypes[i] = String(object.valueTypes[i]);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a KeyValuePairHint message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @static
                         * @param {google.cloud.documentai.v1beta1.KeyValuePairHint} message KeyValuePairHint
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        KeyValuePairHint.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.valueTypes = [];
                            if (options.defaults)
                                object.key = "";
                            if (message.key != null && message.hasOwnProperty("key"))
                                object.key = message.key;
                            if (message.valueTypes && message.valueTypes.length) {
                                object.valueTypes = [];
                                for (var j = 0; j < message.valueTypes.length; ++j)
                                    object.valueTypes[j] = message.valueTypes[j];
                            }
                            return object;
                        };
    
                        /**
                         * Converts this KeyValuePairHint to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.KeyValuePairHint
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        KeyValuePairHint.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return KeyValuePairHint;
                    })();
    
                    v1beta1.EntityExtractionParams = (function() {
    
                        /**
                         * Properties of an EntityExtractionParams.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IEntityExtractionParams
                         * @property {boolean|null} [enabled] EntityExtractionParams enabled
                         * @property {string|null} [modelVersion] EntityExtractionParams modelVersion
                         */
    
                        /**
                         * Constructs a new EntityExtractionParams.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents an EntityExtractionParams.
                         * @implements IEntityExtractionParams
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IEntityExtractionParams=} [properties] Properties to set
                         */
                        function EntityExtractionParams(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * EntityExtractionParams enabled.
                         * @member {boolean} enabled
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @instance
                         */
                        EntityExtractionParams.prototype.enabled = false;
    
                        /**
                         * EntityExtractionParams modelVersion.
                         * @member {string} modelVersion
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @instance
                         */
                        EntityExtractionParams.prototype.modelVersion = "";
    
                        /**
                         * Creates a new EntityExtractionParams instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IEntityExtractionParams=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.EntityExtractionParams} EntityExtractionParams instance
                         */
                        EntityExtractionParams.create = function create(properties) {
                            return new EntityExtractionParams(properties);
                        };
    
                        /**
                         * Encodes the specified EntityExtractionParams message. Does not implicitly {@link google.cloud.documentai.v1beta1.EntityExtractionParams.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IEntityExtractionParams} message EntityExtractionParams message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EntityExtractionParams.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.modelVersion);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified EntityExtractionParams message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.EntityExtractionParams.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IEntityExtractionParams} message EntityExtractionParams message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        EntityExtractionParams.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an EntityExtractionParams message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.EntityExtractionParams} EntityExtractionParams
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EntityExtractionParams.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.EntityExtractionParams();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.enabled = reader.bool();
                                    break;
                                case 2:
                                    message.modelVersion = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an EntityExtractionParams message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.EntityExtractionParams} EntityExtractionParams
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        EntityExtractionParams.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an EntityExtractionParams message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        EntityExtractionParams.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                if (typeof message.enabled !== "boolean")
                                    return "enabled: boolean expected";
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                if (!$util.isString(message.modelVersion))
                                    return "modelVersion: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an EntityExtractionParams message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.EntityExtractionParams} EntityExtractionParams
                         */
                        EntityExtractionParams.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.EntityExtractionParams)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.EntityExtractionParams();
                            if (object.enabled != null)
                                message.enabled = Boolean(object.enabled);
                            if (object.modelVersion != null)
                                message.modelVersion = String(object.modelVersion);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an EntityExtractionParams message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @static
                         * @param {google.cloud.documentai.v1beta1.EntityExtractionParams} message EntityExtractionParams
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        EntityExtractionParams.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.enabled = false;
                                object.modelVersion = "";
                            }
                            if (message.enabled != null && message.hasOwnProperty("enabled"))
                                object.enabled = message.enabled;
                            if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                                object.modelVersion = message.modelVersion;
                            return object;
                        };
    
                        /**
                         * Converts this EntityExtractionParams to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.EntityExtractionParams
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        EntityExtractionParams.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return EntityExtractionParams;
                    })();
    
                    v1beta1.InputConfig = (function() {
    
                        /**
                         * Properties of an InputConfig.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IInputConfig
                         * @property {google.cloud.documentai.v1beta1.IGcsSource|null} [gcsSource] InputConfig gcsSource
                         * @property {string|null} [mimeType] InputConfig mimeType
                         */
    
                        /**
                         * Constructs a new InputConfig.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents an InputConfig.
                         * @implements IInputConfig
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IInputConfig=} [properties] Properties to set
                         */
                        function InputConfig(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * InputConfig gcsSource.
                         * @member {google.cloud.documentai.v1beta1.IGcsSource|null|undefined} gcsSource
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @instance
                         */
                        InputConfig.prototype.gcsSource = null;
    
                        /**
                         * InputConfig mimeType.
                         * @member {string} mimeType
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @instance
                         */
                        InputConfig.prototype.mimeType = "";
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * InputConfig source.
                         * @member {"gcsSource"|undefined} source
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @instance
                         */
                        Object.defineProperty(InputConfig.prototype, "source", {
                            get: $util.oneOfGetter($oneOfFields = ["gcsSource"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new InputConfig instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IInputConfig=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.InputConfig} InputConfig instance
                         */
                        InputConfig.create = function create(properties) {
                            return new InputConfig(properties);
                        };
    
                        /**
                         * Encodes the specified InputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta1.InputConfig.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IInputConfig} message InputConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        InputConfig.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gcsSource != null && message.hasOwnProperty("gcsSource"))
                                $root.google.cloud.documentai.v1beta1.GcsSource.encode(message.gcsSource, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mimeType);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.InputConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IInputConfig} message InputConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        InputConfig.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an InputConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.InputConfig} InputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        InputConfig.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.InputConfig();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gcsSource = $root.google.cloud.documentai.v1beta1.GcsSource.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.mimeType = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.InputConfig} InputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        InputConfig.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an InputConfig message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        InputConfig.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.gcsSource != null && message.hasOwnProperty("gcsSource")) {
                                properties.source = 1;
                                {
                                    var error = $root.google.cloud.documentai.v1beta1.GcsSource.verify(message.gcsSource);
                                    if (error)
                                        return "gcsSource." + error;
                                }
                            }
                            if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                                if (!$util.isString(message.mimeType))
                                    return "mimeType: string expected";
                            return null;
                        };
    
                        /**
                         * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.InputConfig} InputConfig
                         */
                        InputConfig.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.InputConfig)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.InputConfig();
                            if (object.gcsSource != null) {
                                if (typeof object.gcsSource !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.InputConfig.gcsSource: object expected");
                                message.gcsSource = $root.google.cloud.documentai.v1beta1.GcsSource.fromObject(object.gcsSource);
                            }
                            if (object.mimeType != null)
                                message.mimeType = String(object.mimeType);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @static
                         * @param {google.cloud.documentai.v1beta1.InputConfig} message InputConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        InputConfig.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.mimeType = "";
                            if (message.gcsSource != null && message.hasOwnProperty("gcsSource")) {
                                object.gcsSource = $root.google.cloud.documentai.v1beta1.GcsSource.toObject(message.gcsSource, options);
                                if (options.oneofs)
                                    object.source = "gcsSource";
                            }
                            if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                                object.mimeType = message.mimeType;
                            return object;
                        };
    
                        /**
                         * Converts this InputConfig to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.InputConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        InputConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return InputConfig;
                    })();
    
                    v1beta1.OutputConfig = (function() {
    
                        /**
                         * Properties of an OutputConfig.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IOutputConfig
                         * @property {google.cloud.documentai.v1beta1.IGcsDestination|null} [gcsDestination] OutputConfig gcsDestination
                         * @property {number|null} [pagesPerShard] OutputConfig pagesPerShard
                         */
    
                        /**
                         * Constructs a new OutputConfig.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents an OutputConfig.
                         * @implements IOutputConfig
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IOutputConfig=} [properties] Properties to set
                         */
                        function OutputConfig(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * OutputConfig gcsDestination.
                         * @member {google.cloud.documentai.v1beta1.IGcsDestination|null|undefined} gcsDestination
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @instance
                         */
                        OutputConfig.prototype.gcsDestination = null;
    
                        /**
                         * OutputConfig pagesPerShard.
                         * @member {number} pagesPerShard
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @instance
                         */
                        OutputConfig.prototype.pagesPerShard = 0;
    
                        // OneOf field names bound to virtual getters and setters
                        var $oneOfFields;
    
                        /**
                         * OutputConfig destination.
                         * @member {"gcsDestination"|undefined} destination
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @instance
                         */
                        Object.defineProperty(OutputConfig.prototype, "destination", {
                            get: $util.oneOfGetter($oneOfFields = ["gcsDestination"]),
                            set: $util.oneOfSetter($oneOfFields)
                        });
    
                        /**
                         * Creates a new OutputConfig instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOutputConfig=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.OutputConfig} OutputConfig instance
                         */
                        OutputConfig.create = function create(properties) {
                            return new OutputConfig(properties);
                        };
    
                        /**
                         * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.documentai.v1beta1.OutputConfig.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOutputConfig} message OutputConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OutputConfig.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.gcsDestination != null && message.hasOwnProperty("gcsDestination"))
                                $root.google.cloud.documentai.v1beta1.GcsDestination.encode(message.gcsDestination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.pagesPerShard != null && message.hasOwnProperty("pagesPerShard"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pagesPerShard);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.OutputConfig.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOutputConfig} message OutputConfig message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OutputConfig.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an OutputConfig message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.OutputConfig} OutputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OutputConfig.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.OutputConfig();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.gcsDestination = $root.google.cloud.documentai.v1beta1.GcsDestination.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.pagesPerShard = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.OutputConfig} OutputConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OutputConfig.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an OutputConfig message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        OutputConfig.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            var properties = {};
                            if (message.gcsDestination != null && message.hasOwnProperty("gcsDestination")) {
                                properties.destination = 1;
                                {
                                    var error = $root.google.cloud.documentai.v1beta1.GcsDestination.verify(message.gcsDestination);
                                    if (error)
                                        return "gcsDestination." + error;
                                }
                            }
                            if (message.pagesPerShard != null && message.hasOwnProperty("pagesPerShard"))
                                if (!$util.isInteger(message.pagesPerShard))
                                    return "pagesPerShard: integer expected";
                            return null;
                        };
    
                        /**
                         * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.OutputConfig} OutputConfig
                         */
                        OutputConfig.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.OutputConfig)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.OutputConfig();
                            if (object.gcsDestination != null) {
                                if (typeof object.gcsDestination !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.OutputConfig.gcsDestination: object expected");
                                message.gcsDestination = $root.google.cloud.documentai.v1beta1.GcsDestination.fromObject(object.gcsDestination);
                            }
                            if (object.pagesPerShard != null)
                                message.pagesPerShard = object.pagesPerShard | 0;
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @static
                         * @param {google.cloud.documentai.v1beta1.OutputConfig} message OutputConfig
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        OutputConfig.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.pagesPerShard = 0;
                            if (message.gcsDestination != null && message.hasOwnProperty("gcsDestination")) {
                                object.gcsDestination = $root.google.cloud.documentai.v1beta1.GcsDestination.toObject(message.gcsDestination, options);
                                if (options.oneofs)
                                    object.destination = "gcsDestination";
                            }
                            if (message.pagesPerShard != null && message.hasOwnProperty("pagesPerShard"))
                                object.pagesPerShard = message.pagesPerShard;
                            return object;
                        };
    
                        /**
                         * Converts this OutputConfig to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.OutputConfig
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        OutputConfig.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return OutputConfig;
                    })();
    
                    v1beta1.GcsSource = (function() {
    
                        /**
                         * Properties of a GcsSource.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IGcsSource
                         * @property {string|null} [uri] GcsSource uri
                         */
    
                        /**
                         * Constructs a new GcsSource.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a GcsSource.
                         * @implements IGcsSource
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IGcsSource=} [properties] Properties to set
                         */
                        function GcsSource(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GcsSource uri.
                         * @member {string} uri
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @instance
                         */
                        GcsSource.prototype.uri = "";
    
                        /**
                         * Creates a new GcsSource instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IGcsSource=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.GcsSource} GcsSource instance
                         */
                        GcsSource.create = function create(properties) {
                            return new GcsSource(properties);
                        };
    
                        /**
                         * Encodes the specified GcsSource message. Does not implicitly {@link google.cloud.documentai.v1beta1.GcsSource.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IGcsSource} message GcsSource message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GcsSource.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.GcsSource.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IGcsSource} message GcsSource message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GcsSource.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GcsSource message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.GcsSource} GcsSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GcsSource.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.GcsSource();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.uri = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.GcsSource} GcsSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GcsSource.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GcsSource message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GcsSource.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                if (!$util.isString(message.uri))
                                    return "uri: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.GcsSource} GcsSource
                         */
                        GcsSource.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.GcsSource)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.GcsSource();
                            if (object.uri != null)
                                message.uri = String(object.uri);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @static
                         * @param {google.cloud.documentai.v1beta1.GcsSource} message GcsSource
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GcsSource.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.uri = "";
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                object.uri = message.uri;
                            return object;
                        };
    
                        /**
                         * Converts this GcsSource to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.GcsSource
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GcsSource.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return GcsSource;
                    })();
    
                    v1beta1.GcsDestination = (function() {
    
                        /**
                         * Properties of a GcsDestination.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IGcsDestination
                         * @property {string|null} [uri] GcsDestination uri
                         */
    
                        /**
                         * Constructs a new GcsDestination.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a GcsDestination.
                         * @implements IGcsDestination
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IGcsDestination=} [properties] Properties to set
                         */
                        function GcsDestination(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * GcsDestination uri.
                         * @member {string} uri
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @instance
                         */
                        GcsDestination.prototype.uri = "";
    
                        /**
                         * Creates a new GcsDestination instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IGcsDestination=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.GcsDestination} GcsDestination instance
                         */
                        GcsDestination.create = function create(properties) {
                            return new GcsDestination(properties);
                        };
    
                        /**
                         * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.documentai.v1beta1.GcsDestination.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IGcsDestination} message GcsDestination message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GcsDestination.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.GcsDestination.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IGcsDestination} message GcsDestination message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        GcsDestination.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a GcsDestination message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.GcsDestination} GcsDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GcsDestination.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.GcsDestination();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.uri = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.GcsDestination} GcsDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        GcsDestination.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a GcsDestination message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        GcsDestination.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                if (!$util.isString(message.uri))
                                    return "uri: string expected";
                            return null;
                        };
    
                        /**
                         * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.GcsDestination} GcsDestination
                         */
                        GcsDestination.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.GcsDestination)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.GcsDestination();
                            if (object.uri != null)
                                message.uri = String(object.uri);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @static
                         * @param {google.cloud.documentai.v1beta1.GcsDestination} message GcsDestination
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        GcsDestination.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.uri = "";
                            if (message.uri != null && message.hasOwnProperty("uri"))
                                object.uri = message.uri;
                            return object;
                        };
    
                        /**
                         * Converts this GcsDestination to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.GcsDestination
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        GcsDestination.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return GcsDestination;
                    })();
    
                    v1beta1.OperationMetadata = (function() {
    
                        /**
                         * Properties of an OperationMetadata.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IOperationMetadata
                         * @property {google.cloud.documentai.v1beta1.OperationMetadata.State|null} [state] OperationMetadata state
                         * @property {string|null} [stateMessage] OperationMetadata stateMessage
                         * @property {google.protobuf.ITimestamp|null} [createTime] OperationMetadata createTime
                         * @property {google.protobuf.ITimestamp|null} [updateTime] OperationMetadata updateTime
                         */
    
                        /**
                         * Constructs a new OperationMetadata.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents an OperationMetadata.
                         * @implements IOperationMetadata
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IOperationMetadata=} [properties] Properties to set
                         */
                        function OperationMetadata(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * OperationMetadata state.
                         * @member {google.cloud.documentai.v1beta1.OperationMetadata.State} state
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.state = 0;
    
                        /**
                         * OperationMetadata stateMessage.
                         * @member {string} stateMessage
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.stateMessage = "";
    
                        /**
                         * OperationMetadata createTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} createTime
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.createTime = null;
    
                        /**
                         * OperationMetadata updateTime.
                         * @member {google.protobuf.ITimestamp|null|undefined} updateTime
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @instance
                         */
                        OperationMetadata.prototype.updateTime = null;
    
                        /**
                         * Creates a new OperationMetadata instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOperationMetadata=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.OperationMetadata} OperationMetadata instance
                         */
                        OperationMetadata.create = function create(properties) {
                            return new OperationMetadata(properties);
                        };
    
                        /**
                         * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.documentai.v1beta1.OperationMetadata.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOperationMetadata} message OperationMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OperationMetadata.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.state != null && message.hasOwnProperty("state"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                            if (message.stateMessage != null && message.hasOwnProperty("stateMessage"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.stateMessage);
                            if (message.createTime != null && message.hasOwnProperty("createTime"))
                                $root.google.protobuf.Timestamp.encode(message.createTime, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                                $root.google.protobuf.Timestamp.encode(message.updateTime, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.OperationMetadata.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IOperationMetadata} message OperationMetadata message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        OperationMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes an OperationMetadata message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.OperationMetadata} OperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OperationMetadata.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.OperationMetadata();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.state = reader.int32();
                                    break;
                                case 2:
                                    message.stateMessage = reader.string();
                                    break;
                                case 3:
                                    message.createTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                case 4:
                                    message.updateTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.OperationMetadata} OperationMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        OperationMetadata.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies an OperationMetadata message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        OperationMetadata.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.state != null && message.hasOwnProperty("state"))
                                switch (message.state) {
                                default:
                                    return "state: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                    break;
                                }
                            if (message.stateMessage != null && message.hasOwnProperty("stateMessage"))
                                if (!$util.isString(message.stateMessage))
                                    return "stateMessage: string expected";
                            if (message.createTime != null && message.hasOwnProperty("createTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.createTime);
                                if (error)
                                    return "createTime." + error;
                            }
                            if (message.updateTime != null && message.hasOwnProperty("updateTime")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.updateTime);
                                if (error)
                                    return "updateTime." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.OperationMetadata} OperationMetadata
                         */
                        OperationMetadata.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.OperationMetadata)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.OperationMetadata();
                            switch (object.state) {
                            case "STATE_UNSPECIFIED":
                            case 0:
                                message.state = 0;
                                break;
                            case "ACCEPTED":
                            case 1:
                                message.state = 1;
                                break;
                            case "WAITING":
                            case 2:
                                message.state = 2;
                                break;
                            case "RUNNING":
                            case 3:
                                message.state = 3;
                                break;
                            case "SUCCEEDED":
                            case 4:
                                message.state = 4;
                                break;
                            case "CANCELLED":
                            case 5:
                                message.state = 5;
                                break;
                            case "FAILED":
                            case 6:
                                message.state = 6;
                                break;
                            }
                            if (object.stateMessage != null)
                                message.stateMessage = String(object.stateMessage);
                            if (object.createTime != null) {
                                if (typeof object.createTime !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.OperationMetadata.createTime: object expected");
                                message.createTime = $root.google.protobuf.Timestamp.fromObject(object.createTime);
                            }
                            if (object.updateTime != null) {
                                if (typeof object.updateTime !== "object")
                                    throw TypeError(".google.cloud.documentai.v1beta1.OperationMetadata.updateTime: object expected");
                                message.updateTime = $root.google.protobuf.Timestamp.fromObject(object.updateTime);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @static
                         * @param {google.cloud.documentai.v1beta1.OperationMetadata} message OperationMetadata
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        OperationMetadata.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.state = options.enums === String ? "STATE_UNSPECIFIED" : 0;
                                object.stateMessage = "";
                                object.createTime = null;
                                object.updateTime = null;
                            }
                            if (message.state != null && message.hasOwnProperty("state"))
                                object.state = options.enums === String ? $root.google.cloud.documentai.v1beta1.OperationMetadata.State[message.state] : message.state;
                            if (message.stateMessage != null && message.hasOwnProperty("stateMessage"))
                                object.stateMessage = message.stateMessage;
                            if (message.createTime != null && message.hasOwnProperty("createTime"))
                                object.createTime = $root.google.protobuf.Timestamp.toObject(message.createTime, options);
                            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                                object.updateTime = $root.google.protobuf.Timestamp.toObject(message.updateTime, options);
                            return object;
                        };
    
                        /**
                         * Converts this OperationMetadata to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.OperationMetadata
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        OperationMetadata.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        /**
                         * State enum.
                         * @name google.cloud.documentai.v1beta1.OperationMetadata.State
                         * @enum {string}
                         * @property {number} STATE_UNSPECIFIED=0 STATE_UNSPECIFIED value
                         * @property {number} ACCEPTED=1 ACCEPTED value
                         * @property {number} WAITING=2 WAITING value
                         * @property {number} RUNNING=3 RUNNING value
                         * @property {number} SUCCEEDED=4 SUCCEEDED value
                         * @property {number} CANCELLED=5 CANCELLED value
                         * @property {number} FAILED=6 FAILED value
                         */
                        OperationMetadata.State = (function() {
                            var valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[0] = "STATE_UNSPECIFIED"] = 0;
                            values[valuesById[1] = "ACCEPTED"] = 1;
                            values[valuesById[2] = "WAITING"] = 2;
                            values[valuesById[3] = "RUNNING"] = 3;
                            values[valuesById[4] = "SUCCEEDED"] = 4;
                            values[valuesById[5] = "CANCELLED"] = 5;
                            values[valuesById[6] = "FAILED"] = 6;
                            return values;
                        })();
    
                        return OperationMetadata;
                    })();
    
                    v1beta1.Vertex = (function() {
    
                        /**
                         * Properties of a Vertex.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IVertex
                         * @property {number|null} [x] Vertex x
                         * @property {number|null} [y] Vertex y
                         */
    
                        /**
                         * Constructs a new Vertex.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a Vertex.
                         * @implements IVertex
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IVertex=} [properties] Properties to set
                         */
                        function Vertex(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Vertex x.
                         * @member {number} x
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @instance
                         */
                        Vertex.prototype.x = 0;
    
                        /**
                         * Vertex y.
                         * @member {number} y
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @instance
                         */
                        Vertex.prototype.y = 0;
    
                        /**
                         * Creates a new Vertex instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IVertex=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.Vertex} Vertex instance
                         */
                        Vertex.create = function create(properties) {
                            return new Vertex(properties);
                        };
    
                        /**
                         * Encodes the specified Vertex message. Does not implicitly {@link google.cloud.documentai.v1beta1.Vertex.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IVertex} message Vertex message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Vertex.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.x != null && message.hasOwnProperty("x"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
                            if (message.y != null && message.hasOwnProperty("y"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Vertex message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.Vertex.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IVertex} message Vertex message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Vertex.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Vertex message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.Vertex} Vertex
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Vertex.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.Vertex();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.x = reader.int32();
                                    break;
                                case 2:
                                    message.y = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a Vertex message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.Vertex} Vertex
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Vertex.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Vertex message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Vertex.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.x != null && message.hasOwnProperty("x"))
                                if (!$util.isInteger(message.x))
                                    return "x: integer expected";
                            if (message.y != null && message.hasOwnProperty("y"))
                                if (!$util.isInteger(message.y))
                                    return "y: integer expected";
                            return null;
                        };
    
                        /**
                         * Creates a Vertex message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.Vertex} Vertex
                         */
                        Vertex.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.Vertex)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.Vertex();
                            if (object.x != null)
                                message.x = object.x | 0;
                            if (object.y != null)
                                message.y = object.y | 0;
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Vertex message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @static
                         * @param {google.cloud.documentai.v1beta1.Vertex} message Vertex
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Vertex.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.x = 0;
                                object.y = 0;
                            }
                            if (message.x != null && message.hasOwnProperty("x"))
                                object.x = message.x;
                            if (message.y != null && message.hasOwnProperty("y"))
                                object.y = message.y;
                            return object;
                        };
    
                        /**
                         * Converts this Vertex to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.Vertex
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Vertex.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return Vertex;
                    })();
    
                    v1beta1.NormalizedVertex = (function() {
    
                        /**
                         * Properties of a NormalizedVertex.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface INormalizedVertex
                         * @property {number|null} [x] NormalizedVertex x
                         * @property {number|null} [y] NormalizedVertex y
                         */
    
                        /**
                         * Constructs a new NormalizedVertex.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a NormalizedVertex.
                         * @implements INormalizedVertex
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.INormalizedVertex=} [properties] Properties to set
                         */
                        function NormalizedVertex(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * NormalizedVertex x.
                         * @member {number} x
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @instance
                         */
                        NormalizedVertex.prototype.x = 0;
    
                        /**
                         * NormalizedVertex y.
                         * @member {number} y
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @instance
                         */
                        NormalizedVertex.prototype.y = 0;
    
                        /**
                         * Creates a new NormalizedVertex instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @static
                         * @param {google.cloud.documentai.v1beta1.INormalizedVertex=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.NormalizedVertex} NormalizedVertex instance
                         */
                        NormalizedVertex.create = function create(properties) {
                            return new NormalizedVertex(properties);
                        };
    
                        /**
                         * Encodes the specified NormalizedVertex message. Does not implicitly {@link google.cloud.documentai.v1beta1.NormalizedVertex.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @static
                         * @param {google.cloud.documentai.v1beta1.INormalizedVertex} message NormalizedVertex message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        NormalizedVertex.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.x != null && message.hasOwnProperty("x"))
                                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
                            if (message.y != null && message.hasOwnProperty("y"))
                                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
                            return writer;
                        };
    
                        /**
                         * Encodes the specified NormalizedVertex message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.NormalizedVertex.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @static
                         * @param {google.cloud.documentai.v1beta1.INormalizedVertex} message NormalizedVertex message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        NormalizedVertex.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a NormalizedVertex message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.NormalizedVertex} NormalizedVertex
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        NormalizedVertex.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.NormalizedVertex();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.x = reader.float();
                                    break;
                                case 2:
                                    message.y = reader.float();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a NormalizedVertex message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.NormalizedVertex} NormalizedVertex
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        NormalizedVertex.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a NormalizedVertex message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        NormalizedVertex.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.x != null && message.hasOwnProperty("x"))
                                if (typeof message.x !== "number")
                                    return "x: number expected";
                            if (message.y != null && message.hasOwnProperty("y"))
                                if (typeof message.y !== "number")
                                    return "y: number expected";
                            return null;
                        };
    
                        /**
                         * Creates a NormalizedVertex message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.NormalizedVertex} NormalizedVertex
                         */
                        NormalizedVertex.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.NormalizedVertex)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.NormalizedVertex();
                            if (object.x != null)
                                message.x = Number(object.x);
                            if (object.y != null)
                                message.y = Number(object.y);
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a NormalizedVertex message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @static
                         * @param {google.cloud.documentai.v1beta1.NormalizedVertex} message NormalizedVertex
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        NormalizedVertex.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.x = 0;
                                object.y = 0;
                            }
                            if (message.x != null && message.hasOwnProperty("x"))
                                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                            if (message.y != null && message.hasOwnProperty("y"))
                                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                            return object;
                        };
    
                        /**
                         * Converts this NormalizedVertex to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.NormalizedVertex
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        NormalizedVertex.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return NormalizedVertex;
                    })();
    
                    v1beta1.BoundingPoly = (function() {
    
                        /**
                         * Properties of a BoundingPoly.
                         * @memberof google.cloud.documentai.v1beta1
                         * @interface IBoundingPoly
                         * @property {Array.<google.cloud.documentai.v1beta1.IVertex>|null} [vertices] BoundingPoly vertices
                         * @property {Array.<google.cloud.documentai.v1beta1.INormalizedVertex>|null} [normalizedVertices] BoundingPoly normalizedVertices
                         */
    
                        /**
                         * Constructs a new BoundingPoly.
                         * @memberof google.cloud.documentai.v1beta1
                         * @classdesc Represents a BoundingPoly.
                         * @implements IBoundingPoly
                         * @constructor
                         * @param {google.cloud.documentai.v1beta1.IBoundingPoly=} [properties] Properties to set
                         */
                        function BoundingPoly(properties) {
                            this.vertices = [];
                            this.normalizedVertices = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * BoundingPoly vertices.
                         * @member {Array.<google.cloud.documentai.v1beta1.IVertex>} vertices
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @instance
                         */
                        BoundingPoly.prototype.vertices = $util.emptyArray;
    
                        /**
                         * BoundingPoly normalizedVertices.
                         * @member {Array.<google.cloud.documentai.v1beta1.INormalizedVertex>} normalizedVertices
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @instance
                         */
                        BoundingPoly.prototype.normalizedVertices = $util.emptyArray;
    
                        /**
                         * Creates a new BoundingPoly instance using the specified properties.
                         * @function create
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBoundingPoly=} [properties] Properties to set
                         * @returns {google.cloud.documentai.v1beta1.BoundingPoly} BoundingPoly instance
                         */
                        BoundingPoly.create = function create(properties) {
                            return new BoundingPoly(properties);
                        };
    
                        /**
                         * Encodes the specified BoundingPoly message. Does not implicitly {@link google.cloud.documentai.v1beta1.BoundingPoly.verify|verify} messages.
                         * @function encode
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBoundingPoly} message BoundingPoly message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BoundingPoly.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.vertices != null && message.vertices.length)
                                for (var i = 0; i < message.vertices.length; ++i)
                                    $root.google.cloud.documentai.v1beta1.Vertex.encode(message.vertices[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.normalizedVertices != null && message.normalizedVertices.length)
                                for (var i = 0; i < message.normalizedVertices.length; ++i)
                                    $root.google.cloud.documentai.v1beta1.NormalizedVertex.encode(message.normalizedVertices[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified BoundingPoly message, length delimited. Does not implicitly {@link google.cloud.documentai.v1beta1.BoundingPoly.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @static
                         * @param {google.cloud.documentai.v1beta1.IBoundingPoly} message BoundingPoly message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        BoundingPoly.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a BoundingPoly message from the specified reader or buffer.
                         * @function decode
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {google.cloud.documentai.v1beta1.BoundingPoly} BoundingPoly
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BoundingPoly.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.cloud.documentai.v1beta1.BoundingPoly();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    if (!(message.vertices && message.vertices.length))
                                        message.vertices = [];
                                    message.vertices.push($root.google.cloud.documentai.v1beta1.Vertex.decode(reader, reader.uint32()));
                                    break;
                                case 2:
                                    if (!(message.normalizedVertices && message.normalizedVertices.length))
                                        message.normalizedVertices = [];
                                    message.normalizedVertices.push($root.google.cloud.documentai.v1beta1.NormalizedVertex.decode(reader, reader.uint32()));
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a BoundingPoly message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {google.cloud.documentai.v1beta1.BoundingPoly} BoundingPoly
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        BoundingPoly.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a BoundingPoly message.
                         * @function verify
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        BoundingPoly.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.vertices != null && message.hasOwnProperty("vertices")) {
                                if (!Array.isArray(message.vertices))
                                    return "vertices: array expected";
                                for (var i = 0; i < message.vertices.length; ++i) {
                                    var error = $root.google.cloud.documentai.v1beta1.Vertex.verify(message.vertices[i]);
                                    if (error)
                                        return "vertices." + error;
                                }
                            }
                            if (message.normalizedVertices != null && message.hasOwnProperty("normalizedVertices")) {
                                if (!Array.isArray(message.normalizedVertices))
                                    return "normalizedVertices: array expected";
                                for (var i = 0; i < message.normalizedVertices.length; ++i) {
                                    var error = $root.google.cloud.documentai.v1beta1.NormalizedVertex.verify(message.normalizedVertices[i]);
                                    if (error)
                                        return "normalizedVertices." + error;
                                }
                            }
                            return null;
                        };
    
                        /**
                         * Creates a BoundingPoly message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {google.cloud.documentai.v1beta1.BoundingPoly} BoundingPoly
                         */
                        BoundingPoly.fromObject = function fromObject(object) {
                            if (object instanceof $root.google.cloud.documentai.v1beta1.BoundingPoly)
                                return object;
                            var message = new $root.google.cloud.documentai.v1beta1.BoundingPoly();
                            if (object.vertices) {
                                if (!Array.isArray(object.vertices))
                                    throw TypeError(".google.cloud.documentai.v1beta1.BoundingPoly.vertices: array expected");
                                message.vertices = [];
                                for (var i = 0; i < object.vertices.length; ++i) {
                                    if (typeof object.vertices[i] !== "object")
                                        throw TypeError(".google.cloud.documentai.v1beta1.BoundingPoly.vertices: object expected");
                                    message.vertices[i] = $root.google.cloud.documentai.v1beta1.Vertex.fromObject(object.vertices[i]);
                                }
                            }
                            if (object.normalizedVertices) {
                                if (!Array.isArray(object.normalizedVertices))
                                    throw TypeError(".google.cloud.documentai.v1beta1.BoundingPoly.normalizedVertices: array expected");
                                message.normalizedVertices = [];
                                for (var i = 0; i < object.normalizedVertices.length; ++i) {
                                    if (typeof object.normalizedVertices[i] !== "object")
                                        throw TypeError(".google.cloud.documentai.v1beta1.BoundingPoly.normalizedVertices: object expected");
                                    message.normalizedVertices[i] = $root.google.cloud.documentai.v1beta1.NormalizedVertex.fromObject(object.normalizedVertices[i]);
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a BoundingPoly message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @static
                         * @param {google.cloud.documentai.v1beta1.BoundingPoly} message BoundingPoly
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        BoundingPoly.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults) {
                                object.vertices = [];
                                object.normalizedVertices = [];
                            }
                            if (message.vertices && message.vertices.length) {
                                object.vertices = [];
                                for (var j = 0; j < message.vertices.length; ++j)
                                    object.vertices[j] = $root.google.cloud.documentai.v1beta1.Vertex.toObject(message.vertices[j], options);
                            }
                            if (message.normalizedVertices && message.normalizedVertices.length) {
                                object.normalizedVertices = [];
                                for (var j = 0; j < message.normalizedVertices.length; ++j)
                                    object.normalizedVertices[j] = $root.google.cloud.documentai.v1beta1.NormalizedVertex.toObject(message.normalizedVertices[j], options);
                            }
                            return object;
                        };
    
                        /**
                         * Converts this BoundingPoly to JSON.
                         * @function toJSON
                         * @memberof google.cloud.documentai.v1beta1.BoundingPoly
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        BoundingPoly.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return BoundingPoly;
                    })();
    
                    return v1beta1;
                })();
    
                return documentai;
            })();
    
            return cloud;
        })();
    
        google.api = (function() {
    
            /**
             * Namespace api.
             * @memberof google
             * @namespace
             */
            var api = {};
    
            api.Http = (function() {
    
                /**
                 * Properties of a Http.
                 * @memberof google.api
                 * @interface IHttp
                 * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
                 * @property {boolean|null} [fullyDecodeReservedExpansion] Http fullyDecodeReservedExpansion
                 */
    
                /**
                 * Constructs a new Http.
                 * @memberof google.api
                 * @classdesc Represents a Http.
                 * @implements IHttp
                 * @constructor
                 * @param {google.api.IHttp=} [properties] Properties to set
                 */
                function Http(properties) {
                    this.rules = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Http rules.
                 * @member {Array.<google.api.IHttpRule>} rules
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.rules = $util.emptyArray;
    
                /**
                 * Http fullyDecodeReservedExpansion.
                 * @member {boolean} fullyDecodeReservedExpansion
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.fullyDecodeReservedExpansion = false;
    
                /**
                 * Creates a new Http instance using the specified properties.
                 * @function create
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp=} [properties] Properties to set
                 * @returns {google.api.Http} Http instance
                 */
                Http.create = function create(properties) {
                    return new Http(properties);
                };
    
                /**
                 * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.rules != null && message.rules.length)
                        for (var i = 0; i < message.rules.length; ++i)
                            $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fullyDecodeReservedExpansion);
                    return writer;
                };
    
                /**
                 * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.rules && message.rules.length))
                                message.rules = [];
                            message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.fullyDecodeReservedExpansion = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Http message.
                 * @function verify
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Http.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.rules != null && message.hasOwnProperty("rules")) {
                        if (!Array.isArray(message.rules))
                            return "rules: array expected";
                        for (var i = 0; i < message.rules.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.rules[i]);
                            if (error)
                                return "rules." + error;
                        }
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        if (typeof message.fullyDecodeReservedExpansion !== "boolean")
                            return "fullyDecodeReservedExpansion: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a Http message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Http} Http
                 */
                Http.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Http)
                        return object;
                    var message = new $root.google.api.Http();
                    if (object.rules) {
                        if (!Array.isArray(object.rules))
                            throw TypeError(".google.api.Http.rules: array expected");
                        message.rules = [];
                        for (var i = 0; i < object.rules.length; ++i) {
                            if (typeof object.rules[i] !== "object")
                                throw TypeError(".google.api.Http.rules: object expected");
                            message.rules[i] = $root.google.api.HttpRule.fromObject(object.rules[i]);
                        }
                    }
                    if (object.fullyDecodeReservedExpansion != null)
                        message.fullyDecodeReservedExpansion = Boolean(object.fullyDecodeReservedExpansion);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Http message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.Http} message Http
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Http.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.rules = [];
                    if (options.defaults)
                        object.fullyDecodeReservedExpansion = false;
                    if (message.rules && message.rules.length) {
                        object.rules = [];
                        for (var j = 0; j < message.rules.length; ++j)
                            object.rules[j] = $root.google.api.HttpRule.toObject(message.rules[j], options);
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        object.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
                    return object;
                };
    
                /**
                 * Converts this Http to JSON.
                 * @function toJSON
                 * @memberof google.api.Http
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Http.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Http;
            })();
    
            api.HttpRule = (function() {
    
                /**
                 * Properties of a HttpRule.
                 * @memberof google.api
                 * @interface IHttpRule
                 * @property {string|null} [selector] HttpRule selector
                 * @property {string|null} [get] HttpRule get
                 * @property {string|null} [put] HttpRule put
                 * @property {string|null} [post] HttpRule post
                 * @property {string|null} ["delete"] HttpRule delete
                 * @property {string|null} [patch] HttpRule patch
                 * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
                 * @property {string|null} [body] HttpRule body
                 * @property {string|null} [responseBody] HttpRule responseBody
                 * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
                 */
    
                /**
                 * Constructs a new HttpRule.
                 * @memberof google.api
                 * @classdesc Represents a HttpRule.
                 * @implements IHttpRule
                 * @constructor
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 */
                function HttpRule(properties) {
                    this.additionalBindings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HttpRule selector.
                 * @member {string} selector
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.selector = "";
    
                /**
                 * HttpRule get.
                 * @member {string} get
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.get = "";
    
                /**
                 * HttpRule put.
                 * @member {string} put
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.put = "";
    
                /**
                 * HttpRule post.
                 * @member {string} post
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.post = "";
    
                /**
                 * HttpRule delete.
                 * @member {string} delete
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype["delete"] = "";
    
                /**
                 * HttpRule patch.
                 * @member {string} patch
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.patch = "";
    
                /**
                 * HttpRule custom.
                 * @member {google.api.ICustomHttpPattern|null|undefined} custom
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.custom = null;
    
                /**
                 * HttpRule body.
                 * @member {string} body
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.body = "";
    
                /**
                 * HttpRule responseBody.
                 * @member {string} responseBody
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.responseBody = "";
    
                /**
                 * HttpRule additionalBindings.
                 * @member {Array.<google.api.IHttpRule>} additionalBindings
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.additionalBindings = $util.emptyArray;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * HttpRule pattern.
                 * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                Object.defineProperty(HttpRule.prototype, "pattern", {
                    get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new HttpRule instance using the specified properties.
                 * @function create
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 * @returns {google.api.HttpRule} HttpRule instance
                 */
                HttpRule.create = function create(properties) {
                    return new HttpRule(properties);
                };
    
                /**
                 * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.get != null && message.hasOwnProperty("get"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                    if (message.put != null && message.hasOwnProperty("put"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                    if (message.post != null && message.hasOwnProperty("post"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                    if (message["delete"] != null && message.hasOwnProperty("delete"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                    if (message.patch != null && message.hasOwnProperty("patch"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                    if (message.body != null && message.hasOwnProperty("body"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                    if (message.custom != null && message.hasOwnProperty("custom"))
                        $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.additionalBindings != null && message.additionalBindings.length)
                        for (var i = 0; i < message.additionalBindings.length; ++i)
                            $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.responseBody);
                    return writer;
                };
    
                /**
                 * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.selector = reader.string();
                            break;
                        case 2:
                            message.get = reader.string();
                            break;
                        case 3:
                            message.put = reader.string();
                            break;
                        case 4:
                            message.post = reader.string();
                            break;
                        case 5:
                            message["delete"] = reader.string();
                            break;
                        case 6:
                            message.patch = reader.string();
                            break;
                        case 8:
                            message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.body = reader.string();
                            break;
                        case 12:
                            message.responseBody = reader.string();
                            break;
                        case 11:
                            if (!(message.additionalBindings && message.additionalBindings.length))
                                message.additionalBindings = [];
                            message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HttpRule message.
                 * @function verify
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HttpRule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.get != null && message.hasOwnProperty("get")) {
                        properties.pattern = 1;
                        if (!$util.isString(message.get))
                            return "get: string expected";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.put))
                            return "put: string expected";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.post))
                            return "post: string expected";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message["delete"]))
                            return "delete: string expected";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.patch))
                            return "patch: string expected";
                    }
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        {
                            var error = $root.google.api.CustomHttpPattern.verify(message.custom);
                            if (error)
                                return "custom." + error;
                        }
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!$util.isString(message.body))
                            return "body: string expected";
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        if (!$util.isString(message.responseBody))
                            return "responseBody: string expected";
                    if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                        if (!Array.isArray(message.additionalBindings))
                            return "additionalBindings: array expected";
                        for (var i = 0; i < message.additionalBindings.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                            if (error)
                                return "additionalBindings." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.HttpRule} HttpRule
                 */
                HttpRule.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.HttpRule)
                        return object;
                    var message = new $root.google.api.HttpRule();
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.get != null)
                        message.get = String(object.get);
                    if (object.put != null)
                        message.put = String(object.put);
                    if (object.post != null)
                        message.post = String(object.post);
                    if (object["delete"] != null)
                        message["delete"] = String(object["delete"]);
                    if (object.patch != null)
                        message.patch = String(object.patch);
                    if (object.custom != null) {
                        if (typeof object.custom !== "object")
                            throw TypeError(".google.api.HttpRule.custom: object expected");
                        message.custom = $root.google.api.CustomHttpPattern.fromObject(object.custom);
                    }
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.responseBody != null)
                        message.responseBody = String(object.responseBody);
                    if (object.additionalBindings) {
                        if (!Array.isArray(object.additionalBindings))
                            throw TypeError(".google.api.HttpRule.additionalBindings: array expected");
                        message.additionalBindings = [];
                        for (var i = 0; i < object.additionalBindings.length; ++i) {
                            if (typeof object.additionalBindings[i] !== "object")
                                throw TypeError(".google.api.HttpRule.additionalBindings: object expected");
                            message.additionalBindings[i] = $root.google.api.HttpRule.fromObject(object.additionalBindings[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.HttpRule} message HttpRule
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HttpRule.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.additionalBindings = [];
                    if (options.defaults) {
                        object.selector = "";
                        object.body = "";
                        object.responseBody = "";
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.get != null && message.hasOwnProperty("get")) {
                        object.get = message.get;
                        if (options.oneofs)
                            object.pattern = "get";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        object.put = message.put;
                        if (options.oneofs)
                            object.pattern = "put";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        object.post = message.post;
                        if (options.oneofs)
                            object.pattern = "post";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        object["delete"] = message["delete"];
                        if (options.oneofs)
                            object.pattern = "delete";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        object.patch = message.patch;
                        if (options.oneofs)
                            object.pattern = "patch";
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        object.custom = $root.google.api.CustomHttpPattern.toObject(message.custom, options);
                        if (options.oneofs)
                            object.pattern = "custom";
                    }
                    if (message.additionalBindings && message.additionalBindings.length) {
                        object.additionalBindings = [];
                        for (var j = 0; j < message.additionalBindings.length; ++j)
                            object.additionalBindings[j] = $root.google.api.HttpRule.toObject(message.additionalBindings[j], options);
                    }
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        object.responseBody = message.responseBody;
                    return object;
                };
    
                /**
                 * Converts this HttpRule to JSON.
                 * @function toJSON
                 * @memberof google.api.HttpRule
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HttpRule.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return HttpRule;
            })();
    
            api.CustomHttpPattern = (function() {
    
                /**
                 * Properties of a CustomHttpPattern.
                 * @memberof google.api
                 * @interface ICustomHttpPattern
                 * @property {string|null} [kind] CustomHttpPattern kind
                 * @property {string|null} [path] CustomHttpPattern path
                 */
    
                /**
                 * Constructs a new CustomHttpPattern.
                 * @memberof google.api
                 * @classdesc Represents a CustomHttpPattern.
                 * @implements ICustomHttpPattern
                 * @constructor
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 */
                function CustomHttpPattern(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CustomHttpPattern kind.
                 * @member {string} kind
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.kind = "";
    
                /**
                 * CustomHttpPattern path.
                 * @member {string} path
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.path = "";
    
                /**
                 * Creates a new CustomHttpPattern instance using the specified properties.
                 * @function create
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
                 */
                CustomHttpPattern.create = function create(properties) {
                    return new CustomHttpPattern(properties);
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                    if (message.path != null && message.hasOwnProperty("path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                    return writer;
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.kind = reader.string();
                            break;
                        case 2:
                            message.path = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CustomHttpPattern message.
                 * @function verify
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CustomHttpPattern.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    return null;
                };
    
                /**
                 * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 */
                CustomHttpPattern.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CustomHttpPattern)
                        return object;
                    var message = new $root.google.api.CustomHttpPattern();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.path != null)
                        message.path = String(object.path);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.CustomHttpPattern} message CustomHttpPattern
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CustomHttpPattern.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.kind = "";
                        object.path = "";
                    }
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    return object;
                };
    
                /**
                 * Converts this CustomHttpPattern to JSON.
                 * @function toJSON
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CustomHttpPattern.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return CustomHttpPattern;
            })();
    
            /**
             * FieldBehavior enum.
             * @name google.api.FieldBehavior
             * @enum {string}
             * @property {number} FIELD_BEHAVIOR_UNSPECIFIED=0 FIELD_BEHAVIOR_UNSPECIFIED value
             * @property {number} OPTIONAL=1 OPTIONAL value
             * @property {number} REQUIRED=2 REQUIRED value
             * @property {number} OUTPUT_ONLY=3 OUTPUT_ONLY value
             * @property {number} INPUT_ONLY=4 INPUT_ONLY value
             * @property {number} IMMUTABLE=5 IMMUTABLE value
             */
            api.FieldBehavior = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FIELD_BEHAVIOR_UNSPECIFIED"] = 0;
                values[valuesById[1] = "OPTIONAL"] = 1;
                values[valuesById[2] = "REQUIRED"] = 2;
                values[valuesById[3] = "OUTPUT_ONLY"] = 3;
                values[valuesById[4] = "INPUT_ONLY"] = 4;
                values[valuesById[5] = "IMMUTABLE"] = 5;
                return values;
            })();
    
            return api;
        })();
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
                 * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.publicDependency = [];
                    this.weakDependency = [];
                    this.messageType = [];
                    this.enumType = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto publicDependency.
                 * @member {Array.<number>} publicDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weakDependency.
                 * @member {Array.<number>} weakDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto messageType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} messageType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.messageType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto sourceCodeInfo.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.sourceCodeInfo = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.messageType != null && message.messageType.length)
                        for (var i = 0; i < message.messageType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.publicDependency != null && message.publicDependency.length)
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency != null && message.weakDependency.length)
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.syntax = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                        if (!Array.isArray(message.publicDependency))
                            return "publicDependency: array expected";
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            if (!$util.isInteger(message.publicDependency[i]))
                                return "publicDependency: integer[] expected";
                    }
                    if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                        if (!Array.isArray(message.weakDependency))
                            return "weakDependency: array expected";
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            if (!$util.isInteger(message.weakDependency[i]))
                                return "weakDependency: integer[] expected";
                    }
                    if (message.messageType != null && message.hasOwnProperty("messageType")) {
                        if (!Array.isArray(message.messageType))
                            return "messageType: array expected";
                        for (var i = 0; i < message.messageType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                            if (error)
                                return "messageType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                        if (error)
                            return "sourceCodeInfo." + error;
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.publicDependency) {
                        if (!Array.isArray(object.publicDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                        message.publicDependency = [];
                        for (var i = 0; i < object.publicDependency.length; ++i)
                            message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                    if (object.weakDependency) {
                        if (!Array.isArray(object.weakDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                        message.weakDependency = [];
                        for (var i = 0; i < object.weakDependency.length; ++i)
                            message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                    if (object.messageType) {
                        if (!Array.isArray(object.messageType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                        message.messageType = [];
                        for (var i = 0; i < object.messageType.length; ++i) {
                            if (typeof object.messageType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                            message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.sourceCodeInfo != null) {
                        if (typeof object.sourceCodeInfo !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                    }
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.messageType = [];
                        object.enumType = [];
                        object.service = [];
                        object.extension = [];
                        object.publicDependency = [];
                        object.weakDependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.sourceCodeInfo = null;
                        object.syntax = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.messageType && message.messageType.length) {
                        object.messageType = [];
                        for (var j = 0; j < message.messageType.length; ++j)
                            object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                    if (message.publicDependency && message.publicDependency.length) {
                        object.publicDependency = [];
                        for (var j = 0; j < message.publicDependency.length; ++j)
                            object.publicDependency[j] = message.publicDependency[j];
                    }
                    if (message.weakDependency && message.weakDependency.length) {
                        object.weakDependency = [];
                        for (var j = 0; j < message.weakDependency.length; ++j)
                            object.weakDependency[j] = message.weakDependency[j];
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nestedType = [];
                    this.enumType = [];
                    this.extensionRange = [];
                    this.oneofDecl = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nestedType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nestedType = $util.emptyArray;
    
                /**
                 * DescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * DescriptorProto extensionRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extensionRange = $util.emptyArray;
    
                /**
                 * DescriptorProto oneofDecl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneofDecl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * DescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nestedType != null && message.nestedType.length)
                        for (var i = 0; i < message.nestedType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extensionRange != null && message.extensionRange.length)
                        for (var i = 0; i < message.extensionRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneofDecl != null && message.oneofDecl.length)
                        for (var i = 0; i < message.oneofDecl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                        if (!Array.isArray(message.nestedType))
                            return "nestedType: array expected";
                        for (var i = 0; i < message.nestedType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                            if (error)
                                return "nestedType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                        if (!Array.isArray(message.extensionRange))
                            return "extensionRange: array expected";
                        for (var i = 0; i < message.extensionRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                            if (error)
                                return "extensionRange." + error;
                        }
                    }
                    if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                        if (!Array.isArray(message.oneofDecl))
                            return "oneofDecl: array expected";
                        for (var i = 0; i < message.oneofDecl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                            if (error)
                                return "oneofDecl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nestedType) {
                        if (!Array.isArray(object.nestedType))
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                        message.nestedType = [];
                        for (var i = 0; i < object.nestedType.length; ++i) {
                            if (typeof object.nestedType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                            message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.extensionRange) {
                        if (!Array.isArray(object.extensionRange))
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                        message.extensionRange = [];
                        for (var i = 0; i < object.extensionRange.length; ++i) {
                            if (typeof object.extensionRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                            message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                        }
                    }
                    if (object.oneofDecl) {
                        if (!Array.isArray(object.oneofDecl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                        message.oneofDecl = [];
                        for (var i = 0; i < object.oneofDecl.length; ++i) {
                            if (typeof object.oneofDecl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                            message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nestedType = [];
                        object.enumType = [];
                        object.extensionRange = [];
                        object.extension = [];
                        object.oneofDecl = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nestedType && message.nestedType.length) {
                        object.nestedType = [];
                        for (var j = 0; j < message.nestedType.length; ++j)
                            object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.extensionRange && message.extensionRange.length) {
                        object.extensionRange = [];
                        for (var j = 0; j < message.extensionRange.length; ++j)
                            object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneofDecl && message.oneofDecl.length) {
                        object.oneofDecl = [];
                        for (var j = 0; j < message.oneofDecl.length; ++j)
                            object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                    }
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     * @property {google.protobuf.IExtensionRangeOptions|null} [options] ExtensionRange options
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * ExtensionRange options.
                     * @member {google.protobuf.IExtensionRangeOptions|null|undefined} options
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.options = null;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        if (message.options != null && message.hasOwnProperty("options"))
                            $root.google.protobuf.ExtensionRangeOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            case 3:
                                message.options = $root.google.protobuf.ExtensionRangeOptions.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        if (message.options != null && message.hasOwnProperty("options")) {
                            var error = $root.google.protobuf.ExtensionRangeOptions.verify(message.options);
                            if (error)
                                return "options." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        if (object.options != null) {
                            if (typeof object.options !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.ExtensionRange.options: object expected");
                            message.options = $root.google.protobuf.ExtensionRangeOptions.fromObject(object.options);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                            object.options = null;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        if (message.options != null && message.hasOwnProperty("options"))
                            object.options = $root.google.protobuf.ExtensionRangeOptions.toObject(message.options, options);
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.ExtensionRangeOptions = (function() {
    
                /**
                 * Properties of an ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @interface IExtensionRangeOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ExtensionRangeOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new ExtensionRangeOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an ExtensionRangeOptions.
                 * @implements IExtensionRangeOptions
                 * @constructor
                 * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
                 */
                function ExtensionRangeOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ExtensionRangeOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 */
                ExtensionRangeOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new ExtensionRangeOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions instance
                 */
                ExtensionRangeOptions.create = function create(properties) {
                    return new ExtensionRangeOptions(properties);
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.IExtensionRangeOptions} message ExtensionRangeOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ExtensionRangeOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ExtensionRangeOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ExtensionRangeOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an ExtensionRangeOptions message.
                 * @function verify
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ExtensionRangeOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ExtensionRangeOptions} ExtensionRangeOptions
                 */
                ExtensionRangeOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ExtensionRangeOptions)
                        return object;
                    var message = new $root.google.protobuf.ExtensionRangeOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ExtensionRangeOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @static
                 * @param {google.protobuf.ExtensionRangeOptions} message ExtensionRangeOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ExtensionRangeOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ExtensionRangeOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ExtensionRangeOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ExtensionRangeOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ExtensionRangeOptions;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [typeName] FieldDescriptorProto typeName
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
                 * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
                 * @property {string|null} [jsonName] FieldDescriptorProto jsonName
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto typeName.
                 * @member {string} typeName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.typeName = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto defaultValue.
                 * @member {string} defaultValue
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.defaultValue = "";
    
                /**
                 * FieldDescriptorProto oneofIndex.
                 * @member {number} oneofIndex
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneofIndex = 0;
    
                /**
                 * FieldDescriptorProto jsonName.
                 * @member {string} jsonName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.jsonName = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && message.hasOwnProperty("label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.typeName = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.defaultValue = reader.string();
                            break;
                        case 9:
                            message.oneofIndex = reader.int32();
                            break;
                        case 10:
                            message.jsonName = reader.string();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        if (!$util.isString(message.typeName))
                            return "typeName: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        if (!$util.isString(message.defaultValue))
                            return "defaultValue: string expected";
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        if (!$util.isInteger(message.oneofIndex))
                            return "oneofIndex: integer expected";
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        if (!$util.isString(message.jsonName))
                            return "jsonName: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.typeName != null)
                        message.typeName = String(object.typeName);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.defaultValue != null)
                        message.defaultValue = String(object.defaultValue);
                    if (object.oneofIndex != null)
                        message.oneofIndex = object.oneofIndex | 0;
                    if (object.jsonName != null)
                        message.jsonName = String(object.jsonName);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.typeName = "";
                        object.defaultValue = "";
                        object.options = null;
                        object.oneofIndex = 0;
                        object.jsonName = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        object.typeName = message.typeName;
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        object.defaultValue = message.defaultValue;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        object.oneofIndex = message.oneofIndex;
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        object.jsonName = message.jsonName;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {string}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {string}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 * @property {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>|null} [reservedRange] EnumDescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] EnumDescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * EnumDescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.EnumDescriptorProto.IEnumReservedRange>} reservedRange
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.EnumDescriptorProto.EnumReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.value = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.EnumDescriptorProto.EnumReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                EnumDescriptorProto.EnumReservedRange = (function() {
    
                    /**
                     * Properties of an EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @interface IEnumReservedRange
                     * @property {number|null} [start] EnumReservedRange start
                     * @property {number|null} [end] EnumReservedRange end
                     */
    
                    /**
                     * Constructs a new EnumReservedRange.
                     * @memberof google.protobuf.EnumDescriptorProto
                     * @classdesc Represents an EnumReservedRange.
                     * @implements IEnumReservedRange
                     * @constructor
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                     */
                    function EnumReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * EnumReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.start = 0;
    
                    /**
                     * EnumReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     */
                    EnumReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new EnumReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange instance
                     */
                    EnumReservedRange.create = function create(properties) {
                        return new EnumReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.IEnumReservedRange} message EnumReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnumReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnumReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an EnumReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnumReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.EnumDescriptorProto.EnumReservedRange} EnumReservedRange
                     */
                    EnumReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.EnumDescriptorProto.EnumReservedRange)
                            return object;
                        var message = new $root.google.protobuf.EnumDescriptorProto.EnumReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @static
                     * @param {google.protobuf.EnumDescriptorProto.EnumReservedRange} message EnumReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnumReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this EnumReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.EnumDescriptorProto.EnumReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnumReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return EnumReservedRange;
                })();
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [inputType] MethodDescriptorProto inputType
                 * @property {string|null} [outputType] MethodDescriptorProto outputType
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
                 * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto inputType.
                 * @member {string} inputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.inputType = "";
    
                /**
                 * MethodDescriptorProto outputType.
                 * @member {string} outputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.outputType = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto clientStreaming.
                 * @member {boolean} clientStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.clientStreaming = false;
    
                /**
                 * MethodDescriptorProto serverStreaming.
                 * @member {boolean} serverStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.serverStreaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.inputType = reader.string();
                            break;
                        case 3:
                            message.outputType = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.clientStreaming = reader.bool();
                            break;
                        case 6:
                            message.serverStreaming = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        if (!$util.isString(message.inputType))
                            return "inputType: string expected";
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        if (!$util.isString(message.outputType))
                            return "outputType: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        if (typeof message.clientStreaming !== "boolean")
                            return "clientStreaming: boolean expected";
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        if (typeof message.serverStreaming !== "boolean")
                            return "serverStreaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.inputType != null)
                        message.inputType = String(object.inputType);
                    if (object.outputType != null)
                        message.outputType = String(object.outputType);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    if (object.clientStreaming != null)
                        message.clientStreaming = Boolean(object.clientStreaming);
                    if (object.serverStreaming != null)
                        message.serverStreaming = Boolean(object.serverStreaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.inputType = "";
                        object.outputType = "";
                        object.options = null;
                        object.clientStreaming = false;
                        object.serverStreaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        object.inputType = message.inputType;
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        object.outputType = message.outputType;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        object.clientStreaming = message.clientStreaming;
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        object.serverStreaming = message.serverStreaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [javaPackage] FileOptions javaPackage
                 * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
                 * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
                 * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
                 * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
                 * @property {string|null} [goPackage] FileOptions goPackage
                 * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
                 * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
                 * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
                 * @property {boolean|null} [phpGenericServices] FileOptions phpGenericServices
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
                 * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
                 * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
                 * @property {string|null} [swiftPrefix] FileOptions swiftPrefix
                 * @property {string|null} [phpClassPrefix] FileOptions phpClassPrefix
                 * @property {string|null} [phpNamespace] FileOptions phpNamespace
                 * @property {string|null} [phpMetadataNamespace] FileOptions phpMetadataNamespace
                 * @property {string|null} [rubyPackage] FileOptions rubyPackage
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions javaPackage.
                 * @member {string} javaPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaPackage = "";
    
                /**
                 * FileOptions javaOuterClassname.
                 * @member {string} javaOuterClassname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaOuterClassname = "";
    
                /**
                 * FileOptions javaMultipleFiles.
                 * @member {boolean} javaMultipleFiles
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaMultipleFiles = false;
    
                /**
                 * FileOptions javaGenerateEqualsAndHash.
                 * @member {boolean} javaGenerateEqualsAndHash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenerateEqualsAndHash = false;
    
                /**
                 * FileOptions javaStringCheckUtf8.
                 * @member {boolean} javaStringCheckUtf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaStringCheckUtf8 = false;
    
                /**
                 * FileOptions optimizeFor.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimizeFor = 1;
    
                /**
                 * FileOptions goPackage.
                 * @member {string} goPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.goPackage = "";
    
                /**
                 * FileOptions ccGenericServices.
                 * @member {boolean} ccGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccGenericServices = false;
    
                /**
                 * FileOptions javaGenericServices.
                 * @member {boolean} javaGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenericServices = false;
    
                /**
                 * FileOptions pyGenericServices.
                 * @member {boolean} pyGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.pyGenericServices = false;
    
                /**
                 * FileOptions phpGenericServices.
                 * @member {boolean} phpGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpGenericServices = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions ccEnableArenas.
                 * @member {boolean} ccEnableArenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccEnableArenas = false;
    
                /**
                 * FileOptions objcClassPrefix.
                 * @member {string} objcClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objcClassPrefix = "";
    
                /**
                 * FileOptions csharpNamespace.
                 * @member {string} csharpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharpNamespace = "";
    
                /**
                 * FileOptions swiftPrefix.
                 * @member {string} swiftPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.swiftPrefix = "";
    
                /**
                 * FileOptions phpClassPrefix.
                 * @member {string} phpClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpClassPrefix = "";
    
                /**
                 * FileOptions phpNamespace.
                 * @member {string} phpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpNamespace = "";
    
                /**
                 * FileOptions phpMetadataNamespace.
                 * @member {string} phpMetadataNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.phpMetadataNamespace = "";
    
                /**
                 * FileOptions rubyPackage.
                 * @member {string} rubyPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.rubyPackage = "";
    
                /**
                 * FileOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        writer.uint32(/* id 39, wireType 2 =*/314).string(message.swiftPrefix);
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        writer.uint32(/* id 40, wireType 2 =*/322).string(message.phpClassPrefix);
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        writer.uint32(/* id 41, wireType 2 =*/330).string(message.phpNamespace);
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        writer.uint32(/* id 42, wireType 0 =*/336).bool(message.phpGenericServices);
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        writer.uint32(/* id 44, wireType 2 =*/354).string(message.phpMetadataNamespace);
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        writer.uint32(/* id 45, wireType 2 =*/362).string(message.rubyPackage);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.javaPackage = reader.string();
                            break;
                        case 8:
                            message.javaOuterClassname = reader.string();
                            break;
                        case 10:
                            message.javaMultipleFiles = reader.bool();
                            break;
                        case 20:
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        case 27:
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        case 9:
                            message.optimizeFor = reader.int32();
                            break;
                        case 11:
                            message.goPackage = reader.string();
                            break;
                        case 16:
                            message.ccGenericServices = reader.bool();
                            break;
                        case 17:
                            message.javaGenericServices = reader.bool();
                            break;
                        case 18:
                            message.pyGenericServices = reader.bool();
                            break;
                        case 42:
                            message.phpGenericServices = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 31:
                            message.ccEnableArenas = reader.bool();
                            break;
                        case 36:
                            message.objcClassPrefix = reader.string();
                            break;
                        case 37:
                            message.csharpNamespace = reader.string();
                            break;
                        case 39:
                            message.swiftPrefix = reader.string();
                            break;
                        case 40:
                            message.phpClassPrefix = reader.string();
                            break;
                        case 41:
                            message.phpNamespace = reader.string();
                            break;
                        case 44:
                            message.phpMetadataNamespace = reader.string();
                            break;
                        case 45:
                            message.rubyPackage = reader.string();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        if (!$util.isString(message.javaPackage))
                            return "javaPackage: string expected";
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        if (!$util.isString(message.javaOuterClassname))
                            return "javaOuterClassname: string expected";
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        if (typeof message.javaMultipleFiles !== "boolean")
                            return "javaMultipleFiles: boolean expected";
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                            return "javaGenerateEqualsAndHash: boolean expected";
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        if (typeof message.javaStringCheckUtf8 !== "boolean")
                            return "javaStringCheckUtf8: boolean expected";
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        switch (message.optimizeFor) {
                        default:
                            return "optimizeFor: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        if (!$util.isString(message.goPackage))
                            return "goPackage: string expected";
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        if (typeof message.ccGenericServices !== "boolean")
                            return "ccGenericServices: boolean expected";
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        if (typeof message.javaGenericServices !== "boolean")
                            return "javaGenericServices: boolean expected";
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        if (typeof message.pyGenericServices !== "boolean")
                            return "pyGenericServices: boolean expected";
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        if (typeof message.phpGenericServices !== "boolean")
                            return "phpGenericServices: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        if (typeof message.ccEnableArenas !== "boolean")
                            return "ccEnableArenas: boolean expected";
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        if (!$util.isString(message.objcClassPrefix))
                            return "objcClassPrefix: string expected";
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        if (!$util.isString(message.csharpNamespace))
                            return "csharpNamespace: string expected";
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        if (!$util.isString(message.swiftPrefix))
                            return "swiftPrefix: string expected";
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        if (!$util.isString(message.phpClassPrefix))
                            return "phpClassPrefix: string expected";
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        if (!$util.isString(message.phpNamespace))
                            return "phpNamespace: string expected";
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        if (!$util.isString(message.phpMetadataNamespace))
                            return "phpMetadataNamespace: string expected";
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        if (!$util.isString(message.rubyPackage))
                            return "rubyPackage: string expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.javaPackage != null)
                        message.javaPackage = String(object.javaPackage);
                    if (object.javaOuterClassname != null)
                        message.javaOuterClassname = String(object.javaOuterClassname);
                    if (object.javaMultipleFiles != null)
                        message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                    if (object.javaGenerateEqualsAndHash != null)
                        message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                    if (object.javaStringCheckUtf8 != null)
                        message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                    switch (object.optimizeFor) {
                    case "SPEED":
                    case 1:
                        message.optimizeFor = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimizeFor = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimizeFor = 3;
                        break;
                    }
                    if (object.goPackage != null)
                        message.goPackage = String(object.goPackage);
                    if (object.ccGenericServices != null)
                        message.ccGenericServices = Boolean(object.ccGenericServices);
                    if (object.javaGenericServices != null)
                        message.javaGenericServices = Boolean(object.javaGenericServices);
                    if (object.pyGenericServices != null)
                        message.pyGenericServices = Boolean(object.pyGenericServices);
                    if (object.phpGenericServices != null)
                        message.phpGenericServices = Boolean(object.phpGenericServices);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.ccEnableArenas != null)
                        message.ccEnableArenas = Boolean(object.ccEnableArenas);
                    if (object.objcClassPrefix != null)
                        message.objcClassPrefix = String(object.objcClassPrefix);
                    if (object.csharpNamespace != null)
                        message.csharpNamespace = String(object.csharpNamespace);
                    if (object.swiftPrefix != null)
                        message.swiftPrefix = String(object.swiftPrefix);
                    if (object.phpClassPrefix != null)
                        message.phpClassPrefix = String(object.phpClassPrefix);
                    if (object.phpNamespace != null)
                        message.phpNamespace = String(object.phpNamespace);
                    if (object.phpMetadataNamespace != null)
                        message.phpMetadataNamespace = String(object.phpMetadataNamespace);
                    if (object.rubyPackage != null)
                        message.rubyPackage = String(object.rubyPackage);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.javaPackage = "";
                        object.javaOuterClassname = "";
                        object.optimizeFor = options.enums === String ? "SPEED" : 1;
                        object.javaMultipleFiles = false;
                        object.goPackage = "";
                        object.ccGenericServices = false;
                        object.javaGenericServices = false;
                        object.pyGenericServices = false;
                        object.javaGenerateEqualsAndHash = false;
                        object.deprecated = false;
                        object.javaStringCheckUtf8 = false;
                        object.ccEnableArenas = false;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                        object.swiftPrefix = "";
                        object.phpClassPrefix = "";
                        object.phpNamespace = "";
                        object.phpGenericServices = false;
                        object.phpMetadataNamespace = "";
                        object.rubyPackage = "";
                    }
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        object.javaMultipleFiles = message.javaMultipleFiles;
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        object.goPackage = message.goPackage;
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        object.ccGenericServices = message.ccGenericServices;
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        object.javaGenericServices = message.javaGenericServices;
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        object.pyGenericServices = message.pyGenericServices;
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        object.ccEnableArenas = message.ccEnableArenas;
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        object.objcClassPrefix = message.objcClassPrefix;
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        object.csharpNamespace = message.csharpNamespace;
                    if (message.swiftPrefix != null && message.hasOwnProperty("swiftPrefix"))
                        object.swiftPrefix = message.swiftPrefix;
                    if (message.phpClassPrefix != null && message.hasOwnProperty("phpClassPrefix"))
                        object.phpClassPrefix = message.phpClassPrefix;
                    if (message.phpNamespace != null && message.hasOwnProperty("phpNamespace"))
                        object.phpNamespace = message.phpNamespace;
                    if (message.phpGenericServices != null && message.hasOwnProperty("phpGenericServices"))
                        object.phpGenericServices = message.phpGenericServices;
                    if (message.phpMetadataNamespace != null && message.hasOwnProperty("phpMetadataNamespace"))
                        object.phpMetadataNamespace = message.phpMetadataNamespace;
                    if (message.rubyPackage != null && message.hasOwnProperty("rubyPackage"))
                        object.rubyPackage = message.rubyPackage;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {string}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
                 * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [mapEntry] MessageOptions mapEntry
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions messageSetWireFormat.
                 * @member {boolean} messageSetWireFormat
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.messageSetWireFormat = false;
    
                /**
                 * MessageOptions noStandardDescriptorAccessor.
                 * @member {boolean} noStandardDescriptorAccessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.noStandardDescriptorAccessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions mapEntry.
                 * @member {boolean} mapEntry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.mapEntry = false;
    
                /**
                 * MessageOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageSetWireFormat = reader.bool();
                            break;
                        case 2:
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 7:
                            message.mapEntry = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        if (typeof message.messageSetWireFormat !== "boolean")
                            return "messageSetWireFormat: boolean expected";
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        if (typeof message.noStandardDescriptorAccessor !== "boolean")
                            return "noStandardDescriptorAccessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        if (typeof message.mapEntry !== "boolean")
                            return "mapEntry: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.messageSetWireFormat != null)
                        message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                    if (object.noStandardDescriptorAccessor != null)
                        message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.mapEntry != null)
                        message.mapEntry = Boolean(object.mapEntry);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.messageSetWireFormat = false;
                        object.noStandardDescriptorAccessor = false;
                        object.deprecated = false;
                        object.mapEntry = false;
                    }
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        object.messageSetWireFormat = message.messageSetWireFormat;
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        object.mapEntry = message.mapEntry;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
                 * @property {Array.<google.api.FieldBehavior>|null} [".google.api.fieldBehavior"] FieldOptions .google.api.fieldBehavior
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpretedOption = [];
                    this[".google.api.fieldBehavior"] = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * FieldOptions .google.api.fieldBehavior.
                 * @member {Array.<google.api.FieldBehavior>} .google.api.fieldBehavior
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype[".google.api.fieldBehavior"] = $util.emptyArray;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.fieldBehavior"] != null && message[".google.api.fieldBehavior"].length) {
                        writer.uint32(/* id 1052, wireType 2 =*/8418).fork();
                        for (var i = 0; i < message[".google.api.fieldBehavior"].length; ++i)
                            writer.int32(message[".google.api.fieldBehavior"][i]);
                        writer.ldelim();
                    }
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 6:
                            message.jstype = reader.int32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 1052:
                            if (!(message[".google.api.fieldBehavior"] && message[".google.api.fieldBehavior"].length))
                                message[".google.api.fieldBehavior"] = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message[".google.api.fieldBehavior"].push(reader.int32());
                            } else
                                message[".google.api.fieldBehavior"].push(reader.int32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.fieldBehavior"] != null && message.hasOwnProperty(".google.api.fieldBehavior")) {
                        if (!Array.isArray(message[".google.api.fieldBehavior"]))
                            return ".google.api.fieldBehavior: array expected";
                        for (var i = 0; i < message[".google.api.fieldBehavior"].length; ++i)
                            switch (message[".google.api.fieldBehavior"][i]) {
                            default:
                                return ".google.api.fieldBehavior: enum value[] expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.fieldBehavior"]) {
                        if (!Array.isArray(object[".google.api.fieldBehavior"]))
                            throw TypeError(".google.protobuf.FieldOptions..google.api.fieldBehavior: array expected");
                        message[".google.api.fieldBehavior"] = [];
                        for (var i = 0; i < object[".google.api.fieldBehavior"].length; ++i)
                            switch (object[".google.api.fieldBehavior"][i]) {
                            default:
                            case "FIELD_BEHAVIOR_UNSPECIFIED":
                            case 0:
                                message[".google.api.fieldBehavior"][i] = 0;
                                break;
                            case "OPTIONAL":
                            case 1:
                                message[".google.api.fieldBehavior"][i] = 1;
                                break;
                            case "REQUIRED":
                            case 2:
                                message[".google.api.fieldBehavior"][i] = 2;
                                break;
                            case "OUTPUT_ONLY":
                            case 3:
                                message[".google.api.fieldBehavior"][i] = 3;
                                break;
                            case "INPUT_ONLY":
                            case 4:
                                message[".google.api.fieldBehavior"][i] = 4;
                                break;
                            case "IMMUTABLE":
                            case 5:
                                message[".google.api.fieldBehavior"][i] = 5;
                                break;
                            }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.uninterpretedOption = [];
                        object[".google.api.fieldBehavior"] = [];
                    }
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.fieldBehavior"] && message[".google.api.fieldBehavior"].length) {
                        object[".google.api.fieldBehavior"] = [];
                        for (var j = 0; j < message[".google.api.fieldBehavior"].length; ++j)
                            object[".google.api.fieldBehavior"][j] = options.enums === String ? $root.google.api.FieldBehavior[message[".google.api.fieldBehavior"][j]] : message[".google.api.fieldBehavior"][j];
                    }
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {string}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {string}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allowAlias] EnumOptions allowAlias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allowAlias.
                 * @member {boolean} allowAlias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allowAlias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.allowAlias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        if (typeof message.allowAlias !== "boolean")
                            return "allowAlias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allowAlias != null)
                        message.allowAlias = Boolean(object.allowAlias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.allowAlias = false;
                        object.deprecated = false;
                    }
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
                 * @property {string|null} [".google.api.defaultHost"] ServiceOptions .google.api.defaultHost
                 * @property {string|null} [".google.api.oauthScopes"] ServiceOptions .google.api.oauthScopes
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * ServiceOptions .google.api.defaultHost.
                 * @member {string} .google.api.defaultHost
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".google.api.defaultHost"] = "";
    
                /**
                 * ServiceOptions .google.api.oauthScopes.
                 * @member {string} .google.api.oauthScopes
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype[".google.api.oauthScopes"] = "";
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        writer.uint32(/* id 1049, wireType 2 =*/8394).string(message[".google.api.defaultHost"]);
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        writer.uint32(/* id 1050, wireType 2 =*/8402).string(message[".google.api.oauthScopes"]);
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 1049:
                            message[".google.api.defaultHost"] = reader.string();
                            break;
                        case 1050:
                            message[".google.api.oauthScopes"] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        if (!$util.isString(message[".google.api.defaultHost"]))
                            return ".google.api.defaultHost: string expected";
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        if (!$util.isString(message[".google.api.oauthScopes"]))
                            return ".google.api.oauthScopes: string expected";
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.defaultHost"] != null)
                        message[".google.api.defaultHost"] = String(object[".google.api.defaultHost"]);
                    if (object[".google.api.oauthScopes"] != null)
                        message[".google.api.oauthScopes"] = String(object[".google.api.oauthScopes"]);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".google.api.defaultHost"] = "";
                        object[".google.api.oauthScopes"] = "";
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.defaultHost"] != null && message.hasOwnProperty(".google.api.defaultHost"))
                        object[".google.api.defaultHost"] = message[".google.api.defaultHost"];
                    if (message[".google.api.oauthScopes"] != null && message.hasOwnProperty(".google.api.oauthScopes"))
                        object[".google.api.oauthScopes"] = message[".google.api.oauthScopes"];
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {google.protobuf.MethodOptions.IdempotencyLevel|null} [idempotencyLevel] MethodOptions idempotencyLevel
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
                 * @property {google.api.IHttpRule|null} [".google.api.http"] MethodOptions .google.api.http
                 * @property {Array.<string>|null} [".google.api.methodSignature"] MethodOptions .google.api.methodSignature
                 * @property {google.longrunning.IOperationInfo|null} [".google.longrunning.operationInfo"] MethodOptions .google.longrunning.operationInfo
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpretedOption = [];
                    this[".google.api.methodSignature"] = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions idempotencyLevel.
                 * @member {google.protobuf.MethodOptions.IdempotencyLevel} idempotencyLevel
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.idempotencyLevel = 0;
    
                /**
                 * MethodOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * MethodOptions .google.api.http.
                 * @member {google.api.IHttpRule|null|undefined} .google.api.http
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.http"] = null;
    
                /**
                 * MethodOptions .google.api.methodSignature.
                 * @member {Array.<string>} .google.api.methodSignature
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.methodSignature"] = $util.emptyArray;
    
                /**
                 * MethodOptions .google.longrunning.operationInfo.
                 * @member {google.longrunning.IOperationInfo|null|undefined} .google.longrunning.operationInfo
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.longrunning.operationInfo"] = null;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.longrunning.operationInfo"] != null && message.hasOwnProperty(".google.longrunning.operationInfo"))
                        $root.google.longrunning.OperationInfo.encode(message[".google.longrunning.operationInfo"], writer.uint32(/* id 1049, wireType 2 =*/8394).fork()).ldelim();
                    if (message[".google.api.methodSignature"] != null && message[".google.api.methodSignature"].length)
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            writer.uint32(/* id 1051, wireType 2 =*/8410).string(message[".google.api.methodSignature"][i]);
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 34:
                            message.idempotencyLevel = reader.int32();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 72295728:
                            message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                            break;
                        case 1051:
                            if (!(message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length))
                                message[".google.api.methodSignature"] = [];
                            message[".google.api.methodSignature"].push(reader.string());
                            break;
                        case 1049:
                            message[".google.longrunning.operationInfo"] = $root.google.longrunning.OperationInfo.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        switch (message.idempotencyLevel) {
                        default:
                            return "idempotencyLevel: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http")) {
                        var error = $root.google.api.HttpRule.verify(message[".google.api.http"]);
                        if (error)
                            return ".google.api.http." + error;
                    }
                    if (message[".google.api.methodSignature"] != null && message.hasOwnProperty(".google.api.methodSignature")) {
                        if (!Array.isArray(message[".google.api.methodSignature"]))
                            return ".google.api.methodSignature: array expected";
                        for (var i = 0; i < message[".google.api.methodSignature"].length; ++i)
                            if (!$util.isString(message[".google.api.methodSignature"][i]))
                                return ".google.api.methodSignature: string[] expected";
                    }
                    if (message[".google.longrunning.operationInfo"] != null && message.hasOwnProperty(".google.longrunning.operationInfo")) {
                        var error = $root.google.longrunning.OperationInfo.verify(message[".google.longrunning.operationInfo"]);
                        if (error)
                            return ".google.longrunning.operationInfo." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    switch (object.idempotencyLevel) {
                    case "IDEMPOTENCY_UNKNOWN":
                    case 0:
                        message.idempotencyLevel = 0;
                        break;
                    case "NO_SIDE_EFFECTS":
                    case 1:
                        message.idempotencyLevel = 1;
                        break;
                    case "IDEMPOTENT":
                    case 2:
                        message.idempotencyLevel = 2;
                        break;
                    }
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.http"] != null) {
                        if (typeof object[".google.api.http"] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions..google.api.http: object expected");
                        message[".google.api.http"] = $root.google.api.HttpRule.fromObject(object[".google.api.http"]);
                    }
                    if (object[".google.api.methodSignature"]) {
                        if (!Array.isArray(object[".google.api.methodSignature"]))
                            throw TypeError(".google.protobuf.MethodOptions..google.api.methodSignature: array expected");
                        message[".google.api.methodSignature"] = [];
                        for (var i = 0; i < object[".google.api.methodSignature"].length; ++i)
                            message[".google.api.methodSignature"][i] = String(object[".google.api.methodSignature"][i]);
                    }
                    if (object[".google.longrunning.operationInfo"] != null) {
                        if (typeof object[".google.longrunning.operationInfo"] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions..google.longrunning.operationInfo: object expected");
                        message[".google.longrunning.operationInfo"] = $root.google.longrunning.OperationInfo.fromObject(object[".google.longrunning.operationInfo"]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.uninterpretedOption = [];
                        object[".google.api.methodSignature"] = [];
                    }
                    if (options.defaults) {
                        object.deprecated = false;
                        object.idempotencyLevel = options.enums === String ? "IDEMPOTENCY_UNKNOWN" : 0;
                        object[".google.longrunning.operationInfo"] = null;
                        object[".google.api.http"] = null;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
                        object.idempotencyLevel = options.enums === String ? $root.google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.longrunning.operationInfo"] != null && message.hasOwnProperty(".google.longrunning.operationInfo"))
                        object[".google.longrunning.operationInfo"] = $root.google.longrunning.OperationInfo.toObject(message[".google.longrunning.operationInfo"], options);
                    if (message[".google.api.methodSignature"] && message[".google.api.methodSignature"].length) {
                        object[".google.api.methodSignature"] = [];
                        for (var j = 0; j < message[".google.api.methodSignature"].length; ++j)
                            object[".google.api.methodSignature"][j] = message[".google.api.methodSignature"][j];
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        object[".google.api.http"] = $root.google.api.HttpRule.toObject(message[".google.api.http"], options);
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * IdempotencyLevel enum.
                 * @name google.protobuf.MethodOptions.IdempotencyLevel
                 * @enum {string}
                 * @property {number} IDEMPOTENCY_UNKNOWN=0 IDEMPOTENCY_UNKNOWN value
                 * @property {number} NO_SIDE_EFFECTS=1 NO_SIDE_EFFECTS value
                 * @property {number} IDEMPOTENT=2 IDEMPOTENT value
                 */
                MethodOptions.IdempotencyLevel = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "IDEMPOTENCY_UNKNOWN"] = 0;
                    values[valuesById[1] = "NO_SIDE_EFFECTS"] = 1;
                    values[valuesById[2] = "IDEMPOTENT"] = 2;
                    return values;
                })();
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifierValue] UninterpretedOption identifierValue
                 * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
                 * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
                 * @property {number|null} [doubleValue] UninterpretedOption doubleValue
                 * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
                 * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifierValue.
                 * @member {string} identifierValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifierValue = "";
    
                /**
                 * UninterpretedOption positiveIntValue.
                 * @member {number|Long} positiveIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negativeIntValue.
                 * @member {number|Long} negativeIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption doubleValue.
                 * @member {number} doubleValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.doubleValue = 0;
    
                /**
                 * UninterpretedOption stringValue.
                 * @member {Uint8Array} stringValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregateValue.
                 * @member {string} aggregateValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregateValue = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifierValue = reader.string();
                            break;
                        case 4:
                            message.positiveIntValue = reader.uint64();
                            break;
                        case 5:
                            message.negativeIntValue = reader.int64();
                            break;
                        case 6:
                            message.doubleValue = reader.double();
                            break;
                        case 7:
                            message.stringValue = reader.bytes();
                            break;
                        case 8:
                            message.aggregateValue = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        if (!$util.isString(message.identifierValue))
                            return "identifierValue: string expected";
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                            return "positiveIntValue: integer|Long expected";
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                            return "negativeIntValue: integer|Long expected";
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                            return "stringValue: buffer expected";
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        if (!$util.isString(message.aggregateValue))
                            return "aggregateValue: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifierValue != null)
                        message.identifierValue = String(object.identifierValue);
                    if (object.positiveIntValue != null)
                        if ($util.Long)
                            (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                        else if (typeof object.positiveIntValue === "string")
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        else if (typeof object.positiveIntValue === "number")
                            message.positiveIntValue = object.positiveIntValue;
                        else if (typeof object.positiveIntValue === "object")
                            message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                    if (object.negativeIntValue != null)
                        if ($util.Long)
                            (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                        else if (typeof object.negativeIntValue === "string")
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        else if (typeof object.negativeIntValue === "number")
                            message.negativeIntValue = object.negativeIntValue;
                        else if (typeof object.negativeIntValue === "object")
                            message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringValue != null)
                        if (typeof object.stringValue === "string")
                            $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                        else if (object.stringValue.length)
                            message.stringValue = object.stringValue;
                    if (object.aggregateValue != null)
                        message.aggregateValue = String(object.aggregateValue);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifierValue = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positiveIntValue = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negativeIntValue = options.longs === String ? "0" : 0;
                        object.doubleValue = 0;
                        if (options.bytes === String)
                            object.stringValue = "";
                        else {
                            object.stringValue = [];
                            if (options.bytes !== Array)
                                object.stringValue = $util.newBuffer(object.stringValue);
                        }
                        object.aggregateValue = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        object.identifierValue = message.identifierValue;
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (typeof message.positiveIntValue === "number")
                            object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                        else
                            object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (typeof message.negativeIntValue === "number")
                            object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                        else
                            object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        object.aggregateValue = message.aggregateValue;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} namePart NamePart namePart
                     * @property {boolean} isExtension NamePart isExtension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart namePart.
                     * @member {string} namePart
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.namePart = "";
    
                    /**
                     * NamePart isExtension.
                     * @member {boolean} isExtension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.isExtension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.namePart = reader.string();
                                break;
                            case 2:
                                message.isExtension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("namePart"))
                            throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                        if (!message.hasOwnProperty("isExtension"))
                            throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.namePart))
                            return "namePart: string expected";
                        if (typeof message.isExtension !== "boolean")
                            return "isExtension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.namePart != null)
                            message.namePart = String(object.namePart);
                        if (object.isExtension != null)
                            message.isExtension = Boolean(object.isExtension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.namePart = "";
                            object.isExtension = false;
                        }
                        if (message.namePart != null && message.hasOwnProperty("namePart"))
                            object.namePart = message.namePart;
                        if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                            object.isExtension = message.isExtension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leadingComments] Location leadingComments
                     * @property {string|null} [trailingComments] Location trailingComments
                     * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        this.leadingDetachedComments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leadingComments.
                     * @member {string} leadingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingComments = "";
    
                    /**
                     * Location trailingComments.
                     * @member {string} trailingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailingComments = "";
    
                    /**
                     * Location leadingDetachedComments.
                     * @member {Array.<string>} leadingDetachedComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingDetachedComments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                        if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leadingComments = reader.string();
                                break;
                            case 4:
                                message.trailingComments = reader.string();
                                break;
                            case 6:
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            if (!$util.isString(message.leadingComments))
                                return "leadingComments: string expected";
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            if (!$util.isString(message.trailingComments))
                                return "trailingComments: string expected";
                        if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                            if (!Array.isArray(message.leadingDetachedComments))
                                return "leadingDetachedComments: array expected";
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                if (!$util.isString(message.leadingDetachedComments[i]))
                                    return "leadingDetachedComments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leadingComments != null)
                            message.leadingComments = String(object.leadingComments);
                        if (object.trailingComments != null)
                            message.trailingComments = String(object.trailingComments);
                        if (object.leadingDetachedComments) {
                            if (!Array.isArray(object.leadingDetachedComments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                            message.leadingDetachedComments = [];
                            for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                                message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leadingDetachedComments = [];
                        }
                        if (options.defaults) {
                            object.leadingComments = "";
                            object.trailingComments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            object.leadingComments = message.leadingComments;
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            object.trailingComments = message.trailingComments;
                        if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                            object.leadingDetachedComments = [];
                            for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                                object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [sourceFile] Annotation sourceFile
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation sourceFile.
                     * @member {string} sourceFile
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.sourceFile = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                message.sourceFile = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.sourceFile != null)
                            message.sourceFile = String(object.sourceFile);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.sourceFile = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            protobuf.Any = (function() {
    
                /**
                 * Properties of an Any.
                 * @memberof google.protobuf
                 * @interface IAny
                 * @property {string|null} [type_url] Any type_url
                 * @property {Uint8Array|null} [value] Any value
                 */
    
                /**
                 * Constructs a new Any.
                 * @memberof google.protobuf
                 * @classdesc Represents an Any.
                 * @implements IAny
                 * @constructor
                 * @param {google.protobuf.IAny=} [properties] Properties to set
                 */
                function Any(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Any type_url.
                 * @member {string} type_url
                 * @memberof google.protobuf.Any
                 * @instance
                 */
                Any.prototype.type_url = "";
    
                /**
                 * Any value.
                 * @member {Uint8Array} value
                 * @memberof google.protobuf.Any
                 * @instance
                 */
                Any.prototype.value = $util.newBuffer([]);
    
                /**
                 * Creates a new Any instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny=} [properties] Properties to set
                 * @returns {google.protobuf.Any} Any instance
                 */
                Any.create = function create(properties) {
                    return new Any(properties);
                };
    
                /**
                 * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny} message Any message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Any.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.IAny} message Any message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Any.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Any message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Any} Any
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Any.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.type_url = reader.string();
                            break;
                        case 2:
                            message.value = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Any message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Any} Any
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Any.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Any message.
                 * @function verify
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Any.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        if (!$util.isString(message.type_url))
                            return "type_url: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                            return "value: buffer expected";
                    return null;
                };
    
                /**
                 * Creates an Any message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Any} Any
                 */
                Any.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Any)
                        return object;
                    var message = new $root.google.protobuf.Any();
                    if (object.type_url != null)
                        message.type_url = String(object.type_url);
                    if (object.value != null)
                        if (typeof object.value === "string")
                            $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                        else if (object.value.length)
                            message.value = object.value;
                    return message;
                };
    
                /**
                 * Creates a plain object from an Any message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Any
                 * @static
                 * @param {google.protobuf.Any} message Any
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Any.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.type_url = "";
                        if (options.bytes === String)
                            object.value = "";
                        else {
                            object.value = [];
                            if (options.bytes !== Array)
                                object.value = $util.newBuffer(object.value);
                        }
                    }
                    if (message.type_url != null && message.hasOwnProperty("type_url"))
                        object.type_url = message.type_url;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this Any to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Any
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Any.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Any;
            })();
    
            protobuf.Duration = (function() {
    
                /**
                 * Properties of a Duration.
                 * @memberof google.protobuf
                 * @interface IDuration
                 * @property {number|Long|null} [seconds] Duration seconds
                 * @property {number|null} [nanos] Duration nanos
                 */
    
                /**
                 * Constructs a new Duration.
                 * @memberof google.protobuf
                 * @classdesc Represents a Duration.
                 * @implements IDuration
                 * @constructor
                 * @param {google.protobuf.IDuration=} [properties] Properties to set
                 */
                function Duration(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Duration seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Duration
                 * @instance
                 */
                Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Duration nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Duration
                 * @instance
                 */
                Duration.prototype.nanos = 0;
    
                /**
                 * Creates a new Duration instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration=} [properties] Properties to set
                 * @returns {google.protobuf.Duration} Duration instance
                 */
                Duration.create = function create(properties) {
                    return new Duration(properties);
                };
    
                /**
                 * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration} message Duration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Duration.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.IDuration} message Duration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Duration.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Duration message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Duration} Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Duration.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Duration message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Duration} Duration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Duration.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Duration message.
                 * @function verify
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Duration.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Duration message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Duration} Duration
                 */
                Duration.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Duration)
                        return object;
                    var message = new $root.google.protobuf.Duration();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Duration message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Duration
                 * @static
                 * @param {google.protobuf.Duration} message Duration
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Duration.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Duration to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Duration
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Duration.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Duration;
            })();
    
            protobuf.Empty = (function() {
    
                /**
                 * Properties of an Empty.
                 * @memberof google.protobuf
                 * @interface IEmpty
                 */
    
                /**
                 * Constructs a new Empty.
                 * @memberof google.protobuf
                 * @classdesc Represents an Empty.
                 * @implements IEmpty
                 * @constructor
                 * @param {google.protobuf.IEmpty=} [properties] Properties to set
                 */
                function Empty(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Creates a new Empty instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty=} [properties] Properties to set
                 * @returns {google.protobuf.Empty} Empty instance
                 */
                Empty.create = function create(properties) {
                    return new Empty(properties);
                };
    
                /**
                 * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };
    
                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Empty message.
                 * @function verify
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Empty.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };
    
                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Empty} Empty
                 */
                Empty.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Empty)
                        return object;
                    return new $root.google.protobuf.Empty();
                };
    
                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.Empty} message Empty
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Empty.toObject = function toObject() {
                    return {};
                };
    
                /**
                 * Converts this Empty to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Empty
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Empty.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Empty;
            })();
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timestamp;
            })();
    
            return protobuf;
        })();
    
        google.longrunning = (function() {
    
            /**
             * Namespace longrunning.
             * @memberof google
             * @namespace
             */
            var longrunning = {};
    
            longrunning.Operations = (function() {
    
                /**
                 * Constructs a new Operations service.
                 * @memberof google.longrunning
                 * @classdesc Represents an Operations
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Operations(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }
    
                (Operations.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Operations;
    
                /**
                 * Creates new Operations service using the specified rpc implementation.
                 * @function create
                 * @memberof google.longrunning.Operations
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Operations} RPC service. Useful where requests and/or responses are streamed.
                 */
                Operations.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };
    
                /**
                 * Callback as used by {@link google.longrunning.Operations#listOperations}.
                 * @memberof google.longrunning.Operations
                 * @typedef ListOperationsCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {google.longrunning.ListOperationsResponse} [response] ListOperationsResponse
                 */
    
                /**
                 * Calls ListOperations.
                 * @function listOperations
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.IListOperationsRequest} request ListOperationsRequest message or plain object
                 * @param {google.longrunning.Operations.ListOperationsCallback} callback Node-style callback called with the error, if any, and ListOperationsResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Operations.prototype.listOperations = function listOperations(request, callback) {
                    return this.rpcCall(listOperations, $root.google.longrunning.ListOperationsRequest, $root.google.longrunning.ListOperationsResponse, request, callback);
                }, "name", { value: "ListOperations" });
    
                /**
                 * Calls ListOperations.
                 * @function listOperations
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.IListOperationsRequest} request ListOperationsRequest message or plain object
                 * @returns {Promise<google.longrunning.ListOperationsResponse>} Promise
                 * @variation 2
                 */
    
                /**
                 * Callback as used by {@link google.longrunning.Operations#getOperation}.
                 * @memberof google.longrunning.Operations
                 * @typedef GetOperationCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {google.longrunning.Operation} [response] Operation
                 */
    
                /**
                 * Calls GetOperation.
                 * @function getOperation
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.IGetOperationRequest} request GetOperationRequest message or plain object
                 * @param {google.longrunning.Operations.GetOperationCallback} callback Node-style callback called with the error, if any, and Operation
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Operations.prototype.getOperation = function getOperation(request, callback) {
                    return this.rpcCall(getOperation, $root.google.longrunning.GetOperationRequest, $root.google.longrunning.Operation, request, callback);
                }, "name", { value: "GetOperation" });
    
                /**
                 * Calls GetOperation.
                 * @function getOperation
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.IGetOperationRequest} request GetOperationRequest message or plain object
                 * @returns {Promise<google.longrunning.Operation>} Promise
                 * @variation 2
                 */
    
                /**
                 * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
                 * @memberof google.longrunning.Operations
                 * @typedef DeleteOperationCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {google.protobuf.Empty} [response] Empty
                 */
    
                /**
                 * Calls DeleteOperation.
                 * @function deleteOperation
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.IDeleteOperationRequest} request DeleteOperationRequest message or plain object
                 * @param {google.longrunning.Operations.DeleteOperationCallback} callback Node-style callback called with the error, if any, and Empty
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Operations.prototype.deleteOperation = function deleteOperation(request, callback) {
                    return this.rpcCall(deleteOperation, $root.google.longrunning.DeleteOperationRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "DeleteOperation" });
    
                /**
                 * Calls DeleteOperation.
                 * @function deleteOperation
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.IDeleteOperationRequest} request DeleteOperationRequest message or plain object
                 * @returns {Promise<google.protobuf.Empty>} Promise
                 * @variation 2
                 */
    
                /**
                 * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
                 * @memberof google.longrunning.Operations
                 * @typedef CancelOperationCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {google.protobuf.Empty} [response] Empty
                 */
    
                /**
                 * Calls CancelOperation.
                 * @function cancelOperation
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.ICancelOperationRequest} request CancelOperationRequest message or plain object
                 * @param {google.longrunning.Operations.CancelOperationCallback} callback Node-style callback called with the error, if any, and Empty
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Operations.prototype.cancelOperation = function cancelOperation(request, callback) {
                    return this.rpcCall(cancelOperation, $root.google.longrunning.CancelOperationRequest, $root.google.protobuf.Empty, request, callback);
                }, "name", { value: "CancelOperation" });
    
                /**
                 * Calls CancelOperation.
                 * @function cancelOperation
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.ICancelOperationRequest} request CancelOperationRequest message or plain object
                 * @returns {Promise<google.protobuf.Empty>} Promise
                 * @variation 2
                 */
    
                /**
                 * Callback as used by {@link google.longrunning.Operations#waitOperation}.
                 * @memberof google.longrunning.Operations
                 * @typedef WaitOperationCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {google.longrunning.Operation} [response] Operation
                 */
    
                /**
                 * Calls WaitOperation.
                 * @function waitOperation
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.IWaitOperationRequest} request WaitOperationRequest message or plain object
                 * @param {google.longrunning.Operations.WaitOperationCallback} callback Node-style callback called with the error, if any, and Operation
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(Operations.prototype.waitOperation = function waitOperation(request, callback) {
                    return this.rpcCall(waitOperation, $root.google.longrunning.WaitOperationRequest, $root.google.longrunning.Operation, request, callback);
                }, "name", { value: "WaitOperation" });
    
                /**
                 * Calls WaitOperation.
                 * @function waitOperation
                 * @memberof google.longrunning.Operations
                 * @instance
                 * @param {google.longrunning.IWaitOperationRequest} request WaitOperationRequest message or plain object
                 * @returns {Promise<google.longrunning.Operation>} Promise
                 * @variation 2
                 */
    
                return Operations;
            })();
    
            longrunning.Operation = (function() {
    
                /**
                 * Properties of an Operation.
                 * @memberof google.longrunning
                 * @interface IOperation
                 * @property {string|null} [name] Operation name
                 * @property {google.protobuf.IAny|null} [metadata] Operation metadata
                 * @property {boolean|null} [done] Operation done
                 * @property {google.rpc.IStatus|null} [error] Operation error
                 * @property {google.protobuf.IAny|null} [response] Operation response
                 */
    
                /**
                 * Constructs a new Operation.
                 * @memberof google.longrunning
                 * @classdesc Represents an Operation.
                 * @implements IOperation
                 * @constructor
                 * @param {google.longrunning.IOperation=} [properties] Properties to set
                 */
                function Operation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Operation name.
                 * @member {string} name
                 * @memberof google.longrunning.Operation
                 * @instance
                 */
                Operation.prototype.name = "";
    
                /**
                 * Operation metadata.
                 * @member {google.protobuf.IAny|null|undefined} metadata
                 * @memberof google.longrunning.Operation
                 * @instance
                 */
                Operation.prototype.metadata = null;
    
                /**
                 * Operation done.
                 * @member {boolean} done
                 * @memberof google.longrunning.Operation
                 * @instance
                 */
                Operation.prototype.done = false;
    
                /**
                 * Operation error.
                 * @member {google.rpc.IStatus|null|undefined} error
                 * @memberof google.longrunning.Operation
                 * @instance
                 */
                Operation.prototype.error = null;
    
                /**
                 * Operation response.
                 * @member {google.protobuf.IAny|null|undefined} response
                 * @memberof google.longrunning.Operation
                 * @instance
                 */
                Operation.prototype.response = null;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * Operation result.
                 * @member {"error"|"response"|undefined} result
                 * @memberof google.longrunning.Operation
                 * @instance
                 */
                Object.defineProperty(Operation.prototype, "result", {
                    get: $util.oneOfGetter($oneOfFields = ["error", "response"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new Operation instance using the specified properties.
                 * @function create
                 * @memberof google.longrunning.Operation
                 * @static
                 * @param {google.longrunning.IOperation=} [properties] Properties to set
                 * @returns {google.longrunning.Operation} Operation instance
                 */
                Operation.create = function create(properties) {
                    return new Operation(properties);
                };
    
                /**
                 * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
                 * @function encode
                 * @memberof google.longrunning.Operation
                 * @static
                 * @param {google.longrunning.IOperation} message Operation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Operation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        $root.google.protobuf.Any.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.done != null && message.hasOwnProperty("done"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.done);
                    if (message.error != null && message.hasOwnProperty("error"))
                        $root.google.rpc.Status.encode(message.error, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.response != null && message.hasOwnProperty("response"))
                        $root.google.protobuf.Any.encode(message.response, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.longrunning.Operation
                 * @static
                 * @param {google.longrunning.IOperation} message Operation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Operation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Operation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.longrunning.Operation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.longrunning.Operation} Operation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Operation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.longrunning.Operation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.metadata = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.done = reader.bool();
                            break;
                        case 4:
                            message.error = $root.google.rpc.Status.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.response = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Operation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.longrunning.Operation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.longrunning.Operation} Operation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Operation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Operation message.
                 * @function verify
                 * @memberof google.longrunning.Operation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Operation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.metadata != null && message.hasOwnProperty("metadata")) {
                        var error = $root.google.protobuf.Any.verify(message.metadata);
                        if (error)
                            return "metadata." + error;
                    }
                    if (message.done != null && message.hasOwnProperty("done"))
                        if (typeof message.done !== "boolean")
                            return "done: boolean expected";
                    if (message.error != null && message.hasOwnProperty("error")) {
                        properties.result = 1;
                        {
                            var error = $root.google.rpc.Status.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                    }
                    if (message.response != null && message.hasOwnProperty("response")) {
                        if (properties.result === 1)
                            return "result: multiple values";
                        properties.result = 1;
                        {
                            var error = $root.google.protobuf.Any.verify(message.response);
                            if (error)
                                return "response." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an Operation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.longrunning.Operation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.longrunning.Operation} Operation
                 */
                Operation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.longrunning.Operation)
                        return object;
                    var message = new $root.google.longrunning.Operation();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".google.longrunning.Operation.metadata: object expected");
                        message.metadata = $root.google.protobuf.Any.fromObject(object.metadata);
                    }
                    if (object.done != null)
                        message.done = Boolean(object.done);
                    if (object.error != null) {
                        if (typeof object.error !== "object")
                            throw TypeError(".google.longrunning.Operation.error: object expected");
                        message.error = $root.google.rpc.Status.fromObject(object.error);
                    }
                    if (object.response != null) {
                        if (typeof object.response !== "object")
                            throw TypeError(".google.longrunning.Operation.response: object expected");
                        message.response = $root.google.protobuf.Any.fromObject(object.response);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an Operation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.longrunning.Operation
                 * @static
                 * @param {google.longrunning.Operation} message Operation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Operation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.metadata = null;
                        object.done = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.google.protobuf.Any.toObject(message.metadata, options);
                    if (message.done != null && message.hasOwnProperty("done"))
                        object.done = message.done;
                    if (message.error != null && message.hasOwnProperty("error")) {
                        object.error = $root.google.rpc.Status.toObject(message.error, options);
                        if (options.oneofs)
                            object.result = "error";
                    }
                    if (message.response != null && message.hasOwnProperty("response")) {
                        object.response = $root.google.protobuf.Any.toObject(message.response, options);
                        if (options.oneofs)
                            object.result = "response";
                    }
                    return object;
                };
    
                /**
                 * Converts this Operation to JSON.
                 * @function toJSON
                 * @memberof google.longrunning.Operation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Operation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Operation;
            })();
    
            longrunning.GetOperationRequest = (function() {
    
                /**
                 * Properties of a GetOperationRequest.
                 * @memberof google.longrunning
                 * @interface IGetOperationRequest
                 * @property {string|null} [name] GetOperationRequest name
                 */
    
                /**
                 * Constructs a new GetOperationRequest.
                 * @memberof google.longrunning
                 * @classdesc Represents a GetOperationRequest.
                 * @implements IGetOperationRequest
                 * @constructor
                 * @param {google.longrunning.IGetOperationRequest=} [properties] Properties to set
                 */
                function GetOperationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GetOperationRequest name.
                 * @member {string} name
                 * @memberof google.longrunning.GetOperationRequest
                 * @instance
                 */
                GetOperationRequest.prototype.name = "";
    
                /**
                 * Creates a new GetOperationRequest instance using the specified properties.
                 * @function create
                 * @memberof google.longrunning.GetOperationRequest
                 * @static
                 * @param {google.longrunning.IGetOperationRequest=} [properties] Properties to set
                 * @returns {google.longrunning.GetOperationRequest} GetOperationRequest instance
                 */
                GetOperationRequest.create = function create(properties) {
                    return new GetOperationRequest(properties);
                };
    
                /**
                 * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof google.longrunning.GetOperationRequest
                 * @static
                 * @param {google.longrunning.IGetOperationRequest} message GetOperationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetOperationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };
    
                /**
                 * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.longrunning.GetOperationRequest
                 * @static
                 * @param {google.longrunning.IGetOperationRequest} message GetOperationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GetOperationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GetOperationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.longrunning.GetOperationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.longrunning.GetOperationRequest} GetOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetOperationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.longrunning.GetOperationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.longrunning.GetOperationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.longrunning.GetOperationRequest} GetOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GetOperationRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GetOperationRequest message.
                 * @function verify
                 * @memberof google.longrunning.GetOperationRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GetOperationRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };
    
                /**
                 * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.longrunning.GetOperationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.longrunning.GetOperationRequest} GetOperationRequest
                 */
                GetOperationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.longrunning.GetOperationRequest)
                        return object;
                    var message = new $root.google.longrunning.GetOperationRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };
    
                /**
                 * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.longrunning.GetOperationRequest
                 * @static
                 * @param {google.longrunning.GetOperationRequest} message GetOperationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GetOperationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };
    
                /**
                 * Converts this GetOperationRequest to JSON.
                 * @function toJSON
                 * @memberof google.longrunning.GetOperationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GetOperationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return GetOperationRequest;
            })();
    
            longrunning.ListOperationsRequest = (function() {
    
                /**
                 * Properties of a ListOperationsRequest.
                 * @memberof google.longrunning
                 * @interface IListOperationsRequest
                 * @property {string|null} [name] ListOperationsRequest name
                 * @property {string|null} [filter] ListOperationsRequest filter
                 * @property {number|null} [pageSize] ListOperationsRequest pageSize
                 * @property {string|null} [pageToken] ListOperationsRequest pageToken
                 */
    
                /**
                 * Constructs a new ListOperationsRequest.
                 * @memberof google.longrunning
                 * @classdesc Represents a ListOperationsRequest.
                 * @implements IListOperationsRequest
                 * @constructor
                 * @param {google.longrunning.IListOperationsRequest=} [properties] Properties to set
                 */
                function ListOperationsRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ListOperationsRequest name.
                 * @member {string} name
                 * @memberof google.longrunning.ListOperationsRequest
                 * @instance
                 */
                ListOperationsRequest.prototype.name = "";
    
                /**
                 * ListOperationsRequest filter.
                 * @member {string} filter
                 * @memberof google.longrunning.ListOperationsRequest
                 * @instance
                 */
                ListOperationsRequest.prototype.filter = "";
    
                /**
                 * ListOperationsRequest pageSize.
                 * @member {number} pageSize
                 * @memberof google.longrunning.ListOperationsRequest
                 * @instance
                 */
                ListOperationsRequest.prototype.pageSize = 0;
    
                /**
                 * ListOperationsRequest pageToken.
                 * @member {string} pageToken
                 * @memberof google.longrunning.ListOperationsRequest
                 * @instance
                 */
                ListOperationsRequest.prototype.pageToken = "";
    
                /**
                 * Creates a new ListOperationsRequest instance using the specified properties.
                 * @function create
                 * @memberof google.longrunning.ListOperationsRequest
                 * @static
                 * @param {google.longrunning.IListOperationsRequest=} [properties] Properties to set
                 * @returns {google.longrunning.ListOperationsRequest} ListOperationsRequest instance
                 */
                ListOperationsRequest.create = function create(properties) {
                    return new ListOperationsRequest(properties);
                };
    
                /**
                 * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
                 * @function encode
                 * @memberof google.longrunning.ListOperationsRequest
                 * @static
                 * @param {google.longrunning.IListOperationsRequest} message ListOperationsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListOperationsRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.filter != null && message.hasOwnProperty("filter"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.filter);
                    if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
                    if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.pageToken);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
                    return writer;
                };
    
                /**
                 * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.longrunning.ListOperationsRequest
                 * @static
                 * @param {google.longrunning.IListOperationsRequest} message ListOperationsRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListOperationsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ListOperationsRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.longrunning.ListOperationsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.longrunning.ListOperationsRequest} ListOperationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListOperationsRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.longrunning.ListOperationsRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 4:
                            message.name = reader.string();
                            break;
                        case 1:
                            message.filter = reader.string();
                            break;
                        case 2:
                            message.pageSize = reader.int32();
                            break;
                        case 3:
                            message.pageToken = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.longrunning.ListOperationsRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.longrunning.ListOperationsRequest} ListOperationsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListOperationsRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ListOperationsRequest message.
                 * @function verify
                 * @memberof google.longrunning.ListOperationsRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListOperationsRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.filter != null && message.hasOwnProperty("filter"))
                        if (!$util.isString(message.filter))
                            return "filter: string expected";
                    if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                        if (!$util.isInteger(message.pageSize))
                            return "pageSize: integer expected";
                    if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                        if (!$util.isString(message.pageToken))
                            return "pageToken: string expected";
                    return null;
                };
    
                /**
                 * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.longrunning.ListOperationsRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.longrunning.ListOperationsRequest} ListOperationsRequest
                 */
                ListOperationsRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.longrunning.ListOperationsRequest)
                        return object;
                    var message = new $root.google.longrunning.ListOperationsRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.filter != null)
                        message.filter = String(object.filter);
                    if (object.pageSize != null)
                        message.pageSize = object.pageSize | 0;
                    if (object.pageToken != null)
                        message.pageToken = String(object.pageToken);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.longrunning.ListOperationsRequest
                 * @static
                 * @param {google.longrunning.ListOperationsRequest} message ListOperationsRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListOperationsRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.filter = "";
                        object.pageSize = 0;
                        object.pageToken = "";
                        object.name = "";
                    }
                    if (message.filter != null && message.hasOwnProperty("filter"))
                        object.filter = message.filter;
                    if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                        object.pageSize = message.pageSize;
                    if (message.pageToken != null && message.hasOwnProperty("pageToken"))
                        object.pageToken = message.pageToken;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };
    
                /**
                 * Converts this ListOperationsRequest to JSON.
                 * @function toJSON
                 * @memberof google.longrunning.ListOperationsRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListOperationsRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ListOperationsRequest;
            })();
    
            longrunning.ListOperationsResponse = (function() {
    
                /**
                 * Properties of a ListOperationsResponse.
                 * @memberof google.longrunning
                 * @interface IListOperationsResponse
                 * @property {Array.<google.longrunning.IOperation>|null} [operations] ListOperationsResponse operations
                 * @property {string|null} [nextPageToken] ListOperationsResponse nextPageToken
                 */
    
                /**
                 * Constructs a new ListOperationsResponse.
                 * @memberof google.longrunning
                 * @classdesc Represents a ListOperationsResponse.
                 * @implements IListOperationsResponse
                 * @constructor
                 * @param {google.longrunning.IListOperationsResponse=} [properties] Properties to set
                 */
                function ListOperationsResponse(properties) {
                    this.operations = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ListOperationsResponse operations.
                 * @member {Array.<google.longrunning.IOperation>} operations
                 * @memberof google.longrunning.ListOperationsResponse
                 * @instance
                 */
                ListOperationsResponse.prototype.operations = $util.emptyArray;
    
                /**
                 * ListOperationsResponse nextPageToken.
                 * @member {string} nextPageToken
                 * @memberof google.longrunning.ListOperationsResponse
                 * @instance
                 */
                ListOperationsResponse.prototype.nextPageToken = "";
    
                /**
                 * Creates a new ListOperationsResponse instance using the specified properties.
                 * @function create
                 * @memberof google.longrunning.ListOperationsResponse
                 * @static
                 * @param {google.longrunning.IListOperationsResponse=} [properties] Properties to set
                 * @returns {google.longrunning.ListOperationsResponse} ListOperationsResponse instance
                 */
                ListOperationsResponse.create = function create(properties) {
                    return new ListOperationsResponse(properties);
                };
    
                /**
                 * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
                 * @function encode
                 * @memberof google.longrunning.ListOperationsResponse
                 * @static
                 * @param {google.longrunning.IListOperationsResponse} message ListOperationsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListOperationsResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.operations != null && message.operations.length)
                        for (var i = 0; i < message.operations.length; ++i)
                            $root.google.longrunning.Operation.encode(message.operations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.nextPageToken);
                    return writer;
                };
    
                /**
                 * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.longrunning.ListOperationsResponse
                 * @static
                 * @param {google.longrunning.IListOperationsResponse} message ListOperationsResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ListOperationsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ListOperationsResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.longrunning.ListOperationsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.longrunning.ListOperationsResponse} ListOperationsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListOperationsResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.longrunning.ListOperationsResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.operations && message.operations.length))
                                message.operations = [];
                            message.operations.push($root.google.longrunning.Operation.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.nextPageToken = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.longrunning.ListOperationsResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.longrunning.ListOperationsResponse} ListOperationsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ListOperationsResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ListOperationsResponse message.
                 * @function verify
                 * @memberof google.longrunning.ListOperationsResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ListOperationsResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.operations != null && message.hasOwnProperty("operations")) {
                        if (!Array.isArray(message.operations))
                            return "operations: array expected";
                        for (var i = 0; i < message.operations.length; ++i) {
                            var error = $root.google.longrunning.Operation.verify(message.operations[i]);
                            if (error)
                                return "operations." + error;
                        }
                    }
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        if (!$util.isString(message.nextPageToken))
                            return "nextPageToken: string expected";
                    return null;
                };
    
                /**
                 * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.longrunning.ListOperationsResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.longrunning.ListOperationsResponse} ListOperationsResponse
                 */
                ListOperationsResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.longrunning.ListOperationsResponse)
                        return object;
                    var message = new $root.google.longrunning.ListOperationsResponse();
                    if (object.operations) {
                        if (!Array.isArray(object.operations))
                            throw TypeError(".google.longrunning.ListOperationsResponse.operations: array expected");
                        message.operations = [];
                        for (var i = 0; i < object.operations.length; ++i) {
                            if (typeof object.operations[i] !== "object")
                                throw TypeError(".google.longrunning.ListOperationsResponse.operations: object expected");
                            message.operations[i] = $root.google.longrunning.Operation.fromObject(object.operations[i]);
                        }
                    }
                    if (object.nextPageToken != null)
                        message.nextPageToken = String(object.nextPageToken);
                    return message;
                };
    
                /**
                 * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.longrunning.ListOperationsResponse
                 * @static
                 * @param {google.longrunning.ListOperationsResponse} message ListOperationsResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ListOperationsResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.operations = [];
                    if (options.defaults)
                        object.nextPageToken = "";
                    if (message.operations && message.operations.length) {
                        object.operations = [];
                        for (var j = 0; j < message.operations.length; ++j)
                            object.operations[j] = $root.google.longrunning.Operation.toObject(message.operations[j], options);
                    }
                    if (message.nextPageToken != null && message.hasOwnProperty("nextPageToken"))
                        object.nextPageToken = message.nextPageToken;
                    return object;
                };
    
                /**
                 * Converts this ListOperationsResponse to JSON.
                 * @function toJSON
                 * @memberof google.longrunning.ListOperationsResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ListOperationsResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ListOperationsResponse;
            })();
    
            longrunning.CancelOperationRequest = (function() {
    
                /**
                 * Properties of a CancelOperationRequest.
                 * @memberof google.longrunning
                 * @interface ICancelOperationRequest
                 * @property {string|null} [name] CancelOperationRequest name
                 */
    
                /**
                 * Constructs a new CancelOperationRequest.
                 * @memberof google.longrunning
                 * @classdesc Represents a CancelOperationRequest.
                 * @implements ICancelOperationRequest
                 * @constructor
                 * @param {google.longrunning.ICancelOperationRequest=} [properties] Properties to set
                 */
                function CancelOperationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CancelOperationRequest name.
                 * @member {string} name
                 * @memberof google.longrunning.CancelOperationRequest
                 * @instance
                 */
                CancelOperationRequest.prototype.name = "";
    
                /**
                 * Creates a new CancelOperationRequest instance using the specified properties.
                 * @function create
                 * @memberof google.longrunning.CancelOperationRequest
                 * @static
                 * @param {google.longrunning.ICancelOperationRequest=} [properties] Properties to set
                 * @returns {google.longrunning.CancelOperationRequest} CancelOperationRequest instance
                 */
                CancelOperationRequest.create = function create(properties) {
                    return new CancelOperationRequest(properties);
                };
    
                /**
                 * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof google.longrunning.CancelOperationRequest
                 * @static
                 * @param {google.longrunning.ICancelOperationRequest} message CancelOperationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelOperationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };
    
                /**
                 * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.longrunning.CancelOperationRequest
                 * @static
                 * @param {google.longrunning.ICancelOperationRequest} message CancelOperationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CancelOperationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CancelOperationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.longrunning.CancelOperationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.longrunning.CancelOperationRequest} CancelOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelOperationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.longrunning.CancelOperationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.longrunning.CancelOperationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.longrunning.CancelOperationRequest} CancelOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CancelOperationRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CancelOperationRequest message.
                 * @function verify
                 * @memberof google.longrunning.CancelOperationRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CancelOperationRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };
    
                /**
                 * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.longrunning.CancelOperationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.longrunning.CancelOperationRequest} CancelOperationRequest
                 */
                CancelOperationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.longrunning.CancelOperationRequest)
                        return object;
                    var message = new $root.google.longrunning.CancelOperationRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.longrunning.CancelOperationRequest
                 * @static
                 * @param {google.longrunning.CancelOperationRequest} message CancelOperationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CancelOperationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };
    
                /**
                 * Converts this CancelOperationRequest to JSON.
                 * @function toJSON
                 * @memberof google.longrunning.CancelOperationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CancelOperationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return CancelOperationRequest;
            })();
    
            longrunning.DeleteOperationRequest = (function() {
    
                /**
                 * Properties of a DeleteOperationRequest.
                 * @memberof google.longrunning
                 * @interface IDeleteOperationRequest
                 * @property {string|null} [name] DeleteOperationRequest name
                 */
    
                /**
                 * Constructs a new DeleteOperationRequest.
                 * @memberof google.longrunning
                 * @classdesc Represents a DeleteOperationRequest.
                 * @implements IDeleteOperationRequest
                 * @constructor
                 * @param {google.longrunning.IDeleteOperationRequest=} [properties] Properties to set
                 */
                function DeleteOperationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DeleteOperationRequest name.
                 * @member {string} name
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @instance
                 */
                DeleteOperationRequest.prototype.name = "";
    
                /**
                 * Creates a new DeleteOperationRequest instance using the specified properties.
                 * @function create
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @static
                 * @param {google.longrunning.IDeleteOperationRequest=} [properties] Properties to set
                 * @returns {google.longrunning.DeleteOperationRequest} DeleteOperationRequest instance
                 */
                DeleteOperationRequest.create = function create(properties) {
                    return new DeleteOperationRequest(properties);
                };
    
                /**
                 * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @static
                 * @param {google.longrunning.IDeleteOperationRequest} message DeleteOperationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteOperationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    return writer;
                };
    
                /**
                 * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @static
                 * @param {google.longrunning.IDeleteOperationRequest} message DeleteOperationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeleteOperationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DeleteOperationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.longrunning.DeleteOperationRequest} DeleteOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteOperationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.longrunning.DeleteOperationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.longrunning.DeleteOperationRequest} DeleteOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeleteOperationRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DeleteOperationRequest message.
                 * @function verify
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeleteOperationRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };
    
                /**
                 * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.longrunning.DeleteOperationRequest} DeleteOperationRequest
                 */
                DeleteOperationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.longrunning.DeleteOperationRequest)
                        return object;
                    var message = new $root.google.longrunning.DeleteOperationRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };
    
                /**
                 * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @static
                 * @param {google.longrunning.DeleteOperationRequest} message DeleteOperationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeleteOperationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.name = "";
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };
    
                /**
                 * Converts this DeleteOperationRequest to JSON.
                 * @function toJSON
                 * @memberof google.longrunning.DeleteOperationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeleteOperationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return DeleteOperationRequest;
            })();
    
            longrunning.WaitOperationRequest = (function() {
    
                /**
                 * Properties of a WaitOperationRequest.
                 * @memberof google.longrunning
                 * @interface IWaitOperationRequest
                 * @property {string|null} [name] WaitOperationRequest name
                 * @property {google.protobuf.IDuration|null} [timeout] WaitOperationRequest timeout
                 */
    
                /**
                 * Constructs a new WaitOperationRequest.
                 * @memberof google.longrunning
                 * @classdesc Represents a WaitOperationRequest.
                 * @implements IWaitOperationRequest
                 * @constructor
                 * @param {google.longrunning.IWaitOperationRequest=} [properties] Properties to set
                 */
                function WaitOperationRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * WaitOperationRequest name.
                 * @member {string} name
                 * @memberof google.longrunning.WaitOperationRequest
                 * @instance
                 */
                WaitOperationRequest.prototype.name = "";
    
                /**
                 * WaitOperationRequest timeout.
                 * @member {google.protobuf.IDuration|null|undefined} timeout
                 * @memberof google.longrunning.WaitOperationRequest
                 * @instance
                 */
                WaitOperationRequest.prototype.timeout = null;
    
                /**
                 * Creates a new WaitOperationRequest instance using the specified properties.
                 * @function create
                 * @memberof google.longrunning.WaitOperationRequest
                 * @static
                 * @param {google.longrunning.IWaitOperationRequest=} [properties] Properties to set
                 * @returns {google.longrunning.WaitOperationRequest} WaitOperationRequest instance
                 */
                WaitOperationRequest.create = function create(properties) {
                    return new WaitOperationRequest(properties);
                };
    
                /**
                 * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof google.longrunning.WaitOperationRequest
                 * @static
                 * @param {google.longrunning.IWaitOperationRequest} message WaitOperationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WaitOperationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.timeout != null && message.hasOwnProperty("timeout"))
                        $root.google.protobuf.Duration.encode(message.timeout, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.longrunning.WaitOperationRequest
                 * @static
                 * @param {google.longrunning.IWaitOperationRequest} message WaitOperationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WaitOperationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a WaitOperationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.longrunning.WaitOperationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.longrunning.WaitOperationRequest} WaitOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WaitOperationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.longrunning.WaitOperationRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.timeout = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.longrunning.WaitOperationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.longrunning.WaitOperationRequest} WaitOperationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WaitOperationRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a WaitOperationRequest message.
                 * @function verify
                 * @memberof google.longrunning.WaitOperationRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WaitOperationRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.timeout != null && message.hasOwnProperty("timeout")) {
                        var error = $root.google.protobuf.Duration.verify(message.timeout);
                        if (error)
                            return "timeout." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.longrunning.WaitOperationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.longrunning.WaitOperationRequest} WaitOperationRequest
                 */
                WaitOperationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.longrunning.WaitOperationRequest)
                        return object;
                    var message = new $root.google.longrunning.WaitOperationRequest();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.timeout != null) {
                        if (typeof object.timeout !== "object")
                            throw TypeError(".google.longrunning.WaitOperationRequest.timeout: object expected");
                        message.timeout = $root.google.protobuf.Duration.fromObject(object.timeout);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.longrunning.WaitOperationRequest
                 * @static
                 * @param {google.longrunning.WaitOperationRequest} message WaitOperationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WaitOperationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.timeout = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.timeout != null && message.hasOwnProperty("timeout"))
                        object.timeout = $root.google.protobuf.Duration.toObject(message.timeout, options);
                    return object;
                };
    
                /**
                 * Converts this WaitOperationRequest to JSON.
                 * @function toJSON
                 * @memberof google.longrunning.WaitOperationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WaitOperationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return WaitOperationRequest;
            })();
    
            longrunning.OperationInfo = (function() {
    
                /**
                 * Properties of an OperationInfo.
                 * @memberof google.longrunning
                 * @interface IOperationInfo
                 * @property {string|null} [responseType] OperationInfo responseType
                 * @property {string|null} [metadataType] OperationInfo metadataType
                 */
    
                /**
                 * Constructs a new OperationInfo.
                 * @memberof google.longrunning
                 * @classdesc Represents an OperationInfo.
                 * @implements IOperationInfo
                 * @constructor
                 * @param {google.longrunning.IOperationInfo=} [properties] Properties to set
                 */
                function OperationInfo(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OperationInfo responseType.
                 * @member {string} responseType
                 * @memberof google.longrunning.OperationInfo
                 * @instance
                 */
                OperationInfo.prototype.responseType = "";
    
                /**
                 * OperationInfo metadataType.
                 * @member {string} metadataType
                 * @memberof google.longrunning.OperationInfo
                 * @instance
                 */
                OperationInfo.prototype.metadataType = "";
    
                /**
                 * Creates a new OperationInfo instance using the specified properties.
                 * @function create
                 * @memberof google.longrunning.OperationInfo
                 * @static
                 * @param {google.longrunning.IOperationInfo=} [properties] Properties to set
                 * @returns {google.longrunning.OperationInfo} OperationInfo instance
                 */
                OperationInfo.create = function create(properties) {
                    return new OperationInfo(properties);
                };
    
                /**
                 * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.longrunning.OperationInfo
                 * @static
                 * @param {google.longrunning.IOperationInfo} message OperationInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OperationInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.responseType != null && message.hasOwnProperty("responseType"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.responseType);
                    if (message.metadataType != null && message.hasOwnProperty("metadataType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.metadataType);
                    return writer;
                };
    
                /**
                 * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.longrunning.OperationInfo
                 * @static
                 * @param {google.longrunning.IOperationInfo} message OperationInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OperationInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OperationInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.longrunning.OperationInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.longrunning.OperationInfo} OperationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OperationInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.longrunning.OperationInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.responseType = reader.string();
                            break;
                        case 2:
                            message.metadataType = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.longrunning.OperationInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.longrunning.OperationInfo} OperationInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OperationInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OperationInfo message.
                 * @function verify
                 * @memberof google.longrunning.OperationInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OperationInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.responseType != null && message.hasOwnProperty("responseType"))
                        if (!$util.isString(message.responseType))
                            return "responseType: string expected";
                    if (message.metadataType != null && message.hasOwnProperty("metadataType"))
                        if (!$util.isString(message.metadataType))
                            return "metadataType: string expected";
                    return null;
                };
    
                /**
                 * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.longrunning.OperationInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.longrunning.OperationInfo} OperationInfo
                 */
                OperationInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.longrunning.OperationInfo)
                        return object;
                    var message = new $root.google.longrunning.OperationInfo();
                    if (object.responseType != null)
                        message.responseType = String(object.responseType);
                    if (object.metadataType != null)
                        message.metadataType = String(object.metadataType);
                    return message;
                };
    
                /**
                 * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.longrunning.OperationInfo
                 * @static
                 * @param {google.longrunning.OperationInfo} message OperationInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OperationInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.responseType = "";
                        object.metadataType = "";
                    }
                    if (message.responseType != null && message.hasOwnProperty("responseType"))
                        object.responseType = message.responseType;
                    if (message.metadataType != null && message.hasOwnProperty("metadataType"))
                        object.metadataType = message.metadataType;
                    return object;
                };
    
                /**
                 * Converts this OperationInfo to JSON.
                 * @function toJSON
                 * @memberof google.longrunning.OperationInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OperationInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OperationInfo;
            })();
    
            return longrunning;
        })();
    
        google.rpc = (function() {
    
            /**
             * Namespace rpc.
             * @memberof google
             * @namespace
             */
            var rpc = {};
    
            rpc.Status = (function() {
    
                /**
                 * Properties of a Status.
                 * @memberof google.rpc
                 * @interface IStatus
                 * @property {number|null} [code] Status code
                 * @property {string|null} [message] Status message
                 * @property {Array.<google.protobuf.IAny>|null} [details] Status details
                 */
    
                /**
                 * Constructs a new Status.
                 * @memberof google.rpc
                 * @classdesc Represents a Status.
                 * @implements IStatus
                 * @constructor
                 * @param {google.rpc.IStatus=} [properties] Properties to set
                 */
                function Status(properties) {
                    this.details = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Status code.
                 * @member {number} code
                 * @memberof google.rpc.Status
                 * @instance
                 */
                Status.prototype.code = 0;
    
                /**
                 * Status message.
                 * @member {string} message
                 * @memberof google.rpc.Status
                 * @instance
                 */
                Status.prototype.message = "";
    
                /**
                 * Status details.
                 * @member {Array.<google.protobuf.IAny>} details
                 * @memberof google.rpc.Status
                 * @instance
                 */
                Status.prototype.details = $util.emptyArray;
    
                /**
                 * Creates a new Status instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.Status
                 * @static
                 * @param {google.rpc.IStatus=} [properties] Properties to set
                 * @returns {google.rpc.Status} Status instance
                 */
                Status.create = function create(properties) {
                    return new Status(properties);
                };
    
                /**
                 * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.Status
                 * @static
                 * @param {google.rpc.IStatus} message Status message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Status.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.code != null && message.hasOwnProperty("code"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                    if (message.message != null && message.hasOwnProperty("message"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                    if (message.details != null && message.details.length)
                        for (var i = 0; i < message.details.length; ++i)
                            $root.google.protobuf.Any.encode(message.details[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.Status
                 * @static
                 * @param {google.rpc.IStatus} message Status message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Status.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Status message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.Status
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.Status} Status
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Status.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Status();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.code = reader.int32();
                            break;
                        case 2:
                            message.message = reader.string();
                            break;
                        case 3:
                            if (!(message.details && message.details.length))
                                message.details = [];
                            message.details.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Status message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.Status
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.Status} Status
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Status.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Status message.
                 * @function verify
                 * @memberof google.rpc.Status
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Status.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.code != null && message.hasOwnProperty("code"))
                        if (!$util.isInteger(message.code))
                            return "code: integer expected";
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    if (message.details != null && message.hasOwnProperty("details")) {
                        if (!Array.isArray(message.details))
                            return "details: array expected";
                        for (var i = 0; i < message.details.length; ++i) {
                            var error = $root.google.protobuf.Any.verify(message.details[i]);
                            if (error)
                                return "details." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Status message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.Status
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.Status} Status
                 */
                Status.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.Status)
                        return object;
                    var message = new $root.google.rpc.Status();
                    if (object.code != null)
                        message.code = object.code | 0;
                    if (object.message != null)
                        message.message = String(object.message);
                    if (object.details) {
                        if (!Array.isArray(object.details))
                            throw TypeError(".google.rpc.Status.details: array expected");
                        message.details = [];
                        for (var i = 0; i < object.details.length; ++i) {
                            if (typeof object.details[i] !== "object")
                                throw TypeError(".google.rpc.Status.details: object expected");
                            message.details[i] = $root.google.protobuf.Any.fromObject(object.details[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Status message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.Status
                 * @static
                 * @param {google.rpc.Status} message Status
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Status.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.details = [];
                    if (options.defaults) {
                        object.code = 0;
                        object.message = "";
                    }
                    if (message.code != null && message.hasOwnProperty("code"))
                        object.code = message.code;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    if (message.details && message.details.length) {
                        object.details = [];
                        for (var j = 0; j < message.details.length; ++j)
                            object.details[j] = $root.google.protobuf.Any.toObject(message.details[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this Status to JSON.
                 * @function toJSON
                 * @memberof google.rpc.Status
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Status.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Status;
            })();
    
            return rpc;
        })();
    
        return google;
    })();

    return $root;
});
