(window.webpackJsonpbmical = window.webpackJsonpbmical || []).push([
  [2],
  [
    function (e, t, n) {
      "use strict";
      e.exports = n(51);
    },
    function (e, t, n) {
      e.exports = n(60)();
    },
    function (e, t, n) {
      var r = n(33),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = r || i || Function("return this")();
      e.exports = a;
    },
    function (e, t) {
      var n = Array.isArray;
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(74),
        i = n(80);
      e.exports = function (e, t) {
        var n = i(e, t);
        return r(n) ? n : void 0;
      };
    },
    function (e, t, n) {
      e.exports = (function (e) {
        "use strict";
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var t = {
          rgb2hsl: n,
          rgb2hsv: i,
          rgb2hwb: a,
          rgb2cmyk: o,
          rgb2keyword: l,
          rgb2xyz: s,
          rgb2lab: u,
          rgb2lch: function (e) {
            return y(u(e));
          },
          hsl2rgb: c,
          hsl2hsv: function (e) {
            var t = e[0],
              n = e[1] / 100,
              r = e[2] / 100;
            return 0 === r
              ? [0, 0, 0]
              : [
                  t,
                  ((2 * (n *= (r *= 2) <= 1 ? r : 2 - r)) / (r + n)) * 100,
                  ((r + n) / 2) * 100,
                ];
          },
          hsl2hwb: function (e) {
            return a(c(e));
          },
          hsl2cmyk: function (e) {
            return o(c(e));
          },
          hsl2keyword: function (e) {
            return l(c(e));
          },
          hsv2rgb: d,
          hsv2hsl: function (e) {
            var t,
              n,
              r = e[0],
              i = e[1] / 100,
              a = e[2] / 100;
            return (
              (t = i * a),
              [
                r,
                100 * (t = (t /= (n = (2 - i) * a) <= 1 ? n : 2 - n) || 0),
                100 * (n /= 2),
              ]
            );
          },
          hsv2hwb: function (e) {
            return a(d(e));
          },
          hsv2cmyk: function (e) {
            return o(d(e));
          },
          hsv2keyword: function (e) {
            return l(d(e));
          },
          hwb2rgb: f,
          hwb2hsl: function (e) {
            return n(f(e));
          },
          hwb2hsv: function (e) {
            return i(f(e));
          },
          hwb2cmyk: function (e) {
            return o(f(e));
          },
          hwb2keyword: function (e) {
            return l(f(e));
          },
          cmyk2rgb: h,
          cmyk2hsl: function (e) {
            return n(h(e));
          },
          cmyk2hsv: function (e) {
            return i(h(e));
          },
          cmyk2hwb: function (e) {
            return a(h(e));
          },
          cmyk2keyword: function (e) {
            return l(h(e));
          },
          keyword2rgb: w,
          keyword2hsl: function (e) {
            return n(w(e));
          },
          keyword2hsv: function (e) {
            return i(w(e));
          },
          keyword2hwb: function (e) {
            return a(w(e));
          },
          keyword2cmyk: function (e) {
            return o(w(e));
          },
          keyword2lab: function (e) {
            return u(w(e));
          },
          keyword2xyz: function (e) {
            return s(w(e));
          },
          xyz2rgb: p,
          xyz2lab: m,
          xyz2lch: function (e) {
            return y(m(e));
          },
          lab2xyz: v,
          lab2rgb: x,
          lab2lch: y,
          lch2lab: _,
          lch2xyz: function (e) {
            return v(_(e));
          },
          lch2rgb: function (e) {
            return x(_(e));
          },
        };
        function n(e) {
          var t,
            n,
            r = e[0] / 255,
            i = e[1] / 255,
            a = e[2] / 255,
            o = Math.min(r, i, a),
            l = Math.max(r, i, a),
            s = l - o;
          return (
            l == o
              ? (t = 0)
              : r == l
              ? (t = (i - a) / s)
              : i == l
              ? (t = 2 + (a - r) / s)
              : a == l && (t = 4 + (r - i) / s),
            (t = Math.min(60 * t, 360)) < 0 && (t += 360),
            (n = (o + l) / 2),
            [
              t,
              100 * (l == o ? 0 : n <= 0.5 ? s / (l + o) : s / (2 - l - o)),
              100 * n,
            ]
          );
        }
        function i(e) {
          var t,
            n,
            r = e[0],
            i = e[1],
            a = e[2],
            o = Math.min(r, i, a),
            l = Math.max(r, i, a),
            s = l - o;
          return (
            (n = 0 == l ? 0 : ((s / l) * 1e3) / 10),
            l == o
              ? (t = 0)
              : r == l
              ? (t = (i - a) / s)
              : i == l
              ? (t = 2 + (a - r) / s)
              : a == l && (t = 4 + (r - i) / s),
            (t = Math.min(60 * t, 360)) < 0 && (t += 360),
            [t, n, ((l / 255) * 1e3) / 10]
          );
        }
        function a(e) {
          var t = e[0],
            r = e[1],
            i = e[2];
          return [
            n(e)[0],
            (1 / 255) * Math.min(t, Math.min(r, i)) * 100,
            100 * (i = 1 - (1 / 255) * Math.max(t, Math.max(r, i))),
          ];
        }
        function o(e) {
          var t,
            n = e[0] / 255,
            r = e[1] / 255,
            i = e[2] / 255;
          return [
            100 *
              ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - i))) / (1 - t) || 0),
            100 * ((1 - r - t) / (1 - t) || 0),
            100 * ((1 - i - t) / (1 - t) || 0),
            100 * t,
          ];
        }
        function l(e) {
          return S[JSON.stringify(e)];
        }
        function s(e) {
          var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255;
          return [
            100 *
              (0.4124 *
                (t =
                  t > 0.04045
                    ? Math.pow((t + 0.055) / 1.055, 2.4)
                    : t / 12.92) +
                0.3576 *
                  (n =
                    n > 0.04045
                      ? Math.pow((n + 0.055) / 1.055, 2.4)
                      : n / 12.92) +
                0.1805 *
                  (r =
                    r > 0.04045
                      ? Math.pow((r + 0.055) / 1.055, 2.4)
                      : r / 12.92)),
            100 * (0.2126 * t + 0.7152 * n + 0.0722 * r),
            100 * (0.0193 * t + 0.1192 * n + 0.9505 * r),
          ];
        }
        function u(e) {
          var t = s(e),
            n = t[0],
            r = t[1],
            i = t[2];
          return (
            (r /= 100),
            (i /= 108.883),
            (n =
              (n /= 95.047) > 0.008856
                ? Math.pow(n, 1 / 3)
                : 7.787 * n + 16 / 116),
            [
              116 *
                (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) -
                16,
              500 * (n - r),
              200 *
                (r -
                  (i =
                    i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116)),
            ]
          );
        }
        function c(e) {
          var t,
            n,
            r,
            i,
            a,
            o = e[0] / 360,
            l = e[1] / 100,
            s = e[2] / 100;
          if (0 == l) return [(a = 255 * s), a, a];
          (t = 2 * s - (n = s < 0.5 ? s * (1 + l) : s + l - s * l)),
            (i = [0, 0, 0]);
          for (var u = 0; u < 3; u++)
            (r = o + (1 / 3) * -(u - 1)) < 0 && r++,
              r > 1 && r--,
              (a =
                6 * r < 1
                  ? t + 6 * (n - t) * r
                  : 2 * r < 1
                  ? n
                  : 3 * r < 2
                  ? t + (n - t) * (2 / 3 - r) * 6
                  : t),
              (i[u] = 255 * a);
          return i;
        }
        function d(e) {
          var t = e[0] / 60,
            n = e[1] / 100,
            r = e[2] / 100,
            i = Math.floor(t) % 6,
            a = t - Math.floor(t),
            o = 255 * r * (1 - n),
            l = 255 * r * (1 - n * a),
            s = 255 * r * (1 - n * (1 - a));
          switch (((r *= 255), i)) {
            case 0:
              return [r, s, o];
            case 1:
              return [l, r, o];
            case 2:
              return [o, r, s];
            case 3:
              return [o, l, r];
            case 4:
              return [s, o, r];
            case 5:
              return [r, o, l];
          }
        }
        function f(e) {
          var t,
            n,
            i,
            a,
            o = e[0] / 360,
            l = e[1] / 100,
            s = e[2] / 100,
            u = l + s;
          switch (
            (u > 1 && ((l /= u), (s /= u)),
            (i = 6 * o - (t = Math.floor(6 * o))),
            0 != (1 & t) && (i = 1 - i),
            (a = l + i * ((n = 1 - s) - l)),
            t)
          ) {
            default:
            case 6:
            case 0:
              (r = n), (g = a), (b = l);
              break;
            case 1:
              (r = a), (g = n), (b = l);
              break;
            case 2:
              (r = l), (g = n), (b = a);
              break;
            case 3:
              (r = l), (g = a), (b = n);
              break;
            case 4:
              (r = a), (g = l), (b = n);
              break;
            case 5:
              (r = n), (g = l), (b = a);
          }
          return [255 * r, 255 * g, 255 * b];
        }
        function h(e) {
          var t = e[0] / 100,
            n = e[1] / 100,
            r = e[2] / 100,
            i = e[3] / 100;
          return [
            255 * (1 - Math.min(1, t * (1 - i) + i)),
            255 * (1 - Math.min(1, n * (1 - i) + i)),
            255 * (1 - Math.min(1, r * (1 - i) + i)),
          ];
        }
        function p(e) {
          var t,
            n,
            r,
            i = e[0] / 100,
            a = e[1] / 100,
            o = e[2] / 100;
          return (
            (n = -0.9689 * i + 1.8758 * a + 0.0415 * o),
            (r = 0.0557 * i + -0.204 * a + 1.057 * o),
            (t =
              (t = 3.2406 * i + -1.5372 * a + -0.4986 * o) > 0.0031308
                ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055
                : (t *= 12.92)),
            (n =
              n > 0.0031308
                ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                : (n *= 12.92)),
            (r =
              r > 0.0031308
                ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                : (r *= 12.92)),
            [
              255 * (t = Math.min(Math.max(0, t), 1)),
              255 * (n = Math.min(Math.max(0, n), 1)),
              255 * (r = Math.min(Math.max(0, r), 1)),
            ]
          );
        }
        function m(e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            (n /= 100),
            (r /= 108.883),
            (t =
              (t /= 95.047) > 0.008856
                ? Math.pow(t, 1 / 3)
                : 7.787 * t + 16 / 116),
            [
              116 *
                (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) -
                16,
              500 * (t - n),
              200 *
                (n -
                  (r =
                    r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)),
            ]
          );
        }
        function v(e) {
          var t,
            n,
            r,
            i,
            a = e[0],
            o = e[1],
            l = e[2];
          return (
            a <= 8
              ? (i = ((n = (100 * a) / 903.3) / 100) * 7.787 + 16 / 116)
              : ((n = 100 * Math.pow((a + 16) / 116, 3)),
                (i = Math.pow(n / 100, 1 / 3))),
            [
              (t =
                t / 95.047 <= 0.008856
                  ? (t = (95.047 * (o / 500 + i - 16 / 116)) / 7.787)
                  : 95.047 * Math.pow(o / 500 + i, 3)),
              n,
              (r =
                r / 108.883 <= 0.008859
                  ? (r = (108.883 * (i - l / 200 - 16 / 116)) / 7.787)
                  : 108.883 * Math.pow(i - l / 200, 3)),
            ]
          );
        }
        function y(e) {
          var t,
            n = e[0],
            r = e[1],
            i = e[2];
          return (
            (t = (360 * Math.atan2(i, r)) / 2 / Math.PI) < 0 && (t += 360),
            [n, Math.sqrt(r * r + i * i), t]
          );
        }
        function x(e) {
          return p(v(e));
        }
        function _(e) {
          var t,
            n = e[0],
            r = e[1];
          return (
            (t = (e[2] / 360) * 2 * Math.PI),
            [n, r * Math.cos(t), r * Math.sin(t)]
          );
        }
        function w(e) {
          return k[e];
        }
        var k = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          S = {};
        for (var M in k) S[JSON.stringify(k[M])] = M;
        var T = function () {
          return new O();
        };
        for (var C in t) {
          T[C + "Raw"] = (function (e) {
            return function (n) {
              return (
                "number" == typeof n &&
                  (n = Array.prototype.slice.call(arguments)),
                t[e](n)
              );
            };
          })(C);
          var P = /(\w+)2(\w+)/.exec(C),
            E = P[1],
            D = P[2];
          (T[E] = T[E] || {})[D] = T[C] = (function (e) {
            return function (n) {
              "number" == typeof n &&
                (n = Array.prototype.slice.call(arguments));
              var r = t[e](n);
              if ("string" == typeof r || void 0 === r) return r;
              for (var i = 0; i < r.length; i++) r[i] = Math.round(r[i]);
              return r;
            };
          })(C);
        }
        var O = function () {
          this.convs = {};
        };
        (O.prototype.routeSpace = function (e, t) {
          var n = t[0];
          return void 0 === n
            ? this.getValues(e)
            : ("number" == typeof n && (n = Array.prototype.slice.call(t)),
              this.setValues(e, n));
        }),
          (O.prototype.setValues = function (e, t) {
            return (
              (this.space = e), (this.convs = {}), (this.convs[e] = t), this
            );
          }),
          (O.prototype.getValues = function (e) {
            var t = this.convs[e];
            if (!t) {
              var n = this.space,
                r = this.convs[n];
              (t = T[n][e](r)), (this.convs[e] = t);
            }
            return t;
          }),
          ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
            O.prototype[e] = function (t) {
              return this.routeSpace(e, arguments);
            };
          });
        var A = T,
          I = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          F = {
            getRgba: N,
            getHsla: L,
            getRgb: function (e) {
              var t = N(e);
              return t && t.slice(0, 3);
            },
            getHsl: function (e) {
              var t = L(e);
              return t && t.slice(0, 3);
            },
            getHwb: R,
            getAlpha: function (e) {
              var t = N(e);
              return t ? t[3] : (t = L(e)) ? t[3] : (t = R(e)) ? t[3] : void 0;
            },
            hexString: function (e, t) {
              return (
                (t = void 0 !== t && 3 === e.length ? t : e[3]),
                "#" +
                  Y(e[0]) +
                  Y(e[1]) +
                  Y(e[2]) +
                  (t >= 0 && t < 1 ? Y(Math.round(255 * t)) : "")
              );
            },
            rgbString: function (e, t) {
              return t < 1 || (e[3] && e[3] < 1)
                ? z(e, t)
                : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
            },
            rgbaString: z,
            percentString: function (e, t) {
              if (t < 1 || (e[3] && e[3] < 1)) return W(e, t);
              var n = Math.round((e[0] / 255) * 100),
                r = Math.round((e[1] / 255) * 100),
                i = Math.round((e[2] / 255) * 100);
              return "rgb(" + n + "%, " + r + "%, " + i + "%)";
            },
            percentaString: W,
            hslString: function (e, t) {
              return t < 1 || (e[3] && e[3] < 1)
                ? j(e, t)
                : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
            },
            hslaString: j,
            hwbString: function (e, t) {
              return (
                void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
                "hwb(" +
                  e[0] +
                  ", " +
                  e[1] +
                  "%, " +
                  e[2] +
                  "%" +
                  (void 0 !== t && 1 !== t ? ", " + t : "") +
                  ")"
              );
            },
            keyword: function (e) {
              return U[e.slice(0, 3)];
            },
          };
        function N(e) {
          if (e) {
            var t = [0, 0, 0],
              n = 1,
              r = e.match(/^#([a-fA-F0-9]{3,4})$/i),
              i = "";
            if (r) {
              i = (r = r[1])[3];
              for (var a = 0; a < t.length; a++)
                t[a] = parseInt(r[a] + r[a], 16);
              i && (n = Math.round((parseInt(i + i, 16) / 255) * 100) / 100);
            } else if ((r = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
              for (i = r[2], r = r[1], a = 0; a < t.length; a++)
                t[a] = parseInt(r.slice(2 * a, 2 * a + 2), 16);
              i && (n = Math.round((parseInt(i, 16) / 255) * 100) / 100);
            } else if (
              (r = e.match(
                /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
              ))
            ) {
              for (a = 0; a < t.length; a++) t[a] = parseInt(r[a + 1]);
              n = parseFloat(r[4]);
            } else if (
              (r = e.match(
                /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
              ))
            ) {
              for (a = 0; a < t.length; a++)
                t[a] = Math.round(2.55 * parseFloat(r[a + 1]));
              n = parseFloat(r[4]);
            } else if ((r = e.match(/(\w+)/))) {
              if ("transparent" == r[1]) return [0, 0, 0, 0];
              if (!(t = I[r[1]])) return;
            }
            for (a = 0; a < t.length; a++) t[a] = V(t[a], 0, 255);
            return (n = n || 0 == n ? V(n, 0, 1) : 1), (t[3] = n), t;
          }
        }
        function L(e) {
          if (e) {
            var t = e.match(
              /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
            );
            if (t) {
              var n = parseFloat(t[4]);
              return [
                V(parseInt(t[1]), 0, 360),
                V(parseFloat(t[2]), 0, 100),
                V(parseFloat(t[3]), 0, 100),
                V(isNaN(n) ? 1 : n, 0, 1),
              ];
            }
          }
        }
        function R(e) {
          if (e) {
            var t = e.match(
              /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
            );
            if (t) {
              var n = parseFloat(t[4]);
              return [
                V(parseInt(t[1]), 0, 360),
                V(parseFloat(t[2]), 0, 100),
                V(parseFloat(t[3]), 0, 100),
                V(isNaN(n) ? 1 : n, 0, 1),
              ];
            }
          }
        }
        function z(e, t) {
          return (
            void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
          );
        }
        function W(e, t) {
          return (
            "rgba(" +
            Math.round((e[0] / 255) * 100) +
            "%, " +
            Math.round((e[1] / 255) * 100) +
            "%, " +
            Math.round((e[2] / 255) * 100) +
            "%, " +
            (t || e[3] || 1) +
            ")"
          );
        }
        function j(e, t) {
          return (
            void 0 === t && (t = void 0 !== e[3] ? e[3] : 1),
            "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
          );
        }
        function V(e, t, n) {
          return Math.min(Math.max(t, e), n);
        }
        function Y(e) {
          var t = e.toString(16).toUpperCase();
          return t.length < 2 ? "0" + t : t;
        }
        var U = {};
        for (var B in I) U[I[B]] = B;
        var H = function e(t) {
          return t instanceof e
            ? t
            : this instanceof e
            ? ((this.valid = !1),
              (this.values = {
                rgb: [0, 0, 0],
                hsl: [0, 0, 0],
                hsv: [0, 0, 0],
                hwb: [0, 0, 0],
                cmyk: [0, 0, 0, 0],
                alpha: 1,
              }),
              void ("string" === typeof t
                ? (n = F.getRgba(t))
                  ? this.setValues("rgb", n)
                  : (n = F.getHsla(t))
                  ? this.setValues("hsl", n)
                  : (n = F.getHwb(t)) && this.setValues("hwb", n)
                : "object" === typeof t &&
                  (void 0 !== (n = t).r || void 0 !== n.red
                    ? this.setValues("rgb", n)
                    : void 0 !== n.l || void 0 !== n.lightness
                    ? this.setValues("hsl", n)
                    : void 0 !== n.v || void 0 !== n.value
                    ? this.setValues("hsv", n)
                    : void 0 !== n.w || void 0 !== n.whiteness
                    ? this.setValues("hwb", n)
                    : (void 0 === n.c && void 0 === n.cyan) ||
                      this.setValues("cmyk", n))))
            : new e(t);
          var n;
        };
        ((H.prototype = {
          isValid: function () {
            return this.valid;
          },
          rgb: function () {
            return this.setSpace("rgb", arguments);
          },
          hsl: function () {
            return this.setSpace("hsl", arguments);
          },
          hsv: function () {
            return this.setSpace("hsv", arguments);
          },
          hwb: function () {
            return this.setSpace("hwb", arguments);
          },
          cmyk: function () {
            return this.setSpace("cmyk", arguments);
          },
          rgbArray: function () {
            return this.values.rgb;
          },
          hslArray: function () {
            return this.values.hsl;
          },
          hsvArray: function () {
            return this.values.hsv;
          },
          hwbArray: function () {
            var e = this.values;
            return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb;
          },
          cmykArray: function () {
            return this.values.cmyk;
          },
          rgbaArray: function () {
            var e = this.values;
            return e.rgb.concat([e.alpha]);
          },
          hslaArray: function () {
            var e = this.values;
            return e.hsl.concat([e.alpha]);
          },
          alpha: function (e) {
            return void 0 === e
              ? this.values.alpha
              : (this.setValues("alpha", e), this);
          },
          red: function (e) {
            return this.setChannel("rgb", 0, e);
          },
          green: function (e) {
            return this.setChannel("rgb", 1, e);
          },
          blue: function (e) {
            return this.setChannel("rgb", 2, e);
          },
          hue: function (e) {
            return (
              e && (e = (e %= 360) < 0 ? 360 + e : e),
              this.setChannel("hsl", 0, e)
            );
          },
          saturation: function (e) {
            return this.setChannel("hsl", 1, e);
          },
          lightness: function (e) {
            return this.setChannel("hsl", 2, e);
          },
          saturationv: function (e) {
            return this.setChannel("hsv", 1, e);
          },
          whiteness: function (e) {
            return this.setChannel("hwb", 1, e);
          },
          blackness: function (e) {
            return this.setChannel("hwb", 2, e);
          },
          value: function (e) {
            return this.setChannel("hsv", 2, e);
          },
          cyan: function (e) {
            return this.setChannel("cmyk", 0, e);
          },
          magenta: function (e) {
            return this.setChannel("cmyk", 1, e);
          },
          yellow: function (e) {
            return this.setChannel("cmyk", 2, e);
          },
          black: function (e) {
            return this.setChannel("cmyk", 3, e);
          },
          hexString: function () {
            return F.hexString(this.values.rgb);
          },
          rgbString: function () {
            return F.rgbString(this.values.rgb, this.values.alpha);
          },
          rgbaString: function () {
            return F.rgbaString(this.values.rgb, this.values.alpha);
          },
          percentString: function () {
            return F.percentString(this.values.rgb, this.values.alpha);
          },
          hslString: function () {
            return F.hslString(this.values.hsl, this.values.alpha);
          },
          hslaString: function () {
            return F.hslaString(this.values.hsl, this.values.alpha);
          },
          hwbString: function () {
            return F.hwbString(this.values.hwb, this.values.alpha);
          },
          keyword: function () {
            return F.keyword(this.values.rgb, this.values.alpha);
          },
          rgbNumber: function () {
            var e = this.values.rgb;
            return (e[0] << 16) | (e[1] << 8) | e[2];
          },
          luminosity: function () {
            for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
              var r = e[n] / 255;
              t[n] =
                r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
          },
          contrast: function (e) {
            var t = this.luminosity(),
              n = e.luminosity();
            return t > n ? (t + 0.05) / (n + 0.05) : (n + 0.05) / (t + 0.05);
          },
          level: function (e) {
            var t = this.contrast(e);
            return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
          },
          dark: function () {
            var e = this.values.rgb;
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
          },
          light: function () {
            return !this.dark();
          },
          negate: function () {
            for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
            return this.setValues("rgb", e), this;
          },
          lighten: function (e) {
            var t = this.values.hsl;
            return (t[2] += t[2] * e), this.setValues("hsl", t), this;
          },
          darken: function (e) {
            var t = this.values.hsl;
            return (t[2] -= t[2] * e), this.setValues("hsl", t), this;
          },
          saturate: function (e) {
            var t = this.values.hsl;
            return (t[1] += t[1] * e), this.setValues("hsl", t), this;
          },
          desaturate: function (e) {
            var t = this.values.hsl;
            return (t[1] -= t[1] * e), this.setValues("hsl", t), this;
          },
          whiten: function (e) {
            var t = this.values.hwb;
            return (t[1] += t[1] * e), this.setValues("hwb", t), this;
          },
          blacken: function (e) {
            var t = this.values.hwb;
            return (t[2] += t[2] * e), this.setValues("hwb", t), this;
          },
          greyscale: function () {
            var e = this.values.rgb,
              t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2];
            return this.setValues("rgb", [t, t, t]), this;
          },
          clearer: function (e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t - t * e), this;
          },
          opaquer: function (e) {
            var t = this.values.alpha;
            return this.setValues("alpha", t + t * e), this;
          },
          rotate: function (e) {
            var t = this.values.hsl,
              n = (t[0] + e) % 360;
            return (t[0] = n < 0 ? 360 + n : n), this.setValues("hsl", t), this;
          },
          mix: function (e, t) {
            var n = e,
              r = void 0 === t ? 0.5 : t,
              i = 2 * r - 1,
              a = this.alpha() - n.alpha(),
              o = ((i * a === -1 ? i : (i + a) / (1 + i * a)) + 1) / 2,
              l = 1 - o;
            return this.rgb(
              o * this.red() + l * n.red(),
              o * this.green() + l * n.green(),
              o * this.blue() + l * n.blue()
            ).alpha(this.alpha() * r + n.alpha() * (1 - r));
          },
          toJSON: function () {
            return this.rgb();
          },
          clone: function () {
            var e,
              t,
              n = new H(),
              r = this.values,
              i = n.values;
            for (var a in r)
              r.hasOwnProperty(a) &&
                ((e = r[a]),
                "[object Array]" === (t = {}.toString.call(e))
                  ? (i[a] = e.slice(0))
                  : "[object Number]" === t
                  ? (i[a] = e)
                  : console.error("unexpected color value:", e));
            return n;
          },
        }).spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"],
        }),
          (H.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100],
          }),
          (H.prototype.getValues = function (e) {
            for (var t = this.values, n = {}, r = 0; r < e.length; r++)
              n[e.charAt(r)] = t[e][r];
            return 1 !== t.alpha && (n.a = t.alpha), n;
          }),
          (H.prototype.setValues = function (e, t) {
            var n,
              r,
              i = this.values,
              a = this.spaces,
              o = this.maxes,
              l = 1;
            if (((this.valid = !0), "alpha" === e)) l = t;
            else if (t.length) (i[e] = t.slice(0, e.length)), (l = t[e.length]);
            else if (void 0 !== t[e.charAt(0)]) {
              for (n = 0; n < e.length; n++) i[e][n] = t[e.charAt(n)];
              l = t.a;
            } else if (void 0 !== t[a[e][0]]) {
              var s = a[e];
              for (n = 0; n < e.length; n++) i[e][n] = t[s[n]];
              l = t.alpha;
            }
            if (
              ((i.alpha = Math.max(0, Math.min(1, void 0 === l ? i.alpha : l))),
              "alpha" === e)
            )
              return !1;
            for (n = 0; n < e.length; n++)
              (r = Math.max(0, Math.min(o[e][n], i[e][n]))),
                (i[e][n] = Math.round(r));
            for (var u in a) u !== e && (i[u] = A[e][u](i[e]));
            return !0;
          }),
          (H.prototype.setSpace = function (e, t) {
            var n = t[0];
            return void 0 === n
              ? this.getValues(e)
              : ("number" === typeof n && (n = Array.prototype.slice.call(t)),
                this.setValues(e, n),
                this);
          }),
          (H.prototype.setChannel = function (e, t, n) {
            var r = this.values[e];
            return void 0 === n
              ? r[t]
              : n === r[t]
              ? this
              : ((r[t] = n), this.setValues(e, r), this);
          }),
          "undefined" !== typeof window && (window.Color = H);
        var q = H,
          G = {
            noop: function () {},
            uid: (function () {
              var e = 0;
              return function () {
                return e++;
              };
            })(),
            isNullOrUndef: function (e) {
              return null === e || "undefined" === typeof e;
            },
            isArray: function (e) {
              if (Array.isArray && Array.isArray(e)) return !0;
              var t = Object.prototype.toString.call(e);
              return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6);
            },
            isObject: function (e) {
              return (
                null !== e &&
                "[object Object]" === Object.prototype.toString.call(e)
              );
            },
            isFinite: (function (e) {
              function t(t) {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function (e) {
              return (
                ("number" === typeof e || e instanceof Number) && isFinite(e)
              );
            }),
            valueOrDefault: function (e, t) {
              return "undefined" === typeof e ? t : e;
            },
            valueAtIndexOrDefault: function (e, t, n) {
              return G.valueOrDefault(G.isArray(e) ? e[t] : e, n);
            },
            callback: function (e, t, n) {
              if (e && "function" === typeof e.call) return e.apply(n, t);
            },
            each: function (e, t, n, r) {
              var i, a, o;
              if (G.isArray(e))
                if (((a = e.length), r))
                  for (i = a - 1; i >= 0; i--) t.call(n, e[i], i);
                else for (i = 0; i < a; i++) t.call(n, e[i], i);
              else if (G.isObject(e))
                for (a = (o = Object.keys(e)).length, i = 0; i < a; i++)
                  t.call(n, e[o[i]], o[i]);
            },
            arrayEquals: function (e, t) {
              var n, r, i, a;
              if (!e || !t || e.length !== t.length) return !1;
              for (n = 0, r = e.length; n < r; ++n)
                if (
                  ((i = e[n]),
                  (a = t[n]),
                  i instanceof Array && a instanceof Array)
                ) {
                  if (!G.arrayEquals(i, a)) return !1;
                } else if (i !== a) return !1;
              return !0;
            },
            clone: function (e) {
              if (G.isArray(e)) return e.map(G.clone);
              if (G.isObject(e)) {
                for (
                  var t = {}, n = Object.keys(e), r = n.length, i = 0;
                  i < r;
                  ++i
                )
                  t[n[i]] = G.clone(e[n[i]]);
                return t;
              }
              return e;
            },
            _merger: function (e, t, n, r) {
              var i = t[e],
                a = n[e];
              G.isObject(i) && G.isObject(a)
                ? G.merge(i, a, r)
                : (t[e] = G.clone(a));
            },
            _mergerIf: function (e, t, n) {
              var r = t[e],
                i = n[e];
              G.isObject(r) && G.isObject(i)
                ? G.mergeIf(r, i)
                : t.hasOwnProperty(e) || (t[e] = G.clone(i));
            },
            merge: function (e, t, n) {
              var r,
                i,
                a,
                o,
                l,
                s = G.isArray(t) ? t : [t],
                u = s.length;
              if (!G.isObject(e)) return e;
              for (r = (n = n || {}).merger || G._merger, i = 0; i < u; ++i)
                if (((t = s[i]), G.isObject(t)))
                  for (l = 0, o = (a = Object.keys(t)).length; l < o; ++l)
                    r(a[l], e, t, n);
              return e;
            },
            mergeIf: function (e, t) {
              return G.merge(e, t, { merger: G._mergerIf });
            },
            extend:
              Object.assign ||
              function (e) {
                return G.merge(e, [].slice.call(arguments, 1), {
                  merger: function (e, t, n) {
                    t[e] = n[e];
                  },
                });
              },
            inherits: function (e) {
              var t = this,
                n =
                  e && e.hasOwnProperty("constructor")
                    ? e.constructor
                    : function () {
                        return t.apply(this, arguments);
                      },
                r = function () {
                  this.constructor = n;
                };
              return (
                (r.prototype = t.prototype),
                (n.prototype = new r()),
                (n.extend = G.inherits),
                e && G.extend(n.prototype, e),
                (n.__super__ = t.prototype),
                n
              );
            },
            _deprecated: function (e, t, n, r) {
              void 0 !== t &&
                console.warn(
                  e +
                    ': "' +
                    n +
                    '" is deprecated. Please use "' +
                    r +
                    '" instead'
                );
            },
          },
          $ = G;
        (G.callCallback = G.callback),
          (G.indexOf = function (e, t, n) {
            return Array.prototype.indexOf.call(e, t, n);
          }),
          (G.getValueOrDefault = G.valueOrDefault),
          (G.getValueAtIndexOrDefault = G.valueAtIndexOrDefault);
        var K = {
            linear: function (e) {
              return e;
            },
            easeInQuad: function (e) {
              return e * e;
            },
            easeOutQuad: function (e) {
              return -e * (e - 2);
            },
            easeInOutQuad: function (e) {
              return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
            },
            easeInCubic: function (e) {
              return e * e * e;
            },
            easeOutCubic: function (e) {
              return (e -= 1) * e * e + 1;
            },
            easeInOutCubic: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e
                : 0.5 * ((e -= 2) * e * e + 2);
            },
            easeInQuart: function (e) {
              return e * e * e * e;
            },
            easeOutQuart: function (e) {
              return -((e -= 1) * e * e * e - 1);
            },
            easeInOutQuart: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e * e
                : -0.5 * ((e -= 2) * e * e * e - 2);
            },
            easeInQuint: function (e) {
              return e * e * e * e * e;
            },
            easeOutQuint: function (e) {
              return (e -= 1) * e * e * e * e + 1;
            },
            easeInOutQuint: function (e) {
              return (e /= 0.5) < 1
                ? 0.5 * e * e * e * e * e
                : 0.5 * ((e -= 2) * e * e * e * e + 2);
            },
            easeInSine: function (e) {
              return 1 - Math.cos(e * (Math.PI / 2));
            },
            easeOutSine: function (e) {
              return Math.sin(e * (Math.PI / 2));
            },
            easeInOutSine: function (e) {
              return -0.5 * (Math.cos(Math.PI * e) - 1);
            },
            easeInExpo: function (e) {
              return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
            },
            easeOutExpo: function (e) {
              return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
            },
            easeInOutExpo: function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (e /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (e - 1))
                : 0.5 * (2 - Math.pow(2, -10 * --e));
            },
            easeInCirc: function (e) {
              return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
            },
            easeOutCirc: function (e) {
              return Math.sqrt(1 - (e -= 1) * e);
            },
            easeInOutCirc: function (e) {
              return (e /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            },
            easeInElastic: function (e) {
              var t = 1.70158,
                n = 0,
                r = 1;
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (n || (n = 0.3),
                  r < 1
                    ? ((r = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  -r *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((e - t) * (2 * Math.PI)) / n));
            },
            easeOutElastic: function (e) {
              var t = 1.70158,
                n = 0,
                r = 1;
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : (n || (n = 0.3),
                  r < 1
                    ? ((r = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  r *
                    Math.pow(2, -10 * e) *
                    Math.sin(((e - t) * (2 * Math.PI)) / n) +
                    1);
            },
            easeInOutElastic: function (e) {
              var t = 1.70158,
                n = 0,
                r = 1;
              return 0 === e
                ? 0
                : 2 === (e /= 0.5)
                ? 1
                : (n || (n = 0.45),
                  r < 1
                    ? ((r = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                  e < 1
                    ? r *
                      Math.pow(2, 10 * (e -= 1)) *
                      Math.sin(((e - t) * (2 * Math.PI)) / n) *
                      -0.5
                    : r *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e - t) * (2 * Math.PI)) / n) *
                        0.5 +
                      1);
            },
            easeInBack: function (e) {
              var t = 1.70158;
              return e * e * ((t + 1) * e - t);
            },
            easeOutBack: function (e) {
              var t = 1.70158;
              return (e -= 1) * e * ((t + 1) * e + t) + 1;
            },
            easeInOutBack: function (e) {
              var t = 1.70158;
              return (e /= 0.5) < 1
                ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
            },
            easeInBounce: function (e) {
              return 1 - K.easeOutBounce(1 - e);
            },
            easeOutBounce: function (e) {
              return e < 1 / 2.75
                ? 7.5625 * e * e
                : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            },
            easeInOutBounce: function (e) {
              return e < 0.5
                ? 0.5 * K.easeInBounce(2 * e)
                : 0.5 * K.easeOutBounce(2 * e - 1) + 0.5;
            },
          },
          Q = { effects: K };
        $.easingEffects = K;
        var Z = Math.PI,
          X = Z / 180,
          J = 2 * Z,
          ee = Z / 2,
          te = Z / 4,
          ne = (2 * Z) / 3,
          re = {
            clear: function (e) {
              e.ctx.clearRect(0, 0, e.width, e.height);
            },
            roundedRect: function (e, t, n, r, i, a) {
              if (a) {
                var o = Math.min(a, i / 2, r / 2),
                  l = t + o,
                  s = n + o,
                  u = t + r - o,
                  c = n + i - o;
                e.moveTo(t, s),
                  l < u && s < c
                    ? (e.arc(l, s, o, -Z, -ee),
                      e.arc(u, s, o, -ee, 0),
                      e.arc(u, c, o, 0, ee),
                      e.arc(l, c, o, ee, Z))
                    : l < u
                    ? (e.moveTo(l, n),
                      e.arc(u, s, o, -ee, ee),
                      e.arc(l, s, o, ee, Z + ee))
                    : s < c
                    ? (e.arc(l, s, o, -Z, 0), e.arc(l, c, o, 0, Z))
                    : e.arc(l, s, o, -Z, Z),
                  e.closePath(),
                  e.moveTo(t, n);
              } else e.rect(t, n, r, i);
            },
            drawPoint: function (e, t, n, r, i, a) {
              var o,
                l,
                s,
                u,
                c,
                d = (a || 0) * X;
              if (
                t &&
                "object" === typeof t &&
                ("[object HTMLImageElement]" === (o = t.toString()) ||
                  "[object HTMLCanvasElement]" === o)
              )
                return (
                  e.save(),
                  e.translate(r, i),
                  e.rotate(d),
                  e.drawImage(
                    t,
                    -t.width / 2,
                    -t.height / 2,
                    t.width,
                    t.height
                  ),
                  void e.restore()
                );
              if (!(isNaN(n) || n <= 0)) {
                switch ((e.beginPath(), t)) {
                  default:
                    e.arc(r, i, n, 0, J), e.closePath();
                    break;
                  case "triangle":
                    e.moveTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                      (d += ne),
                      e.lineTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                      (d += ne),
                      e.lineTo(r + Math.sin(d) * n, i - Math.cos(d) * n),
                      e.closePath();
                    break;
                  case "rectRounded":
                    (u = n - (c = 0.516 * n)),
                      (l = Math.cos(d + te) * u),
                      (s = Math.sin(d + te) * u),
                      e.arc(r - l, i - s, c, d - Z, d - ee),
                      e.arc(r + s, i - l, c, d - ee, d),
                      e.arc(r + l, i + s, c, d, d + ee),
                      e.arc(r - s, i + l, c, d + ee, d + Z),
                      e.closePath();
                    break;
                  case "rect":
                    if (!a) {
                      (u = Math.SQRT1_2 * n),
                        e.rect(r - u, i - u, 2 * u, 2 * u);
                      break;
                    }
                    d += te;
                  case "rectRot":
                    (l = Math.cos(d) * n),
                      (s = Math.sin(d) * n),
                      e.moveTo(r - l, i - s),
                      e.lineTo(r + s, i - l),
                      e.lineTo(r + l, i + s),
                      e.lineTo(r - s, i + l),
                      e.closePath();
                    break;
                  case "crossRot":
                    d += te;
                  case "cross":
                    (l = Math.cos(d) * n),
                      (s = Math.sin(d) * n),
                      e.moveTo(r - l, i - s),
                      e.lineTo(r + l, i + s),
                      e.moveTo(r + s, i - l),
                      e.lineTo(r - s, i + l);
                    break;
                  case "star":
                    (l = Math.cos(d) * n),
                      (s = Math.sin(d) * n),
                      e.moveTo(r - l, i - s),
                      e.lineTo(r + l, i + s),
                      e.moveTo(r + s, i - l),
                      e.lineTo(r - s, i + l),
                      (d += te),
                      (l = Math.cos(d) * n),
                      (s = Math.sin(d) * n),
                      e.moveTo(r - l, i - s),
                      e.lineTo(r + l, i + s),
                      e.moveTo(r + s, i - l),
                      e.lineTo(r - s, i + l);
                    break;
                  case "line":
                    (l = Math.cos(d) * n),
                      (s = Math.sin(d) * n),
                      e.moveTo(r - l, i - s),
                      e.lineTo(r + l, i + s);
                    break;
                  case "dash":
                    e.moveTo(r, i),
                      e.lineTo(r + Math.cos(d) * n, i + Math.sin(d) * n);
                }
                e.fill(), e.stroke();
              }
            },
            _isPointInArea: function (e, t) {
              return (
                e.x > t.left - 1e-6 &&
                e.x < t.right + 1e-6 &&
                e.y > t.top - 1e-6 &&
                e.y < t.bottom + 1e-6
              );
            },
            clipArea: function (e, t) {
              e.save(),
                e.beginPath(),
                e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
                e.clip();
            },
            unclipArea: function (e) {
              e.restore();
            },
            lineTo: function (e, t, n, r) {
              var i = n.steppedLine;
              if (i) {
                if ("middle" === i) {
                  var a = (t.x + n.x) / 2;
                  e.lineTo(a, r ? n.y : t.y), e.lineTo(a, r ? t.y : n.y);
                } else
                  ("after" === i && !r) || ("after" !== i && r)
                    ? e.lineTo(t.x, n.y)
                    : e.lineTo(n.x, t.y);
                e.lineTo(n.x, n.y);
              } else
                n.tension
                  ? e.bezierCurveTo(
                      r ? t.controlPointPreviousX : t.controlPointNextX,
                      r ? t.controlPointPreviousY : t.controlPointNextY,
                      r ? n.controlPointNextX : n.controlPointPreviousX,
                      r ? n.controlPointNextY : n.controlPointPreviousY,
                      n.x,
                      n.y
                    )
                  : e.lineTo(n.x, n.y);
            },
          },
          ie = re;
        ($.clear = re.clear),
          ($.drawRoundedRectangle = function (e) {
            e.beginPath(), re.roundedRect.apply(re, arguments);
          });
        var ae = {
          _set: function (e, t) {
            return $.merge(this[e] || (this[e] = {}), t);
          },
        };
        ae._set("global", {
          defaultColor: "rgba(0,0,0,0.1)",
          defaultFontColor: "#666",
          defaultFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          defaultFontSize: 12,
          defaultFontStyle: "normal",
          defaultLineHeight: 1.2,
          showLines: !0,
        });
        var oe = ae,
          le = $.valueOrDefault,
          se = {
            toLineHeight: function (e, t) {
              var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!n || "normal" === n[1]) return 1.2 * t;
              switch (((e = +n[2]), n[3])) {
                case "px":
                  return e;
                case "%":
                  e /= 100;
              }
              return t * e;
            },
            toPadding: function (e) {
              var t, n, r, i;
              return (
                $.isObject(e)
                  ? ((t = +e.top || 0),
                    (n = +e.right || 0),
                    (r = +e.bottom || 0),
                    (i = +e.left || 0))
                  : (t = n = r = i = +e || 0),
                {
                  top: t,
                  right: n,
                  bottom: r,
                  left: i,
                  height: t + r,
                  width: i + n,
                }
              );
            },
            _parseFont: function (e) {
              var t = oe.global,
                n = le(e.fontSize, t.defaultFontSize),
                r = {
                  family: le(e.fontFamily, t.defaultFontFamily),
                  lineHeight: $.options.toLineHeight(
                    le(e.lineHeight, t.defaultLineHeight),
                    n
                  ),
                  size: n,
                  style: le(e.fontStyle, t.defaultFontStyle),
                  weight: null,
                  string: "",
                };
              return (
                (r.string = (function (e) {
                  return !e ||
                    $.isNullOrUndef(e.size) ||
                    $.isNullOrUndef(e.family)
                    ? null
                    : (e.style ? e.style + " " : "") +
                        (e.weight ? e.weight + " " : "") +
                        e.size +
                        "px " +
                        e.family;
                })(r)),
                r
              );
            },
            resolve: function (e, t, n, r) {
              var i,
                a,
                o,
                l = !0;
              for (i = 0, a = e.length; i < a; ++i)
                if (
                  void 0 !== (o = e[i]) &&
                  (void 0 !== t &&
                    "function" === typeof o &&
                    ((o = o(t)), (l = !1)),
                  void 0 !== n && $.isArray(o) && ((o = o[n]), (l = !1)),
                  void 0 !== o)
                )
                  return r && !l && (r.cacheable = !1), o;
            },
          },
          ue = {
            _factorize: function (e) {
              var t,
                n = [],
                r = Math.sqrt(e);
              for (t = 1; t < r; t++) e % t === 0 && (n.push(t), n.push(e / t));
              return (
                r === (0 | r) && n.push(r),
                n
                  .sort(function (e, t) {
                    return e - t;
                  })
                  .pop(),
                n
              );
            },
            log10:
              Math.log10 ||
              function (e) {
                var t = Math.log(e) * Math.LOG10E,
                  n = Math.round(t);
                return e === Math.pow(10, n) ? n : t;
              },
          },
          ce = ue;
        $.log10 = ue.log10;
        var de = $,
          fe = Q,
          he = ie,
          pe = se,
          ge = ce,
          me = {
            getRtlAdapter: function (e, t, n) {
              return e
                ? (function (e, t) {
                    return {
                      x: function (n) {
                        return e + e + t - n;
                      },
                      setWidth: function (e) {
                        t = e;
                      },
                      textAlign: function (e) {
                        return "center" === e
                          ? e
                          : "right" === e
                          ? "left"
                          : "right";
                      },
                      xPlus: function (e, t) {
                        return e - t;
                      },
                      leftForLtr: function (e, t) {
                        return e - t;
                      },
                    };
                  })(t, n)
                : {
                    x: function (e) {
                      return e;
                    },
                    setWidth: function (e) {},
                    textAlign: function (e) {
                      return e;
                    },
                    xPlus: function (e, t) {
                      return e + t;
                    },
                    leftForLtr: function (e, t) {
                      return e;
                    },
                  };
            },
            overrideTextDirection: function (e, t) {
              var n, r;
              ("ltr" !== t && "rtl" !== t) ||
                ((r = [
                  (n = e.canvas.style).getPropertyValue("direction"),
                  n.getPropertyPriority("direction"),
                ]),
                n.setProperty("direction", t, "important"),
                (e.prevTextDirection = r));
            },
            restoreTextDirection: function (e) {
              var t = e.prevTextDirection;
              void 0 !== t &&
                (delete e.prevTextDirection,
                e.canvas.style.setProperty("direction", t[0], t[1]));
            },
          };
        (de.easing = fe),
          (de.canvas = he),
          (de.options = pe),
          (de.math = ge),
          (de.rtl = me);
        var ve = function (e) {
          de.extend(this, e), this.initialize.apply(this, arguments);
        };
        de.extend(ve.prototype, {
          _type: void 0,
          initialize: function () {
            this.hidden = !1;
          },
          pivot: function () {
            var e = this;
            return (
              e._view || (e._view = de.extend({}, e._model)), (e._start = {}), e
            );
          },
          transition: function (e) {
            var t = this,
              n = t._model,
              r = t._start,
              i = t._view;
            return n && 1 !== e
              ? (i || (i = t._view = {}),
                r || (r = t._start = {}),
                (function (e, t, n, r) {
                  var i,
                    a,
                    o,
                    l,
                    s,
                    u,
                    c,
                    d,
                    f,
                    h = Object.keys(n);
                  for (i = 0, a = h.length; i < a; ++i)
                    if (
                      ((u = n[(o = h[i])]),
                      t.hasOwnProperty(o) || (t[o] = u),
                      (l = t[o]) !== u && "_" !== o[0])
                    ) {
                      if (
                        (e.hasOwnProperty(o) || (e[o] = l),
                        (c = typeof u) === typeof (s = e[o]))
                      )
                        if ("string" === c) {
                          if ((d = q(s)).valid && (f = q(u)).valid) {
                            t[o] = f.mix(d, r).rgbString();
                            continue;
                          }
                        } else if (de.isFinite(s) && de.isFinite(u)) {
                          t[o] = s + (u - s) * r;
                          continue;
                        }
                      t[o] = u;
                    }
                })(r, i, n, e),
                t)
              : ((t._view = de.extend({}, n)), (t._start = null), t);
          },
          tooltipPosition: function () {
            return { x: this._model.x, y: this._model.y };
          },
          hasValue: function () {
            return de.isNumber(this._model.x) && de.isNumber(this._model.y);
          },
        }),
          (ve.extend = de.inherits);
        var ye = ve,
          be = ye.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null,
          }),
          xe = be;
        Object.defineProperty(be.prototype, "animationObject", {
          get: function () {
            return this;
          },
        }),
          Object.defineProperty(be.prototype, "chartInstance", {
            get: function () {
              return this.chart;
            },
            set: function (e) {
              this.chart = e;
            },
          }),
          oe._set("global", {
            animation: {
              duration: 1e3,
              easing: "easeOutQuart",
              onProgress: de.noop,
              onComplete: de.noop,
            },
          });
        var _e = {
            animations: [],
            request: null,
            addAnimation: function (e, t, n, r) {
              var i,
                a,
                o = this.animations;
              for (
                t.chart = e,
                  t.startTime = Date.now(),
                  t.duration = n,
                  r || (e.animating = !0),
                  i = 0,
                  a = o.length;
                i < a;
                ++i
              )
                if (o[i].chart === e) return void (o[i] = t);
              o.push(t), 1 === o.length && this.requestAnimationFrame();
            },
            cancelAnimation: function (e) {
              var t = de.findIndex(this.animations, function (t) {
                return t.chart === e;
              });
              -1 !== t && (this.animations.splice(t, 1), (e.animating = !1));
            },
            requestAnimationFrame: function () {
              var e = this;
              null === e.request &&
                (e.request = de.requestAnimFrame.call(window, function () {
                  (e.request = null), e.startDigest();
                }));
            },
            startDigest: function () {
              this.advance(),
                this.animations.length > 0 && this.requestAnimationFrame();
            },
            advance: function () {
              for (var e, t, n, r, i = this.animations, a = 0; a < i.length; )
                (t = (e = i[a]).chart),
                  (n = e.numSteps),
                  (r =
                    Math.floor(((Date.now() - e.startTime) / e.duration) * n) +
                    1),
                  (e.currentStep = Math.min(r, n)),
                  de.callback(e.render, [t, e], t),
                  de.callback(e.onAnimationProgress, [e], t),
                  e.currentStep >= n
                    ? (de.callback(e.onAnimationComplete, [e], t),
                      (t.animating = !1),
                      i.splice(a, 1))
                    : ++a;
            },
          },
          we = de.options.resolve,
          ke = ["push", "pop", "shift", "splice", "unshift"];
        function Se(e, t) {
          var n = e._chartjs;
          if (n) {
            var r = n.listeners,
              i = r.indexOf(t);
            -1 !== i && r.splice(i, 1),
              r.length > 0 ||
                (ke.forEach(function (t) {
                  delete e[t];
                }),
                delete e._chartjs);
          }
        }
        var Me = function (e, t) {
          this.initialize(e, t);
        };
        de.extend(Me.prototype, {
          datasetElementType: null,
          dataElementType: null,
          _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
          ],
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "pointStyle",
          ],
          initialize: function (e, t) {
            var n = this;
            (n.chart = e),
              (n.index = t),
              n.linkScales(),
              n.addElements(),
              (n._type = n.getMeta().type);
          },
          updateIndex: function (e) {
            this.index = e;
          },
          linkScales: function () {
            var e = this.getMeta(),
              t = this.chart,
              n = t.scales,
              r = this.getDataset(),
              i = t.options.scales;
            (null !== e.xAxisID && e.xAxisID in n && !r.xAxisID) ||
              (e.xAxisID = r.xAxisID || i.xAxes[0].id),
              (null !== e.yAxisID && e.yAxisID in n && !r.yAxisID) ||
                (e.yAxisID = r.yAxisID || i.yAxes[0].id);
          },
          getDataset: function () {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function () {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function (e) {
            return this.chart.scales[e];
          },
          _getValueScaleId: function () {
            return this.getMeta().yAxisID;
          },
          _getIndexScaleId: function () {
            return this.getMeta().xAxisID;
          },
          _getValueScale: function () {
            return this.getScaleForId(this._getValueScaleId());
          },
          _getIndexScale: function () {
            return this.getScaleForId(this._getIndexScaleId());
          },
          reset: function () {
            this._update(!0);
          },
          destroy: function () {
            this._data && Se(this._data, this);
          },
          createMetaDataset: function () {
            var e = this.datasetElementType;
            return (
              e && new e({ _chart: this.chart, _datasetIndex: this.index })
            );
          },
          createMetaData: function (e) {
            var t = this.dataElementType;
            return (
              t &&
              new t({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: e,
              })
            );
          },
          addElements: function () {
            var e,
              t,
              n = this.getMeta(),
              r = this.getDataset().data || [],
              i = n.data;
            for (e = 0, t = r.length; e < t; ++e)
              i[e] = i[e] || this.createMetaData(e);
            n.dataset = n.dataset || this.createMetaDataset();
          },
          addElementAndReset: function (e) {
            var t = this.createMetaData(e);
            this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0);
          },
          buildOrUpdateElements: function () {
            var e,
              t,
              n = this,
              r = n.getDataset(),
              i = r.data || (r.data = []);
            n._data !== i &&
              (n._data && Se(n._data, n),
              i &&
                Object.isExtensible(i) &&
                ((t = n),
                (e = i)._chartjs
                  ? e._chartjs.listeners.push(t)
                  : (Object.defineProperty(e, "_chartjs", {
                      configurable: !0,
                      enumerable: !1,
                      value: { listeners: [t] },
                    }),
                    ke.forEach(function (t) {
                      var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                        r = e[t];
                      Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: function () {
                          var t = Array.prototype.slice.call(arguments),
                            i = r.apply(this, t);
                          return (
                            de.each(e._chartjs.listeners, function (e) {
                              "function" === typeof e[n] && e[n].apply(e, t);
                            }),
                            i
                          );
                        },
                      });
                    }))),
              (n._data = i)),
              n.resyncElements();
          },
          _configure: function () {
            this._config = de.merge(
              {},
              [this.chart.options.datasets[this._type], this.getDataset()],
              {
                merger: function (e, t, n) {
                  "_meta" !== e && "data" !== e && de._merger(e, t, n);
                },
              }
            );
          },
          _update: function (e) {
            this._configure(), (this._cachedDataOpts = null), this.update(e);
          },
          update: de.noop,
          transition: function (e) {
            for (
              var t = this.getMeta(), n = t.data || [], r = n.length, i = 0;
              i < r;
              ++i
            )
              n[i].transition(e);
            t.dataset && t.dataset.transition(e);
          },
          draw: function () {
            var e = this.getMeta(),
              t = e.data || [],
              n = t.length,
              r = 0;
            for (e.dataset && e.dataset.draw(); r < n; ++r) t[r].draw();
          },
          getStyle: function (e) {
            var t,
              n = this.getMeta(),
              r = n.dataset;
            return (
              this._configure(),
              r && void 0 === e
                ? (t = this._resolveDatasetElementOptions(r || {}))
                : ((e = e || 0),
                  (t = this._resolveDataElementOptions(n.data[e] || {}, e))),
              (!1 !== t.fill && null !== t.fill) ||
                (t.backgroundColor = "rgba(0,0,0,0)"),
              t
            );
          },
          _resolveDatasetElementOptions: function (e, t) {
            var n,
              r,
              i,
              a,
              o = this,
              l = o.chart,
              s = o._config,
              u = e.custom || {},
              c =
                l.options.elements[o.datasetElementType.prototype._type] || {},
              d = o._datasetElementOptions,
              f = {},
              h = {
                chart: l,
                dataset: o.getDataset(),
                datasetIndex: o.index,
                hover: t,
              };
            for (n = 0, r = d.length; n < r; ++n)
              (i = d[n]),
                (a = t ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i),
                (f[i] = we([u[a], s[a], c[a]], h));
            return f;
          },
          _resolveDataElementOptions: function (e, t) {
            var n = this,
              r = e && e.custom,
              i = n._cachedDataOpts;
            if (i && !r) return i;
            var a,
              o,
              l,
              s,
              u = n.chart,
              c = n._config,
              d = u.options.elements[n.dataElementType.prototype._type] || {},
              f = n._dataElementOptions,
              h = {},
              p = {
                chart: u,
                dataIndex: t,
                dataset: n.getDataset(),
                datasetIndex: n.index,
              },
              g = { cacheable: !r };
            if (((r = r || {}), de.isArray(f)))
              for (o = 0, l = f.length; o < l; ++o)
                h[(s = f[o])] = we([r[s], c[s], d[s]], p, t, g);
            else
              for (o = 0, l = (a = Object.keys(f)).length; o < l; ++o)
                h[(s = a[o])] = we([r[s], c[f[s]], c[s], d[s]], p, t, g);
            return g.cacheable && (n._cachedDataOpts = Object.freeze(h)), h;
          },
          removeHoverStyle: function (e) {
            de.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle;
          },
          setHoverStyle: function (e) {
            var t = this.chart.data.datasets[e._datasetIndex],
              n = e._index,
              r = e.custom || {},
              i = e._model,
              a = de.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: i.backgroundColor,
              borderColor: i.borderColor,
              borderWidth: i.borderWidth,
            }),
              (i.backgroundColor = we(
                [
                  r.hoverBackgroundColor,
                  t.hoverBackgroundColor,
                  a(i.backgroundColor),
                ],
                void 0,
                n
              )),
              (i.borderColor = we(
                [r.hoverBorderColor, t.hoverBorderColor, a(i.borderColor)],
                void 0,
                n
              )),
              (i.borderWidth = we(
                [r.hoverBorderWidth, t.hoverBorderWidth, i.borderWidth],
                void 0,
                n
              ));
          },
          _removeDatasetHoverStyle: function () {
            var e = this.getMeta().dataset;
            e && this.removeHoverStyle(e);
          },
          _setDatasetHoverStyle: function () {
            var e,
              t,
              n,
              r,
              i,
              a,
              o = this.getMeta().dataset,
              l = {};
            if (o) {
              for (
                a = o._model,
                  i = this._resolveDatasetElementOptions(o, !0),
                  e = 0,
                  t = (r = Object.keys(i)).length;
                e < t;
                ++e
              )
                (l[(n = r[e])] = a[n]), (a[n] = i[n]);
              o.$previousStyle = l;
            }
          },
          resyncElements: function () {
            var e = this.getMeta(),
              t = this.getDataset().data,
              n = e.data.length,
              r = t.length;
            r < n
              ? e.data.splice(r, n - r)
              : r > n && this.insertElements(n, r - n);
          },
          insertElements: function (e, t) {
            for (var n = 0; n < t; ++n) this.addElementAndReset(e + n);
          },
          onDataPush: function () {
            var e = arguments.length;
            this.insertElements(this.getDataset().data.length - e, e);
          },
          onDataPop: function () {
            this.getMeta().data.pop();
          },
          onDataShift: function () {
            this.getMeta().data.shift();
          },
          onDataSplice: function (e, t) {
            this.getMeta().data.splice(e, t),
              this.insertElements(e, arguments.length - 2);
          },
          onDataUnshift: function () {
            this.insertElements(0, arguments.length);
          },
        }),
          (Me.extend = de.inherits);
        var Te = Me,
          Ce = 2 * Math.PI;
        function Pe(e, t) {
          var n = t.startAngle,
            r = t.endAngle,
            i = t.pixelMargin,
            a = i / t.outerRadius,
            o = t.x,
            l = t.y;
          e.beginPath(),
            e.arc(o, l, t.outerRadius, n - a, r + a),
            t.innerRadius > i
              ? ((a = i / t.innerRadius),
                e.arc(o, l, t.innerRadius - i, r + a, n - a, !0))
              : e.arc(o, l, i, r + Math.PI / 2, n - Math.PI / 2),
            e.closePath(),
            e.clip();
        }
        function Ee(e, t, n) {
          var r = "inner" === t.borderAlign;
          r
            ? ((e.lineWidth = 2 * t.borderWidth), (e.lineJoin = "round"))
            : ((e.lineWidth = t.borderWidth), (e.lineJoin = "bevel")),
            n.fullCircles &&
              (function (e, t, n, r) {
                var i,
                  a = n.endAngle;
                for (
                  r &&
                    ((n.endAngle = n.startAngle + Ce),
                    Pe(e, n),
                    (n.endAngle = a),
                    n.endAngle === n.startAngle &&
                      n.fullCircles &&
                      ((n.endAngle += Ce), n.fullCircles--)),
                    e.beginPath(),
                    e.arc(
                      n.x,
                      n.y,
                      n.innerRadius,
                      n.startAngle + Ce,
                      n.startAngle,
                      !0
                    ),
                    i = 0;
                  i < n.fullCircles;
                  ++i
                )
                  e.stroke();
                for (
                  e.beginPath(),
                    e.arc(
                      n.x,
                      n.y,
                      t.outerRadius,
                      n.startAngle,
                      n.startAngle + Ce
                    ),
                    i = 0;
                  i < n.fullCircles;
                  ++i
                )
                  e.stroke();
              })(e, t, n, r),
            r && Pe(e, n),
            e.beginPath(),
            e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.endAngle),
            e.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
            e.closePath(),
            e.stroke();
        }
        oe._set("global", {
          elements: {
            arc: {
              backgroundColor: oe.global.defaultColor,
              borderColor: "#fff",
              borderWidth: 2,
              borderAlign: "center",
            },
          },
        });
        var De = ye.extend({
            _type: "arc",
            inLabelRange: function (e) {
              var t = this._view;
              return (
                !!t &&
                Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
              );
            },
            inRange: function (e, t) {
              var n = this._view;
              if (n) {
                for (
                  var r = de.getAngleFromPoint(n, { x: e, y: t }),
                    i = r.angle,
                    a = r.distance,
                    o = n.startAngle,
                    l = n.endAngle;
                  l < o;

                )
                  l += Ce;
                for (; i > l; ) i -= Ce;
                for (; i < o; ) i += Ce;
                var s = i >= o && i <= l,
                  u = a >= n.innerRadius && a <= n.outerRadius;
                return s && u;
              }
              return !1;
            },
            getCenterPoint: function () {
              var e = this._view,
                t = (e.startAngle + e.endAngle) / 2,
                n = (e.innerRadius + e.outerRadius) / 2;
              return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n };
            },
            getArea: function () {
              var e = this._view;
              return (
                Math.PI *
                ((e.endAngle - e.startAngle) / (2 * Math.PI)) *
                (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
              );
            },
            tooltipPosition: function () {
              var e = this._view,
                t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
              return { x: e.x + Math.cos(t) * n, y: e.y + Math.sin(t) * n };
            },
            draw: function () {
              var e,
                t = this._chart.ctx,
                n = this._view,
                r = "inner" === n.borderAlign ? 0.33 : 0,
                i = {
                  x: n.x,
                  y: n.y,
                  innerRadius: n.innerRadius,
                  outerRadius: Math.max(n.outerRadius - r, 0),
                  pixelMargin: r,
                  startAngle: n.startAngle,
                  endAngle: n.endAngle,
                  fullCircles: Math.floor(n.circumference / Ce),
                };
              if (
                (t.save(),
                (t.fillStyle = n.backgroundColor),
                (t.strokeStyle = n.borderColor),
                i.fullCircles)
              ) {
                for (
                  i.endAngle = i.startAngle + Ce,
                    t.beginPath(),
                    t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                    t.arc(
                      i.x,
                      i.y,
                      i.innerRadius,
                      i.endAngle,
                      i.startAngle,
                      !0
                    ),
                    t.closePath(),
                    e = 0;
                  e < i.fullCircles;
                  ++e
                )
                  t.fill();
                i.endAngle = i.startAngle + (n.circumference % Ce);
              }
              t.beginPath(),
                t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                t.closePath(),
                t.fill(),
                n.borderWidth && Ee(t, n, i),
                t.restore();
            },
          }),
          Oe = de.valueOrDefault,
          Ae = oe.global.defaultColor;
        oe._set("global", {
          elements: {
            line: {
              tension: 0.4,
              backgroundColor: Ae,
              borderWidth: 3,
              borderColor: Ae,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              capBezierPoints: !0,
              fill: !0,
            },
          },
        });
        var Ie = ye.extend({
            _type: "line",
            draw: function () {
              var e,
                t,
                n,
                r = this,
                i = r._view,
                a = r._chart.ctx,
                o = i.spanGaps,
                l = r._children.slice(),
                s = oe.global,
                u = s.elements.line,
                c = -1,
                d = r._loop;
              if (l.length) {
                if (r._loop) {
                  for (e = 0; e < l.length; ++e)
                    if (
                      ((t = de.previousItem(l, e)),
                      !l[e]._view.skip && t._view.skip)
                    ) {
                      (l = l.slice(e).concat(l.slice(0, e))), (d = o);
                      break;
                    }
                  d && l.push(l[0]);
                }
                for (
                  a.save(),
                    a.lineCap = i.borderCapStyle || u.borderCapStyle,
                    a.setLineDash &&
                      a.setLineDash(i.borderDash || u.borderDash),
                    a.lineDashOffset = Oe(
                      i.borderDashOffset,
                      u.borderDashOffset
                    ),
                    a.lineJoin = i.borderJoinStyle || u.borderJoinStyle,
                    a.lineWidth = Oe(i.borderWidth, u.borderWidth),
                    a.strokeStyle = i.borderColor || s.defaultColor,
                    a.beginPath(),
                    (n = l[0]._view).skip || (a.moveTo(n.x, n.y), (c = 0)),
                    e = 1;
                  e < l.length;
                  ++e
                )
                  (n = l[e]._view),
                    (t = -1 === c ? de.previousItem(l, e) : l[c]),
                    n.skip ||
                      ((c !== e - 1 && !o) || -1 === c
                        ? a.moveTo(n.x, n.y)
                        : de.canvas.lineTo(a, t._view, n),
                      (c = e));
                d && a.closePath(), a.stroke(), a.restore();
              }
            },
          }),
          Fe = de.valueOrDefault,
          Ne = oe.global.defaultColor;
        function Le(e) {
          var t = this._view;
          return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius;
        }
        oe._set("global", {
          elements: {
            point: {
              radius: 3,
              pointStyle: "circle",
              backgroundColor: Ne,
              borderColor: Ne,
              borderWidth: 1,
              hitRadius: 1,
              hoverRadius: 4,
              hoverBorderWidth: 1,
            },
          },
        });
        var Re = ye.extend({
            _type: "point",
            inRange: function (e, t) {
              var n = this._view;
              return (
                !!n &&
                Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) <
                  Math.pow(n.hitRadius + n.radius, 2)
              );
            },
            inLabelRange: Le,
            inXRange: Le,
            inYRange: function (e) {
              var t = this._view;
              return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius;
            },
            getCenterPoint: function () {
              var e = this._view;
              return { x: e.x, y: e.y };
            },
            getArea: function () {
              return Math.PI * Math.pow(this._view.radius, 2);
            },
            tooltipPosition: function () {
              var e = this._view;
              return { x: e.x, y: e.y, padding: e.radius + e.borderWidth };
            },
            draw: function (e) {
              var t = this._view,
                n = this._chart.ctx,
                r = t.pointStyle,
                i = t.rotation,
                a = t.radius,
                o = t.x,
                l = t.y,
                s = oe.global,
                u = s.defaultColor;
              t.skip ||
                ((void 0 === e || de.canvas._isPointInArea(t, e)) &&
                  ((n.strokeStyle = t.borderColor || u),
                  (n.lineWidth = Fe(
                    t.borderWidth,
                    s.elements.point.borderWidth
                  )),
                  (n.fillStyle = t.backgroundColor || u),
                  de.canvas.drawPoint(n, r, a, o, l, i)));
            },
          }),
          ze = oe.global.defaultColor;
        function We(e) {
          return e && void 0 !== e.width;
        }
        function je(e) {
          var t, n, r, i, a;
          return (
            We(e)
              ? ((a = e.width / 2),
                (t = e.x - a),
                (n = e.x + a),
                (r = Math.min(e.y, e.base)),
                (i = Math.max(e.y, e.base)))
              : ((a = e.height / 2),
                (t = Math.min(e.x, e.base)),
                (n = Math.max(e.x, e.base)),
                (r = e.y - a),
                (i = e.y + a)),
            { left: t, top: r, right: n, bottom: i }
          );
        }
        function Ve(e, t, n) {
          return e === t ? n : e === n ? t : e;
        }
        function Ye(e, t, n) {
          var r,
            i,
            a,
            o,
            l = e.borderWidth,
            s = (function (e) {
              var t = e.borderSkipped,
                n = {};
              return t
                ? (e.horizontal
                    ? e.base > e.x && (t = Ve(t, "left", "right"))
                    : e.base < e.y && (t = Ve(t, "bottom", "top")),
                  (n[t] = !0),
                  n)
                : n;
            })(e);
          return (
            de.isObject(l)
              ? ((r = +l.top || 0),
                (i = +l.right || 0),
                (a = +l.bottom || 0),
                (o = +l.left || 0))
              : (r = i = a = o = +l || 0),
            {
              t: s.top || r < 0 ? 0 : r > n ? n : r,
              r: s.right || i < 0 ? 0 : i > t ? t : i,
              b: s.bottom || a < 0 ? 0 : a > n ? n : a,
              l: s.left || o < 0 ? 0 : o > t ? t : o,
            }
          );
        }
        function Ue(e, t, n) {
          var r = null === t,
            i = null === n,
            a = !(!e || (r && i)) && je(e);
          return (
            a &&
            (r || (t >= a.left && t <= a.right)) &&
            (i || (n >= a.top && n <= a.bottom))
          );
        }
        oe._set("global", {
          elements: {
            rectangle: {
              backgroundColor: ze,
              borderColor: ze,
              borderSkipped: "bottom",
              borderWidth: 0,
            },
          },
        });
        var Be = ye.extend({
            _type: "rectangle",
            draw: function () {
              var e = this._chart.ctx,
                t = this._view,
                n = (function (e) {
                  var t = je(e),
                    n = t.right - t.left,
                    r = t.bottom - t.top,
                    i = Ye(e, n / 2, r / 2);
                  return {
                    outer: { x: t.left, y: t.top, w: n, h: r },
                    inner: {
                      x: t.left + i.l,
                      y: t.top + i.t,
                      w: n - i.l - i.r,
                      h: r - i.t - i.b,
                    },
                  };
                })(t),
                r = n.outer,
                i = n.inner;
              (e.fillStyle = t.backgroundColor),
                e.fillRect(r.x, r.y, r.w, r.h),
                (r.w === i.w && r.h === i.h) ||
                  (e.save(),
                  e.beginPath(),
                  e.rect(r.x, r.y, r.w, r.h),
                  e.clip(),
                  (e.fillStyle = t.borderColor),
                  e.rect(i.x, i.y, i.w, i.h),
                  e.fill("evenodd"),
                  e.restore());
            },
            height: function () {
              var e = this._view;
              return e.base - e.y;
            },
            inRange: function (e, t) {
              return Ue(this._view, e, t);
            },
            inLabelRange: function (e, t) {
              var n = this._view;
              return We(n) ? Ue(n, e, null) : Ue(n, null, t);
            },
            inXRange: function (e) {
              return Ue(this._view, e, null);
            },
            inYRange: function (e) {
              return Ue(this._view, null, e);
            },
            getCenterPoint: function () {
              var e,
                t,
                n = this._view;
              return (
                We(n)
                  ? ((e = n.x), (t = (n.y + n.base) / 2))
                  : ((e = (n.x + n.base) / 2), (t = n.y)),
                { x: e, y: t }
              );
            },
            getArea: function () {
              var e = this._view;
              return We(e)
                ? e.width * Math.abs(e.y - e.base)
                : e.height * Math.abs(e.x - e.base);
            },
            tooltipPosition: function () {
              var e = this._view;
              return { x: e.x, y: e.y };
            },
          }),
          He = {},
          qe = De,
          Ge = Ie,
          $e = Re,
          Ke = Be;
        (He.Arc = qe), (He.Line = Ge), (He.Point = $e), (He.Rectangle = Ke);
        var Qe = de._deprecated,
          Ze = de.valueOrDefault;
        function Xe(e, t, n) {
          var r,
            i,
            a = n.barThickness,
            o = t.stackCount,
            l = t.pixels[e],
            s = de.isNullOrUndef(a)
              ? (function (e, t) {
                  var n,
                    r,
                    i,
                    a,
                    o = e._length;
                  for (i = 1, a = t.length; i < a; ++i)
                    o = Math.min(o, Math.abs(t[i] - t[i - 1]));
                  for (i = 0, a = e.getTicks().length; i < a; ++i)
                    (r = e.getPixelForTick(i)),
                      (o = i > 0 ? Math.min(o, Math.abs(r - n)) : o),
                      (n = r);
                  return o;
                })(t.scale, t.pixels)
              : -1;
          return (
            de.isNullOrUndef(a)
              ? ((r = s * n.categoryPercentage), (i = n.barPercentage))
              : ((r = a * o), (i = 1)),
            { chunk: r / o, ratio: i, start: l - r / 2 }
          );
        }
        oe._set("bar", {
          hover: { mode: "label" },
          scales: {
            xAxes: [
              {
                type: "category",
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
            yAxes: [{ type: "linear" }],
          },
        }),
          oe._set("global", {
            datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
          });
        var Je = Te.extend({
            dataElementType: He.Rectangle,
            _dataElementOptions: [
              "backgroundColor",
              "borderColor",
              "borderSkipped",
              "borderWidth",
              "barPercentage",
              "barThickness",
              "categoryPercentage",
              "maxBarThickness",
              "minBarLength",
            ],
            initialize: function () {
              var e,
                t,
                n = this;
              Te.prototype.initialize.apply(n, arguments),
                ((e = n.getMeta()).stack = n.getDataset().stack),
                (e.bar = !0),
                (t = n._getIndexScale().options),
                Qe(
                  "bar chart",
                  t.barPercentage,
                  "scales.[x/y]Axes.barPercentage",
                  "dataset.barPercentage"
                ),
                Qe(
                  "bar chart",
                  t.barThickness,
                  "scales.[x/y]Axes.barThickness",
                  "dataset.barThickness"
                ),
                Qe(
                  "bar chart",
                  t.categoryPercentage,
                  "scales.[x/y]Axes.categoryPercentage",
                  "dataset.categoryPercentage"
                ),
                Qe(
                  "bar chart",
                  n._getValueScale().options.minBarLength,
                  "scales.[x/y]Axes.minBarLength",
                  "dataset.minBarLength"
                ),
                Qe(
                  "bar chart",
                  t.maxBarThickness,
                  "scales.[x/y]Axes.maxBarThickness",
                  "dataset.maxBarThickness"
                );
            },
            update: function (e) {
              var t,
                n,
                r = this.getMeta().data;
              for (
                this._ruler = this.getRuler(), t = 0, n = r.length;
                t < n;
                ++t
              )
                this.updateElement(r[t], t, e);
            },
            updateElement: function (e, t, n) {
              var r = this,
                i = r.getMeta(),
                a = r.getDataset(),
                o = r._resolveDataElementOptions(e, t);
              (e._xScale = r.getScaleForId(i.xAxisID)),
                (e._yScale = r.getScaleForId(i.yAxisID)),
                (e._datasetIndex = r.index),
                (e._index = t),
                (e._model = {
                  backgroundColor: o.backgroundColor,
                  borderColor: o.borderColor,
                  borderSkipped: o.borderSkipped,
                  borderWidth: o.borderWidth,
                  datasetLabel: a.label,
                  label: r.chart.data.labels[t],
                }),
                de.isArray(a.data[t]) && (e._model.borderSkipped = null),
                r._updateElementGeometry(e, t, n, o),
                e.pivot();
            },
            _updateElementGeometry: function (e, t, n, r) {
              var i = this,
                a = e._model,
                o = i._getValueScale(),
                l = o.getBasePixel(),
                s = o.isHorizontal(),
                u = i._ruler || i.getRuler(),
                c = i.calculateBarValuePixels(i.index, t, r),
                d = i.calculateBarIndexPixels(i.index, t, u, r);
              (a.horizontal = s),
                (a.base = n ? l : c.base),
                (a.x = s ? (n ? l : c.head) : d.center),
                (a.y = s ? d.center : n ? l : c.head),
                (a.height = s ? d.size : void 0),
                (a.width = s ? void 0 : d.size);
            },
            _getStacks: function (e) {
              var t,
                n,
                r = this._getIndexScale(),
                i = r._getMatchingVisibleMetas(this._type),
                a = r.options.stacked,
                o = i.length,
                l = [];
              for (
                t = 0;
                t < o &&
                ((n = i[t]),
                (!1 === a ||
                  -1 === l.indexOf(n.stack) ||
                  (void 0 === a && void 0 === n.stack)) &&
                  l.push(n.stack),
                n.index !== e);
                ++t
              );
              return l;
            },
            getStackCount: function () {
              return this._getStacks().length;
            },
            getStackIndex: function (e, t) {
              var n = this._getStacks(e),
                r = void 0 !== t ? n.indexOf(t) : -1;
              return -1 === r ? n.length - 1 : r;
            },
            getRuler: function () {
              var e,
                t,
                n = this._getIndexScale(),
                r = [];
              for (e = 0, t = this.getMeta().data.length; e < t; ++e)
                r.push(n.getPixelForValue(null, e, this.index));
              return {
                pixels: r,
                start: n._startPixel,
                end: n._endPixel,
                stackCount: this.getStackCount(),
                scale: n,
              };
            },
            calculateBarValuePixels: function (e, t, n) {
              var r,
                i,
                a,
                o,
                l,
                s,
                u,
                c = this.chart,
                d = this._getValueScale(),
                f = d.isHorizontal(),
                h = c.data.datasets,
                p = d._getMatchingVisibleMetas(this._type),
                g = d._parseValue(h[e].data[t]),
                m = n.minBarLength,
                v = d.options.stacked,
                y = this.getMeta().stack,
                b =
                  void 0 === g.start
                    ? 0
                    : g.max >= 0 && g.min >= 0
                    ? g.min
                    : g.max,
                x =
                  void 0 === g.start
                    ? g.end
                    : g.max >= 0 && g.min >= 0
                    ? g.max - g.min
                    : g.min - g.max,
                _ = p.length;
              if (v || (void 0 === v && void 0 !== y))
                for (r = 0; r < _ && (i = p[r]).index !== e; ++r)
                  i.stack === y &&
                    ((a =
                      void 0 === (u = d._parseValue(h[i.index].data[t])).start
                        ? u.end
                        : u.min >= 0 && u.max >= 0
                        ? u.max
                        : u.min),
                    ((g.min < 0 && a < 0) || (g.max >= 0 && a > 0)) &&
                      (b += a));
              return (
                (o = d.getPixelForValue(b)),
                (s = (l = d.getPixelForValue(b + x)) - o),
                void 0 !== m &&
                  Math.abs(s) < m &&
                  ((s = m),
                  (l = (x >= 0 && !f) || (x < 0 && f) ? o - m : o + m)),
                { size: s, base: o, head: l, center: l + s / 2 }
              );
            },
            calculateBarIndexPixels: function (e, t, n, r) {
              var i =
                  "flex" === r.barThickness
                    ? (function (e, t, n) {
                        var r,
                          i = t.pixels,
                          a = i[e],
                          o = e > 0 ? i[e - 1] : null,
                          l = e < i.length - 1 ? i[e + 1] : null,
                          s = n.categoryPercentage;
                        return (
                          null === o &&
                            (o = a - (null === l ? t.end - t.start : l - a)),
                          null === l && (l = a + a - o),
                          (r = a - ((a - Math.min(o, l)) / 2) * s),
                          {
                            chunk: ((Math.abs(l - o) / 2) * s) / t.stackCount,
                            ratio: n.barPercentage,
                            start: r,
                          }
                        );
                      })(t, n, r)
                    : Xe(t, n, r),
                a = this.getStackIndex(e, this.getMeta().stack),
                o = i.start + i.chunk * a + i.chunk / 2,
                l = Math.min(Ze(r.maxBarThickness, 1 / 0), i.chunk * i.ratio);
              return { base: o - l / 2, head: o + l / 2, center: o, size: l };
            },
            draw: function () {
              var e = this.chart,
                t = this._getValueScale(),
                n = this.getMeta().data,
                r = this.getDataset(),
                i = n.length,
                a = 0;
              for (de.canvas.clipArea(e.ctx, e.chartArea); a < i; ++a) {
                var o = t._parseValue(r.data[a]);
                isNaN(o.min) || isNaN(o.max) || n[a].draw();
              }
              de.canvas.unclipArea(e.ctx);
            },
            _resolveDataElementOptions: function () {
              var e = this,
                t = de.extend(
                  {},
                  Te.prototype._resolveDataElementOptions.apply(e, arguments)
                ),
                n = e._getIndexScale().options,
                r = e._getValueScale().options;
              return (
                (t.barPercentage = Ze(n.barPercentage, t.barPercentage)),
                (t.barThickness = Ze(n.barThickness, t.barThickness)),
                (t.categoryPercentage = Ze(
                  n.categoryPercentage,
                  t.categoryPercentage
                )),
                (t.maxBarThickness = Ze(n.maxBarThickness, t.maxBarThickness)),
                (t.minBarLength = Ze(r.minBarLength, t.minBarLength)),
                t
              );
            },
          }),
          et = de.valueOrDefault,
          tt = de.options.resolve;
        oe._set("bubble", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
            yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (e, t) {
                var n = t.datasets[e.datasetIndex].label || "",
                  r = t.datasets[e.datasetIndex].data[e.index];
                return (
                  n + ": (" + e.xLabel + ", " + e.yLabel + ", " + r.r + ")"
                );
              },
            },
          },
        });
        var nt = Te.extend({
            dataElementType: He.Point,
            _dataElementOptions: [
              "backgroundColor",
              "borderColor",
              "borderWidth",
              "hoverBackgroundColor",
              "hoverBorderColor",
              "hoverBorderWidth",
              "hoverRadius",
              "hitRadius",
              "pointStyle",
              "rotation",
            ],
            update: function (e) {
              var t = this,
                n = t.getMeta().data;
              de.each(n, function (n, r) {
                t.updateElement(n, r, e);
              });
            },
            updateElement: function (e, t, n) {
              var r = this,
                i = r.getMeta(),
                a = e.custom || {},
                o = r.getScaleForId(i.xAxisID),
                l = r.getScaleForId(i.yAxisID),
                s = r._resolveDataElementOptions(e, t),
                u = r.getDataset().data[t],
                c = r.index,
                d = n
                  ? o.getPixelForDecimal(0.5)
                  : o.getPixelForValue("object" === typeof u ? u : NaN, t, c),
                f = n ? l.getBasePixel() : l.getPixelForValue(u, t, c);
              (e._xScale = o),
                (e._yScale = l),
                (e._options = s),
                (e._datasetIndex = c),
                (e._index = t),
                (e._model = {
                  backgroundColor: s.backgroundColor,
                  borderColor: s.borderColor,
                  borderWidth: s.borderWidth,
                  hitRadius: s.hitRadius,
                  pointStyle: s.pointStyle,
                  rotation: s.rotation,
                  radius: n ? 0 : s.radius,
                  skip: a.skip || isNaN(d) || isNaN(f),
                  x: d,
                  y: f,
                }),
                e.pivot();
            },
            setHoverStyle: function (e) {
              var t = e._model,
                n = e._options,
                r = de.getHoverColor;
              (e.$previousStyle = {
                backgroundColor: t.backgroundColor,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                radius: t.radius,
              }),
                (t.backgroundColor = et(
                  n.hoverBackgroundColor,
                  r(n.backgroundColor)
                )),
                (t.borderColor = et(n.hoverBorderColor, r(n.borderColor))),
                (t.borderWidth = et(n.hoverBorderWidth, n.borderWidth)),
                (t.radius = n.radius + n.hoverRadius);
            },
            _resolveDataElementOptions: function (e, t) {
              var n = this,
                r = n.chart,
                i = n.getDataset(),
                a = e.custom || {},
                o = i.data[t] || {},
                l = Te.prototype._resolveDataElementOptions.apply(n, arguments),
                s = {
                  chart: r,
                  dataIndex: t,
                  dataset: i,
                  datasetIndex: n.index,
                };
              return (
                n._cachedDataOpts === l && (l = de.extend({}, l)),
                (l.radius = tt(
                  [
                    a.radius,
                    o.r,
                    n._config.radius,
                    r.options.elements.point.radius,
                  ],
                  s,
                  t
                )),
                l
              );
            },
          }),
          rt = de.valueOrDefault,
          it = Math.PI,
          at = 2 * it,
          ot = it / 2;
        oe._set("doughnut", {
          animation: { animateRotate: !0, animateScale: !1 },
          hover: { mode: "single" },
          legendCallback: function (e) {
            var t,
              n,
              r,
              i = document.createElement("ul"),
              a = e.data,
              o = a.datasets,
              l = a.labels;
            if ((i.setAttribute("class", e.id + "-legend"), o.length))
              for (t = 0, n = o[0].data.length; t < n; ++t)
                ((r = i.appendChild(document.createElement("li"))).appendChild(
                  document.createElement("span")
                ).style.backgroundColor = o[0].backgroundColor[t]),
                  l[t] && r.appendChild(document.createTextNode(l[t]));
            return i.outerHTML;
          },
          legend: {
            labels: {
              generateLabels: function (e) {
                var t = e.data;
                return t.labels.length && t.datasets.length
                  ? t.labels.map(function (n, r) {
                      var i = e.getDatasetMeta(0),
                        a = i.controller.getStyle(r);
                      return {
                        text: n,
                        fillStyle: a.backgroundColor,
                        strokeStyle: a.borderColor,
                        lineWidth: a.borderWidth,
                        hidden:
                          isNaN(t.datasets[0].data[r]) || i.data[r].hidden,
                        index: r,
                      };
                    })
                  : [];
              },
            },
            onClick: function (e, t) {
              var n,
                r,
                i,
                a = t.index,
                o = this.chart;
              for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
                (i = o.getDatasetMeta(n)).data[a] &&
                  (i.data[a].hidden = !i.data[a].hidden);
              o.update();
            },
          },
          cutoutPercentage: 50,
          rotation: -ot,
          circumference: at,
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (e, t) {
                var n = t.labels[e.index],
                  r = ": " + t.datasets[e.datasetIndex].data[e.index];
                return de.isArray(n) ? ((n = n.slice())[0] += r) : (n += r), n;
              },
            },
          },
        });
        var lt = Te.extend({
          dataElementType: He.Arc,
          linkScales: de.noop,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
          ],
          getRingIndex: function (e) {
            for (var t = 0, n = 0; n < e; ++n)
              this.chart.isDatasetVisible(n) && ++t;
            return t;
          },
          update: function (e) {
            var t,
              n,
              r,
              i,
              a = this,
              o = a.chart,
              l = o.chartArea,
              s = o.options,
              u = 1,
              c = 1,
              d = 0,
              f = 0,
              h = a.getMeta(),
              p = h.data,
              g = s.cutoutPercentage / 100 || 0,
              m = s.circumference,
              v = a._getRingWeight(a.index);
            if (m < at) {
              var y = s.rotation % at,
                b = (y += y >= it ? -at : y < -it ? at : 0) + m,
                x = Math.cos(y),
                _ = Math.sin(y),
                w = Math.cos(b),
                k = Math.sin(b),
                S = (y <= 0 && b >= 0) || b >= at,
                M = (y <= ot && b >= ot) || b >= at + ot,
                T = (y <= -ot && b >= -ot) || b >= it + ot,
                C = y === -it || b >= it ? -1 : Math.min(x, x * g, w, w * g),
                P = T ? -1 : Math.min(_, _ * g, k, k * g),
                E = S ? 1 : Math.max(x, x * g, w, w * g),
                D = M ? 1 : Math.max(_, _ * g, k, k * g);
              (u = (E - C) / 2),
                (c = (D - P) / 2),
                (d = -(E + C) / 2),
                (f = -(D + P) / 2);
            }
            for (r = 0, i = p.length; r < i; ++r)
              p[r]._options = a._resolveDataElementOptions(p[r], r);
            for (
              o.borderWidth = a.getMaxBorderWidth(),
                t = (l.right - l.left - o.borderWidth) / u,
                n = (l.bottom - l.top - o.borderWidth) / c,
                o.outerRadius = Math.max(Math.min(t, n) / 2, 0),
                o.innerRadius = Math.max(o.outerRadius * g, 0),
                o.radiusLength =
                  (o.outerRadius - o.innerRadius) /
                  (a._getVisibleDatasetWeightTotal() || 1),
                o.offsetX = d * o.outerRadius,
                o.offsetY = f * o.outerRadius,
                h.total = a.calculateTotal(),
                a.outerRadius =
                  o.outerRadius -
                  o.radiusLength * a._getRingWeightOffset(a.index),
                a.innerRadius = Math.max(a.outerRadius - o.radiusLength * v, 0),
                r = 0,
                i = p.length;
              r < i;
              ++r
            )
              a.updateElement(p[r], r, e);
          },
          updateElement: function (e, t, n) {
            var r = this,
              i = r.chart,
              a = i.chartArea,
              o = i.options,
              l = o.animation,
              s = (a.left + a.right) / 2,
              u = (a.top + a.bottom) / 2,
              c = o.rotation,
              d = o.rotation,
              f = r.getDataset(),
              h =
                n && l.animateRotate
                  ? 0
                  : e.hidden
                  ? 0
                  : r.calculateCircumference(f.data[t]) *
                    (o.circumference / at),
              p = n && l.animateScale ? 0 : r.innerRadius,
              g = n && l.animateScale ? 0 : r.outerRadius,
              m = e._options || {};
            de.extend(e, {
              _datasetIndex: r.index,
              _index: t,
              _model: {
                backgroundColor: m.backgroundColor,
                borderColor: m.borderColor,
                borderWidth: m.borderWidth,
                borderAlign: m.borderAlign,
                x: s + i.offsetX,
                y: u + i.offsetY,
                startAngle: c,
                endAngle: d,
                circumference: h,
                outerRadius: g,
                innerRadius: p,
                label: de.valueAtIndexOrDefault(f.label, t, i.data.labels[t]),
              },
            });
            var v = e._model;
            (n && l.animateRotate) ||
              ((v.startAngle =
                0 === t ? o.rotation : r.getMeta().data[t - 1]._model.endAngle),
              (v.endAngle = v.startAngle + v.circumference)),
              e.pivot();
          },
          calculateTotal: function () {
            var e,
              t = this.getDataset(),
              n = this.getMeta(),
              r = 0;
            return (
              de.each(n.data, function (n, i) {
                (e = t.data[i]), isNaN(e) || n.hidden || (r += Math.abs(e));
              }),
              r
            );
          },
          calculateCircumference: function (e) {
            var t = this.getMeta().total;
            return t > 0 && !isNaN(e) ? at * (Math.abs(e) / t) : 0;
          },
          getMaxBorderWidth: function (e) {
            var t,
              n,
              r,
              i,
              a,
              o,
              l,
              s,
              u = 0,
              c = this.chart;
            if (!e)
              for (t = 0, n = c.data.datasets.length; t < n; ++t)
                if (c.isDatasetVisible(t)) {
                  (e = (r = c.getDatasetMeta(t)).data),
                    t !== this.index && (a = r.controller);
                  break;
                }
            if (!e) return 0;
            for (t = 0, n = e.length; t < n; ++t)
              (i = e[t]),
                a
                  ? (a._configure(), (o = a._resolveDataElementOptions(i, t)))
                  : (o = i._options),
                "inner" !== o.borderAlign &&
                  ((l = o.borderWidth),
                  (u = (s = o.hoverBorderWidth) > (u = l > u ? l : u) ? s : u));
            return u;
          },
          setHoverStyle: function (e) {
            var t = e._model,
              n = e._options,
              r = de.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
            }),
              (t.backgroundColor = rt(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (t.borderColor = rt(n.hoverBorderColor, r(n.borderColor))),
              (t.borderWidth = rt(n.hoverBorderWidth, n.borderWidth));
          },
          _getRingWeightOffset: function (e) {
            for (var t = 0, n = 0; n < e; ++n)
              this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n));
            return t;
          },
          _getRingWeight: function (e) {
            return Math.max(rt(this.chart.data.datasets[e].weight, 1), 0);
          },
          _getVisibleDatasetWeightTotal: function () {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
          },
        });
        oe._set("horizontalBar", {
          hover: { mode: "index", axis: "y" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom" }],
            yAxes: [
              {
                type: "category",
                position: "left",
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
          },
          elements: { rectangle: { borderSkipped: "left" } },
          tooltips: { mode: "index", axis: "y" },
        }),
          oe._set("global", {
            datasets: {
              horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
            },
          });
        var st = Je.extend({
            _getValueScaleId: function () {
              return this.getMeta().xAxisID;
            },
            _getIndexScaleId: function () {
              return this.getMeta().yAxisID;
            },
          }),
          ut = de.valueOrDefault,
          ct = de.options.resolve,
          dt = de.canvas._isPointInArea;
        oe._set("line", {
          showLines: !0,
          spanGaps: !1,
          hover: { mode: "label" },
          scales: {
            xAxes: [{ type: "category", id: "x-axis-0" }],
            yAxes: [{ type: "linear", id: "y-axis-0" }],
          },
        });
        var ft = Te.extend({
            datasetElementType: He.Line,
            dataElementType: He.Point,
            _datasetElementOptions: [
              "backgroundColor",
              "borderCapStyle",
              "borderColor",
              "borderDash",
              "borderDashOffset",
              "borderJoinStyle",
              "borderWidth",
              "cubicInterpolationMode",
              "fill",
            ],
            _dataElementOptions: {
              backgroundColor: "pointBackgroundColor",
              borderColor: "pointBorderColor",
              borderWidth: "pointBorderWidth",
              hitRadius: "pointHitRadius",
              hoverBackgroundColor: "pointHoverBackgroundColor",
              hoverBorderColor: "pointHoverBorderColor",
              hoverBorderWidth: "pointHoverBorderWidth",
              hoverRadius: "pointHoverRadius",
              pointStyle: "pointStyle",
              radius: "pointRadius",
              rotation: "pointRotation",
            },
            update: function (e) {
              var t,
                n,
                r = this,
                i = r.getMeta(),
                a = i.dataset,
                o = i.data || [],
                l = r.chart.options,
                s = r._config,
                u = (r._showLine = ut(s.showLine, l.showLines));
              for (
                r._xScale = r.getScaleForId(i.xAxisID),
                  r._yScale = r.getScaleForId(i.yAxisID),
                  u &&
                    (void 0 !== s.tension &&
                      void 0 === s.lineTension &&
                      (s.lineTension = s.tension),
                    (a._scale = r._yScale),
                    (a._datasetIndex = r.index),
                    (a._children = o),
                    (a._model = r._resolveDatasetElementOptions(a)),
                    a.pivot()),
                  t = 0,
                  n = o.length;
                t < n;
                ++t
              )
                r.updateElement(o[t], t, e);
              for (
                u && 0 !== a._model.tension && r.updateBezierControlPoints(),
                  t = 0,
                  n = o.length;
                t < n;
                ++t
              )
                o[t].pivot();
            },
            updateElement: function (e, t, n) {
              var r,
                i,
                a = this,
                o = a.getMeta(),
                l = e.custom || {},
                s = a.getDataset(),
                u = a.index,
                c = s.data[t],
                d = a._xScale,
                f = a._yScale,
                h = o.dataset._model,
                p = a._resolveDataElementOptions(e, t);
              (r = d.getPixelForValue("object" === typeof c ? c : NaN, t, u)),
                (i = n ? f.getBasePixel() : a.calculatePointY(c, t, u)),
                (e._xScale = d),
                (e._yScale = f),
                (e._options = p),
                (e._datasetIndex = u),
                (e._index = t),
                (e._model = {
                  x: r,
                  y: i,
                  skip: l.skip || isNaN(r) || isNaN(i),
                  radius: p.radius,
                  pointStyle: p.pointStyle,
                  rotation: p.rotation,
                  backgroundColor: p.backgroundColor,
                  borderColor: p.borderColor,
                  borderWidth: p.borderWidth,
                  tension: ut(l.tension, h ? h.tension : 0),
                  steppedLine: !!h && h.steppedLine,
                  hitRadius: p.hitRadius,
                });
            },
            _resolveDatasetElementOptions: function (e) {
              var t = this,
                n = t._config,
                r = e.custom || {},
                i = t.chart.options,
                a = i.elements.line,
                o = Te.prototype._resolveDatasetElementOptions.apply(
                  t,
                  arguments
                );
              return (
                (o.spanGaps = ut(n.spanGaps, i.spanGaps)),
                (o.tension = ut(n.lineTension, a.tension)),
                (o.steppedLine = ct([r.steppedLine, n.steppedLine, a.stepped])),
                o
              );
            },
            calculatePointY: function (e, t, n) {
              var r,
                i,
                a,
                o,
                l = this.chart,
                s = this._yScale,
                u = 0,
                c = 0,
                d = +s.getRightValue(e),
                f = l._getSortedVisibleDatasetMetas(),
                h = f.length;
              if (s.options.stacked) {
                for (r = 0; r < h && (a = f[r]).index !== n; ++r)
                  (i = l.data.datasets[a.index]),
                    "line" === a.type &&
                      a.yAxisID === s.id &&
                      ((o = +s.getRightValue(i.data[t])) < 0
                        ? (c += o || 0)
                        : (u += o || 0));
                return d < 0
                  ? s.getPixelForValue(c + d)
                  : s.getPixelForValue(u + d);
              }
              return s.getPixelForValue(e);
            },
            updateBezierControlPoints: function () {
              var e,
                t,
                n,
                r,
                i = this.chart,
                a = this.getMeta(),
                o = a.dataset._model,
                l = i.chartArea,
                s = a.data || [];
              function u(e, t, n) {
                return Math.max(Math.min(e, n), t);
              }
              if (
                (o.spanGaps &&
                  (s = s.filter(function (e) {
                    return !e._model.skip;
                  })),
                "monotone" === o.cubicInterpolationMode)
              )
                de.splineCurveMonotone(s);
              else
                for (e = 0, t = s.length; e < t; ++e)
                  (n = s[e]._model),
                    (r = de.splineCurve(
                      de.previousItem(s, e)._model,
                      n,
                      de.nextItem(s, e)._model,
                      o.tension
                    )),
                    (n.controlPointPreviousX = r.previous.x),
                    (n.controlPointPreviousY = r.previous.y),
                    (n.controlPointNextX = r.next.x),
                    (n.controlPointNextY = r.next.y);
              if (i.options.elements.line.capBezierPoints)
                for (e = 0, t = s.length; e < t; ++e)
                  (n = s[e]._model),
                    dt(n, l) &&
                      (e > 0 &&
                        dt(s[e - 1]._model, l) &&
                        ((n.controlPointPreviousX = u(
                          n.controlPointPreviousX,
                          l.left,
                          l.right
                        )),
                        (n.controlPointPreviousY = u(
                          n.controlPointPreviousY,
                          l.top,
                          l.bottom
                        ))),
                      e < s.length - 1 &&
                        dt(s[e + 1]._model, l) &&
                        ((n.controlPointNextX = u(
                          n.controlPointNextX,
                          l.left,
                          l.right
                        )),
                        (n.controlPointNextY = u(
                          n.controlPointNextY,
                          l.top,
                          l.bottom
                        ))));
            },
            draw: function () {
              var e,
                t = this.chart,
                n = this.getMeta(),
                r = n.data || [],
                i = t.chartArea,
                a = 0,
                o = r.length;
              for (
                this._showLine &&
                ((e = (n.dataset._model.borderWidth || 0) / 2),
                de.canvas.clipArea(t.ctx, {
                  left: i.left - e,
                  right: i.right + e,
                  top: i.top - e,
                  bottom: i.bottom + e,
                }),
                n.dataset.draw(),
                de.canvas.unclipArea(t.ctx));
                a < o;
                ++a
              )
                r[a].draw(i);
            },
            setHoverStyle: function (e) {
              var t = e._model,
                n = e._options,
                r = de.getHoverColor;
              (e.$previousStyle = {
                backgroundColor: t.backgroundColor,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                radius: t.radius,
              }),
                (t.backgroundColor = ut(
                  n.hoverBackgroundColor,
                  r(n.backgroundColor)
                )),
                (t.borderColor = ut(n.hoverBorderColor, r(n.borderColor))),
                (t.borderWidth = ut(n.hoverBorderWidth, n.borderWidth)),
                (t.radius = ut(n.hoverRadius, n.radius));
            },
          }),
          ht = de.options.resolve;
        oe._set("polarArea", {
          scale: {
            type: "radialLinear",
            angleLines: { display: !1 },
            gridLines: { circular: !0 },
            pointLabels: { display: !1 },
            ticks: { beginAtZero: !0 },
          },
          animation: { animateRotate: !0, animateScale: !0 },
          startAngle: -0.5 * Math.PI,
          legendCallback: function (e) {
            var t,
              n,
              r,
              i = document.createElement("ul"),
              a = e.data,
              o = a.datasets,
              l = a.labels;
            if ((i.setAttribute("class", e.id + "-legend"), o.length))
              for (t = 0, n = o[0].data.length; t < n; ++t)
                ((r = i.appendChild(document.createElement("li"))).appendChild(
                  document.createElement("span")
                ).style.backgroundColor = o[0].backgroundColor[t]),
                  l[t] && r.appendChild(document.createTextNode(l[t]));
            return i.outerHTML;
          },
          legend: {
            labels: {
              generateLabels: function (e) {
                var t = e.data;
                return t.labels.length && t.datasets.length
                  ? t.labels.map(function (n, r) {
                      var i = e.getDatasetMeta(0),
                        a = i.controller.getStyle(r);
                      return {
                        text: n,
                        fillStyle: a.backgroundColor,
                        strokeStyle: a.borderColor,
                        lineWidth: a.borderWidth,
                        hidden:
                          isNaN(t.datasets[0].data[r]) || i.data[r].hidden,
                        index: r,
                      };
                    })
                  : [];
              },
            },
            onClick: function (e, t) {
              var n,
                r,
                i,
                a = t.index,
                o = this.chart;
              for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
                (i = o.getDatasetMeta(n)).data[a].hidden = !i.data[a].hidden;
              o.update();
            },
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (e, t) {
                return t.labels[e.index] + ": " + e.yLabel;
              },
            },
          },
        });
        var pt = Te.extend({
          dataElementType: He.Arc,
          linkScales: de.noop,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
          ],
          _getIndexScaleId: function () {
            return this.chart.scale.id;
          },
          _getValueScaleId: function () {
            return this.chart.scale.id;
          },
          update: function (e) {
            var t,
              n,
              r,
              i = this,
              a = i.getDataset(),
              o = i.getMeta(),
              l = i.chart.options.startAngle || 0,
              s = (i._starts = []),
              u = (i._angles = []),
              c = o.data;
            for (
              i._updateRadius(),
                o.count = i.countVisibleElements(),
                t = 0,
                n = a.data.length;
              t < n;
              t++
            )
              (s[t] = l), (r = i._computeAngle(t)), (u[t] = r), (l += r);
            for (t = 0, n = c.length; t < n; ++t)
              (c[t]._options = i._resolveDataElementOptions(c[t], t)),
                i.updateElement(c[t], t, e);
          },
          _updateRadius: function () {
            var e = this,
              t = e.chart,
              n = t.chartArea,
              r = t.options,
              i = Math.min(n.right - n.left, n.bottom - n.top);
            (t.outerRadius = Math.max(i / 2, 0)),
              (t.innerRadius = Math.max(
                r.cutoutPercentage
                  ? (t.outerRadius / 100) * r.cutoutPercentage
                  : 1,
                0
              )),
              (t.radiusLength =
                (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount()),
              (e.outerRadius = t.outerRadius - t.radiusLength * e.index),
              (e.innerRadius = e.outerRadius - t.radiusLength);
          },
          updateElement: function (e, t, n) {
            var r = this,
              i = r.chart,
              a = r.getDataset(),
              o = i.options,
              l = o.animation,
              s = i.scale,
              u = i.data.labels,
              c = s.xCenter,
              d = s.yCenter,
              f = o.startAngle,
              h = e.hidden ? 0 : s.getDistanceFromCenterForValue(a.data[t]),
              p = r._starts[t],
              g = p + (e.hidden ? 0 : r._angles[t]),
              m = l.animateScale
                ? 0
                : s.getDistanceFromCenterForValue(a.data[t]),
              v = e._options || {};
            de.extend(e, {
              _datasetIndex: r.index,
              _index: t,
              _scale: s,
              _model: {
                backgroundColor: v.backgroundColor,
                borderColor: v.borderColor,
                borderWidth: v.borderWidth,
                borderAlign: v.borderAlign,
                x: c,
                y: d,
                innerRadius: 0,
                outerRadius: n ? m : h,
                startAngle: n && l.animateRotate ? f : p,
                endAngle: n && l.animateRotate ? f : g,
                label: de.valueAtIndexOrDefault(u, t, u[t]),
              },
            }),
              e.pivot();
          },
          countVisibleElements: function () {
            var e = this.getDataset(),
              t = this.getMeta(),
              n = 0;
            return (
              de.each(t.data, function (t, r) {
                isNaN(e.data[r]) || t.hidden || n++;
              }),
              n
            );
          },
          setHoverStyle: function (e) {
            var t = e._model,
              n = e._options,
              r = de.getHoverColor,
              i = de.valueOrDefault;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
            }),
              (t.backgroundColor = i(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (t.borderColor = i(n.hoverBorderColor, r(n.borderColor))),
              (t.borderWidth = i(n.hoverBorderWidth, n.borderWidth));
          },
          _computeAngle: function (e) {
            var t = this,
              n = this.getMeta().count,
              r = t.getDataset(),
              i = t.getMeta();
            if (isNaN(r.data[e]) || i.data[e].hidden) return 0;
            var a = {
              chart: t.chart,
              dataIndex: e,
              dataset: r,
              datasetIndex: t.index,
            };
            return ht(
              [t.chart.options.elements.arc.angle, (2 * Math.PI) / n],
              a,
              e
            );
          },
        });
        oe._set("pie", de.clone(oe.doughnut)),
          oe._set("pie", { cutoutPercentage: 0 });
        var gt = lt,
          mt = de.valueOrDefault;
        oe._set("radar", {
          spanGaps: !1,
          scale: { type: "radialLinear" },
          elements: { line: { tension: 0 } },
        });
        var vt = Te.extend({
          datasetElementType: He.Line,
          dataElementType: He.Point,
          linkScales: de.noop,
          _datasetElementOptions: [
            "backgroundColor",
            "borderWidth",
            "borderColor",
            "borderCapStyle",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "fill",
          ],
          _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation",
          },
          _getIndexScaleId: function () {
            return this.chart.scale.id;
          },
          _getValueScaleId: function () {
            return this.chart.scale.id;
          },
          update: function (e) {
            var t,
              n,
              r = this,
              i = r.getMeta(),
              a = i.dataset,
              o = i.data || [],
              l = r.chart.scale,
              s = r._config;
            for (
              void 0 !== s.tension &&
                void 0 === s.lineTension &&
                (s.lineTension = s.tension),
                a._scale = l,
                a._datasetIndex = r.index,
                a._children = o,
                a._loop = !0,
                a._model = r._resolveDatasetElementOptions(a),
                a.pivot(),
                t = 0,
                n = o.length;
              t < n;
              ++t
            )
              r.updateElement(o[t], t, e);
            for (r.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t)
              o[t].pivot();
          },
          updateElement: function (e, t, n) {
            var r = this,
              i = e.custom || {},
              a = r.getDataset(),
              o = r.chart.scale,
              l = o.getPointPositionForValue(t, a.data[t]),
              s = r._resolveDataElementOptions(e, t),
              u = r.getMeta().dataset._model,
              c = n ? o.xCenter : l.x,
              d = n ? o.yCenter : l.y;
            (e._scale = o),
              (e._options = s),
              (e._datasetIndex = r.index),
              (e._index = t),
              (e._model = {
                x: c,
                y: d,
                skip: i.skip || isNaN(c) || isNaN(d),
                radius: s.radius,
                pointStyle: s.pointStyle,
                rotation: s.rotation,
                backgroundColor: s.backgroundColor,
                borderColor: s.borderColor,
                borderWidth: s.borderWidth,
                tension: mt(i.tension, u ? u.tension : 0),
                hitRadius: s.hitRadius,
              });
          },
          _resolveDatasetElementOptions: function () {
            var e = this,
              t = e._config,
              n = e.chart.options,
              r = Te.prototype._resolveDatasetElementOptions.apply(
                e,
                arguments
              );
            return (
              (r.spanGaps = mt(t.spanGaps, n.spanGaps)),
              (r.tension = mt(t.lineTension, n.elements.line.tension)),
              r
            );
          },
          updateBezierControlPoints: function () {
            var e,
              t,
              n,
              r,
              i = this.getMeta(),
              a = this.chart.chartArea,
              o = i.data || [];
            function l(e, t, n) {
              return Math.max(Math.min(e, n), t);
            }
            for (
              i.dataset._model.spanGaps &&
                (o = o.filter(function (e) {
                  return !e._model.skip;
                })),
                e = 0,
                t = o.length;
              e < t;
              ++e
            )
              (n = o[e]._model),
                (r = de.splineCurve(
                  de.previousItem(o, e, !0)._model,
                  n,
                  de.nextItem(o, e, !0)._model,
                  n.tension
                )),
                (n.controlPointPreviousX = l(r.previous.x, a.left, a.right)),
                (n.controlPointPreviousY = l(r.previous.y, a.top, a.bottom)),
                (n.controlPointNextX = l(r.next.x, a.left, a.right)),
                (n.controlPointNextY = l(r.next.y, a.top, a.bottom));
          },
          setHoverStyle: function (e) {
            var t = e._model,
              n = e._options,
              r = de.getHoverColor;
            (e.$previousStyle = {
              backgroundColor: t.backgroundColor,
              borderColor: t.borderColor,
              borderWidth: t.borderWidth,
              radius: t.radius,
            }),
              (t.backgroundColor = mt(
                n.hoverBackgroundColor,
                r(n.backgroundColor)
              )),
              (t.borderColor = mt(n.hoverBorderColor, r(n.borderColor))),
              (t.borderWidth = mt(n.hoverBorderWidth, n.borderWidth)),
              (t.radius = mt(n.hoverRadius, n.radius));
          },
        });
        oe._set("scatter", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
            yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (e) {
                return "(" + e.xLabel + ", " + e.yLabel + ")";
              },
            },
          },
        }),
          oe._set("global", { datasets: { scatter: { showLine: !1 } } });
        var yt = {
          bar: Je,
          bubble: nt,
          doughnut: lt,
          horizontalBar: st,
          line: ft,
          polarArea: pt,
          pie: gt,
          radar: vt,
          scatter: ft,
        };
        function bt(e, t) {
          return e.native ? { x: e.x, y: e.y } : de.getRelativePosition(e, t);
        }
        function xt(e, t) {
          var n,
            r,
            i,
            a,
            o,
            l,
            s = e._getSortedVisibleDatasetMetas();
          for (r = 0, a = s.length; r < a; ++r)
            for (i = 0, o = (n = s[r].data).length; i < o; ++i)
              (l = n[i])._view.skip || t(l);
        }
        function _t(e, t) {
          var n = [];
          return (
            xt(e, function (e) {
              e.inRange(t.x, t.y) && n.push(e);
            }),
            n
          );
        }
        function wt(e, t, n, r) {
          var i = Number.POSITIVE_INFINITY,
            a = [];
          return (
            xt(e, function (e) {
              if (!n || e.inRange(t.x, t.y)) {
                var o = e.getCenterPoint(),
                  l = r(t, o);
                l < i ? ((a = [e]), (i = l)) : l === i && a.push(e);
              }
            }),
            a
          );
        }
        function kt(e) {
          var t = -1 !== e.indexOf("x"),
            n = -1 !== e.indexOf("y");
          return function (e, r) {
            var i = t ? Math.abs(e.x - r.x) : 0,
              a = n ? Math.abs(e.y - r.y) : 0;
            return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2));
          };
        }
        function St(e, t, n) {
          var r = bt(t, e);
          n.axis = n.axis || "x";
          var i = kt(n.axis),
            a = n.intersect ? _t(e, r) : wt(e, r, !1, i),
            o = [];
          return a.length
            ? (e._getSortedVisibleDatasetMetas().forEach(function (e) {
                var t = e.data[a[0]._index];
                t && !t._view.skip && o.push(t);
              }),
              o)
            : [];
        }
        var Mt = {
            modes: {
              single: function (e, t) {
                var n = bt(t, e),
                  r = [];
                return (
                  xt(e, function (e) {
                    if (e.inRange(n.x, n.y)) return r.push(e), r;
                  }),
                  r.slice(0, 1)
                );
              },
              label: St,
              index: St,
              dataset: function (e, t, n) {
                var r = bt(t, e);
                n.axis = n.axis || "xy";
                var i = kt(n.axis),
                  a = n.intersect ? _t(e, r) : wt(e, r, !1, i);
                return (
                  a.length > 0 &&
                    (a = e.getDatasetMeta(a[0]._datasetIndex).data),
                  a
                );
              },
              "x-axis": function (e, t) {
                return St(e, t, { intersect: !1 });
              },
              point: function (e, t) {
                return _t(e, bt(t, e));
              },
              nearest: function (e, t, n) {
                var r = bt(t, e);
                n.axis = n.axis || "xy";
                var i = kt(n.axis);
                return wt(e, r, n.intersect, i);
              },
              x: function (e, t, n) {
                var r = bt(t, e),
                  i = [],
                  a = !1;
                return (
                  xt(e, function (e) {
                    e.inXRange(r.x) && i.push(e),
                      e.inRange(r.x, r.y) && (a = !0);
                  }),
                  n.intersect && !a && (i = []),
                  i
                );
              },
              y: function (e, t, n) {
                var r = bt(t, e),
                  i = [],
                  a = !1;
                return (
                  xt(e, function (e) {
                    e.inYRange(r.y) && i.push(e),
                      e.inRange(r.x, r.y) && (a = !0);
                  }),
                  n.intersect && !a && (i = []),
                  i
                );
              },
            },
          },
          Tt = de.extend;
        function Ct(e, t) {
          return de.where(e, function (e) {
            return e.pos === t;
          });
        }
        function Pt(e, t) {
          return e.sort(function (e, n) {
            var r = t ? n : e,
              i = t ? e : n;
            return r.weight === i.weight
              ? r.index - i.index
              : r.weight - i.weight;
          });
        }
        function Et(e, t, n, r) {
          return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
        }
        function Dt(e, t, n) {
          var r,
            i,
            a = n.box,
            o = e.maxPadding;
          if (
            (n.size && (e[n.pos] -= n.size),
            (n.size = n.horizontal ? a.height : a.width),
            (e[n.pos] += n.size),
            a.getPadding)
          ) {
            var l = a.getPadding();
            (o.top = Math.max(o.top, l.top)),
              (o.left = Math.max(o.left, l.left)),
              (o.bottom = Math.max(o.bottom, l.bottom)),
              (o.right = Math.max(o.right, l.right));
          }
          if (
            ((r = t.outerWidth - Et(o, e, "left", "right")),
            (i = t.outerHeight - Et(o, e, "top", "bottom")),
            r !== e.w || i !== e.h)
          )
            return (e.w = r), (e.h = i), n.horizontal ? r !== e.w : i !== e.h;
        }
        function Ot(e, t) {
          var n = t.maxPadding;
          function r(e) {
            var r = { left: 0, top: 0, right: 0, bottom: 0 };
            return (
              e.forEach(function (e) {
                r[e] = Math.max(t[e], n[e]);
              }),
              r
            );
          }
          return r(e ? ["left", "right"] : ["top", "bottom"]);
        }
        function At(e, t, n) {
          var r,
            i,
            a,
            o,
            l,
            s,
            u = [];
          for (r = 0, i = e.length; r < i; ++r)
            (o = (a = e[r]).box).update(
              a.width || t.w,
              a.height || t.h,
              Ot(a.horizontal, t)
            ),
              Dt(t, n, a) && ((s = !0), u.length && (l = !0)),
              o.fullWidth || u.push(a);
          return (l && At(u, t, n)) || s;
        }
        function It(e, t, n) {
          var r,
            i,
            a,
            o,
            l = n.padding,
            s = t.x,
            u = t.y;
          for (r = 0, i = e.length; r < i; ++r)
            (o = (a = e[r]).box),
              a.horizontal
                ? ((o.left = o.fullWidth ? l.left : t.left),
                  (o.right = o.fullWidth
                    ? n.outerWidth - l.right
                    : t.left + t.w),
                  (o.top = u),
                  (o.bottom = u + o.height),
                  (o.width = o.right - o.left),
                  (u = o.bottom))
                : ((o.left = s),
                  (o.right = s + o.width),
                  (o.top = t.top),
                  (o.bottom = t.top + t.h),
                  (o.height = o.bottom - o.top),
                  (s = o.right));
          (t.x = s), (t.y = u);
        }
        oe._set("global", {
          layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        });
        var Ft,
          Nt = {
            defaults: {},
            addBox: function (e, t) {
              e.boxes || (e.boxes = []),
                (t.fullWidth = t.fullWidth || !1),
                (t.position = t.position || "top"),
                (t.weight = t.weight || 0),
                (t._layers =
                  t._layers ||
                  function () {
                    return [
                      {
                        z: 0,
                        draw: function () {
                          t.draw.apply(t, arguments);
                        },
                      },
                    ];
                  }),
                e.boxes.push(t);
            },
            removeBox: function (e, t) {
              var n = e.boxes ? e.boxes.indexOf(t) : -1;
              -1 !== n && e.boxes.splice(n, 1);
            },
            configure: function (e, t, n) {
              for (
                var r,
                  i = ["fullWidth", "position", "weight"],
                  a = i.length,
                  o = 0;
                o < a;
                ++o
              )
                (r = i[o]), n.hasOwnProperty(r) && (t[r] = n[r]);
            },
            update: function (e, t, n) {
              if (e) {
                var r = e.options.layout || {},
                  i = de.options.toPadding(r.padding),
                  a = t - i.width,
                  o = n - i.height,
                  l = (function (e) {
                    var t = (function (e) {
                        var t,
                          n,
                          r,
                          i = [];
                        for (t = 0, n = (e || []).length; t < n; ++t)
                          (r = e[t]),
                            i.push({
                              index: t,
                              box: r,
                              pos: r.position,
                              horizontal: r.isHorizontal(),
                              weight: r.weight,
                            });
                        return i;
                      })(e),
                      n = Pt(Ct(t, "left"), !0),
                      r = Pt(Ct(t, "right")),
                      i = Pt(Ct(t, "top"), !0),
                      a = Pt(Ct(t, "bottom"));
                    return {
                      leftAndTop: n.concat(i),
                      rightAndBottom: r.concat(a),
                      chartArea: Ct(t, "chartArea"),
                      vertical: n.concat(r),
                      horizontal: i.concat(a),
                    };
                  })(e.boxes),
                  s = l.vertical,
                  u = l.horizontal,
                  c = Object.freeze({
                    outerWidth: t,
                    outerHeight: n,
                    padding: i,
                    availableWidth: a,
                    vBoxMaxWidth: a / 2 / s.length,
                    hBoxMaxHeight: o / 2,
                  }),
                  d = Tt(
                    { maxPadding: Tt({}, i), w: a, h: o, x: i.left, y: i.top },
                    i
                  );
                !(function (e, t) {
                  var n, r, i;
                  for (n = 0, r = e.length; n < r; ++n)
                    ((i = e[n]).width = i.horizontal
                      ? i.box.fullWidth && t.availableWidth
                      : t.vBoxMaxWidth),
                      (i.height = i.horizontal && t.hBoxMaxHeight);
                })(s.concat(u), c),
                  At(s, d, c),
                  At(u, d, c) && At(s, d, c),
                  (function (e) {
                    var t = e.maxPadding;
                    function n(n) {
                      var r = Math.max(t[n] - e[n], 0);
                      return (e[n] += r), r;
                    }
                    (e.y += n("top")),
                      (e.x += n("left")),
                      n("right"),
                      n("bottom");
                  })(d),
                  It(l.leftAndTop, d, c),
                  (d.x += d.w),
                  (d.y += d.h),
                  It(l.rightAndBottom, d, c),
                  (e.chartArea = {
                    left: d.left,
                    top: d.top,
                    right: d.left + d.w,
                    bottom: d.top + d.h,
                  }),
                  de.each(l.chartArea, function (t) {
                    var n = t.box;
                    Tt(n, e.chartArea), n.update(d.w, d.h);
                  });
              }
            },
          },
          Lt =
            ((Ft = Object.freeze({
              default:
                "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n",
            })) &&
              Ft.default) ||
            Ft,
          Rt = "$chartjs",
          zt = "chartjs-size-monitor",
          Wt = "chartjs-render-monitor",
          jt = "chartjs-render-animation",
          Vt = ["animationstart", "webkitAnimationStart"],
          Yt = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout",
          };
        function Ut(e, t) {
          var n = de.getStyle(e, t),
            r = n && n.match(/^(\d+)(\.\d+)?px$/);
          return r ? Number(r[1]) : void 0;
        }
        var Bt = !!(function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            window.addEventListener("e", null, t);
          } catch (n) {}
          return e;
        })() && { passive: !0 };
        function Ht(e, t, n) {
          e.addEventListener(t, n, Bt);
        }
        function qt(e, t, n) {
          e.removeEventListener(t, n, Bt);
        }
        function Gt(e, t, n, r, i) {
          return {
            type: e,
            chart: t,
            native: i || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== r ? r : null,
          };
        }
        function $t(e) {
          var t = document.createElement("div");
          return (t.className = e || ""), t;
        }
        function Kt(e, t, n) {
          var r = e[Rt] || (e[Rt] = {}),
            i = (r.resizer = (function (e) {
              var t = $t(zt),
                n = $t(zt + "-expand"),
                r = $t(zt + "-shrink");
              n.appendChild($t()),
                r.appendChild($t()),
                t.appendChild(n),
                t.appendChild(r),
                (t._reset = function () {
                  (n.scrollLeft = 1e6),
                    (n.scrollTop = 1e6),
                    (r.scrollLeft = 1e6),
                    (r.scrollTop = 1e6);
                });
              var i = function () {
                t._reset(), e();
              };
              return (
                Ht(n, "scroll", i.bind(n, "expand")),
                Ht(r, "scroll", i.bind(r, "shrink")),
                t
              );
            })(
              (function (e, t) {
                var n = !1,
                  r = [];
                return function () {
                  (r = Array.prototype.slice.call(arguments)),
                    (t = t || this),
                    n ||
                      ((n = !0),
                      de.requestAnimFrame.call(window, function () {
                        (n = !1), e.apply(t, r);
                      }));
                };
              })(function () {
                if (r.resizer) {
                  var i = n.options.maintainAspectRatio && e.parentNode,
                    a = i ? i.clientWidth : 0;
                  t(Gt("resize", n)),
                    i && i.clientWidth < a && n.canvas && t(Gt("resize", n));
                }
              })
            ));
          !(function (e, t) {
            var n = e[Rt] || (e[Rt] = {}),
              r = (n.renderProxy = function (e) {
                e.animationName === jt && t();
              });
            de.each(Vt, function (t) {
              Ht(e, t, r);
            }),
              (n.reflow = !!e.offsetParent),
              e.classList.add(Wt);
          })(e, function () {
            if (r.resizer) {
              var t = e.parentNode;
              t && t !== i.parentNode && t.insertBefore(i, t.firstChild),
                i._reset();
            }
          });
        }
        function Qt(e) {
          var t = e[Rt] || {},
            n = t.resizer;
          delete t.resizer,
            (function (e) {
              var t = e[Rt] || {},
                n = t.renderProxy;
              n &&
                (de.each(Vt, function (t) {
                  qt(e, t, n);
                }),
                delete t.renderProxy),
                e.classList.remove(Wt);
            })(e),
            n && n.parentNode && n.parentNode.removeChild(n);
        }
        var Zt = {
          disableCSSInjection: !1,
          _enabled:
            "undefined" !== typeof window && "undefined" !== typeof document,
          _ensureLoaded: function (e) {
            if (!this.disableCSSInjection) {
              var t = e.getRootNode();
              !(function (e, t) {
                var n = e[Rt] || (e[Rt] = {});
                if (!n.containsStyles) {
                  (n.containsStyles = !0), (t = "/* Chart.js */\n" + t);
                  var r = document.createElement("style");
                  r.setAttribute("type", "text/css"),
                    r.appendChild(document.createTextNode(t)),
                    e.appendChild(r);
                }
              })(t.host ? t : document.head, Lt);
            }
          },
          acquireContext: function (e, t) {
            "string" === typeof e
              ? (e = document.getElementById(e))
              : e.length && (e = e[0]),
              e && e.canvas && (e = e.canvas);
            var n = e && e.getContext && e.getContext("2d");
            return n && n.canvas === e
              ? (this._ensureLoaded(e),
                (function (e, t) {
                  var n = e.style,
                    r = e.getAttribute("height"),
                    i = e.getAttribute("width");
                  if (
                    ((e[Rt] = {
                      initial: {
                        height: r,
                        width: i,
                        style: {
                          display: n.display,
                          height: n.height,
                          width: n.width,
                        },
                      },
                    }),
                    (n.display = n.display || "block"),
                    null === i || "" === i)
                  ) {
                    var a = Ut(e, "width");
                    void 0 !== a && (e.width = a);
                  }
                  if (null === r || "" === r)
                    if ("" === e.style.height)
                      e.height = e.width / (t.options.aspectRatio || 2);
                    else {
                      var o = Ut(e, "height");
                      void 0 !== a && (e.height = o);
                    }
                })(e, t),
                n)
              : null;
          },
          releaseContext: function (e) {
            var t = e.canvas;
            if (t[Rt]) {
              var n = t[Rt].initial;
              ["height", "width"].forEach(function (e) {
                var r = n[e];
                de.isNullOrUndef(r)
                  ? t.removeAttribute(e)
                  : t.setAttribute(e, r);
              }),
                de.each(n.style || {}, function (e, n) {
                  t.style[n] = e;
                }),
                (t.width = t.width),
                delete t[Rt];
            }
          },
          addEventListener: function (e, t, n) {
            var r = e.canvas;
            if ("resize" !== t) {
              var i = n[Rt] || (n[Rt] = {});
              Ht(
                r,
                t,
                ((i.proxies || (i.proxies = {}))[e.id + "_" + t] = function (
                  t
                ) {
                  n(
                    (function (e, t) {
                      var n = Yt[e.type] || e.type,
                        r = de.getRelativePosition(e, t);
                      return Gt(n, t, r.x, r.y, e);
                    })(t, e)
                  );
                })
              );
            } else Kt(r, n, e);
          },
          removeEventListener: function (e, t, n) {
            var r = e.canvas;
            if ("resize" !== t) {
              var i = ((n[Rt] || {}).proxies || {})[e.id + "_" + t];
              i && qt(r, t, i);
            } else Qt(r);
          },
        };
        (de.addEvent = Ht), (de.removeEvent = qt);
        var Xt = Zt._enabled
            ? Zt
            : {
                acquireContext: function (e) {
                  return (
                    e && e.canvas && (e = e.canvas),
                    (e && e.getContext("2d")) || null
                  );
                },
              },
          Jt = de.extend(
            {
              initialize: function () {},
              acquireContext: function () {},
              releaseContext: function () {},
              addEventListener: function () {},
              removeEventListener: function () {},
            },
            Xt
          );
        oe._set("global", { plugins: {} });
        var en = {
            _plugins: [],
            _cacheId: 0,
            register: function (e) {
              var t = this._plugins;
              [].concat(e).forEach(function (e) {
                -1 === t.indexOf(e) && t.push(e);
              }),
                this._cacheId++;
            },
            unregister: function (e) {
              var t = this._plugins;
              [].concat(e).forEach(function (e) {
                var n = t.indexOf(e);
                -1 !== n && t.splice(n, 1);
              }),
                this._cacheId++;
            },
            clear: function () {
              (this._plugins = []), this._cacheId++;
            },
            count: function () {
              return this._plugins.length;
            },
            getAll: function () {
              return this._plugins;
            },
            notify: function (e, t, n) {
              var r,
                i,
                a,
                o,
                l,
                s = this.descriptors(e),
                u = s.length;
              for (r = 0; r < u; ++r)
                if (
                  "function" === typeof (l = (a = (i = s[r]).plugin)[t]) &&
                  ((o = [e].concat(n || [])).push(i.options),
                  !1 === l.apply(a, o))
                )
                  return !1;
              return !0;
            },
            descriptors: function (e) {
              var t = e.$plugins || (e.$plugins = {});
              if (t.id === this._cacheId) return t.descriptors;
              var n = [],
                r = [],
                i = (e && e.config) || {},
                a = (i.options && i.options.plugins) || {};
              return (
                this._plugins.concat(i.plugins || []).forEach(function (e) {
                  if (-1 === n.indexOf(e)) {
                    var t = e.id,
                      i = a[t];
                    !1 !== i &&
                      (!0 === i && (i = de.clone(oe.global.plugins[t])),
                      n.push(e),
                      r.push({ plugin: e, options: i || {} }));
                  }
                }),
                (t.descriptors = r),
                (t.id = this._cacheId),
                r
              );
            },
            _invalidate: function (e) {
              delete e.$plugins;
            },
          },
          tn = {
            constructors: {},
            defaults: {},
            registerScaleType: function (e, t, n) {
              (this.constructors[e] = t), (this.defaults[e] = de.clone(n));
            },
            getScaleConstructor: function (e) {
              return this.constructors.hasOwnProperty(e)
                ? this.constructors[e]
                : void 0;
            },
            getScaleDefaults: function (e) {
              return this.defaults.hasOwnProperty(e)
                ? de.merge({}, [oe.scale, this.defaults[e]])
                : {};
            },
            updateScaleDefaults: function (e, t) {
              this.defaults.hasOwnProperty(e) &&
                (this.defaults[e] = de.extend(this.defaults[e], t));
            },
            addScalesToLayout: function (e) {
              de.each(e.scales, function (t) {
                (t.fullWidth = t.options.fullWidth),
                  (t.position = t.options.position),
                  (t.weight = t.options.weight),
                  Nt.addBox(e, t);
              });
            },
          },
          nn = de.valueOrDefault,
          rn = de.rtl.getRtlAdapter;
        oe._set("global", {
          tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
              beforeTitle: de.noop,
              title: function (e, t) {
                var n = "",
                  r = t.labels,
                  i = r ? r.length : 0;
                if (e.length > 0) {
                  var a = e[0];
                  a.label
                    ? (n = a.label)
                    : a.xLabel
                    ? (n = a.xLabel)
                    : i > 0 && a.index < i && (n = r[a.index]);
                }
                return n;
              },
              afterTitle: de.noop,
              beforeBody: de.noop,
              beforeLabel: de.noop,
              label: function (e, t) {
                var n = t.datasets[e.datasetIndex].label || "";
                return (
                  n && (n += ": "),
                  de.isNullOrUndef(e.value) ? (n += e.yLabel) : (n += e.value),
                  n
                );
              },
              labelColor: function (e, t) {
                var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                return {
                  borderColor: n.borderColor,
                  backgroundColor: n.backgroundColor,
                };
              },
              labelTextColor: function () {
                return this._options.bodyFontColor;
              },
              afterLabel: de.noop,
              afterBody: de.noop,
              beforeFooter: de.noop,
              footer: de.noop,
              afterFooter: de.noop,
            },
          },
        });
        var an = {
          average: function (e) {
            if (!e.length) return !1;
            var t,
              n,
              r = 0,
              i = 0,
              a = 0;
            for (t = 0, n = e.length; t < n; ++t) {
              var o = e[t];
              if (o && o.hasValue()) {
                var l = o.tooltipPosition();
                (r += l.x), (i += l.y), ++a;
              }
            }
            return { x: r / a, y: i / a };
          },
          nearest: function (e, t) {
            var n,
              r,
              i,
              a = t.x,
              o = t.y,
              l = Number.POSITIVE_INFINITY;
            for (n = 0, r = e.length; n < r; ++n) {
              var s = e[n];
              if (s && s.hasValue()) {
                var u = s.getCenterPoint(),
                  c = de.distanceBetweenPoints(t, u);
                c < l && ((l = c), (i = s));
              }
            }
            if (i) {
              var d = i.tooltipPosition();
              (a = d.x), (o = d.y);
            }
            return { x: a, y: o };
          },
        };
        function on(e, t) {
          return (
            t && (de.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)),
            e
          );
        }
        function ln(e) {
          return ("string" === typeof e || e instanceof String) &&
            e.indexOf("\n") > -1
            ? e.split("\n")
            : e;
        }
        function sn(e) {
          var t = e._xScale,
            n = e._yScale || e._scale,
            r = e._index,
            i = e._datasetIndex,
            a = e._chart.getDatasetMeta(i).controller,
            o = a._getIndexScale(),
            l = a._getValueScale();
          return {
            xLabel: t ? t.getLabelForIndex(r, i) : "",
            yLabel: n ? n.getLabelForIndex(r, i) : "",
            label: o ? "" + o.getLabelForIndex(r, i) : "",
            value: l ? "" + l.getLabelForIndex(r, i) : "",
            index: r,
            datasetIndex: i,
            x: e._model.x,
            y: e._model.y,
          };
        }
        function un(e) {
          var t = oe.global;
          return {
            xPadding: e.xPadding,
            yPadding: e.yPadding,
            xAlign: e.xAlign,
            yAlign: e.yAlign,
            rtl: e.rtl,
            textDirection: e.textDirection,
            bodyFontColor: e.bodyFontColor,
            _bodyFontFamily: nn(e.bodyFontFamily, t.defaultFontFamily),
            _bodyFontStyle: nn(e.bodyFontStyle, t.defaultFontStyle),
            _bodyAlign: e.bodyAlign,
            bodyFontSize: nn(e.bodyFontSize, t.defaultFontSize),
            bodySpacing: e.bodySpacing,
            titleFontColor: e.titleFontColor,
            _titleFontFamily: nn(e.titleFontFamily, t.defaultFontFamily),
            _titleFontStyle: nn(e.titleFontStyle, t.defaultFontStyle),
            titleFontSize: nn(e.titleFontSize, t.defaultFontSize),
            _titleAlign: e.titleAlign,
            titleSpacing: e.titleSpacing,
            titleMarginBottom: e.titleMarginBottom,
            footerFontColor: e.footerFontColor,
            _footerFontFamily: nn(e.footerFontFamily, t.defaultFontFamily),
            _footerFontStyle: nn(e.footerFontStyle, t.defaultFontStyle),
            footerFontSize: nn(e.footerFontSize, t.defaultFontSize),
            _footerAlign: e.footerAlign,
            footerSpacing: e.footerSpacing,
            footerMarginTop: e.footerMarginTop,
            caretSize: e.caretSize,
            cornerRadius: e.cornerRadius,
            backgroundColor: e.backgroundColor,
            opacity: 0,
            legendColorBackground: e.multiKeyBackground,
            displayColors: e.displayColors,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
          };
        }
        function cn(e, t) {
          return "center" === t
            ? e.x + e.width / 2
            : "right" === t
            ? e.x + e.width - e.xPadding
            : e.x + e.xPadding;
        }
        function dn(e) {
          return on([], ln(e));
        }
        var fn = ye.extend({
            initialize: function () {
              (this._model = un(this._options)), (this._lastActive = []);
            },
            getTitle: function () {
              var e = this,
                t = e._options,
                n = t.callbacks,
                r = n.beforeTitle.apply(e, arguments),
                i = n.title.apply(e, arguments),
                a = n.afterTitle.apply(e, arguments),
                o = [];
              return (o = on(o, ln(r))), (o = on(o, ln(i))), (o = on(o, ln(a)));
            },
            getBeforeBody: function () {
              return dn(
                this._options.callbacks.beforeBody.apply(this, arguments)
              );
            },
            getBody: function (e, t) {
              var n = this,
                r = n._options.callbacks,
                i = [];
              return (
                de.each(e, function (e) {
                  var a = { before: [], lines: [], after: [] };
                  on(a.before, ln(r.beforeLabel.call(n, e, t))),
                    on(a.lines, r.label.call(n, e, t)),
                    on(a.after, ln(r.afterLabel.call(n, e, t))),
                    i.push(a);
                }),
                i
              );
            },
            getAfterBody: function () {
              return dn(
                this._options.callbacks.afterBody.apply(this, arguments)
              );
            },
            getFooter: function () {
              var e = this,
                t = e._options.callbacks,
                n = t.beforeFooter.apply(e, arguments),
                r = t.footer.apply(e, arguments),
                i = t.afterFooter.apply(e, arguments),
                a = [];
              return (a = on(a, ln(n))), (a = on(a, ln(r))), (a = on(a, ln(i)));
            },
            update: function (e) {
              var t,
                n,
                r = this,
                i = r._options,
                a = r._model,
                o = (r._model = un(i)),
                l = r._active,
                s = r._data,
                u = { xAlign: a.xAlign, yAlign: a.yAlign },
                c = { x: a.x, y: a.y },
                d = { width: a.width, height: a.height },
                f = { x: a.caretX, y: a.caretY };
              if (l.length) {
                o.opacity = 1;
                var h = [],
                  p = [];
                f = an[i.position].call(r, l, r._eventPosition);
                var g = [];
                for (t = 0, n = l.length; t < n; ++t) g.push(sn(l[t]));
                i.filter &&
                  (g = g.filter(function (e) {
                    return i.filter(e, s);
                  })),
                  i.itemSort &&
                    (g = g.sort(function (e, t) {
                      return i.itemSort(e, t, s);
                    })),
                  de.each(g, function (e) {
                    h.push(i.callbacks.labelColor.call(r, e, r._chart)),
                      p.push(i.callbacks.labelTextColor.call(r, e, r._chart));
                  }),
                  (o.title = r.getTitle(g, s)),
                  (o.beforeBody = r.getBeforeBody(g, s)),
                  (o.body = r.getBody(g, s)),
                  (o.afterBody = r.getAfterBody(g, s)),
                  (o.footer = r.getFooter(g, s)),
                  (o.x = f.x),
                  (o.y = f.y),
                  (o.caretPadding = i.caretPadding),
                  (o.labelColors = h),
                  (o.labelTextColors = p),
                  (o.dataPoints = g),
                  (d = (function (e, t) {
                    var n = e._chart.ctx,
                      r = 2 * t.yPadding,
                      i = 0,
                      a = t.body,
                      o = a.reduce(function (e, t) {
                        return (
                          e + t.before.length + t.lines.length + t.after.length
                        );
                      }, 0);
                    o += t.beforeBody.length + t.afterBody.length;
                    var l = t.title.length,
                      s = t.footer.length,
                      u = t.titleFontSize,
                      c = t.bodyFontSize,
                      d = t.footerFontSize;
                    (r += l * u),
                      (r += l ? (l - 1) * t.titleSpacing : 0),
                      (r += l ? t.titleMarginBottom : 0),
                      (r += o * c),
                      (r += o ? (o - 1) * t.bodySpacing : 0),
                      (r += s ? t.footerMarginTop : 0),
                      (r += s * d),
                      (r += s ? (s - 1) * t.footerSpacing : 0);
                    var f = 0,
                      h = function (e) {
                        i = Math.max(i, n.measureText(e).width + f);
                      };
                    return (
                      (n.font = de.fontString(
                        u,
                        t._titleFontStyle,
                        t._titleFontFamily
                      )),
                      de.each(t.title, h),
                      (n.font = de.fontString(
                        c,
                        t._bodyFontStyle,
                        t._bodyFontFamily
                      )),
                      de.each(t.beforeBody.concat(t.afterBody), h),
                      (f = t.displayColors ? c + 2 : 0),
                      de.each(a, function (e) {
                        de.each(e.before, h),
                          de.each(e.lines, h),
                          de.each(e.after, h);
                      }),
                      (f = 0),
                      (n.font = de.fontString(
                        d,
                        t._footerFontStyle,
                        t._footerFontFamily
                      )),
                      de.each(t.footer, h),
                      { width: (i += 2 * t.xPadding), height: r }
                    );
                  })(this, o)),
                  (c = (function (e, t, n, r) {
                    var i = e.x,
                      a = e.y,
                      o = e.caretSize,
                      l = e.caretPadding,
                      s = e.cornerRadius,
                      u = n.xAlign,
                      c = n.yAlign,
                      d = o + l,
                      f = s + l;
                    return (
                      "right" === u
                        ? (i -= t.width)
                        : "center" === u &&
                          ((i -= t.width / 2) + t.width > r.width &&
                            (i = r.width - t.width),
                          i < 0 && (i = 0)),
                      "top" === c
                        ? (a += d)
                        : (a -= "bottom" === c ? t.height + d : t.height / 2),
                      "center" === c
                        ? "left" === u
                          ? (i += d)
                          : "right" === u && (i -= d)
                        : "left" === u
                        ? (i -= f)
                        : "right" === u && (i += f),
                      { x: i, y: a }
                    );
                  })(
                    o,
                    d,
                    (u = (function (e, t) {
                      var n,
                        r,
                        i,
                        a,
                        o,
                        l = e._model,
                        s = e._chart,
                        u = e._chart.chartArea,
                        c = "center",
                        d = "center";
                      l.y < t.height
                        ? (d = "top")
                        : l.y > s.height - t.height && (d = "bottom");
                      var f = (u.left + u.right) / 2,
                        h = (u.top + u.bottom) / 2;
                      "center" === d
                        ? ((n = function (e) {
                            return e <= f;
                          }),
                          (r = function (e) {
                            return e > f;
                          }))
                        : ((n = function (e) {
                            return e <= t.width / 2;
                          }),
                          (r = function (e) {
                            return e >= s.width - t.width / 2;
                          })),
                        (i = function (e) {
                          return (
                            e + t.width + l.caretSize + l.caretPadding > s.width
                          );
                        }),
                        (a = function (e) {
                          return e - t.width - l.caretSize - l.caretPadding < 0;
                        }),
                        (o = function (e) {
                          return e <= h ? "top" : "bottom";
                        }),
                        n(l.x)
                          ? ((c = "left"),
                            i(l.x) && ((c = "center"), (d = o(l.y))))
                          : r(l.x) &&
                            ((c = "right"),
                            a(l.x) && ((c = "center"), (d = o(l.y))));
                      var p = e._options;
                      return {
                        xAlign: p.xAlign ? p.xAlign : c,
                        yAlign: p.yAlign ? p.yAlign : d,
                      };
                    })(this, d)),
                    r._chart
                  ));
              } else o.opacity = 0;
              return (
                (o.xAlign = u.xAlign),
                (o.yAlign = u.yAlign),
                (o.x = c.x),
                (o.y = c.y),
                (o.width = d.width),
                (o.height = d.height),
                (o.caretX = f.x),
                (o.caretY = f.y),
                (r._model = o),
                e && i.custom && i.custom.call(r, o),
                r
              );
            },
            drawCaret: function (e, t) {
              var n = this._chart.ctx,
                r = this._view,
                i = this.getCaretPosition(e, t, r);
              n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3);
            },
            getCaretPosition: function (e, t, n) {
              var r,
                i,
                a,
                o,
                l,
                s,
                u = n.caretSize,
                c = n.cornerRadius,
                d = n.xAlign,
                f = n.yAlign,
                h = e.x,
                p = e.y,
                g = t.width,
                m = t.height;
              if ("center" === f)
                (l = p + m / 2),
                  "left" === d
                    ? ((i = (r = h) - u), (a = r), (o = l + u), (s = l - u))
                    : ((i = (r = h + g) + u),
                      (a = r),
                      (o = l - u),
                      (s = l + u));
              else if (
                ("left" === d
                  ? ((r = (i = h + c + u) - u), (a = i + u))
                  : "right" === d
                  ? ((r = (i = h + g - c - u) - u), (a = i + u))
                  : ((r = (i = n.caretX) - u), (a = i + u)),
                "top" === f)
              )
                (l = (o = p) - u), (s = o);
              else {
                (l = (o = p + m) + u), (s = o);
                var v = a;
                (a = r), (r = v);
              }
              return { x1: r, x2: i, x3: a, y1: o, y2: l, y3: s };
            },
            drawTitle: function (e, t, n) {
              var r,
                i,
                a,
                o = t.title,
                l = o.length;
              if (l) {
                var s = rn(t.rtl, t.x, t.width);
                for (
                  e.x = cn(t, t._titleAlign),
                    n.textAlign = s.textAlign(t._titleAlign),
                    n.textBaseline = "middle",
                    r = t.titleFontSize,
                    i = t.titleSpacing,
                    n.fillStyle = t.titleFontColor,
                    n.font = de.fontString(
                      r,
                      t._titleFontStyle,
                      t._titleFontFamily
                    ),
                    a = 0;
                  a < l;
                  ++a
                )
                  n.fillText(o[a], s.x(e.x), e.y + r / 2),
                    (e.y += r + i),
                    a + 1 === l && (e.y += t.titleMarginBottom - i);
              }
            },
            drawBody: function (e, t, n) {
              var r,
                i,
                a,
                o,
                l,
                s,
                u,
                c,
                d = t.bodyFontSize,
                f = t.bodySpacing,
                h = t._bodyAlign,
                p = t.body,
                g = t.displayColors,
                m = 0,
                v = g ? cn(t, "left") : 0,
                y = rn(t.rtl, t.x, t.width),
                b = function (t) {
                  n.fillText(t, y.x(e.x + m), e.y + d / 2), (e.y += d + f);
                },
                x = y.textAlign(h);
              for (
                n.textAlign = h,
                  n.textBaseline = "middle",
                  n.font = de.fontString(
                    d,
                    t._bodyFontStyle,
                    t._bodyFontFamily
                  ),
                  e.x = cn(t, x),
                  n.fillStyle = t.bodyFontColor,
                  de.each(t.beforeBody, b),
                  m =
                    g && "right" !== x
                      ? "center" === h
                        ? d / 2 + 1
                        : d + 2
                      : 0,
                  l = 0,
                  u = p.length;
                l < u;
                ++l
              ) {
                for (
                  r = p[l],
                    i = t.labelTextColors[l],
                    a = t.labelColors[l],
                    n.fillStyle = i,
                    de.each(r.before, b),
                    s = 0,
                    c = (o = r.lines).length;
                  s < c;
                  ++s
                ) {
                  if (g) {
                    var _ = y.x(v);
                    (n.fillStyle = t.legendColorBackground),
                      n.fillRect(y.leftForLtr(_, d), e.y, d, d),
                      (n.lineWidth = 1),
                      (n.strokeStyle = a.borderColor),
                      n.strokeRect(y.leftForLtr(_, d), e.y, d, d),
                      (n.fillStyle = a.backgroundColor),
                      n.fillRect(
                        y.leftForLtr(y.xPlus(_, 1), d - 2),
                        e.y + 1,
                        d - 2,
                        d - 2
                      ),
                      (n.fillStyle = i);
                  }
                  b(o[s]);
                }
                de.each(r.after, b);
              }
              (m = 0), de.each(t.afterBody, b), (e.y -= f);
            },
            drawFooter: function (e, t, n) {
              var r,
                i,
                a = t.footer,
                o = a.length;
              if (o) {
                var l = rn(t.rtl, t.x, t.width);
                for (
                  e.x = cn(t, t._footerAlign),
                    e.y += t.footerMarginTop,
                    n.textAlign = l.textAlign(t._footerAlign),
                    n.textBaseline = "middle",
                    r = t.footerFontSize,
                    n.fillStyle = t.footerFontColor,
                    n.font = de.fontString(
                      r,
                      t._footerFontStyle,
                      t._footerFontFamily
                    ),
                    i = 0;
                  i < o;
                  ++i
                )
                  n.fillText(a[i], l.x(e.x), e.y + r / 2),
                    (e.y += r + t.footerSpacing);
              }
            },
            drawBackground: function (e, t, n, r) {
              (n.fillStyle = t.backgroundColor),
                (n.strokeStyle = t.borderColor),
                (n.lineWidth = t.borderWidth);
              var i = t.xAlign,
                a = t.yAlign,
                o = e.x,
                l = e.y,
                s = r.width,
                u = r.height,
                c = t.cornerRadius;
              n.beginPath(),
                n.moveTo(o + c, l),
                "top" === a && this.drawCaret(e, r),
                n.lineTo(o + s - c, l),
                n.quadraticCurveTo(o + s, l, o + s, l + c),
                "center" === a && "right" === i && this.drawCaret(e, r),
                n.lineTo(o + s, l + u - c),
                n.quadraticCurveTo(o + s, l + u, o + s - c, l + u),
                "bottom" === a && this.drawCaret(e, r),
                n.lineTo(o + c, l + u),
                n.quadraticCurveTo(o, l + u, o, l + u - c),
                "center" === a && "left" === i && this.drawCaret(e, r),
                n.lineTo(o, l + c),
                n.quadraticCurveTo(o, l, o + c, l),
                n.closePath(),
                n.fill(),
                t.borderWidth > 0 && n.stroke();
            },
            draw: function () {
              var e = this._chart.ctx,
                t = this._view;
              if (0 !== t.opacity) {
                var n = { width: t.width, height: t.height },
                  r = { x: t.x, y: t.y },
                  i = Math.abs(t.opacity < 0.001) ? 0 : t.opacity,
                  a =
                    t.title.length ||
                    t.beforeBody.length ||
                    t.body.length ||
                    t.afterBody.length ||
                    t.footer.length;
                this._options.enabled &&
                  a &&
                  (e.save(),
                  (e.globalAlpha = i),
                  this.drawBackground(r, t, e, n),
                  (r.y += t.yPadding),
                  de.rtl.overrideTextDirection(e, t.textDirection),
                  this.drawTitle(r, t, e),
                  this.drawBody(r, t, e),
                  this.drawFooter(r, t, e),
                  de.rtl.restoreTextDirection(e, t.textDirection),
                  e.restore());
              }
            },
            handleEvent: function (e) {
              var t,
                n = this,
                r = n._options;
              return (
                (n._lastActive = n._lastActive || []),
                "mouseout" === e.type
                  ? (n._active = [])
                  : ((n._active = n._chart.getElementsAtEventForMode(
                      e,
                      r.mode,
                      r
                    )),
                    r.reverse && n._active.reverse()),
                (t = !de.arrayEquals(n._active, n._lastActive)) &&
                  ((n._lastActive = n._active),
                  (r.enabled || r.custom) &&
                    ((n._eventPosition = { x: e.x, y: e.y }),
                    n.update(!0),
                    n.pivot())),
                t
              );
            },
          }),
          hn = an,
          pn = fn;
        pn.positioners = hn;
        var gn = de.valueOrDefault;
        function mn() {
          return de.merge({}, [].slice.call(arguments), {
            merger: function (e, t, n, r) {
              if ("xAxes" === e || "yAxes" === e) {
                var i,
                  a,
                  o,
                  l = n[e].length;
                for (t[e] || (t[e] = []), i = 0; i < l; ++i)
                  (o = n[e][i]),
                    (a = gn(o.type, "xAxes" === e ? "category" : "linear")),
                    i >= t[e].length && t[e].push({}),
                    !t[e][i].type || (o.type && o.type !== t[e][i].type)
                      ? de.merge(t[e][i], [tn.getScaleDefaults(a), o])
                      : de.merge(t[e][i], o);
              } else de._merger(e, t, n, r);
            },
          });
        }
        function vn() {
          return de.merge({}, [].slice.call(arguments), {
            merger: function (e, t, n, r) {
              var i = t[e] || {},
                a = n[e];
              "scales" === e
                ? (t[e] = mn(i, a))
                : "scale" === e
                ? (t[e] = de.merge(i, [tn.getScaleDefaults(a.type), a]))
                : de._merger(e, t, n, r);
            },
          });
        }
        function yn(e) {
          var t = e.options;
          de.each(e.scales, function (t) {
            Nt.removeBox(e, t);
          }),
            (t = vn(oe.global, oe[e.config.type], t)),
            (e.options = e.config.options = t),
            e.ensureScalesHaveIDs(),
            e.buildOrUpdateScales(),
            (e.tooltip._options = t.tooltips),
            e.tooltip.initialize();
        }
        function bn(e, t, n) {
          var r,
            i = function (e) {
              return e.id === r;
            };
          do {
            r = t + n++;
          } while (de.findIndex(e, i) >= 0);
          return r;
        }
        function xn(e) {
          return "top" === e || "bottom" === e;
        }
        function _n(e, t) {
          return function (n, r) {
            return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
          };
        }
        oe._set("global", {
          elements: {},
          events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
          hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400,
          },
          onClick: null,
          maintainAspectRatio: !0,
          responsive: !0,
          responsiveAnimationDuration: 0,
        });
        var wn = function (e, t) {
          return this.construct(e, t), this;
        };
        de.extend(wn.prototype, {
          construct: function (e, t) {
            var n = this;
            t = (function (e) {
              var t = ((e = e || {}).data = e.data || {});
              return (
                (t.datasets = t.datasets || []),
                (t.labels = t.labels || []),
                (e.options = vn(oe.global, oe[e.type], e.options || {})),
                e
              );
            })(t);
            var r = Jt.acquireContext(e, t),
              i = r && r.canvas,
              a = i && i.height,
              o = i && i.width;
            (n.id = de.uid()),
              (n.ctx = r),
              (n.canvas = i),
              (n.config = t),
              (n.width = o),
              (n.height = a),
              (n.aspectRatio = a ? o / a : null),
              (n.options = t.options),
              (n._bufferedRender = !1),
              (n._layers = []),
              (n.chart = n),
              (n.controller = n),
              (wn.instances[n.id] = n),
              Object.defineProperty(n, "data", {
                get: function () {
                  return n.config.data;
                },
                set: function (e) {
                  n.config.data = e;
                },
              }),
              r && i
                ? (n.initialize(), n.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          },
          initialize: function () {
            var e = this;
            return (
              en.notify(e, "beforeInit"),
              de.retinaScale(e, e.options.devicePixelRatio),
              e.bindEvents(),
              e.options.responsive && e.resize(!0),
              e.initToolTip(),
              en.notify(e, "afterInit"),
              e
            );
          },
          clear: function () {
            return de.canvas.clear(this), this;
          },
          stop: function () {
            return _e.cancelAnimation(this), this;
          },
          resize: function (e) {
            var t = this,
              n = t.options,
              r = t.canvas,
              i = (n.maintainAspectRatio && t.aspectRatio) || null,
              a = Math.max(0, Math.floor(de.getMaximumWidth(r))),
              o = Math.max(0, Math.floor(i ? a / i : de.getMaximumHeight(r)));
            if (
              (t.width !== a || t.height !== o) &&
              ((r.width = t.width = a),
              (r.height = t.height = o),
              (r.style.width = a + "px"),
              (r.style.height = o + "px"),
              de.retinaScale(t, n.devicePixelRatio),
              !e)
            ) {
              var l = { width: a, height: o };
              en.notify(t, "resize", [l]),
                n.onResize && n.onResize(t, l),
                t.stop(),
                t.update({ duration: n.responsiveAnimationDuration });
            }
          },
          ensureScalesHaveIDs: function () {
            var e = this.options,
              t = e.scales || {},
              n = e.scale;
            de.each(t.xAxes, function (e, n) {
              e.id || (e.id = bn(t.xAxes, "x-axis-", n));
            }),
              de.each(t.yAxes, function (e, n) {
                e.id || (e.id = bn(t.yAxes, "y-axis-", n));
              }),
              n && (n.id = n.id || "scale");
          },
          buildOrUpdateScales: function () {
            var e = this,
              t = e.options,
              n = e.scales || {},
              r = [],
              i = Object.keys(n).reduce(function (e, t) {
                return (e[t] = !1), e;
              }, {});
            t.scales &&
              (r = r.concat(
                (t.scales.xAxes || []).map(function (e) {
                  return { options: e, dtype: "category", dposition: "bottom" };
                }),
                (t.scales.yAxes || []).map(function (e) {
                  return { options: e, dtype: "linear", dposition: "left" };
                })
              )),
              t.scale &&
                r.push({
                  options: t.scale,
                  dtype: "radialLinear",
                  isDefault: !0,
                  dposition: "chartArea",
                }),
              de.each(r, function (t) {
                var r = t.options,
                  a = r.id,
                  o = gn(r.type, t.dtype);
                xn(r.position) !== xn(t.dposition) &&
                  (r.position = t.dposition),
                  (i[a] = !0);
                var l = null;
                if (a in n && n[a].type === o)
                  ((l = n[a]).options = r), (l.ctx = e.ctx), (l.chart = e);
                else {
                  var s = tn.getScaleConstructor(o);
                  if (!s) return;
                  (l = new s({
                    id: a,
                    type: o,
                    options: r,
                    ctx: e.ctx,
                    chart: e,
                  })),
                    (n[l.id] = l);
                }
                l.mergeTicksOptions(), t.isDefault && (e.scale = l);
              }),
              de.each(i, function (e, t) {
                e || delete n[t];
              }),
              (e.scales = n),
              tn.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function () {
            var e,
              t,
              n = this,
              r = [],
              i = n.data.datasets;
            for (e = 0, t = i.length; e < t; e++) {
              var a = i[e],
                o = n.getDatasetMeta(e),
                l = a.type || n.config.type;
              if (
                (o.type &&
                  o.type !== l &&
                  (n.destroyDatasetMeta(e), (o = n.getDatasetMeta(e))),
                (o.type = l),
                (o.order = a.order || 0),
                (o.index = e),
                o.controller)
              )
                o.controller.updateIndex(e), o.controller.linkScales();
              else {
                var s = yt[o.type];
                if (void 0 === s)
                  throw new Error('"' + o.type + '" is not a chart type.');
                (o.controller = new s(n, e)), r.push(o.controller);
              }
            }
            return r;
          },
          resetElements: function () {
            var e = this;
            de.each(
              e.data.datasets,
              function (t, n) {
                e.getDatasetMeta(n).controller.reset();
              },
              e
            );
          },
          reset: function () {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function (e) {
            var t,
              n,
              r = this;
            if (
              ((e && "object" === typeof e) ||
                (e = { duration: e, lazy: arguments[1] }),
              yn(r),
              en._invalidate(r),
              !1 !== en.notify(r, "beforeUpdate"))
            ) {
              r.tooltip._data = r.data;
              var i = r.buildOrUpdateControllers();
              for (t = 0, n = r.data.datasets.length; t < n; t++)
                r.getDatasetMeta(t).controller.buildOrUpdateElements();
              r.updateLayout(),
                r.options.animation &&
                  r.options.animation.duration &&
                  de.each(i, function (e) {
                    e.reset();
                  }),
                r.updateDatasets(),
                r.tooltip.initialize(),
                (r.lastActive = []),
                en.notify(r, "afterUpdate"),
                r._layers.sort(_n("z", "_idx")),
                r._bufferedRender
                  ? (r._bufferedRequest = {
                      duration: e.duration,
                      easing: e.easing,
                      lazy: e.lazy,
                    })
                  : r.render(e);
            }
          },
          updateLayout: function () {
            var e = this;
            !1 !== en.notify(e, "beforeLayout") &&
              (Nt.update(this, this.width, this.height),
              (e._layers = []),
              de.each(
                e.boxes,
                function (t) {
                  t._configure && t._configure(),
                    e._layers.push.apply(e._layers, t._layers());
                },
                e
              ),
              e._layers.forEach(function (e, t) {
                e._idx = t;
              }),
              en.notify(e, "afterScaleUpdate"),
              en.notify(e, "afterLayout"));
          },
          updateDatasets: function () {
            if (!1 !== en.notify(this, "beforeDatasetsUpdate")) {
              for (var e = 0, t = this.data.datasets.length; e < t; ++e)
                this.updateDataset(e);
              en.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function (e) {
            var t = this.getDatasetMeta(e),
              n = { meta: t, index: e };
            !1 !== en.notify(this, "beforeDatasetUpdate", [n]) &&
              (t.controller._update(),
              en.notify(this, "afterDatasetUpdate", [n]));
          },
          render: function (e) {
            var t = this;
            (e && "object" === typeof e) ||
              (e = { duration: e, lazy: arguments[1] });
            var n = t.options.animation,
              r = gn(e.duration, n && n.duration),
              i = e.lazy;
            if (!1 !== en.notify(t, "beforeRender")) {
              var a = function (e) {
                en.notify(t, "afterRender"),
                  de.callback(n && n.onComplete, [e], t);
              };
              if (n && r) {
                var o = new xe({
                  numSteps: r / 16.66,
                  easing: e.easing || n.easing,
                  render: function (e, t) {
                    var n = de.easing.effects[t.easing],
                      r = t.currentStep,
                      i = r / t.numSteps;
                    e.draw(n(i), i, r);
                  },
                  onAnimationProgress: n.onProgress,
                  onAnimationComplete: a,
                });
                _e.addAnimation(t, o, r, i);
              } else t.draw(), a(new xe({ numSteps: 0, chart: t }));
              return t;
            }
          },
          draw: function (e) {
            var t,
              n,
              r = this;
            if (
              (r.clear(),
              de.isNullOrUndef(e) && (e = 1),
              r.transition(e),
              !(r.width <= 0 || r.height <= 0) &&
                !1 !== en.notify(r, "beforeDraw", [e]))
            ) {
              for (n = r._layers, t = 0; t < n.length && n[t].z <= 0; ++t)
                n[t].draw(r.chartArea);
              for (r.drawDatasets(e); t < n.length; ++t) n[t].draw(r.chartArea);
              r._drawTooltip(e), en.notify(r, "afterDraw", [e]);
            }
          },
          transition: function (e) {
            for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t)
              this.isDatasetVisible(t) &&
                this.getDatasetMeta(t).controller.transition(e);
            this.tooltip.transition(e);
          },
          _getSortedDatasetMetas: function (e) {
            var t,
              n,
              r = [];
            for (t = 0, n = (this.data.datasets || []).length; t < n; ++t)
              (e && !this.isDatasetVisible(t)) ||
                r.push(this.getDatasetMeta(t));
            return r.sort(_n("order", "index")), r;
          },
          _getSortedVisibleDatasetMetas: function () {
            return this._getSortedDatasetMetas(!0);
          },
          drawDatasets: function (e) {
            var t, n;
            if (!1 !== en.notify(this, "beforeDatasetsDraw", [e])) {
              for (
                n = (t = this._getSortedVisibleDatasetMetas()).length - 1;
                n >= 0;
                --n
              )
                this.drawDataset(t[n], e);
              en.notify(this, "afterDatasetsDraw", [e]);
            }
          },
          drawDataset: function (e, t) {
            var n = { meta: e, index: e.index, easingValue: t };
            !1 !== en.notify(this, "beforeDatasetDraw", [n]) &&
              (e.controller.draw(t), en.notify(this, "afterDatasetDraw", [n]));
          },
          _drawTooltip: function (e) {
            var t = this.tooltip,
              n = { tooltip: t, easingValue: e };
            !1 !== en.notify(this, "beforeTooltipDraw", [n]) &&
              (t.draw(), en.notify(this, "afterTooltipDraw", [n]));
          },
          getElementAtEvent: function (e) {
            return Mt.modes.single(this, e);
          },
          getElementsAtEvent: function (e) {
            return Mt.modes.label(this, e, { intersect: !0 });
          },
          getElementsAtXAxis: function (e) {
            return Mt.modes["x-axis"](this, e, { intersect: !0 });
          },
          getElementsAtEventForMode: function (e, t, n) {
            var r = Mt.modes[t];
            return "function" === typeof r ? r(this, e, n) : [];
          },
          getDatasetAtEvent: function (e) {
            return Mt.modes.dataset(this, e, { intersect: !0 });
          },
          getDatasetMeta: function (e) {
            var t = this.data.datasets[e];
            t._meta || (t._meta = {});
            var n = t._meta[this.id];
            return (
              n ||
                (n = t._meta[this.id] =
                  {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: t.order || 0,
                    index: e,
                  }),
              n
            );
          },
          getVisibleDatasetCount: function () {
            for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t)
              this.isDatasetVisible(t) && e++;
            return e;
          },
          isDatasetVisible: function (e) {
            var t = this.getDatasetMeta(e);
            return "boolean" === typeof t.hidden
              ? !t.hidden
              : !this.data.datasets[e].hidden;
          },
          generateLegend: function () {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function (e) {
            var t = this.id,
              n = this.data.datasets[e],
              r = n._meta && n._meta[t];
            r && (r.controller.destroy(), delete n._meta[t]);
          },
          destroy: function () {
            var e,
              t,
              n = this,
              r = n.canvas;
            for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e)
              n.destroyDatasetMeta(e);
            r &&
              (n.unbindEvents(),
              de.canvas.clear(n),
              Jt.releaseContext(n.ctx),
              (n.canvas = null),
              (n.ctx = null)),
              en.notify(n, "destroy"),
              delete wn.instances[n.id];
          },
          toBase64Image: function () {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function () {
            var e = this;
            e.tooltip = new pn(
              {
                _chart: e,
                _chartInstance: e,
                _data: e.data,
                _options: e.options.tooltips,
              },
              e
            );
          },
          bindEvents: function () {
            var e = this,
              t = (e._listeners = {}),
              n = function () {
                e.eventHandler.apply(e, arguments);
              };
            de.each(e.options.events, function (r) {
              Jt.addEventListener(e, r, n), (t[r] = n);
            }),
              e.options.responsive &&
                ((n = function () {
                  e.resize();
                }),
                Jt.addEventListener(e, "resize", n),
                (t.resize = n));
          },
          unbindEvents: function () {
            var e = this,
              t = e._listeners;
            t &&
              (delete e._listeners,
              de.each(t, function (t, n) {
                Jt.removeEventListener(e, n, t);
              }));
          },
          updateHoverStyle: function (e, t, n) {
            var r,
              i,
              a,
              o = n ? "set" : "remove";
            for (i = 0, a = e.length; i < a; ++i)
              (r = e[i]) &&
                this.getDatasetMeta(r._datasetIndex).controller[
                  o + "HoverStyle"
                ](r);
            "dataset" === t &&
              this.getDatasetMeta(e[0]._datasetIndex).controller[
                "_" + o + "DatasetHoverStyle"
              ]();
          },
          eventHandler: function (e) {
            var t = this,
              n = t.tooltip;
            if (!1 !== en.notify(t, "beforeEvent", [e])) {
              (t._bufferedRender = !0), (t._bufferedRequest = null);
              var r = t.handleEvent(e);
              n && (r = n._start ? n.handleEvent(e) : r | n.handleEvent(e)),
                en.notify(t, "afterEvent", [e]);
              var i = t._bufferedRequest;
              return (
                i
                  ? t.render(i)
                  : r &&
                    !t.animating &&
                    (t.stop(),
                    t.render({
                      duration: t.options.hover.animationDuration,
                      lazy: !0,
                    })),
                (t._bufferedRender = !1),
                (t._bufferedRequest = null),
                t
              );
            }
          },
          handleEvent: function (e) {
            var t,
              n = this,
              r = n.options || {},
              i = r.hover;
            return (
              (n.lastActive = n.lastActive || []),
              "mouseout" === e.type
                ? (n.active = [])
                : (n.active = n.getElementsAtEventForMode(e, i.mode, i)),
              de.callback(
                r.onHover || r.hover.onHover,
                [e.native, n.active],
                n
              ),
              ("mouseup" !== e.type && "click" !== e.type) ||
                (r.onClick && r.onClick.call(n, e.native, n.active)),
              n.lastActive.length &&
                n.updateHoverStyle(n.lastActive, i.mode, !1),
              n.active.length &&
                i.mode &&
                n.updateHoverStyle(n.active, i.mode, !0),
              (t = !de.arrayEquals(n.active, n.lastActive)),
              (n.lastActive = n.active),
              t
            );
          },
        }),
          (wn.instances = {});
        var kn = wn;
        function Sn() {
          throw new Error(
            "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
          );
        }
        function Mn(e) {
          this.options = e || {};
        }
        (wn.Controller = wn),
          (wn.types = {}),
          (de.configMerge = vn),
          (de.scaleMerge = mn),
          de.extend(Mn.prototype, {
            formats: Sn,
            parse: Sn,
            format: Sn,
            add: Sn,
            diff: Sn,
            startOf: Sn,
            endOf: Sn,
            _create: function (e) {
              return e;
            },
          }),
          (Mn.override = function (e) {
            de.extend(Mn.prototype, e);
          });
        var Tn = { _date: Mn },
          Cn = {
            formatters: {
              values: function (e) {
                return de.isArray(e) ? e : "" + e;
              },
              linear: function (e, t, n) {
                var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(r) > 1 &&
                  e !== Math.floor(e) &&
                  (r = e - Math.floor(e));
                var i = de.log10(Math.abs(r)),
                  a = "";
                if (0 !== e)
                  if (
                    Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4
                  ) {
                    var o = de.log10(Math.abs(e)),
                      l = Math.floor(o) - Math.floor(i);
                    (l = Math.max(Math.min(l, 20), 0)),
                      (a = e.toExponential(l));
                  } else {
                    var s = -1 * Math.floor(i);
                    (s = Math.max(Math.min(s, 20), 0)), (a = e.toFixed(s));
                  }
                else a = "0";
                return a;
              },
              logarithmic: function (e, t, n) {
                var r = e / Math.pow(10, Math.floor(de.log10(e)));
                return 0 === e
                  ? "0"
                  : 1 === r ||
                    2 === r ||
                    5 === r ||
                    0 === t ||
                    t === n.length - 1
                  ? e.toExponential()
                  : "";
              },
            },
          },
          Pn = de.isArray,
          En = de.isNullOrUndef,
          Dn = de.valueOrDefault,
          On = de.valueAtIndexOrDefault;
        function An(e, t, n) {
          var r,
            i = e.getTicks().length,
            a = Math.min(t, i - 1),
            o = e.getPixelForTick(a),
            l = e._startPixel,
            s = e._endPixel;
          if (
            !(
              n &&
              ((r =
                1 === i
                  ? Math.max(o - l, s - o)
                  : 0 === t
                  ? (e.getPixelForTick(1) - o) / 2
                  : (o - e.getPixelForTick(a - 1)) / 2),
              (o += a < t ? r : -r) < l - 1e-6 || o > s + 1e-6)
            )
          )
            return o;
        }
        function In(e, t, n, r) {
          var i,
            a,
            o,
            l,
            s,
            u,
            c,
            d,
            f,
            h,
            p,
            g,
            m,
            v = n.length,
            y = [],
            b = [],
            x = [];
          for (i = 0; i < v; ++i) {
            if (
              ((l = n[i].label),
              (s = n[i].major ? t.major : t.minor),
              (e.font = u = s.string),
              (c = r[u] = r[u] || { data: {}, gc: [] }),
              (d = s.lineHeight),
              (f = h = 0),
              En(l) || Pn(l))
            ) {
              if (Pn(l))
                for (a = 0, o = l.length; a < o; ++a)
                  (p = l[a]),
                    En(p) ||
                      Pn(p) ||
                      ((f = de.measureText(e, c.data, c.gc, f, p)), (h += d));
            } else (f = de.measureText(e, c.data, c.gc, f, l)), (h = d);
            y.push(f), b.push(h), x.push(d / 2);
          }
          function _(e) {
            return { width: y[e] || 0, height: b[e] || 0, offset: x[e] || 0 };
          }
          return (
            (function (e, t) {
              de.each(e, function (e) {
                var n,
                  r = e.gc,
                  i = r.length / 2;
                if (i > t) {
                  for (n = 0; n < i; ++n) delete e.data[r[n]];
                  r.splice(0, i);
                }
              });
            })(r, v),
            (g = y.indexOf(Math.max.apply(null, y))),
            (m = b.indexOf(Math.max.apply(null, b))),
            { first: _(0), last: _(v - 1), widest: _(g), highest: _(m) }
          );
        }
        function Fn(e) {
          return e.drawTicks ? e.tickMarkLength : 0;
        }
        function Nn(e) {
          var t, n;
          return e.display
            ? ((t = de.options._parseFont(e)),
              (n = de.options.toPadding(e.padding)),
              t.lineHeight + n.height)
            : 0;
        }
        function Ln(e, t) {
          return de.extend(
            de.options._parseFont({
              fontFamily: Dn(t.fontFamily, e.fontFamily),
              fontSize: Dn(t.fontSize, e.fontSize),
              fontStyle: Dn(t.fontStyle, e.fontStyle),
              lineHeight: Dn(t.lineHeight, e.lineHeight),
            }),
            {
              color: de.options.resolve([
                t.fontColor,
                e.fontColor,
                oe.global.defaultFontColor,
              ]),
            }
          );
        }
        function Rn(e) {
          var t = Ln(e, e.minor);
          return { minor: t, major: e.major.enabled ? Ln(e, e.major) : t };
        }
        function zn(e) {
          var t,
            n,
            r,
            i = [];
          for (n = 0, r = e.length; n < r; ++n)
            "undefined" !== typeof (t = e[n])._index && i.push(t);
          return i;
        }
        function Wn(e, t, n, r) {
          var i,
            a,
            o,
            l,
            s = Dn(n, 0),
            u = Math.min(Dn(r, e.length), e.length),
            c = 0;
          for (
            t = Math.ceil(t), r && (t = (i = r - n) / Math.floor(i / t)), l = s;
            l < 0;

          )
            c++, (l = Math.round(s + c * t));
          for (a = Math.max(s, 0); a < u; a++)
            (o = e[a]),
              a === l
                ? ((o._index = a), c++, (l = Math.round(s + c * t)))
                : delete o.label;
        }
        oe._set("scale", {
          display: !0,
          position: "left",
          offset: !1,
          gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0,
          },
          scaleLabel: {
            display: !1,
            labelString: "",
            padding: { top: 4, bottom: 4 },
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: Cn.formatters.values,
            minor: {},
            major: {},
          },
        });
        var jn = ye.extend({
          zeroLineIndex: 0,
          getPadding: function () {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0,
            };
          },
          getTicks: function () {
            return this._ticks;
          },
          _getLabels: function () {
            var e = this.chart.data;
            return (
              this.options.labels ||
              (this.isHorizontal() ? e.xLabels : e.yLabels) ||
              e.labels
            );
          },
          mergeTicksOptions: function () {},
          beforeUpdate: function () {
            de.callback(this.options.beforeUpdate, [this]);
          },
          update: function (e, t, n) {
            var r,
              i,
              a,
              o,
              l,
              s = this,
              u = s.options.ticks,
              c = u.sampleSize;
            if (
              (s.beforeUpdate(),
              (s.maxWidth = e),
              (s.maxHeight = t),
              (s.margins = de.extend(
                { left: 0, right: 0, top: 0, bottom: 0 },
                n
              )),
              (s._ticks = null),
              (s.ticks = null),
              (s._labelSizes = null),
              (s._maxLabelLines = 0),
              (s.longestLabelWidth = 0),
              (s.longestTextCache = s.longestTextCache || {}),
              (s._gridLineItems = null),
              (s._labelItems = null),
              s.beforeSetDimensions(),
              s.setDimensions(),
              s.afterSetDimensions(),
              s.beforeDataLimits(),
              s.determineDataLimits(),
              s.afterDataLimits(),
              s.beforeBuildTicks(),
              (o = s.buildTicks() || []),
              (!(o = s.afterBuildTicks(o) || o) || !o.length) && s.ticks)
            )
              for (o = [], r = 0, i = s.ticks.length; r < i; ++r)
                o.push({ value: s.ticks[r], major: !1 });
            return (
              (s._ticks = o),
              (l = c < o.length),
              (a = s._convertTicksToLabels(
                l
                  ? (function (e, t) {
                      for (
                        var n = [], r = e.length / t, i = 0, a = e.length;
                        i < a;
                        i += r
                      )
                        n.push(e[Math.floor(i)]);
                      return n;
                    })(o, c)
                  : o
              )),
              s._configure(),
              s.beforeCalculateTickRotation(),
              s.calculateTickRotation(),
              s.afterCalculateTickRotation(),
              s.beforeFit(),
              s.fit(),
              s.afterFit(),
              (s._ticksToDraw =
                u.display && (u.autoSkip || "auto" === u.source)
                  ? s._autoSkip(o)
                  : o),
              l && (a = s._convertTicksToLabels(s._ticksToDraw)),
              (s.ticks = a),
              s.afterUpdate(),
              s.minSize
            );
          },
          _configure: function () {
            var e,
              t,
              n = this,
              r = n.options.ticks.reverse;
            n.isHorizontal()
              ? ((e = n.left), (t = n.right))
              : ((e = n.top), (t = n.bottom), (r = !r)),
              (n._startPixel = e),
              (n._endPixel = t),
              (n._reversePixels = r),
              (n._length = t - e);
          },
          afterUpdate: function () {
            de.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function () {
            de.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function () {
            var e = this;
            e.isHorizontal()
              ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
              : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
              (e.paddingLeft = 0),
              (e.paddingTop = 0),
              (e.paddingRight = 0),
              (e.paddingBottom = 0);
          },
          afterSetDimensions: function () {
            de.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function () {
            de.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: de.noop,
          afterDataLimits: function () {
            de.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function () {
            de.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: de.noop,
          afterBuildTicks: function (e) {
            var t = this;
            return Pn(e) && e.length
              ? de.callback(t.options.afterBuildTicks, [t, e])
              : ((t.ticks =
                  de.callback(t.options.afterBuildTicks, [t, t.ticks]) ||
                  t.ticks),
                e);
          },
          beforeTickToLabelConversion: function () {
            de.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function () {
            var e = this.options.ticks;
            this.ticks = this.ticks.map(e.userCallback || e.callback, this);
          },
          afterTickToLabelConversion: function () {
            de.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function () {
            de.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function () {
            var e,
              t,
              n,
              r,
              i,
              a,
              o,
              l = this,
              s = l.options,
              u = s.ticks,
              c = l.getTicks().length,
              d = u.minRotation || 0,
              f = u.maxRotation,
              h = d;
            !l._isVisible() ||
            !u.display ||
            d >= f ||
            c <= 1 ||
            !l.isHorizontal()
              ? (l.labelRotation = d)
              : ((t = (e = l._getLabelSizes()).widest.width),
                (n = e.highest.height - e.highest.offset),
                (r = Math.min(l.maxWidth, l.chart.width - t)),
                t + 6 > (i = s.offset ? l.maxWidth / c : r / (c - 1)) &&
                  ((i = r / (c - (s.offset ? 0.5 : 1))),
                  (a =
                    l.maxHeight -
                    Fn(s.gridLines) -
                    u.padding -
                    Nn(s.scaleLabel)),
                  (o = Math.sqrt(t * t + n * n)),
                  (h = de.toDegrees(
                    Math.min(
                      Math.asin(Math.min((e.highest.height + 6) / i, 1)),
                      Math.asin(Math.min(a / o, 1)) - Math.asin(n / o)
                    )
                  )),
                  (h = Math.max(d, Math.min(f, h)))),
                (l.labelRotation = h));
          },
          afterCalculateTickRotation: function () {
            de.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function () {
            de.callback(this.options.beforeFit, [this]);
          },
          fit: function () {
            var e = this,
              t = (e.minSize = { width: 0, height: 0 }),
              n = e.chart,
              r = e.options,
              i = r.ticks,
              a = r.scaleLabel,
              o = r.gridLines,
              l = e._isVisible(),
              s = "bottom" === r.position,
              u = e.isHorizontal();
            if (
              (u ? (t.width = e.maxWidth) : l && (t.width = Fn(o) + Nn(a)),
              u ? l && (t.height = Fn(o) + Nn(a)) : (t.height = e.maxHeight),
              i.display && l)
            ) {
              var c = Rn(i),
                d = e._getLabelSizes(),
                f = d.first,
                h = d.last,
                p = d.widest,
                g = d.highest,
                m = 0.4 * c.minor.lineHeight,
                v = i.padding;
              if (u) {
                var y = 0 !== e.labelRotation,
                  b = de.toRadians(e.labelRotation),
                  x = Math.cos(b),
                  _ = Math.sin(b),
                  w =
                    _ * p.width +
                    x * (g.height - (y ? g.offset : 0)) +
                    (y ? 0 : m);
                t.height = Math.min(e.maxHeight, t.height + w + v);
                var k,
                  S,
                  M = e.getPixelForTick(0) - e.left,
                  T = e.right - e.getPixelForTick(e.getTicks().length - 1);
                y
                  ? ((k = s
                      ? x * f.width + _ * f.offset
                      : _ * (f.height - f.offset)),
                    (S = s
                      ? _ * (h.height - h.offset)
                      : x * h.width + _ * h.offset))
                  : ((k = f.width / 2), (S = h.width / 2)),
                  (e.paddingLeft =
                    Math.max(((k - M) * e.width) / (e.width - M), 0) + 3),
                  (e.paddingRight =
                    Math.max(((S - T) * e.width) / (e.width - T), 0) + 3);
              } else {
                var C = i.mirror ? 0 : p.width + v + m;
                (t.width = Math.min(e.maxWidth, t.width + C)),
                  (e.paddingTop = f.height / 2),
                  (e.paddingBottom = h.height / 2);
              }
            }
            e.handleMargins(),
              u
                ? ((e.width = e._length =
                    n.width - e.margins.left - e.margins.right),
                  (e.height = t.height))
                : ((e.width = t.width),
                  (e.height = e._length =
                    n.height - e.margins.top - e.margins.bottom));
          },
          handleMargins: function () {
            var e = this;
            e.margins &&
              ((e.margins.left = Math.max(e.paddingLeft, e.margins.left)),
              (e.margins.top = Math.max(e.paddingTop, e.margins.top)),
              (e.margins.right = Math.max(e.paddingRight, e.margins.right)),
              (e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom)));
          },
          afterFit: function () {
            de.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function () {
            var e = this.options.position;
            return "top" === e || "bottom" === e;
          },
          isFullWidth: function () {
            return this.options.fullWidth;
          },
          getRightValue: function (e) {
            if (En(e)) return NaN;
            if (("number" === typeof e || e instanceof Number) && !isFinite(e))
              return NaN;
            if (e)
              if (this.isHorizontal()) {
                if (void 0 !== e.x) return this.getRightValue(e.x);
              } else if (void 0 !== e.y) return this.getRightValue(e.y);
            return e;
          },
          _convertTicksToLabels: function (e) {
            var t,
              n,
              r,
              i = this;
            for (
              i.ticks = e.map(function (e) {
                return e.value;
              }),
                i.beforeTickToLabelConversion(),
                t = i.convertTicksToLabels(e) || i.ticks,
                i.afterTickToLabelConversion(),
                n = 0,
                r = e.length;
              n < r;
              ++n
            )
              e[n].label = t[n];
            return t;
          },
          _getLabelSizes: function () {
            var e = this,
              t = e._labelSizes;
            return (
              t ||
                ((e._labelSizes = t =
                  In(
                    e.ctx,
                    Rn(e.options.ticks),
                    e.getTicks(),
                    e.longestTextCache
                  )),
                (e.longestLabelWidth = t.widest.width)),
              t
            );
          },
          _parseValue: function (e) {
            var t, n, r, i;
            return (
              Pn(e)
                ? ((t = +this.getRightValue(e[0])),
                  (n = +this.getRightValue(e[1])),
                  (r = Math.min(t, n)),
                  (i = Math.max(t, n)))
                : ((t = void 0),
                  (n = e = +this.getRightValue(e)),
                  (r = e),
                  (i = e)),
              { min: r, max: i, start: t, end: n }
            );
          },
          _getScaleLabel: function (e) {
            var t = this._parseValue(e);
            return void 0 !== t.start
              ? "[" + t.start + ", " + t.end + "]"
              : +this.getRightValue(e);
          },
          getLabelForIndex: de.noop,
          getPixelForValue: de.noop,
          getValueForPixel: de.noop,
          getPixelForTick: function (e) {
            var t = this.options.offset,
              n = this._ticks.length,
              r = 1 / Math.max(n - (t ? 0 : 1), 1);
            return e < 0 || e > n - 1
              ? null
              : this.getPixelForDecimal(e * r + (t ? r / 2 : 0));
          },
          getPixelForDecimal: function (e) {
            return (
              this._reversePixels && (e = 1 - e),
              this._startPixel + e * this._length
            );
          },
          getDecimalForPixel: function (e) {
            var t = (e - this._startPixel) / this._length;
            return this._reversePixels ? 1 - t : t;
          },
          getBasePixel: function () {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function () {
            var e = this.min,
              t = this.max;
            return this.beginAtZero
              ? 0
              : e < 0 && t < 0
              ? t
              : e > 0 && t > 0
              ? e
              : 0;
          },
          _autoSkip: function (e) {
            var t,
              n,
              r,
              i,
              a = this.options.ticks,
              o = this._length,
              l = a.maxTicksLimit || o / this._tickSize() + 1,
              s = a.major.enabled
                ? (function (e) {
                    var t,
                      n,
                      r = [];
                    for (t = 0, n = e.length; t < n; t++)
                      e[t].major && r.push(t);
                    return r;
                  })(e)
                : [],
              u = s.length,
              c = s[0],
              d = s[u - 1];
            if (u > l)
              return (
                (function (e, t, n) {
                  var r,
                    i,
                    a = 0,
                    o = t[0];
                  for (n = Math.ceil(n), r = 0; r < e.length; r++)
                    (i = e[r]),
                      r === o
                        ? ((i._index = r), (o = t[++a * n]))
                        : delete i.label;
                })(e, s, u / l),
                zn(e)
              );
            if (
              ((r = (function (e, t, n, r) {
                var i,
                  a,
                  o,
                  l,
                  s = (function (e) {
                    var t,
                      n,
                      r = e.length;
                    if (r < 2) return !1;
                    for (n = e[0], t = 1; t < r; ++t)
                      if (e[t] - e[t - 1] !== n) return !1;
                    return n;
                  })(e),
                  u = (t.length - 1) / r;
                if (!s) return Math.max(u, 1);
                for (
                  o = 0, l = (i = de.math._factorize(s)).length - 1;
                  o < l;
                  o++
                )
                  if ((a = i[o]) > u) return a;
                return Math.max(u, 1);
              })(s, e, 0, l)),
              u > 0)
            ) {
              for (t = 0, n = u - 1; t < n; t++) Wn(e, r, s[t], s[t + 1]);
              return (
                (i = u > 1 ? (d - c) / (u - 1) : null),
                Wn(e, r, de.isNullOrUndef(i) ? 0 : c - i, c),
                Wn(e, r, d, de.isNullOrUndef(i) ? e.length : d + i),
                zn(e)
              );
            }
            return Wn(e, r), zn(e);
          },
          _tickSize: function () {
            var e = this.options.ticks,
              t = de.toRadians(this.labelRotation),
              n = Math.abs(Math.cos(t)),
              r = Math.abs(Math.sin(t)),
              i = this._getLabelSizes(),
              a = e.autoSkipPadding || 0,
              o = i ? i.widest.width + a : 0,
              l = i ? i.highest.height + a : 0;
            return this.isHorizontal()
              ? l * n > o * r
                ? o / n
                : l / r
              : l * r < o * n
              ? l / n
              : o / r;
          },
          _isVisible: function () {
            var e,
              t,
              n,
              r = this.chart,
              i = this.options.display;
            if ("auto" !== i) return !!i;
            for (e = 0, t = r.data.datasets.length; e < t; ++e)
              if (
                r.isDatasetVisible(e) &&
                ((n = r.getDatasetMeta(e)).xAxisID === this.id ||
                  n.yAxisID === this.id)
              )
                return !0;
            return !1;
          },
          _computeGridLineItems: function (e) {
            var t,
              n,
              r,
              i,
              a,
              o,
              l,
              s,
              u,
              c,
              d,
              f,
              h,
              p,
              g,
              m,
              v,
              y = this,
              b = y.chart,
              x = y.options,
              _ = x.gridLines,
              w = x.position,
              k = _.offsetGridLines,
              S = y.isHorizontal(),
              M = y._ticksToDraw,
              T = M.length + (k ? 1 : 0),
              C = Fn(_),
              P = [],
              E = _.drawBorder ? On(_.lineWidth, 0, 0) : 0,
              D = E / 2,
              O = de._alignPixel,
              A = function (e) {
                return O(b, e, E);
              };
            for (
              "top" === w
                ? ((t = A(y.bottom)),
                  (l = y.bottom - C),
                  (u = t - D),
                  (d = A(e.top) + D),
                  (h = e.bottom))
                : "bottom" === w
                ? ((t = A(y.top)),
                  (d = e.top),
                  (h = A(e.bottom) - D),
                  (l = t + D),
                  (u = y.top + C))
                : "left" === w
                ? ((t = A(y.right)),
                  (o = y.right - C),
                  (s = t - D),
                  (c = A(e.left) + D),
                  (f = e.right))
                : ((t = A(y.left)),
                  (c = e.left),
                  (f = A(e.right) - D),
                  (o = t + D),
                  (s = y.left + C)),
                n = 0;
              n < T;
              ++n
            )
              (r = M[n] || {}),
                (En(r.label) && n < M.length) ||
                  (n === y.zeroLineIndex && x.offset === k
                    ? ((p = _.zeroLineWidth),
                      (g = _.zeroLineColor),
                      (m = _.zeroLineBorderDash || []),
                      (v = _.zeroLineBorderDashOffset || 0))
                    : ((p = On(_.lineWidth, n, 1)),
                      (g = On(_.color, n, "rgba(0,0,0,0.1)")),
                      (m = _.borderDash || []),
                      (v = _.borderDashOffset || 0)),
                  void 0 !== (i = An(y, r._index || n, k)) &&
                    ((a = O(b, i, p)),
                    S ? (o = s = c = f = a) : (l = u = d = h = a),
                    P.push({
                      tx1: o,
                      ty1: l,
                      tx2: s,
                      ty2: u,
                      x1: c,
                      y1: d,
                      x2: f,
                      y2: h,
                      width: p,
                      color: g,
                      borderDash: m,
                      borderDashOffset: v,
                    })));
            return (P.ticksLength = T), (P.borderValue = t), P;
          },
          _computeLabelItems: function () {
            var e,
              t,
              n,
              r,
              i,
              a,
              o,
              l,
              s,
              u,
              c,
              d,
              f = this,
              h = f.options,
              p = h.ticks,
              g = h.position,
              m = p.mirror,
              v = f.isHorizontal(),
              y = f._ticksToDraw,
              b = Rn(p),
              x = p.padding,
              _ = Fn(h.gridLines),
              w = -de.toRadians(f.labelRotation),
              k = [];
            for (
              "top" === g
                ? ((a = f.bottom - _ - x), (o = w ? "left" : "center"))
                : "bottom" === g
                ? ((a = f.top + _ + x), (o = w ? "right" : "center"))
                : "left" === g
                ? ((i = f.right - (m ? 0 : _) - x), (o = m ? "left" : "right"))
                : ((i = f.left + (m ? 0 : _) + x), (o = m ? "right" : "left")),
                e = 0,
                t = y.length;
              e < t;
              ++e
            )
              (r = (n = y[e]).label),
                En(r) ||
                  ((l = f.getPixelForTick(n._index || e) + p.labelOffset),
                  (u = (s = n.major ? b.major : b.minor).lineHeight),
                  (c = Pn(r) ? r.length : 1),
                  v
                    ? ((i = l),
                      (d =
                        "top" === g
                          ? ((w ? 1 : 0.5) - c) * u
                          : (w ? 0 : 0.5) * u))
                    : ((a = l), (d = ((1 - c) * u) / 2)),
                  k.push({
                    x: i,
                    y: a,
                    rotation: w,
                    label: r,
                    font: s,
                    textOffset: d,
                    textAlign: o,
                  }));
            return k;
          },
          _drawGrid: function (e) {
            var t = this,
              n = t.options.gridLines;
            if (n.display) {
              var r,
                i,
                a,
                o,
                l,
                s = t.ctx,
                u = t.chart,
                c = de._alignPixel,
                d = n.drawBorder ? On(n.lineWidth, 0, 0) : 0,
                f =
                  t._gridLineItems ||
                  (t._gridLineItems = t._computeGridLineItems(e));
              for (a = 0, o = f.length; a < o; ++a)
                (r = (l = f[a]).width),
                  (i = l.color),
                  r &&
                    i &&
                    (s.save(),
                    (s.lineWidth = r),
                    (s.strokeStyle = i),
                    s.setLineDash &&
                      (s.setLineDash(l.borderDash),
                      (s.lineDashOffset = l.borderDashOffset)),
                    s.beginPath(),
                    n.drawTicks &&
                      (s.moveTo(l.tx1, l.ty1), s.lineTo(l.tx2, l.ty2)),
                    n.drawOnChartArea &&
                      (s.moveTo(l.x1, l.y1), s.lineTo(l.x2, l.y2)),
                    s.stroke(),
                    s.restore());
              if (d) {
                var h,
                  p,
                  g,
                  m,
                  v = d,
                  y = On(n.lineWidth, f.ticksLength - 1, 1),
                  b = f.borderValue;
                t.isHorizontal()
                  ? ((h = c(u, t.left, v) - v / 2),
                    (p = c(u, t.right, y) + y / 2),
                    (g = m = b))
                  : ((g = c(u, t.top, v) - v / 2),
                    (m = c(u, t.bottom, y) + y / 2),
                    (h = p = b)),
                  (s.lineWidth = d),
                  (s.strokeStyle = On(n.color, 0)),
                  s.beginPath(),
                  s.moveTo(h, g),
                  s.lineTo(p, m),
                  s.stroke();
              }
            }
          },
          _drawLabels: function () {
            var e = this;
            if (e.options.ticks.display) {
              var t,
                n,
                r,
                i,
                a,
                o,
                l,
                s,
                u = e.ctx,
                c = e._labelItems || (e._labelItems = e._computeLabelItems());
              for (t = 0, r = c.length; t < r; ++t) {
                if (
                  ((o = (a = c[t]).font),
                  u.save(),
                  u.translate(a.x, a.y),
                  u.rotate(a.rotation),
                  (u.font = o.string),
                  (u.fillStyle = o.color),
                  (u.textBaseline = "middle"),
                  (u.textAlign = a.textAlign),
                  (l = a.label),
                  (s = a.textOffset),
                  Pn(l))
                )
                  for (n = 0, i = l.length; n < i; ++n)
                    u.fillText("" + l[n], 0, s), (s += o.lineHeight);
                else u.fillText(l, 0, s);
                u.restore();
              }
            }
          },
          _drawTitle: function () {
            var e = this,
              t = e.ctx,
              n = e.options,
              r = n.scaleLabel;
            if (r.display) {
              var i,
                a,
                o = Dn(r.fontColor, oe.global.defaultFontColor),
                l = de.options._parseFont(r),
                s = de.options.toPadding(r.padding),
                u = l.lineHeight / 2,
                c = n.position,
                d = 0;
              if (e.isHorizontal())
                (i = e.left + e.width / 2),
                  (a =
                    "bottom" === c
                      ? e.bottom - u - s.bottom
                      : e.top + u + s.top);
              else {
                var f = "left" === c;
                (i = f ? e.left + u + s.top : e.right - u - s.top),
                  (a = e.top + e.height / 2),
                  (d = f ? -0.5 * Math.PI : 0.5 * Math.PI);
              }
              t.save(),
                t.translate(i, a),
                t.rotate(d),
                (t.textAlign = "center"),
                (t.textBaseline = "middle"),
                (t.fillStyle = o),
                (t.font = l.string),
                t.fillText(r.labelString, 0, 0),
                t.restore();
            }
          },
          draw: function (e) {
            this._isVisible() &&
              (this._drawGrid(e), this._drawTitle(), this._drawLabels());
          },
          _layers: function () {
            var e = this,
              t = e.options,
              n = (t.ticks && t.ticks.z) || 0,
              r = (t.gridLines && t.gridLines.z) || 0;
            return e._isVisible() && n !== r && e.draw === e._draw
              ? [
                  {
                    z: r,
                    draw: function () {
                      e._drawGrid.apply(e, arguments),
                        e._drawTitle.apply(e, arguments);
                    },
                  },
                  {
                    z: n,
                    draw: function () {
                      e._drawLabels.apply(e, arguments);
                    },
                  },
                ]
              : [
                  {
                    z: n,
                    draw: function () {
                      e.draw.apply(e, arguments);
                    },
                  },
                ];
          },
          _getMatchingVisibleMetas: function (e) {
            var t = this,
              n = t.isHorizontal();
            return t.chart._getSortedVisibleDatasetMetas().filter(function (r) {
              return (
                (!e || r.type === e) &&
                (n ? r.xAxisID === t.id : r.yAxisID === t.id)
              );
            });
          },
        });
        jn.prototype._draw = jn.prototype.draw;
        var Vn = jn,
          Yn = de.isNullOrUndef,
          Un = Vn.extend({
            determineDataLimits: function () {
              var e,
                t = this,
                n = t._getLabels(),
                r = t.options.ticks,
                i = r.min,
                a = r.max,
                o = 0,
                l = n.length - 1;
              void 0 !== i && (e = n.indexOf(i)) >= 0 && (o = e),
                void 0 !== a && (e = n.indexOf(a)) >= 0 && (l = e),
                (t.minIndex = o),
                (t.maxIndex = l),
                (t.min = n[o]),
                (t.max = n[l]);
            },
            buildTicks: function () {
              var e = this._getLabels(),
                t = this.minIndex,
                n = this.maxIndex;
              this.ticks =
                0 === t && n === e.length - 1 ? e : e.slice(t, n + 1);
            },
            getLabelForIndex: function (e, t) {
              var n = this.chart;
              return n.getDatasetMeta(t).controller._getValueScaleId() ===
                this.id
                ? this.getRightValue(n.data.datasets[t].data[e])
                : this._getLabels()[e];
            },
            _configure: function () {
              var e = this,
                t = e.options.offset,
                n = e.ticks;
              Vn.prototype._configure.call(e),
                e.isHorizontal() || (e._reversePixels = !e._reversePixels),
                n &&
                  ((e._startValue = e.minIndex - (t ? 0.5 : 0)),
                  (e._valueRange = Math.max(n.length - (t ? 0 : 1), 1)));
            },
            getPixelForValue: function (e, t, n) {
              var r,
                i,
                a,
                o = this;
              return (
                Yn(t) || Yn(n) || (e = o.chart.data.datasets[n].data[t]),
                Yn(e) || (r = o.isHorizontal() ? e.x : e.y),
                (void 0 !== r || (void 0 !== e && isNaN(t))) &&
                  ((i = o._getLabels()),
                  (e = de.valueOrDefault(r, e)),
                  (t = -1 !== (a = i.indexOf(e)) ? a : t),
                  isNaN(t) && (t = e)),
                o.getPixelForDecimal((t - o._startValue) / o._valueRange)
              );
            },
            getPixelForTick: function (e) {
              var t = this.ticks;
              return e < 0 || e > t.length - 1
                ? null
                : this.getPixelForValue(t[e], e + this.minIndex);
            },
            getValueForPixel: function (e) {
              var t = Math.round(
                this._startValue + this.getDecimalForPixel(e) * this._valueRange
              );
              return Math.min(Math.max(t, 0), this.ticks.length - 1);
            },
            getBasePixel: function () {
              return this.bottom;
            },
          }),
          Bn = { position: "bottom" };
        Un._defaults = Bn;
        var Hn = de.noop,
          qn = de.isNullOrUndef,
          Gn = Vn.extend({
            getRightValue: function (e) {
              return "string" === typeof e
                ? +e
                : Vn.prototype.getRightValue.call(this, e);
            },
            handleTickRangeOptions: function () {
              var e = this,
                t = e.options.ticks;
              if (t.beginAtZero) {
                var n = de.sign(e.min),
                  r = de.sign(e.max);
                n < 0 && r < 0 ? (e.max = 0) : n > 0 && r > 0 && (e.min = 0);
              }
              var i = void 0 !== t.min || void 0 !== t.suggestedMin,
                a = void 0 !== t.max || void 0 !== t.suggestedMax;
              void 0 !== t.min
                ? (e.min = t.min)
                : void 0 !== t.suggestedMin &&
                  (null === e.min
                    ? (e.min = t.suggestedMin)
                    : (e.min = Math.min(e.min, t.suggestedMin))),
                void 0 !== t.max
                  ? (e.max = t.max)
                  : void 0 !== t.suggestedMax &&
                    (null === e.max
                      ? (e.max = t.suggestedMax)
                      : (e.max = Math.max(e.max, t.suggestedMax))),
                i !== a &&
                  e.min >= e.max &&
                  (i ? (e.max = e.min + 1) : (e.min = e.max - 1)),
                e.min === e.max && (e.max++, t.beginAtZero || e.min--);
            },
            getTickLimit: function () {
              var e,
                t = this.options.ticks,
                n = t.stepSize,
                r = t.maxTicksLimit;
              return (
                n
                  ? (e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1)
                  : ((e = this._computeTickLimit()), (r = r || 11)),
                r && (e = Math.min(r, e)),
                e
              );
            },
            _computeTickLimit: function () {
              return Number.POSITIVE_INFINITY;
            },
            handleDirectionalChanges: Hn,
            buildTicks: function () {
              var e = this,
                t = e.options.ticks,
                n = e.getTickLimit(),
                r = {
                  maxTicks: (n = Math.max(2, n)),
                  min: t.min,
                  max: t.max,
                  precision: t.precision,
                  stepSize: de.valueOrDefault(t.fixedStepSize, t.stepSize),
                },
                i = (e.ticks = (function (e, t) {
                  var n,
                    r,
                    i,
                    a,
                    o = [],
                    l = e.stepSize,
                    s = l || 1,
                    u = e.maxTicks - 1,
                    c = e.min,
                    d = e.max,
                    f = e.precision,
                    h = t.min,
                    p = t.max,
                    g = de.niceNum((p - h) / u / s) * s;
                  if (g < 1e-14 && qn(c) && qn(d)) return [h, p];
                  (a = Math.ceil(p / g) - Math.floor(h / g)) > u &&
                    (g = de.niceNum((a * g) / u / s) * s),
                    l || qn(f)
                      ? (n = Math.pow(10, de._decimalPlaces(g)))
                      : ((n = Math.pow(10, f)), (g = Math.ceil(g * n) / n)),
                    (r = Math.floor(h / g) * g),
                    (i = Math.ceil(p / g) * g),
                    l &&
                      (!qn(c) && de.almostWhole(c / g, g / 1e3) && (r = c),
                      !qn(d) && de.almostWhole(d / g, g / 1e3) && (i = d)),
                    (a = (i - r) / g),
                    (a = de.almostEquals(a, Math.round(a), g / 1e3)
                      ? Math.round(a)
                      : Math.ceil(a)),
                    (r = Math.round(r * n) / n),
                    (i = Math.round(i * n) / n),
                    o.push(qn(c) ? r : c);
                  for (var m = 1; m < a; ++m)
                    o.push(Math.round((r + m * g) * n) / n);
                  return o.push(qn(d) ? i : d), o;
                })(r, e));
              e.handleDirectionalChanges(),
                (e.max = de.max(i)),
                (e.min = de.min(i)),
                t.reverse
                  ? (i.reverse(), (e.start = e.max), (e.end = e.min))
                  : ((e.start = e.min), (e.end = e.max));
            },
            convertTicksToLabels: function () {
              var e = this;
              (e.ticksAsNumbers = e.ticks.slice()),
                (e.zeroLineIndex = e.ticks.indexOf(0)),
                Vn.prototype.convertTicksToLabels.call(e);
            },
            _configure: function () {
              var e,
                t = this,
                n = t.getTicks(),
                r = t.min,
                i = t.max;
              Vn.prototype._configure.call(t),
                t.options.offset &&
                  n.length &&
                  ((r -= e = (i - r) / Math.max(n.length - 1, 1) / 2),
                  (i += e)),
                (t._startValue = r),
                (t._endValue = i),
                (t._valueRange = i - r);
            },
          }),
          $n = { position: "left", ticks: { callback: Cn.formatters.linear } };
        function Kn(e, t, n, r) {
          var i,
            a,
            o = e.options,
            l = (function (e, t, n) {
              var r = [
                n.type,
                void 0 === t && void 0 === n.stack ? n.index : "",
                n.stack,
              ].join(".");
              return void 0 === e[r] && (e[r] = { pos: [], neg: [] }), e[r];
            })(t, o.stacked, n),
            s = l.pos,
            u = l.neg,
            c = r.length;
          for (i = 0; i < c; ++i)
            (a = e._parseValue(r[i])),
              isNaN(a.min) ||
                isNaN(a.max) ||
                n.data[i].hidden ||
                ((s[i] = s[i] || 0),
                (u[i] = u[i] || 0),
                o.relativePoints
                  ? (s[i] = 100)
                  : a.min < 0 || a.max < 0
                  ? (u[i] += a.min)
                  : (s[i] += a.max));
        }
        function Qn(e, t, n) {
          var r,
            i,
            a = n.length;
          for (r = 0; r < a; ++r)
            (i = e._parseValue(n[r])),
              isNaN(i.min) ||
                isNaN(i.max) ||
                t.data[r].hidden ||
                ((e.min = Math.min(e.min, i.min)),
                (e.max = Math.max(e.max, i.max)));
        }
        var Zn = Gn.extend({
            determineDataLimits: function () {
              var e,
                t,
                n,
                r,
                i = this,
                a = i.options,
                o = i.chart.data.datasets,
                l = i._getMatchingVisibleMetas(),
                s = a.stacked,
                u = {},
                c = l.length;
              if (
                ((i.min = Number.POSITIVE_INFINITY),
                (i.max = Number.NEGATIVE_INFINITY),
                void 0 === s)
              )
                for (e = 0; !s && e < c; ++e) s = void 0 !== (t = l[e]).stack;
              for (e = 0; e < c; ++e)
                (n = o[(t = l[e]).index].data),
                  s ? Kn(i, u, t, n) : Qn(i, t, n);
              de.each(u, function (e) {
                (r = e.pos.concat(e.neg)),
                  (i.min = Math.min(i.min, de.min(r))),
                  (i.max = Math.max(i.max, de.max(r)));
              }),
                (i.min = de.isFinite(i.min) && !isNaN(i.min) ? i.min : 0),
                (i.max = de.isFinite(i.max) && !isNaN(i.max) ? i.max : 1),
                i.handleTickRangeOptions();
            },
            _computeTickLimit: function () {
              var e;
              return this.isHorizontal()
                ? Math.ceil(this.width / 40)
                : ((e = de.options._parseFont(this.options.ticks)),
                  Math.ceil(this.height / e.lineHeight));
            },
            handleDirectionalChanges: function () {
              this.isHorizontal() || this.ticks.reverse();
            },
            getLabelForIndex: function (e, t) {
              return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
            },
            getPixelForValue: function (e) {
              return this.getPixelForDecimal(
                (+this.getRightValue(e) - this._startValue) / this._valueRange
              );
            },
            getValueForPixel: function (e) {
              return (
                this._startValue + this.getDecimalForPixel(e) * this._valueRange
              );
            },
            getPixelForTick: function (e) {
              var t = this.ticksAsNumbers;
              return e < 0 || e > t.length - 1
                ? null
                : this.getPixelForValue(t[e]);
            },
          }),
          Xn = $n;
        Zn._defaults = Xn;
        var Jn = de.valueOrDefault,
          er = de.math.log10,
          tr = {
            position: "left",
            ticks: { callback: Cn.formatters.logarithmic },
          };
        function nr(e, t) {
          return de.isFinite(e) && e >= 0 ? e : t;
        }
        var rr = Vn.extend({
            determineDataLimits: function () {
              var e,
                t,
                n,
                r,
                i,
                a,
                o = this,
                l = o.options,
                s = o.chart,
                u = s.data.datasets,
                c = o.isHorizontal();
              function d(e) {
                return c ? e.xAxisID === o.id : e.yAxisID === o.id;
              }
              (o.min = Number.POSITIVE_INFINITY),
                (o.max = Number.NEGATIVE_INFINITY),
                (o.minNotZero = Number.POSITIVE_INFINITY);
              var f = l.stacked;
              if (void 0 === f)
                for (e = 0; e < u.length; e++)
                  if (
                    ((t = s.getDatasetMeta(e)),
                    s.isDatasetVisible(e) && d(t) && void 0 !== t.stack)
                  ) {
                    f = !0;
                    break;
                  }
              if (l.stacked || f) {
                var h = {};
                for (e = 0; e < u.length; e++) {
                  var p = [
                    (t = s.getDatasetMeta(e)).type,
                    void 0 === l.stacked && void 0 === t.stack ? e : "",
                    t.stack,
                  ].join(".");
                  if (s.isDatasetVisible(e) && d(t))
                    for (
                      void 0 === h[p] && (h[p] = []),
                        i = 0,
                        a = (r = u[e].data).length;
                      i < a;
                      i++
                    ) {
                      var g = h[p];
                      (n = o._parseValue(r[i])),
                        isNaN(n.min) ||
                          isNaN(n.max) ||
                          t.data[i].hidden ||
                          n.min < 0 ||
                          n.max < 0 ||
                          ((g[i] = g[i] || 0), (g[i] += n.max));
                    }
                }
                de.each(h, function (e) {
                  if (e.length > 0) {
                    var t = de.min(e),
                      n = de.max(e);
                    (o.min = Math.min(o.min, t)), (o.max = Math.max(o.max, n));
                  }
                });
              } else
                for (e = 0; e < u.length; e++)
                  if (
                    ((t = s.getDatasetMeta(e)), s.isDatasetVisible(e) && d(t))
                  )
                    for (i = 0, a = (r = u[e].data).length; i < a; i++)
                      (n = o._parseValue(r[i])),
                        isNaN(n.min) ||
                          isNaN(n.max) ||
                          t.data[i].hidden ||
                          n.min < 0 ||
                          n.max < 0 ||
                          ((o.min = Math.min(n.min, o.min)),
                          (o.max = Math.max(n.max, o.max)),
                          0 !== n.min &&
                            (o.minNotZero = Math.min(n.min, o.minNotZero)));
              (o.min = de.isFinite(o.min) ? o.min : null),
                (o.max = de.isFinite(o.max) ? o.max : null),
                (o.minNotZero = de.isFinite(o.minNotZero)
                  ? o.minNotZero
                  : null),
                this.handleTickRangeOptions();
            },
            handleTickRangeOptions: function () {
              var e = this,
                t = e.options.ticks;
              (e.min = nr(t.min, e.min)),
                (e.max = nr(t.max, e.max)),
                e.min === e.max &&
                  (0 !== e.min && null !== e.min
                    ? ((e.min = Math.pow(10, Math.floor(er(e.min)) - 1)),
                      (e.max = Math.pow(10, Math.floor(er(e.max)) + 1)))
                    : ((e.min = 1), (e.max = 10))),
                null === e.min &&
                  (e.min = Math.pow(10, Math.floor(er(e.max)) - 1)),
                null === e.max &&
                  (e.max =
                    0 !== e.min ? Math.pow(10, Math.floor(er(e.min)) + 1) : 10),
                null === e.minNotZero &&
                  (e.min > 0
                    ? (e.minNotZero = e.min)
                    : e.max < 1
                    ? (e.minNotZero = Math.pow(10, Math.floor(er(e.max))))
                    : (e.minNotZero = 1));
            },
            buildTicks: function () {
              var e = this,
                t = e.options.ticks,
                n = !e.isHorizontal(),
                r = { min: nr(t.min), max: nr(t.max) },
                i = (e.ticks = (function (e, t) {
                  var n,
                    r,
                    i = [],
                    a = Jn(e.min, Math.pow(10, Math.floor(er(t.min)))),
                    o = Math.floor(er(t.max)),
                    l = Math.ceil(t.max / Math.pow(10, o));
                  0 === a
                    ? ((n = Math.floor(er(t.minNotZero))),
                      (r = Math.floor(t.minNotZero / Math.pow(10, n))),
                      i.push(a),
                      (a = r * Math.pow(10, n)))
                    : ((n = Math.floor(er(a))),
                      (r = Math.floor(a / Math.pow(10, n))));
                  var s = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                  do {
                    i.push(a),
                      10 === ++r && ((r = 1), (s = ++n >= 0 ? 1 : s)),
                      (a = Math.round(r * Math.pow(10, n) * s) / s);
                  } while (n < o || (n === o && r < l));
                  var u = Jn(e.max, a);
                  return i.push(u), i;
                })(r, e));
              (e.max = de.max(i)),
                (e.min = de.min(i)),
                t.reverse
                  ? ((n = !n), (e.start = e.max), (e.end = e.min))
                  : ((e.start = e.min), (e.end = e.max)),
                n && i.reverse();
            },
            convertTicksToLabels: function () {
              (this.tickValues = this.ticks.slice()),
                Vn.prototype.convertTicksToLabels.call(this);
            },
            getLabelForIndex: function (e, t) {
              return this._getScaleLabel(this.chart.data.datasets[t].data[e]);
            },
            getPixelForTick: function (e) {
              var t = this.tickValues;
              return e < 0 || e > t.length - 1
                ? null
                : this.getPixelForValue(t[e]);
            },
            _getFirstTickValue: function (e) {
              var t = Math.floor(er(e));
              return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t);
            },
            _configure: function () {
              var e = this,
                t = e.min,
                n = 0;
              Vn.prototype._configure.call(e),
                0 === t &&
                  ((t = e._getFirstTickValue(e.minNotZero)),
                  (n =
                    Jn(e.options.ticks.fontSize, oe.global.defaultFontSize) /
                    e._length)),
                (e._startValue = er(t)),
                (e._valueOffset = n),
                (e._valueRange = (er(e.max) - er(t)) / (1 - n));
            },
            getPixelForValue: function (e) {
              var t = this,
                n = 0;
              return (
                (e = +t.getRightValue(e)) > t.min &&
                  e > 0 &&
                  (n =
                    (er(e) - t._startValue) / t._valueRange + t._valueOffset),
                t.getPixelForDecimal(n)
              );
            },
            getValueForPixel: function (e) {
              var t = this,
                n = t.getDecimalForPixel(e);
              return 0 === n && 0 === t.min
                ? 0
                : Math.pow(
                    10,
                    t._startValue + (n - t._valueOffset) * t._valueRange
                  );
            },
          }),
          ir = tr;
        rr._defaults = ir;
        var ar = de.valueOrDefault,
          or = de.valueAtIndexOrDefault,
          lr = de.options.resolve,
          sr = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0,0,0,0.1)",
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            gridLines: { circular: !1 },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2,
              callback: Cn.formatters.linear,
            },
            pointLabels: {
              display: !0,
              fontSize: 10,
              callback: function (e) {
                return e;
              },
            },
          };
        function ur(e) {
          var t = e.ticks;
          return t.display && e.display
            ? ar(t.fontSize, oe.global.defaultFontSize) + 2 * t.backdropPaddingY
            : 0;
        }
        function cr(e, t, n, r, i) {
          return e === r || e === i
            ? { start: t - n / 2, end: t + n / 2 }
            : e < r || e > i
            ? { start: t - n, end: t }
            : { start: t, end: t + n };
        }
        function dr(e) {
          return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right";
        }
        function fr(e, t, n, r) {
          var i,
            a,
            o = n.y + r / 2;
          if (de.isArray(t))
            for (i = 0, a = t.length; i < a; ++i)
              e.fillText(t[i], n.x, o), (o += r);
          else e.fillText(t, n.x, o);
        }
        function hr(e, t, n) {
          90 === e || 270 === e
            ? (n.y -= t.h / 2)
            : (e > 270 || e < 90) && (n.y -= t.h);
        }
        function pr(e) {
          return de.isNumber(e) ? e : 0;
        }
        var gr = Gn.extend({
            setDimensions: function () {
              var e = this;
              (e.width = e.maxWidth),
                (e.height = e.maxHeight),
                (e.paddingTop = ur(e.options) / 2),
                (e.xCenter = Math.floor(e.width / 2)),
                (e.yCenter = Math.floor((e.height - e.paddingTop) / 2)),
                (e.drawingArea =
                  Math.min(e.height - e.paddingTop, e.width) / 2);
            },
            determineDataLimits: function () {
              var e = this,
                t = e.chart,
                n = Number.POSITIVE_INFINITY,
                r = Number.NEGATIVE_INFINITY;
              de.each(t.data.datasets, function (i, a) {
                if (t.isDatasetVisible(a)) {
                  var o = t.getDatasetMeta(a);
                  de.each(i.data, function (t, i) {
                    var a = +e.getRightValue(t);
                    isNaN(a) ||
                      o.data[i].hidden ||
                      ((n = Math.min(a, n)), (r = Math.max(a, r)));
                  });
                }
              }),
                (e.min = n === Number.POSITIVE_INFINITY ? 0 : n),
                (e.max = r === Number.NEGATIVE_INFINITY ? 0 : r),
                e.handleTickRangeOptions();
            },
            _computeTickLimit: function () {
              return Math.ceil(this.drawingArea / ur(this.options));
            },
            convertTicksToLabels: function () {
              var e = this;
              Gn.prototype.convertTicksToLabels.call(e),
                (e.pointLabels = e.chart.data.labels.map(function () {
                  var t = de.callback(
                    e.options.pointLabels.callback,
                    arguments,
                    e
                  );
                  return t || 0 === t ? t : "";
                }));
            },
            getLabelForIndex: function (e, t) {
              return +this.getRightValue(this.chart.data.datasets[t].data[e]);
            },
            fit: function () {
              var e = this.options;
              e.display && e.pointLabels.display
                ? (function (e) {
                    var t,
                      n,
                      r,
                      i = de.options._parseFont(e.options.pointLabels),
                      a = {
                        l: 0,
                        r: e.width,
                        t: 0,
                        b: e.height - e.paddingTop,
                      },
                      o = {};
                    (e.ctx.font = i.string), (e._pointLabelSizes = []);
                    var l,
                      s,
                      u,
                      c = e.chart.data.labels.length;
                    for (t = 0; t < c; t++) {
                      (r = e.getPointPosition(t, e.drawingArea + 5)),
                        (l = e.ctx),
                        (s = i.lineHeight),
                        (u = e.pointLabels[t]),
                        (n = de.isArray(u)
                          ? { w: de.longestText(l, l.font, u), h: u.length * s }
                          : { w: l.measureText(u).width, h: s }),
                        (e._pointLabelSizes[t] = n);
                      var d = e.getIndexAngle(t),
                        f = de.toDegrees(d) % 360,
                        h = cr(f, r.x, n.w, 0, 180),
                        p = cr(f, r.y, n.h, 90, 270);
                      h.start < a.l && ((a.l = h.start), (o.l = d)),
                        h.end > a.r && ((a.r = h.end), (o.r = d)),
                        p.start < a.t && ((a.t = p.start), (o.t = d)),
                        p.end > a.b && ((a.b = p.end), (o.b = d));
                    }
                    e.setReductions(e.drawingArea, a, o);
                  })(this)
                : this.setCenterPoint(0, 0, 0, 0);
            },
            setReductions: function (e, t, n) {
              var r = this,
                i = t.l / Math.sin(n.l),
                a = Math.max(t.r - r.width, 0) / Math.sin(n.r),
                o = -t.t / Math.cos(n.t),
                l =
                  -Math.max(t.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
              (i = pr(i)),
                (a = pr(a)),
                (o = pr(o)),
                (l = pr(l)),
                (r.drawingArea = Math.min(
                  Math.floor(e - (i + a) / 2),
                  Math.floor(e - (o + l) / 2)
                )),
                r.setCenterPoint(i, a, o, l);
            },
            setCenterPoint: function (e, t, n, r) {
              var i = this,
                a = i.width - t - i.drawingArea,
                o = e + i.drawingArea,
                l = n + i.drawingArea,
                s = i.height - i.paddingTop - r - i.drawingArea;
              (i.xCenter = Math.floor((o + a) / 2 + i.left)),
                (i.yCenter = Math.floor((l + s) / 2 + i.top + i.paddingTop));
            },
            getIndexAngle: function (e) {
              var t = this.chart,
                n =
                  (e * (360 / t.data.labels.length) +
                    ((t.options || {}).startAngle || 0)) %
                  360;
              return ((n < 0 ? n + 360 : n) * Math.PI * 2) / 360;
            },
            getDistanceFromCenterForValue: function (e) {
              var t = this;
              if (de.isNullOrUndef(e)) return NaN;
              var n = t.drawingArea / (t.max - t.min);
              return t.options.ticks.reverse
                ? (t.max - e) * n
                : (e - t.min) * n;
            },
            getPointPosition: function (e, t) {
              var n = this.getIndexAngle(e) - Math.PI / 2;
              return {
                x: Math.cos(n) * t + this.xCenter,
                y: Math.sin(n) * t + this.yCenter,
              };
            },
            getPointPositionForValue: function (e, t) {
              return this.getPointPosition(
                e,
                this.getDistanceFromCenterForValue(t)
              );
            },
            getBasePosition: function (e) {
              var t = this.min,
                n = this.max;
              return this.getPointPositionForValue(
                e || 0,
                this.beginAtZero
                  ? 0
                  : t < 0 && n < 0
                  ? n
                  : t > 0 && n > 0
                  ? t
                  : 0
              );
            },
            _drawGrid: function () {
              var e,
                t,
                n,
                r = this,
                i = r.ctx,
                a = r.options,
                o = a.gridLines,
                l = a.angleLines,
                s = ar(l.lineWidth, o.lineWidth),
                u = ar(l.color, o.color);
              if (
                (a.pointLabels.display &&
                  (function (e) {
                    var t = e.ctx,
                      n = e.options,
                      r = n.pointLabels,
                      i = ur(n),
                      a = e.getDistanceFromCenterForValue(
                        n.ticks.reverse ? e.min : e.max
                      ),
                      o = de.options._parseFont(r);
                    t.save(), (t.font = o.string), (t.textBaseline = "middle");
                    for (var l = e.chart.data.labels.length - 1; l >= 0; l--) {
                      var s = 0 === l ? i / 2 : 0,
                        u = e.getPointPosition(l, a + s + 5),
                        c = or(r.fontColor, l, oe.global.defaultFontColor);
                      t.fillStyle = c;
                      var d = e.getIndexAngle(l),
                        f = de.toDegrees(d);
                      (t.textAlign = dr(f)),
                        hr(f, e._pointLabelSizes[l], u),
                        fr(t, e.pointLabels[l], u, o.lineHeight);
                    }
                    t.restore();
                  })(r),
                o.display &&
                  de.each(r.ticks, function (e, n) {
                    0 !== n &&
                      ((t = r.getDistanceFromCenterForValue(
                        r.ticksAsNumbers[n]
                      )),
                      (function (e, t, n, r) {
                        var i,
                          a = e.ctx,
                          o = t.circular,
                          l = e.chart.data.labels.length,
                          s = or(t.color, r - 1),
                          u = or(t.lineWidth, r - 1);
                        if ((o || l) && s && u) {
                          if (
                            (a.save(),
                            (a.strokeStyle = s),
                            (a.lineWidth = u),
                            a.setLineDash &&
                              (a.setLineDash(t.borderDash || []),
                              (a.lineDashOffset = t.borderDashOffset || 0)),
                            a.beginPath(),
                            o)
                          )
                            a.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
                          else {
                            (i = e.getPointPosition(0, n)), a.moveTo(i.x, i.y);
                            for (var c = 1; c < l; c++)
                              (i = e.getPointPosition(c, n)),
                                a.lineTo(i.x, i.y);
                          }
                          a.closePath(), a.stroke(), a.restore();
                        }
                      })(r, o, t, n));
                  }),
                l.display && s && u)
              ) {
                for (
                  i.save(),
                    i.lineWidth = s,
                    i.strokeStyle = u,
                    i.setLineDash &&
                      (i.setLineDash(lr([l.borderDash, o.borderDash, []])),
                      (i.lineDashOffset = lr([
                        l.borderDashOffset,
                        o.borderDashOffset,
                        0,
                      ]))),
                    e = r.chart.data.labels.length - 1;
                  e >= 0;
                  e--
                )
                  (t = r.getDistanceFromCenterForValue(
                    a.ticks.reverse ? r.min : r.max
                  )),
                    (n = r.getPointPosition(e, t)),
                    i.beginPath(),
                    i.moveTo(r.xCenter, r.yCenter),
                    i.lineTo(n.x, n.y),
                    i.stroke();
                i.restore();
              }
            },
            _drawLabels: function () {
              var e = this,
                t = e.ctx,
                n = e.options.ticks;
              if (n.display) {
                var r,
                  i,
                  a = e.getIndexAngle(0),
                  o = de.options._parseFont(n),
                  l = ar(n.fontColor, oe.global.defaultFontColor);
                t.save(),
                  (t.font = o.string),
                  t.translate(e.xCenter, e.yCenter),
                  t.rotate(a),
                  (t.textAlign = "center"),
                  (t.textBaseline = "middle"),
                  de.each(e.ticks, function (a, s) {
                    (0 !== s || n.reverse) &&
                      ((r = e.getDistanceFromCenterForValue(
                        e.ticksAsNumbers[s]
                      )),
                      n.showLabelBackdrop &&
                        ((i = t.measureText(a).width),
                        (t.fillStyle = n.backdropColor),
                        t.fillRect(
                          -i / 2 - n.backdropPaddingX,
                          -r - o.size / 2 - n.backdropPaddingY,
                          i + 2 * n.backdropPaddingX,
                          o.size + 2 * n.backdropPaddingY
                        )),
                      (t.fillStyle = l),
                      t.fillText(a, 0, -r));
                  }),
                  t.restore();
              }
            },
            _drawTitle: de.noop,
          }),
          mr = sr;
        gr._defaults = mr;
        var vr = de._deprecated,
          yr = de.options.resolve,
          br = de.valueOrDefault,
          xr = Number.MIN_SAFE_INTEGER || -9007199254740991,
          _r = Number.MAX_SAFE_INTEGER || 9007199254740991,
          wr = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 },
          },
          kr = Object.keys(wr);
        function Sr(e, t) {
          return e - t;
        }
        function Mr(e) {
          return de.valueOrDefault(e.time.min, e.ticks.min);
        }
        function Tr(e) {
          return de.valueOrDefault(e.time.max, e.ticks.max);
        }
        function Cr(e, t, n, r) {
          var i = (function (e, t, n) {
              for (var r, i, a, o = 0, l = e.length - 1; o >= 0 && o <= l; ) {
                if (((i = e[(r = (o + l) >> 1) - 1] || null), (a = e[r]), !i))
                  return { lo: null, hi: a };
                if (a[t] < n) o = r + 1;
                else {
                  if (!(i[t] > n)) return { lo: i, hi: a };
                  l = r - 1;
                }
              }
              return { lo: a, hi: null };
            })(e, t, n),
            a = i.lo ? (i.hi ? i.lo : e[e.length - 2]) : e[0],
            o = i.lo ? (i.hi ? i.hi : e[e.length - 1]) : e[1],
            l = o[t] - a[t],
            s = l ? (n - a[t]) / l : 0,
            u = (o[r] - a[r]) * s;
          return a[r] + u;
        }
        function Pr(e, t) {
          var n = e._adapter,
            r = e.options.time,
            i = r.parser,
            a = i || r.format,
            o = t;
          return (
            "function" === typeof i && (o = i(o)),
            de.isFinite(o) ||
              (o = "string" === typeof a ? n.parse(o, a) : n.parse(o)),
            null !== o
              ? +o
              : (i ||
                  "function" !== typeof a ||
                  ((o = a(t)), de.isFinite(o) || (o = n.parse(o))),
                o)
          );
        }
        function Er(e, t) {
          if (de.isNullOrUndef(t)) return null;
          var n = e.options.time,
            r = Pr(e, e.getRightValue(t));
          return null === r
            ? r
            : (n.round && (r = +e._adapter.startOf(r, n.round)), r);
        }
        function Dr(e, t, n, r) {
          var i,
            a,
            o,
            l = kr.length;
          for (i = kr.indexOf(e); i < l - 1; ++i)
            if (
              ((o = (a = wr[kr[i]]).steps ? a.steps : _r),
              a.common && Math.ceil((n - t) / (o * a.size)) <= r)
            )
              return kr[i];
          return kr[l - 1];
        }
        function Or(e, t, n) {
          var r,
            i,
            a = [],
            o = {},
            l = t.length;
          for (r = 0; r < l; ++r)
            (o[(i = t[r])] = r), a.push({ value: i, major: !1 });
          return 0 !== l && n
            ? (function (e, t, n, r) {
                var i,
                  a,
                  o = e._adapter,
                  l = +o.startOf(t[0].value, r),
                  s = t[t.length - 1].value;
                for (i = l; i <= s; i = +o.add(i, 1, r))
                  (a = n[i]) >= 0 && (t[a].major = !0);
                return t;
              })(e, a, o, n)
            : a;
        }
        var Ar = Vn.extend({
            initialize: function () {
              this.mergeTicksOptions(), Vn.prototype.initialize.call(this);
            },
            update: function () {
              var e = this,
                t = e.options,
                n = t.time || (t.time = {}),
                r = (e._adapter = new Tn._date(t.adapters.date));
              return (
                vr("time scale", n.format, "time.format", "time.parser"),
                vr("time scale", n.min, "time.min", "ticks.min"),
                vr("time scale", n.max, "time.max", "ticks.max"),
                de.mergeIf(n.displayFormats, r.formats()),
                Vn.prototype.update.apply(e, arguments)
              );
            },
            getRightValue: function (e) {
              return (
                e && void 0 !== e.t && (e = e.t),
                Vn.prototype.getRightValue.call(this, e)
              );
            },
            determineDataLimits: function () {
              var e,
                t,
                n,
                r,
                i,
                a,
                o,
                l = this,
                s = l.chart,
                u = l._adapter,
                c = l.options,
                d = c.time.unit || "day",
                f = _r,
                h = xr,
                p = [],
                g = [],
                m = [],
                v = l._getLabels();
              for (e = 0, n = v.length; e < n; ++e) m.push(Er(l, v[e]));
              for (e = 0, n = (s.data.datasets || []).length; e < n; ++e)
                if (s.isDatasetVisible(e))
                  if (((i = s.data.datasets[e].data), de.isObject(i[0])))
                    for (g[e] = [], t = 0, r = i.length; t < r; ++t)
                      (a = Er(l, i[t])), p.push(a), (g[e][t] = a);
                  else (g[e] = m.slice(0)), o || ((p = p.concat(m)), (o = !0));
                else g[e] = [];
              m.length &&
                ((f = Math.min(f, m[0])), (h = Math.max(h, m[m.length - 1]))),
                p.length &&
                  ((p =
                    n > 1
                      ? (function (e) {
                          var t,
                            n,
                            r,
                            i = {},
                            a = [];
                          for (t = 0, n = e.length; t < n; ++t)
                            i[(r = e[t])] || ((i[r] = !0), a.push(r));
                          return a;
                        })(p).sort(Sr)
                      : p.sort(Sr)),
                  (f = Math.min(f, p[0])),
                  (h = Math.max(h, p[p.length - 1]))),
                (f = Er(l, Mr(c)) || f),
                (h = Er(l, Tr(c)) || h),
                (f = f === _r ? +u.startOf(Date.now(), d) : f),
                (h = h === xr ? +u.endOf(Date.now(), d) + 1 : h),
                (l.min = Math.min(f, h)),
                (l.max = Math.max(f + 1, h)),
                (l._table = []),
                (l._timestamps = { data: p, datasets: g, labels: m });
            },
            buildTicks: function () {
              var e,
                t,
                n,
                r = this,
                i = r.min,
                a = r.max,
                o = r.options,
                l = o.ticks,
                s = o.time,
                u = r._timestamps,
                c = [],
                d = r.getLabelCapacity(i),
                f = l.source,
                h = o.distribution;
              for (
                u =
                  "data" === f || ("auto" === f && "series" === h)
                    ? u.data
                    : "labels" === f
                    ? u.labels
                    : (function (e, t, n, r) {
                        var i,
                          a = e._adapter,
                          o = e.options,
                          l = o.time,
                          s = l.unit || Dr(l.minUnit, t, n, r),
                          u = yr([l.stepSize, l.unitStepSize, 1]),
                          c = "week" === s && l.isoWeekday,
                          d = t,
                          f = [];
                        if (
                          (c && (d = +a.startOf(d, "isoWeek", c)),
                          (d = +a.startOf(d, c ? "day" : s)),
                          a.diff(n, t, s) > 1e5 * u)
                        )
                          throw (
                            t +
                            " and " +
                            n +
                            " are too far apart with stepSize of " +
                            u +
                            " " +
                            s
                          );
                        for (i = d; i < n; i = +a.add(i, u, s)) f.push(i);
                        return (
                          (i !== n && "ticks" !== o.bounds) || f.push(i), f
                        );
                      })(r, i, a, d),
                  "ticks" === o.bounds &&
                    u.length &&
                    ((i = u[0]), (a = u[u.length - 1])),
                  i = Er(r, Mr(o)) || i,
                  a = Er(r, Tr(o)) || a,
                  e = 0,
                  t = u.length;
                e < t;
                ++e
              )
                (n = u[e]) >= i && n <= a && c.push(n);
              return (
                (r.min = i),
                (r.max = a),
                (r._unit =
                  s.unit ||
                  (l.autoSkip
                    ? Dr(s.minUnit, r.min, r.max, d)
                    : (function (e, t, n, r, i) {
                        var a, o;
                        for (a = kr.length - 1; a >= kr.indexOf(n); a--)
                          if (
                            ((o = kr[a]),
                            wr[o].common && e._adapter.diff(i, r, o) >= t - 1)
                          )
                            return o;
                        return kr[n ? kr.indexOf(n) : 0];
                      })(r, c.length, s.minUnit, r.min, r.max))),
                (r._majorUnit =
                  l.major.enabled && "year" !== r._unit
                    ? (function (e) {
                        for (
                          var t = kr.indexOf(e) + 1, n = kr.length;
                          t < n;
                          ++t
                        )
                          if (wr[kr[t]].common) return kr[t];
                      })(r._unit)
                    : void 0),
                (r._table = (function (e, t, n, r) {
                  if ("linear" === r || !e.length)
                    return [
                      { time: t, pos: 0 },
                      { time: n, pos: 1 },
                    ];
                  var i,
                    a,
                    o,
                    l,
                    s,
                    u = [],
                    c = [t];
                  for (i = 0, a = e.length; i < a; ++i)
                    (l = e[i]) > t && l < n && c.push(l);
                  for (c.push(n), i = 0, a = c.length; i < a; ++i)
                    (s = c[i + 1]),
                      (o = c[i - 1]),
                      (l = c[i]),
                      (void 0 !== o &&
                        void 0 !== s &&
                        Math.round((s + o) / 2) === l) ||
                        u.push({ time: l, pos: i / (a - 1) });
                  return u;
                })(r._timestamps.data, i, a, h)),
                (r._offsets = (function (e, t, n, r, i) {
                  var a,
                    o,
                    l = 0,
                    s = 0;
                  return (
                    i.offset &&
                      t.length &&
                      ((a = Cr(e, "time", t[0], "pos")),
                      (l =
                        1 === t.length
                          ? 1 - a
                          : (Cr(e, "time", t[1], "pos") - a) / 2),
                      (o = Cr(e, "time", t[t.length - 1], "pos")),
                      (s =
                        1 === t.length
                          ? o
                          : (o - Cr(e, "time", t[t.length - 2], "pos")) / 2)),
                    { start: l, end: s, factor: 1 / (l + 1 + s) }
                  );
                })(r._table, c, 0, 0, o)),
                l.reverse && c.reverse(),
                Or(r, c, r._majorUnit)
              );
            },
            getLabelForIndex: function (e, t) {
              var n = this,
                r = n._adapter,
                i = n.chart.data,
                a = n.options.time,
                o = i.labels && e < i.labels.length ? i.labels[e] : "",
                l = i.datasets[t].data[e];
              return (
                de.isObject(l) && (o = n.getRightValue(l)),
                a.tooltipFormat
                  ? r.format(Pr(n, o), a.tooltipFormat)
                  : "string" === typeof o
                  ? o
                  : r.format(Pr(n, o), a.displayFormats.datetime)
              );
            },
            tickFormatFunction: function (e, t, n, r) {
              var i = this._adapter,
                a = this.options,
                o = a.time.displayFormats,
                l = o[this._unit],
                s = this._majorUnit,
                u = o[s],
                c = n[t],
                d = a.ticks,
                f = s && u && c && c.major,
                h = i.format(e, r || (f ? u : l)),
                p = f ? d.major : d.minor,
                g = yr([
                  p.callback,
                  p.userCallback,
                  d.callback,
                  d.userCallback,
                ]);
              return g ? g(h, t, n) : h;
            },
            convertTicksToLabels: function (e) {
              var t,
                n,
                r = [];
              for (t = 0, n = e.length; t < n; ++t)
                r.push(this.tickFormatFunction(e[t].value, t, e));
              return r;
            },
            getPixelForOffset: function (e) {
              var t = this._offsets,
                n = Cr(this._table, "time", e, "pos");
              return this.getPixelForDecimal((t.start + n) * t.factor);
            },
            getPixelForValue: function (e, t, n) {
              var r = null;
              if (
                (void 0 !== t &&
                  void 0 !== n &&
                  (r = this._timestamps.datasets[n][t]),
                null === r && (r = Er(this, e)),
                null !== r)
              )
                return this.getPixelForOffset(r);
            },
            getPixelForTick: function (e) {
              var t = this.getTicks();
              return e >= 0 && e < t.length
                ? this.getPixelForOffset(t[e].value)
                : null;
            },
            getValueForPixel: function (e) {
              var t = this._offsets,
                n = this.getDecimalForPixel(e) / t.factor - t.end,
                r = Cr(this._table, "pos", n, "time");
              return this._adapter._create(r);
            },
            _getLabelSize: function (e) {
              var t = this.options.ticks,
                n = this.ctx.measureText(e).width,
                r = de.toRadians(
                  this.isHorizontal() ? t.maxRotation : t.minRotation
                ),
                i = Math.cos(r),
                a = Math.sin(r),
                o = br(t.fontSize, oe.global.defaultFontSize);
              return { w: n * i + o * a, h: n * a + o * i };
            },
            getLabelWidth: function (e) {
              return this._getLabelSize(e).w;
            },
            getLabelCapacity: function (e) {
              var t = this,
                n = t.options.time,
                r = n.displayFormats,
                i = r[n.unit] || r.millisecond,
                a = t.tickFormatFunction(e, 0, Or(t, [e], t._majorUnit), i),
                o = t._getLabelSize(a),
                l = Math.floor(
                  t.isHorizontal() ? t.width / o.w : t.height / o.h
                );
              return t.options.offset && l--, l > 0 ? l : 1;
            },
          }),
          Ir = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              displayFormat: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
          };
        Ar._defaults = Ir;
        var Fr = {
            category: Un,
            linear: Zn,
            logarithmic: rr,
            radialLinear: gr,
            time: Ar,
          },
          Nr = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY",
          };
        Tn._date.override(
          "function" === typeof e
            ? {
                _id: "moment",
                formats: function () {
                  return Nr;
                },
                parse: function (t, n) {
                  return (
                    "string" === typeof t && "string" === typeof n
                      ? (t = e(t, n))
                      : t instanceof e || (t = e(t)),
                    t.isValid() ? t.valueOf() : null
                  );
                },
                format: function (t, n) {
                  return e(t).format(n);
                },
                add: function (t, n, r) {
                  return e(t).add(n, r).valueOf();
                },
                diff: function (t, n, r) {
                  return e(t).diff(e(n), r);
                },
                startOf: function (t, n, r) {
                  return (
                    (t = e(t)),
                    "isoWeek" === n
                      ? t.isoWeekday(r).valueOf()
                      : t.startOf(n).valueOf()
                  );
                },
                endOf: function (t, n) {
                  return e(t).endOf(n).valueOf();
                },
                _create: function (t) {
                  return e(t);
                },
              }
            : {}
        ),
          oe._set("global", { plugins: { filler: { propagate: !0 } } });
        var Lr = {
          dataset: function (e) {
            var t = e.fill,
              n = e.chart,
              r = n.getDatasetMeta(t),
              i = (r && n.isDatasetVisible(t) && r.dataset._children) || [],
              a = i.length || 0;
            return a
              ? function (e, t) {
                  return (t < a && i[t]._view) || null;
                }
              : null;
          },
          boundary: function (e) {
            var t = e.boundary,
              n = t ? t.x : null,
              r = t ? t.y : null;
            return de.isArray(t)
              ? function (e, n) {
                  return t[n];
                }
              : function (e) {
                  return { x: null === n ? e.x : n, y: null === r ? e.y : r };
                };
          },
        };
        function Rr(e, t, n) {
          var r,
            i = e._model || {},
            a = i.fill;
          if (
            (void 0 === a && (a = !!i.backgroundColor), !1 === a || null === a)
          )
            return !1;
          if (!0 === a) return "origin";
          if (((r = parseFloat(a, 10)), isFinite(r) && Math.floor(r) === r))
            return (
              ("-" !== a[0] && "+" !== a[0]) || (r = t + r),
              !(r === t || r < 0 || r >= n) && r
            );
          switch (a) {
            case "bottom":
              return "start";
            case "top":
              return "end";
            case "zero":
              return "origin";
            case "origin":
            case "start":
            case "end":
              return a;
            default:
              return !1;
          }
        }
        function zr(e) {
          return (e.el._scale || {}).getPointPositionForValue
            ? (function (e) {
                var t,
                  n,
                  r,
                  i,
                  a,
                  o = e.el._scale,
                  l = o.options,
                  s = o.chart.data.labels.length,
                  u = e.fill,
                  c = [];
                if (!s) return null;
                for (
                  t = l.ticks.reverse ? o.max : o.min,
                    n = l.ticks.reverse ? o.min : o.max,
                    r = o.getPointPositionForValue(0, t),
                    i = 0;
                  i < s;
                  ++i
                )
                  (a =
                    "start" === u || "end" === u
                      ? o.getPointPositionForValue(i, "start" === u ? t : n)
                      : o.getBasePosition(i)),
                    l.gridLines.circular &&
                      ((a.cx = r.x),
                      (a.cy = r.y),
                      (a.angle = o.getIndexAngle(i) - Math.PI / 2)),
                    c.push(a);
                return c;
              })(e)
            : (function (e) {
                var t,
                  n = e.el._model || {},
                  r = e.el._scale || {},
                  i = e.fill,
                  a = null;
                if (isFinite(i)) return null;
                if (
                  ("start" === i
                    ? (a = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom)
                    : "end" === i
                    ? (a = void 0 === n.scaleTop ? r.top : n.scaleTop)
                    : void 0 !== n.scaleZero
                    ? (a = n.scaleZero)
                    : r.getBasePixel && (a = r.getBasePixel()),
                  void 0 !== a && null !== a)
                ) {
                  if (void 0 !== a.x && void 0 !== a.y) return a;
                  if (de.isFinite(a))
                    return {
                      x: (t = r.isHorizontal()) ? a : null,
                      y: t ? null : a,
                    };
                }
                return null;
              })(e);
        }
        function Wr(e, t, n) {
          var r,
            i = e[t].fill,
            a = [t];
          if (!n) return i;
          for (; !1 !== i && -1 === a.indexOf(i); ) {
            if (!isFinite(i)) return i;
            if (!(r = e[i])) return !1;
            if (r.visible) return i;
            a.push(i), (i = r.fill);
          }
          return !1;
        }
        function jr(e) {
          var t = e.fill,
            n = "dataset";
          return !1 === t ? null : (isFinite(t) || (n = "boundary"), Lr[n](e));
        }
        function Vr(e) {
          return e && !e.skip;
        }
        function Yr(e, t, n, r, i) {
          var a, o, l, s;
          if (r && i) {
            for (e.moveTo(t[0].x, t[0].y), a = 1; a < r; ++a)
              de.canvas.lineTo(e, t[a - 1], t[a]);
            if (void 0 === n[0].angle)
              for (e.lineTo(n[i - 1].x, n[i - 1].y), a = i - 1; a > 0; --a)
                de.canvas.lineTo(e, n[a], n[a - 1], !0);
            else
              for (
                o = n[0].cx,
                  l = n[0].cy,
                  s = Math.sqrt(
                    Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - l, 2)
                  ),
                  a = i - 1;
                a > 0;
                --a
              )
                e.arc(o, l, s, n[a].angle, n[a - 1].angle, !0);
          }
        }
        function Ur(e, t, n, r, i, a) {
          var o,
            l,
            s,
            u,
            c,
            d,
            f,
            h,
            p = t.length,
            g = r.spanGaps,
            m = [],
            v = [],
            y = 0,
            b = 0;
          for (e.beginPath(), o = 0, l = p; o < l; ++o)
            (c = n((u = t[(s = o % p)]._view), s, r)),
              (d = Vr(u)),
              (f = Vr(c)),
              a && void 0 === h && d && (l = p + (h = o + 1)),
              d && f
                ? ((y = m.push(u)), (b = v.push(c)))
                : y &&
                  b &&
                  (g
                    ? (d && m.push(u), f && v.push(c))
                    : (Yr(e, m, v, y, b), (y = b = 0), (m = []), (v = [])));
          Yr(e, m, v, y, b), e.closePath(), (e.fillStyle = i), e.fill();
        }
        var Br = {
            id: "filler",
            afterDatasetsUpdate: function (e, t) {
              var n,
                r,
                i,
                a,
                o = (e.data.datasets || []).length,
                l = t.propagate,
                s = [];
              for (r = 0; r < o; ++r)
                (a = null),
                  (i = (n = e.getDatasetMeta(r)).dataset) &&
                    i._model &&
                    i instanceof He.Line &&
                    (a = {
                      visible: e.isDatasetVisible(r),
                      fill: Rr(i, r, o),
                      chart: e,
                      el: i,
                    }),
                  (n.$filler = a),
                  s.push(a);
              for (r = 0; r < o; ++r)
                (a = s[r]) &&
                  ((a.fill = Wr(s, r, l)),
                  (a.boundary = zr(a)),
                  (a.mapper = jr(a)));
            },
            beforeDatasetsDraw: function (e) {
              var t,
                n,
                r,
                i,
                a,
                o,
                l,
                s = e._getSortedVisibleDatasetMetas(),
                u = e.ctx;
              for (n = s.length - 1; n >= 0; --n)
                (t = s[n].$filler) &&
                  t.visible &&
                  ((i = (r = t.el)._view),
                  (a = r._children || []),
                  (o = t.mapper),
                  (l = i.backgroundColor || oe.global.defaultColor),
                  o &&
                    l &&
                    a.length &&
                    (de.canvas.clipArea(u, e.chartArea),
                    Ur(u, a, o, i, l, r._loop),
                    de.canvas.unclipArea(u)));
            },
          },
          Hr = de.rtl.getRtlAdapter,
          qr = de.noop,
          Gr = de.valueOrDefault;
        function $r(e, t) {
          return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth;
        }
        oe._set("global", {
          legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (e, t) {
              var n = t.datasetIndex,
                r = this.chart,
                i = r.getDatasetMeta(n);
              (i.hidden =
                null === i.hidden ? !r.data.datasets[n].hidden : null),
                r.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function (e) {
                var t = e.data.datasets,
                  n = e.options.legend || {},
                  r = n.labels && n.labels.usePointStyle;
                return e._getSortedDatasetMetas().map(function (n, i) {
                  var a = n.controller.getStyle(r ? 0 : void 0);
                  return {
                    text: t[n.index].label,
                    fillStyle: a.backgroundColor,
                    hidden: !e.isDatasetVisible(i),
                    lineCap: a.borderCapStyle,
                    lineDash: a.borderDash,
                    lineDashOffset: a.borderDashOffset,
                    lineJoin: a.borderJoinStyle,
                    lineWidth: a.borderWidth,
                    strokeStyle: a.borderColor,
                    pointStyle: a.pointStyle,
                    rotation: a.rotation,
                    datasetIndex: i,
                  };
                }, this);
              },
            },
          },
          legendCallback: function (e) {
            var t,
              n,
              r,
              i = document.createElement("ul"),
              a = e.data.datasets;
            for (
              i.setAttribute("class", e.id + "-legend"), t = 0, n = a.length;
              t < n;
              t++
            )
              ((r = i.appendChild(document.createElement("li"))).appendChild(
                document.createElement("span")
              ).style.backgroundColor = a[t].backgroundColor),
                a[t].label &&
                  r.appendChild(document.createTextNode(a[t].label));
            return i.outerHTML;
          },
        });
        var Kr = ye.extend({
          initialize: function (e) {
            de.extend(this, e),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1);
          },
          beforeUpdate: qr,
          update: function (e, t, n) {
            var r = this;
            return (
              r.beforeUpdate(),
              (r.maxWidth = e),
              (r.maxHeight = t),
              (r.margins = n),
              r.beforeSetDimensions(),
              r.setDimensions(),
              r.afterSetDimensions(),
              r.beforeBuildLabels(),
              r.buildLabels(),
              r.afterBuildLabels(),
              r.beforeFit(),
              r.fit(),
              r.afterFit(),
              r.afterUpdate(),
              r.minSize
            );
          },
          afterUpdate: qr,
          beforeSetDimensions: qr,
          setDimensions: function () {
            var e = this;
            e.isHorizontal()
              ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
              : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
              (e.paddingLeft = 0),
              (e.paddingTop = 0),
              (e.paddingRight = 0),
              (e.paddingBottom = 0),
              (e.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: qr,
          beforeBuildLabels: qr,
          buildLabels: function () {
            var e = this,
              t = e.options.labels || {},
              n = de.callback(t.generateLabels, [e.chart], e) || [];
            t.filter &&
              (n = n.filter(function (n) {
                return t.filter(n, e.chart.data);
              })),
              e.options.reverse && n.reverse(),
              (e.legendItems = n);
          },
          afterBuildLabels: qr,
          beforeFit: qr,
          fit: function () {
            var e = this,
              t = e.options,
              n = t.labels,
              r = t.display,
              i = e.ctx,
              a = de.options._parseFont(n),
              o = a.size,
              l = (e.legendHitBoxes = []),
              s = e.minSize,
              u = e.isHorizontal();
            if (
              (u
                ? ((s.width = e.maxWidth), (s.height = r ? 10 : 0))
                : ((s.width = r ? 10 : 0), (s.height = e.maxHeight)),
              r)
            ) {
              if (((i.font = a.string), u)) {
                var c = (e.lineWidths = [0]),
                  d = 0;
                (i.textAlign = "left"),
                  (i.textBaseline = "middle"),
                  de.each(e.legendItems, function (e, t) {
                    var r = $r(n, o) + o / 2 + i.measureText(e.text).width;
                    (0 === t ||
                      c[c.length - 1] + r + 2 * n.padding > s.width) &&
                      ((d += o + n.padding),
                      (c[c.length - (t > 0 ? 0 : 1)] = 0)),
                      (l[t] = { left: 0, top: 0, width: r, height: o }),
                      (c[c.length - 1] += r + n.padding);
                  }),
                  (s.height += d);
              } else {
                var f = n.padding,
                  h = (e.columnWidths = []),
                  p = (e.columnHeights = []),
                  g = n.padding,
                  m = 0,
                  v = 0;
                de.each(e.legendItems, function (e, t) {
                  var r = $r(n, o) + o / 2 + i.measureText(e.text).width;
                  t > 0 &&
                    v + o + 2 * f > s.height &&
                    ((g += m + n.padding),
                    h.push(m),
                    p.push(v),
                    (m = 0),
                    (v = 0)),
                    (m = Math.max(m, r)),
                    (v += o + f),
                    (l[t] = { left: 0, top: 0, width: r, height: o });
                }),
                  (g += m),
                  h.push(m),
                  p.push(v),
                  (s.width += g);
              }
              (e.width = s.width), (e.height = s.height);
            } else e.width = s.width = e.height = s.height = 0;
          },
          afterFit: qr,
          isHorizontal: function () {
            return (
              "top" === this.options.position ||
              "bottom" === this.options.position
            );
          },
          draw: function () {
            var e = this,
              t = e.options,
              n = t.labels,
              r = oe.global,
              i = r.defaultColor,
              a = r.elements.line,
              o = e.height,
              l = e.columnHeights,
              s = e.width,
              u = e.lineWidths;
            if (t.display) {
              var c,
                d = Hr(t.rtl, e.left, e.minSize.width),
                f = e.ctx,
                h = Gr(n.fontColor, r.defaultFontColor),
                p = de.options._parseFont(n),
                g = p.size;
              (f.textAlign = d.textAlign("left")),
                (f.textBaseline = "middle"),
                (f.lineWidth = 0.5),
                (f.strokeStyle = h),
                (f.fillStyle = h),
                (f.font = p.string);
              var m = $r(n, g),
                v = e.legendHitBoxes,
                y = function (e, r) {
                  switch (t.align) {
                    case "start":
                      return n.padding;
                    case "end":
                      return e - r;
                    default:
                      return (e - r + n.padding) / 2;
                  }
                },
                b = e.isHorizontal();
              (c = b
                ? { x: e.left + y(s, u[0]), y: e.top + n.padding, line: 0 }
                : { x: e.left + n.padding, y: e.top + y(o, l[0]), line: 0 }),
                de.rtl.overrideTextDirection(e.ctx, t.textDirection);
              var x = g + n.padding;
              de.each(e.legendItems, function (t, r) {
                var h = f.measureText(t.text).width,
                  p = m + g / 2 + h,
                  _ = c.x,
                  w = c.y;
                d.setWidth(e.minSize.width),
                  b
                    ? r > 0 &&
                      _ + p + n.padding > e.left + e.minSize.width &&
                      ((w = c.y += x),
                      c.line++,
                      (_ = c.x = e.left + y(s, u[c.line])))
                    : r > 0 &&
                      w + x > e.top + e.minSize.height &&
                      ((_ = c.x = _ + e.columnWidths[c.line] + n.padding),
                      c.line++,
                      (w = c.y = e.top + y(o, l[c.line])));
                var k = d.x(_);
                !(function (e, t, r) {
                  if (!(isNaN(m) || m <= 0)) {
                    f.save();
                    var o = Gr(r.lineWidth, a.borderWidth);
                    if (
                      ((f.fillStyle = Gr(r.fillStyle, i)),
                      (f.lineCap = Gr(r.lineCap, a.borderCapStyle)),
                      (f.lineDashOffset = Gr(
                        r.lineDashOffset,
                        a.borderDashOffset
                      )),
                      (f.lineJoin = Gr(r.lineJoin, a.borderJoinStyle)),
                      (f.lineWidth = o),
                      (f.strokeStyle = Gr(r.strokeStyle, i)),
                      f.setLineDash &&
                        f.setLineDash(Gr(r.lineDash, a.borderDash)),
                      n && n.usePointStyle)
                    ) {
                      var l = (m * Math.SQRT2) / 2,
                        s = d.xPlus(e, m / 2),
                        u = t + g / 2;
                      de.canvas.drawPoint(f, r.pointStyle, l, s, u, r.rotation);
                    } else
                      f.fillRect(d.leftForLtr(e, m), t, m, g),
                        0 !== o && f.strokeRect(d.leftForLtr(e, m), t, m, g);
                    f.restore();
                  }
                })(k, w, t),
                  (v[r].left = d.leftForLtr(k, v[r].width)),
                  (v[r].top = w),
                  (function (e, t, n, r) {
                    var i = g / 2,
                      a = d.xPlus(e, m + i),
                      o = t + i;
                    f.fillText(n.text, a, o),
                      n.hidden &&
                        (f.beginPath(),
                        (f.lineWidth = 2),
                        f.moveTo(a, o),
                        f.lineTo(d.xPlus(a, r), o),
                        f.stroke());
                  })(k, w, t, h),
                  b ? (c.x += p + n.padding) : (c.y += x);
              }),
                de.rtl.restoreTextDirection(e.ctx, t.textDirection);
            }
          },
          _getLegendItemAt: function (e, t) {
            var n,
              r,
              i,
              a = this;
            if (e >= a.left && e <= a.right && t >= a.top && t <= a.bottom)
              for (i = a.legendHitBoxes, n = 0; n < i.length; ++n)
                if (
                  e >= (r = i[n]).left &&
                  e <= r.left + r.width &&
                  t >= r.top &&
                  t <= r.top + r.height
                )
                  return a.legendItems[n];
            return null;
          },
          handleEvent: function (e) {
            var t,
              n = this,
              r = n.options,
              i = "mouseup" === e.type ? "click" : e.type;
            if ("mousemove" === i) {
              if (!r.onHover && !r.onLeave) return;
            } else {
              if ("click" !== i) return;
              if (!r.onClick) return;
            }
            (t = n._getLegendItemAt(e.x, e.y)),
              "click" === i
                ? t && r.onClick && r.onClick.call(n, e.native, t)
                : (r.onLeave &&
                    t !== n._hoveredItem &&
                    (n._hoveredItem &&
                      r.onLeave.call(n, e.native, n._hoveredItem),
                    (n._hoveredItem = t)),
                  r.onHover && t && r.onHover.call(n, e.native, t));
          },
        });
        function Qr(e, t) {
          var n = new Kr({ ctx: e.ctx, options: t, chart: e });
          Nt.configure(e, n, t), Nt.addBox(e, n), (e.legend = n);
        }
        var Zr = {
            id: "legend",
            _element: Kr,
            beforeInit: function (e) {
              var t = e.options.legend;
              t && Qr(e, t);
            },
            beforeUpdate: function (e) {
              var t = e.options.legend,
                n = e.legend;
              t
                ? (de.mergeIf(t, oe.global.legend),
                  n ? (Nt.configure(e, n, t), (n.options = t)) : Qr(e, t))
                : n && (Nt.removeBox(e, n), delete e.legend);
            },
            afterEvent: function (e, t) {
              var n = e.legend;
              n && n.handleEvent(t);
            },
          },
          Xr = de.noop;
        oe._set("global", {
          title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
        });
        var Jr = ye.extend({
          initialize: function (e) {
            de.extend(this, e), (this.legendHitBoxes = []);
          },
          beforeUpdate: Xr,
          update: function (e, t, n) {
            var r = this;
            return (
              r.beforeUpdate(),
              (r.maxWidth = e),
              (r.maxHeight = t),
              (r.margins = n),
              r.beforeSetDimensions(),
              r.setDimensions(),
              r.afterSetDimensions(),
              r.beforeBuildLabels(),
              r.buildLabels(),
              r.afterBuildLabels(),
              r.beforeFit(),
              r.fit(),
              r.afterFit(),
              r.afterUpdate(),
              r.minSize
            );
          },
          afterUpdate: Xr,
          beforeSetDimensions: Xr,
          setDimensions: function () {
            var e = this;
            e.isHorizontal()
              ? ((e.width = e.maxWidth), (e.left = 0), (e.right = e.width))
              : ((e.height = e.maxHeight), (e.top = 0), (e.bottom = e.height)),
              (e.paddingLeft = 0),
              (e.paddingTop = 0),
              (e.paddingRight = 0),
              (e.paddingBottom = 0),
              (e.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: Xr,
          beforeBuildLabels: Xr,
          buildLabels: Xr,
          afterBuildLabels: Xr,
          beforeFit: Xr,
          fit: function () {
            var e,
              t = this,
              n = t.options,
              r = (t.minSize = {}),
              i = t.isHorizontal();
            n.display
              ? ((e =
                  (de.isArray(n.text) ? n.text.length : 1) *
                    de.options._parseFont(n).lineHeight +
                  2 * n.padding),
                (t.width = r.width = i ? t.maxWidth : e),
                (t.height = r.height = i ? e : t.maxHeight))
              : (t.width = r.width = t.height = r.height = 0);
          },
          afterFit: Xr,
          isHorizontal: function () {
            var e = this.options.position;
            return "top" === e || "bottom" === e;
          },
          draw: function () {
            var e = this,
              t = e.ctx,
              n = e.options;
            if (n.display) {
              var r,
                i,
                a,
                o = de.options._parseFont(n),
                l = o.lineHeight,
                s = l / 2 + n.padding,
                u = 0,
                c = e.top,
                d = e.left,
                f = e.bottom,
                h = e.right;
              (t.fillStyle = de.valueOrDefault(
                n.fontColor,
                oe.global.defaultFontColor
              )),
                (t.font = o.string),
                e.isHorizontal()
                  ? ((i = d + (h - d) / 2), (a = c + s), (r = h - d))
                  : ((i = "left" === n.position ? d + s : h - s),
                    (a = c + (f - c) / 2),
                    (r = f - c),
                    (u = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
                t.save(),
                t.translate(i, a),
                t.rotate(u),
                (t.textAlign = "center"),
                (t.textBaseline = "middle");
              var p = n.text;
              if (de.isArray(p))
                for (var g = 0, m = 0; m < p.length; ++m)
                  t.fillText(p[m], 0, g, r), (g += l);
              else t.fillText(p, 0, 0, r);
              t.restore();
            }
          },
        });
        function ei(e, t) {
          var n = new Jr({ ctx: e.ctx, options: t, chart: e });
          Nt.configure(e, n, t), Nt.addBox(e, n), (e.titleBlock = n);
        }
        var ti = {},
          ni = Br,
          ri = Zr,
          ii = {
            id: "title",
            _element: Jr,
            beforeInit: function (e) {
              var t = e.options.title;
              t && ei(e, t);
            },
            beforeUpdate: function (e) {
              var t = e.options.title,
                n = e.titleBlock;
              t
                ? (de.mergeIf(t, oe.global.title),
                  n ? (Nt.configure(e, n, t), (n.options = t)) : ei(e, t))
                : n && (Nt.removeBox(e, n), delete e.titleBlock);
            },
          };
        for (var ai in ((ti.filler = ni),
        (ti.legend = ri),
        (ti.title = ii),
        (kn.helpers = de),
        (function () {
          function e(e, t, n) {
            var r;
            return (
              "string" === typeof e
                ? ((r = parseInt(e, 10)),
                  -1 !== e.indexOf("%") && (r = (r / 100) * t.parentNode[n]))
                : (r = e),
              r
            );
          }
          function t(e) {
            return void 0 !== e && null !== e && "none" !== e;
          }
          function n(n, r, i) {
            var a = document.defaultView,
              o = de._getParentNode(n),
              l = a.getComputedStyle(n)[r],
              s = a.getComputedStyle(o)[r],
              u = t(l),
              c = t(s),
              d = Number.POSITIVE_INFINITY;
            return u || c
              ? Math.min(u ? e(l, n, i) : d, c ? e(s, o, i) : d)
              : "none";
          }
          (de.where = function (e, t) {
            if (de.isArray(e) && Array.prototype.filter) return e.filter(t);
            var n = [];
            return (
              de.each(e, function (e) {
                t(e) && n.push(e);
              }),
              n
            );
          }),
            (de.findIndex = Array.prototype.findIndex
              ? function (e, t, n) {
                  return e.findIndex(t, n);
                }
              : function (e, t, n) {
                  n = void 0 === n ? e : n;
                  for (var r = 0, i = e.length; r < i; ++r)
                    if (t.call(n, e[r], r, e)) return r;
                  return -1;
                }),
            (de.findNextWhere = function (e, t, n) {
              de.isNullOrUndef(n) && (n = -1);
              for (var r = n + 1; r < e.length; r++) {
                var i = e[r];
                if (t(i)) return i;
              }
            }),
            (de.findPreviousWhere = function (e, t, n) {
              de.isNullOrUndef(n) && (n = e.length);
              for (var r = n - 1; r >= 0; r--) {
                var i = e[r];
                if (t(i)) return i;
              }
            }),
            (de.isNumber = function (e) {
              return !isNaN(parseFloat(e)) && isFinite(e);
            }),
            (de.almostEquals = function (e, t, n) {
              return Math.abs(e - t) < n;
            }),
            (de.almostWhole = function (e, t) {
              var n = Math.round(e);
              return n - t <= e && n + t >= e;
            }),
            (de.max = function (e) {
              return e.reduce(function (e, t) {
                return isNaN(t) ? e : Math.max(e, t);
              }, Number.NEGATIVE_INFINITY);
            }),
            (de.min = function (e) {
              return e.reduce(function (e, t) {
                return isNaN(t) ? e : Math.min(e, t);
              }, Number.POSITIVE_INFINITY);
            }),
            (de.sign = Math.sign
              ? function (e) {
                  return Math.sign(e);
                }
              : function (e) {
                  return 0 === (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1;
                }),
            (de.toRadians = function (e) {
              return e * (Math.PI / 180);
            }),
            (de.toDegrees = function (e) {
              return e * (180 / Math.PI);
            }),
            (de._decimalPlaces = function (e) {
              if (de.isFinite(e)) {
                for (var t = 1, n = 0; Math.round(e * t) / t !== e; )
                  (t *= 10), n++;
                return n;
              }
            }),
            (de.getAngleFromPoint = function (e, t) {
              var n = t.x - e.x,
                r = t.y - e.y,
                i = Math.sqrt(n * n + r * r),
                a = Math.atan2(r, n);
              return (
                a < -0.5 * Math.PI && (a += 2 * Math.PI),
                { angle: a, distance: i }
              );
            }),
            (de.distanceBetweenPoints = function (e, t) {
              return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
            }),
            (de.aliasPixel = function (e) {
              return e % 2 === 0 ? 0 : 0.5;
            }),
            (de._alignPixel = function (e, t, n) {
              var r = e.currentDevicePixelRatio,
                i = n / 2;
              return Math.round((t - i) * r) / r + i;
            }),
            (de.splineCurve = function (e, t, n, r) {
              var i = e.skip ? t : e,
                a = t,
                o = n.skip ? t : n,
                l = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
                s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                u = l / (l + s),
                c = s / (l + s),
                d = r * (u = isNaN(u) ? 0 : u),
                f = r * (c = isNaN(c) ? 0 : c);
              return {
                previous: {
                  x: a.x - d * (o.x - i.x),
                  y: a.y - d * (o.y - i.y),
                },
                next: { x: a.x + f * (o.x - i.x), y: a.y + f * (o.y - i.y) },
              };
            }),
            (de.EPSILON = Number.EPSILON || 1e-14),
            (de.splineCurveMonotone = function (e) {
              var t,
                n,
                r,
                i,
                a,
                o,
                l,
                s,
                u,
                c = (e || []).map(function (e) {
                  return { model: e._model, deltaK: 0, mK: 0 };
                }),
                d = c.length;
              for (t = 0; t < d; ++t)
                if (!(r = c[t]).model.skip) {
                  if (
                    ((n = t > 0 ? c[t - 1] : null),
                    (i = t < d - 1 ? c[t + 1] : null) && !i.model.skip)
                  ) {
                    var f = i.model.x - r.model.x;
                    r.deltaK = 0 !== f ? (i.model.y - r.model.y) / f : 0;
                  }
                  !n || n.model.skip
                    ? (r.mK = r.deltaK)
                    : !i || i.model.skip
                    ? (r.mK = n.deltaK)
                    : this.sign(n.deltaK) !== this.sign(r.deltaK)
                    ? (r.mK = 0)
                    : (r.mK = (n.deltaK + r.deltaK) / 2);
                }
              for (t = 0; t < d - 1; ++t)
                (r = c[t]),
                  (i = c[t + 1]),
                  r.model.skip ||
                    i.model.skip ||
                    (de.almostEquals(r.deltaK, 0, this.EPSILON)
                      ? (r.mK = i.mK = 0)
                      : ((a = r.mK / r.deltaK),
                        (o = i.mK / r.deltaK),
                        (s = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 ||
                          ((l = 3 / Math.sqrt(s)),
                          (r.mK = a * l * r.deltaK),
                          (i.mK = o * l * r.deltaK))));
              for (t = 0; t < d; ++t)
                (r = c[t]).model.skip ||
                  ((n = t > 0 ? c[t - 1] : null),
                  (i = t < d - 1 ? c[t + 1] : null),
                  n &&
                    !n.model.skip &&
                    ((u = (r.model.x - n.model.x) / 3),
                    (r.model.controlPointPreviousX = r.model.x - u),
                    (r.model.controlPointPreviousY = r.model.y - u * r.mK)),
                  i &&
                    !i.model.skip &&
                    ((u = (i.model.x - r.model.x) / 3),
                    (r.model.controlPointNextX = r.model.x + u),
                    (r.model.controlPointNextY = r.model.y + u * r.mK)));
            }),
            (de.nextItem = function (e, t, n) {
              return n
                ? t >= e.length - 1
                  ? e[0]
                  : e[t + 1]
                : t >= e.length - 1
                ? e[e.length - 1]
                : e[t + 1];
            }),
            (de.previousItem = function (e, t, n) {
              return n
                ? t <= 0
                  ? e[e.length - 1]
                  : e[t - 1]
                : t <= 0
                ? e[0]
                : e[t - 1];
            }),
            (de.niceNum = function (e, t) {
              var n = Math.floor(de.log10(e)),
                r = e / Math.pow(10, n);
              return (
                (t
                  ? r < 1.5
                    ? 1
                    : r < 3
                    ? 2
                    : r < 7
                    ? 5
                    : 10
                  : r <= 1
                  ? 1
                  : r <= 2
                  ? 2
                  : r <= 5
                  ? 5
                  : 10) * Math.pow(10, n)
              );
            }),
            (de.requestAnimFrame =
              "undefined" === typeof window
                ? function (e) {
                    e();
                  }
                : window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (e) {
                    return window.setTimeout(e, 1e3 / 60);
                  }),
            (de.getRelativePosition = function (e, t) {
              var n,
                r,
                i = e.originalEvent || e,
                a = e.target || e.srcElement,
                o = a.getBoundingClientRect(),
                l = i.touches;
              l && l.length > 0
                ? ((n = l[0].clientX), (r = l[0].clientY))
                : ((n = i.clientX), (r = i.clientY));
              var s = parseFloat(de.getStyle(a, "padding-left")),
                u = parseFloat(de.getStyle(a, "padding-top")),
                c = parseFloat(de.getStyle(a, "padding-right")),
                d = parseFloat(de.getStyle(a, "padding-bottom")),
                f = o.right - o.left - s - c,
                h = o.bottom - o.top - u - d;
              return {
                x: (n = Math.round(
                  (((n - o.left - s) / f) * a.width) / t.currentDevicePixelRatio
                )),
                y: (r = Math.round(
                  (((r - o.top - u) / h) * a.height) / t.currentDevicePixelRatio
                )),
              };
            }),
            (de.getConstraintWidth = function (e) {
              return n(e, "max-width", "clientWidth");
            }),
            (de.getConstraintHeight = function (e) {
              return n(e, "max-height", "clientHeight");
            }),
            (de._calculatePadding = function (e, t, n) {
              return (t = de.getStyle(e, t)).indexOf("%") > -1
                ? (n * parseInt(t, 10)) / 100
                : parseInt(t, 10);
            }),
            (de._getParentNode = function (e) {
              var t = e.parentNode;
              return (
                t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
              );
            }),
            (de.getMaximumWidth = function (e) {
              var t = de._getParentNode(e);
              if (!t) return e.clientWidth;
              var n = t.clientWidth,
                r =
                  n -
                  de._calculatePadding(t, "padding-left", n) -
                  de._calculatePadding(t, "padding-right", n),
                i = de.getConstraintWidth(e);
              return isNaN(i) ? r : Math.min(r, i);
            }),
            (de.getMaximumHeight = function (e) {
              var t = de._getParentNode(e);
              if (!t) return e.clientHeight;
              var n = t.clientHeight,
                r =
                  n -
                  de._calculatePadding(t, "padding-top", n) -
                  de._calculatePadding(t, "padding-bottom", n),
                i = de.getConstraintHeight(e);
              return isNaN(i) ? r : Math.min(r, i);
            }),
            (de.getStyle = function (e, t) {
              return e.currentStyle
                ? e.currentStyle[t]
                : document.defaultView
                    .getComputedStyle(e, null)
                    .getPropertyValue(t);
            }),
            (de.retinaScale = function (e, t) {
              var n = (e.currentDevicePixelRatio =
                t ||
                ("undefined" !== typeof window && window.devicePixelRatio) ||
                1);
              if (1 !== n) {
                var r = e.canvas,
                  i = e.height,
                  a = e.width;
                (r.height = i * n),
                  (r.width = a * n),
                  e.ctx.scale(n, n),
                  r.style.height ||
                    r.style.width ||
                    ((r.style.height = i + "px"), (r.style.width = a + "px"));
              }
            }),
            (de.fontString = function (e, t, n) {
              return t + " " + e + "px " + n;
            }),
            (de.longestText = function (e, t, n, r) {
              var i = ((r = r || {}).data = r.data || {}),
                a = (r.garbageCollect = r.garbageCollect || []);
              r.font !== t &&
                ((i = r.data = {}), (a = r.garbageCollect = []), (r.font = t)),
                (e.font = t);
              var o,
                l,
                s,
                u,
                c,
                d = 0,
                f = n.length;
              for (o = 0; o < f; o++)
                if (void 0 !== (u = n[o]) && null !== u && !0 !== de.isArray(u))
                  d = de.measureText(e, i, a, d, u);
                else if (de.isArray(u))
                  for (l = 0, s = u.length; l < s; l++)
                    void 0 === (c = u[l]) ||
                      null === c ||
                      de.isArray(c) ||
                      (d = de.measureText(e, i, a, d, c));
              var h = a.length / 2;
              if (h > n.length) {
                for (o = 0; o < h; o++) delete i[a[o]];
                a.splice(0, h);
              }
              return d;
            }),
            (de.measureText = function (e, t, n, r, i) {
              var a = t[i];
              return (
                a || ((a = t[i] = e.measureText(i).width), n.push(i)),
                a > r && (r = a),
                r
              );
            }),
            (de.numberOfLabelLines = function (e) {
              var t = 1;
              return (
                de.each(e, function (e) {
                  de.isArray(e) && e.length > t && (t = e.length);
                }),
                t
              );
            }),
            (de.color = q
              ? function (e) {
                  return (
                    e instanceof CanvasGradient && (e = oe.global.defaultColor),
                    q(e)
                  );
                }
              : function (e) {
                  return console.error("Color.js not found!"), e;
                }),
            (de.getHoverColor = function (e) {
              return e instanceof CanvasPattern || e instanceof CanvasGradient
                ? e
                : de.color(e).saturate(0.5).darken(0.1).rgbString();
            });
        })(),
        (kn._adapters = Tn),
        (kn.Animation = xe),
        (kn.animationService = _e),
        (kn.controllers = yt),
        (kn.DatasetController = Te),
        (kn.defaults = oe),
        (kn.Element = ye),
        (kn.elements = He),
        (kn.Interaction = Mt),
        (kn.layouts = Nt),
        (kn.platform = Jt),
        (kn.plugins = en),
        (kn.Scale = Vn),
        (kn.scaleService = tn),
        (kn.Ticks = Cn),
        (kn.Tooltip = pn),
        kn.helpers.each(Fr, function (e, t) {
          kn.scaleService.registerScaleType(t, e, e._defaults);
        }),
        ti))
          ti.hasOwnProperty(ai) && kn.plugins.register(ti[ai]);
        kn.platform.initialize();
        var oi = kn;
        return (
          "undefined" !== typeof window && (window.Chart = kn),
          (kn.Chart = kn),
          (kn.Legend = ti.legend._element),
          (kn.Title = ti.title._element),
          (kn.pluginService = kn.plugins),
          (kn.PluginBase = kn.Element.extend({})),
          (kn.canvasHelpers = kn.helpers.canvas),
          (kn.layoutService = kn.layouts),
          (kn.LinearScaleBase = Gn),
          kn.helpers.each(
            [
              "Bar",
              "Bubble",
              "Doughnut",
              "Line",
              "PolarArea",
              "Radar",
              "Scatter",
            ],
            function (e) {
              kn[e] = function (t, n) {
                return new kn(
                  t,
                  kn.helpers.merge(n || {}, {
                    type: e.charAt(0).toLowerCase() + e.slice(1),
                  })
                );
              };
            }
          ),
          oi
        );
      })(
        (function () {
          try {
            return n(62);
          } catch (e) {}
        })()
      );
    },
    function (e, t, n) {
      var r = n(18);
      e.exports = function (e, t) {
        return r(e, t);
      };
    },
    function (e, t, n) {
      var r = n(12),
        i = n(76),
        a = n(77),
        o = "[object Null]",
        l = "[object Undefined]",
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? l
            : o
          : s && s in Object(e)
          ? i(e)
          : a(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n = [],
              r = !0,
              i = !1,
              a = void 0;
            try {
              for (
                var o, l = e[Symbol.iterator]();
                !(r = (o = l.next()).done) &&
                (n.push(o.value), !t || n.length !== t);
                r = !0
              );
            } catch (s) {
              (i = !0), (a = s);
            } finally {
              try {
                r || null == l.return || l.return();
              } finally {
                if (i) throw a;
              }
            }
            return n;
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      var r = n(64),
        i = n(65),
        a = n(66),
        o = n(67),
        l = n(68);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = i),
        (s.prototype.get = a),
        (s.prototype.has = o),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(31);
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    function (e, t, n) {
      var r = n(2).Symbol;
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(4)(Object, "create");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(89);
      e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
    },
    function (e, t, n) {
      var r = n(25),
        i = 1 / 0;
      e.exports = function (e) {
        if ("string" == typeof e || r(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -i ? "-0" : t;
      };
    },
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t, n) {
      var r = n(63),
        i = n(8);
      e.exports = function e(t, n, a, o, l) {
        return (
          t === n ||
          (null == t || null == n || (!i(t) && !i(n))
            ? t !== t && n !== n
            : r(t, n, a, o, e, l))
        );
      };
    },
    function (e, t, n) {
      var r = n(4)(n(2), "Map");
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    function (e, t, n) {
      var r = n(81),
        i = n(88),
        a = n(90),
        o = n(91),
        l = n(92);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = i),
        (s.prototype.get = a),
        (s.prototype.has = o),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(109),
        i = n(116),
        a = n(40);
      e.exports = function (e) {
        return a(e) ? r(e) : i(e);
      };
    },
    function (e, t) {
      var n = 9007199254740991;
      e.exports = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n;
      };
    },
    function (e, t, n) {
      var r = n(3),
        i = n(25),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
      e.exports = function (e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !i(e)
          ) ||
          o.test(e) ||
          !a.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    function (e, t, n) {
      var r = n(7),
        i = n(8),
        a = "[object Symbol]";
      e.exports = function (e) {
        return "symbol" == typeof e || (i(e) && r(e) == a);
      };
    },
    function (e, t, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      function o(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (var n, l, s = o(e), u = 1; u < arguments.length; u++) {
              for (var c in (n = Object(arguments[u])))
                i.call(n, c) && (s[c] = n[c]);
              if (r) {
                l = r(n);
                for (var d = 0; d < l.length; d++)
                  a.call(n, l[d]) && (s[l[d]] = n[l[d]]);
              }
            }
            return s;
          };
    },
    function (e, t) {
      var n =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (n) {
        var r = new Uint8Array(16);
        e.exports = function () {
          return n(r), r;
        };
      } else {
        var i = new Array(16);
        e.exports = function () {
          for (var e, t = 0; t < 16; t++)
            0 === (3 & t) && (e = 4294967296 * Math.random()),
              (i[t] = (e >>> ((3 & t) << 3)) & 255);
          return i;
        };
      }
    },
    function (e, t) {
      for (var n = [], r = 0; r < 256; ++r)
        n[r] = (r + 256).toString(16).substr(1);
      e.exports = function (e, t) {
        var r = t || 0,
          i = n;
        return [
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          "-",
          i[e[r++]],
          i[e[r++]],
          "-",
          i[e[r++]],
          i[e[r++]],
          "-",
          i[e[r++]],
          i[e[r++]],
          "-",
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
          i[e[r++]],
        ].join("");
      };
    },
    ,
    function (e, t, n) {
      var r = n(10),
        i = n(69),
        a = n(70),
        o = n(71),
        l = n(72),
        s = n(73);
      function u(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (u.prototype.clear = i),
        (u.prototype.delete = a),
        (u.prototype.get = o),
        (u.prototype.has = l),
        (u.prototype.set = s),
        (e.exports = u);
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e === t || (e !== e && t !== t);
      };
    },
    function (e, t, n) {
      var r = n(7),
        i = n(20),
        a = "[object AsyncFunction]",
        o = "[object Function]",
        l = "[object GeneratorFunction]",
        s = "[object Proxy]";
      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = r(e);
        return t == o || t == l || t == a || t == s;
      };
    },
    function (e, t, n) {
      (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n(75)));
    },
    function (e, t) {
      var n = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return n.call(e);
          } catch (t) {}
          try {
            return e + "";
          } catch (t) {}
        }
        return "";
      };
    },
    function (e, t, n) {
      var r = n(93),
        i = n(96),
        a = n(97),
        o = 1,
        l = 2;
      e.exports = function (e, t, n, s, u, c) {
        var d = n & o,
          f = e.length,
          h = t.length;
        if (f != h && !(d && h > f)) return !1;
        var p = c.get(e);
        if (p && c.get(t)) return p == t;
        var g = -1,
          m = !0,
          v = n & l ? new r() : void 0;
        for (c.set(e, t), c.set(t, e); ++g < f; ) {
          var y = e[g],
            b = t[g];
          if (s) var x = d ? s(b, y, g, t, e, c) : s(y, b, g, e, t, c);
          if (void 0 !== x) {
            if (x) continue;
            m = !1;
            break;
          }
          if (v) {
            if (
              !i(t, function (e, t) {
                if (!a(v, t) && (y === e || u(y, e, n, s, c))) return v.push(t);
              })
            ) {
              m = !1;
              break;
            }
          } else if (y !== b && !u(y, b, n, s, c)) {
            m = !1;
            break;
          }
        }
        return c.delete(e), c.delete(t), m;
      };
    },
    function (e, t, n) {
      var r = n(111),
        i = n(8),
        a = Object.prototype,
        o = a.hasOwnProperty,
        l = a.propertyIsEnumerable,
        s = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (e) {
              return i(e) && o.call(e, "callee") && !l.call(e, "callee");
            };
      e.exports = s;
    },
    function (e, t, n) {
      (function (e) {
        var r = n(2),
          i = n(112),
          a = t && !t.nodeType && t,
          o = a && "object" == typeof e && e && !e.nodeType && e,
          l = o && o.exports === a ? r.Buffer : void 0,
          s = (l ? l.isBuffer : void 0) || i;
        e.exports = s;
      }.call(this, n(17)(e)));
    },
    function (e, t) {
      var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, t) {
        var i = typeof e;
        return (
          !!(t = null == t ? n : t) &&
          ("number" == i || ("symbol" != i && r.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
    },
    function (e, t, n) {
      var r = n(113),
        i = n(114),
        a = n(115),
        o = a && a.isTypedArray,
        l = o ? i(o) : r;
      e.exports = l;
    },
    function (e, t, n) {
      var r = n(32),
        i = n(23);
      e.exports = function (e) {
        return null != e && i(e.length) && !r(e);
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e) {
        return e === e && !r(e);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
    },
    function (e, t, n) {
      var r = n(44),
        i = n(15);
      e.exports = function (e, t) {
        for (var n = 0, a = (t = r(t, e)).length; null != e && n < a; )
          e = e[i(t[n++])];
        return n && n == a ? e : void 0;
      };
    },
    function (e, t, n) {
      var r = n(3),
        i = n(24),
        a = n(141),
        o = n(144);
      e.exports = function (e, t) {
        return r(e) ? e : i(e, t) ? [e] : a(o(e));
      };
    },
    function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        ) {
          0;
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
        }
      })(),
        (e.exports = n(52));
    },
    function (e, t, n) {
      var r = n(56),
        i = n(57),
        a = i;
      (a.v1 = r), (a.v4 = i), (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", function () {
          return x;
        });
        var r = n(0),
          i = n.n(r),
          a = n(1),
          o = n.n(a),
          l = n(5),
          s = n.n(l),
          u = n(6),
          c = n.n(u),
          d = n(48),
          f = n.n(d),
          h =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            };
        function p(e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        }
        function g(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function m(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        }
        function v(e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        var y =
            "undefined" !== typeof e &&
            Object({ NODE_ENV: "production", PUBLIC_URL: "/bmi-calculator" }) &&
            "production",
          b = (function (e) {
            function t() {
              g(this, t);
              var n = m(this, e.call(this));
              return (
                (n.handleOnClick = function (e) {
                  var t = n.chartInstance,
                    r = n.props,
                    i = r.getDatasetAtEvent,
                    a = r.getElementAtEvent,
                    o = r.getElementsAtEvent,
                    l = r.onElementsClick;
                  i && i(t.getDatasetAtEvent(e), e),
                    a && a(t.getElementAtEvent(e), e),
                    o && o(t.getElementsAtEvent(e), e),
                    l && l(t.getElementsAtEvent(e), e);
                }),
                (n.ref = function (e) {
                  n.element = e;
                }),
                (n.chartInstance = void 0),
                n
              );
            }
            return (
              v(t, e),
              (t.prototype.componentDidMount = function () {
                this.renderChart();
              }),
              (t.prototype.componentDidUpdate = function () {
                if (this.props.redraw)
                  return this.destroyChart(), void this.renderChart();
                this.updateChart();
              }),
              (t.prototype.shouldComponentUpdate = function (e) {
                var t = this.props,
                  n = (t.redraw, t.type),
                  r = t.options,
                  i = t.plugins,
                  a = t.legend,
                  o = t.height,
                  l = t.width;
                if (!0 === e.redraw) return !0;
                if (o !== e.height || l !== e.width) return !0;
                if (n !== e.type) return !0;
                if (!c()(a, e.legend)) return !0;
                if (!c()(r, e.options)) return !0;
                var s = this.transformDataProp(e);
                return !c()(this.shadowDataProp, s) || !c()(i, e.plugins);
              }),
              (t.prototype.componentWillUnmount = function () {
                this.destroyChart();
              }),
              (t.prototype.transformDataProp = function (e) {
                var t = e.data;
                return "function" == typeof t ? t(this.element) : t;
              }),
              (t.prototype.memoizeDataProps = function () {
                if (this.props.data) {
                  var e = this.transformDataProp(this.props);
                  return (
                    (this.shadowDataProp = h({}, e, {
                      datasets:
                        e.datasets &&
                        e.datasets.map(function (e) {
                          return h({}, e);
                        }),
                    })),
                    this.saveCurrentDatasets(),
                    e
                  );
                }
              }),
              (t.prototype.checkDatasets = function (e) {
                var n = "production" !== y && "prod" !== y,
                  r = this.props.datasetKeyProvider !== t.getLabelAsKey,
                  i = e.length > 1;
                if (n && i && !r) {
                  var a = !1;
                  e.forEach(function (e) {
                    e.label || (a = !0);
                  }),
                    a &&
                      console.error(
                        '[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.'
                      );
                }
              }),
              (t.prototype.getCurrentDatasets = function () {
                return (
                  (this.chartInstance &&
                    this.chartInstance.config.data &&
                    this.chartInstance.config.data.datasets) ||
                  []
                );
              }),
              (t.prototype.saveCurrentDatasets = function () {
                var e = this;
                (this.datasets = this.datasets || {}),
                  this.getCurrentDatasets().forEach(function (t) {
                    e.datasets[e.props.datasetKeyProvider(t)] = t;
                  });
              }),
              (t.prototype.updateChart = function () {
                var e = this,
                  t = this.props.options,
                  n = this.memoizeDataProps(this.props);
                if (this.chartInstance) {
                  t &&
                    (this.chartInstance.options = s.a.helpers.configMerge(
                      this.chartInstance.options,
                      t
                    ));
                  var r = this.getCurrentDatasets(),
                    i = n.datasets || [];
                  this.checkDatasets(r);
                  var a = f()(r, this.props.datasetKeyProvider);
                  this.chartInstance.config.data.datasets = i.map(function (t) {
                    var n = a[e.props.datasetKeyProvider(t)];
                    if (n && n.type === t.type && t.data) {
                      n.data.splice(t.data.length),
                        t.data.forEach(function (e, r) {
                          n.data[r] = t.data[r];
                        });
                      t.data;
                      var r = p(t, ["data"]);
                      return h({}, n, r);
                    }
                    return t;
                  });
                  n.datasets;
                  var o = p(n, ["datasets"]);
                  (this.chartInstance.config.data = h(
                    {},
                    this.chartInstance.config.data,
                    o
                  )),
                    this.chartInstance.update();
                }
              }),
              (t.prototype.renderChart = function () {
                var e = this.props,
                  n = e.options,
                  r = e.legend,
                  i = e.type,
                  a = e.plugins,
                  o = this.element,
                  l = this.memoizeDataProps();
                "undefined" === typeof r ||
                  c()(t.defaultProps.legend, r) ||
                  (n.legend = r),
                  (this.chartInstance = new s.a(o, {
                    type: i,
                    data: l,
                    options: n,
                    plugins: a,
                  }));
              }),
              (t.prototype.destroyChart = function () {
                this.saveCurrentDatasets();
                var e = Object.values(this.datasets);
                (this.chartInstance.config.data.datasets = e),
                  this.chartInstance.destroy();
              }),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.height,
                  n = e.width,
                  r = e.id;
                return i.a.createElement("canvas", {
                  ref: this.ref,
                  height: t,
                  width: n,
                  id: r,
                  onClick: this.handleOnClick,
                });
              }),
              t
            );
          })(i.a.Component);
        (b.getLabelAsKey = function (e) {
          return e.label;
        }),
          (b.propTypes = {
            data: o.a.oneOfType([o.a.object, o.a.func]).isRequired,
            getDatasetAtEvent: o.a.func,
            getElementAtEvent: o.a.func,
            getElementsAtEvent: o.a.func,
            height: o.a.number,
            legend: o.a.object,
            onElementsClick: o.a.func,
            options: o.a.object,
            plugins: o.a.arrayOf(o.a.object),
            redraw: o.a.bool,
            type: function (e, t, n) {
              if (!s.a.controllers[e[t]])
                return new Error(
                  "Invalid chart type `" + e[t] + "` supplied to `" + n + "`."
                );
            },
            width: o.a.number,
            datasetKeyProvider: o.a.func,
          }),
          (b.defaultProps = {
            legend: { display: !0, position: "bottom" },
            type: "doughnut",
            height: 150,
            width: 300,
            redraw: !1,
            options: {},
            datasetKeyProvider: b.getLabelAsKey,
          });
        (function (e) {
          function t() {
            return g(this, t), m(this, e.apply(this, arguments));
          }
          v(t, e),
            (t.prototype.render = function () {
              var e = this;
              return i.a.createElement(
                b,
                h({}, this.props, {
                  ref: function (t) {
                    return (e.chartInstance = t && t.chartInstance);
                  },
                  type: "doughnut",
                })
              );
            });
        })(i.a.Component),
          (function (e) {
            function t() {
              return g(this, t), m(this, e.apply(this, arguments));
            }
            v(t, e),
              (t.prototype.render = function () {
                var e = this;
                return i.a.createElement(
                  b,
                  h({}, this.props, {
                    ref: function (t) {
                      return (e.chartInstance = t && t.chartInstance);
                    },
                    type: "pie",
                  })
                );
              });
          })(i.a.Component);
        var x = (function (e) {
          function t() {
            return g(this, t), m(this, e.apply(this, arguments));
          }
          return (
            v(t, e),
            (t.prototype.render = function () {
              var e = this;
              return i.a.createElement(
                b,
                h({}, this.props, {
                  ref: function (t) {
                    return (e.chartInstance = t && t.chartInstance);
                  },
                  type: "line",
                })
              );
            }),
            t
          );
        })(i.a.Component);
        (function (e) {
          function t() {
            return g(this, t), m(this, e.apply(this, arguments));
          }
          v(t, e),
            (t.prototype.render = function () {
              var e = this;
              return i.a.createElement(
                b,
                h({}, this.props, {
                  ref: function (t) {
                    return (e.chartInstance = t && t.chartInstance);
                  },
                  type: "bar",
                })
              );
            });
        })(i.a.Component),
          (function (e) {
            function t() {
              return g(this, t), m(this, e.apply(this, arguments));
            }
            v(t, e),
              (t.prototype.render = function () {
                var e = this;
                return i.a.createElement(
                  b,
                  h({}, this.props, {
                    ref: function (t) {
                      return (e.chartInstance = t && t.chartInstance);
                    },
                    type: "horizontalBar",
                  })
                );
              });
          })(i.a.Component),
          (function (e) {
            function t() {
              return g(this, t), m(this, e.apply(this, arguments));
            }
            v(t, e),
              (t.prototype.render = function () {
                var e = this;
                return i.a.createElement(
                  b,
                  h({}, this.props, {
                    ref: function (t) {
                      return (e.chartInstance = t && t.chartInstance);
                    },
                    type: "radar",
                  })
                );
              });
          })(i.a.Component),
          (function (e) {
            function t() {
              return g(this, t), m(this, e.apply(this, arguments));
            }
            v(t, e),
              (t.prototype.render = function () {
                var e = this;
                return i.a.createElement(
                  b,
                  h({}, this.props, {
                    ref: function (t) {
                      return (e.chartInstance = t && t.chartInstance);
                    },
                    type: "polarArea",
                  })
                );
              });
          })(i.a.Component),
          (function (e) {
            function t() {
              return g(this, t), m(this, e.apply(this, arguments));
            }
            v(t, e),
              (t.prototype.render = function () {
                var e = this;
                return i.a.createElement(
                  b,
                  h({}, this.props, {
                    ref: function (t) {
                      return (e.chartInstance = t && t.chartInstance);
                    },
                    type: "bubble",
                  })
                );
              });
          })(i.a.Component),
          (function (e) {
            function t() {
              return g(this, t), m(this, e.apply(this, arguments));
            }
            v(t, e),
              (t.prototype.render = function () {
                var e = this;
                return i.a.createElement(
                  b,
                  h({}, this.props, {
                    ref: function (t) {
                      return (e.chartInstance = t && t.chartInstance);
                    },
                    type: "scatter",
                  })
                );
              });
          })(i.a.Component),
          s.a.defaults;
      }.call(this, n(59)));
    },
    function (e, t, n) {
      var r = n(125),
        i = n(127)(function (e, t, n) {
          r(e, n, t);
        });
      e.exports = i;
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    ,
    function (e, t, n) {
      "use strict";
      var r = n(26),
        i = "function" === typeof Symbol && Symbol.for,
        a = i ? Symbol.for("react.element") : 60103,
        o = i ? Symbol.for("react.portal") : 60106,
        l = i ? Symbol.for("react.fragment") : 60107,
        s = i ? Symbol.for("react.strict_mode") : 60108,
        u = i ? Symbol.for("react.profiler") : 60114,
        c = i ? Symbol.for("react.provider") : 60109,
        d = i ? Symbol.for("react.context") : 60110,
        f = i ? Symbol.for("react.forward_ref") : 60112,
        h = i ? Symbol.for("react.suspense") : 60113;
      i && Symbol.for("react.suspense_list");
      var p = i ? Symbol.for("react.memo") : 60115,
        g = i ? Symbol.for("react.lazy") : 60116;
      i && Symbol.for("react.fundamental"),
        i && Symbol.for("react.responder"),
        i && Symbol.for("react.scope");
      var m = "function" === typeof Symbol && Symbol.iterator;
      function v(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var y = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        b = {};
      function x(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || y);
      }
      function _() {}
      function w(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = b),
          (this.updater = n || y);
      }
      (x.prototype.isReactComponent = {}),
        (x.prototype.setState = function (e, t) {
          if ("object" !== typeof e && "function" !== typeof e && null != e)
            throw Error(v(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (x.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (_.prototype = x.prototype);
      var k = (w.prototype = new _());
      (k.constructor = w), r(k, x.prototype), (k.isPureReactComponent = !0);
      var S = { current: null },
        M = { current: null },
        T = Object.prototype.hasOwnProperty,
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
      function P(e, t, n) {
        var r,
          i = {},
          o = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (o = "" + t.key),
          t))
            T.call(t, r) && !C.hasOwnProperty(r) && (i[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s) i.children = n;
        else if (1 < s) {
          for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
          i.children = u;
        }
        if (e && e.defaultProps)
          for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
        return {
          $$typeof: a,
          type: e,
          key: o,
          ref: l,
          props: i,
          _owner: M.current,
        };
      }
      function E(e) {
        return "object" === typeof e && null !== e && e.$$typeof === a;
      }
      var D = /\/+/g,
        O = [];
      function A(e, t, n, r) {
        if (O.length) {
          var i = O.pop();
          return (
            (i.result = e),
            (i.keyPrefix = t),
            (i.func = n),
            (i.context = r),
            (i.count = 0),
            i
          );
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function I(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > O.length && O.push(e);
      }
      function F(e, t, n) {
        return null == e
          ? 0
          : (function e(t, n, r, i) {
              var l = typeof t;
              ("undefined" !== l && "boolean" !== l) || (t = null);
              var s = !1;
              if (null === t) s = !0;
              else
                switch (l) {
                  case "string":
                  case "number":
                    s = !0;
                    break;
                  case "object":
                    switch (t.$$typeof) {
                      case a:
                      case o:
                        s = !0;
                    }
                }
              if (s) return r(i, t, "" === n ? "." + N(t, 0) : n), 1;
              if (((s = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                for (var u = 0; u < t.length; u++) {
                  var c = n + N((l = t[u]), u);
                  s += e(l, c, r, i);
                }
              else if (
                (null === t || "object" !== typeof t
                  ? (c = null)
                  : (c =
                      "function" === typeof (c = (m && t[m]) || t["@@iterator"])
                        ? c
                        : null),
                "function" === typeof c)
              )
                for (t = c.call(t), u = 0; !(l = t.next()).done; )
                  s += e((l = l.value), (c = n + N(l, u++)), r, i);
              else if ("object" === l)
                throw (
                  ((r = "" + t),
                  Error(
                    v(
                      31,
                      "[object Object]" === r
                        ? "object with keys {" + Object.keys(t).join(", ") + "}"
                        : r,
                      ""
                    )
                  ))
                );
              return s;
            })(e, "", t, n);
      }
      function N(e, t) {
        return "object" === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + e).replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function L(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function R(e, t, n) {
        var r = e.result,
          i = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? z(e, r, n, function (e) {
                return e;
              })
            : null != e &&
              (E(e) &&
                (e = (function (e, t) {
                  return {
                    $$typeof: a,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  e,
                  i +
                    (!e.key || (t && t.key === e.key)
                      ? ""
                      : ("" + e.key).replace(D, "$&/") + "/") +
                    n
                )),
              r.push(e));
      }
      function z(e, t, n, r, i) {
        var a = "";
        null != n && (a = ("" + n).replace(D, "$&/") + "/"),
          F(e, R, (t = A(t, a, r, i))),
          I(t);
      }
      function W() {
        var e = S.current;
        if (null === e) throw Error(v(321));
        return e;
      }
      var j = {
          Children: {
            map: function (e, t, n) {
              if (null == e) return e;
              var r = [];
              return z(e, r, null, t, n), r;
            },
            forEach: function (e, t, n) {
              if (null == e) return e;
              F(e, L, (t = A(null, null, t, n))), I(t);
            },
            count: function (e) {
              return F(
                e,
                function () {
                  return null;
                },
                null
              );
            },
            toArray: function (e) {
              var t = [];
              return (
                z(e, t, null, function (e) {
                  return e;
                }),
                t
              );
            },
            only: function (e) {
              if (!E(e)) throw Error(v(143));
              return e;
            },
          },
          createRef: function () {
            return { current: null };
          },
          Component: x,
          PureComponent: w,
          createContext: function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: d,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: c, _context: e }),
              (e.Consumer = e)
            );
          },
          forwardRef: function (e) {
            return { $$typeof: f, render: e };
          },
          lazy: function (e) {
            return { $$typeof: g, _ctor: e, _status: -1, _result: null };
          },
          memo: function (e, t) {
            return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
          },
          useCallback: function (e, t) {
            return W().useCallback(e, t);
          },
          useContext: function (e, t) {
            return W().useContext(e, t);
          },
          useEffect: function (e, t) {
            return W().useEffect(e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return W().useImperativeHandle(e, t, n);
          },
          useDebugValue: function () {},
          useLayoutEffect: function (e, t) {
            return W().useLayoutEffect(e, t);
          },
          useMemo: function (e, t) {
            return W().useMemo(e, t);
          },
          useReducer: function (e, t, n) {
            return W().useReducer(e, t, n);
          },
          useRef: function (e) {
            return W().useRef(e);
          },
          useState: function (e) {
            return W().useState(e);
          },
          Fragment: l,
          Profiler: u,
          StrictMode: s,
          Suspense: h,
          createElement: P,
          cloneElement: function (e, t, n) {
            if (null === e || void 0 === e) throw Error(v(267, e));
            var i = r({}, e.props),
              o = e.key,
              l = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (s = M.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                T.call(t, c) &&
                  !C.hasOwnProperty(c) &&
                  (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) i.children = n;
            else if (1 < c) {
              u = Array(c);
              for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
              i.children = u;
            }
            return {
              $$typeof: a,
              type: e.type,
              key: o,
              ref: l,
              props: i,
              _owner: s,
            };
          },
          createFactory: function (e) {
            var t = P.bind(null, e);
            return (t.type = e), t;
          },
          isValidElement: E,
          version: "16.11.0",
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: S,
            ReactCurrentBatchConfig: { suspense: null },
            ReactCurrentOwner: M,
            IsSomeRendererActing: { current: !1 },
            assign: r,
          },
        },
        V = { default: j },
        Y = (V && j) || V;
      e.exports = Y.default || Y;
    },
    function (e, t, n) {
      "use strict";
      var r = n(0),
        i = n(26),
        a = n(53);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(o(227));
      var l = null,
        s = {};
      function u() {
        if (l)
          for (var e in s) {
            var t = s[e],
              n = l.indexOf(e);
            if (!(-1 < n)) throw Error(o(96, e));
            if (!d[n]) {
              if (!t.extractEvents) throw Error(o(97, e));
              for (var r in ((d[n] = t), (n = t.eventTypes))) {
                var i = void 0,
                  a = n[r],
                  u = t,
                  h = r;
                if (f.hasOwnProperty(h)) throw Error(o(99, h));
                f[h] = a;
                var p = a.phasedRegistrationNames;
                if (p) {
                  for (i in p) p.hasOwnProperty(i) && c(p[i], u, h);
                  i = !0;
                } else
                  a.registrationName
                    ? (c(a.registrationName, u, h), (i = !0))
                    : (i = !1);
                if (!i) throw Error(o(98, r, e));
              }
            }
          }
      }
      function c(e, t, n) {
        if (h[e]) throw Error(o(100, e));
        (h[e] = t), (p[e] = t.eventTypes[n].dependencies);
      }
      var d = [],
        f = {},
        h = {},
        p = {};
      function g(e, t, n, r, i, a, o, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }
      var m = !1,
        v = null,
        y = !1,
        x = null,
        _ = {
          onError: function (e) {
            (m = !0), (v = e);
          },
        };
      function w(e, t, n, r, i, a, o, l, s) {
        (m = !1), (v = null), g.apply(_, arguments);
      }
      var k = null,
        S = null,
        M = null;
      function T(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = M(n)),
          (function (e, t, n, r, i, a, l, s, u) {
            if ((w.apply(this, arguments), m)) {
              if (!m) throw Error(o(198));
              var c = v;
              (m = !1), (v = null), y || ((y = !0), (x = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function C(e, t) {
        if (null == t) throw Error(o(30));
        return null == e
          ? t
          : Array.isArray(e)
          ? Array.isArray(t)
            ? (e.push.apply(e, t), e)
            : (e.push(t), e)
          : Array.isArray(t)
          ? [e].concat(t)
          : [e, t];
      }
      function P(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
      }
      var E = null;
      function D(e) {
        if (e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          if (Array.isArray(t))
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
              T(e, t[r], n[r]);
          else t && T(e, t, n);
          (e._dispatchListeners = null),
            (e._dispatchInstances = null),
            e.isPersistent() || e.constructor.release(e);
        }
      }
      function O(e) {
        if ((null !== e && (E = C(E, e)), (e = E), (E = null), e)) {
          if ((P(e, D), E)) throw Error(o(95));
          if (y) throw ((e = x), (y = !1), (x = null), e);
        }
      }
      var A = {
        injectEventPluginOrder: function (e) {
          if (l) throw Error(o(101));
          (l = Array.prototype.slice.call(e)), u();
        },
        injectEventPluginsByName: function (e) {
          var t,
            n = !1;
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              if (!s.hasOwnProperty(t) || s[t] !== r) {
                if (s[t]) throw Error(o(102, t));
                (s[t] = r), (n = !0);
              }
            }
          n && u();
        },
      };
      function I(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = k(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      F.hasOwnProperty("ReactCurrentDispatcher") ||
        (F.ReactCurrentDispatcher = { current: null }),
        F.hasOwnProperty("ReactCurrentBatchConfig") ||
          (F.ReactCurrentBatchConfig = { suspense: null });
      var N = /^(.*)[\\\/]/,
        L = "function" === typeof Symbol && Symbol.for,
        R = L ? Symbol.for("react.element") : 60103,
        z = L ? Symbol.for("react.portal") : 60106,
        W = L ? Symbol.for("react.fragment") : 60107,
        j = L ? Symbol.for("react.strict_mode") : 60108,
        V = L ? Symbol.for("react.profiler") : 60114,
        Y = L ? Symbol.for("react.provider") : 60109,
        U = L ? Symbol.for("react.context") : 60110,
        B = L ? Symbol.for("react.concurrent_mode") : 60111,
        H = L ? Symbol.for("react.forward_ref") : 60112,
        q = L ? Symbol.for("react.suspense") : 60113,
        G = L ? Symbol.for("react.suspense_list") : 60120,
        $ = L ? Symbol.for("react.memo") : 60115,
        K = L ? Symbol.for("react.lazy") : 60116;
      L && Symbol.for("react.fundamental"),
        L && Symbol.for("react.responder"),
        L && Symbol.for("react.scope");
      var Q = "function" === typeof Symbol && Symbol.iterator;
      function Z(e) {
        return null === e || "object" !== typeof e
          ? null
          : "function" === typeof (e = (Q && e[Q]) || e["@@iterator"])
          ? e
          : null;
      }
      function X(e) {
        if (null == e) return null;
        if ("function" === typeof e) return e.displayName || e.name || null;
        if ("string" === typeof e) return e;
        switch (e) {
          case W:
            return "Fragment";
          case z:
            return "Portal";
          case V:
            return "Profiler";
          case j:
            return "StrictMode";
          case q:
            return "Suspense";
          case G:
            return "SuspenseList";
        }
        if ("object" === typeof e)
          switch (e.$$typeof) {
            case U:
              return "Context.Consumer";
            case Y:
              return "Context.Provider";
            case H:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case $:
              return X(e.type);
            case K:
              if ((e = 1 === e._status ? e._result : null)) return X(e);
          }
        return null;
      }
      function J(e) {
        var t = "";
        do {
          e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var n = "";
              break e;
            default:
              var r = e._debugOwner,
                i = e._debugSource,
                a = X(e.type);
              (n = null),
                r && (n = X(r.type)),
                (r = a),
                (a = ""),
                i
                  ? (a =
                      " (at " +
                      i.fileName.replace(N, "") +
                      ":" +
                      i.lineNumber +
                      ")")
                  : n && (a = " (created by " + n + ")"),
                (n = "\n    in " + (r || "Unknown") + a);
          }
          (t += n), (e = e.return);
        } while (e);
        return t;
      }
      var ee = !(
          "undefined" === typeof window ||
          "undefined" === typeof window.document ||
          "undefined" === typeof window.document.createElement
        ),
        te = null,
        ne = null,
        re = null;
      function ie(e) {
        if ((e = S(e))) {
          if ("function" !== typeof te) throw Error(o(280));
          var t = k(e.stateNode);
          te(e.stateNode, e.type, t);
        }
      }
      function ae(e) {
        ne ? (re ? re.push(e) : (re = [e])) : (ne = e);
      }
      function oe() {
        if (ne) {
          var e = ne,
            t = re;
          if (((re = ne = null), ie(e), t))
            for (e = 0; e < t.length; e++) ie(t[e]);
        }
      }
      function le(e, t) {
        return e(t);
      }
      function se(e, t, n, r) {
        return e(t, n, r);
      }
      function ue() {}
      var ce = le,
        de = !1,
        fe = !1;
      function he() {
        (null === ne && null === re) || (ue(), oe());
      }
      new Map();
      var pe =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ge = Object.prototype.hasOwnProperty,
        me = {},
        ve = {};
      function ye(e, t, n, r, i, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = a);
      }
      var be = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          be[e] = new ye(e, 0, !1, e, null, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          be[t] = new ye(t, 1, !1, e[1], null, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            be[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          be[e] = new ye(e, 2, !1, e, null, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            be[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          be[e] = new ye(e, 3, !0, e, null, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          be[e] = new ye(e, 4, !1, e, null, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          be[e] = new ye(e, 6, !1, e, null, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          be[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1);
        });
      var xe = /[\-:]([a-z])/g;
      function _e(e) {
        return e[1].toUpperCase();
      }
      function we(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function ke(e, t, n, r) {
        var i = be.hasOwnProperty(t) ? be[t] : null;
        (null !== i
          ? 0 === i.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              "undefined" === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, i, r) && (n = null),
          r || null === i
            ? (function (e) {
                return (
                  !!ge.call(ve, e) ||
                  (!ge.call(me, e) &&
                    (pe.test(e) ? (ve[e] = !0) : ((me[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      function Se(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function Me(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = Se(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              "undefined" !== typeof n &&
              "function" === typeof n.get &&
              "function" === typeof n.set
            ) {
              var i = n.get,
                a = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return i.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), a.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function Te(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = Se(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function Ce(e, t) {
        var n = t.checked;
        return i({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function Pe(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = we(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function Ee(e, t) {
        null != (t = t.checked) && ke(e, "checked", t, !1);
      }
      function De(e, t) {
        Ee(e, t);
        var n = we(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? Ae(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            Ae(e, t.type, we(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function Oe(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !e.defaultChecked),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function Ae(e, t, n) {
        ("number" === t && e.ownerDocument.activeElement === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function Ie(e, t) {
        return (
          (e = i({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function Fe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
          for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== i && (e[n].selected = i),
              i && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + we(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n)
              return (
                (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
              );
            null !== t || e[i].disabled || (t = e[i]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function Ne(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return i({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function Le(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.defaultValue), null != (t = t.children))) {
            if (null != n) throw Error(o(92));
            if (Array.isArray(t)) {
              if (!(1 >= t.length)) throw Error(o(93));
              t = t[0];
            }
            n = t;
          }
          null == n && (n = "");
        }
        e._wrapperState = { initialValue: we(n) };
      }
      function Re(e, t) {
        var n = we(t.value),
          r = we(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ze(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(xe, _e);
          be[t] = new ye(t, 1, !1, e, null, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(xe, _e);
            be[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(xe, _e);
          be[t] = new ye(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          be[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1);
        }),
        (be.xlinkHref = new ye(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          be[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0);
        });
      var We = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg",
      };
      function je(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function Ve(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? je(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var Ye,
        Ue = (function (e) {
          return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                MSApp.execUnsafeLocalFunction(function () {
                  return e(t, n);
                });
              }
            : e;
        })(function (e, t) {
          if (e.namespaceURI !== We.svg || "innerHTML" in e) e.innerHTML = t;
          else {
            for (
              (Ye = Ye || document.createElement("div")).innerHTML =
                "<svg>" + t.valueOf().toString() + "</svg>",
                t = Ye.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
          }
        });
      function Be(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      function He(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var qe = {
          animationend: He("Animation", "AnimationEnd"),
          animationiteration: He("Animation", "AnimationIteration"),
          animationstart: He("Animation", "AnimationStart"),
          transitionend: He("Transition", "TransitionEnd"),
        },
        Ge = {},
        $e = {};
      function Ke(e) {
        if (Ge[e]) return Ge[e];
        if (!qe[e]) return e;
        var t,
          n = qe[e];
        for (t in n) if (n.hasOwnProperty(t) && t in $e) return (Ge[e] = n[t]);
        return e;
      }
      ee &&
        (($e = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete qe.animationend.animation,
          delete qe.animationiteration.animation,
          delete qe.animationstart.animation),
        "TransitionEvent" in window || delete qe.transitionend.transition);
      var Qe = Ke("animationend"),
        Ze = Ke("animationiteration"),
        Xe = Ke("animationstart"),
        Je = Ke("transitionend"),
        et =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          );
      function tt(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 !== (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function nt(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function rt(e) {
        if (tt(e) !== e) throw Error(o(188));
      }
      function it(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = tt(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var i = n.return;
              if (null === i) break;
              var a = i.alternate;
              if (null === a) {
                if (null !== (r = i.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (i.child === a.child) {
                for (a = i.child; a; ) {
                  if (a === n) return rt(i), e;
                  if (a === r) return rt(i), t;
                  a = a.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = i), (r = a);
              else {
                for (var l = !1, s = i.child; s; ) {
                  if (s === n) {
                    (l = !0), (n = i), (r = a);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = i), (n = a);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      var at,
        ot,
        lt,
        st = !1,
        ut = [],
        ct = null,
        dt = null,
        ft = null,
        ht = new Map(),
        pt = new Map(),
        gt = [],
        mt =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
            " "
          ),
        vt =
          "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
            " "
          );
      function yt(e, t, n, r) {
        return {
          blockedOn: e,
          topLevelType: t,
          eventSystemFlags: 32 | n,
          nativeEvent: r,
        };
      }
      function bt(e, t) {
        switch (e) {
          case "focus":
          case "blur":
            ct = null;
            break;
          case "dragenter":
          case "dragleave":
            dt = null;
            break;
          case "mouseover":
          case "mouseout":
            ft = null;
            break;
          case "pointerover":
          case "pointerout":
            ht.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            pt.delete(t.pointerId);
        }
      }
      function xt(e, t, n, r, i) {
        return null === e || e.nativeEvent !== i
          ? ((e = yt(t, n, r, i)),
            null !== t && null !== (t = pr(t)) && ot(t),
            e)
          : ((e.eventSystemFlags |= r), e);
      }
      function _t(e) {
        var t = hr(e.target);
        if (null !== t) {
          var n = tt(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = nt(n)))
                return (
                  (e.blockedOn = t),
                  void a.unstable_runWithPriority(e.priority, function () {
                    lt(n);
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function wt(e) {
        if (null !== e.blockedOn) return !1;
        var t = An(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        if (null !== t) {
          var n = pr(t);
          return null !== n && ot(n), (e.blockedOn = t), !1;
        }
        return !0;
      }
      function kt(e, t, n) {
        wt(e) && n.delete(t);
      }
      function St() {
        for (st = !1; 0 < ut.length; ) {
          var e = ut[0];
          if (null !== e.blockedOn) {
            null !== (e = pr(e.blockedOn)) && at(e);
            break;
          }
          var t = An(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
          null !== t ? (e.blockedOn = t) : ut.shift();
        }
        null !== ct && wt(ct) && (ct = null),
          null !== dt && wt(dt) && (dt = null),
          null !== ft && wt(ft) && (ft = null),
          ht.forEach(kt),
          pt.forEach(kt);
      }
      function Mt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          st ||
            ((st = !0),
            a.unstable_scheduleCallback(a.unstable_NormalPriority, St)));
      }
      function Tt(e) {
        function t(t) {
          return Mt(t, e);
        }
        if (0 < ut.length) {
          Mt(ut[0], e);
          for (var n = 1; n < ut.length; n++) {
            var r = ut[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== ct && Mt(ct, e),
            null !== dt && Mt(dt, e),
            null !== ft && Mt(ft, e),
            ht.forEach(t),
            pt.forEach(t),
            n = 0;
          n < gt.length;
          n++
        )
          (r = gt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < gt.length && null === (n = gt[0]).blockedOn; )
          _t(n), null === n.blockedOn && gt.shift();
      }
      function Ct(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      function Pt(e) {
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Et(e, t, n) {
        (t = I(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
          ((n._dispatchListeners = C(n._dispatchListeners, t)),
          (n._dispatchInstances = C(n._dispatchInstances, e)));
      }
      function Dt(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
          for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Pt(t));
          for (t = n.length; 0 < t--; ) Et(n[t], "captured", e);
          for (t = 0; t < n.length; t++) Et(n[t], "bubbled", e);
        }
      }
      function Ot(e, t, n) {
        e &&
          n &&
          n.dispatchConfig.registrationName &&
          (t = I(e, n.dispatchConfig.registrationName)) &&
          ((n._dispatchListeners = C(n._dispatchListeners, t)),
          (n._dispatchInstances = C(n._dispatchInstances, e)));
      }
      function At(e) {
        e && e.dispatchConfig.registrationName && Ot(e._targetInst, null, e);
      }
      function It(e) {
        P(e, Dt);
      }
      function Ft() {
        return !0;
      }
      function Nt() {
        return !1;
      }
      function Lt(e, t, n, r) {
        for (var i in ((this.dispatchConfig = e),
        (this._targetInst = t),
        (this.nativeEvent = n),
        (e = this.constructor.Interface)))
          e.hasOwnProperty(i) &&
            ((t = e[i])
              ? (this[i] = t(n))
              : "target" === i
              ? (this.target = r)
              : (this[i] = n[i]));
        return (
          (this.isDefaultPrevented = (
            null != n.defaultPrevented
              ? n.defaultPrevented
              : !1 === n.returnValue
          )
            ? Ft
            : Nt),
          (this.isPropagationStopped = Nt),
          this
        );
      }
      function Rt(e, t, n, r) {
        if (this.eventPool.length) {
          var i = this.eventPool.pop();
          return this.call(i, e, t, n, r), i;
        }
        return new this(e, t, n, r);
      }
      function zt(e) {
        if (!(e instanceof this)) throw Error(o(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
      }
      function Wt(e) {
        (e.eventPool = []), (e.getPooled = Rt), (e.release = zt);
      }
      i(Lt.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Ft));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Ft));
        },
        persist: function () {
          this.isPersistent = Ft;
        },
        isPersistent: Nt,
        destructor: function () {
          var e,
            t = this.constructor.Interface;
          for (e in t) this[e] = null;
          (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
            (this.isPropagationStopped = this.isDefaultPrevented = Nt),
            (this._dispatchInstances = this._dispatchListeners = null);
        },
      }),
        (Lt.Interface = {
          type: null,
          target: null,
          currentTarget: function () {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null,
        }),
        (Lt.extend = function (e) {
          function t() {}
          function n() {
            return r.apply(this, arguments);
          }
          var r = this;
          t.prototype = r.prototype;
          var a = new t();
          return (
            i(a, n.prototype),
            (n.prototype = a),
            (n.prototype.constructor = n),
            (n.Interface = i({}, r.Interface, e)),
            (n.extend = r.extend),
            Wt(n),
            n
          );
        }),
        Wt(Lt);
      var jt = Lt.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        Vt = Lt.extend({
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        Yt = Lt.extend({ view: null, detail: null }),
        Ut = Yt.extend({ relatedTarget: null });
      function Bt(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      var Ht = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        qt = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        Gt = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function $t(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Gt[e]) && !!t[e];
      }
      function Kt() {
        return $t;
      }
      for (
        var Qt = Yt.extend({
            key: function (e) {
              if (e.key) {
                var t = Ht[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = Bt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? qt[e.keyCode] || "Unidentified"
                : "";
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Kt,
            charCode: function (e) {
              return "keypress" === e.type ? Bt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? Bt(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Zt = 0,
          Xt = 0,
          Jt = !1,
          en = !1,
          tn = Yt.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Kt,
            button: null,
            buttons: null,
            relatedTarget: function (e) {
              return (
                e.relatedTarget ||
                (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
              );
            },
            movementX: function (e) {
              if (("movementX" in e)) return e.movementX;
              var t = Zt;
              return (
                (Zt = e.screenX),
                Jt
                  ? "mousemove" === e.type
                    ? e.screenX - t
                    : 0
                  : ((Jt = !0), 0)
              );
            },
            movementY: function (e) {
              if (("movementY" in e)) return e.movementY;
              var t = Xt;
              return (
                (Xt = e.screenY),
                en
                  ? "mousemove" === e.type
                    ? e.screenY - t
                    : 0
                  : ((en = !0), 0)
              );
            },
          }),
          nn = tn.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null,
          }),
          rn = tn.extend({ dataTransfer: null }),
          an = Yt.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Kt,
          }),
          on = Lt.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null,
          }),
          ln = tn.extend({
            deltaX: function (e) {
              return ("deltaX" in e)
                ? e.deltaX
                : ("wheelDeltaX" in e)
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return ("deltaY" in e)
                ? e.deltaY
                : ("wheelDeltaY" in e)
                ? -e.wheelDeltaY
                : ("wheelDelta" in e)
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: null,
            deltaMode: null,
          }),
          sn = [
            ["blur", "blur", 0],
            ["cancel", "cancel", 0],
            ["click", "click", 0],
            ["close", "close", 0],
            ["contextmenu", "contextMenu", 0],
            ["copy", "copy", 0],
            ["cut", "cut", 0],
            ["auxclick", "auxClick", 0],
            ["dblclick", "doubleClick", 0],
            ["dragend", "dragEnd", 0],
            ["dragstart", "dragStart", 0],
            ["drop", "drop", 0],
            ["focus", "focus", 0],
            ["input", "input", 0],
            ["invalid", "invalid", 0],
            ["keydown", "keyDown", 0],
            ["keypress", "keyPress", 0],
            ["keyup", "keyUp", 0],
            ["mousedown", "mouseDown", 0],
            ["mouseup", "mouseUp", 0],
            ["paste", "paste", 0],
            ["pause", "pause", 0],
            ["play", "play", 0],
            ["pointercancel", "pointerCancel", 0],
            ["pointerdown", "pointerDown", 0],
            ["pointerup", "pointerUp", 0],
            ["ratechange", "rateChange", 0],
            ["reset", "reset", 0],
            ["seeked", "seeked", 0],
            ["submit", "submit", 0],
            ["touchcancel", "touchCancel", 0],
            ["touchend", "touchEnd", 0],
            ["touchstart", "touchStart", 0],
            ["volumechange", "volumeChange", 0],
            ["drag", "drag", 1],
            ["dragenter", "dragEnter", 1],
            ["dragexit", "dragExit", 1],
            ["dragleave", "dragLeave", 1],
            ["dragover", "dragOver", 1],
            ["mousemove", "mouseMove", 1],
            ["mouseout", "mouseOut", 1],
            ["mouseover", "mouseOver", 1],
            ["pointermove", "pointerMove", 1],
            ["pointerout", "pointerOut", 1],
            ["pointerover", "pointerOver", 1],
            ["scroll", "scroll", 1],
            ["toggle", "toggle", 1],
            ["touchmove", "touchMove", 1],
            ["wheel", "wheel", 1],
            ["abort", "abort", 2],
            [Qe, "animationEnd", 2],
            [Ze, "animationIteration", 2],
            [Xe, "animationStart", 2],
            ["canplay", "canPlay", 2],
            ["canplaythrough", "canPlayThrough", 2],
            ["durationchange", "durationChange", 2],
            ["emptied", "emptied", 2],
            ["encrypted", "encrypted", 2],
            ["ended", "ended", 2],
            ["error", "error", 2],
            ["gotpointercapture", "gotPointerCapture", 2],
            ["load", "load", 2],
            ["loadeddata", "loadedData", 2],
            ["loadedmetadata", "loadedMetadata", 2],
            ["loadstart", "loadStart", 2],
            ["lostpointercapture", "lostPointerCapture", 2],
            ["playing", "playing", 2],
            ["progress", "progress", 2],
            ["seeking", "seeking", 2],
            ["stalled", "stalled", 2],
            ["suspend", "suspend", 2],
            ["timeupdate", "timeUpdate", 2],
            [Je, "transitionEnd", 2],
            ["waiting", "waiting", 2],
          ],
          un = {},
          cn = {},
          dn = 0;
        dn < sn.length;
        dn++
      ) {
        var fn = sn[dn],
          hn = fn[0],
          pn = fn[1],
          gn = fn[2],
          mn = "on" + (pn[0].toUpperCase() + pn.slice(1)),
          vn = {
            phasedRegistrationNames: { bubbled: mn, captured: mn + "Capture" },
            dependencies: [hn],
            eventPriority: gn,
          };
        (un[pn] = vn), (cn[hn] = vn);
      }
      var yn = {
          eventTypes: un,
          getEventPriority: function (e) {
            return void 0 !== (e = cn[e]) ? e.eventPriority : 2;
          },
          extractEvents: function (e, t, n, r) {
            var i = cn[e];
            if (!i) return null;
            switch (e) {
              case "keypress":
                if (0 === Bt(n)) return null;
              case "keydown":
              case "keyup":
                e = Qt;
                break;
              case "blur":
              case "focus":
                e = Ut;
                break;
              case "click":
                if (2 === n.button) return null;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                e = tn;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                e = rn;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                e = an;
                break;
              case Qe:
              case Ze:
              case Xe:
                e = jt;
                break;
              case Je:
                e = on;
                break;
              case "scroll":
                e = Yt;
                break;
              case "wheel":
                e = ln;
                break;
              case "copy":
              case "cut":
              case "paste":
                e = Vt;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                e = nn;
                break;
              default:
                e = Lt;
            }
            return It((t = e.getPooled(i, t, n, r))), t;
          },
        },
        bn = a.unstable_UserBlockingPriority,
        xn = a.unstable_runWithPriority,
        _n = yn.getEventPriority,
        wn = 10,
        kn = [];
      function Sn(e) {
        var t = e.targetInst,
          n = t;
        do {
          if (!n) {
            e.ancestors.push(n);
            break;
          }
          var r = n;
          if (3 === r.tag) r = r.stateNode.containerInfo;
          else {
            for (; r.return; ) r = r.return;
            r = 3 !== r.tag ? null : r.stateNode.containerInfo;
          }
          if (!r) break;
          (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = hr(r));
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
          t = e.ancestors[n];
          var i = Ct(e.nativeEvent);
          r = e.topLevelType;
          for (
            var a = e.nativeEvent, o = e.eventSystemFlags, l = null, s = 0;
            s < d.length;
            s++
          ) {
            var u = d[s];
            u && (u = u.extractEvents(r, t, a, i, o)) && (l = C(l, u));
          }
          O(l);
        }
      }
      var Mn = !0;
      function Tn(e, t) {
        Cn(t, e, !1);
      }
      function Cn(e, t, n) {
        switch (_n(t)) {
          case 0:
            var r = Pn.bind(null, t, 1);
            break;
          case 1:
            r = En.bind(null, t, 1);
            break;
          default:
            r = On.bind(null, t, 1);
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
      }
      function Pn(e, t, n) {
        de || ue();
        var r = On,
          i = de;
        de = !0;
        try {
          se(r, e, t, n);
        } finally {
          (de = i) || he();
        }
      }
      function En(e, t, n) {
        xn(bn, On.bind(null, e, t, n));
      }
      function Dn(e, t, n, r) {
        if (kn.length) {
          var i = kn.pop();
          (i.topLevelType = e),
            (i.eventSystemFlags = t),
            (i.nativeEvent = n),
            (i.targetInst = r),
            (e = i);
        } else
          e = {
            topLevelType: e,
            eventSystemFlags: t,
            nativeEvent: n,
            targetInst: r,
            ancestors: [],
          };
        try {
          if (((t = Sn), (n = e), fe)) t(n, void 0);
          else {
            fe = !0;
            try {
              ce(t, n, void 0);
            } finally {
              (fe = !1), he();
            }
          }
        } finally {
          (e.topLevelType = null),
            (e.nativeEvent = null),
            (e.targetInst = null),
            (e.ancestors.length = 0),
            kn.length < wn && kn.push(e);
        }
      }
      function On(e, t, n) {
        if (Mn)
          if (0 < ut.length && -1 < mt.indexOf(e))
            (e = yt(null, e, t, n)), ut.push(e);
          else {
            var r = An(e, t, n);
            null === r
              ? bt(e, n)
              : -1 < mt.indexOf(e)
              ? ((e = yt(r, e, t, n)), ut.push(e))
              : (function (e, t, n, r) {
                  switch (t) {
                    case "focus":
                      return (ct = xt(ct, e, t, n, r)), !0;
                    case "dragenter":
                      return (dt = xt(dt, e, t, n, r)), !0;
                    case "mouseover":
                      return (ft = xt(ft, e, t, n, r)), !0;
                    case "pointerover":
                      var i = r.pointerId;
                      return ht.set(i, xt(ht.get(i) || null, e, t, n, r)), !0;
                    case "gotpointercapture":
                      return (
                        (i = r.pointerId),
                        pt.set(i, xt(pt.get(i) || null, e, t, n, r)),
                        !0
                      );
                  }
                  return !1;
                })(r, e, t, n) || (bt(e, n), Dn(e, t, n, null));
          }
      }
      function An(e, t, n) {
        var r = Ct(n);
        if (null !== (r = hr(r))) {
          var i = tt(r);
          if (null === i) r = null;
          else {
            var a = i.tag;
            if (13 === a) {
              if (null !== (r = nt(i))) return r;
              r = null;
            } else if (3 === a) {
              if (i.stateNode.hydrate)
                return 3 === i.tag ? i.stateNode.containerInfo : null;
              r = null;
            } else i !== r && (r = null);
          }
        }
        return Dn(e, t, n, r), null;
      }
      function In(e) {
        if (!ee) return !1;
        var t = (e = "on" + e) in document;
        return (
          t ||
            ((t = document.createElement("div")).setAttribute(e, "return;"),
            (t = "function" === typeof t[e])),
          t
        );
      }
      var Fn = new ("function" === typeof WeakMap ? WeakMap : Map)();
      function Nn(e) {
        var t = Fn.get(e);
        return void 0 === t && ((t = new Set()), Fn.set(e, t)), t;
      }
      function Ln(e, t, n) {
        if (!n.has(e)) {
          switch (e) {
            case "scroll":
              Cn(t, "scroll", !0);
              break;
            case "focus":
            case "blur":
              Cn(t, "focus", !0),
                Cn(t, "blur", !0),
                n.add("blur"),
                n.add("focus");
              break;
            case "cancel":
            case "close":
              In(e) && Cn(t, e, !0);
              break;
            case "invalid":
            case "submit":
            case "reset":
              break;
            default:
              -1 === et.indexOf(e) && Tn(e, t);
          }
          n.add(e);
        }
      }
      var Rn = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        zn = ["Webkit", "ms", "Moz", "O"];
      function Wn(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t
          ? ""
          : n ||
            "number" !== typeof t ||
            0 === t ||
            (Rn.hasOwnProperty(e) && Rn[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function jn(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              i = Wn(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, i) : (e[n] = i);
          }
      }
      Object.keys(Rn).forEach(function (e) {
        zn.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
        });
      });
      var Vn = i(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function Yn(e, t) {
        if (t) {
          if (
            Vn[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(o(137, e, ""));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if (
              !(
                "object" === typeof t.dangerouslySetInnerHTML &&
                "__html" in t.dangerouslySetInnerHTML
              )
            )
              throw Error(o(61));
          }
          if (null != t.style && "object" !== typeof t.style)
            throw Error(o(62, ""));
        }
      }
      function Un(e, t) {
        if (-1 === e.indexOf("-")) return "string" === typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Bn(e, t) {
        var n = Nn(
          (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
        );
        t = p[t];
        for (var r = 0; r < t.length; r++) Ln(t[r], e, n);
      }
      function Hn() {}
      function qn(e) {
        if (
          "undefined" ===
          typeof (e =
            e || ("undefined" !== typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (b) {
          return e.body;
        }
      }
      function Gn(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function $n(e, t) {
        var n,
          r = Gn(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = Gn(r);
        }
      }
      function Kn() {
        for (var e = window, t = qn(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = qn((e = t.contentWindow).document);
        }
        return t;
      }
      function Qn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var Zn = "$",
        Xn = "/$",
        Jn = "$?",
        er = "$!",
        tr = null,
        nr = null;
      function rr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function ir(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" === typeof t.children ||
          "number" === typeof t.children ||
          ("object" === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var ar = "function" === typeof setTimeout ? setTimeout : void 0,
        or = "function" === typeof clearTimeout ? clearTimeout : void 0;
      function lr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function sr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if (n === Zn || n === er || n === Jn) {
              if (0 === t) return e;
              t--;
            } else n === Xn && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var ur = Math.random().toString(36).slice(2),
        cr = "__reactInternalInstance$" + ur,
        dr = "__reactEventHandlers$" + ur,
        fr = "__reactContainere$" + ur;
      function hr(e) {
        var t = e[cr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[fr] || n[cr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = sr(e); null !== e; ) {
                if ((n = e[cr])) return n;
                e = sr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function pr(e) {
        return !(e = e[cr] || e[fr]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function gr(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function mr(e) {
        return e[dr] || null;
      }
      var vr = null,
        yr = null,
        br = null;
      function xr() {
        if (br) return br;
        var e,
          t,
          n = yr,
          r = n.length,
          i = "value" in vr ? vr.value : vr.textContent,
          a = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
        return (br = i.slice(e, 1 < t ? 1 - t : void 0));
      }
      var _r = Lt.extend({ data: null }),
        wr = Lt.extend({ data: null }),
        kr = [9, 13, 27, 32],
        Sr = ee && "CompositionEvent" in window,
        Mr = null;
      ee && "documentMode" in document && (Mr = document.documentMode);
      var Tr = ee && "TextEvent" in window && !Mr,
        Cr = ee && (!Sr || (Mr && 8 < Mr && 11 >= Mr)),
        Pr = String.fromCharCode(32),
        Er = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: "onBeforeInput",
              captured: "onBeforeInputCapture",
            },
            dependencies: ["compositionend", "keypress", "textInput", "paste"],
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: "onCompositionEnd",
              captured: "onCompositionEndCapture",
            },
            dependencies:
              "blur compositionend keydown keypress keyup mousedown".split(" "),
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: "onCompositionStart",
              captured: "onCompositionStartCapture",
            },
            dependencies:
              "blur compositionstart keydown keypress keyup mousedown".split(
                " "
              ),
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: "onCompositionUpdate",
              captured: "onCompositionUpdateCapture",
            },
            dependencies:
              "blur compositionupdate keydown keypress keyup mousedown".split(
                " "
              ),
          },
        },
        Dr = !1;
      function Or(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== kr.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "blur":
            return !0;
          default:
            return !1;
        }
      }
      function Ar(e) {
        return "object" === typeof (e = e.detail) && "data" in e
          ? e.data
          : null;
      }
      var Ir = !1;
      var Fr = {
          eventTypes: Er,
          extractEvents: function (e, t, n, r) {
            var i;
            if (Sr)
              e: {
                switch (e) {
                  case "compositionstart":
                    var a = Er.compositionStart;
                    break e;
                  case "compositionend":
                    a = Er.compositionEnd;
                    break e;
                  case "compositionupdate":
                    a = Er.compositionUpdate;
                    break e;
                }
                a = void 0;
              }
            else
              Ir
                ? Or(e, n) && (a = Er.compositionEnd)
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (a = Er.compositionStart);
            return (
              a
                ? (Cr &&
                    "ko" !== n.locale &&
                    (Ir || a !== Er.compositionStart
                      ? a === Er.compositionEnd && Ir && (i = xr())
                      : ((yr = "value" in (vr = r) ? vr.value : vr.textContent),
                        (Ir = !0))),
                  (a = _r.getPooled(a, t, n, r)),
                  i ? (a.data = i) : null !== (i = Ar(n)) && (a.data = i),
                  It(a),
                  (i = a))
                : (i = null),
              (e = Tr
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return Ar(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((Dr = !0), Pr);
                      case "textInput":
                        return (e = t.data) === Pr && Dr ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Ir)
                      return "compositionend" === e || (!Sr && Or(e, t))
                        ? ((e = xr()), (br = yr = vr = null), (Ir = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return Cr && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n))
                ? (((t = wr.getPooled(Er.beforeInput, t, n, r)).data = e),
                  It(t))
                : (t = null),
              null === i ? t : null === t ? i : [i, t]
            );
          },
        },
        Nr = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
      function Lr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Nr[e.type] : "textarea" === t;
      }
      var Rr = {
        change: {
          phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture",
          },
          dependencies:
            "blur change click focus input keydown keyup selectionchange".split(
              " "
            ),
        },
      };
      function zr(e, t, n) {
        return (
          ((e = Lt.getPooled(Rr.change, e, t, n)).type = "change"),
          ae(n),
          It(e),
          e
        );
      }
      var Wr = null,
        jr = null;
      function Vr(e) {
        O(e);
      }
      function Yr(e) {
        if (Te(gr(e))) return e;
      }
      function Ur(e, t) {
        if ("change" === e) return t;
      }
      var Br = !1;
      function Hr() {
        Wr && (Wr.detachEvent("onpropertychange", qr), (jr = Wr = null));
      }
      function qr(e) {
        if ("value" === e.propertyName && Yr(jr))
          if (((e = zr(jr, e, Ct(e))), de)) O(e);
          else {
            de = !0;
            try {
              le(Vr, e);
            } finally {
              (de = !1), he();
            }
          }
      }
      function Gr(e, t, n) {
        "focus" === e
          ? (Hr(), (jr = n), (Wr = t).attachEvent("onpropertychange", qr))
          : "blur" === e && Hr();
      }
      function $r(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Yr(jr);
      }
      function Kr(e, t) {
        if ("click" === e) return Yr(t);
      }
      function Qr(e, t) {
        if ("input" === e || "change" === e) return Yr(t);
      }
      ee &&
        (Br =
          In("input") && (!document.documentMode || 9 < document.documentMode));
      var Zr,
        Xr = {
          eventTypes: Rr,
          _isInputEventSupported: Br,
          extractEvents: function (e, t, n, r) {
            var i = t ? gr(t) : window,
              a = i.nodeName && i.nodeName.toLowerCase();
            if ("select" === a || ("input" === a && "file" === i.type))
              var o = Ur;
            else if (Lr(i))
              if (Br) o = Qr;
              else {
                o = $r;
                var l = Gr;
              }
            else
              (a = i.nodeName) &&
                "input" === a.toLowerCase() &&
                ("checkbox" === i.type || "radio" === i.type) &&
                (o = Kr);
            if (o && (o = o(e, t))) return zr(o, n, r);
            l && l(e, i, t),
              "blur" === e &&
                (e = i._wrapperState) &&
                e.controlled &&
                "number" === i.type &&
                Ae(i, "number", i.value);
          },
        },
        Jr = {
          mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["mouseout", "mouseover"],
          },
          mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["mouseout", "mouseover"],
          },
          pointerEnter: {
            registrationName: "onPointerEnter",
            dependencies: ["pointerout", "pointerover"],
          },
          pointerLeave: {
            registrationName: "onPointerLeave",
            dependencies: ["pointerout", "pointerover"],
          },
        },
        ei = {
          eventTypes: Jr,
          extractEvents: function (e, t, n, r, i) {
            var a = "mouseover" === e || "pointerover" === e,
              o = "mouseout" === e || "pointerout" === e;
            if (
              (a && 0 === (32 & i) && (n.relatedTarget || n.fromElement)) ||
              (!o && !a)
            )
              return null;
            if (
              ((i =
                r.window === r
                  ? r
                  : (i = r.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              o
                ? ((o = t),
                  null !==
                    (t = (t = n.relatedTarget || n.toElement) ? hr(t) : null) &&
                    (t !== (a = tt(t)) || (5 !== t.tag && 6 !== t.tag)) &&
                    (t = null))
                : (o = null),
              o === t)
            )
              return null;
            if ("mouseout" === e || "mouseover" === e)
              var l = tn,
                s = Jr.mouseLeave,
                u = Jr.mouseEnter,
                c = "mouse";
            else
              ("pointerout" !== e && "pointerover" !== e) ||
                ((l = nn),
                (s = Jr.pointerLeave),
                (u = Jr.pointerEnter),
                (c = "pointer"));
            if (
              ((e = null == o ? i : gr(o)),
              (i = null == t ? i : gr(t)),
              ((s = l.getPooled(s, o, n, r)).type = c + "leave"),
              (s.target = e),
              (s.relatedTarget = i),
              ((r = l.getPooled(u, t, n, r)).type = c + "enter"),
              (r.target = i),
              (r.relatedTarget = e),
              (c = t),
              (l = o) && c)
            )
              e: {
                for (e = c, o = 0, t = u = l; t; t = Pt(t)) o++;
                for (t = 0, i = e; i; i = Pt(i)) t++;
                for (; 0 < o - t; ) (u = Pt(u)), o--;
                for (; 0 < t - o; ) (e = Pt(e)), t--;
                for (; o--; ) {
                  if (u === e || u === e.alternate) break e;
                  (u = Pt(u)), (e = Pt(e));
                }
                u = null;
              }
            else u = null;
            for (
              e = u, u = [];
              l && l !== e && (null === (o = l.alternate) || o !== e);

            )
              u.push(l), (l = Pt(l));
            for (
              l = [];
              c && c !== e && (null === (o = c.alternate) || o !== e);

            )
              l.push(c), (c = Pt(c));
            for (c = 0; c < u.length; c++) Ot(u[c], "bubbled", s);
            for (c = l.length; 0 < c--; ) Ot(l[c], "captured", r);
            return n === Zr ? ((Zr = null), [s]) : ((Zr = n), [s, r]);
          },
        };
      var ti =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        ni = Object.prototype.hasOwnProperty;
      function ri(e, t) {
        if (ti(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!ni.call(t, n[r]) || !ti(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      var ii = ee && "documentMode" in document && 11 >= document.documentMode,
        ai = {
          select: {
            phasedRegistrationNames: {
              bubbled: "onSelect",
              captured: "onSelectCapture",
            },
            dependencies:
              "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
                " "
              ),
          },
        },
        oi = null,
        li = null,
        si = null,
        ui = !1;
      function ci(e, t) {
        var n =
          t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return ui || null == oi || oi !== qn(n)
          ? null
          : ("selectionStart" in (n = oi) && Qn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
                }),
            si && ri(si, n)
              ? null
              : ((si = n),
                ((e = Lt.getPooled(ai.select, li, e, t)).type = "select"),
                (e.target = oi),
                It(e),
                e));
      }
      var di = {
        eventTypes: ai,
        extractEvents: function (e, t, n, r) {
          var i,
            a =
              r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument;
          if (!(i = !a)) {
            e: {
              (a = Nn(a)), (i = p.onSelect);
              for (var o = 0; o < i.length; o++)
                if (!a.has(i[o])) {
                  a = !1;
                  break e;
                }
              a = !0;
            }
            i = !a;
          }
          if (i) return null;
          switch (((a = t ? gr(t) : window), e)) {
            case "focus":
              (Lr(a) || "true" === a.contentEditable) &&
                ((oi = a), (li = t), (si = null));
              break;
            case "blur":
              si = li = oi = null;
              break;
            case "mousedown":
              ui = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              return (ui = !1), ci(n, r);
            case "selectionchange":
              if (ii) break;
            case "keydown":
            case "keyup":
              return ci(n, r);
          }
          return null;
        },
      };
      A.injectEventPluginOrder(
        "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
          " "
        )
      ),
        (k = mr),
        (S = pr),
        (M = gr),
        A.injectEventPluginsByName({
          SimpleEventPlugin: yn,
          EnterLeaveEventPlugin: ei,
          ChangeEventPlugin: Xr,
          SelectEventPlugin: di,
          BeforeInputEventPlugin: Fr,
        }),
        new Set();
      var fi = [],
        hi = -1;
      function pi(e) {
        0 > hi || ((e.current = fi[hi]), (fi[hi] = null), hi--);
      }
      function gi(e, t) {
        (fi[++hi] = e.current), (e.current = t);
      }
      var mi = {},
        vi = { current: mi },
        yi = { current: !1 },
        bi = mi;
      function xi(e, t) {
        var n = e.type.contextTypes;
        if (!n) return mi;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var i,
          a = {};
        for (i in n) a[i] = t[i];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          a
        );
      }
      function _i(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function wi(e) {
        pi(yi), pi(vi);
      }
      function ki(e) {
        pi(yi), pi(vi);
      }
      function Si(e, t, n) {
        if (vi.current !== mi) throw Error(o(168));
        gi(vi, t), gi(yi, n);
      }
      function Mi(e, t, n) {
        var r = e.stateNode;
        if (
          ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
        )
          return n;
        for (var a in (r = r.getChildContext()))
          if (!(a in e)) throw Error(o(108, X(t) || "Unknown", a));
        return i({}, n, {}, r);
      }
      function Ti(e) {
        var t = e.stateNode;
        return (
          (t = (t && t.__reactInternalMemoizedMergedChildContext) || mi),
          (bi = vi.current),
          gi(vi, t),
          gi(yi, yi.current),
          !0
        );
      }
      function Ci(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((t = Mi(e, t, bi)),
            (r.__reactInternalMemoizedMergedChildContext = t),
            pi(yi),
            pi(vi),
            gi(vi, t))
          : pi(yi),
          gi(yi, n);
      }
      var Pi = a.unstable_runWithPriority,
        Ei = a.unstable_scheduleCallback,
        Di = a.unstable_cancelCallback,
        Oi = a.unstable_shouldYield,
        Ai = a.unstable_requestPaint,
        Ii = a.unstable_now,
        Fi = a.unstable_getCurrentPriorityLevel,
        Ni = a.unstable_ImmediatePriority,
        Li = a.unstable_UserBlockingPriority,
        Ri = a.unstable_NormalPriority,
        zi = a.unstable_LowPriority,
        Wi = a.unstable_IdlePriority,
        ji = {},
        Vi = void 0 !== Ai ? Ai : function () {},
        Yi = null,
        Ui = null,
        Bi = !1,
        Hi = Ii(),
        qi =
          1e4 > Hi
            ? Ii
            : function () {
                return Ii() - Hi;
              };
      function Gi() {
        switch (Fi()) {
          case Ni:
            return 99;
          case Li:
            return 98;
          case Ri:
            return 97;
          case zi:
            return 96;
          case Wi:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function $i(e) {
        switch (e) {
          case 99:
            return Ni;
          case 98:
            return Li;
          case 97:
            return Ri;
          case 96:
            return zi;
          case 95:
            return Wi;
          default:
            throw Error(o(332));
        }
      }
      function Ki(e, t) {
        return (e = $i(e)), Pi(e, t);
      }
      function Qi(e, t, n) {
        return (e = $i(e)), Ei(e, t, n);
      }
      function Zi(e) {
        return null === Yi ? ((Yi = [e]), (Ui = Ei(Ni, Ji))) : Yi.push(e), ji;
      }
      function Xi() {
        if (null !== Ui) {
          var e = Ui;
          (Ui = null), Di(e);
        }
        Ji();
      }
      function Ji() {
        if (!Bi && null !== Yi) {
          Bi = !0;
          var e = 0;
          try {
            var t = Yi;
            Ki(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Yi = null);
          } catch (n) {
            throw (null !== Yi && (Yi = Yi.slice(e + 1)), Ei(Ni, Xi), n);
          } finally {
            Bi = !1;
          }
        }
      }
      var ea = 3;
      function ta(e, t, n) {
        return (
          1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
        );
      }
      function na(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = i({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      var ra = { current: null },
        ia = null,
        aa = null,
        oa = null;
      function la() {
        oa = aa = ia = null;
      }
      function sa(e, t) {
        var n = e.type._context;
        gi(ra, n._currentValue), (n._currentValue = t);
      }
      function ua(e) {
        var t = ra.current;
        pi(ra), (e.type._context._currentValue = t);
      }
      function ca(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if (e.childExpirationTime < t)
            (e.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t);
          else {
            if (!(null !== n && n.childExpirationTime < t)) break;
            n.childExpirationTime = t;
          }
          e = e.return;
        }
      }
      function da(e, t) {
        (ia = e),
          (oa = aa = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (e.expirationTime >= t && (qo = !0), (e.firstContext = null));
      }
      function fa(e, t) {
        if (oa !== e && !1 !== t && 0 !== t)
          if (
            (("number" === typeof t && 1073741823 !== t) ||
              ((oa = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === aa)
          ) {
            if (null === ia) throw Error(o(308));
            (aa = t),
              (ia.dependencies = {
                expirationTime: 0,
                firstContext: t,
                responders: null,
              });
          } else aa = aa.next = t;
        return e._currentValue;
      }
      var ha = !1;
      function pa(e) {
        return {
          baseState: e,
          firstUpdate: null,
          lastUpdate: null,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function ga(e) {
        return {
          baseState: e.baseState,
          firstUpdate: e.firstUpdate,
          lastUpdate: e.lastUpdate,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function ma(e, t) {
        return {
          expirationTime: e,
          suspenseConfig: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
          nextEffect: null,
        };
      }
      function va(e, t) {
        null === e.lastUpdate
          ? (e.firstUpdate = e.lastUpdate = t)
          : ((e.lastUpdate.next = t), (e.lastUpdate = t));
      }
      function ya(e, t) {
        var n = e.alternate;
        if (null === n) {
          var r = e.updateQueue,
            i = null;
          null === r && (r = e.updateQueue = pa(e.memoizedState));
        } else
          (r = e.updateQueue),
            (i = n.updateQueue),
            null === r
              ? null === i
                ? ((r = e.updateQueue = pa(e.memoizedState)),
                  (i = n.updateQueue = pa(n.memoizedState)))
                : (r = e.updateQueue = ga(i))
              : null === i && (i = n.updateQueue = ga(r));
        null === i || r === i
          ? va(r, t)
          : null === r.lastUpdate || null === i.lastUpdate
          ? (va(r, t), va(i, t))
          : (va(r, t), (i.lastUpdate = t));
      }
      function ba(e, t) {
        var n = e.updateQueue;
        null ===
        (n = null === n ? (e.updateQueue = pa(e.memoizedState)) : xa(e, n))
          .lastCapturedUpdate
          ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
          : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
      }
      function xa(e, t) {
        var n = e.alternate;
        return (
          null !== n && t === n.updateQueue && (t = e.updateQueue = ga(t)), t
        );
      }
      function _a(e, t, n, r, a, o) {
        switch (n.tag) {
          case 1:
            return "function" === typeof (e = n.payload) ? e.call(o, r, a) : e;
          case 3:
            e.effectTag = (-4097 & e.effectTag) | 64;
          case 0:
            if (
              null ===
                (a =
                  "function" === typeof (e = n.payload)
                    ? e.call(o, r, a)
                    : e) ||
              void 0 === a
            )
              break;
            return i({}, r, a);
          case 2:
            ha = !0;
        }
        return r;
      }
      function wa(e, t, n, r, i) {
        ha = !1;
        for (
          var a = (t = xa(e, t)).baseState,
            o = null,
            l = 0,
            s = t.firstUpdate,
            u = a;
          null !== s;

        ) {
          var c = s.expirationTime;
          c < i
            ? (null === o && ((o = s), (a = u)), l < c && (l = c))
            : (Ps(c, s.suspenseConfig),
              (u = _a(e, 0, s, u, n, r)),
              null !== s.callback &&
                ((e.effectTag |= 32),
                (s.nextEffect = null),
                null === t.lastEffect
                  ? (t.firstEffect = t.lastEffect = s)
                  : ((t.lastEffect.nextEffect = s), (t.lastEffect = s)))),
            (s = s.next);
        }
        for (c = null, s = t.firstCapturedUpdate; null !== s; ) {
          var d = s.expirationTime;
          d < i
            ? (null === c && ((c = s), null === o && (a = u)), l < d && (l = d))
            : ((u = _a(e, 0, s, u, n, r)),
              null !== s.callback &&
                ((e.effectTag |= 32),
                (s.nextEffect = null),
                null === t.lastCapturedEffect
                  ? (t.firstCapturedEffect = t.lastCapturedEffect = s)
                  : ((t.lastCapturedEffect.nextEffect = s),
                    (t.lastCapturedEffect = s)))),
            (s = s.next);
        }
        null === o && (t.lastUpdate = null),
          null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
          null === o && null === c && (a = u),
          (t.baseState = a),
          (t.firstUpdate = o),
          (t.firstCapturedUpdate = c),
          Es(l),
          (e.expirationTime = l),
          (e.memoizedState = u);
      }
      function ka(e, t, n) {
        null !== t.firstCapturedUpdate &&
          (null !== t.lastUpdate &&
            ((t.lastUpdate.next = t.firstCapturedUpdate),
            (t.lastUpdate = t.lastCapturedUpdate)),
          (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
          Sa(t.firstEffect, n),
          (t.firstEffect = t.lastEffect = null),
          Sa(t.firstCapturedEffect, n),
          (t.firstCapturedEffect = t.lastCapturedEffect = null);
      }
      function Sa(e, t) {
        for (; null !== e; ) {
          var n = e.callback;
          if (null !== n) {
            e.callback = null;
            var r = t;
            if ("function" !== typeof n) throw Error(o(191, n));
            n.call(r);
          }
          e = e.nextEffect;
        }
      }
      var Ma = F.ReactCurrentBatchConfig,
        Ta = new r.Component().refs;
      function Ca(e, t, n, r) {
        (n =
          null === (n = n(r, (t = e.memoizedState))) || void 0 === n
            ? t
            : i({}, t, n)),
          (e.memoizedState = n),
          null !== (r = e.updateQueue) &&
            0 === e.expirationTime &&
            (r.baseState = n);
      }
      var Pa = {
        isMounted: function (e) {
          return !!(e = e._reactInternalFiber) && tt(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = gs(),
            i = Ma.suspense;
          ((i = ma((r = ms(r, e, i)), i)).payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            ya(e, i),
            vs(e, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = gs(),
            i = Ma.suspense;
          ((i = ma((r = ms(r, e, i)), i)).tag = 1),
            (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            ya(e, i),
            vs(e, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternalFiber;
          var n = gs(),
            r = Ma.suspense;
          ((r = ma((n = ms(n, e, r)), r)).tag = 2),
            void 0 !== t && null !== t && (r.callback = t),
            ya(e, r),
            vs(e, n);
        },
      };
      function Ea(e, t, n, r, i, a, o) {
        return "function" === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, a, o)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !ri(n, r) ||
              !ri(i, a);
      }
      function Da(e, t, n) {
        var r = !1,
          i = mi,
          a = t.contextType;
        return (
          "object" === typeof a && null !== a
            ? (a = fa(a))
            : ((i = _i(t) ? bi : vi.current),
              (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                ? xi(e, i)
                : mi)),
          (t = new t(n, a)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = Pa),
          (e.stateNode = t),
          (t._reactInternalFiber = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              i),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
          t
        );
      }
      function Oa(e, t, n, r) {
        (e = t.state),
          "function" === typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" === typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && Pa.enqueueReplaceState(t, t.state, null);
      }
      function Aa(e, t, n, r) {
        var i = e.stateNode;
        (i.props = n), (i.state = e.memoizedState), (i.refs = Ta);
        var a = t.contextType;
        "object" === typeof a && null !== a
          ? (i.context = fa(a))
          : ((a = _i(t) ? bi : vi.current), (i.context = xi(e, a))),
          null !== (a = e.updateQueue) &&
            (wa(e, a, n, i, r), (i.state = e.memoizedState)),
          "function" === typeof (a = t.getDerivedStateFromProps) &&
            (Ca(e, t, a, n), (i.state = e.memoizedState)),
          "function" === typeof t.getDerivedStateFromProps ||
            "function" === typeof i.getSnapshotBeforeUpdate ||
            ("function" !== typeof i.UNSAFE_componentWillMount &&
              "function" !== typeof i.componentWillMount) ||
            ((t = i.state),
            "function" === typeof i.componentWillMount &&
              i.componentWillMount(),
            "function" === typeof i.UNSAFE_componentWillMount &&
              i.UNSAFE_componentWillMount(),
            t !== i.state && Pa.enqueueReplaceState(i, i.state, null),
            null !== (a = e.updateQueue) &&
              (wa(e, a, n, i, r), (i.state = e.memoizedState))),
          "function" === typeof i.componentDidMount && (e.effectTag |= 4);
      }
      var Ia = Array.isArray;
      function Fa(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" !== typeof e &&
          "object" !== typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var i = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" === typeof t.ref &&
              t.ref._stringRef === i
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === Ta && (t = r.refs = {}),
                    null === e ? delete t[i] : (t[i] = e);
                })._stringRef = i),
                t);
          }
          if ("string" !== typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function Na(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            o(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t,
              ""
            )
          );
      }
      function La(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.effectTag = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function i(e, t, n) {
          return ((e = Ks(e, t)).index = 0), (e.sibling = null), e;
        }
        function a(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.effectTag = 2), n)
                  : r
                : ((t.effectTag = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.effectTag = 2), t;
        }
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Xs(n, e.mode, r)).return = e), t)
            : (((t = i(t, n)).return = e), t);
        }
        function u(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = i(t, n.props)).ref = Fa(e, t, n)), (r.return = e), r)
            : (((r = Qs(n.type, n.key, n.props, null, e.mode, r)).ref = Fa(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Js(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, a) {
          return null === t || 7 !== t.tag
            ? (((t = Zs(n, e.mode, r, a)).return = e), t)
            : (((t = i(t, n)).return = e), t);
        }
        function f(e, t, n) {
          if ("string" === typeof t || "number" === typeof t)
            return ((t = Xs("" + t, e.mode, n)).return = e), t;
          if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
              case R:
                return (
                  ((n = Qs(t.type, t.key, t.props, null, e.mode, n)).ref = Fa(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case z:
                return ((t = Js(t, e.mode, n)).return = e), t;
            }
            if (Ia(t) || Z(t))
              return ((t = Zs(t, e.mode, n, null)).return = e), t;
            Na(e, t);
          }
          return null;
        }
        function h(e, t, n, r) {
          var i = null !== t ? t.key : null;
          if ("string" === typeof n || "number" === typeof n)
            return null !== i ? null : s(e, t, "" + n, r);
          if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
              case R:
                return n.key === i
                  ? n.type === W
                    ? d(e, t, n.props.children, r, i)
                    : u(e, t, n, r)
                  : null;
              case z:
                return n.key === i ? c(e, t, n, r) : null;
            }
            if (Ia(n) || Z(n)) return null !== i ? null : d(e, t, n, r, null);
            Na(e, n);
          }
          return null;
        }
        function p(e, t, n, r, i) {
          if ("string" === typeof r || "number" === typeof r)
            return s(t, (e = e.get(n) || null), "" + r, i);
          if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
              case R:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === W
                    ? d(t, e, r.props.children, i, r.key)
                    : u(t, e, r, i)
                );
              case z:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  i
                );
            }
            if (Ia(r) || Z(r)) return d(t, (e = e.get(n) || null), r, i, null);
            Na(t, r);
          }
          return null;
        }
        function g(i, o, l, s) {
          for (
            var u = null, c = null, d = o, g = (o = 0), m = null;
            null !== d && g < l.length;
            g++
          ) {
            d.index > g ? ((m = d), (d = null)) : (m = d.sibling);
            var v = h(i, d, l[g], s);
            if (null === v) {
              null === d && (d = m);
              break;
            }
            e && d && null === v.alternate && t(i, d),
              (o = a(v, o, g)),
              null === c ? (u = v) : (c.sibling = v),
              (c = v),
              (d = m);
          }
          if (g === l.length) return n(i, d), u;
          if (null === d) {
            for (; g < l.length; g++)
              null !== (d = f(i, l[g], s)) &&
                ((o = a(d, o, g)),
                null === c ? (u = d) : (c.sibling = d),
                (c = d));
            return u;
          }
          for (d = r(i, d); g < l.length; g++)
            null !== (m = p(d, i, g, l[g], s)) &&
              (e &&
                null !== m.alternate &&
                d.delete(null === m.key ? g : m.key),
              (o = a(m, o, g)),
              null === c ? (u = m) : (c.sibling = m),
              (c = m));
          return (
            e &&
              d.forEach(function (e) {
                return t(i, e);
              }),
            u
          );
        }
        function m(i, l, s, u) {
          var c = Z(s);
          if ("function" !== typeof c) throw Error(o(150));
          if (null == (s = c.call(s))) throw Error(o(151));
          for (
            var d = (c = null), g = l, m = (l = 0), v = null, y = s.next();
            null !== g && !y.done;
            m++, y = s.next()
          ) {
            g.index > m ? ((v = g), (g = null)) : (v = g.sibling);
            var b = h(i, g, y.value, u);
            if (null === b) {
              null === g && (g = v);
              break;
            }
            e && g && null === b.alternate && t(i, g),
              (l = a(b, l, m)),
              null === d ? (c = b) : (d.sibling = b),
              (d = b),
              (g = v);
          }
          if (y.done) return n(i, g), c;
          if (null === g) {
            for (; !y.done; m++, y = s.next())
              null !== (y = f(i, y.value, u)) &&
                ((l = a(y, l, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return c;
          }
          for (g = r(i, g); !y.done; m++, y = s.next())
            null !== (y = p(g, i, m, y.value, u)) &&
              (e &&
                null !== y.alternate &&
                g.delete(null === y.key ? m : y.key),
              (l = a(y, l, m)),
              null === d ? (c = y) : (d.sibling = y),
              (d = y));
          return (
            e &&
              g.forEach(function (e) {
                return t(i, e);
              }),
            c
          );
        }
        return function (e, r, a, s) {
          var u =
            "object" === typeof a &&
            null !== a &&
            a.type === W &&
            null === a.key;
          u && (a = a.props.children);
          var c = "object" === typeof a && null !== a;
          if (c)
            switch (a.$$typeof) {
              case R:
                e: {
                  for (c = a.key, u = r; null !== u; ) {
                    if (u.key === c) {
                      if (
                        7 === u.tag ? a.type === W : u.elementType === a.type
                      ) {
                        n(e, u.sibling),
                          ((r = i(
                            u,
                            a.type === W ? a.props.children : a.props
                          )).ref = Fa(e, u, a)),
                          (r.return = e),
                          (e = r);
                        break e;
                      }
                      n(e, u);
                      break;
                    }
                    t(e, u), (u = u.sibling);
                  }
                  a.type === W
                    ? (((r = Zs(a.props.children, e.mode, s, a.key)).return =
                        e),
                      (e = r))
                    : (((s = Qs(a.type, a.key, a.props, null, e.mode, s)).ref =
                        Fa(e, r, a)),
                      (s.return = e),
                      (e = s));
                }
                return l(e);
              case z:
                e: {
                  for (u = a.key; null !== r; ) {
                    if (r.key === u) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === a.containerInfo &&
                        r.stateNode.implementation === a.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = i(r, a.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Js(a, e.mode, s)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" === typeof a || "number" === typeof a)
            return (
              (a = "" + a),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = i(r, a)).return = e), (e = r))
                : (n(e, r), ((r = Xs(a, e.mode, s)).return = e), (e = r)),
              l(e)
            );
          if (Ia(a)) return g(e, r, a, s);
          if (Z(a)) return m(e, r, a, s);
          if ((c && Na(e, a), "undefined" === typeof a && !u))
            switch (e.tag) {
              case 1:
              case 0:
                throw (
                  ((e = e.type),
                  Error(o(152, e.displayName || e.name || "Component")))
                );
            }
          return n(e, r);
        };
      }
      var Ra = La(!0),
        za = La(!1),
        Wa = {},
        ja = { current: Wa },
        Va = { current: Wa },
        Ya = { current: Wa };
      function Ua(e) {
        if (e === Wa) throw Error(o(174));
        return e;
      }
      function Ba(e, t) {
        gi(Ya, t), gi(Va, e), gi(ja, Wa);
        var n = t.nodeType;
        switch (n) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ve(null, "");
            break;
          default:
            t = Ve(
              (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
              (n = n.tagName)
            );
        }
        pi(ja), gi(ja, t);
      }
      function Ha(e) {
        pi(ja), pi(Va), pi(Ya);
      }
      function qa(e) {
        Ua(Ya.current);
        var t = Ua(ja.current),
          n = Ve(t, e.type);
        t !== n && (gi(Va, e), gi(ja, n));
      }
      function Ga(e) {
        Va.current === e && (pi(ja), pi(Va));
      }
      var $a = { current: 0 };
      function Ka(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) || n.data === Jn || n.data === er)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 !== (64 & t.effectTag)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      function Qa(e, t) {
        return { responder: e, props: t };
      }
      var Za = F.ReactCurrentDispatcher,
        Xa = F.ReactCurrentBatchConfig,
        Ja = 0,
        eo = null,
        to = null,
        no = null,
        ro = null,
        io = null,
        ao = null,
        oo = 0,
        lo = null,
        so = 0,
        uo = !1,
        co = null,
        fo = 0;
      function ho() {
        throw Error(o(321));
      }
      function po(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!ti(e[n], t[n])) return !1;
        return !0;
      }
      function go(e, t, n, r, i, a) {
        if (
          ((Ja = a),
          (eo = t),
          (no = null !== e ? e.memoizedState : null),
          (Za.current = null === no ? Fo : No),
          (t = n(r, i)),
          uo)
        ) {
          do {
            (uo = !1),
              (fo += 1),
              (no = null !== e ? e.memoizedState : null),
              (ao = ro),
              (lo = io = to = null),
              (Za.current = No),
              (t = n(r, i));
          } while (uo);
          (co = null), (fo = 0);
        }
        if (
          ((Za.current = Io),
          ((e = eo).memoizedState = ro),
          (e.expirationTime = oo),
          (e.updateQueue = lo),
          (e.effectTag |= so),
          (e = null !== to && null !== to.next),
          (Ja = 0),
          (ao = io = ro = no = to = eo = null),
          (oo = 0),
          (lo = null),
          (so = 0),
          e)
        )
          throw Error(o(300));
        return t;
      }
      function mo() {
        (Za.current = Io),
          (Ja = 0),
          (ao = io = ro = no = to = eo = null),
          (oo = 0),
          (lo = null),
          (so = 0),
          (uo = !1),
          (co = null),
          (fo = 0);
      }
      function vo() {
        var e = {
          memoizedState: null,
          baseState: null,
          queue: null,
          baseUpdate: null,
          next: null,
        };
        return null === io ? (ro = io = e) : (io = io.next = e), io;
      }
      function yo() {
        if (null !== ao)
          (ao = (io = ao).next), (no = null !== (to = no) ? to.next : null);
        else {
          if (null === no) throw Error(o(310));
          var e = {
            memoizedState: (to = no).memoizedState,
            baseState: to.baseState,
            queue: to.queue,
            baseUpdate: to.baseUpdate,
            next: null,
          };
          (io = null === io ? (ro = e) : (io.next = e)), (no = to.next);
        }
        return io;
      }
      function bo(e, t) {
        return "function" === typeof t ? t(e) : t;
      }
      function xo(e) {
        var t = yo(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        if (((n.lastRenderedReducer = e), 0 < fo)) {
          var r = n.dispatch;
          if (null !== co) {
            var i = co.get(n);
            if (void 0 !== i) {
              co.delete(n);
              var a = t.memoizedState;
              do {
                (a = e(a, i.action)), (i = i.next);
              } while (null !== i);
              return (
                ti(a, t.memoizedState) || (qo = !0),
                (t.memoizedState = a),
                t.baseUpdate === n.last && (t.baseState = a),
                (n.lastRenderedState = a),
                [a, r]
              );
            }
          }
          return [t.memoizedState, r];
        }
        r = n.last;
        var l = t.baseUpdate;
        if (
          ((a = t.baseState),
          null !== l
            ? (null !== r && (r.next = null), (r = l.next))
            : (r = null !== r ? r.next : null),
          null !== r)
        ) {
          var s = (i = null),
            u = r,
            c = !1;
          do {
            var d = u.expirationTime;
            d < Ja
              ? (c || ((c = !0), (s = l), (i = a)), d > oo && Es((oo = d)))
              : (Ps(d, u.suspenseConfig),
                (a = u.eagerReducer === e ? u.eagerState : e(a, u.action))),
              (l = u),
              (u = u.next);
          } while (null !== u && u !== r);
          c || ((s = l), (i = a)),
            ti(a, t.memoizedState) || (qo = !0),
            (t.memoizedState = a),
            (t.baseUpdate = s),
            (t.baseState = i),
            (n.lastRenderedState = a);
        }
        return [t.memoizedState, n.dispatch];
      }
      function _o(e) {
        var t = vo();
        return (
          "function" === typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
            {
              last: null,
              dispatch: null,
              lastRenderedReducer: bo,
              lastRenderedState: e,
            }).dispatch =
            Ao.bind(null, eo, e)),
          [t.memoizedState, e]
        );
      }
      function wo(e) {
        return xo(bo);
      }
      function ko(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === lo
            ? ((lo = { lastEffect: null }).lastEffect = e.next = e)
            : null === (t = lo.lastEffect)
            ? (lo.lastEffect = e.next = e)
            : ((n = t.next), (t.next = e), (e.next = n), (lo.lastEffect = e)),
          e
        );
      }
      function So(e, t, n, r) {
        var i = vo();
        (so |= e),
          (i.memoizedState = ko(t, n, void 0, void 0 === r ? null : r));
      }
      function Mo(e, t, n, r) {
        var i = yo();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== to) {
          var o = to.memoizedState;
          if (((a = o.destroy), null !== r && po(r, o.deps)))
            return void ko(0, n, a, r);
        }
        (so |= e), (i.memoizedState = ko(t, n, a, r));
      }
      function To(e, t) {
        return So(516, 192, e, t);
      }
      function Co(e, t) {
        return Mo(516, 192, e, t);
      }
      function Po(e, t) {
        return "function" === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Eo() {}
      function Do(e, t) {
        return (vo().memoizedState = [e, void 0 === t ? null : t]), e;
      }
      function Oo(e, t) {
        var n = yo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && po(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Ao(e, t, n) {
        if (!(25 > fo)) throw Error(o(301));
        var r = e.alternate;
        if (e === eo || (null !== r && r === eo))
          if (
            ((uo = !0),
            (e = {
              expirationTime: Ja,
              suspenseConfig: null,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            }),
            null === co && (co = new Map()),
            void 0 === (n = co.get(t)))
          )
            co.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
        else {
          var i = gs(),
            a = Ma.suspense;
          a = {
            expirationTime: (i = ms(i, e, a)),
            suspenseConfig: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          };
          var l = t.last;
          if (null === l) a.next = a;
          else {
            var s = l.next;
            null !== s && (a.next = s), (l.next = a);
          }
          if (
            ((t.last = a),
            0 === e.expirationTime &&
              (null === r || 0 === r.expirationTime) &&
              null !== (r = t.lastRenderedReducer))
          )
            try {
              var u = t.lastRenderedState,
                c = r(u, n);
              if (((a.eagerReducer = r), (a.eagerState = c), ti(c, u))) return;
            } catch (d) {}
          vs(e, i);
        }
      }
      var Io = {
          readContext: fa,
          useCallback: ho,
          useContext: ho,
          useEffect: ho,
          useImperativeHandle: ho,
          useLayoutEffect: ho,
          useMemo: ho,
          useReducer: ho,
          useRef: ho,
          useState: ho,
          useDebugValue: ho,
          useResponder: ho,
          useDeferredValue: ho,
          useTransition: ho,
        },
        Fo = {
          readContext: fa,
          useCallback: Do,
          useContext: fa,
          useEffect: To,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              So(4, 36, Po.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return So(4, 36, e, t);
          },
          useMemo: function (e, t) {
            var n = vo();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = vo();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                {
                  last: null,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }).dispatch =
                Ao.bind(null, eo, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (vo().memoizedState = e);
          },
          useState: _o,
          useDebugValue: Eo,
          useResponder: Qa,
          useDeferredValue: function (e, t) {
            var n = _o(e),
              r = n[0],
              i = n[1];
            return (
              To(
                function () {
                  a.unstable_next(function () {
                    var n = Xa.suspense;
                    Xa.suspense = void 0 === t ? null : t;
                    try {
                      i(e);
                    } finally {
                      Xa.suspense = n;
                    }
                  });
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = _o(!1),
              n = t[0],
              r = t[1];
            return [
              Do(
                function (t) {
                  r(!0),
                    a.unstable_next(function () {
                      var n = Xa.suspense;
                      Xa.suspense = void 0 === e ? null : e;
                      try {
                        r(!1), t();
                      } finally {
                        Xa.suspense = n;
                      }
                    });
                },
                [e, n]
              ),
              n,
            ];
          },
        },
        No = {
          readContext: fa,
          useCallback: Oo,
          useContext: fa,
          useEffect: Co,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              Mo(4, 36, Po.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return Mo(4, 36, e, t);
          },
          useMemo: function (e, t) {
            var n = yo();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && po(t, r[1])
              ? r[0]
              : ((e = e()), (n.memoizedState = [e, t]), e);
          },
          useReducer: xo,
          useRef: function () {
            return yo().memoizedState;
          },
          useState: wo,
          useDebugValue: Eo,
          useResponder: Qa,
          useDeferredValue: function (e, t) {
            var n = wo(),
              r = n[0],
              i = n[1];
            return (
              Co(
                function () {
                  a.unstable_next(function () {
                    var n = Xa.suspense;
                    Xa.suspense = void 0 === t ? null : t;
                    try {
                      i(e);
                    } finally {
                      Xa.suspense = n;
                    }
                  });
                },
                [e, t]
              ),
              r
            );
          },
          useTransition: function (e) {
            var t = wo(),
              n = t[0],
              r = t[1];
            return [
              Oo(
                function (t) {
                  r(!0),
                    a.unstable_next(function () {
                      var n = Xa.suspense;
                      Xa.suspense = void 0 === e ? null : e;
                      try {
                        r(!1), t();
                      } finally {
                        Xa.suspense = n;
                      }
                    });
                },
                [e, n]
              ),
              n,
            ];
          },
        },
        Lo = null,
        Ro = null,
        zo = !1;
      function Wo(e, t) {
        var n = Gs(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.effectTag = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function jo(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function Vo(e) {
        if (zo) {
          var t = Ro;
          if (t) {
            var n = t;
            if (!jo(e, t)) {
              if (!(t = lr(n.nextSibling)) || !jo(e, t))
                return (
                  (e.effectTag = (-1025 & e.effectTag) | 2),
                  (zo = !1),
                  void (Lo = e)
                );
              Wo(Lo, n);
            }
            (Lo = e), (Ro = lr(t.firstChild));
          } else (e.effectTag = (-1025 & e.effectTag) | 2), (zo = !1), (Lo = e);
        }
      }
      function Yo(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Lo = e;
      }
      function Uo(e) {
        if (e !== Lo) return !1;
        if (!zo) return Yo(e), (zo = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !ir(t, e.memoizedProps))
        )
          for (t = Ro; t; ) Wo(e, t), (t = lr(t.nextSibling));
        if ((Yo(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if (n === Xn) {
                  if (0 === t) {
                    Ro = lr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else (n !== Zn && n !== er && n !== Jn) || t++;
              }
              e = e.nextSibling;
            }
            Ro = null;
          }
        } else Ro = Lo ? lr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Bo() {
        (Ro = Lo = null), (zo = !1);
      }
      var Ho = F.ReactCurrentOwner,
        qo = !1;
      function Go(e, t, n, r) {
        t.child = null === e ? za(t, null, n, r) : Ra(t, e.child, n, r);
      }
      function $o(e, t, n, r, i) {
        n = n.render;
        var a = t.ref;
        return (
          da(t, i),
          (r = go(e, t, n, r, a, i)),
          null === e || qo
            ? ((t.effectTag |= 1), Go(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= i && (e.expirationTime = 0),
              dl(e, t, i))
        );
      }
      function Ko(e, t, n, r, i, a) {
        if (null === e) {
          var o = n.type;
          return "function" !== typeof o ||
            $s(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Qs(n.type, null, r, null, t.mode, a)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), Qo(e, t, o, r, i, a));
        }
        return (
          (o = e.child),
          i < a &&
          ((i = o.memoizedProps),
          (n = null !== (n = n.compare) ? n : ri)(i, r) && e.ref === t.ref)
            ? dl(e, t, a)
            : ((t.effectTag |= 1),
              ((e = Ks(o, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function Qo(e, t, n, r, i, a) {
        return null !== e &&
          ri(e.memoizedProps, r) &&
          e.ref === t.ref &&
          ((qo = !1), i < a)
          ? dl(e, t, a)
          : Xo(e, t, n, r, a);
      }
      function Zo(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.effectTag |= 128);
      }
      function Xo(e, t, n, r, i) {
        var a = _i(n) ? bi : vi.current;
        return (
          (a = xi(t, a)),
          da(t, i),
          (n = go(e, t, n, r, a, i)),
          null === e || qo
            ? ((t.effectTag |= 1), Go(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= i && (e.expirationTime = 0),
              dl(e, t, i))
        );
      }
      function Jo(e, t, n, r, i) {
        if (_i(n)) {
          var a = !0;
          Ti(t);
        } else a = !1;
        if ((da(t, i), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            Da(t, n, r),
            Aa(t, n, r, i),
            (r = !0);
        else if (null === e) {
          var o = t.stateNode,
            l = t.memoizedProps;
          o.props = l;
          var s = o.context,
            u = n.contextType;
          "object" === typeof u && null !== u
            ? (u = fa(u))
            : (u = xi(t, (u = _i(n) ? bi : vi.current)));
          var c = n.getDerivedStateFromProps,
            d =
              "function" === typeof c ||
              "function" === typeof o.getSnapshotBeforeUpdate;
          d ||
            ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof o.componentWillReceiveProps) ||
            ((l !== r || s !== u) && Oa(t, o, r, u)),
            (ha = !1);
          var f = t.memoizedState;
          s = o.state = f;
          var h = t.updateQueue;
          null !== h && (wa(t, h, r, o, i), (s = t.memoizedState)),
            l !== r || f !== s || yi.current || ha
              ? ("function" === typeof c &&
                  (Ca(t, n, c, r), (s = t.memoizedState)),
                (l = ha || Ea(t, n, l, r, f, s, u))
                  ? (d ||
                      ("function" !== typeof o.UNSAFE_componentWillMount &&
                        "function" !== typeof o.componentWillMount) ||
                      ("function" === typeof o.componentWillMount &&
                        o.componentWillMount(),
                      "function" === typeof o.UNSAFE_componentWillMount &&
                        o.UNSAFE_componentWillMount()),
                    "function" === typeof o.componentDidMount &&
                      (t.effectTag |= 4))
                  : ("function" === typeof o.componentDidMount &&
                      (t.effectTag |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = s)),
                (o.props = r),
                (o.state = s),
                (o.context = u),
                (r = l))
              : ("function" === typeof o.componentDidMount &&
                  (t.effectTag |= 4),
                (r = !1));
        } else
          (o = t.stateNode),
            (l = t.memoizedProps),
            (o.props = t.type === t.elementType ? l : na(t.type, l)),
            (s = o.context),
            "object" === typeof (u = n.contextType) && null !== u
              ? (u = fa(u))
              : (u = xi(t, (u = _i(n) ? bi : vi.current))),
            (d =
              "function" === typeof (c = n.getDerivedStateFromProps) ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== u) && Oa(t, o, r, u)),
            (ha = !1),
            (s = t.memoizedState),
            (f = o.state = s),
            null !== (h = t.updateQueue) &&
              (wa(t, h, r, o, i), (f = t.memoizedState)),
            l !== r || s !== f || yi.current || ha
              ? ("function" === typeof c &&
                  (Ca(t, n, c, r), (f = t.memoizedState)),
                (c = ha || Ea(t, n, l, r, s, f, u))
                  ? (d ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, f, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, f, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.effectTag |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.effectTag |= 256))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && s === e.memoizedState) ||
                      (t.effectTag |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && s === e.memoizedState) ||
                      (t.effectTag |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = f)),
                (o.props = r),
                (o.state = f),
                (o.context = u),
                (r = c))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && s === e.memoizedState) ||
                  (t.effectTag |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && s === e.memoizedState) ||
                  (t.effectTag |= 256),
                (r = !1));
        return el(e, t, n, r, a, i);
      }
      function el(e, t, n, r, i, a) {
        Zo(e, t);
        var o = 0 !== (64 & t.effectTag);
        if (!r && !o) return i && Ci(t, n, !1), dl(e, t, a);
        (r = t.stateNode), (Ho.current = t);
        var l =
          o && "function" !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.effectTag |= 1),
          null !== e && o
            ? ((t.child = Ra(t, e.child, null, a)),
              (t.child = Ra(t, null, l, a)))
            : Go(e, t, l, a),
          (t.memoizedState = r.state),
          i && Ci(t, n, !0),
          t.child
        );
      }
      function tl(e) {
        var t = e.stateNode;
        t.pendingContext
          ? Si(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Si(0, t.context, !1),
          Ba(e, t.containerInfo);
      }
      var nl,
        rl,
        il,
        al,
        ol = { dehydrated: null, retryTime: 0 };
      function ll(e, t, n) {
        var r,
          i = t.mode,
          a = t.pendingProps,
          o = $a.current,
          l = !1;
        if (
          ((r = 0 !== (64 & t.effectTag)) ||
            (r = 0 !== (2 & o) && (null === e || null !== e.memoizedState)),
          r
            ? ((l = !0), (t.effectTag &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === a.fallback ||
              !0 === a.unstable_avoidThisFallback ||
              (o |= 1),
          gi($a, 1 & o),
          null === e)
        ) {
          if ((void 0 !== a.fallback && Vo(t), l)) {
            if (
              ((l = a.fallback),
              ((a = Zs(null, i, 0, null)).return = t),
              0 === (2 & t.mode))
            )
              for (
                e = null !== t.memoizedState ? t.child.child : t.child,
                  a.child = e;
                null !== e;

              )
                (e.return = a), (e = e.sibling);
            return (
              ((n = Zs(l, i, n, null)).return = t),
              (a.sibling = n),
              (t.memoizedState = ol),
              (t.child = a),
              n
            );
          }
          return (
            (i = a.children),
            (t.memoizedState = null),
            (t.child = za(t, null, i, n))
          );
        }
        if (null !== e.memoizedState) {
          if (((i = (e = e.child).sibling), l)) {
            if (
              ((a = a.fallback),
              ((n = Ks(e, e.pendingProps)).return = t),
              0 === (2 & t.mode) &&
                (l = null !== t.memoizedState ? t.child.child : t.child) !==
                  e.child)
            )
              for (n.child = l; null !== l; ) (l.return = n), (l = l.sibling);
            return (
              ((i = Ks(i, a, i.expirationTime)).return = t),
              (n.sibling = i),
              (n.childExpirationTime = 0),
              (t.memoizedState = ol),
              (t.child = n),
              i
            );
          }
          return (
            (n = Ra(t, e.child, a.children, n)),
            (t.memoizedState = null),
            (t.child = n)
          );
        }
        if (((e = e.child), l)) {
          if (
            ((l = a.fallback),
            ((a = Zs(null, i, 0, null)).return = t),
            (a.child = e),
            null !== e && (e.return = a),
            0 === (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                a.child = e;
              null !== e;

            )
              (e.return = a), (e = e.sibling);
          return (
            ((n = Zs(l, i, n, null)).return = t),
            (a.sibling = n),
            (n.effectTag |= 2),
            (a.childExpirationTime = 0),
            (t.memoizedState = ol),
            (t.child = a),
            n
          );
        }
        return (t.memoizedState = null), (t.child = Ra(t, e, a.children, n));
      }
      function sl(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t),
          ca(e.return, t);
      }
      function ul(e, t, n, r, i, a) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              last: r,
              tail: n,
              tailExpiration: 0,
              tailMode: i,
              lastEffect: a,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.last = r),
            (o.tail = n),
            (o.tailExpiration = 0),
            (o.tailMode = i),
            (o.lastEffect = a));
      }
      function cl(e, t, n) {
        var r = t.pendingProps,
          i = r.revealOrder,
          a = r.tail;
        if ((Go(e, t, r.children, n), 0 !== (2 & (r = $a.current))))
          (r = (1 & r) | 2), (t.effectTag |= 64);
        else {
          if (null !== e && 0 !== (64 & e.effectTag))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && sl(e, n);
              else if (19 === e.tag) sl(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((gi($a, r), 0 === (2 & t.mode))) t.memoizedState = null;
        else
          switch (i) {
            case "forwards":
              for (n = t.child, i = null; null !== n; )
                null !== (e = n.alternate) && null === Ka(e) && (i = n),
                  (n = n.sibling);
              null === (n = i)
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
                ul(t, !1, i, n, a, t.lastEffect);
              break;
            case "backwards":
              for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === Ka(e)) {
                  t.child = i;
                  break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
              }
              ul(t, !0, n, null, a, t.lastEffect);
              break;
            case "together":
              ul(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function dl(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if ((0 !== r && Es(r), t.childExpirationTime < n)) return null;
        if (null !== e && t.child !== e.child) throw Error(o(153));
        if (null !== t.child) {
          for (
            n = Ks((e = t.child), e.pendingProps, e.expirationTime),
              t.child = n,
              n.return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((n = n.sibling =
                Ks(e, e.pendingProps, e.expirationTime)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function fl(e) {
        e.effectTag |= 4;
      }
      function hl(e, t) {
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
      }
      function pl(e) {
        switch (e.tag) {
          case 1:
            _i(e.type) && wi();
            var t = e.effectTag;
            return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Ha(), ki(), 0 !== (64 & (t = e.effectTag))))
              throw Error(o(285));
            return (e.effectTag = (-4097 & t) | 64), e;
          case 5:
            return Ga(e), null;
          case 13:
            return (
              pi($a),
              4096 & (t = e.effectTag)
                ? ((e.effectTag = (-4097 & t) | 64), e)
                : null
            );
          case 19:
            return pi($a), null;
          case 4:
            return Ha(), null;
          case 10:
            return ua(e), null;
          default:
            return null;
        }
      }
      function gl(e, t) {
        return { value: e, source: t, stack: J(t) };
      }
      (nl = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (rl = function () {}),
        (il = function (e, t, n, r, a) {
          var o = e.memoizedProps;
          if (o !== r) {
            var l,
              s,
              u = t.stateNode;
            switch ((Ua(ja.current), (e = null), n)) {
              case "input":
                (o = Ce(u, o)), (r = Ce(u, r)), (e = []);
                break;
              case "option":
                (o = Ie(u, o)), (r = Ie(u, r)), (e = []);
                break;
              case "select":
                (o = i({}, o, { value: void 0 })),
                  (r = i({}, r, { value: void 0 })),
                  (e = []);
                break;
              case "textarea":
                (o = Ne(u, o)), (r = Ne(u, r)), (e = []);
                break;
              default:
                "function" !== typeof o.onClick &&
                  "function" === typeof r.onClick &&
                  (u.onclick = Hn);
            }
            for (l in (Yn(n, r), (n = null), o))
              if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && null != o[l])
                if ("style" === l)
                  for (s in (u = o[l]))
                    u.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                else
                  "dangerouslySetInnerHTML" !== l &&
                    "children" !== l &&
                    "suppressContentEditableWarning" !== l &&
                    "suppressHydrationWarning" !== l &&
                    "autoFocus" !== l &&
                    (h.hasOwnProperty(l)
                      ? e || (e = [])
                      : (e = e || []).push(l, null));
            for (l in r) {
              var c = r[l];
              if (
                ((u = null != o ? o[l] : void 0),
                r.hasOwnProperty(l) && c !== u && (null != c || null != u))
              )
                if ("style" === l)
                  if (u) {
                    for (s in u)
                      !u.hasOwnProperty(s) ||
                        (c && c.hasOwnProperty(s)) ||
                        (n || (n = {}), (n[s] = ""));
                    for (s in c)
                      c.hasOwnProperty(s) &&
                        u[s] !== c[s] &&
                        (n || (n = {}), (n[s] = c[s]));
                  } else n || (e || (e = []), e.push(l, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === l
                    ? ((c = c ? c.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != c && u !== c && (e = e || []).push(l, "" + c))
                    : "children" === l
                    ? u === c ||
                      ("string" !== typeof c && "number" !== typeof c) ||
                      (e = e || []).push(l, "" + c)
                    : "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      (h.hasOwnProperty(l)
                        ? (null != c && Bn(a, l), e || u === c || (e = []))
                        : (e = e || []).push(l, c));
            }
            n && (e = e || []).push("style", n),
              (a = e),
              (t.updateQueue = a) && fl(t);
          }
        }),
        (al = function (e, t, n, r) {
          n !== r && fl(t);
        });
      var ml = "function" === typeof WeakSet ? WeakSet : Set;
      function vl(e, t) {
        var n = t.source,
          r = t.stack;
        null === r && null !== n && (r = J(n)),
          null !== n && X(n.type),
          (t = t.value),
          null !== e && 1 === e.tag && X(e.type);
        try {
          console.error(t);
        } catch (i) {
          setTimeout(function () {
            throw i;
          });
        }
      }
      function yl(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" === typeof t)
            try {
              t(null);
            } catch (n) {
              Vs(e, n);
            }
          else t.current = null;
      }
      function bl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            xl(2, 0, t);
            break;
          case 1:
            if (256 & t.effectTag && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : na(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            break;
          case 3:
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      }
      function xl(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
          var r = (n = n.next);
          do {
            if (0 !== (r.tag & e)) {
              var i = r.destroy;
              (r.destroy = void 0), void 0 !== i && i();
            }
            0 !== (r.tag & t) && ((i = r.create), (r.destroy = i())),
              (r = r.next);
          } while (r !== n);
        }
      }
      function _l(e, t, n) {
        switch (("function" === typeof Hs && Hs(t), t.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var r = e.next;
              Ki(97 < n ? 97 : n, function () {
                var e = r;
                do {
                  var n = e.destroy;
                  if (void 0 !== n) {
                    var i = t;
                    try {
                      n();
                    } catch (a) {
                      Vs(i, a);
                    }
                  }
                  e = e.next;
                } while (e !== r);
              });
            }
            break;
          case 1:
            yl(t),
              "function" === typeof (n = t.stateNode).componentWillUnmount &&
                (function (e, t) {
                  try {
                    (t.props = e.memoizedProps),
                      (t.state = e.memoizedState),
                      t.componentWillUnmount();
                  } catch (n) {
                    Vs(e, n);
                  }
                })(t, n);
            break;
          case 5:
            yl(t);
            break;
          case 4:
            Ml(e, t, n);
        }
      }
      function wl(e) {
        var t = e.alternate;
        (e.return = null),
          (e.child = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.alternate = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.pendingProps = null),
          (e.memoizedProps = null),
          null !== t && wl(t);
      }
      function kl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function Sl(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (kl(t)) {
              var n = t;
              break e;
            }
            t = t.return;
          }
          throw Error(o(160));
        }
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(o(161));
        }
        16 & n.effectTag && (Be(t, ""), (n.effectTag &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || kl(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.effectTag) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.effectTag)) {
            n = n.stateNode;
            break e;
          }
        }
        for (var i = e; ; ) {
          var a = 5 === i.tag || 6 === i.tag;
          if (a) {
            var l = a ? i.stateNode : i.stateNode.instance;
            if (n)
              if (r) {
                var s = l;
                (l = n),
                  8 === (a = t).nodeType
                    ? a.parentNode.insertBefore(s, l)
                    : a.insertBefore(s, l);
              } else t.insertBefore(l, n);
            else
              r
                ? (8 === (s = t).nodeType
                    ? (a = s.parentNode).insertBefore(l, s)
                    : (a = s).appendChild(l),
                  (null !== (s = s._reactRootContainer) && void 0 !== s) ||
                    null !== a.onclick ||
                    (a.onclick = Hn))
                : t.appendChild(l);
          } else if (4 !== i.tag && null !== i.child) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === e) break;
          for (; null === i.sibling; ) {
            if (null === i.return || i.return === e) return;
            i = i.return;
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      }
      function Ml(e, t, n) {
        for (var r, i, a = t, l = !1; ; ) {
          if (!l) {
            l = a.return;
            e: for (;;) {
              if (null === l) throw Error(o(160));
              switch (((r = l.stateNode), l.tag)) {
                case 5:
                  i = !1;
                  break e;
                case 3:
                case 4:
                  (r = r.containerInfo), (i = !0);
                  break e;
              }
              l = l.return;
            }
            l = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            e: for (var s = e, u = a, c = n, d = u; ; )
              if ((_l(s, d, c), null !== d.child && 4 !== d.tag))
                (d.child.return = d), (d = d.child);
              else {
                if (d === u) break;
                for (; null === d.sibling; ) {
                  if (null === d.return || d.return === u) break e;
                  d = d.return;
                }
                (d.sibling.return = d.return), (d = d.sibling);
              }
            i
              ? ((s = r),
                (u = a.stateNode),
                8 === s.nodeType
                  ? s.parentNode.removeChild(u)
                  : s.removeChild(u))
              : r.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (r = a.stateNode.containerInfo),
                (i = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((_l(e, a, n), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === t) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === t) return;
            4 === (a = a.return).tag && (l = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function Tl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            xl(4, 8, t);
            break;
          case 1:
            break;
          case 5:
            var n = t.stateNode;
            if (null != n) {
              var r = t.memoizedProps,
                i = null !== e ? e.memoizedProps : r;
              e = t.type;
              var a = t.updateQueue;
              if (((t.updateQueue = null), null !== a)) {
                for (
                  n[dr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      Ee(n, r),
                    Un(e, i),
                    t = Un(e, r),
                    i = 0;
                  i < a.length;
                  i += 2
                ) {
                  var l = a[i],
                    s = a[i + 1];
                  "style" === l
                    ? jn(n, s)
                    : "dangerouslySetInnerHTML" === l
                    ? Ue(n, s)
                    : "children" === l
                    ? Be(n, s)
                    : ke(n, l, s, t);
                }
                switch (e) {
                  case "input":
                    De(n, r);
                    break;
                  case "textarea":
                    Re(n, r);
                    break;
                  case "select":
                    (t = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (e = r.value)
                        ? Fe(n, !!r.multiple, e, !1)
                        : t !== !!r.multiple &&
                          (null != r.defaultValue
                            ? Fe(n, !!r.multiple, r.defaultValue, !0)
                            : Fe(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            break;
          case 6:
            if (null === t.stateNode) throw Error(o(162));
            t.stateNode.nodeValue = t.memoizedProps;
            break;
          case 3:
            (t = t.stateNode).hydrate &&
              ((t.hydrate = !1), Tt(t.containerInfo));
            break;
          case 12:
            break;
          case 13:
            if (
              ((n = t),
              null === t.memoizedState
                ? (r = !1)
                : ((r = !0), (n = t.child), (ns = qi())),
              null !== n)
            )
              e: for (e = n; ; ) {
                if (5 === e.tag)
                  (a = e.stateNode),
                    r
                      ? "function" === typeof (a = a.style).setProperty
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none")
                      : ((a = e.stateNode),
                        (i =
                          void 0 !== (i = e.memoizedProps.style) &&
                          null !== i &&
                          i.hasOwnProperty("display")
                            ? i.display
                            : null),
                        (a.style.display = Wn("display", i)));
                else if (6 === e.tag)
                  e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                else {
                  if (
                    13 === e.tag &&
                    null !== e.memoizedState &&
                    null === e.memoizedState.dehydrated
                  ) {
                    ((a = e.child.sibling).return = e), (e = a);
                    continue;
                  }
                  if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                  }
                }
                if (e === n) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === n) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            Cl(t);
            break;
          case 19:
            Cl(t);
            break;
          case 17:
          case 20:
          case 21:
            break;
          default:
            throw Error(o(163));
        }
      }
      function Cl(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new ml()),
            t.forEach(function (t) {
              var r = Us.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      var Pl = "function" === typeof WeakMap ? WeakMap : Map;
      function El(e, t, n) {
        ((n = ma(n, null)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            as || ((as = !0), (os = r)), vl(e, t);
          }),
          n
        );
      }
      function Dl(e, t, n) {
        (n = ma(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" === typeof r) {
          var i = t.value;
          n.payload = function () {
            return vl(e, t), r(i);
          };
        }
        var a = e.stateNode;
        return (
          null !== a &&
            "function" === typeof a.componentDidCatch &&
            (n.callback = function () {
              "function" !== typeof r &&
                (null === ls ? (ls = new Set([this])) : ls.add(this), vl(e, t));
              var n = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : "",
              });
            }),
          n
        );
      }
      var Ol,
        Al = Math.ceil,
        Il = F.ReactCurrentDispatcher,
        Fl = F.ReactCurrentOwner,
        Nl = 0,
        Ll = 8,
        Rl = 16,
        zl = 32,
        Wl = 0,
        jl = 1,
        Vl = 2,
        Yl = 3,
        Ul = 4,
        Bl = 5,
        Hl = Nl,
        ql = null,
        Gl = null,
        $l = 0,
        Kl = Wl,
        Ql = null,
        Zl = 1073741823,
        Xl = 1073741823,
        Jl = null,
        es = 0,
        ts = !1,
        ns = 0,
        rs = 500,
        is = null,
        as = !1,
        os = null,
        ls = null,
        ss = !1,
        us = null,
        cs = 90,
        ds = null,
        fs = 0,
        hs = null,
        ps = 0;
      function gs() {
        return (Hl & (Rl | zl)) !== Nl
          ? 1073741821 - ((qi() / 10) | 0)
          : 0 !== ps
          ? ps
          : (ps = 1073741821 - ((qi() / 10) | 0));
      }
      function ms(e, t, n) {
        if (0 === (2 & (t = t.mode))) return 1073741823;
        var r = Gi();
        if (0 === (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if ((Hl & Rl) !== Nl) return $l;
        if (null !== n) e = ta(e, 0 | n.timeoutMs || 5e3, 250);
        else
          switch (r) {
            case 99:
              e = 1073741823;
              break;
            case 98:
              e = ta(e, 150, 100);
              break;
            case 97:
            case 96:
              e = ta(e, 5e3, 250);
              break;
            case 95:
              e = 2;
              break;
            default:
              throw Error(o(326));
          }
        return null !== ql && e === $l && --e, e;
      }
      function vs(e, t) {
        if (50 < fs) throw ((fs = 0), (hs = null), Error(o(185)));
        if (null !== (e = ys(e, t))) {
          var n = Gi();
          1073741823 === t
            ? (Hl & Ll) !== Nl && (Hl & (Rl | zl)) === Nl
              ? ws(e)
              : (xs(e), Hl === Nl && Xi())
            : xs(e),
            (4 & Hl) === Nl ||
              (98 !== n && 99 !== n) ||
              (null === ds
                ? (ds = new Map([[e, t]]))
                : (void 0 === (n = ds.get(e)) || n > t) && ds.set(e, t));
        }
      }
      function ys(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
          i = null;
        if (null === r && 3 === e.tag) i = e.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t),
              null === r.return && 3 === r.tag)
            ) {
              i = r.stateNode;
              break;
            }
            r = r.return;
          }
        return (
          null !== i && (ql === i && (Es(t), Kl === Ul && nu(i, $l)), ru(i, t)),
          i
        );
      }
      function bs(e) {
        var t = e.lastExpiredTime;
        return 0 !== t
          ? t
          : tu(e, (t = e.firstPendingTime))
          ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel)
            ? t
            : e
          : t;
      }
      function xs(e) {
        if (0 !== e.lastExpiredTime)
          (e.callbackExpirationTime = 1073741823),
            (e.callbackPriority = 99),
            (e.callbackNode = Zi(ws.bind(null, e)));
        else {
          var t = bs(e),
            n = e.callbackNode;
          if (0 === t)
            null !== n &&
              ((e.callbackNode = null),
              (e.callbackExpirationTime = 0),
              (e.callbackPriority = 90));
          else {
            var r = gs();
            if (
              (1073741823 === t
                ? (r = 99)
                : 1 === t || 2 === t
                ? (r = 95)
                : (r =
                    0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                      ? 99
                      : 250 >= r
                      ? 98
                      : 5250 >= r
                      ? 97
                      : 95),
              null !== n)
            ) {
              var i = e.callbackPriority;
              if (e.callbackExpirationTime === t && i >= r) return;
              n !== ji && Di(n);
            }
            (e.callbackExpirationTime = t),
              (e.callbackPriority = r),
              (t =
                1073741823 === t
                  ? Zi(ws.bind(null, e))
                  : Qi(r, _s.bind(null, e), {
                      timeout: 10 * (1073741821 - t) - qi(),
                    })),
              (e.callbackNode = t);
          }
        }
      }
      function _s(e, t) {
        if (((ps = 0), t)) return iu(e, (t = gs())), xs(e), null;
        var n = bs(e);
        if (0 !== n) {
          if (((t = e.callbackNode), (Hl & (Rl | zl)) !== Nl))
            throw Error(o(327));
          if ((zs(), (e === ql && n === $l) || Ms(e, n), null !== Gl)) {
            var r = Hl;
            Hl |= Rl;
            for (var i = Cs(); ; )
              try {
                Os();
                break;
              } catch (s) {
                Ts(e, s);
              }
            if ((la(), (Hl = r), (Il.current = i), Kl === jl))
              throw ((t = Ql), Ms(e, n), nu(e, n), xs(e), t);
            if (null === Gl)
              switch (
                ((i = e.finishedWork = e.current.alternate),
                (e.finishedExpirationTime = n),
                (r = Kl),
                (ql = null),
                r)
              ) {
                case Wl:
                case jl:
                  throw Error(o(345));
                case Vl:
                  iu(e, 2 < n ? 2 : n);
                  break;
                case Yl:
                  if (
                    (nu(e, n),
                    n === (r = e.lastSuspendedTime) &&
                      (e.nextKnownPendingLevel = Fs(i)),
                    1073741823 === Zl && 10 < (i = ns + rs - qi()))
                  ) {
                    if (ts) {
                      var a = e.lastPingedTime;
                      if (0 === a || a >= n) {
                        (e.lastPingedTime = n), Ms(e, n);
                        break;
                      }
                    }
                    if (0 !== (a = bs(e)) && a !== n) break;
                    if (0 !== r && r !== n) {
                      e.lastPingedTime = r;
                      break;
                    }
                    e.timeoutHandle = ar(Ns.bind(null, e), i);
                    break;
                  }
                  Ns(e);
                  break;
                case Ul:
                  if (
                    (nu(e, n),
                    n === (r = e.lastSuspendedTime) &&
                      (e.nextKnownPendingLevel = Fs(i)),
                    ts && (0 === (i = e.lastPingedTime) || i >= n))
                  ) {
                    (e.lastPingedTime = n), Ms(e, n);
                    break;
                  }
                  if (0 !== (i = bs(e)) && i !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  if (
                    (1073741823 !== Xl
                      ? (r = 10 * (1073741821 - Xl) - qi())
                      : 1073741823 === Zl
                      ? (r = 0)
                      : ((r = 10 * (1073741821 - Zl) - 5e3),
                        0 > (r = (i = qi()) - r) && (r = 0),
                        (n = 10 * (1073741821 - n) - i) <
                          (r =
                            (120 > r
                              ? 120
                              : 480 > r
                              ? 480
                              : 1080 > r
                              ? 1080
                              : 1920 > r
                              ? 1920
                              : 3e3 > r
                              ? 3e3
                              : 4320 > r
                              ? 4320
                              : 1960 * Al(r / 1960)) - r) && (r = n)),
                    10 < r)
                  ) {
                    e.timeoutHandle = ar(Ns.bind(null, e), r);
                    break;
                  }
                  Ns(e);
                  break;
                case Bl:
                  if (1073741823 !== Zl && null !== Jl) {
                    a = Zl;
                    var l = Jl;
                    if (
                      (0 >= (r = 0 | l.busyMinDurationMs)
                        ? (r = 0)
                        : ((i = 0 | l.busyDelayMs),
                          (r =
                            (a =
                              qi() -
                              (10 * (1073741821 - a) -
                                (0 | l.timeoutMs || 5e3))) <= i
                              ? 0
                              : i + r - a)),
                      10 < r)
                    ) {
                      nu(e, n), (e.timeoutHandle = ar(Ns.bind(null, e), r));
                      break;
                    }
                  }
                  Ns(e);
                  break;
                default:
                  throw Error(o(329));
              }
            if ((xs(e), e.callbackNode === t)) return _s.bind(null, e);
          }
        }
        return null;
      }
      function ws(e) {
        var t = e.lastExpiredTime;
        if (((t = 0 !== t ? t : 1073741823), e.finishedExpirationTime === t))
          Ns(e);
        else {
          if ((Hl & (Rl | zl)) !== Nl) throw Error(o(327));
          if ((zs(), (e === ql && t === $l) || Ms(e, t), null !== Gl)) {
            var n = Hl;
            Hl |= Rl;
            for (var r = Cs(); ; )
              try {
                Ds();
                break;
              } catch (i) {
                Ts(e, i);
              }
            if ((la(), (Hl = n), (Il.current = r), Kl === jl))
              throw ((n = Ql), Ms(e, t), nu(e, t), xs(e), n);
            if (null !== Gl) throw Error(o(261));
            (e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = t),
              (ql = null),
              Ns(e),
              xs(e);
          }
        }
        return null;
      }
      function ks(e, t) {
        var n = Hl;
        Hl |= 1;
        try {
          return e(t);
        } finally {
          (Hl = n) === Nl && Xi();
        }
      }
      function Ss(e, t) {
        var n = Hl;
        (Hl &= -2), (Hl |= Ll);
        try {
          return e(t);
        } finally {
          (Hl = n) === Nl && Xi();
        }
      }
      function Ms(e, t) {
        (e.finishedWork = null), (e.finishedExpirationTime = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), or(n)), null !== Gl))
          for (n = Gl.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                var i = r.type.childContextTypes;
                null !== i && void 0 !== i && wi();
                break;
              case 3:
                Ha(), ki();
                break;
              case 5:
                Ga(r);
                break;
              case 4:
                Ha();
                break;
              case 13:
              case 19:
                pi($a);
                break;
              case 10:
                ua(r);
            }
            n = n.return;
          }
        (ql = e),
          (Gl = Ks(e.current, null)),
          ($l = t),
          (Kl = Wl),
          (Ql = null),
          (Xl = Zl = 1073741823),
          (Jl = null),
          (es = 0),
          (ts = !1);
      }
      function Ts(e, t) {
        for (;;) {
          try {
            if ((la(), mo(), null === Gl || null === Gl.return))
              return (Kl = jl), (Ql = t), null;
            e: {
              var n = e,
                r = Gl.return,
                i = Gl,
                a = t;
              if (
                ((t = $l),
                (i.effectTag |= 2048),
                (i.firstEffect = i.lastEffect = null),
                null !== a &&
                  "object" === typeof a &&
                  "function" === typeof a.then)
              ) {
                var o = a,
                  l = 0 !== (1 & $a.current),
                  s = r;
                do {
                  var u;
                  if ((u = 13 === s.tag)) {
                    var c = s.memoizedState;
                    if (null !== c) u = null !== c.dehydrated;
                    else {
                      var d = s.memoizedProps;
                      u =
                        void 0 !== d.fallback &&
                        (!0 !== d.unstable_avoidThisFallback || !l);
                    }
                  }
                  if (u) {
                    var f = s.updateQueue;
                    if (null === f) {
                      var h = new Set();
                      h.add(o), (s.updateQueue = h);
                    } else f.add(o);
                    if (0 === (2 & s.mode)) {
                      if (
                        ((s.effectTag |= 64),
                        (i.effectTag &= -2981),
                        1 === i.tag)
                      )
                        if (null === i.alternate) i.tag = 17;
                        else {
                          var p = ma(1073741823, null);
                          (p.tag = 2), ya(i, p);
                        }
                      i.expirationTime = 1073741823;
                      break e;
                    }
                    (a = void 0), (i = t);
                    var g = n.pingCache;
                    if (
                      (null === g
                        ? ((g = n.pingCache = new Pl()),
                          (a = new Set()),
                          g.set(o, a))
                        : void 0 === (a = g.get(o)) &&
                          ((a = new Set()), g.set(o, a)),
                      !a.has(i))
                    ) {
                      a.add(i);
                      var m = Ys.bind(null, n, o, i);
                      o.then(m, m);
                    }
                    (s.effectTag |= 4096), (s.expirationTime = t);
                    break e;
                  }
                  s = s.return;
                } while (null !== s);
                a = Error(
                  (X(i.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                    J(i)
                );
              }
              Kl !== Bl && (Kl = Vl), (a = gl(a, i)), (s = r);
              do {
                switch (s.tag) {
                  case 3:
                    (o = a),
                      (s.effectTag |= 4096),
                      (s.expirationTime = t),
                      ba(s, El(s, o, t));
                    break e;
                  case 1:
                    o = a;
                    var v = s.type,
                      y = s.stateNode;
                    if (
                      0 === (64 & s.effectTag) &&
                      ("function" === typeof v.getDerivedStateFromError ||
                        (null !== y &&
                          "function" === typeof y.componentDidCatch &&
                          (null === ls || !ls.has(y))))
                    ) {
                      (s.effectTag |= 4096),
                        (s.expirationTime = t),
                        ba(s, Dl(s, o, t));
                      break e;
                    }
                }
                s = s.return;
              } while (null !== s);
            }
            Gl = Is(Gl);
          } catch (b) {
            t = b;
            continue;
          }
          break;
        }
      }
      function Cs() {
        var e = Il.current;
        return (Il.current = Io), null === e ? Io : e;
      }
      function Ps(e, t) {
        e < Zl && 2 < e && (Zl = e),
          null !== t && e < Xl && 2 < e && ((Xl = e), (Jl = t));
      }
      function Es(e) {
        e > es && (es = e);
      }
      function Ds() {
        for (; null !== Gl; ) Gl = As(Gl);
      }
      function Os() {
        for (; null !== Gl && !Oi(); ) Gl = As(Gl);
      }
      function As(e) {
        var t = Ol(e.alternate, e, $l);
        return (
          (e.memoizedProps = e.pendingProps),
          null === t && (t = Is(e)),
          (Fl.current = null),
          t
        );
      }
      function Is(e) {
        Gl = e;
        do {
          var t = Gl.alternate;
          if (((e = Gl.return), 0 === (2048 & Gl.effectTag))) {
            e: {
              var n = t,
                r = $l,
                a = (t = Gl).pendingProps;
              switch (t.tag) {
                case 2:
                case 16:
                  break;
                case 15:
                case 0:
                  break;
                case 1:
                  _i(t.type) && wi();
                  break;
                case 3:
                  Ha(),
                    ki(),
                    (a = t.stateNode).pendingContext &&
                      ((a.context = a.pendingContext),
                      (a.pendingContext = null)),
                    (null === n || null === n.child) && Uo(t) && fl(t),
                    rl(t);
                  break;
                case 5:
                  Ga(t), (r = Ua(Ya.current));
                  var l = t.type;
                  if (null !== n && null != t.stateNode)
                    il(n, t, l, a, r), n.ref !== t.ref && (t.effectTag |= 128);
                  else if (a) {
                    var s = Ua(ja.current);
                    if (Uo(t)) {
                      var u = (a = t).stateNode;
                      n = a.type;
                      var c = a.memoizedProps,
                        d = r;
                      switch (
                        ((u[cr] = a), (u[dr] = c), (l = void 0), (r = u), n)
                      ) {
                        case "iframe":
                        case "object":
                        case "embed":
                          Tn("load", r);
                          break;
                        case "video":
                        case "audio":
                          for (u = 0; u < et.length; u++) Tn(et[u], r);
                          break;
                        case "source":
                          Tn("error", r);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          Tn("error", r), Tn("load", r);
                          break;
                        case "form":
                          Tn("reset", r), Tn("submit", r);
                          break;
                        case "details":
                          Tn("toggle", r);
                          break;
                        case "input":
                          Pe(r, c), Tn("invalid", r), Bn(d, "onChange");
                          break;
                        case "select":
                          (r._wrapperState = { wasMultiple: !!c.multiple }),
                            Tn("invalid", r),
                            Bn(d, "onChange");
                          break;
                        case "textarea":
                          Le(r, c), Tn("invalid", r), Bn(d, "onChange");
                      }
                      for (l in (Yn(n, c), (u = null), c))
                        c.hasOwnProperty(l) &&
                          ((s = c[l]),
                          "children" === l
                            ? "string" === typeof s
                              ? r.textContent !== s && (u = ["children", s])
                              : "number" === typeof s &&
                                r.textContent !== "" + s &&
                                (u = ["children", "" + s])
                            : h.hasOwnProperty(l) && null != s && Bn(d, l));
                      switch (n) {
                        case "input":
                          Me(r), Oe(r, c, !0);
                          break;
                        case "textarea":
                          Me(r), ze(r);
                          break;
                        case "select":
                        case "option":
                          break;
                        default:
                          "function" === typeof c.onClick && (r.onclick = Hn);
                      }
                      (l = u), (a.updateQueue = l), (a = null !== l) && fl(t);
                    } else {
                      (n = t),
                        (d = l),
                        (c = a),
                        (u = 9 === r.nodeType ? r : r.ownerDocument),
                        s === We.html && (s = je(d)),
                        s === We.html
                          ? "script" === d
                            ? (((c = u.createElement("div")).innerHTML =
                                "<script></script>"),
                              (u = c.removeChild(c.firstChild)))
                            : "string" === typeof c.is
                            ? (u = u.createElement(d, { is: c.is }))
                            : ((u = u.createElement(d)),
                              "select" === d &&
                                ((d = u),
                                c.multiple
                                  ? (d.multiple = !0)
                                  : c.size && (d.size = c.size)))
                          : (u = u.createElementNS(s, d)),
                        ((c = u)[cr] = n),
                        (c[dr] = a),
                        nl(c, t, !1, !1),
                        (t.stateNode = c);
                      var f = r,
                        p = Un((d = l), (n = a));
                      switch (d) {
                        case "iframe":
                        case "object":
                        case "embed":
                          Tn("load", c), (r = n);
                          break;
                        case "video":
                        case "audio":
                          for (r = 0; r < et.length; r++) Tn(et[r], c);
                          r = n;
                          break;
                        case "source":
                          Tn("error", c), (r = n);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          Tn("error", c), Tn("load", c), (r = n);
                          break;
                        case "form":
                          Tn("reset", c), Tn("submit", c), (r = n);
                          break;
                        case "details":
                          Tn("toggle", c), (r = n);
                          break;
                        case "input":
                          Pe(c, n),
                            (r = Ce(c, n)),
                            Tn("invalid", c),
                            Bn(f, "onChange");
                          break;
                        case "option":
                          r = Ie(c, n);
                          break;
                        case "select":
                          (c._wrapperState = { wasMultiple: !!n.multiple }),
                            (r = i({}, n, { value: void 0 })),
                            Tn("invalid", c),
                            Bn(f, "onChange");
                          break;
                        case "textarea":
                          Le(c, n),
                            (r = Ne(c, n)),
                            Tn("invalid", c),
                            Bn(f, "onChange");
                          break;
                        default:
                          r = n;
                      }
                      Yn(d, r), (u = void 0), (s = d);
                      var g = c,
                        m = r;
                      for (u in m)
                        if (m.hasOwnProperty(u)) {
                          var v = m[u];
                          "style" === u
                            ? jn(g, v)
                            : "dangerouslySetInnerHTML" === u
                            ? null != (v = v ? v.__html : void 0) && Ue(g, v)
                            : "children" === u
                            ? "string" === typeof v
                              ? ("textarea" !== s || "" !== v) && Be(g, v)
                              : "number" === typeof v && Be(g, "" + v)
                            : "suppressContentEditableWarning" !== u &&
                              "suppressHydrationWarning" !== u &&
                              "autoFocus" !== u &&
                              (h.hasOwnProperty(u)
                                ? null != v && Bn(f, u)
                                : null != v && ke(g, u, v, p));
                        }
                      switch (d) {
                        case "input":
                          Me(c), Oe(c, n, !1);
                          break;
                        case "textarea":
                          Me(c), ze(c);
                          break;
                        case "option":
                          null != n.value &&
                            c.setAttribute("value", "" + we(n.value));
                          break;
                        case "select":
                          ((r = c).multiple = !!n.multiple),
                            null != (c = n.value)
                              ? Fe(r, !!n.multiple, c, !1)
                              : null != n.defaultValue &&
                                Fe(r, !!n.multiple, n.defaultValue, !0);
                          break;
                        default:
                          "function" === typeof r.onClick && (c.onclick = Hn);
                      }
                      (a = rr(l, a)) && fl(t);
                    }
                    null !== t.ref && (t.effectTag |= 128);
                  } else if (null === t.stateNode) throw Error(o(166));
                  break;
                case 6:
                  if (n && null != t.stateNode) al(n, t, n.memoizedProps, a);
                  else {
                    if ("string" !== typeof a && null === t.stateNode)
                      throw Error(o(166));
                    (r = Ua(Ya.current)),
                      Ua(ja.current),
                      Uo(t)
                        ? ((l = (a = t).stateNode),
                          (r = a.memoizedProps),
                          (l[cr] = a),
                          (a = l.nodeValue !== r) && fl(t))
                        : ((l = t),
                          ((a = (
                            9 === r.nodeType ? r : r.ownerDocument
                          ).createTextNode(a))[cr] = l),
                          (t.stateNode = a));
                  }
                  break;
                case 11:
                  break;
                case 13:
                  if (
                    (pi($a), (a = t.memoizedState), 0 !== (64 & t.effectTag))
                  ) {
                    t.expirationTime = r;
                    break e;
                  }
                  (a = null !== a),
                    (l = !1),
                    null === n
                      ? void 0 !== t.memoizedProps.fallback && Uo(t)
                      : ((l = null !== (r = n.memoizedState)),
                        a ||
                          null === r ||
                          (null !== (r = n.child.sibling) &&
                            (null !== (c = t.firstEffect)
                              ? ((t.firstEffect = r), (r.nextEffect = c))
                              : ((t.firstEffect = t.lastEffect = r),
                                (r.nextEffect = null)),
                            (r.effectTag = 8)))),
                    a &&
                      !l &&
                      0 !== (2 & t.mode) &&
                      ((null === n &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & $a.current)
                        ? Kl === Wl && (Kl = Yl)
                        : ((Kl !== Wl && Kl !== Yl) || (Kl = Ul),
                          0 !== es && null !== ql && (nu(ql, $l), ru(ql, es)))),
                    (a || l) && (t.effectTag |= 4);
                  break;
                case 7:
                case 8:
                case 12:
                  break;
                case 4:
                  Ha(), rl(t);
                  break;
                case 10:
                  ua(t);
                  break;
                case 9:
                case 14:
                  break;
                case 17:
                  _i(t.type) && wi();
                  break;
                case 19:
                  if ((pi($a), null === (a = t.memoizedState))) break;
                  if (
                    ((l = 0 !== (64 & t.effectTag)), null === (c = a.rendering))
                  ) {
                    if (l) hl(a, !1);
                    else if (
                      Kl !== Wl ||
                      (null !== n && 0 !== (64 & n.effectTag))
                    )
                      for (n = t.child; null !== n; ) {
                        if (null !== (c = Ka(n))) {
                          for (
                            t.effectTag |= 64,
                              hl(a, !1),
                              null !== (l = c.updateQueue) &&
                                ((t.updateQueue = l), (t.effectTag |= 4)),
                              null === a.lastEffect && (t.firstEffect = null),
                              t.lastEffect = a.lastEffect,
                              a = r,
                              l = t.child;
                            null !== l;

                          )
                            (n = a),
                              ((r = l).effectTag &= 2),
                              (r.nextEffect = null),
                              (r.firstEffect = null),
                              (r.lastEffect = null),
                              null === (c = r.alternate)
                                ? ((r.childExpirationTime = 0),
                                  (r.expirationTime = n),
                                  (r.child = null),
                                  (r.memoizedProps = null),
                                  (r.memoizedState = null),
                                  (r.updateQueue = null),
                                  (r.dependencies = null))
                                : ((r.childExpirationTime =
                                    c.childExpirationTime),
                                  (r.expirationTime = c.expirationTime),
                                  (r.child = c.child),
                                  (r.memoizedProps = c.memoizedProps),
                                  (r.memoizedState = c.memoizedState),
                                  (r.updateQueue = c.updateQueue),
                                  (n = c.dependencies),
                                  (r.dependencies =
                                    null === n
                                      ? null
                                      : {
                                          expirationTime: n.expirationTime,
                                          firstContext: n.firstContext,
                                          responders: n.responders,
                                        })),
                              (l = l.sibling);
                          gi($a, (1 & $a.current) | 2), (t = t.child);
                          break e;
                        }
                        n = n.sibling;
                      }
                  } else {
                    if (!l)
                      if (null !== (n = Ka(c))) {
                        if (
                          ((t.effectTag |= 64),
                          (l = !0),
                          null !== (r = n.updateQueue) &&
                            ((t.updateQueue = r), (t.effectTag |= 4)),
                          hl(a, !0),
                          null === a.tail && "hidden" === a.tailMode)
                        ) {
                          null !== (t = t.lastEffect = a.lastEffect) &&
                            (t.nextEffect = null);
                          break;
                        }
                      } else
                        qi() > a.tailExpiration &&
                          1 < r &&
                          ((t.effectTag |= 64),
                          (l = !0),
                          hl(a, !1),
                          (t.expirationTime = t.childExpirationTime = r - 1));
                    a.isBackwards
                      ? ((c.sibling = t.child), (t.child = c))
                      : (null !== (r = a.last)
                          ? (r.sibling = c)
                          : (t.child = c),
                        (a.last = c));
                  }
                  if (null !== a.tail) {
                    0 === a.tailExpiration && (a.tailExpiration = qi() + 500),
                      (r = a.tail),
                      (a.rendering = r),
                      (a.tail = r.sibling),
                      (a.lastEffect = t.lastEffect),
                      (r.sibling = null),
                      (a = $a.current),
                      gi($a, (a = l ? (1 & a) | 2 : 1 & a)),
                      (t = r);
                    break e;
                  }
                  break;
                case 20:
                case 21:
                  break;
                default:
                  throw Error(o(156, t.tag));
              }
              t = null;
            }
            if (((a = Gl), 1 === $l || 1 !== a.childExpirationTime)) {
              for (l = 0, r = a.child; null !== r; )
                (n = r.expirationTime) > l && (l = n),
                  (c = r.childExpirationTime) > l && (l = c),
                  (r = r.sibling);
              a.childExpirationTime = l;
            }
            if (null !== t) return t;
            null !== e &&
              0 === (2048 & e.effectTag) &&
              (null === e.firstEffect && (e.firstEffect = Gl.firstEffect),
              null !== Gl.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = Gl.firstEffect),
                (e.lastEffect = Gl.lastEffect)),
              1 < Gl.effectTag &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = Gl)
                  : (e.firstEffect = Gl),
                (e.lastEffect = Gl)));
          } else {
            if (null !== (t = pl(Gl))) return (t.effectTag &= 2047), t;
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
          }
          if (null !== (t = Gl.sibling)) return t;
          Gl = e;
        } while (null !== Gl);
        return Kl === Wl && (Kl = Bl), null;
      }
      function Fs(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e;
      }
      function Ns(e) {
        var t = Gi();
        return Ki(99, Ls.bind(null, e, t)), null;
      }
      function Ls(e, t) {
        if ((zs(), (Hl & (Rl | zl)) !== Nl)) throw Error(o(327));
        var n = e.finishedWork,
          r = e.finishedExpirationTime;
        if (null === n) return null;
        if (
          ((e.finishedWork = null),
          (e.finishedExpirationTime = 0),
          n === e.current)
        )
          throw Error(o(177));
        (e.callbackNode = null),
          (e.callbackExpirationTime = 0),
          (e.callbackPriority = 90),
          (e.nextKnownPendingLevel = 0);
        var i = Fs(n);
        if (
          ((e.firstPendingTime = i),
          r <= e.lastSuspendedTime
            ? (e.firstSuspendedTime =
                e.lastSuspendedTime =
                e.nextKnownPendingLevel =
                  0)
            : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
          r <= e.lastPingedTime && (e.lastPingedTime = 0),
          r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
          e === ql && ((Gl = ql = null), ($l = 0)),
          1 < n.effectTag
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (i = n.firstEffect))
              : (i = n)
            : (i = n.firstEffect),
          null !== i)
        ) {
          var a = Hl;
          (Hl |= zl), (Fl.current = null), (tr = Mn);
          var l = Kn();
          if (Qn(l)) {
            if ("selectionStart" in l)
              var s = { start: l.selectionStart, end: l.selectionEnd };
            else
              e: {
                var u =
                  (s = ((s = l.ownerDocument) && s.defaultView) || window)
                    .getSelection && s.getSelection();
                if (u && 0 !== u.rangeCount) {
                  s = u.anchorNode;
                  var c = u.anchorOffset,
                    d = u.focusNode;
                  u = u.focusOffset;
                  try {
                    s.nodeType, d.nodeType;
                  } catch (N) {
                    s = null;
                    break e;
                  }
                  var f = 0,
                    h = -1,
                    p = -1,
                    g = 0,
                    m = 0,
                    v = l,
                    y = null;
                  t: for (;;) {
                    for (
                      var b;
                      v !== s || (0 !== c && 3 !== v.nodeType) || (h = f + c),
                        v !== d || (0 !== u && 3 !== v.nodeType) || (p = f + u),
                        3 === v.nodeType && (f += v.nodeValue.length),
                        null !== (b = v.firstChild);

                    )
                      (y = v), (v = b);
                    for (;;) {
                      if (v === l) break t;
                      if (
                        (y === s && ++g === c && (h = f),
                        y === d && ++m === u && (p = f),
                        null !== (b = v.nextSibling))
                      )
                        break;
                      y = (v = y).parentNode;
                    }
                    v = b;
                  }
                  s = -1 === h || -1 === p ? null : { start: h, end: p };
                } else s = null;
              }
            s = s || { start: 0, end: 0 };
          } else s = null;
          (nr = { focusedElem: l, selectionRange: s }), (Mn = !1), (is = i);
          do {
            try {
              Rs();
            } catch (N) {
              if (null === is) throw Error(o(330));
              Vs(is, N), (is = is.nextEffect);
            }
          } while (null !== is);
          is = i;
          do {
            try {
              for (l = e, s = t; null !== is; ) {
                var x = is.effectTag;
                if ((16 & x && Be(is.stateNode, ""), 128 & x)) {
                  var _ = is.alternate;
                  if (null !== _) {
                    var w = _.ref;
                    null !== w &&
                      ("function" === typeof w ? w(null) : (w.current = null));
                  }
                }
                switch (1038 & x) {
                  case 2:
                    Sl(is), (is.effectTag &= -3);
                    break;
                  case 6:
                    Sl(is), (is.effectTag &= -3), Tl(is.alternate, is);
                    break;
                  case 1024:
                    is.effectTag &= -1025;
                    break;
                  case 1028:
                    (is.effectTag &= -1025), Tl(is.alternate, is);
                    break;
                  case 4:
                    Tl(is.alternate, is);
                    break;
                  case 8:
                    Ml(l, (c = is), s), wl(c);
                }
                is = is.nextEffect;
              }
            } catch (N) {
              if (null === is) throw Error(o(330));
              Vs(is, N), (is = is.nextEffect);
            }
          } while (null !== is);
          if (
            ((w = nr),
            (_ = Kn()),
            (x = w.focusedElem),
            (s = w.selectionRange),
            _ !== x &&
              x &&
              x.ownerDocument &&
              (function e(t, n) {
                return (
                  !(!t || !n) &&
                  (t === n ||
                    ((!t || 3 !== t.nodeType) &&
                      (n && 3 === n.nodeType
                        ? e(t, n.parentNode)
                        : "contains" in t
                        ? t.contains(n)
                        : !!t.compareDocumentPosition &&
                          !!(16 & t.compareDocumentPosition(n)))))
                );
              })(x.ownerDocument.documentElement, x))
          ) {
            null !== s &&
              Qn(x) &&
              ((_ = s.start),
              void 0 === (w = s.end) && (w = _),
              "selectionStart" in x
                ? ((x.selectionStart = _),
                  (x.selectionEnd = Math.min(w, x.value.length)))
                : (w =
                    ((_ = x.ownerDocument || document) && _.defaultView) ||
                    window).getSelection &&
                  ((w = w.getSelection()),
                  (c = x.textContent.length),
                  (l = Math.min(s.start, c)),
                  (s = void 0 === s.end ? l : Math.min(s.end, c)),
                  !w.extend && l > s && ((c = s), (s = l), (l = c)),
                  (c = $n(x, l)),
                  (d = $n(x, s)),
                  c &&
                    d &&
                    (1 !== w.rangeCount ||
                      w.anchorNode !== c.node ||
                      w.anchorOffset !== c.offset ||
                      w.focusNode !== d.node ||
                      w.focusOffset !== d.offset) &&
                    ((_ = _.createRange()).setStart(c.node, c.offset),
                    w.removeAllRanges(),
                    l > s
                      ? (w.addRange(_), w.extend(d.node, d.offset))
                      : (_.setEnd(d.node, d.offset), w.addRange(_))))),
              (_ = []);
            for (w = x; (w = w.parentNode); )
              1 === w.nodeType &&
                _.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              "function" === typeof x.focus && x.focus(), x = 0;
              x < _.length;
              x++
            )
              ((w = _[x]).element.scrollLeft = w.left),
                (w.element.scrollTop = w.top);
          }
          (nr = null), (Mn = !!tr), (tr = null), (e.current = n), (is = i);
          do {
            try {
              for (x = r; null !== is; ) {
                var k = is.effectTag;
                if (36 & k) {
                  var S = is.alternate;
                  switch (((w = x), (_ = is).tag)) {
                    case 0:
                    case 11:
                    case 15:
                      xl(16, 32, _);
                      break;
                    case 1:
                      var M = _.stateNode;
                      if (4 & _.effectTag)
                        if (null === S) M.componentDidMount();
                        else {
                          var T =
                            _.elementType === _.type
                              ? S.memoizedProps
                              : na(_.type, S.memoizedProps);
                          M.componentDidUpdate(
                            T,
                            S.memoizedState,
                            M.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var C = _.updateQueue;
                      null !== C && ka(0, C, M);
                      break;
                    case 3:
                      var P = _.updateQueue;
                      if (null !== P) {
                        if (((l = null), null !== _.child))
                          switch (_.child.tag) {
                            case 5:
                              l = _.child.stateNode;
                              break;
                            case 1:
                              l = _.child.stateNode;
                          }
                        ka(0, P, l);
                      }
                      break;
                    case 5:
                      var E = _.stateNode;
                      null === S &&
                        4 & _.effectTag &&
                        rr(_.type, _.memoizedProps) &&
                        E.focus();
                      break;
                    case 6:
                    case 4:
                    case 12:
                      break;
                    case 13:
                      if (null === _.memoizedState) {
                        var D = _.alternate;
                        if (null !== D) {
                          var O = D.memoizedState;
                          if (null !== O) {
                            var A = O.dehydrated;
                            null !== A && Tt(A);
                          }
                        }
                      }
                      break;
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                      break;
                    default:
                      throw Error(o(163));
                  }
                }
                if (128 & k) {
                  _ = void 0;
                  var I = is.ref;
                  if (null !== I) {
                    var F = is.stateNode;
                    switch (is.tag) {
                      case 5:
                        _ = F;
                        break;
                      default:
                        _ = F;
                    }
                    "function" === typeof I ? I(_) : (I.current = _);
                  }
                }
                is = is.nextEffect;
              }
            } catch (N) {
              if (null === is) throw Error(o(330));
              Vs(is, N), (is = is.nextEffect);
            }
          } while (null !== is);
          (is = null), Vi(), (Hl = a);
        } else e.current = n;
        if (ss) (ss = !1), (us = e), (cs = t);
        else
          for (is = i; null !== is; )
            (t = is.nextEffect), (is.nextEffect = null), (is = t);
        if (
          (0 === (t = e.firstPendingTime) && (ls = null),
          1073741823 === t
            ? e === hs
              ? fs++
              : ((fs = 0), (hs = e))
            : (fs = 0),
          "function" === typeof Bs && Bs(n.stateNode, r),
          xs(e),
          as)
        )
          throw ((as = !1), (e = os), (os = null), e);
        return (Hl & Ll) !== Nl ? null : (Xi(), null);
      }
      function Rs() {
        for (; null !== is; ) {
          var e = is.effectTag;
          0 !== (256 & e) && bl(is.alternate, is),
            0 === (512 & e) ||
              ss ||
              ((ss = !0),
              Qi(97, function () {
                return zs(), null;
              })),
            (is = is.nextEffect);
        }
      }
      function zs() {
        if (90 !== cs) {
          var e = 97 < cs ? 97 : cs;
          return (cs = 90), Ki(e, Ws);
        }
      }
      function Ws() {
        if (null === us) return !1;
        var e = us;
        if (((us = null), (Hl & (Rl | zl)) !== Nl)) throw Error(o(331));
        var t = Hl;
        for (Hl |= zl, e = e.current.firstEffect; null !== e; ) {
          try {
            var n = e;
            if (0 !== (512 & n.effectTag))
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  xl(128, 0, n), xl(0, 64, n);
              }
          } catch (r) {
            if (null === e) throw Error(o(330));
            Vs(e, r);
          }
          (n = e.nextEffect), (e.nextEffect = null), (e = n);
        }
        return (Hl = t), Xi(), !0;
      }
      function js(e, t, n) {
        ya(e, (t = El(e, (t = gl(n, t)), 1073741823))),
          null !== (e = ys(e, 1073741823)) && xs(e);
      }
      function Vs(e, t) {
        if (3 === e.tag) js(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              js(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" === typeof n.type.getDerivedStateFromError ||
                ("function" === typeof r.componentDidCatch &&
                  (null === ls || !ls.has(r)))
              ) {
                ya(n, (e = Dl(n, (e = gl(t, e)), 1073741823))),
                  null !== (n = ys(n, 1073741823)) && xs(n);
                break;
              }
            }
            n = n.return;
          }
      }
      function Ys(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          ql === e && $l === n
            ? Kl === Ul || (Kl === Yl && 1073741823 === Zl && qi() - ns < rs)
              ? Ms(e, $l)
              : (ts = !0)
            : tu(e, n) &&
              ((0 !== (t = e.lastPingedTime) && t < n) ||
                ((e.lastPingedTime = n),
                e.finishedExpirationTime === n &&
                  ((e.finishedExpirationTime = 0), (e.finishedWork = null)),
                xs(e)));
      }
      function Us(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) && (t = ms((t = gs()), e, null)),
          null !== (e = ys(e, t)) && xs(e);
      }
      Ol = function (e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
          var i = t.pendingProps;
          if (e.memoizedProps !== i || yi.current) qo = !0;
          else {
            if (r < n) {
              switch (((qo = !1), t.tag)) {
                case 3:
                  tl(t), Bo();
                  break;
                case 5:
                  if ((qa(t), 4 & t.mode && 1 !== n && i.hidden))
                    return (t.expirationTime = t.childExpirationTime = 1), null;
                  break;
                case 1:
                  _i(t.type) && Ti(t);
                  break;
                case 4:
                  Ba(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  sa(t, t.memoizedProps.value);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 !== (r = t.child.childExpirationTime) && r >= n
                      ? ll(e, t, n)
                      : (gi($a, 1 & $a.current),
                        null !== (t = dl(e, t, n)) ? t.sibling : null);
                  gi($a, 1 & $a.current);
                  break;
                case 19:
                  if (
                    ((r = t.childExpirationTime >= n), 0 !== (64 & e.effectTag))
                  ) {
                    if (r) return cl(e, t, n);
                    t.effectTag |= 64;
                  }
                  if (
                    (null !== (i = t.memoizedState) &&
                      ((i.rendering = null), (i.tail = null)),
                    gi($a, $a.current),
                    !r)
                  )
                    return null;
              }
              return dl(e, t, n);
            }
            qo = !1;
          }
        } else qo = !1;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (i = xi(t, vi.current)),
              da(t, n),
              (i = go(null, t, r, e, i, n)),
              (t.effectTag |= 1),
              "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof)
            ) {
              if (((t.tag = 1), mo(), _i(r))) {
                var a = !0;
                Ti(t);
              } else a = !1;
              t.memoizedState =
                null !== i.state && void 0 !== i.state ? i.state : null;
              var l = r.getDerivedStateFromProps;
              "function" === typeof l && Ca(t, r, l, e),
                (i.updater = Pa),
                (t.stateNode = i),
                (i._reactInternalFiber = t),
                Aa(t, r, e, n),
                (t = el(null, t, r, !0, a, n));
            } else (t.tag = 0), Go(null, t, i, n), (t = t.child);
            return t;
          case 16:
            if (
              ((i = t.elementType),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps),
              (function (e) {
                if (-1 === e._status) {
                  e._status = 0;
                  var t = e._ctor;
                  (t = t()),
                    (e._result = t),
                    t.then(
                      function (t) {
                        0 === e._status &&
                          ((t = t.default), (e._status = 1), (e._result = t));
                      },
                      function (t) {
                        0 === e._status && ((e._status = 2), (e._result = t));
                      }
                    );
                }
              })(i),
              1 !== i._status)
            )
              throw i._result;
            switch (
              ((i = i._result),
              (t.type = i),
              (a = t.tag =
                (function (e) {
                  if ("function" === typeof e) return $s(e) ? 1 : 0;
                  if (void 0 !== e && null !== e) {
                    if ((e = e.$$typeof) === H) return 11;
                    if (e === $) return 14;
                  }
                  return 2;
                })(i)),
              (e = na(i, e)),
              a)
            ) {
              case 0:
                t = Xo(null, t, i, e, n);
                break;
              case 1:
                t = Jo(null, t, i, e, n);
                break;
              case 11:
                t = $o(null, t, i, e, n);
                break;
              case 14:
                t = Ko(null, t, i, na(i.type, e), r, n);
                break;
              default:
                throw Error(o(306, i, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (i = t.pendingProps),
              Xo(e, t, r, (i = t.elementType === r ? i : na(r, i)), n)
            );
          case 1:
            return (
              (r = t.type),
              (i = t.pendingProps),
              Jo(e, t, r, (i = t.elementType === r ? i : na(r, i)), n)
            );
          case 3:
            if ((tl(t), null === (r = t.updateQueue))) throw Error(o(282));
            if (
              ((i = null !== (i = t.memoizedState) ? i.element : null),
              wa(t, r, t.pendingProps, null, n),
              (r = t.memoizedState.element) === i)
            )
              Bo(), (t = dl(e, t, n));
            else {
              if (
                ((i = t.stateNode.hydrate) &&
                  ((Ro = lr(t.stateNode.containerInfo.firstChild)),
                  (Lo = t),
                  (i = zo = !0)),
                i)
              )
                for (n = za(t, null, r, n), t.child = n; n; )
                  (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
              else Go(e, t, r, n), Bo();
              t = t.child;
            }
            return t;
          case 5:
            return (
              qa(t),
              null === e && Vo(t),
              (r = t.type),
              (i = t.pendingProps),
              (a = null !== e ? e.memoizedProps : null),
              (l = i.children),
              ir(r, i)
                ? (l = null)
                : null !== a && ir(r, a) && (t.effectTag |= 16),
              Zo(e, t),
              4 & t.mode && 1 !== n && i.hidden
                ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                : (Go(e, t, l, n), (t = t.child)),
              t
            );
          case 6:
            return null === e && Vo(t), null;
          case 13:
            return ll(e, t, n);
          case 4:
            return (
              Ba(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Ra(t, null, r, n)) : Go(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (i = t.pendingProps),
              $o(e, t, r, (i = t.elementType === r ? i : na(r, i)), n)
            );
          case 7:
            return Go(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Go(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (
                ((r = t.type._context),
                (i = t.pendingProps),
                (l = t.memoizedProps),
                sa(t, (a = i.value)),
                null !== l)
              ) {
                var s = l.value;
                if (
                  0 ===
                  (a = ti(s, a)
                    ? 0
                    : 0 |
                      ("function" === typeof r._calculateChangedBits
                        ? r._calculateChangedBits(s, a)
                        : 1073741823))
                ) {
                  if (l.children === i.children && !yi.current) {
                    t = dl(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                    var u = s.dependencies;
                    if (null !== u) {
                      l = s.child;
                      for (var c = u.firstContext; null !== c; ) {
                        if (c.context === r && 0 !== (c.observedBits & a)) {
                          1 === s.tag &&
                            (((c = ma(n, null)).tag = 2), ya(s, c)),
                            s.expirationTime < n && (s.expirationTime = n),
                            null !== (c = s.alternate) &&
                              c.expirationTime < n &&
                              (c.expirationTime = n),
                            ca(s.return, n),
                            u.expirationTime < n && (u.expirationTime = n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === s.tag && s.type === t.type ? null : s.child;
                    if (null !== l) l.return = s;
                    else
                      for (l = s; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (s = l.sibling)) {
                          (s.return = l.return), (l = s);
                          break;
                        }
                        l = l.return;
                      }
                    s = l;
                  }
              }
              Go(e, t, i.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (i = t.type),
              (r = (a = t.pendingProps).children),
              da(t, n),
              (r = r((i = fa(i, a.unstable_observedBits)))),
              (t.effectTag |= 1),
              Go(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (a = na((i = t.type), t.pendingProps)),
              Ko(e, t, i, (a = na(i.type, a)), r, n)
            );
          case 15:
            return Qo(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : na(r, i)),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (t.tag = 1),
              _i(r) ? ((e = !0), Ti(t)) : (e = !1),
              da(t, n),
              Da(t, r, i),
              Aa(t, r, i, n),
              el(null, t, r, !0, e, n)
            );
          case 19:
            return cl(e, t, n);
        }
        throw Error(o(156, t.tag));
      };
      var Bs = null,
        Hs = null;
      function qs(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function Gs(e, t, n, r) {
        return new qs(e, t, n, r);
      }
      function $s(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Ks(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Gs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.effectTag = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childExpirationTime = e.childExpirationTime),
          (n.expirationTime = e.expirationTime),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : {
                  expirationTime: t.expirationTime,
                  firstContext: t.firstContext,
                  responders: t.responders,
                }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Qs(e, t, n, r, i, a) {
        var l = 2;
        if (((r = e), "function" === typeof e)) $s(e) && (l = 1);
        else if ("string" === typeof e) l = 5;
        else
          e: switch (e) {
            case W:
              return Zs(n.children, i, a, t);
            case B:
              (l = 8), (i |= 7);
              break;
            case j:
              (l = 8), (i |= 1);
              break;
            case V:
              return (
                ((e = Gs(12, n, t, 8 | i)).elementType = V),
                (e.type = V),
                (e.expirationTime = a),
                e
              );
            case q:
              return (
                ((e = Gs(13, n, t, i)).type = q),
                (e.elementType = q),
                (e.expirationTime = a),
                e
              );
            case G:
              return (
                ((e = Gs(19, n, t, i)).elementType = G),
                (e.expirationTime = a),
                e
              );
            default:
              if ("object" === typeof e && null !== e)
                switch (e.$$typeof) {
                  case Y:
                    l = 10;
                    break e;
                  case U:
                    l = 9;
                    break e;
                  case H:
                    l = 11;
                    break e;
                  case $:
                    l = 14;
                    break e;
                  case K:
                    (l = 16), (r = null);
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Gs(l, n, t, i)).elementType = e),
          (t.type = r),
          (t.expirationTime = a),
          t
        );
      }
      function Zs(e, t, n, r) {
        return ((e = Gs(7, e, r, t)).expirationTime = n), e;
      }
      function Xs(e, t, n) {
        return ((e = Gs(6, e, null, t)).expirationTime = n), e;
      }
      function Js(e, t, n) {
        return (
          ((t = Gs(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).expirationTime = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function eu(e, t, n) {
        (this.tag = t),
          (this.current = null),
          (this.containerInfo = e),
          (this.pingCache = this.pendingChildren = null),
          (this.finishedExpirationTime = 0),
          (this.finishedWork = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 90),
          (this.lastExpiredTime =
            this.lastPingedTime =
            this.nextKnownPendingLevel =
            this.lastSuspendedTime =
            this.firstSuspendedTime =
            this.firstPendingTime =
              0);
      }
      function tu(e, t) {
        var n = e.firstSuspendedTime;
        return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
      }
      function nu(e, t) {
        var n = e.firstSuspendedTime,
          r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t),
          (r > t || 0 === n) && (e.lastSuspendedTime = t),
          t <= e.lastPingedTime && (e.lastPingedTime = 0),
          t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
      }
      function ru(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n &&
          (t >= n
            ? (e.firstSuspendedTime =
                e.lastSuspendedTime =
                e.nextKnownPendingLevel =
                  0)
            : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
          t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
      }
      function iu(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t);
      }
      function au(e, t, n, r) {
        var i = t.current,
          a = gs(),
          l = Ma.suspense;
        a = ms(a, i, l);
        e: if (n) {
          t: {
            if (tt((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
              throw Error(o(170));
            var s = n;
            do {
              switch (s.tag) {
                case 3:
                  s = s.stateNode.context;
                  break t;
                case 1:
                  if (_i(s.type)) {
                    s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              s = s.return;
            } while (null !== s);
            throw Error(o(171));
          }
          if (1 === n.tag) {
            var u = n.type;
            if (_i(u)) {
              n = Mi(n, u, s);
              break e;
            }
          }
          n = s;
        } else n = mi;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = ma(a, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          ya(i, t),
          vs(i, a),
          a
        );
      }
      function ou(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function lu(e, t) {
        null !== (e = e.memoizedState) &&
          null !== e.dehydrated &&
          e.retryTime < t &&
          (e.retryTime = t);
      }
      function su(e, t) {
        lu(e, t), (e = e.alternate) && lu(e, t);
      }
      function uu(e, t, n) {
        var r = new eu(e, t, (n = null != n && !0 === n.hydrate)),
          i = Gs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        (r.current = i),
          (i.stateNode = r),
          (e[fr] = r.current),
          n &&
            0 !== t &&
            (function (e) {
              var t = Nn(e);
              mt.forEach(function (n) {
                Ln(n, e, t);
              }),
                vt.forEach(function (n) {
                  Ln(n, e, t);
                });
            })(9 === e.nodeType ? e : e.ownerDocument),
          (this._internalRoot = r);
      }
      function cu(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function du(e, t, n, r, i) {
        var a = n._reactRootContainer;
        if (a) {
          var o = a._internalRoot;
          if ("function" === typeof i) {
            var l = i;
            i = function () {
              var e = ou(o);
              l.call(e);
            };
          }
          au(t, o, e, i);
        } else {
          if (
            ((a = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new uu(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
            (o = a._internalRoot),
            "function" === typeof i)
          ) {
            var s = i;
            i = function () {
              var e = ou(o);
              s.call(e);
            };
          }
          Ss(function () {
            au(t, o, e, i);
          });
        }
        return ou(o);
      }
      function fu(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!cu(t)) throw Error(o(200));
        return (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: z,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n);
      }
      (at = function (e) {
        if (13 === e.tag) {
          var t = ta(gs(), 150, 100);
          vs(e, t), su(e, t);
        }
      }),
        (ot = function (e) {
          if (13 === e.tag) {
            gs();
            var t = ea++;
            vs(e, t), su(e, t);
          }
        }),
        (lt = function (e) {
          if (13 === e.tag) {
            var t = gs();
            vs(e, (t = ms(t, e, null))), su(e, t);
          }
        }),
        (te = function (e, t, n) {
          switch (t) {
            case "input":
              if ((De(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var i = mr(r);
                    if (!i) throw Error(o(90));
                    Te(r), De(r, i);
                  }
                }
              }
              break;
            case "textarea":
              Re(e, n);
              break;
            case "select":
              null != (t = n.value) && Fe(e, !!n.multiple, t, !1);
          }
        }),
        (uu.prototype.render = function (e, t) {
          au(e, this._internalRoot, null, void 0 === t ? null : t);
        }),
        (uu.prototype.unmount = function (e) {
          au(null, this._internalRoot, null, void 0 === e ? null : e);
        }),
        (le = ks),
        (se = function (e, t, n, r) {
          var i = Hl;
          Hl |= 4;
          try {
            return Ki(98, e.bind(null, t, n, r));
          } finally {
            (Hl = i) === Nl && Xi();
          }
        }),
        (ue = function () {
          (Hl & (1 | Rl | zl)) === Nl &&
            ((function () {
              if (null !== ds) {
                var e = ds;
                (ds = null),
                  e.forEach(function (e, t) {
                    iu(t, e), xs(t);
                  }),
                  Xi();
              }
            })(),
            zs());
        }),
        (ce = function (e, t) {
          var n = Hl;
          Hl |= 2;
          try {
            return e(t);
          } finally {
            (Hl = n) === Nl && Xi();
          }
        });
      var hu = {
        createPortal: fu,
        findDOMNode: function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternalFiber;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw Error(o(268, Object.keys(e)));
          }
          return (e = null === (e = it(t)) ? null : e.stateNode);
        },
        hydrate: function (e, t, n) {
          if (!cu(t)) throw Error(o(200));
          return du(null, e, t, !0, n);
        },
        render: function (e, t, n) {
          if (!cu(t)) throw Error(o(200));
          return du(null, e, t, !1, n);
        },
        unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
          if (!cu(n)) throw Error(o(200));
          if (null == e || void 0 === e._reactInternalFiber) throw Error(o(38));
          return du(e, t, n, !1, r);
        },
        unmountComponentAtNode: function (e) {
          if (!cu(e)) throw Error(o(40));
          return (
            !!e._reactRootContainer &&
            (Ss(function () {
              du(null, null, e, !1, function () {
                e._reactRootContainer = null;
              });
            }),
            !0)
          );
        },
        unstable_createPortal: function () {
          return fu.apply(void 0, arguments);
        },
        unstable_batchedUpdates: ks,
        flushSync: function (e, t) {
          if ((Hl & (Rl | zl)) !== Nl) throw Error(o(187));
          var n = Hl;
          Hl |= 1;
          try {
            return Ki(99, e.bind(null, t));
          } finally {
            (Hl = n), Xi();
          }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          Events: [
            pr,
            gr,
            mr,
            A.injectEventPluginsByName,
            f,
            It,
            function (e) {
              P(e, At);
            },
            ae,
            oe,
            On,
            O,
            zs,
            { current: !1 },
          ],
        },
      };
      !(function (e) {
        var t = e.findFiberByHostInstance;
        (function (e) {
          if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) return !0;
          try {
            var n = t.inject(e);
            (Bs = function (e) {
              try {
                t.onCommitFiberRoot(
                  n,
                  e,
                  void 0,
                  64 === (64 & e.current.effectTag)
                );
              } catch (r) {}
            }),
              (Hs = function (e) {
                try {
                  t.onCommitFiberUnmount(n, e);
                } catch (r) {}
              });
          } catch (r) {}
        })(
          i({}, e, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: F.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = it(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance: function (e) {
              return t ? t(e) : null;
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          })
        );
      })({
        findFiberByHostInstance: hr,
        bundleType: 0,
        version: "16.11.0",
        rendererPackageName: "react-dom",
      });
      var pu = { default: hu },
        gu = (pu && hu) || pu;
      e.exports = gu.default || gu;
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(54);
    },
    function (e, t, n) {
      "use strict";
      var r, i, a, o, l;
      if (
        (Object.defineProperty(t, "__esModule", { value: !0 }),
        "undefined" === typeof window || "function" !== typeof MessageChannel)
      ) {
        var s = null,
          u = null,
          c = function e() {
            if (null !== s)
              try {
                var n = t.unstable_now();
                s(!0, n), (s = null);
              } catch (b) {
                throw (setTimeout(e, 0), b);
              }
          },
          d = Date.now();
        (t.unstable_now = function () {
          return Date.now() - d;
        }),
          (r = function (e) {
            null !== s ? setTimeout(r, 0, e) : ((s = e), setTimeout(c, 0));
          }),
          (i = function (e, t) {
            u = setTimeout(e, t);
          }),
          (a = function () {
            clearTimeout(u);
          }),
          (o = function () {
            return !1;
          }),
          (l = t.unstable_forceFrameRate = function () {});
      } else {
        var f = window.performance,
          h = window.Date,
          p = window.setTimeout,
          g = window.clearTimeout,
          m = window.requestAnimationFrame,
          v = window.cancelAnimationFrame;
        if (
          ("undefined" !== typeof console &&
            ("function" !== typeof m &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ),
            "function" !== typeof v &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              )),
          "object" === typeof f && "function" === typeof f.now)
        )
          t.unstable_now = function () {
            return f.now();
          };
        else {
          var y = h.now();
          t.unstable_now = function () {
            return h.now() - y;
          };
        }
        var x = !1,
          _ = null,
          w = -1,
          k = 5,
          S = 0;
        (o = function () {
          return t.unstable_now() >= S;
        }),
          (l = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
                )
              : (k = 0 < e ? Math.floor(1e3 / e) : 33.33);
          });
        var M = new MessageChannel(),
          T = M.port2;
        (M.port1.onmessage = function () {
          if (null !== _) {
            var e = t.unstable_now();
            S = e + k;
            try {
              _(!0, e) ? T.postMessage(null) : ((x = !1), (_ = null));
            } catch (b) {
              throw (T.postMessage(null), b);
            }
          } else x = !1;
        }),
          (r = function (e) {
            (_ = e), x || ((x = !0), T.postMessage(null));
          }),
          (i = function (e, n) {
            w = p(function () {
              e(t.unstable_now());
            }, n);
          }),
          (a = function () {
            g(w), (w = -1);
          });
      }
      function C(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = Math.floor((n - 1) / 2),
            i = e[r];
          if (!(void 0 !== i && 0 < D(i, t))) break e;
          (e[r] = t), (e[n] = i), (n = r);
        }
      }
      function P(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function E(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length; r < i; ) {
              var a = 2 * (r + 1) - 1,
                o = e[a],
                l = a + 1,
                s = e[l];
              if (void 0 !== o && 0 > D(o, n))
                void 0 !== s && 0 > D(s, o)
                  ? ((e[r] = s), (e[l] = n), (r = l))
                  : ((e[r] = o), (e[a] = n), (r = a));
              else {
                if (!(void 0 !== s && 0 > D(s, n))) break e;
                (e[r] = s), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }
      function D(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var O = [],
        A = [],
        I = 1,
        F = null,
        N = 3,
        L = !1,
        R = !1,
        z = !1;
      function W(e) {
        for (var t = P(A); null !== t; ) {
          if (null === t.callback) E(A);
          else {
            if (!(t.startTime <= e)) break;
            E(A), (t.sortIndex = t.expirationTime), C(O, t);
          }
          t = P(A);
        }
      }
      function j(e) {
        if (((z = !1), W(e), !R))
          if (null !== P(O)) (R = !0), r(V);
          else {
            var t = P(A);
            null !== t && i(j, t.startTime - e);
          }
      }
      function V(e, n) {
        (R = !1), z && ((z = !1), a()), (L = !0);
        var r = N;
        try {
          for (
            W(n), F = P(O);
            null !== F && (!(F.expirationTime > n) || (e && !o()));

          ) {
            var l = F.callback;
            if (null !== l) {
              (F.callback = null), (N = F.priorityLevel);
              var s = l(F.expirationTime <= n);
              (n = t.unstable_now()),
                "function" === typeof s ? (F.callback = s) : F === P(O) && E(O),
                W(n);
            } else E(O);
            F = P(O);
          }
          if (null !== F) var u = !0;
          else {
            var c = P(A);
            null !== c && i(j, c.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (F = null), (N = r), (L = !1);
        }
      }
      function Y(e) {
        switch (e) {
          case 1:
            return -1;
          case 2:
            return 250;
          case 5:
            return 1073741823;
          case 4:
            return 1e4;
          default:
            return 5e3;
        }
      }
      var U = l;
      (t.unstable_ImmediatePriority = 1),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_NormalPriority = 3),
        (t.unstable_IdlePriority = 5),
        (t.unstable_LowPriority = 4),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = N;
          N = e;
          try {
            return t();
          } finally {
            N = n;
          }
        }),
        (t.unstable_next = function (e) {
          switch (N) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = N;
          }
          var n = N;
          N = t;
          try {
            return e();
          } finally {
            N = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, o) {
          var l = t.unstable_now();
          if ("object" === typeof o && null !== o) {
            var s = o.delay;
            (s = "number" === typeof s && 0 < s ? l + s : l),
              (o = "number" === typeof o.timeout ? o.timeout : Y(e));
          } else (o = Y(e)), (s = l);
          return (
            (e = {
              id: I++,
              callback: n,
              priorityLevel: e,
              startTime: s,
              expirationTime: (o = s + o),
              sortIndex: -1,
            }),
            s > l
              ? ((e.sortIndex = s),
                C(A, e),
                null === P(O) &&
                  e === P(A) &&
                  (z ? a() : (z = !0), i(j, s - l)))
              : ((e.sortIndex = o), C(O, e), R || L || ((R = !0), r(V))),
            e
          );
        }),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = N;
          return function () {
            var n = N;
            N = t;
            try {
              return e.apply(this, arguments);
            } finally {
              N = n;
            }
          };
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return N;
        }),
        (t.unstable_shouldYield = function () {
          var e = t.unstable_now();
          W(e);
          var n = P(O);
          return (
            (n !== F &&
              null !== F &&
              null !== n &&
              null !== n.callback &&
              n.startTime <= e &&
              n.expirationTime < F.expirationTime) ||
            o()
          );
        }),
        (t.unstable_requestPaint = U),
        (t.unstable_continueExecution = function () {
          R || L || ((R = !0), r(V));
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_getFirstCallbackNode = function () {
          return P(O);
        }),
        (t.unstable_Profiling = null);
    },
    ,
    function (e, t, n) {
      var r,
        i,
        a = n(27),
        o = n(28),
        l = 0,
        s = 0;
      e.exports = function (e, t, n) {
        var u = (t && n) || 0,
          c = t || [],
          d = (e = e || {}).node || r,
          f = void 0 !== e.clockseq ? e.clockseq : i;
        if (null == d || null == f) {
          var h = a();
          null == d && (d = r = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
            null == f && (f = i = 16383 & ((h[6] << 8) | h[7]));
        }
        var p = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          g = void 0 !== e.nsecs ? e.nsecs : s + 1,
          m = p - l + (g - s) / 1e4;
        if (
          (m < 0 && void 0 === e.clockseq && (f = (f + 1) & 16383),
          (m < 0 || p > l) && void 0 === e.nsecs && (g = 0),
          g >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        (l = p), (s = g), (i = f);
        var v = (1e4 * (268435455 & (p += 122192928e5)) + g) % 4294967296;
        (c[u++] = (v >>> 24) & 255),
          (c[u++] = (v >>> 16) & 255),
          (c[u++] = (v >>> 8) & 255),
          (c[u++] = 255 & v);
        var y = ((p / 4294967296) * 1e4) & 268435455;
        (c[u++] = (y >>> 8) & 255),
          (c[u++] = 255 & y),
          (c[u++] = ((y >>> 24) & 15) | 16),
          (c[u++] = (y >>> 16) & 255),
          (c[u++] = (f >>> 8) | 128),
          (c[u++] = 255 & f);
        for (var b = 0; b < 6; ++b) c[u + b] = d[b];
        return t || o(c);
      };
    },
    function (e, t, n) {
      var r = n(27),
        i = n(28);
      e.exports = function (e, t, n) {
        var a = (t && n) || 0;
        "string" == typeof e &&
          ((t = "binary" === e ? new Array(16) : null), (e = null));
        var o = (e = e || {}).random || (e.rng || r)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t))
          for (var l = 0; l < 16; ++l) t[a + l] = o[l];
        return t || i(o);
      };
    },
    function (e, t, n) {},
    function (e, t) {
      var n,
        r,
        i = (e.exports = {});
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === a || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" === typeof setTimeout ? setTimeout : a;
        } catch (e) {
          n = a;
        }
        try {
          r = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          r = o;
        }
      })();
      var s,
        u = [],
        c = !1,
        d = -1;
      function f() {
        c &&
          s &&
          ((c = !1), s.length ? (u = s.concat(u)) : (d = -1), u.length && h());
      }
      function h() {
        if (!c) {
          var e = l(f);
          c = !0;
          for (var t = u.length; t; ) {
            for (s = u, u = []; ++d < t; ) s && s[d].run();
            (d = -1), (t = u.length);
          }
          (s = null),
            (c = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === o || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new p(e, t)), 1 !== u.length || c || l(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      var r = n(61);
      function i() {}
      function a() {}
      (a.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, a, o) {
            if (o !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: i,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    function (e, t, n) {
      (function (e) {
        e.exports = (function () {
          "use strict";
          var t, n;
          function r() {
            return t.apply(null, arguments);
          }
          function i(e) {
            return (
              e instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(e)
            );
          }
          function a(e) {
            return (
              null != e &&
              "[object Object]" === Object.prototype.toString.call(e)
            );
          }
          function o(e) {
            return void 0 === e;
          }
          function l(e) {
            return (
              "number" === typeof e ||
              "[object Number]" === Object.prototype.toString.call(e)
            );
          }
          function s(e) {
            return (
              e instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(e)
            );
          }
          function u(e, t) {
            var n,
              r = [];
            for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
            return r;
          }
          function c(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function d(e, t) {
            for (var n in t) c(t, n) && (e[n] = t[n]);
            return (
              c(t, "toString") && (e.toString = t.toString),
              c(t, "valueOf") && (e.valueOf = t.valueOf),
              e
            );
          }
          function f(e, t, n, r) {
            return At(e, t, n, r, !0).utc();
          }
          function h(e) {
            return (
              null == e._pf &&
                (e._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                  parsedDateParts: [],
                  meridiem: null,
                  rfc2822: !1,
                  weekdayMismatch: !1,
                }),
              e._pf
            );
          }
          function p(e) {
            if (null == e._isValid) {
              var t = h(e),
                r = n.call(t.parsedDateParts, function (e) {
                  return null != e;
                }),
                i =
                  !isNaN(e._d.getTime()) &&
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && r));
              if (
                (e._strict &&
                  (i =
                    i &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour),
                null != Object.isFrozen && Object.isFrozen(e))
              )
                return i;
              e._isValid = i;
            }
            return e._isValid;
          }
          function g(e) {
            var t = f(NaN);
            return null != e ? d(h(t), e) : (h(t).userInvalidated = !0), t;
          }
          n = Array.prototype.some
            ? Array.prototype.some
            : function (e) {
                for (
                  var t = Object(this), n = t.length >>> 0, r = 0;
                  r < n;
                  r++
                )
                  if (r in t && e.call(this, t[r], r, t)) return !0;
                return !1;
              };
          var m = (r.momentProperties = []);
          function v(e, t) {
            var n, r, i;
            if (
              (o(t._isAMomentObject) ||
                (e._isAMomentObject = t._isAMomentObject),
              o(t._i) || (e._i = t._i),
              o(t._f) || (e._f = t._f),
              o(t._l) || (e._l = t._l),
              o(t._strict) || (e._strict = t._strict),
              o(t._tzm) || (e._tzm = t._tzm),
              o(t._isUTC) || (e._isUTC = t._isUTC),
              o(t._offset) || (e._offset = t._offset),
              o(t._pf) || (e._pf = h(t)),
              o(t._locale) || (e._locale = t._locale),
              m.length > 0)
            )
              for (n = 0; n < m.length; n++)
                o((i = t[(r = m[n])])) || (e[r] = i);
            return e;
          }
          var y = !1;
          function b(e) {
            v(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === y && ((y = !0), r.updateOffset(this), (y = !1));
          }
          function x(e) {
            return e instanceof b || (null != e && null != e._isAMomentObject);
          }
          function _(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function w(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = _(t)), n;
          }
          function k(e, t, n) {
            var r,
              i = Math.min(e.length, t.length),
              a = Math.abs(e.length - t.length),
              o = 0;
            for (r = 0; r < i; r++)
              ((n && e[r] !== t[r]) || (!n && w(e[r]) !== w(t[r]))) && o++;
            return o + a;
          }
          function S(e) {
            !1 === r.suppressDeprecationWarnings &&
              "undefined" !== typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + e);
          }
          function M(e, t) {
            var n = !0;
            return d(function () {
              if (
                (null != r.deprecationHandler && r.deprecationHandler(null, e),
                n)
              ) {
                for (var i, a = [], o = 0; o < arguments.length; o++) {
                  if (((i = ""), "object" === typeof arguments[o])) {
                    for (var l in ((i += "\n[" + o + "] "), arguments[0]))
                      i += l + ": " + arguments[0][l] + ", ";
                    i = i.slice(0, -2);
                  } else i = arguments[o];
                  a.push(i);
                }
                S(
                  e +
                    "\nArguments: " +
                    Array.prototype.slice.call(a).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (n = !1);
              }
              return t.apply(this, arguments);
            }, t);
          }
          var T,
            C = {};
          function P(e, t) {
            null != r.deprecationHandler && r.deprecationHandler(e, t),
              C[e] || (S(t), (C[e] = !0));
          }
          function E(e) {
            return (
              e instanceof Function ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }
          function D(e, t) {
            var n,
              r = d({}, e);
            for (n in t)
              c(t, n) &&
                (a(e[n]) && a(t[n])
                  ? ((r[n] = {}), d(r[n], e[n]), d(r[n], t[n]))
                  : null != t[n]
                  ? (r[n] = t[n])
                  : delete r[n]);
            for (n in e) c(e, n) && !c(t, n) && a(e[n]) && (r[n] = d({}, r[n]));
            return r;
          }
          function O(e) {
            null != e && this.set(e);
          }
          (r.suppressDeprecationWarnings = !1),
            (r.deprecationHandler = null),
            (T = Object.keys
              ? Object.keys
              : function (e) {
                  var t,
                    n = [];
                  for (t in e) c(e, t) && n.push(t);
                  return n;
                });
          var A = {};
          function I(e, t) {
            var n = e.toLowerCase();
            A[n] = A[n + "s"] = A[t] = e;
          }
          function F(e) {
            return "string" === typeof e ? A[e] || A[e.toLowerCase()] : void 0;
          }
          function N(e) {
            var t,
              n,
              r = {};
            for (n in e) c(e, n) && (t = F(n)) && (r[t] = e[n]);
            return r;
          }
          var L = {};
          function R(e, t) {
            L[e] = t;
          }
          function z(e, t, n) {
            var r = "" + Math.abs(e),
              i = t - r.length;
            return (
              (e >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, i)).toString().substr(1) +
              r
            );
          }
          var W =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            j = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            V = {},
            Y = {};
          function U(e, t, n, r) {
            var i = r;
            "string" === typeof r &&
              (i = function () {
                return this[r]();
              }),
              e && (Y[e] = i),
              t &&
                (Y[t[0]] = function () {
                  return z(i.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (Y[n] = function () {
                  return this.localeData().ordinal(i.apply(this, arguments), e);
                });
          }
          function B(e, t) {
            return e.isValid()
              ? ((t = H(t, e.localeData())),
                (V[t] =
                  V[t] ||
                  (function (e) {
                    var t,
                      n,
                      r,
                      i = e.match(W);
                    for (t = 0, n = i.length; t < n; t++)
                      Y[i[t]]
                        ? (i[t] = Y[i[t]])
                        : (i[t] = (r = i[t]).match(/\[[\s\S]/)
                            ? r.replace(/^\[|\]$/g, "")
                            : r.replace(/\\/g, ""));
                    return function (t) {
                      var r,
                        a = "";
                      for (r = 0; r < n; r++)
                        a += E(i[r]) ? i[r].call(t, e) : i[r];
                      return a;
                    };
                  })(t)),
                V[t](e))
              : e.localeData().invalidDate();
          }
          function H(e, t) {
            var n = 5;
            function r(e) {
              return t.longDateFormat(e) || e;
            }
            for (j.lastIndex = 0; n >= 0 && j.test(e); )
              (e = e.replace(j, r)), (j.lastIndex = 0), (n -= 1);
            return e;
          }
          var q = /\d/,
            G = /\d\d/,
            $ = /\d{3}/,
            K = /\d{4}/,
            Q = /[+-]?\d{6}/,
            Z = /\d\d?/,
            X = /\d\d\d\d?/,
            J = /\d\d\d\d\d\d?/,
            ee = /\d{1,3}/,
            te = /\d{1,4}/,
            ne = /[+-]?\d{1,6}/,
            re = /\d+/,
            ie = /[+-]?\d+/,
            ae = /Z|[+-]\d\d:?\d\d/gi,
            oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
            le =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            se = {};
          function ue(e, t, n) {
            se[e] = E(t)
              ? t
              : function (e, r) {
                  return e && n ? n : t;
                };
          }
          function ce(e, t) {
            return c(se, e)
              ? se[e](t._strict, t._locale)
              : new RegExp(
                  de(
                    e
                      .replace("\\", "")
                      .replace(
                        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                        function (e, t, n, r, i) {
                          return t || n || r || i;
                        }
                      )
                  )
                );
          }
          function de(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          var fe = {};
          function he(e, t) {
            var n,
              r = t;
            for (
              "string" === typeof e && (e = [e]),
                l(t) &&
                  (r = function (e, n) {
                    n[t] = w(e);
                  }),
                n = 0;
              n < e.length;
              n++
            )
              fe[e[n]] = r;
          }
          function pe(e, t) {
            he(e, function (e, n, r, i) {
              (r._w = r._w || {}), t(e, r._w, r, i);
            });
          }
          function ge(e, t, n) {
            null != t && c(fe, e) && fe[e](t, n._a, n, e);
          }
          var me = 0,
            ve = 1,
            ye = 2,
            be = 3,
            xe = 4,
            _e = 5,
            we = 6,
            ke = 7,
            Se = 8;
          function Me(e) {
            return Te(e) ? 366 : 365;
          }
          function Te(e) {
            return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
          }
          U("Y", 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? "" + e : "+" + e;
          }),
            U(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            U(0, ["YYYY", 4], 0, "year"),
            U(0, ["YYYYY", 5], 0, "year"),
            U(0, ["YYYYYY", 6, !0], 0, "year"),
            I("year", "y"),
            R("year", 1),
            ue("Y", ie),
            ue("YY", Z, G),
            ue("YYYY", te, K),
            ue("YYYYY", ne, Q),
            ue("YYYYYY", ne, Q),
            he(["YYYYY", "YYYYYY"], me),
            he("YYYY", function (e, t) {
              t[me] = 2 === e.length ? r.parseTwoDigitYear(e) : w(e);
            }),
            he("YY", function (e, t) {
              t[me] = r.parseTwoDigitYear(e);
            }),
            he("Y", function (e, t) {
              t[me] = parseInt(e, 10);
            }),
            (r.parseTwoDigitYear = function (e) {
              return w(e) + (w(e) > 68 ? 1900 : 2e3);
            });
          var Ce,
            Pe = Ee("FullYear", !0);
          function Ee(e, t) {
            return function (n) {
              return null != n
                ? (Oe(this, e, n), r.updateOffset(this, t), this)
                : De(this, e);
            };
          }
          function De(e, t) {
            return e.isValid()
              ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
              : NaN;
          }
          function Oe(e, t, n) {
            e.isValid() &&
              !isNaN(n) &&
              ("FullYear" === t &&
              Te(e.year()) &&
              1 === e.month() &&
              29 === e.date()
                ? e._d["set" + (e._isUTC ? "UTC" : "") + t](
                    n,
                    e.month(),
                    Ae(n, e.month())
                  )
                : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
          }
          function Ae(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n,
              r = ((t % (n = 12)) + n) % n;
            return (
              (e += (t - r) / 12),
              1 === r ? (Te(e) ? 29 : 28) : 31 - ((r % 7) % 2)
            );
          }
          (Ce = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            U("M", ["MM", 2], "Mo", function () {
              return this.month() + 1;
            }),
            U("MMM", 0, 0, function (e) {
              return this.localeData().monthsShort(this, e);
            }),
            U("MMMM", 0, 0, function (e) {
              return this.localeData().months(this, e);
            }),
            I("month", "M"),
            R("month", 8),
            ue("M", Z),
            ue("MM", Z, G),
            ue("MMM", function (e, t) {
              return t.monthsShortRegex(e);
            }),
            ue("MMMM", function (e, t) {
              return t.monthsRegex(e);
            }),
            he(["M", "MM"], function (e, t) {
              t[ve] = w(e) - 1;
            }),
            he(["MMM", "MMMM"], function (e, t, n, r) {
              var i = n._locale.monthsParse(e, r, n._strict);
              null != i ? (t[ve] = i) : (h(n).invalidMonth = e);
            });
          var Ie = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Fe =
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            Ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
          function Le(e, t, n) {
            var r,
              i,
              a,
              o = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  r = 0;
                r < 12;
                ++r
              )
                (a = f([2e3, r])),
                  (this._shortMonthsParse[r] = this.monthsShort(
                    a,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[r] = this.months(
                    a,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === t
                ? -1 !== (i = Ce.call(this._shortMonthsParse, o))
                  ? i
                  : null
                : -1 !== (i = Ce.call(this._longMonthsParse, o))
                ? i
                : null
              : "MMM" === t
              ? -1 !== (i = Ce.call(this._shortMonthsParse, o))
                ? i
                : -1 !== (i = Ce.call(this._longMonthsParse, o))
                ? i
                : null
              : -1 !== (i = Ce.call(this._longMonthsParse, o))
              ? i
              : -1 !== (i = Ce.call(this._shortMonthsParse, o))
              ? i
              : null;
          }
          function Re(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" === typeof t)
              if (/^\d+$/.test(t)) t = w(t);
              else if (!l((t = e.localeData().monthsParse(t)))) return e;
            return (
              (n = Math.min(e.date(), Ae(e.year(), t))),
              e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
              e
            );
          }
          function ze(e) {
            return null != e
              ? (Re(this, e), r.updateOffset(this, !0), this)
              : De(this, "Month");
          }
          var We = le,
            je = le;
          function Ve() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r = [],
              i = [],
              a = [];
            for (t = 0; t < 12; t++)
              (n = f([2e3, t])),
                r.push(this.monthsShort(n, "")),
                i.push(this.months(n, "")),
                a.push(this.months(n, "")),
                a.push(this.monthsShort(n, ""));
            for (r.sort(e), i.sort(e), a.sort(e), t = 0; t < 12; t++)
              (r[t] = de(r[t])), (i[t] = de(i[t]));
            for (t = 0; t < 24; t++) a[t] = de(a[t]);
            (this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + r.join("|") + ")",
                "i"
              ));
          }
          function Ye(e, t, n, r, i, a, o) {
            var l;
            return (
              e < 100 && e >= 0
                ? ((l = new Date(e + 400, t, n, r, i, a, o)),
                  isFinite(l.getFullYear()) && l.setFullYear(e))
                : (l = new Date(e, t, n, r, i, a, o)),
              l
            );
          }
          function Ue(e) {
            var t;
            if (e < 100 && e >= 0) {
              var n = Array.prototype.slice.call(arguments);
              (n[0] = e + 400),
                (t = new Date(Date.UTC.apply(null, n))),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
            } else t = new Date(Date.UTC.apply(null, arguments));
            return t;
          }
          function Be(e, t, n) {
            var r = 7 + t - n;
            return (-(7 + Ue(e, 0, r).getUTCDay() - t) % 7) + r - 1;
          }
          function He(e, t, n, r, i) {
            var a,
              o,
              l = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + Be(e, r, i);
            return (
              l <= 0
                ? (o = Me((a = e - 1)) + l)
                : l > Me(e)
                ? ((a = e + 1), (o = l - Me(e)))
                : ((a = e), (o = l)),
              { year: a, dayOfYear: o }
            );
          }
          function qe(e, t, n) {
            var r,
              i,
              a = Be(e.year(), t, n),
              o = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
            return (
              o < 1
                ? (r = o + Ge((i = e.year() - 1), t, n))
                : o > Ge(e.year(), t, n)
                ? ((r = o - Ge(e.year(), t, n)), (i = e.year() + 1))
                : ((i = e.year()), (r = o)),
              { week: r, year: i }
            );
          }
          function Ge(e, t, n) {
            var r = Be(e, t, n),
              i = Be(e + 1, t, n);
            return (Me(e) - r + i) / 7;
          }
          function $e(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          U("w", ["ww", 2], "wo", "week"),
            U("W", ["WW", 2], "Wo", "isoWeek"),
            I("week", "w"),
            I("isoWeek", "W"),
            R("week", 5),
            R("isoWeek", 5),
            ue("w", Z),
            ue("ww", Z, G),
            ue("W", Z),
            ue("WW", Z, G),
            pe(["w", "ww", "W", "WW"], function (e, t, n, r) {
              t[r.substr(0, 1)] = w(e);
            }),
            U("d", 0, "do", "day"),
            U("dd", 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            U("ddd", 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            U("dddd", 0, 0, function (e) {
              return this.localeData().weekdays(this, e);
            }),
            U("e", 0, 0, "weekday"),
            U("E", 0, 0, "isoWeekday"),
            I("day", "d"),
            I("weekday", "e"),
            I("isoWeekday", "E"),
            R("day", 11),
            R("weekday", 11),
            R("isoWeekday", 11),
            ue("d", Z),
            ue("e", Z),
            ue("E", Z),
            ue("dd", function (e, t) {
              return t.weekdaysMinRegex(e);
            }),
            ue("ddd", function (e, t) {
              return t.weekdaysShortRegex(e);
            }),
            ue("dddd", function (e, t) {
              return t.weekdaysRegex(e);
            }),
            pe(["dd", "ddd", "dddd"], function (e, t, n, r) {
              var i = n._locale.weekdaysParse(e, r, n._strict);
              null != i ? (t.d = i) : (h(n).invalidWeekday = e);
            }),
            pe(["d", "e", "E"], function (e, t, n, r) {
              t[r] = w(e);
            });
          var Ke =
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            Qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
          function Xe(e, t, n) {
            var r,
              i,
              a,
              o = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  r = 0;
                r < 7;
                ++r
              )
                (a = f([2e3, 1]).day(r)),
                  (this._minWeekdaysParse[r] = this.weekdaysMin(
                    a,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[r] = this.weekdaysShort(
                    a,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[r] = this.weekdays(
                    a,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === t
                ? -1 !== (i = Ce.call(this._weekdaysParse, o))
                  ? i
                  : null
                : "ddd" === t
                ? -1 !== (i = Ce.call(this._shortWeekdaysParse, o))
                  ? i
                  : null
                : -1 !== (i = Ce.call(this._minWeekdaysParse, o))
                ? i
                : null
              : "dddd" === t
              ? -1 !== (i = Ce.call(this._weekdaysParse, o))
                ? i
                : -1 !== (i = Ce.call(this._shortWeekdaysParse, o))
                ? i
                : -1 !== (i = Ce.call(this._minWeekdaysParse, o))
                ? i
                : null
              : "ddd" === t
              ? -1 !== (i = Ce.call(this._shortWeekdaysParse, o))
                ? i
                : -1 !== (i = Ce.call(this._weekdaysParse, o))
                ? i
                : -1 !== (i = Ce.call(this._minWeekdaysParse, o))
                ? i
                : null
              : -1 !== (i = Ce.call(this._minWeekdaysParse, o))
              ? i
              : -1 !== (i = Ce.call(this._weekdaysParse, o))
              ? i
              : -1 !== (i = Ce.call(this._shortWeekdaysParse, o))
              ? i
              : null;
          }
          var Je = le,
            et = le,
            tt = le;
          function nt() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              r,
              i,
              a,
              o = [],
              l = [],
              s = [],
              u = [];
            for (t = 0; t < 7; t++)
              (n = f([2e3, 1]).day(t)),
                (r = this.weekdaysMin(n, "")),
                (i = this.weekdaysShort(n, "")),
                (a = this.weekdays(n, "")),
                o.push(r),
                l.push(i),
                s.push(a),
                u.push(r),
                u.push(i),
                u.push(a);
            for (o.sort(e), l.sort(e), s.sort(e), u.sort(e), t = 0; t < 7; t++)
              (l[t] = de(l[t])), (s[t] = de(s[t])), (u[t] = de(u[t]));
            (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i"
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + l.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              ));
          }
          function rt() {
            return this.hours() % 12 || 12;
          }
          function it(e, t) {
            U(e, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                t
              );
            });
          }
          function at(e, t) {
            return t._meridiemParse;
          }
          U("H", ["HH", 2], 0, "hour"),
            U("h", ["hh", 2], 0, rt),
            U("k", ["kk", 2], 0, function () {
              return this.hours() || 24;
            }),
            U("hmm", 0, 0, function () {
              return "" + rt.apply(this) + z(this.minutes(), 2);
            }),
            U("hmmss", 0, 0, function () {
              return (
                "" +
                rt.apply(this) +
                z(this.minutes(), 2) +
                z(this.seconds(), 2)
              );
            }),
            U("Hmm", 0, 0, function () {
              return "" + this.hours() + z(this.minutes(), 2);
            }),
            U("Hmmss", 0, 0, function () {
              return (
                "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
              );
            }),
            it("a", !0),
            it("A", !1),
            I("hour", "h"),
            R("hour", 13),
            ue("a", at),
            ue("A", at),
            ue("H", Z),
            ue("h", Z),
            ue("k", Z),
            ue("HH", Z, G),
            ue("hh", Z, G),
            ue("kk", Z, G),
            ue("hmm", X),
            ue("hmmss", J),
            ue("Hmm", X),
            ue("Hmmss", J),
            he(["H", "HH"], be),
            he(["k", "kk"], function (e, t, n) {
              var r = w(e);
              t[be] = 24 === r ? 0 : r;
            }),
            he(["a", "A"], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            he(["h", "hh"], function (e, t, n) {
              (t[be] = w(e)), (h(n).bigHour = !0);
            }),
            he("hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[be] = w(e.substr(0, r))),
                (t[xe] = w(e.substr(r))),
                (h(n).bigHour = !0);
            }),
            he("hmmss", function (e, t, n) {
              var r = e.length - 4,
                i = e.length - 2;
              (t[be] = w(e.substr(0, r))),
                (t[xe] = w(e.substr(r, 2))),
                (t[_e] = w(e.substr(i))),
                (h(n).bigHour = !0);
            }),
            he("Hmm", function (e, t, n) {
              var r = e.length - 2;
              (t[be] = w(e.substr(0, r))), (t[xe] = w(e.substr(r)));
            }),
            he("Hmmss", function (e, t, n) {
              var r = e.length - 4,
                i = e.length - 2;
              (t[be] = w(e.substr(0, r))),
                (t[xe] = w(e.substr(r, 2))),
                (t[_e] = w(e.substr(i)));
            });
          var ot,
            lt = Ee("Hours", !0),
            st = {
              calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L",
              },
              longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A",
              },
              invalidDate: "Invalid date",
              ordinal: "%d",
              dayOfMonthOrdinalParse: /\d{1,2}/,
              relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years",
              },
              months: Fe,
              monthsShort: Ne,
              week: { dow: 0, doy: 6 },
              weekdays: Ke,
              weekdaysMin: Ze,
              weekdaysShort: Qe,
              meridiemParse: /[ap]\.?m?\.?/i,
            },
            ut = {},
            ct = {};
          function dt(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function ft(t) {
            var n = null;
            if (!ut[t] && "undefined" !== typeof e && e && e.exports)
              try {
                (n = ot._abbr),
                  !(function () {
                    var e = new Error("Cannot find module 'undefined'");
                    throw ((e.code = "MODULE_NOT_FOUND"), e);
                  })(),
                  ht(n);
              } catch (r) {}
            return ut[t];
          }
          function ht(e, t) {
            var n;
            return (
              e &&
                ((n = o(t) ? gt(e) : pt(e, t))
                  ? (ot = n)
                  : "undefined" !== typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + e + " not found. Did you forget to load it?"
                    )),
              ot._abbr
            );
          }
          function pt(e, t) {
            if (null !== t) {
              var n,
                r = st;
              if (((t.abbr = e), null != ut[e]))
                P(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (r = ut[e]._config);
              else if (null != t.parentLocale)
                if (null != ut[t.parentLocale]) r = ut[t.parentLocale]._config;
                else {
                  if (null == (n = ft(t.parentLocale)))
                    return (
                      ct[t.parentLocale] || (ct[t.parentLocale] = []),
                      ct[t.parentLocale].push({ name: e, config: t }),
                      null
                    );
                  r = n._config;
                }
              return (
                (ut[e] = new O(D(r, t))),
                ct[e] &&
                  ct[e].forEach(function (e) {
                    pt(e.name, e.config);
                  }),
                ht(e),
                ut[e]
              );
            }
            return delete ut[e], null;
          }
          function gt(e) {
            var t;
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return ot;
            if (!i(e)) {
              if ((t = ft(e))) return t;
              e = [e];
            }
            return (function (e) {
              for (var t, n, r, i, a = 0; a < e.length; ) {
                for (
                  t = (i = dt(e[a]).split("-")).length,
                    n = (n = dt(e[a + 1])) ? n.split("-") : null;
                  t > 0;

                ) {
                  if ((r = ft(i.slice(0, t).join("-")))) return r;
                  if (n && n.length >= t && k(i, n, !0) >= t - 1) break;
                  t--;
                }
                a++;
              }
              return ot;
            })(e);
          }
          function mt(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === h(e).overflow &&
                ((t =
                  n[ve] < 0 || n[ve] > 11
                    ? ve
                    : n[ye] < 1 || n[ye] > Ae(n[me], n[ve])
                    ? ye
                    : n[be] < 0 ||
                      n[be] > 24 ||
                      (24 === n[be] &&
                        (0 !== n[xe] || 0 !== n[_e] || 0 !== n[we]))
                    ? be
                    : n[xe] < 0 || n[xe] > 59
                    ? xe
                    : n[_e] < 0 || n[_e] > 59
                    ? _e
                    : n[we] < 0 || n[we] > 999
                    ? we
                    : -1),
                h(e)._overflowDayOfYear && (t < me || t > ye) && (t = ye),
                h(e)._overflowWeeks && -1 === t && (t = ke),
                h(e)._overflowWeekday && -1 === t && (t = Se),
                (h(e).overflow = t)),
              e
            );
          }
          function vt(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function yt(e) {
            var t,
              n,
              i,
              a,
              o,
              l = [];
            if (!e._d) {
              for (
                i = (function (e) {
                  var t = new Date(r.now());
                  return e._useUTC
                    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                    : [t.getFullYear(), t.getMonth(), t.getDate()];
                })(e),
                  e._w &&
                    null == e._a[ye] &&
                    null == e._a[ve] &&
                    (function (e) {
                      var t, n, r, i, a, o, l, s;
                      if (null != (t = e._w).GG || null != t.W || null != t.E)
                        (a = 1),
                          (o = 4),
                          (n = vt(t.GG, e._a[me], qe(It(), 1, 4).year)),
                          (r = vt(t.W, 1)),
                          ((i = vt(t.E, 1)) < 1 || i > 7) && (s = !0);
                      else {
                        (a = e._locale._week.dow), (o = e._locale._week.doy);
                        var u = qe(It(), a, o);
                        (n = vt(t.gg, e._a[me], u.year)),
                          (r = vt(t.w, u.week)),
                          null != t.d
                            ? ((i = t.d) < 0 || i > 6) && (s = !0)
                            : null != t.e
                            ? ((i = t.e + a), (t.e < 0 || t.e > 6) && (s = !0))
                            : (i = a);
                      }
                      r < 1 || r > Ge(n, a, o)
                        ? (h(e)._overflowWeeks = !0)
                        : null != s
                        ? (h(e)._overflowWeekday = !0)
                        : ((l = He(n, r, i, a, o)),
                          (e._a[me] = l.year),
                          (e._dayOfYear = l.dayOfYear));
                    })(e),
                  null != e._dayOfYear &&
                    ((o = vt(e._a[me], i[me])),
                    (e._dayOfYear > Me(o) || 0 === e._dayOfYear) &&
                      (h(e)._overflowDayOfYear = !0),
                    (n = Ue(o, 0, e._dayOfYear)),
                    (e._a[ve] = n.getUTCMonth()),
                    (e._a[ye] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = l[t] = i[t];
              for (; t < 7; t++)
                e._a[t] = l[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[be] &&
                0 === e._a[xe] &&
                0 === e._a[_e] &&
                0 === e._a[we] &&
                ((e._nextDay = !0), (e._a[be] = 0)),
                (e._d = (e._useUTC ? Ue : Ye).apply(null, l)),
                (a = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[be] = 24),
                e._w &&
                  "undefined" !== typeof e._w.d &&
                  e._w.d !== a &&
                  (h(e).weekdayMismatch = !0);
            }
          }
          var bt =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            xt =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            _t = /Z|[+-]\d\d(?::?\d\d)?/,
            wt = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
            ],
            kt = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            St = /^\/?Date\((\-?\d+)/i;
          function Mt(e) {
            var t,
              n,
              r,
              i,
              a,
              o,
              l = e._i,
              s = bt.exec(l) || xt.exec(l);
            if (s) {
              for (h(e).iso = !0, t = 0, n = wt.length; t < n; t++)
                if (wt[t][1].exec(s[1])) {
                  (i = wt[t][0]), (r = !1 !== wt[t][2]);
                  break;
                }
              if (null == i) return void (e._isValid = !1);
              if (s[3]) {
                for (t = 0, n = kt.length; t < n; t++)
                  if (kt[t][1].exec(s[3])) {
                    a = (s[2] || " ") + kt[t][0];
                    break;
                  }
                if (null == a) return void (e._isValid = !1);
              }
              if (!r && null != a) return void (e._isValid = !1);
              if (s[4]) {
                if (!_t.exec(s[4])) return void (e._isValid = !1);
                o = "Z";
              }
              (e._f = i + (a || "") + (o || "")), Dt(e);
            } else e._isValid = !1;
          }
          var Tt =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
          function Ct(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
          }
          var Pt = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
          function Et(e) {
            var t = Tt.exec(
              e._i
                .replace(/\([^)]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, "")
            );
            if (t) {
              var n = (function (e, t, n, r, i, a) {
                var o = [
                  Ct(e),
                  Ne.indexOf(t),
                  parseInt(n, 10),
                  parseInt(r, 10),
                  parseInt(i, 10),
                ];
                return a && o.push(parseInt(a, 10)), o;
              })(t[4], t[3], t[2], t[5], t[6], t[7]);
              if (
                !(function (e, t, n) {
                  return (
                    !e ||
                    Qe.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
                    ((h(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                  );
                })(t[1], n, e)
              )
                return;
              (e._a = n),
                (e._tzm = (function (e, t, n) {
                  if (e) return Pt[e];
                  if (t) return 0;
                  var r = parseInt(n, 10),
                    i = r % 100;
                  return ((r - i) / 100) * 60 + i;
                })(t[8], t[9], t[10])),
                (e._d = Ue.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (h(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function Dt(e) {
            if (e._f !== r.ISO_8601)
              if (e._f !== r.RFC_2822) {
                (e._a = []), (h(e).empty = !0);
                var t,
                  n,
                  i,
                  a,
                  o,
                  l = "" + e._i,
                  s = l.length,
                  u = 0;
                for (
                  i = H(e._f, e._locale).match(W) || [], t = 0;
                  t < i.length;
                  t++
                )
                  (a = i[t]),
                    (n = (l.match(ce(a, e)) || [])[0]) &&
                      ((o = l.substr(0, l.indexOf(n))).length > 0 &&
                        h(e).unusedInput.push(o),
                      (l = l.slice(l.indexOf(n) + n.length)),
                      (u += n.length)),
                    Y[a]
                      ? (n ? (h(e).empty = !1) : h(e).unusedTokens.push(a),
                        ge(a, n, e))
                      : e._strict && !n && h(e).unusedTokens.push(a);
                (h(e).charsLeftOver = s - u),
                  l.length > 0 && h(e).unusedInput.push(l),
                  e._a[be] <= 12 &&
                    !0 === h(e).bigHour &&
                    e._a[be] > 0 &&
                    (h(e).bigHour = void 0),
                  (h(e).parsedDateParts = e._a.slice(0)),
                  (h(e).meridiem = e._meridiem),
                  (e._a[be] = (function (e, t, n) {
                    var r;
                    return null == n
                      ? t
                      : null != e.meridiemHour
                      ? e.meridiemHour(t, n)
                      : null != e.isPM
                      ? ((r = e.isPM(n)) && t < 12 && (t += 12),
                        r || 12 !== t || (t = 0),
                        t)
                      : t;
                  })(e._locale, e._a[be], e._meridiem)),
                  yt(e),
                  mt(e);
              } else Et(e);
            else Mt(e);
          }
          function Ot(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || gt(e._l)),
              null === t || (void 0 === n && "" === t)
                ? g({ nullInput: !0 })
                : ("string" === typeof t && (e._i = t = e._locale.preparse(t)),
                  x(t)
                    ? new b(mt(t))
                    : (s(t)
                        ? (e._d = t)
                        : i(n)
                        ? (function (e) {
                            var t, n, r, i, a;
                            if (0 === e._f.length)
                              return (
                                (h(e).invalidFormat = !0),
                                void (e._d = new Date(NaN))
                              );
                            for (i = 0; i < e._f.length; i++)
                              (a = 0),
                                (t = v({}, e)),
                                null != e._useUTC && (t._useUTC = e._useUTC),
                                (t._f = e._f[i]),
                                Dt(t),
                                p(t) &&
                                  ((a += h(t).charsLeftOver),
                                  (a += 10 * h(t).unusedTokens.length),
                                  (h(t).score = a),
                                  (null == r || a < r) && ((r = a), (n = t)));
                            d(e, n || t);
                          })(e)
                        : n
                        ? Dt(e)
                        : (function (e) {
                            var t = e._i;
                            o(t)
                              ? (e._d = new Date(r.now()))
                              : s(t)
                              ? (e._d = new Date(t.valueOf()))
                              : "string" === typeof t
                              ? (function (e) {
                                  var t = St.exec(e._i);
                                  null === t
                                    ? (Mt(e),
                                      !1 === e._isValid &&
                                        (delete e._isValid,
                                        Et(e),
                                        !1 === e._isValid &&
                                          (delete e._isValid,
                                          r.createFromInputFallback(e))))
                                    : (e._d = new Date(+t[1]));
                                })(e)
                              : i(t)
                              ? ((e._a = u(t.slice(0), function (e) {
                                  return parseInt(e, 10);
                                })),
                                yt(e))
                              : a(t)
                              ? (function (e) {
                                  if (!e._d) {
                                    var t = N(e._i);
                                    (e._a = u(
                                      [
                                        t.year,
                                        t.month,
                                        t.day || t.date,
                                        t.hour,
                                        t.minute,
                                        t.second,
                                        t.millisecond,
                                      ],
                                      function (e) {
                                        return e && parseInt(e, 10);
                                      }
                                    )),
                                      yt(e);
                                  }
                                })(e)
                              : l(t)
                              ? (e._d = new Date(t))
                              : r.createFromInputFallback(e);
                          })(e),
                      p(e) || (e._d = null),
                      e))
            );
          }
          function At(e, t, n, r, o) {
            var l = {};
            return (
              (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
              ((a(e) &&
                (function (e) {
                  if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(e).length;
                  var t;
                  for (t in e) if (e.hasOwnProperty(t)) return !1;
                  return !0;
                })(e)) ||
                (i(e) && 0 === e.length)) &&
                (e = void 0),
              (l._isAMomentObject = !0),
              (l._useUTC = l._isUTC = o),
              (l._l = n),
              (l._i = e),
              (l._f = t),
              (l._strict = r),
              (function (e) {
                var t = new b(mt(Ot(e)));
                return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
              })(l)
            );
          }
          function It(e, t, n, r) {
            return At(e, t, n, r, !1);
          }
          (r.createFromInputFallback = M(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            }
          )),
            (r.ISO_8601 = function () {}),
            (r.RFC_2822 = function () {});
          var Ft = M(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = It.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e < this
                    ? this
                    : e
                  : g();
              }
            ),
            Nt = M(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = It.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e > this
                    ? this
                    : e
                  : g();
              }
            );
          function Lt(e, t) {
            var n, r;
            if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length))
              return It();
            for (n = t[0], r = 1; r < t.length; ++r)
              (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
            return n;
          }
          var Rt = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
          function zt(e) {
            var t = N(e),
              n = t.year || 0,
              r = t.quarter || 0,
              i = t.month || 0,
              a = t.week || t.isoWeek || 0,
              o = t.day || 0,
              l = t.hour || 0,
              s = t.minute || 0,
              u = t.second || 0,
              c = t.millisecond || 0;
            (this._isValid = (function (e) {
              for (var t in e)
                if (-1 === Ce.call(Rt, t) || (null != e[t] && isNaN(e[t])))
                  return !1;
              for (var n = !1, r = 0; r < Rt.length; ++r)
                if (e[Rt[r]]) {
                  if (n) return !1;
                  parseFloat(e[Rt[r]]) !== w(e[Rt[r]]) && (n = !0);
                }
              return !0;
            })(t)),
              (this._milliseconds = +c + 1e3 * u + 6e4 * s + 1e3 * l * 60 * 60),
              (this._days = +o + 7 * a),
              (this._months = +i + 3 * r + 12 * n),
              (this._data = {}),
              (this._locale = gt()),
              this._bubble();
          }
          function Wt(e) {
            return e instanceof zt;
          }
          function jt(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function Vt(e, t) {
            U(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = "+";
              return (
                e < 0 && ((e = -e), (n = "-")),
                n + z(~~(e / 60), 2) + t + z(~~e % 60, 2)
              );
            });
          }
          Vt("Z", ":"),
            Vt("ZZ", ""),
            ue("Z", oe),
            ue("ZZ", oe),
            he(["Z", "ZZ"], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = Ut(oe, e));
            });
          var Yt = /([\+\-]|\d\d)/gi;
          function Ut(e, t) {
            var n = (t || "").match(e);
            if (null === n) return null;
            var r = ((n[n.length - 1] || []) + "").match(Yt) || ["-", 0, 0],
              i = 60 * r[1] + w(r[2]);
            return 0 === i ? 0 : "+" === r[0] ? i : -i;
          }
          function Bt(e, t) {
            var n, i;
            return t._isUTC
              ? ((n = t.clone()),
                (i =
                  (x(e) || s(e) ? e.valueOf() : It(e).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + i),
                r.updateOffset(n, !1),
                n)
              : It(e).local();
          }
          function Ht(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
          }
          function qt() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          r.updateOffset = function () {};
          var Gt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            $t =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function Kt(e, t) {
            var n,
              r,
              i,
              a = e,
              o = null;
            return (
              Wt(e)
                ? (a = { ms: e._milliseconds, d: e._days, M: e._months })
                : l(e)
                ? ((a = {}), t ? (a[t] = e) : (a.milliseconds = e))
                : (o = Gt.exec(e))
                ? ((n = "-" === o[1] ? -1 : 1),
                  (a = {
                    y: 0,
                    d: w(o[ye]) * n,
                    h: w(o[be]) * n,
                    m: w(o[xe]) * n,
                    s: w(o[_e]) * n,
                    ms: w(jt(1e3 * o[we])) * n,
                  }))
                : (o = $t.exec(e))
                ? ((n = "-" === o[1] ? -1 : 1),
                  (a = {
                    y: Qt(o[2], n),
                    M: Qt(o[3], n),
                    w: Qt(o[4], n),
                    d: Qt(o[5], n),
                    h: Qt(o[6], n),
                    m: Qt(o[7], n),
                    s: Qt(o[8], n),
                  }))
                : null == a
                ? (a = {})
                : "object" === typeof a &&
                  ("from" in a || "to" in a) &&
                  ((i = (function (e, t) {
                    var n;
                    return e.isValid() && t.isValid()
                      ? ((t = Bt(t, e)),
                        e.isBefore(t)
                          ? (n = Zt(e, t))
                          : (((n = Zt(t, e)).milliseconds = -n.milliseconds),
                            (n.months = -n.months)),
                        n)
                      : { milliseconds: 0, months: 0 };
                  })(It(a.from), It(a.to))),
                  ((a = {}).ms = i.milliseconds),
                  (a.M = i.months)),
              (r = new zt(a)),
              Wt(e) && c(e, "_locale") && (r._locale = e._locale),
              r
            );
          }
          function Qt(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function Zt(e, t) {
            var n = {};
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e.clone().add(n.months, "M").isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, "M")),
              n
            );
          }
          function Xt(e, t) {
            return function (n, r) {
              var i;
              return (
                null === r ||
                  isNaN(+r) ||
                  (P(
                    t,
                    "moment()." +
                      t +
                      "(period, number) is deprecated. Please use moment()." +
                      t +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (i = n),
                  (n = r),
                  (r = i)),
                Jt(this, Kt((n = "string" === typeof n ? +n : n), r), e),
                this
              );
            };
          }
          function Jt(e, t, n, i) {
            var a = t._milliseconds,
              o = jt(t._days),
              l = jt(t._months);
            e.isValid() &&
              ((i = null == i || i),
              l && Re(e, De(e, "Month") + l * n),
              o && Oe(e, "Date", De(e, "Date") + o * n),
              a && e._d.setTime(e._d.valueOf() + a * n),
              i && r.updateOffset(e, o || l));
          }
          (Kt.fn = zt.prototype),
            (Kt.invalid = function () {
              return Kt(NaN);
            });
          var en = Xt(1, "add"),
            tn = Xt(-1, "subtract");
          function nn(e, t) {
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              r = e.clone().add(n, "months");
            return (
              -(
                n +
                (t - r < 0
                  ? (t - r) / (r - e.clone().add(n - 1, "months"))
                  : (t - r) / (e.clone().add(n + 1, "months") - r))
              ) || 0
            );
          }
          function rn(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : (null != (t = gt(e)) && (this._locale = t), this);
          }
          (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var an = M(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function on() {
            return this._locale;
          }
          var ln = 1e3,
            sn = 60 * ln,
            un = 60 * sn,
            cn = 3506328 * un;
          function dn(e, t) {
            return ((e % t) + t) % t;
          }
          function fn(e, t, n) {
            return e < 100 && e >= 0
              ? new Date(e + 400, t, n) - cn
              : new Date(e, t, n).valueOf();
          }
          function hn(e, t, n) {
            return e < 100 && e >= 0
              ? Date.UTC(e + 400, t, n) - cn
              : Date.UTC(e, t, n);
          }
          function pn(e, t) {
            U(0, [e, e.length], 0, t);
          }
          function gn(e, t, n, r, i) {
            var a;
            return null == e
              ? qe(this, r, i).year
              : (t > (a = Ge(e, r, i)) && (t = a),
                mn.call(this, e, t, n, r, i));
          }
          function mn(e, t, n, r, i) {
            var a = He(e, t, n, r, i),
              o = Ue(a.year, 0, a.dayOfYear);
            return (
              this.year(o.getUTCFullYear()),
              this.month(o.getUTCMonth()),
              this.date(o.getUTCDate()),
              this
            );
          }
          U(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
            U(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            pn("gggg", "weekYear"),
            pn("ggggg", "weekYear"),
            pn("GGGG", "isoWeekYear"),
            pn("GGGGG", "isoWeekYear"),
            I("weekYear", "gg"),
            I("isoWeekYear", "GG"),
            R("weekYear", 1),
            R("isoWeekYear", 1),
            ue("G", ie),
            ue("g", ie),
            ue("GG", Z, G),
            ue("gg", Z, G),
            ue("GGGG", te, K),
            ue("gggg", te, K),
            ue("GGGGG", ne, Q),
            ue("ggggg", ne, Q),
            pe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
              t[r.substr(0, 2)] = w(e);
            }),
            pe(["gg", "GG"], function (e, t, n, i) {
              t[i] = r.parseTwoDigitYear(e);
            }),
            U("Q", 0, "Qo", "quarter"),
            I("quarter", "Q"),
            R("quarter", 7),
            ue("Q", q),
            he("Q", function (e, t) {
              t[ve] = 3 * (w(e) - 1);
            }),
            U("D", ["DD", 2], "Do", "date"),
            I("date", "D"),
            R("date", 9),
            ue("D", Z),
            ue("DD", Z, G),
            ue("Do", function (e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            he(["D", "DD"], ye),
            he("Do", function (e, t) {
              t[ye] = w(e.match(Z)[0]);
            });
          var vn = Ee("Date", !0);
          U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            I("dayOfYear", "DDD"),
            R("dayOfYear", 4),
            ue("DDD", ee),
            ue("DDDD", $),
            he(["DDD", "DDDD"], function (e, t, n) {
              n._dayOfYear = w(e);
            }),
            U("m", ["mm", 2], 0, "minute"),
            I("minute", "m"),
            R("minute", 14),
            ue("m", Z),
            ue("mm", Z, G),
            he(["m", "mm"], xe);
          var yn = Ee("Minutes", !1);
          U("s", ["ss", 2], 0, "second"),
            I("second", "s"),
            R("second", 15),
            ue("s", Z),
            ue("ss", Z, G),
            he(["s", "ss"], _e);
          var bn,
            xn = Ee("Seconds", !1);
          for (
            U("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              U(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              U(0, ["SSS", 3], 0, "millisecond"),
              U(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              U(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              U(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              U(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              U(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              U(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              I("millisecond", "ms"),
              R("millisecond", 16),
              ue("S", ee, q),
              ue("SS", ee, G),
              ue("SSS", ee, $),
              bn = "SSSS";
            bn.length <= 9;
            bn += "S"
          )
            ue(bn, re);
          function _n(e, t) {
            t[we] = w(1e3 * ("0." + e));
          }
          for (bn = "S"; bn.length <= 9; bn += "S") he(bn, _n);
          var wn = Ee("Milliseconds", !1);
          U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
          var kn = b.prototype;
          function Sn(e) {
            return e;
          }
          (kn.add = en),
            (kn.calendar = function (e, t) {
              var n = e || It(),
                i = Bt(n, this).startOf("day"),
                a = r.calendarFormat(this, i) || "sameElse",
                o = t && (E(t[a]) ? t[a].call(this, n) : t[a]);
              return this.format(
                o || this.localeData().calendar(a, this, It(n))
              );
            }),
            (kn.clone = function () {
              return new b(this);
            }),
            (kn.diff = function (e, t, n) {
              var r, i, a;
              if (!this.isValid()) return NaN;
              if (!(r = Bt(e, this)).isValid()) return NaN;
              switch (
                ((i = 6e4 * (r.utcOffset() - this.utcOffset())), (t = F(t)))
              ) {
                case "year":
                  a = nn(this, r) / 12;
                  break;
                case "month":
                  a = nn(this, r);
                  break;
                case "quarter":
                  a = nn(this, r) / 3;
                  break;
                case "second":
                  a = (this - r) / 1e3;
                  break;
                case "minute":
                  a = (this - r) / 6e4;
                  break;
                case "hour":
                  a = (this - r) / 36e5;
                  break;
                case "day":
                  a = (this - r - i) / 864e5;
                  break;
                case "week":
                  a = (this - r - i) / 6048e5;
                  break;
                default:
                  a = this - r;
              }
              return n ? a : _(a);
            }),
            (kn.endOf = function (e) {
              var t;
              if (
                void 0 === (e = F(e)) ||
                "millisecond" === e ||
                !this.isValid()
              )
                return this;
              var n = this._isUTC ? hn : fn;
              switch (e) {
                case "year":
                  t = n(this.year() + 1, 0, 1) - 1;
                  break;
                case "quarter":
                  t =
                    n(this.year(), this.month() - (this.month() % 3) + 3, 1) -
                    1;
                  break;
                case "month":
                  t = n(this.year(), this.month() + 1, 1) - 1;
                  break;
                case "week":
                  t =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday() + 7
                    ) - 1;
                  break;
                case "isoWeek":
                  t =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                  break;
                case "day":
                case "date":
                  t = n(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case "hour":
                  (t = this._d.valueOf()),
                    (t +=
                      un -
                      dn(t + (this._isUTC ? 0 : this.utcOffset() * sn), un) -
                      1);
                  break;
                case "minute":
                  (t = this._d.valueOf()), (t += sn - dn(t, sn) - 1);
                  break;
                case "second":
                  (t = this._d.valueOf()), (t += ln - dn(t, ln) - 1);
              }
              return this._d.setTime(t), r.updateOffset(this, !0), this;
            }),
            (kn.format = function (e) {
              e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
              var t = B(this, e);
              return this.localeData().postformat(t);
            }),
            (kn.from = function (e, t) {
              return this.isValid() &&
                ((x(e) && e.isValid()) || It(e).isValid())
                ? Kt({ to: this, from: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
            }),
            (kn.fromNow = function (e) {
              return this.from(It(), e);
            }),
            (kn.to = function (e, t) {
              return this.isValid() &&
                ((x(e) && e.isValid()) || It(e).isValid())
                ? Kt({ from: this, to: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
            }),
            (kn.toNow = function (e) {
              return this.to(It(), e);
            }),
            (kn.get = function (e) {
              return E(this[(e = F(e))]) ? this[e]() : this;
            }),
            (kn.invalidAt = function () {
              return h(this).overflow;
            }),
            (kn.isAfter = function (e, t) {
              var n = x(e) ? e : It(e);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (t = F(t) || "millisecond")
                  ? this.valueOf() > n.valueOf()
                  : n.valueOf() < this.clone().startOf(t).valueOf())
              );
            }),
            (kn.isBefore = function (e, t) {
              var n = x(e) ? e : It(e);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (t = F(t) || "millisecond")
                  ? this.valueOf() < n.valueOf()
                  : this.clone().endOf(t).valueOf() < n.valueOf())
              );
            }),
            (kn.isBetween = function (e, t, n, r) {
              var i = x(e) ? e : It(e),
                a = x(t) ? t : It(t);
              return (
                !!(this.isValid() && i.isValid() && a.isValid()) &&
                ("(" === (r = r || "()")[0]
                  ? this.isAfter(i, n)
                  : !this.isBefore(i, n)) &&
                (")" === r[1] ? this.isBefore(a, n) : !this.isAfter(a, n))
              );
            }),
            (kn.isSame = function (e, t) {
              var n,
                r = x(e) ? e : It(e);
              return (
                !(!this.isValid() || !r.isValid()) &&
                ("millisecond" === (t = F(t) || "millisecond")
                  ? this.valueOf() === r.valueOf()
                  : ((n = r.valueOf()),
                    this.clone().startOf(t).valueOf() <= n &&
                      n <= this.clone().endOf(t).valueOf()))
              );
            }),
            (kn.isSameOrAfter = function (e, t) {
              return this.isSame(e, t) || this.isAfter(e, t);
            }),
            (kn.isSameOrBefore = function (e, t) {
              return this.isSame(e, t) || this.isBefore(e, t);
            }),
            (kn.isValid = function () {
              return p(this);
            }),
            (kn.lang = an),
            (kn.locale = rn),
            (kn.localeData = on),
            (kn.max = Nt),
            (kn.min = Ft),
            (kn.parsingFlags = function () {
              return d({}, h(this));
            }),
            (kn.set = function (e, t) {
              if ("object" === typeof e)
                for (
                  var n = (function (e) {
                      var t = [];
                      for (var n in e) t.push({ unit: n, priority: L[n] });
                      return (
                        t.sort(function (e, t) {
                          return e.priority - t.priority;
                        }),
                        t
                      );
                    })((e = N(e))),
                    r = 0;
                  r < n.length;
                  r++
                )
                  this[n[r].unit](e[n[r].unit]);
              else if (E(this[(e = F(e))])) return this[e](t);
              return this;
            }),
            (kn.startOf = function (e) {
              var t;
              if (
                void 0 === (e = F(e)) ||
                "millisecond" === e ||
                !this.isValid()
              )
                return this;
              var n = this._isUTC ? hn : fn;
              switch (e) {
                case "year":
                  t = n(this.year(), 0, 1);
                  break;
                case "quarter":
                  t = n(this.year(), this.month() - (this.month() % 3), 1);
                  break;
                case "month":
                  t = n(this.year(), this.month(), 1);
                  break;
                case "week":
                  t = n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                  );
                  break;
                case "isoWeek":
                  t = n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                  );
                  break;
                case "day":
                case "date":
                  t = n(this.year(), this.month(), this.date());
                  break;
                case "hour":
                  (t = this._d.valueOf()),
                    (t -= dn(
                      t + (this._isUTC ? 0 : this.utcOffset() * sn),
                      un
                    ));
                  break;
                case "minute":
                  (t = this._d.valueOf()), (t -= dn(t, sn));
                  break;
                case "second":
                  (t = this._d.valueOf()), (t -= dn(t, ln));
              }
              return this._d.setTime(t), r.updateOffset(this, !0), this;
            }),
            (kn.subtract = tn),
            (kn.toArray = function () {
              var e = this;
              return [
                e.year(),
                e.month(),
                e.date(),
                e.hour(),
                e.minute(),
                e.second(),
                e.millisecond(),
              ];
            }),
            (kn.toObject = function () {
              var e = this;
              return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds(),
              };
            }),
            (kn.toDate = function () {
              return new Date(this.valueOf());
            }),
            (kn.toISOString = function (e) {
              if (!this.isValid()) return null;
              var t = !0 !== e,
                n = t ? this.clone().utc() : this;
              return n.year() < 0 || n.year() > 9999
                ? B(
                    n,
                    t
                      ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  )
                : E(Date.prototype.toISOString)
                ? t
                  ? this.toDate().toISOString()
                  : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                      .toISOString()
                      .replace("Z", B(n, "Z"))
                : B(
                    n,
                    t
                      ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  );
            }),
            (kn.inspect = function () {
              if (!this.isValid())
                return "moment.invalid(/* " + this._i + " */)";
              var e = "moment",
                t = "";
              this.isLocal() ||
                ((e =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (t = "Z"));
              var n = "[" + e + '("]',
                r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                i = t + '[")]';
              return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i);
            }),
            (kn.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (kn.toString = function () {
              return this.clone()
                .locale("en")
                .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
            }),
            (kn.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (kn.valueOf = function () {
              return this._d.valueOf() - 6e4 * (this._offset || 0);
            }),
            (kn.creationData = function () {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }),
            (kn.year = Pe),
            (kn.isLeapYear = function () {
              return Te(this.year());
            }),
            (kn.weekYear = function (e) {
              return gn.call(
                this,
                e,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy
              );
            }),
            (kn.isoWeekYear = function (e) {
              return gn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }),
            (kn.quarter = kn.quarters =
              function (e) {
                return null == e
                  ? Math.ceil((this.month() + 1) / 3)
                  : this.month(3 * (e - 1) + (this.month() % 3));
              }),
            (kn.month = ze),
            (kn.daysInMonth = function () {
              return Ae(this.year(), this.month());
            }),
            (kn.week = kn.weeks =
              function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d");
              }),
            (kn.isoWeek = kn.isoWeeks =
              function (e) {
                var t = qe(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d");
              }),
            (kn.weeksInYear = function () {
              var e = this.localeData()._week;
              return Ge(this.year(), e.dow, e.doy);
            }),
            (kn.isoWeeksInYear = function () {
              return Ge(this.year(), 1, 4);
            }),
            (kn.date = vn),
            (kn.day = kn.days =
              function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e
                  ? ((e = (function (e, t) {
                      return "string" !== typeof e
                        ? e
                        : isNaN(e)
                        ? "number" === typeof (e = t.weekdaysParse(e))
                          ? e
                          : null
                        : parseInt(e, 10);
                    })(e, this.localeData())),
                    this.add(e - t, "d"))
                  : t;
              }),
            (kn.weekday = function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return null == e ? t : this.add(e - t, "d");
            }),
            (kn.isoWeekday = function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              if (null != e) {
                var t = (function (e, t) {
                  return "string" === typeof e
                    ? t.weekdaysParse(e) % 7 || 7
                    : isNaN(e)
                    ? null
                    : e;
                })(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7);
              }
              return this.day() || 7;
            }),
            (kn.dayOfYear = function (e) {
              var t =
                Math.round(
                  (this.clone().startOf("day") - this.clone().startOf("year")) /
                    864e5
                ) + 1;
              return null == e ? t : this.add(e - t, "d");
            }),
            (kn.hour = kn.hours = lt),
            (kn.minute = kn.minutes = yn),
            (kn.second = kn.seconds = xn),
            (kn.millisecond = kn.milliseconds = wn),
            (kn.utcOffset = function (e, t, n) {
              var i,
                a = this._offset || 0;
              if (!this.isValid()) return null != e ? this : NaN;
              if (null != e) {
                if ("string" === typeof e) {
                  if (null === (e = Ut(oe, e))) return this;
                } else Math.abs(e) < 16 && !n && (e *= 60);
                return (
                  !this._isUTC && t && (i = Ht(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != i && this.add(i, "m"),
                  a !== e &&
                    (!t || this._changeInProgress
                      ? Jt(this, Kt(e - a, "m"), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0),
                        r.updateOffset(this, !0),
                        (this._changeInProgress = null))),
                  this
                );
              }
              return this._isUTC ? a : Ht(this);
            }),
            (kn.utc = function (e) {
              return this.utcOffset(0, e);
            }),
            (kn.local = function (e) {
              return (
                this._isUTC &&
                  (this.utcOffset(0, e),
                  (this._isUTC = !1),
                  e && this.subtract(Ht(this), "m")),
                this
              );
            }),
            (kn.parseZone = function () {
              if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
              else if ("string" === typeof this._i) {
                var e = Ut(ae, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
              }
              return this;
            }),
            (kn.hasAlignedHourOffset = function (e) {
              return (
                !!this.isValid() &&
                ((e = e ? It(e).utcOffset() : 0),
                (this.utcOffset() - e) % 60 === 0)
              );
            }),
            (kn.isDST = function () {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              );
            }),
            (kn.isLocal = function () {
              return !!this.isValid() && !this._isUTC;
            }),
            (kn.isUtcOffset = function () {
              return !!this.isValid() && this._isUTC;
            }),
            (kn.isUtc = qt),
            (kn.isUTC = qt),
            (kn.zoneAbbr = function () {
              return this._isUTC ? "UTC" : "";
            }),
            (kn.zoneName = function () {
              return this._isUTC ? "Coordinated Universal Time" : "";
            }),
            (kn.dates = M(
              "dates accessor is deprecated. Use date instead.",
              vn
            )),
            (kn.months = M(
              "months accessor is deprecated. Use month instead",
              ze
            )),
            (kn.years = M(
              "years accessor is deprecated. Use year instead",
              Pe
            )),
            (kn.zone = M(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              function (e, t) {
                return null != e
                  ? ("string" !== typeof e && (e = -e),
                    this.utcOffset(e, t),
                    this)
                  : -this.utcOffset();
              }
            )),
            (kn.isDSTShifted = M(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              function () {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if ((v(e, this), (e = Ot(e))._a)) {
                  var t = e._isUTC ? f(e._a) : It(e._a);
                  this._isDSTShifted =
                    this.isValid() && k(e._a, t.toArray()) > 0;
                } else this._isDSTShifted = !1;
                return this._isDSTShifted;
              }
            ));
          var Mn = O.prototype;
          function Tn(e, t, n, r) {
            var i = gt(),
              a = f().set(r, t);
            return i[n](a, e);
          }
          function Cn(e, t, n) {
            if ((l(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
              return Tn(e, t, n, "month");
            var r,
              i = [];
            for (r = 0; r < 12; r++) i[r] = Tn(e, r, n, "month");
            return i;
          }
          function Pn(e, t, n, r) {
            "boolean" === typeof e
              ? (l(t) && ((n = t), (t = void 0)), (t = t || ""))
              : ((n = t = e),
                (e = !1),
                l(t) && ((n = t), (t = void 0)),
                (t = t || ""));
            var i,
              a = gt(),
              o = e ? a._week.dow : 0;
            if (null != n) return Tn(t, (n + o) % 7, r, "day");
            var s = [];
            for (i = 0; i < 7; i++) s[i] = Tn(t, (i + o) % 7, r, "day");
            return s;
          }
          (Mn.calendar = function (e, t, n) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return E(r) ? r.call(t, n) : r;
          }),
            (Mn.longDateFormat = function (e) {
              var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
              return t || !n
                ? t
                : ((this._longDateFormat[e] = n.replace(
                    /MMMM|MM|DD|dddd/g,
                    function (e) {
                      return e.slice(1);
                    }
                  )),
                  this._longDateFormat[e]);
            }),
            (Mn.invalidDate = function () {
              return this._invalidDate;
            }),
            (Mn.ordinal = function (e) {
              return this._ordinal.replace("%d", e);
            }),
            (Mn.preparse = Sn),
            (Mn.postformat = Sn),
            (Mn.relativeTime = function (e, t, n, r) {
              var i = this._relativeTime[n];
              return E(i) ? i(e, t, n, r) : i.replace(/%d/i, e);
            }),
            (Mn.pastFuture = function (e, t) {
              var n = this._relativeTime[e > 0 ? "future" : "past"];
              return E(n) ? n(t) : n.replace(/%s/i, t);
            }),
            (Mn.set = function (e) {
              var t, n;
              for (n in e) E((t = e[n])) ? (this[n] = t) : (this["_" + n] = t);
              (this._config = e),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                  (this._dayOfMonthOrdinalParse.source ||
                    this._ordinalParse.source) +
                    "|" +
                    /\d{1,2}/.source
                ));
            }),
            (Mn.months = function (e, t) {
              return e
                ? i(this._months)
                  ? this._months[e.month()]
                  : this._months[
                      (this._months.isFormat || Ie).test(t)
                        ? "format"
                        : "standalone"
                    ][e.month()]
                : i(this._months)
                ? this._months
                : this._months.standalone;
            }),
            (Mn.monthsShort = function (e, t) {
              return e
                ? i(this._monthsShort)
                  ? this._monthsShort[e.month()]
                  : this._monthsShort[Ie.test(t) ? "format" : "standalone"][
                      e.month()
                    ]
                : i(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
            }),
            (Mn.monthsParse = function (e, t, n) {
              var r, i, a;
              if (this._monthsParseExact) return Le.call(this, e, t, n);
              for (
                this._monthsParse ||
                  ((this._monthsParse = []),
                  (this._longMonthsParse = []),
                  (this._shortMonthsParse = [])),
                  r = 0;
                r < 12;
                r++
              ) {
                if (
                  ((i = f([2e3, r])),
                  n &&
                    !this._longMonthsParse[r] &&
                    ((this._longMonthsParse[r] = new RegExp(
                      "^" + this.months(i, "").replace(".", "") + "$",
                      "i"
                    )),
                    (this._shortMonthsParse[r] = new RegExp(
                      "^" + this.monthsShort(i, "").replace(".", "") + "$",
                      "i"
                    ))),
                  n ||
                    this._monthsParse[r] ||
                    ((a =
                      "^" +
                      this.months(i, "") +
                      "|^" +
                      this.monthsShort(i, "")),
                    (this._monthsParse[r] = new RegExp(
                      a.replace(".", ""),
                      "i"
                    ))),
                  n && "MMMM" === t && this._longMonthsParse[r].test(e))
                )
                  return r;
                if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                  return r;
                if (!n && this._monthsParse[r].test(e)) return r;
              }
            }),
            (Mn.monthsRegex = function (e) {
              return this._monthsParseExact
                ? (c(this, "_monthsRegex") || Ve.call(this),
                  e ? this._monthsStrictRegex : this._monthsRegex)
                : (c(this, "_monthsRegex") || (this._monthsRegex = je),
                  this._monthsStrictRegex && e
                    ? this._monthsStrictRegex
                    : this._monthsRegex);
            }),
            (Mn.monthsShortRegex = function (e) {
              return this._monthsParseExact
                ? (c(this, "_monthsRegex") || Ve.call(this),
                  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (c(this, "_monthsShortRegex") ||
                    (this._monthsShortRegex = We),
                  this._monthsShortStrictRegex && e
                    ? this._monthsShortStrictRegex
                    : this._monthsShortRegex);
            }),
            (Mn.week = function (e) {
              return qe(e, this._week.dow, this._week.doy).week;
            }),
            (Mn.firstDayOfYear = function () {
              return this._week.doy;
            }),
            (Mn.firstDayOfWeek = function () {
              return this._week.dow;
            }),
            (Mn.weekdays = function (e, t) {
              var n = i(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                    e && !0 !== e && this._weekdays.isFormat.test(t)
                      ? "format"
                      : "standalone"
                  ];
              return !0 === e ? $e(n, this._week.dow) : e ? n[e.day()] : n;
            }),
            (Mn.weekdaysMin = function (e) {
              return !0 === e
                ? $e(this._weekdaysMin, this._week.dow)
                : e
                ? this._weekdaysMin[e.day()]
                : this._weekdaysMin;
            }),
            (Mn.weekdaysShort = function (e) {
              return !0 === e
                ? $e(this._weekdaysShort, this._week.dow)
                : e
                ? this._weekdaysShort[e.day()]
                : this._weekdaysShort;
            }),
            (Mn.weekdaysParse = function (e, t, n) {
              var r, i, a;
              if (this._weekdaysParseExact) return Xe.call(this, e, t, n);
              for (
                this._weekdaysParse ||
                  ((this._weekdaysParse = []),
                  (this._minWeekdaysParse = []),
                  (this._shortWeekdaysParse = []),
                  (this._fullWeekdaysParse = [])),
                  r = 0;
                r < 7;
                r++
              ) {
                if (
                  ((i = f([2e3, 1]).day(r)),
                  n &&
                    !this._fullWeekdaysParse[r] &&
                    ((this._fullWeekdaysParse[r] = new RegExp(
                      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
                      "i"
                    )),
                    (this._shortWeekdaysParse[r] = new RegExp(
                      "^" +
                        this.weekdaysShort(i, "").replace(".", "\\.?") +
                        "$",
                      "i"
                    )),
                    (this._minWeekdaysParse[r] = new RegExp(
                      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
                      "i"
                    ))),
                  this._weekdaysParse[r] ||
                    ((a =
                      "^" +
                      this.weekdays(i, "") +
                      "|^" +
                      this.weekdaysShort(i, "") +
                      "|^" +
                      this.weekdaysMin(i, "")),
                    (this._weekdaysParse[r] = new RegExp(
                      a.replace(".", ""),
                      "i"
                    ))),
                  n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
                )
                  return r;
                if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
                  return r;
                if (n && "dd" === t && this._minWeekdaysParse[r].test(e))
                  return r;
                if (!n && this._weekdaysParse[r].test(e)) return r;
              }
            }),
            (Mn.weekdaysRegex = function (e) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || nt.call(this),
                  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Je),
                  this._weekdaysStrictRegex && e
                    ? this._weekdaysStrictRegex
                    : this._weekdaysRegex);
            }),
            (Mn.weekdaysShortRegex = function (e) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || nt.call(this),
                  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (c(this, "_weekdaysShortRegex") ||
                    (this._weekdaysShortRegex = et),
                  this._weekdaysShortStrictRegex && e
                    ? this._weekdaysShortStrictRegex
                    : this._weekdaysShortRegex);
            }),
            (Mn.weekdaysMinRegex = function (e) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || nt.call(this),
                  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (c(this, "_weekdaysMinRegex") ||
                    (this._weekdaysMinRegex = tt),
                  this._weekdaysMinStrictRegex && e
                    ? this._weekdaysMinStrictRegex
                    : this._weekdaysMinRegex);
            }),
            (Mn.isPM = function (e) {
              return "p" === (e + "").toLowerCase().charAt(0);
            }),
            (Mn.meridiem = function (e, t, n) {
              return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
            }),
            ht("en", {
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10;
                return (
                  e +
                  (1 === w((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th")
                );
              },
            }),
            (r.lang = M(
              "moment.lang is deprecated. Use moment.locale instead.",
              ht
            )),
            (r.langData = M(
              "moment.langData is deprecated. Use moment.localeData instead.",
              gt
            ));
          var En = Math.abs;
          function Dn(e, t, n, r) {
            var i = Kt(t, n);
            return (
              (e._milliseconds += r * i._milliseconds),
              (e._days += r * i._days),
              (e._months += r * i._months),
              e._bubble()
            );
          }
          function On(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function An(e) {
            return (4800 * e) / 146097;
          }
          function In(e) {
            return (146097 * e) / 4800;
          }
          function Fn(e) {
            return function () {
              return this.as(e);
            };
          }
          var Nn = Fn("ms"),
            Ln = Fn("s"),
            Rn = Fn("m"),
            zn = Fn("h"),
            Wn = Fn("d"),
            jn = Fn("w"),
            Vn = Fn("M"),
            Yn = Fn("Q"),
            Un = Fn("y");
          function Bn(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var Hn = Bn("milliseconds"),
            qn = Bn("seconds"),
            Gn = Bn("minutes"),
            $n = Bn("hours"),
            Kn = Bn("days"),
            Qn = Bn("months"),
            Zn = Bn("years"),
            Xn = Math.round,
            Jn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
          function er(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r);
          }
          var tr = Math.abs;
          function nr(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function rr() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n = tr(this._milliseconds) / 1e3,
              r = tr(this._days),
              i = tr(this._months);
            (e = _(n / 60)), (t = _(e / 60)), (n %= 60), (e %= 60);
            var a = _(i / 12),
              o = (i %= 12),
              l = r,
              s = t,
              u = e,
              c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
              d = this.asSeconds();
            if (!d) return "P0D";
            var f = d < 0 ? "-" : "",
              h = nr(this._months) !== nr(d) ? "-" : "",
              p = nr(this._days) !== nr(d) ? "-" : "",
              g = nr(this._milliseconds) !== nr(d) ? "-" : "";
            return (
              f +
              "P" +
              (a ? h + a + "Y" : "") +
              (o ? h + o + "M" : "") +
              (l ? p + l + "D" : "") +
              (s || u || c ? "T" : "") +
              (s ? g + s + "H" : "") +
              (u ? g + u + "M" : "") +
              (c ? g + c + "S" : "")
            );
          }
          var ir = zt.prototype;
          return (
            (ir.isValid = function () {
              return this._isValid;
            }),
            (ir.abs = function () {
              var e = this._data;
              return (
                (this._milliseconds = En(this._milliseconds)),
                (this._days = En(this._days)),
                (this._months = En(this._months)),
                (e.milliseconds = En(e.milliseconds)),
                (e.seconds = En(e.seconds)),
                (e.minutes = En(e.minutes)),
                (e.hours = En(e.hours)),
                (e.months = En(e.months)),
                (e.years = En(e.years)),
                this
              );
            }),
            (ir.add = function (e, t) {
              return Dn(this, e, t, 1);
            }),
            (ir.subtract = function (e, t) {
              return Dn(this, e, t, -1);
            }),
            (ir.as = function (e) {
              if (!this.isValid()) return NaN;
              var t,
                n,
                r = this._milliseconds;
              if ("month" === (e = F(e)) || "quarter" === e || "year" === e)
                switch (
                  ((t = this._days + r / 864e5), (n = this._months + An(t)), e)
                ) {
                  case "month":
                    return n;
                  case "quarter":
                    return n / 3;
                  case "year":
                    return n / 12;
                }
              else
                switch (((t = this._days + Math.round(In(this._months))), e)) {
                  case "week":
                    return t / 7 + r / 6048e5;
                  case "day":
                    return t + r / 864e5;
                  case "hour":
                    return 24 * t + r / 36e5;
                  case "minute":
                    return 1440 * t + r / 6e4;
                  case "second":
                    return 86400 * t + r / 1e3;
                  case "millisecond":
                    return Math.floor(864e5 * t) + r;
                  default:
                    throw new Error("Unknown unit " + e);
                }
            }),
            (ir.asMilliseconds = Nn),
            (ir.asSeconds = Ln),
            (ir.asMinutes = Rn),
            (ir.asHours = zn),
            (ir.asDays = Wn),
            (ir.asWeeks = jn),
            (ir.asMonths = Vn),
            (ir.asQuarters = Yn),
            (ir.asYears = Un),
            (ir.valueOf = function () {
              return this.isValid()
                ? this._milliseconds +
                    864e5 * this._days +
                    (this._months % 12) * 2592e6 +
                    31536e6 * w(this._months / 12)
                : NaN;
            }),
            (ir._bubble = function () {
              var e,
                t,
                n,
                r,
                i,
                a = this._milliseconds,
                o = this._days,
                l = this._months,
                s = this._data;
              return (
                (a >= 0 && o >= 0 && l >= 0) ||
                  (a <= 0 && o <= 0 && l <= 0) ||
                  ((a += 864e5 * On(In(l) + o)), (o = 0), (l = 0)),
                (s.milliseconds = a % 1e3),
                (e = _(a / 1e3)),
                (s.seconds = e % 60),
                (t = _(e / 60)),
                (s.minutes = t % 60),
                (n = _(t / 60)),
                (s.hours = n % 24),
                (o += _(n / 24)),
                (i = _(An(o))),
                (l += i),
                (o -= On(In(i))),
                (r = _(l / 12)),
                (l %= 12),
                (s.days = o),
                (s.months = l),
                (s.years = r),
                this
              );
            }),
            (ir.clone = function () {
              return Kt(this);
            }),
            (ir.get = function (e) {
              return (e = F(e)), this.isValid() ? this[e + "s"]() : NaN;
            }),
            (ir.milliseconds = Hn),
            (ir.seconds = qn),
            (ir.minutes = Gn),
            (ir.hours = $n),
            (ir.days = Kn),
            (ir.weeks = function () {
              return _(this.days() / 7);
            }),
            (ir.months = Qn),
            (ir.years = Zn),
            (ir.humanize = function (e) {
              if (!this.isValid()) return this.localeData().invalidDate();
              var t = this.localeData(),
                n = (function (e, t, n) {
                  var r = Kt(e).abs(),
                    i = Xn(r.as("s")),
                    a = Xn(r.as("m")),
                    o = Xn(r.as("h")),
                    l = Xn(r.as("d")),
                    s = Xn(r.as("M")),
                    u = Xn(r.as("y")),
                    c = (i <= Jn.ss && ["s", i]) ||
                      (i < Jn.s && ["ss", i]) ||
                      (a <= 1 && ["m"]) ||
                      (a < Jn.m && ["mm", a]) ||
                      (o <= 1 && ["h"]) ||
                      (o < Jn.h && ["hh", o]) ||
                      (l <= 1 && ["d"]) ||
                      (l < Jn.d && ["dd", l]) ||
                      (s <= 1 && ["M"]) ||
                      (s < Jn.M && ["MM", s]) ||
                      (u <= 1 && ["y"]) || ["yy", u];
                  return (
                    (c[2] = t), (c[3] = +e > 0), (c[4] = n), er.apply(null, c)
                  );
                })(this, !e, t);
              return e && (n = t.pastFuture(+this, n)), t.postformat(n);
            }),
            (ir.toISOString = rr),
            (ir.toString = rr),
            (ir.toJSON = rr),
            (ir.locale = rn),
            (ir.localeData = on),
            (ir.toIsoString = M(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              rr
            )),
            (ir.lang = an),
            U("X", 0, 0, "unix"),
            U("x", 0, 0, "valueOf"),
            ue("x", ie),
            ue("X", /[+-]?\d+(\.\d{1,3})?/),
            he("X", function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e, 10));
            }),
            he("x", function (e, t, n) {
              n._d = new Date(w(e));
            }),
            (r.version = "2.24.0"),
            (t = It),
            (r.fn = kn),
            (r.min = function () {
              return Lt("isBefore", [].slice.call(arguments, 0));
            }),
            (r.max = function () {
              return Lt("isAfter", [].slice.call(arguments, 0));
            }),
            (r.now = function () {
              return Date.now ? Date.now() : +new Date();
            }),
            (r.utc = f),
            (r.unix = function (e) {
              return It(1e3 * e);
            }),
            (r.months = function (e, t) {
              return Cn(e, t, "months");
            }),
            (r.isDate = s),
            (r.locale = ht),
            (r.invalid = g),
            (r.duration = Kt),
            (r.isMoment = x),
            (r.weekdays = function (e, t, n) {
              return Pn(e, t, n, "weekdays");
            }),
            (r.parseZone = function () {
              return It.apply(null, arguments).parseZone();
            }),
            (r.localeData = gt),
            (r.isDuration = Wt),
            (r.monthsShort = function (e, t) {
              return Cn(e, t, "monthsShort");
            }),
            (r.weekdaysMin = function (e, t, n) {
              return Pn(e, t, n, "weekdaysMin");
            }),
            (r.defineLocale = pt),
            (r.updateLocale = function (e, t) {
              if (null != t) {
                var n,
                  r,
                  i = st;
                null != (r = ft(e)) && (i = r._config),
                  (t = D(i, t)),
                  ((n = new O(t)).parentLocale = ut[e]),
                  (ut[e] = n),
                  ht(e);
              } else
                null != ut[e] &&
                  (null != ut[e].parentLocale
                    ? (ut[e] = ut[e].parentLocale)
                    : null != ut[e] && delete ut[e]);
              return ut[e];
            }),
            (r.locales = function () {
              return T(ut);
            }),
            (r.weekdaysShort = function (e, t, n) {
              return Pn(e, t, n, "weekdaysShort");
            }),
            (r.normalizeUnits = F),
            (r.relativeTimeRounding = function (e) {
              return void 0 === e
                ? Xn
                : "function" === typeof e && ((Xn = e), !0);
            }),
            (r.relativeTimeThreshold = function (e, t) {
              return (
                void 0 !== Jn[e] &&
                (void 0 === t
                  ? Jn[e]
                  : ((Jn[e] = t), "s" === e && (Jn.ss = t - 1), !0))
              );
            }),
            (r.calendarFormat = function (e, t) {
              var n = e.diff(t, "days", !0);
              return n < -6
                ? "sameElse"
                : n < -1
                ? "lastWeek"
                : n < 0
                ? "lastDay"
                : n < 1
                ? "sameDay"
                : n < 2
                ? "nextDay"
                : n < 7
                ? "nextWeek"
                : "sameElse";
            }),
            (r.prototype = kn),
            (r.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM",
            }),
            r
          );
        })();
      }.call(this, n(17)(e)));
    },
    function (e, t, n) {
      var r = n(30),
        i = n(35),
        a = n(98),
        o = n(102),
        l = n(120),
        s = n(3),
        u = n(37),
        c = n(39),
        d = 1,
        f = "[object Arguments]",
        h = "[object Array]",
        p = "[object Object]",
        g = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, m, v, y) {
        var b = s(e),
          x = s(t),
          _ = b ? h : l(e),
          w = x ? h : l(t),
          k = (_ = _ == f ? p : _) == p,
          S = (w = w == f ? p : w) == p,
          M = _ == w;
        if (M && u(e)) {
          if (!u(t)) return !1;
          (b = !0), (k = !1);
        }
        if (M && !k)
          return (
            y || (y = new r()),
            b || c(e) ? i(e, t, n, m, v, y) : a(e, t, _, n, m, v, y)
          );
        if (!(n & d)) {
          var T = k && g.call(e, "__wrapped__"),
            C = S && g.call(t, "__wrapped__");
          if (T || C) {
            var P = T ? e.value() : e,
              E = C ? t.value() : t;
            return y || (y = new r()), v(P, E, n, m, y);
          }
        }
        return !!M && (y || (y = new r()), o(e, t, n, m, v, y));
      };
    },
    function (e, t) {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (e, t, n) {
      var r = n(11),
        i = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
        );
      };
    },
    function (e, t, n) {
      var r = n(11);
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    function (e, t, n) {
      var r = n(11);
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    function (e, t, n) {
      var r = n(11);
      e.exports = function (e, t) {
        var n = this.__data__,
          i = r(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
      };
    },
    function (e, t, n) {
      var r = n(10);
      e.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    function (e, t, n) {
      var r = n(10),
        i = n(19),
        a = n(21),
        o = 200;
      e.exports = function (e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var l = n.__data__;
          if (!i || l.length < o - 1)
            return l.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new a(l);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
    },
    function (e, t, n) {
      var r = n(32),
        i = n(78),
        a = n(20),
        o = n(34),
        l = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        u = Object.prototype,
        c = s.toString,
        d = u.hasOwnProperty,
        f = RegExp(
          "^" +
            c
              .call(d)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!a(e) || i(e)) && (r(e) ? f : l).test(o(e));
      };
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(12),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        l = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = a.call(e, l),
          n = e[l];
        try {
          e[l] = void 0;
          var r = !0;
        } catch (s) {}
        var i = o.call(e);
        return r && (t ? (e[l] = n) : delete e[l]), i;
      };
    },
    function (e, t) {
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return n.call(e);
      };
    },
    function (e, t, n) {
      var r = n(79),
        i = (function () {
          var e = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })();
      e.exports = function (e) {
        return !!i && i in e;
      };
    },
    function (e, t, n) {
      var r = n(2)["__core-js_shared__"];
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    function (e, t, n) {
      var r = n(82),
        i = n(10),
        a = n(19);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (a || i)(),
            string: new r(),
          });
      };
    },
    function (e, t, n) {
      var r = n(83),
        i = n(84),
        a = n(85),
        o = n(86),
        l = n(87);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (s.prototype.clear = r),
        (s.prototype.delete = i),
        (s.prototype.get = a),
        (s.prototype.has = o),
        (s.prototype.set = l),
        (e.exports = s);
    },
    function (e, t, n) {
      var r = n(13);
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function (e, t, n) {
      var r = n(13),
        i = "__lodash_hash_undefined__",
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return n === i ? void 0 : n;
        }
        return a.call(t, e) ? t[e] : void 0;
      };
    },
    function (e, t, n) {
      var r = n(13),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e);
      };
    },
    function (e, t, n) {
      var r = n(13),
        i = "__lodash_hash_undefined__";
      e.exports = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? i : t),
          this
        );
      };
    },
    function (e, t, n) {
      var r = n(14);
      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    function (e, t, n) {
      var r = n(14);
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    function (e, t, n) {
      var r = n(14);
      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    function (e, t, n) {
      var r = n(14);
      e.exports = function (e, t) {
        var n = r(this, e),
          i = n.size;
        return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    function (e, t, n) {
      var r = n(21),
        i = n(94),
        a = n(95);
      function o(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (o.prototype.add = o.prototype.push = i),
        (o.prototype.has = a),
        (e.exports = o);
    },
    function (e, t) {
      var n = "__lodash_hash_undefined__";
      e.exports = function (e) {
        return this.__data__.set(e, n), this;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    function (e, t, n) {
      var r = n(12),
        i = n(99),
        a = n(31),
        o = n(35),
        l = n(100),
        s = n(101),
        u = 1,
        c = 2,
        d = "[object Boolean]",
        f = "[object Date]",
        h = "[object Error]",
        p = "[object Map]",
        g = "[object Number]",
        m = "[object RegExp]",
        v = "[object Set]",
        y = "[object String]",
        b = "[object Symbol]",
        x = "[object ArrayBuffer]",
        _ = "[object DataView]",
        w = r ? r.prototype : void 0,
        k = w ? w.valueOf : void 0;
      e.exports = function (e, t, n, r, w, S, M) {
        switch (n) {
          case _:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case x:
            return !(e.byteLength != t.byteLength || !S(new i(e), new i(t)));
          case d:
          case f:
          case g:
            return a(+e, +t);
          case h:
            return e.name == t.name && e.message == t.message;
          case m:
          case y:
            return e == t + "";
          case p:
            var T = l;
          case v:
            var C = r & u;
            if ((T || (T = s), e.size != t.size && !C)) return !1;
            var P = M.get(e);
            if (P) return P == t;
            (r |= c), M.set(e, t);
            var E = o(T(e), T(t), r, w, S, M);
            return M.delete(e), E;
          case b:
            if (k) return k.call(e) == k.call(t);
        }
        return !1;
      };
    },
    function (e, t, n) {
      var r = n(2).Uint8Array;
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    function (e, t, n) {
      var r = n(103),
        i = 1,
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, o, l, s) {
        var u = n & i,
          c = r(e),
          d = c.length;
        if (d != r(t).length && !u) return !1;
        for (var f = d; f--; ) {
          var h = c[f];
          if (!(u ? h in t : a.call(t, h))) return !1;
        }
        var p = s.get(e);
        if (p && s.get(t)) return p == t;
        var g = !0;
        s.set(e, t), s.set(t, e);
        for (var m = u; ++f < d; ) {
          var v = e[(h = c[f])],
            y = t[h];
          if (o) var b = u ? o(y, v, h, t, e, s) : o(v, y, h, e, t, s);
          if (!(void 0 === b ? v === y || l(v, y, n, o, s) : b)) {
            g = !1;
            break;
          }
          m || (m = "constructor" == h);
        }
        if (g && !m) {
          var x = e.constructor,
            _ = t.constructor;
          x != _ &&
            "constructor" in e &&
            "constructor" in t &&
            !(
              "function" == typeof x &&
              x instanceof x &&
              "function" == typeof _ &&
              _ instanceof _
            ) &&
            (g = !1);
        }
        return s.delete(e), s.delete(t), g;
      };
    },
    function (e, t, n) {
      var r = n(104),
        i = n(106),
        a = n(22);
      e.exports = function (e) {
        return r(e, a, i);
      };
    },
    function (e, t, n) {
      var r = n(105),
        i = n(3);
      e.exports = function (e, t, n) {
        var a = t(e);
        return i(e) ? a : r(a, n(e));
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
        return e;
      };
    },
    function (e, t, n) {
      var r = n(107),
        i = n(108),
        a = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        l = o
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  r(o(e), function (t) {
                    return a.call(e, t);
                  }));
            }
          : i;
      e.exports = l;
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, i = 0, a = [];
          ++n < r;

        ) {
          var o = e[n];
          t(o, n, e) && (a[i++] = o);
        }
        return a;
      };
    },
    function (e, t) {
      e.exports = function () {
        return [];
      };
    },
    function (e, t, n) {
      var r = n(110),
        i = n(36),
        a = n(3),
        o = n(37),
        l = n(38),
        s = n(39),
        u = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var n = a(e),
          c = !n && i(e),
          d = !n && !c && o(e),
          f = !n && !c && !d && s(e),
          h = n || c || d || f,
          p = h ? r(e.length, String) : [],
          g = p.length;
        for (var m in e)
          (!t && !u.call(e, m)) ||
            (h &&
              ("length" == m ||
                (d && ("offset" == m || "parent" == m)) ||
                (f &&
                  ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
                l(m, g))) ||
            p.push(m);
        return p;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
    },
    function (e, t, n) {
      var r = n(7),
        i = n(8),
        a = "[object Arguments]";
      e.exports = function (e) {
        return i(e) && r(e) == a;
      };
    },
    function (e, t) {
      e.exports = function () {
        return !1;
      };
    },
    function (e, t, n) {
      var r = n(7),
        i = n(23),
        a = n(8),
        o = {};
      (o["[object Float32Array]"] =
        o["[object Float64Array]"] =
        o["[object Int8Array]"] =
        o["[object Int16Array]"] =
        o["[object Int32Array]"] =
        o["[object Uint8Array]"] =
        o["[object Uint8ClampedArray]"] =
        o["[object Uint16Array]"] =
        o["[object Uint32Array]"] =
          !0),
        (o["[object Arguments]"] =
          o["[object Array]"] =
          o["[object ArrayBuffer]"] =
          o["[object Boolean]"] =
          o["[object DataView]"] =
          o["[object Date]"] =
          o["[object Error]"] =
          o["[object Function]"] =
          o["[object Map]"] =
          o["[object Number]"] =
          o["[object Object]"] =
          o["[object RegExp]"] =
          o["[object Set]"] =
          o["[object String]"] =
          o["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return a(e) && i(e.length) && !!o[r(e)];
        });
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    function (e, t, n) {
      (function (e) {
        var r = n(33),
          i = t && !t.nodeType && t,
          a = i && "object" == typeof e && e && !e.nodeType && e,
          o = a && a.exports === i && r.process,
          l = (function () {
            try {
              var e = a && a.require && a.require("util").types;
              return e || (o && o.binding && o.binding("util"));
            } catch (t) {}
          })();
        e.exports = l;
      }.call(this, n(17)(e)));
    },
    function (e, t, n) {
      var r = n(117),
        i = n(118),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return i(e);
        var t = [];
        for (var n in Object(e))
          a.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
    },
    function (e, t) {
      var n = Object.prototype;
      e.exports = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || n);
      };
    },
    function (e, t, n) {
      var r = n(119)(Object.keys, Object);
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    function (e, t, n) {
      var r = n(121),
        i = n(19),
        a = n(122),
        o = n(123),
        l = n(124),
        s = n(7),
        u = n(34),
        c = u(r),
        d = u(i),
        f = u(a),
        h = u(o),
        p = u(l),
        g = s;
      ((r && "[object DataView]" != g(new r(new ArrayBuffer(1)))) ||
        (i && "[object Map]" != g(new i())) ||
        (a && "[object Promise]" != g(a.resolve())) ||
        (o && "[object Set]" != g(new o())) ||
        (l && "[object WeakMap]" != g(new l()))) &&
        (g = function (e) {
          var t = s(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? u(n) : "";
          if (r)
            switch (r) {
              case c:
                return "[object DataView]";
              case d:
                return "[object Map]";
              case f:
                return "[object Promise]";
              case h:
                return "[object Set]";
              case p:
                return "[object WeakMap]";
            }
          return t;
        }),
        (e.exports = g);
    },
    function (e, t, n) {
      var r = n(4)(n(2), "DataView");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(4)(n(2), "Promise");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(4)(n(2), "Set");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(4)(n(2), "WeakMap");
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(126);
      e.exports = function (e, t, n) {
        "__proto__" == t && r
          ? r(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    function (e, t, n) {
      var r = n(4),
        i = (function () {
          try {
            var e = r(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (t) {}
        })();
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(128),
        i = n(129),
        a = n(135),
        o = n(3);
      e.exports = function (e, t) {
        return function (n, l) {
          var s = o(n) ? r : i,
            u = t ? t() : {};
          return s(n, e, a(l, 2), u);
        };
      };
    },
    function (e, t) {
      e.exports = function (e, t, n, r) {
        for (var i = -1, a = null == e ? 0 : e.length; ++i < a; ) {
          var o = e[i];
          t(r, o, n(o), e);
        }
        return r;
      };
    },
    function (e, t, n) {
      var r = n(130);
      e.exports = function (e, t, n, i) {
        return (
          r(e, function (e, r, a) {
            t(i, e, n(e), a);
          }),
          i
        );
      };
    },
    function (e, t, n) {
      var r = n(131),
        i = n(134)(r);
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(132),
        i = n(22);
      e.exports = function (e, t) {
        return e && r(e, t, i);
      };
    },
    function (e, t, n) {
      var r = n(133)();
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t, n, r) {
          for (var i = -1, a = Object(t), o = r(t), l = o.length; l--; ) {
            var s = o[e ? l : ++i];
            if (!1 === n(a[s], s, a)) break;
          }
          return t;
        };
      };
    },
    function (e, t, n) {
      var r = n(40);
      e.exports = function (e, t) {
        return function (n, i) {
          if (null == n) return n;
          if (!r(n)) return e(n, i);
          for (
            var a = n.length, o = t ? a : -1, l = Object(n);
            (t ? o-- : ++o < a) && !1 !== i(l[o], o, l);

          );
          return n;
        };
      };
    },
    function (e, t, n) {
      var r = n(136),
        i = n(139),
        a = n(150),
        o = n(3),
        l = n(151);
      e.exports = function (e) {
        return "function" == typeof e
          ? e
          : null == e
          ? a
          : "object" == typeof e
          ? o(e)
            ? i(e[0], e[1])
            : r(e)
          : l(e);
      };
    },
    function (e, t, n) {
      var r = n(137),
        i = n(138),
        a = n(42);
      e.exports = function (e) {
        var t = i(e);
        return 1 == t.length && t[0][2]
          ? a(t[0][0], t[0][1])
          : function (n) {
              return n === e || r(n, e, t);
            };
      };
    },
    function (e, t, n) {
      var r = n(30),
        i = n(18),
        a = 1,
        o = 2;
      e.exports = function (e, t, n, l) {
        var s = n.length,
          u = s,
          c = !l;
        if (null == e) return !u;
        for (e = Object(e); s--; ) {
          var d = n[s];
          if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
        }
        for (; ++s < u; ) {
          var f = (d = n[s])[0],
            h = e[f],
            p = d[1];
          if (c && d[2]) {
            if (void 0 === h && !(f in e)) return !1;
          } else {
            var g = new r();
            if (l) var m = l(h, p, f, e, t, g);
            if (!(void 0 === m ? i(p, h, a | o, l, g) : m)) return !1;
          }
        }
        return !0;
      };
    },
    function (e, t, n) {
      var r = n(41),
        i = n(22);
      e.exports = function (e) {
        for (var t = i(e), n = t.length; n--; ) {
          var a = t[n],
            o = e[a];
          t[n] = [a, o, r(o)];
        }
        return t;
      };
    },
    function (e, t, n) {
      var r = n(18),
        i = n(140),
        a = n(147),
        o = n(24),
        l = n(41),
        s = n(42),
        u = n(15),
        c = 1,
        d = 2;
      e.exports = function (e, t) {
        return o(e) && l(t)
          ? s(u(e), t)
          : function (n) {
              var o = i(n, e);
              return void 0 === o && o === t ? a(n, e) : r(t, o, c | d);
            };
      };
    },
    function (e, t, n) {
      var r = n(43);
      e.exports = function (e, t, n) {
        var i = null == e ? void 0 : r(e, t);
        return void 0 === i ? n : i;
      };
    },
    function (e, t, n) {
      var r = n(142),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = r(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(i, function (e, n, r, i) {
              t.push(r ? i.replace(a, "$1") : n || e);
            }),
            t
          );
        });
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(143),
        i = 500;
      e.exports = function (e) {
        var t = r(e, function (e) {
            return n.size === i && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    function (e, t, n) {
      var r = n(21),
        i = "Expected a function";
      function a(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError(i);
        var n = function n() {
          var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            a = n.cache;
          if (a.has(i)) return a.get(i);
          var o = e.apply(this, r);
          return (n.cache = a.set(i, o) || a), o;
        };
        return (n.cache = new (a.Cache || r)()), n;
      }
      (a.Cache = r), (e.exports = a);
    },
    function (e, t, n) {
      var r = n(145);
      e.exports = function (e) {
        return null == e ? "" : r(e);
      };
    },
    function (e, t, n) {
      var r = n(12),
        i = n(146),
        a = n(3),
        o = n(25),
        l = 1 / 0,
        s = r ? r.prototype : void 0,
        u = s ? s.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return i(t, e) + "";
        if (o(t)) return u ? u.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -l ? "-0" : n;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
          i[n] = t(e[n], n, e);
        return i;
      };
    },
    function (e, t, n) {
      var r = n(148),
        i = n(149);
      e.exports = function (e, t) {
        return null != e && i(e, t, r);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    function (e, t, n) {
      var r = n(44),
        i = n(36),
        a = n(3),
        o = n(38),
        l = n(23),
        s = n(15);
      e.exports = function (e, t, n) {
        for (var u = -1, c = (t = r(t, e)).length, d = !1; ++u < c; ) {
          var f = s(t[u]);
          if (!(d = null != e && n(e, f))) break;
          e = e[f];
        }
        return d || ++u != c
          ? d
          : !!(c = null == e ? 0 : e.length) &&
              l(c) &&
              o(f, c) &&
              (a(e) || i(e));
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return e;
      };
    },
    function (e, t, n) {
      var r = n(152),
        i = n(153),
        a = n(24),
        o = n(15);
      e.exports = function (e) {
        return a(e) ? r(o(e)) : i(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    function (e, t, n) {
      var r = n(43);
      e.exports = function (e) {
        return function (t) {
          return r(t, e);
        };
      };
    },
  ],
]);
//# sourceMappingURL=2.0e5f39ad.chunk.js.map
