enum Membership {
    Simple,
    Standart,
    Premium
}
const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership);        //вернет 1
console.log(membershipReverse); //вернет Premium

enum SocialMedia {
    VK = 'VK',
    OK = 'OK',
    INSTAGRAMM = 'INSTAGRAMM'
}

const socialOK = SocialMedia.OK;
console.log(socialOK);           //вернет ОК