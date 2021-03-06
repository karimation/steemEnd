const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;


describe('## GET USER APIs', () => {
    let username = 'borepstein'
    describe('# GET /api/users/getUserProfil', () => {
        it('should get user profile', (done) => {
            request(app)
                .get(`/api/users/getUserPosts/${username}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.length).to.not.equal(0);
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/users/getImgProfil', () => {
        it('should get user image profil', (done) => {
            request(app)
                .get(`/api/users/imgprofile/${username}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.length).to.not.equal(0);
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/users/getFollowCount', () => {
        it('should get user follows count', (done) => {
            request(app)
                .get(`/api/users/getFollowCount/${username}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.length).to.not.equal(0);
                    done();
                })
                .catch(done);
        });
    });
});