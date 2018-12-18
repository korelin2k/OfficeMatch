import { expect } from "chai";
import { Profile } from "../profile";

const profileDetails = {
    firstName: "Chris",
    lastName: "Figgins",
    photo: "https://pbs.twimg.com/profile_images/378800000629955505/cbf2ea1c2066cfcfdac32cee4f0b3c85.jpeg",
    scores: [ 2, 4, 2, 4, 1, 4, 1, 1, 3, 3 ],
};

const testProfile: Profile = new Profile(profileDetails);

describe("Profile Functionality", () => {
    it("Create Profile", () => {
        expect(testProfile.firstName).to.equal(profileDetails.firstName);
        expect(testProfile.lastName).to.equal(profileDetails.lastName);
        expect(testProfile.photo).to.equal(profileDetails.photo);
        expect(testProfile.scores).to.equal(profileDetails.scores);
        expect(testProfile.id).to.be.undefined;
    });

    it("Add Profile to Database", (done) => { 
        testProfile.add().then(value => {
            expect(value).to.be.true;
            expect(testProfile.id).not.empty;
            done();
        });
    });
    
    it("Update Profile in Database", (done) => { 
        testProfile.firstName = "Christopher";

        testProfile.update().then(value => {
            expect(value).to.be.true;
            done();
        });
    });

    it("Match Character", (done) => { 
        testProfile.match().then(value => {
            expect(typeof value).to.equal('object');
            expect(value.firstName).not.empty;
            done();
        });
    });

    it("Remove Profile from Database", (done) => { 
        testProfile.remove().then(value => {
            expect(value).to.be.true;
            done();
        });
    });
});
