// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const assert = require('assert');

const documentaiModule = require('../src');

const FAKE_STATUS_CODE = 1;
const error = new Error();
error.code = FAKE_STATUS_CODE;

describe('DocumentUnderstandingServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      documentaiModule.v1beta1.DocumentUnderstandingServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      documentaiModule.v1beta1.DocumentUnderstandingServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      documentaiModule.v1beta1.DocumentUnderstandingServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no options', () => {
    const client = new documentaiModule.v1beta1.DocumentUnderstandingServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new documentaiModule.v1beta1.DocumentUnderstandingServiceClient(
      {fallback: true}
    );
    assert(client);
  });

  describe('batchProcessDocuments', function() {
    it('invokes batchProcessDocuments without error', done => {
      const client = new documentaiModule.v1beta1.DocumentUnderstandingServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const requests = [];
      const request = {
        requests: requests,
      };

      // Mock response
      const expectedResponse = {};

      // Mock Grpc layer
      client._innerApiCalls.batchProcessDocuments = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );

      client
        .batchProcessDocuments(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(responses => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it('invokes batchProcessDocuments with error', done => {
      const client = new documentaiModule.v1beta1.DocumentUnderstandingServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );

      // Mock request
      const requests = [];
      const request = {
        requests: requests,
      };

      // Mock Grpc layer
      client._innerApiCalls.batchProcessDocuments = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );

      client
        .batchProcessDocuments(request)
        .then(responses => {
          const operation = responses[0];
          return operation.promise();
        })
        .then(() => {
          assert.fail();
        })
        .catch(err => {
          assert(err instanceof Error);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });

    it('has longrunning decoder functions', () => {
      const client = new documentaiModule.v1beta1.DocumentUnderstandingServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      assert(
        client._descriptors.longrunning.batchProcessDocuments
          .responseDecoder instanceof Function
      );
      assert(
        client._descriptors.longrunning.batchProcessDocuments
          .metadataDecoder instanceof Function
      );
    });
  });
});

function mockSimpleGrpcMethod(expectedRequest, response, error) {
  return function(actualRequest, options, callback) {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}

function mockLongRunningGrpcMethod(expectedRequest, response, error) {
  return request => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise: function() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
