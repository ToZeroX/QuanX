if ($response.statusCode != 200) {
	$done(null)
}
var customCity = "哥谭市";
var customIsp = "CrossGFW";

function cityCheck(parameter) {
	if (parameter) {
		return parameter
	} else {
		return customCity
	}
}
var body = $response.body;
var obj = JSON.parse(body);
var ip = obj['query'];
var country = obj['country'];
var city = obj['city'];

function createTitle() {
	if (city) {
		if (country != city) {
			return country + ' ' + city
		} else {
			return country
		}
	} else {
		return customCity
	}
}

function ispCheck(parameter) {
	if (parameter) {
		return parameter
	} else {
		return customIsp
	}
}
var flags = new Map([
	["AC", "🇦🇨"],
	["AD", "🇦🇩"],
	["AE", "🇦🇪"],
	["AF", "🇦🇫"],
	["AG", "🇦🇬"],
	["AI", "🇦🇮"],
	["AL", "🇦🇱"],
	["AM", "🇦🇲"],
	["AO", "🇦🇴"],
	["AQ", "🇦🇶"],
	["AR", "🇦🇷"],
	["AS", "🇦🇸"],
	["AT", "🇦🇹"],
	["AU", "🇦🇺"],
	["AW", "🇦🇼"],
	["AX", "🇦🇽"],
	["AZ", "🇦🇿"],
	["BA", "🇧🇦"],
	["BB", "🇧🇧"],
	["BD", "🇧🇩"],
	["BE", "🇧🇪"],
	["BF", "🇧🇫"],
	["BG", "🇧🇬"],
	["BH", "🇧🇭"],
	["BI", "🇧🇮"],
	["BJ", "🇧🇯"],
	["BM", "🇧🇲"],
	["BN", "🇧🇳"],
	["BO", "🇧🇴"],
	["BR", "🇧🇷"],
	["BS", "🇧🇸"],
	["BT", "🇧🇹"],
	["BV", "🇧🇻"],
	["BW", "🇧🇼"],
	["BY", "🇧🇾"],
	["BZ", "🇧🇿"],
	["CA", "🇨🇦"],
	["CD", "🇨🇩"],
	["CF", "🇨🇫"],
	["CG", "🇨🇬"],
	["CH", "🇨🇭"],
	["CI", "🇨🇮"],
	["CK", "🇨🇰"],
	["CL", "🇨🇱"],
	["CM", "🇨🇲"],
	["CN", "🇨🇳"],
	["CO", "🇨🇴"],
	["CP", "🇨🇵"],
	["CR", "🇨🇷"],
	["CU", "🇨🇺"],
	["CV", "🇨🇻"],
	["CW", "🇨🇼"],
	["CX", "🇨🇽"],
	["CY", "🇨🇾"],
	["CZ", "🇨🇿"],
	["DE", "🇩🇪"],
	["DG", "🇩🇬"],
	["DJ", "🇩🇯"],
	["DK", "🇩🇰"],
	["DM", "🇩🇲"],
	["DO", "🇩🇴"],
	["DZ", "🇩🇿"],
	["EA", "🇪🇦"],
	["EC", "🇪🇨"],
	["EE", "🇪🇪"],
	["EG", "🇪🇬"],
	["EH", "🇪🇭"],
	["ER", "🇪🇷"],
	["ES", "🇪🇸"],
	["ET", "🇪🇹"],
	["EU", "🇪🇺"],
	["FI", "🇫🇮"],
	["FJ", "🇫🇯"],
	["FK", "🇫🇰"],
	["FM", "🇫🇲"],
	["FO", "🇫🇴"],
	["FR", "🇫🇷"],
	["GA", "🇬🇦"],
	["GB", "🇬🇧"],
	["GD", "🇬🇩"],
	["GE", "🇬🇪"],
	["GF", "🇬🇫"],
	["GH", "🇬🇭"],
	["GI", "🇬🇮"],
	["GL", "🇬🇱"],
	["GM", "🇬🇲"],
	["GN", "🇬🇳"],
	["GP", "🇬🇵"],
	["GR", "🇬🇷"],
	["GT", "🇬🇹"],
	["GU", "🇬🇺"],
	["GW", "🇬🇼"],
	["GY", "🇬🇾"],
	["HK", "🇭🇰"],
	["HN", "🇭🇳"],
	["HR", "🇭🇷"],
	["HT", "🇭🇹"],
	["HU", "🇭🇺"],
	["ID", "🇮🇩"],
	["IE", "🇮🇪"],
	["IL", "🇮🇱"],
	["IM", "🇮🇲"],
	["IN", "🇮🇳"],
	["IR", "🇮🇷"],
	["IS", "🇮🇸"],
	["IT", "🇮🇹"],
	["JM", "🇯🇲"],
	["JO", "🇯🇴"],
	["JP", "🇯🇵"],
	["KE", "🇰🇪"],
	["KG", "🇰🇬"],
	["KH", "🇰🇭"],
	["KI", "🇰🇮"],
	["KM", "🇰🇲"],
	["KN", "🇰🇳"],
	["KP", "🇰🇵"],
	["KR", "🇰🇷"],
	["KW", "🇰🇼"],
	["KY", "🇰🇾"],
	["KZ", "🇰🇿"],
	["LA", "🇱🇦"],
	["LB", "🇱🇧"],
	["LC", "🇱🇨"],
	["LI", "🇱🇮"],
	["LK", "🇱🇰"],
	["LR", "🇱🇷"],
	["LS", "🇱🇸"],
	["LT", "🇱🇹"],
	["LU", "🇱🇺"],
	["LV", "🇱🇻"],
	["LY", "🇱🇾"],
	["MA", "🇲🇦"],
	["MC", "🇲🇨"],
	["MD", "🇲🇩"],
	["MG", "🇲🇬"],
	["MH", "🇲🇭"],
	["MK", "🇲🇰"],
	["ML", "🇲🇱"],
	["MM", "🇲🇲"],
	["MN", "🇲🇳"],
	["MO", "🇲🇴"],
	["MP", "🇲🇵"],
	["MQ", "🇲🇶"],
	["MR", "🇲🇷"],
	["MS", "🇲🇸"],
	["MT", "🇲🇹"],
	["MU", "🇲🇺"],
	["MV", "🇲🇻"],
	["MW", "🇲🇼"],
	["MX", "🇲🇽"],
	["MY", "🇲🇾"],
	["MZ", "🇲🇿"],
	["NA", "🇳🇦"],
	["NC", "🇳🇨"],
	["NE", "🇳🇪"],
	["NF", "🇳🇫"],
	["NG", "🇳🇬"],
	["NI", "🇳🇮"],
	["NL", "🇳🇱"],
	["NO", "🇳🇴"],
	["NP", "🇳🇵"],
	["NR", "🇳🇷"],
	["NZ", "🇳🇿"],
	["OM", "🇴🇲"],
	["PA", "🇵🇦"],
	["PE", "🇵🇪"],
	["PF", "🇵🇫"],
	["PG", "🇵🇬"],
	["PH", "🇵🇭"],
	["PK", "🇵🇰"],
	["PL", "🇵🇱"],
	["PM", "🇵🇲"],
	["PR", "🇵🇷"],
	["PS", "🇵🇸"],
	["PT", "🇵🇹"],
	["PW", "🇵🇼"],
	["PY", "🇵🇾"],
	["QA", "🇶🇦"],
	["RE", "🇷🇪"],
	["RO", "🇷🇴"],
	["RS", "🇷🇸"],
	["RU", "🇷🇺"],
	["RW", "🇷🇼"],
	["SA", "🇸🇦"],
	["SB", "🇸🇧"],
	["SC", "🇸🇨"],
	["SD", "🇸🇩"],
	["SE", "🇸🇪"],
	["SG", "🇸🇬"],
	["SI", "🇸🇮"],
	["SK", "🇸🇰"],
	["SL", "🇸🇱"],
	["SM", "🇸🇲"],
	["SN", "🇸🇳"],
	["SR", "🇸🇷"],
	["ST", "🇸🇹"],
	["SV", "🇸🇻"],
	["SY", "🇸🇾"],
	["SZ", "🇸🇿"],
	["TC", "🇹🇨"],
	["TD", "🇹🇩"],
	["TG", "🇹🇬"],
	["TH", "🇹🇭"],
	["TJ", "🇹🇯"],
	["TL", "🇹🇱"],
	["TM", "🇹🇲"],
	["TN", "🇹🇳"],
	["TO", "🇹🇴"],
	["TR", "🇹🇷"],
	["TT", "🇹🇹"],
	["TV", "🇹🇻"],
	["TW", "🇨🇳"],
	["TZ", "🇹🇿"],
	["UA", "🇺🇦"],
	["UG", "🇺🇬"],
	["UK", "🇬🇧"],
	["UM", "🇺🇲"],
	["US", "🇺🇸"],
	["UY", "🇺🇾"],
	["UZ", "🇺🇿"],
	["VA", "🇻🇦"],
	["VC", "🇻🇨"],
	["VE", "🇻🇪"],
	["VG", "🇻🇬"],
	["VI", "🇻🇮"],
	["VN", "🇻🇳"],
	["VU", "🇻🇺"],
	["WS", "🇼🇸"],
	["YE", "🇾🇪"],
	["YT", "🇾🇹"],
	["ZA", "🇿🇦"],
	["ZM", "🇿🇲"],
	["ZW", "🇿🇼"]
]);

var join = function () {
  var str = ''
  for (var i = 0; i < arguments.length; i++) {
    var data = arguments[i]
    if (data) {
      str += ' ' + data + ' '
    }
  }
  return str.trim()
}

var title = flags.get(obj['countryCode']) + ' ' + (obj['country'] ? (' ' + obj['country']) : '') + cityCheck(obj['city']);
var subtitle = join('⛱', obj.query ) // ip + ' • ' + ispCheck(obj['isp']);
var description = '城市：' + createTitle() + '\n地区：' + cityCheck(obj['regionName']) + '\nIP：' + ip + '\n时区：' + obj['timezone'] + '\n服务商：' + obj['isp'] + '\nAS：' + obj['as'];
var l = $response['body'];
var m = JSON['parse'](l);
// var n = a(m['countryCode']) + '\x20' + j(d(e(f(m['country'])), b(f(m['regionName']), f(m['city']))));
var title = d(e(f(m['country'])), b(f(m['regionName']), f(m['city'])))
var o = i('⛱', c(m['as']), m['query']);
var p = m['query'];
var q = '-----------------------------------' + '\x0a\x0a' + '国家/地区:' + d(e(f(m['country'])), b(f(m['regionName']), f(m['city']))) + '\x0a\x0a' + '时区:' + m['timezone'] + '\x0a\x0a' + 'IP:' + m['query'] + '\x0a\x0a' + '经度:' + m['lon'] + '\x20\x20' + '纬度:' + m['lat'] + '\x0a\x0a' + k(m['isp'], m['org']);
$done({
	'title': title, // n,
	'subtitle': o,
	'ip': p,
	'description': q
});
$done({
	title,
	subtitle,
	ip,
	description
});