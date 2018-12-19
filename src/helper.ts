import { Database } from "./database";
import { Profile } from "./profile";

export function search(id: string) {

    return new Promise<boolean | Profile>((resolve) => {
        let profile: Profile;

        const db = new Database();
        db.find(id).then((val) => {
            if (typeof val === "object") {
                profile = val[0];
                resolve(profile);
            } else {
                resolve(false);
            }
        }).catch((err) => {
            console.log("testing234234");
            console.log(err);
        });
    });
}
