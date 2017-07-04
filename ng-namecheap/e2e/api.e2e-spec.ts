import { APIPage } from './pages/api.po';
import { browser } from 'protractor';

describe('ng-namecheap API App', () => {
    let page: APIPage;

    beforeEach(() => {
        page = new APIPage();
    });

    it('should display message saying app works', () => {
        page.api('http://api.sandbox.namecheap.com/xml.response?Command=namecheap.users.create&NewUserPassword=Qwerty123&NewUserName=capybara1&FirstName=cap&LastName=bar&EmailAddress=capybatatest%40gmail.com&AcceptTerms=1&ApiKey=f5c3e9df301b46aa83488f6a85fdb90c&ApiUser=suresh&ClientIP=127.0.0.1').then((xml) => {
            console.log(xml);
        });

        expect(1).toEqual(1);
    });

    /*
    it('test', () => {
        var request = require('request');
        var xmlParser = require('xml2js');

        var options = {
            method: 'GET',
            url: 'http://api.sandbox.namecheap.com/xml.response?Command=namecheap.users.create&NewUserPassword=Qwerty123&NewUserName=capybara1&FirstName=cap&LastName=bar&EmailAddress=capybatatest%40gmail.com&AcceptTerms=1&ApiKey=f5c3e9df301b46aa83488f6a85fdb90c&ApiUser=suresh&ClientIP=127.0.0.1',
            headers: {},
            body: ''
        };

        function callback(error, response, body) {

            if (!error && response.statusCode == 200) {

                xmlParser.parseString(response.body, function (err, res) {
                    console.log('++++++++++++++++Errors from response: ', res['ApiResponse'].Errors[0].Error[0]["_"]);
                });

            } else {
                console.log('++++++++++++++++Response: ', response);
            }
        }

        request(options, callback);
    }); */

    it('test 2', () => {
        let rp = require('request-promise');
        var xmlParser = require('xml2js');

        var result = new Promise<any>((resolve, reject) => {
            rp('http://api.sandbox.namecheap.com/xml.response?Command=namecheap.users.create&NewUserPassword=Qwerty123&NewUserName=capybara1&FirstName=cap&LastName=bar&EmailAddress=capybatatest%40gmail.com&AcceptTerms=1&ApiKey=f5c3e9df301b46aa83488f6a85fdb90c&ApiUser=suresh&ClientIP=127.0.0.1')
                .then((xml) =>  {
                    xmlParser.parseString(xml, function (err, res) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(res);
                        }
                    });
                })
                .catch((error) => {
                    reject(error);
                })
        });

        browser.wait(() => {
            return result.then((data) => {
                console.log(data);
                expect(data['ApiResponse'].Errors[0].Error[0]["_"]).toEqual('User already exists');

                return true;
            });
        });
    });
});
