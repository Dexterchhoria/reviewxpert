this._s=this._s||{};(function(_){var window=this;
try{
var xnf=function(a){this.ka=0;this.oa=_.sh(a)};xnf.prototype.read=function(a){if(this.isAvailable(a)){for(var b=0,c=0;c<a;++c){var d=1&this.oa[this.ka>>3]>>(this.ka&7);this.ka++;b|=d<<c}return b}return 0};var ynf=function(a,b){if(a.isAvailable(b)){var c=0;if(32<b){var d=a.read(32);c=a.read(b-32)}else d=a.read(b);return new _.qF(d,c)}return null};xnf.prototype.isAvailable=function(a){return 0<=a&&a<=this.available()};xnf.prototype.available=function(){return 8*this.oa.length-this.ka};var znf=function(a){this.wa=a;this.oa=[];this.ka=0};znf.prototype.encode=function(){return _.Va(this.oa,4)};znf.prototype.write=function(a,b){if(this.isAvailable(b))for(var c=0;c<b;++c)this.oa[this.ka>>3]|=(a&1)<<(this.ka&7),this.ka++,a>>=1};var Anf=function(a,b,c){a.isAvailable(c)&&(32<c?(a.write(b.kR(),32),a.write(b.pM(),c-32)):a.write(b.IAa(),c))};znf.prototype.isAvailable=function(a){return 0<=a&&a<=this.available()};znf.prototype.available=function(){return this.wa-this.ka};var Bnf=function(){this.ka=[];this.version=0;this.oa=_.$Ud},Cnf=function(a){this.ka=a;this.timestamp=null};var Dnf=function(){this.data=new Bnf};_.l=Dnf.prototype;_.l.decode=function(a){var b=new xnf(a),c=b.read(4);this.data.version=c;this.data.oa=ynf(b,64);c=b.read(2===c?5:8);for(var d=null,e=0;e<c;++e){var f=new Cnf(ynf(b,64));this.data.ka.push(f);var g=0===e?42:30;b.isAvailable(g)&&(g=ynf(b,g),0===e?(d=g,f.timestamp=g):f.timestamp=_.VUd(d,g))}if(0!==b.available()&&0!==b.read(b.available()))throw Error("uj`"+a);};
_.l.encode=function(){var a=76,b=this.data.ka.length;0<b&&(a+=94*b+12);a=new znf(a);a.write(this.getVersion(),4);Anf(a,this.data.oa,64);a.write(b,8);b=this.data.ka;b.sort(function(f,g){return g.timestamp.compare(f.timestamp)});for(var c,d=0;d<b.length;++d)if(Anf(a,b[d].ka,64),0===d)c=b[d].timestamp,Anf(a,c,42);else{var e=_.VUd(c,b[d].timestamp);Anf(a,e,30)}return a.encode()};
_.l.merge=function(a){if(a instanceof Dnf&&a.data.oa.equals(this.data.oa))for(var b=0;b<a.data.ka.length;++b){var c=a.data.ka[b];if(c)a:{for(var d=0;d<this.data.ka.length;++d){var e=this.data.ka[d];if(e.ka.equals(c.ka)){0>e.timestamp.compare(c.timestamp)&&(e.timestamp=c.timestamp);break a}}this.data.ka.push(c)}}};_.l.getVersion=function(){return 3};_.l.getData=function(){return this.data};_.Enf=function(){this.cookie=null};_.Enf.prototype.encode=function(){return this.cookie.encode()};_.Enf.prototype.merge=function(a){this.cookie.merge(a.cookie)};_.Enf.prototype.decode=function(a){switch((new xnf(a)).read(4)){case 2:case 3:this.cookie=new Dnf}this.cookie.decode(a)};
}catch(e){_._DumpException(e)}
try{
_.PSf=function(a){var b=a,c=_.zd.get("DV");if(c&&c!==a){b=new _.Enf;b.decode(c);var d=new _.Enf;d.decode(a);b.merge(d);b=b.encode()}b!==c&&_.zd.set("DV",b,{kga:600})};
}catch(e){_._DumpException(e)}
try{
_.SBj=_.z("ZQOCxe",[]);
}catch(e){_._DumpException(e)}
try{
_.x("ZQOCxe");
var dXt=function(a){_.D.call(this,a.Ka);(a=_.ym(this.getData("dvCookie")))&&_.PSf(a)};_.E(dXt,_.D);dXt.Ga=function(){return{}};_.sr(_.SBj,dXt);
_.y();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
