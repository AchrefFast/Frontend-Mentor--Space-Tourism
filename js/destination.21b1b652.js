parcelRequire = function (e, r, t, n) { var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require; function f(t, n) { if (!r[t]) { if (!e[t]) { var i = "function" == typeof parcelRequire && parcelRequire; if (!n && i) return i(t, !0); if (o) return o(t, !0); if (u && "string" == typeof t) return u(t); var c = new Error("Cannot find module '" + t + "'"); throw c.code = "MODULE_NOT_FOUND", c } p.resolve = function (r) { return e[t][1][r] || r }, p.cache = {}; var l = r[t] = new f.Module(t); e[t][0].call(l.exports, p, l, l.exports, this) } return r[t].exports; function p(e) { return f(p.resolve(e)) } } f.isParcelRequire = !0, f.Module = function (e) { this.id = e, this.bundle = f, this.exports = {} }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) { e[r] = [function (e, r) { r.exports = t }, {}] }; for (var c = 0; c < t.length; c++)try { f(t[c]) } catch (e) { i || (i = e) } if (t.length) { var l = f(t[t.length - 1]); "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () { return l }) : n && (this[n] = l) } if (parcelRequire = f, i) throw i; return f }({
    "JAaF": [function (require, module, exports) {
        module.exports = { destinations: [{ name: "Moon", images: { png: "image-moon", webp: "image-moon" }, description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", distance: "384,400 km", travel: "3 days" }, { name: "Mars", images: { png: "image-mars", webp: "image-mars" }, description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!", distance: "225 mil. km", travel: "9 months" }, { name: "Europa", images: { png: "image-europa", webp: "image-europa" }, description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", distance: "628 mil. km", travel: "3 years" }, { name: "Titan", images: { png: "image-titan", webp: "image-titan" }, description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", distance: "1.6 bil. km", travel: "7 years" }], crew: [{ name: "Douglas Hurley", images: { png: "image-douglas-hurley", webp: "image-douglas-hurley" }, role: "Commander", bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2." }, { name: "Mark Shuttleworth", images: { png: "image-mark-shuttleworth", webp: "image-mark-shuttleworth" }, role: "Mission Specialist", bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist." }, { name: "Victor Glover", images: { png: "image-victor-glover", webp: "image-victor-glover" }, role: "Pilot", bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer." }, { name: "Anousheh Ansari", images: { png: "image-anousheh-ansari", webp: "image-anousheh-ansari" }, role: "Flight Engineer", bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space." }], technology: [{ name: "Launch vehicle", images: { portrait: "image-launch-vehicle-portrait", landscape: "image-launch-vehicle-landscape" }, description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!" }, { name: "Spaceport", images: { portrait: "image-spaceport-portrait", landscape: "image-spaceport-landscape" }, description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch." }, { name: "Space capsule", images: { portrait: "image-space-capsule-portrait", landscape: "image-space-capsule-landscape" }, description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained." }] };
    }, {}], "QRJ7": [function (require, module, exports) {
        module.exports = "./images/image-mars.b3a884f2.png";
    }, {}], "wmKK": [function (require, module, exports) {
        module.exports = "./images/image-moon.b20b8139.png";
    }, {}], "M8cb": [function (require, module, exports) {
        module.exports = "./images/image-titan.376e85ab.png";
    }, {}], "FMbk": [function (require, module, exports) {
        module.exports = "./images/image-europa.817e5230.png";
    }, {}], "XdBi": [function (require, module, exports) {
        module.exports = { "image-mars": require("./image-mars.png"), "image-moon": require("./image-moon.png"), "image-titan": require("./image-titan.png"), "image-europa": require("./image-europa.png") };
    }, { "./image-mars.png": "QRJ7", "./image-moon.png": "wmKK", "./image-titan.png": "M8cb", "./image-europa.png": "FMbk" }], "MLG2": [function (require, module, exports) {
        module.exports = "./images/image-europa.1cb49388.webp";
    }, {}], "pS0W": [function (require, module, exports) {
        module.exports = "./images/image-mars.379c2476.webp";
    }, {}], "MoAA": [function (require, module, exports) {
        module.exports = "./images/image-moon.ea07c192.webp";
    }, {}], "Smxh": [function (require, module, exports) {
        module.exports = "./images/image-titan.162dda5d.webp";
    }, {}], "NjTE": [function (require, module, exports) {
        module.exports = { "image-europa": require("./image-europa.webp"), "image-mars": require("./image-mars.webp"), "image-moon": require("./image-moon.webp"), "image-titan": require("./image-titan.webp") };
    }, { "./image-europa.webp": "MLG2", "./image-mars.webp": "pS0W", "./image-moon.webp": "MoAA", "./image-titan.webp": "Smxh" }], "u3iE": [function (require, module, exports) {
        "use strict"; var t = i(require("./data.json")), e = i(require("../images/destination/*.png")), n = i(require("../images/destination/*.webp")); function i(t) { return t && t.__esModule ? t : { default: t } } function a() { var i = document.querySelectorAll(".destination__link"), a = document.getElementById("title"), s = document.getElementById("description"), o = document.getElementById("distance"), d = document.getElementById("travel"), r = document.getElementById("destination__image"), c = document.querySelector(".destination__image"), u = "moon", l = t.default, m = { moon: 0, mars: 1, europa: 2, titan: 3 }; function g(t) { i.forEach(function (t) { t.classList.remove("active") }), t.target.parentElement.classList.add("active"), u = t.target.textContent; var g = l.destinations[m[u]]; a.textContent = g.name, s.textContent = g.description, o.textContent = g.distance, d.textContent = g.travel, c.setAttribute("id", "fade-in"), s.setAttribute("class", "scale"), a.classList.add("zoomIn"), setTimeout(function () { c.setAttribute("id", ""), s.setAttribute("class", ""), a.classList.remove("zoomIn") }, 700), function (t, i, a, s) { s.children[0].srcset = n.default[i], s.children[1].srcset = e.default[a], s.children[2].src = t + a }("./images", g.images.webp, g.images.png, r) } i.forEach(function (t) { t.addEventListener("click", g) }) } window.addEventListener("DOMContentLoaded", a);
    }, { "./data.json": "JAaF", "../images/destination/*.png": "XdBi", "../images/destination/*.webp": "NjTE" }]
}, {}, ["u3iE"], null)
//# sourceMappingURL=/js/destination.21b1b652.js.map