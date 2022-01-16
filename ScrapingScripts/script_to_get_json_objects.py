import csv
import json

def csv_to_dict(file_path):
	object_list = []
	with open(file_path) as f:
		for row in csv.DictReader(f, skipinitialspace=True):
			object_dict = {}
			for key, val in row.items():
				if val.isdigit() and key not in ['jnf_str']:
					object_dict[key] = int(val)
				else:
					object_dict[key] = val
			object_list.append(object_dict)
	return object_list

def capitalize(title):
	words = title.split(' ')
	capitalized_title = ''
	for word in words:
		if word not in ['AND', 'OF', 'FOR']:
			capitalized_title += ' '+word.capitalize()
		else:
			capitalized_title += ' '+word.lower()
	return capitalized_title

file_path = ['OutputFiles/placements.csv', 'OutputFiles/placements_companies.csv', 'OutputFiles/placements_companies_final.csv', 'OutputFiles/placements_companies_profile_final.csv', 'Files/students.csv']

companies = csv_to_dict(file_path[2])
companies_profile = csv_to_dict(file_path[3])
placements_students = csv_to_dict(file_path[0])
placements_companies = csv_to_dict(file_path[1])
students_data = csv_to_dict(file_path[4])
departments = {
	"AE": "AEROSPACE ENGINEERING",
	"AG": "AGRICULTURAL AND FOOD ENGINEERING",
	"AR": "ARCHITECTURE AND REGIONAL PLANNING",
	"BT": "BIOTECHNOLOGY",
	"CH": "CHEMICAL ENGINEERING",
	"CY": "CHEMISTRY",
	"CE": "CIVIL ENGINEERING",
	"CS": "COMPUTER SCIENCE AND ENGINEERING",
	"EE": "ELECTRICAL ENGINEERING",
	"EC": "ELECTRONICS AND ELECTRICAL COMMUNICATION ENGG.",
	"GG": "GEOLOGY AND GEOPHYSICS",
	"HS": "HUMANITIES AND SOCIAL SCIENCES",
	"IM": "INDUSTRIAL AND SYSTEMS ENGINEERING",
	"MA": "MATHEMATICS",
	"ME": "MECHANICAL ENGINEERING",
	"MT": "METALLURGICAL AND MATERIALS ENGINEERING",
	"MI": "MINING ENGINEERING",
	"NA": "OCEAN ENGG AND NAVAL ARCHITECTURE",
	"PH": "PHYSICS",
	"IP": "RAJIV GANDHI SCHOOL OF INTELLECTUAL PROPERTY LAW",
	"AT": "ADVANCED TECHNOLOGY DEVELOPMENT CENTRE",
	"BS": "BIO SCIENCE",
	"ET": "CENTRE FOR EDUCATIONAL TECHNOLOGY",
	"CL": "CENTRE FOR OCEANS, RIVERS, ATMOSPHERE AND LAND SCIENCES (CORAL)",
	"CR": "CRYOGENIC ENGINEERING",
	"ES": "ENERGY SCIENCE AND ENGINEERING",
	"EV": "ENVIRONMENTAL SCIENCE AND ENGINEERING",
	"TE": "G.S SANYAL SCHOOL OF TELECOMMUNICATION",
	"MS": "MATERIALS SCIENCE CENTRE",
	"NS": "NANO SCIENCE AND TECHNOLOGY",
	"EP": "RAJENDRA MISHRA SCHOOL OF ENGG ENTREPRENEURSHIP",
	"ID": "RANBIR AND CHITRA GUPTA SCHOOL OF INFRASTRUCTURE DESIGN AND MNGT.",
	"RT": "RUBBER TECHNOLOGY",
	"MM": "SCHOOL OF MEDICAL SCIENCE AND TECHNOLOGY",
	"WM": "SCHOOL OF WATER RESOURCES",
	"RE": "SUBIR CHOWDHURY SCHOOL OF QUALITY AND RELIABILITY"
}

departments_list = list(departments.keys())
companies_list = list(set([comp['com_id'] for comp in placements_companies]))
students_list = list(set([stud['roll_no'] for stud in students_data]))
locations_list = list(set([comp['city'] for comp in companies]))

sectors_list = []
for comp in companies:
	sectors = comp['sector'].replace("\n", "").split(",")
	sectors_list.extend(sectors)
sectors_list.remove('')
sectors_list = list(set(sectors_list))

companies_dict = {}
for com_id in companies_list:
	for com in companies:
		if com['com_id'] == com_id:
			companies_dict[com_id] = com

			profiles = []
			for profile in companies_profile:
				if profile['com_id'] == com_id:
					profiles.append(profile['jnf_id'])
			companies_dict[com_id]['profiles'] = profiles
			companies_dict[com_id]['students'] = []

			for plac_comp in placements_companies:
				if plac_comp['com_id'] == com_id:
					for student in placements_students:
						if student['company'] == plac_comp['company']:
							student['jnf_ids'] = [int(j) for j in plac_comp['jnf_str'].split('_')]
							companies_dict[com_id]['students'].append(student)
			break

# with open('../DataJSON/companies.json', 'w') as f:
#     json.dump(companies_dict, f, ensure_ascii=False, indent=4)

profile_dict = {}
for com_id in companies_list:
	profiles = {}
	for profile in companies_profile:
		if profile['dep_str']:
			profile['dep_list'] = profile['dep_str'].split('_')
		if profile['com_id'] == com_id:
			profiles[profile['jnf_id']] = profile
			for plac_comp in placements_companies:
				if plac_comp['com_id'] == com_id:
					if plac_comp['jnf_id']:
						if plac_comp['jnf_id'] == profile['jnf_id']:
							profiles[profile['jnf_id']]['day'] = int(plac_comp['day'][4:])
					else :
						profiles[profile['jnf_id']]['day'] = int(plac_comp['day'][4:])
	profile_dict[com_id] = profiles

# with open('../DataJSON/profiles.json', 'w') as f:
#     json.dump(profile_dict, f, ensure_ascii=False, indent=4)

students_dict = {}
for roll in students_list:
	for stud in students_data:
		if  stud['roll_no'] == roll:
			del stud['roll_no']
			students_dict[roll] = stud
			students_data.remove(stud)
			break

# with open('../DataJSON/students.json', 'w', encoding='utf-8') as f:
#     json.dump(students_dict, f, ensure_ascii=False, indent=4)

departments_dict = {}
for dep in departments_list:
	departments_dict[dep] = {
		'name': capitalize(departments[dep]),
		'com_ids': []
	}
for profile in companies_profile:
	dep_list = profile['dep_str'].split('_')
	com_id = profile['com_id']
	jnf_id = profile['jnf_id']
	for dep in dep_list:
		if dep != "":
			if com_id in departments_dict[dep]['com_ids']:
				departments_dict[dep][com_id].append(jnf_id)
			else:
				departments_dict[dep]['com_ids'].append(com_id)
				departments_dict[dep][com_id] = [jnf_id]

# with open('../DataJSON/departments.json', 'w') as f:
#     json.dump(departments_dict, f, ensure_ascii=False, indent=4)

locations_dict = {}
for com in companies:
	city = com['city']
	if city not in locations_dict:
		locations_dict[city] = [com['com_id']]
	else:
		locations_dict[city].append(com['com_id'])

# with open('../DataJSON/locations.json', 'w') as f:
#     json.dump(locations_dict, f, ensure_ascii=False, indent=4)

days_dict = {}
for plac_comp in placements_companies:
	if plac_comp['day'][4:] in days_dict:
		if plac_comp['com_id'] in days_dict[plac_comp['day'][4:]]['com_ids']:
			jnf_ids = [int(i) for i in plac_comp['jnf_str'].split('_')]
			days_dict[plac_comp['day'][4:]][plac_comp['com_id']].extend(jnf_ids)
		else:
			days_dict[plac_comp['day'][4:]]['com_ids'].append(plac_comp['com_id'])
			jnf_ids = [int(i) for i in plac_comp['jnf_str'].split('_')]
			days_dict[plac_comp['day'][4:]][plac_comp['com_id']] = jnf_ids
	else:
		jnf_ids = [int(i) for i in plac_comp['jnf_str'].split('_')]
		days_dict[plac_comp['day'][4:]] = {
			'com_ids': [plac_comp['com_id']],
			plac_comp['com_id']: jnf_ids
		}

# with open('../DataJSON/days.json', 'w') as f:
#     json.dump(days_dict, f, ensure_ascii=False, indent=4)

sectors_dict = {}
for com in companies:
	sectors = com['sector'].replace("\n", "").split(",")
	for sector in sectors:
		if sector not in sectors_dict:
			sectors_dict[sector] = [com['com_id']]
		else:
			sectors_dict[sector].append(com['com_id'])

# with open('../DataJSON/sectors.json', 'w') as f:
#     json.dump(sectors_dict, f, ensure_ascii=False, indent=4)

packages_dict = {
	'package_strs': ["> 25 Lakhs", "20 to 25 Lakhs", "15 to 20 Lakhs", "12 to 15 Lakhs", "12 to 10 Lakhs", "10 to 8 Lakhs", "8 to 5 Lakhs", "< 5 Lakhs"]
}
for i in range(1,9):
	packages_dict[str(i)] = {
		'package_str': packages_dict['package_strs'][i-1],
		'com_ids': []
	}
for profile in companies_profile:
	ctc = float(profile['ctc'])
	currency = profile['currency']
	if currency == 'USD':
		ctc = ctc*70
	elif currency == 'JPY':
		ctc = ctc*0.64
	if ctc > 25:
		if profile['com_id'] in packages_dict['1']['com_ids']:
			packages_dict['1'][profile['com_id']].append(profile['jnf_id'])
		else:
			packages_dict['1']['com_ids'].append(profile['com_id'])
			packages_dict['1'][profile['com_id']] = [profile['jnf_id']]
	elif ctc <= 25 and ctc > 20:
		if profile['com_id'] in packages_dict['2']['com_ids']:
			packages_dict['2'][profile['com_id']].append(profile['jnf_id'])
		else:
			packages_dict['2']['com_ids'].append(profile['com_id'])
			packages_dict['2'][profile['com_id']] = [profile['jnf_id']]
	elif ctc <= 20 and ctc > 15:
		if profile['com_id'] in packages_dict['3']['com_ids']:
			packages_dict['3'][profile['com_id']].append(profile['jnf_id'])
		else:
			packages_dict['3']['com_ids'].append(profile['com_id'])
			packages_dict['3'][profile['com_id']] = [profile['jnf_id']]
	elif ctc <= 15 and ctc > 12:
		if profile['com_id'] in packages_dict['4']['com_ids']:
			packages_dict['4'][profile['com_id']].append(profile['jnf_id'])
		else:
			packages_dict['4']['com_ids'].append(profile['com_id'])
			packages_dict['4'][profile['com_id']] = [profile['jnf_id']]
	elif ctc <= 12 and ctc > 10:
		if profile['com_id'] in packages_dict['5']['com_ids']:
			packages_dict['5'][profile['com_id']].append(profile['jnf_id'])
		else:
			packages_dict['5']['com_ids'].append(profile['com_id'])
			packages_dict['5'][profile['com_id']] = [profile['jnf_id']]
	elif ctc <= 10 and ctc > 8:
		if profile['com_id'] in packages_dict['6']['com_ids']:
			packages_dict['6'][profile['com_id']].append(profile['jnf_id'])
		else:
			packages_dict['6']['com_ids'].append(profile['com_id'])
			packages_dict['6'][profile['com_id']] = [profile['jnf_id']]
	elif ctc <= 8 and ctc > 5:
		if profile['com_id'] in packages_dict['7']['com_ids']:
			packages_dict['7'][profile['com_id']].append(profile['jnf_id'])
		else:
			packages_dict['7']['com_ids'].append(profile['com_id'])
			packages_dict['7'][profile['com_id']] = [profile['jnf_id']]
	elif ctc <= 5:
		if profile['com_id'] in packages_dict['8']['com_ids']:
			packages_dict['8'][profile['com_id']].append(profile['jnf_id'])
		else:
			packages_dict['8']['com_ids'].append(profile['com_id'])
			packages_dict['8'][profile['com_id']] = [profile['jnf_id']]

# with open('../DataJSON/packages.json', 'w') as f:
#     json.dump(packages_dict, f, ensure_ascii=False, indent=4)