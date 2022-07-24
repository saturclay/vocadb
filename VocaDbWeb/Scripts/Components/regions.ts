import _ from 'lodash';

const regionCodes = [
	'AF',
	'AX',
	'AL',
	'DZ',
	'AS',
	'AD',
	'AO',
	'AI',
	'AG',
	'AR',
	'AM',
	'AW',
	'AU',
	'AT',
	'AZ',
	'BS',
	'BH',
	'BD',
	'BB',
	'BY',
	'BE',
	'BZ',
	'BJ',
	'BM',
	'BT',
	'BO',
	'BQ',
	'BA',
	'BW',
	'BR',
	'IO',
	'VG',
	'BN',
	'BG',
	'BF',
	'BI',
	'CV',
	'KH',
	'CM',
	'CA',
	//'029',
	'KY',
	'CF',
	'TD',
	'CL',
	'CN',
	'CX',
	'CC',
	'CO',
	'KM',
	'CG',
	'CD',
	'CK',
	'CR',
	'CI',
	'HR',
	'CU',
	'CW',
	'CY',
	'CZ',
	'DK',
	'DJ',
	'DM',
	'DO',
	'EC',
	'EG',
	'SV',
	'GQ',
	'ER',
	'EE',
	'SZ',
	'ET',
	//'150',
	'FK',
	'FO',
	'FJ',
	'FI',
	'FR',
	'GF',
	'PF',
	'GA',
	'GM',
	'GE',
	'DE',
	'GH',
	'GI',
	'GR',
	'GL',
	'GD',
	'GP',
	'GU',
	'GT',
	'GG',
	'GN',
	'GW',
	'GY',
	'HT',
	'HN',
	'HK',
	'HU',
	'IS',
	'IN',
	'ID',
	'IR',
	'IQ',
	'IE',
	'IM',
	'IL',
	'IT',
	'JM',
	'JP',
	'JE',
	'JO',
	'KZ',
	'KE',
	'KI',
	'KR',
	'XK',
	'KW',
	'KG',
	'LA',
	//'419',
	'LV',
	'LB',
	'LS',
	'LR',
	'LY',
	'LI',
	'LT',
	'LU',
	'MO',
	'MG',
	'MW',
	'MY',
	'MV',
	'ML',
	'MT',
	'MH',
	'MQ',
	'MR',
	'MU',
	'YT',
	'MX',
	'FM',
	'MD',
	'MC',
	'MN',
	'ME',
	'MS',
	'MA',
	'MZ',
	'MM',
	'NA',
	'NR',
	'NP',
	'NL',
	'NC',
	'NZ',
	'NI',
	'NE',
	'NG',
	'NU',
	'NF',
	'KP',
	'MK',
	'MP',
	'NO',
	'OM',
	'PK',
	'PW',
	'PS',
	'PA',
	'PG',
	'PY',
	'PE',
	'PH',
	'PN',
	'PL',
	'PT',
	'PR',
	'QA',
	'RE',
	'RO',
	'RU',
	'RW',
	'WS',
	'SM',
	'ST',
	'SA',
	'SN',
	'RS',
	'SC',
	'SL',
	'SG',
	'SX',
	'SK',
	'SI',
	'SB',
	'SO',
	'ZA',
	'SS',
	'ES',
	'LK',
	'SH',
	'BL',
	'KN',
	'LC',
	'MF',
	'PM',
	'VC',
	'SD',
	'SR',
	'SJ',
	'SE',
	'CH',
	'SY',
	'TW',
	'TJ',
	'TZ',
	'TH',
	'TL',
	'TG',
	'TK',
	'TO',
	'TT',
	'TN',
	'TR',
	'TM',
	'TC',
	'TV',
	'UM',
	'VI',
	'UG',
	'UA',
	'AE',
	'GB',
	'US',
	'UY',
	'UZ',
	'VU',
	'VA',
	'VE',
	'VN',
	'WF',
	//'001',
	'YE',
	'ZM',
	'ZW',
];

const regionNames = new Intl.DisplayNames([vdb.values.uiCulture], {
	type: 'region',
});

export const regions: Record<string, string | undefined> = _.fromPairs(
	_.chain(regionCodes)
		.map((regionCode) => [regionCode, regionNames.of(regionCode)])
		.orderBy(([, value]) => value)
		.value(),
);