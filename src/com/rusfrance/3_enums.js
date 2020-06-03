var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipReverse = Membership[2];
console.log(membership); //вернет 1
console.log(membershipReverse); //вернет Premium
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["OK"] = "OK";
    SocialMedia["INSTAGRAMM"] = "INSTAGRAMM";
})(SocialMedia || (SocialMedia = {}));
var socialOK = SocialMedia.OK;
console.log(socialOK); //вернет ОК
