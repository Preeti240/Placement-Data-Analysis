import csv
import json
import operator
import collections

def load_json(filename):
	with open(filename, 'r') as f:
		return json.load(f)

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

file_path = ['../DataJSON/companies.json', '../DataJSON/profiles.json', '../DataJSON/departments.json', '../DataJSON/days.json', '../DataJSON/locations.json', '../DataJSON/packages.json', '../DataJSON/sectors.json', '../DataJSON/students.json', 'OutputFiles/placements.csv', 'OutputFiles/placements_companies.csv']

companies = load_json(file_path[0])
profiles = load_json(file_path[1])
departments = load_json(file_path[2])
days = load_json(file_path[3])
locations = load_json(file_path[4])
packages = load_json(file_path[5])
sectors = load_json(file_path[6])
students = load_json(file_path[7])
placements_students = csv_to_dict(file_path[8])
placements_companies = csv_to_dict(file_path[9])

offers=0
startups=0
mncs=0
stu_dict_o = {}
students_list = []
for key, val in companies.items():
	offers += len(val['students'])
	stu_dict_o[val["com_id"]] = [val["com_id"], val["company"], len(val['students'])]
	if val["category"]== "\nStartUp\n":
		startups+=1
	elif val["category"].split(',')[0]== "\nMNC\n":
		mncs+=1
	for stu in val['students']:
		students_list.append(stu['roll_no'])

print("Offers: {0}".format(offers))
print("Placed: {0}".format(len(list(set(students_list)))))
print("Companies: {0}".format(len(companies.keys())))
print("Startups: {0}".format(startups))
print("MNC: {0}".format(mncs))
print("Locations: {0}".format(len(locations.keys())))
print("Sectors: {0}".format(len(sectors.keys())))

profiles_count=0
for key1, val1 in profiles.items():
	profiles_count+=len(val1.keys())
print("Profiles: {0}".format(profiles_count))

base_list = []
ctc_list = []
ctc_list_domestic = []
ctc_list_abroad = []
base_list_domestic = []
base_list_abroad = []
base_dict = {}
ctc_dict = {}
sector_dict = {}
stu_ctc_dict = {}
stu_base_dict = {}
international=0
for key1, val1 in companies.items():
	for val2 in val1['students']:
		dep = val2['roll_no'][2:4].upper()
		yr = int(val2['roll_no'][0:2])
		com_id = str(val1['com_id'])
		jnf_id = str(val2['jnf_ids'][0])
		currency = profiles[com_id][jnf_id]['currency']
		if currency == 'USD':
			international+=1
			multi_factor = 70.0
			# multi_factor = 0
		elif currency == 'JPY':
			international+=1
			multi_factor = 0.64
			# multi_factor = 0
		else:
			multi_factor = 1
		if yr:
			base_list.append(float(profiles[com_id][jnf_id]['base'])*multi_factor)
			ctc_list.append(float(profiles[com_id][jnf_id]['ctc'])*multi_factor)
			if dep in base_dict:
				base_dict[dep].append(float(profiles[com_id][jnf_id]['base'])*multi_factor)
				ctc_dict[dep].append(float(profiles[com_id][jnf_id]['ctc'])*multi_factor)
			else:
				base_dict[dep] = [float(profiles[com_id][jnf_id]['base'])*multi_factor]
				ctc_dict[dep] = [float(profiles[com_id][jnf_id]['ctc'])*multi_factor]
			if currency in ['USD', 'JPY']:
				ctc_list_abroad.append(ctc_list[-1])
				base_list_abroad.append(base_list[-1])
			else:
				ctc_list_domestic.append(ctc_list[-1])
				base_list_domestic.append(base_list[-1])
			stu_ctc_dict[val2['roll_no']] = ctc_list[-1]
			stu_base_dict[val2['roll_no']] = base_list[-1]
		sectors_ = val1['sector'].replace("\n", "").split(",")
	for sector in sectors_:
		if sector in sector_dict:
			sector_dict[sector] += len(val1['students'])
		else:
			sector_dict[sector] = len(val1['students'])

dep_keys = base_dict.keys()
dep_keys.sort() 

print("International: {0}".format(international))
print("Max CTC domestic: {0}".format(max(ctc_list_domestic)))
print("Max CTC abroad: {0}".format(max(ctc_list_abroad)))
print("Max Base domestic: {0}".format(max(base_list_domestic)))
print("Max Base abroad: {0}".format(max(base_list_abroad)))
print(stu_base_dict)
print(stu_ctc_dict)

for dep in dep_keys:
	print("{0} \tBase: {1} \tCTC: {2} \tStudents: {3}".format(dep, round(sum(base_dict[dep])/len(base_dict[dep]), 1), round(sum(ctc_dict[dep])/len(ctc_dict[dep]), 1), len(ctc_dict[dep])))

print("\nDep wise max packages: ")
for dep in dep_keys:
	print("{0} \tBase: {1} \tCTC: {2}".format(dep, max(base_dict[dep]), max(ctc_dict[dep])))

packages_dict = {
	"> 50 Lakhs": 0, 
	"40 to 50 Lakhs": 0, 
	"30 to 40 Lakhs": 0, 
	"25 to 30 Lakhs": 0, 
	"20 to 25 Lakhs": 0, 
	"15 to 20 Lakhs": 0, 
	"12 to 15 Lakhs": 0, 
	"12 to 10 Lakhs": 0, 
	"10 to 8 Lakhs": 0, 
	"8 to 5 Lakhs": 0, 
	"< 5 Lakhs": 0
}
for ctc in base_list:
	if ctc > 50:
		packages_dict["> 50 Lakhs"] += 1
	elif ctc <= 50 and ctc > 40:
		packages_dict["40 to 50 Lakhs"] += 1
	elif ctc <= 40 and ctc > 30:
		packages_dict["30 to 40 Lakhs"] += 1
	elif ctc <= 30 and ctc > 25:
		packages_dict["25 to 30 Lakhs"] += 1
	elif ctc <= 25 and ctc > 20:
		packages_dict["20 to 25 Lakhs"] += 1
	elif ctc <= 20 and ctc > 15:
		packages_dict["15 to 20 Lakhs"] += 1
	elif ctc <= 15 and ctc > 12:
		packages_dict["12 to 15 Lakhs"] += 1
	elif ctc <= 12 and ctc > 10:
		packages_dict["12 to 10 Lakhs"] += 1
	elif ctc <= 10 and ctc > 8:
		packages_dict["10 to 8 Lakhs"] += 1
	elif ctc <= 8 and ctc > 5:
		packages_dict["8 to 5 Lakhs"] += 1
	elif ctc <= 5:
		packages_dict["< 5 Lakhs"] += 1
for key, val in packages_dict.items():
	print("{0} : {1}".format(key, val))


packages_list = ['< 5 Lakhs', '8 to 5 Lakhs', '10 to 8 Lakhs', '12 to 10 Lakhs', '12 to 15 Lakhs', '15 to 20 Lakhs', '20 to 25 Lakhs', '25 to 30 Lakhs', '30 to 40 Lakhs', '40 to 50 Lakhs', '> 50 Lakhs']
print("\nDep wise packages segregation: ")
for dep in dep_keys:
	print_list = [dep]
	packages_dict = {
		"> 50 Lakhs": 0, 
		"40 to 50 Lakhs": 0, 
		"30 to 40 Lakhs": 0, 
		"25 to 30 Lakhs": 0, 
		"20 to 25 Lakhs": 0, 
		"15 to 20 Lakhs": 0, 
		"12 to 15 Lakhs": 0, 
		"12 to 10 Lakhs": 0, 
		"10 to 8 Lakhs": 0, 
		"8 to 5 Lakhs": 0, 
		"< 5 Lakhs": 0
	}
	for ctc in ctc_dict[dep]:
		if ctc > 50:
			packages_dict["> 50 Lakhs"] += 1
		elif ctc <= 50 and ctc > 40:
			packages_dict["40 to 50 Lakhs"] += 1
		elif ctc <= 40 and ctc > 30:
			packages_dict["30 to 40 Lakhs"] += 1
		elif ctc <= 30 and ctc > 25:
			packages_dict["25 to 30 Lakhs"] += 1
		elif ctc <= 25 and ctc > 20:
			packages_dict["20 to 25 Lakhs"] += 1
		elif ctc <= 20 and ctc > 15:
			packages_dict["15 to 20 Lakhs"] += 1
		elif ctc <= 15 and ctc > 12:
			packages_dict["12 to 15 Lakhs"] += 1
		elif ctc <= 12 and ctc > 10:
			packages_dict["12 to 10 Lakhs"] += 1
		elif ctc <= 10 and ctc > 8:
			packages_dict["10 to 8 Lakhs"] += 1
		elif ctc <= 8 and ctc > 5:
			packages_dict["8 to 5 Lakhs"] += 1
		elif ctc <= 5:
			packages_dict["< 5 Lakhs"] += 1
	for key in packages_list:
		print_list.append(packages_dict[key])
	print(print_list)

print("Avg base: {0}".format(sum(base_list)/len(base_list)))
print("Avg ctc: {0}".format(sum(ctc_list)/len(ctc_list)))
base_list = [int(round(i)) for i in base_list]
ctc_list = [int(round(i)) for i in ctc_list]
print(collections.Counter(base_list), collections.Counter(ctc_list))
print("Mode base: {0}".format([max(set(base_list), key=base_list.count)][0]))
print("Mode ctc: {0}".format([max(set(ctc_list), key=ctc_list.count)][0]))

grad_dict = {'btech': [], 'dd': [],'msc': [], 'mtech': [], 'phd': []}
for stu in placements_students:
	grad = stu['roll_no'][4:5]
	if grad in ['1']:
		grad_dict['btech'].append(stu['roll_no'])
	elif grad in ['3']:
		grad_dict['dd'].append(stu['roll_no'])
	elif grad in ['2']:
		grad_dict['msc'].append(stu['roll_no'])
	elif grad in ['4', '6']:
		grad_dict['mtech'].append(stu['roll_no'])
	elif grad in ['7','9']:
		grad_dict['phd'].append(stu['roll_no'])

print("B.Tech placed: {0}".format(len(list(set(grad_dict['btech'])))))
print("DD placed: {0}".format(len(list(set(grad_dict['dd'])))))
print("M.Sc placed: {0}".format(len(list(set(grad_dict['msc'])))))
print("M.Tech placed: {0}".format(len(list(set(grad_dict['mtech'])))))
print("PhD placed: {0}".format(len(list(set(grad_dict['phd'])))))

for key, val in sector_dict.items():
	print("{0} placed: {1}".format(key, val))

locations_dict = {}
for key, val in locations.items():
	locations_dict[key] = 0
	for com_id in val:
		locations_dict[key] += len(companies[str(com_id)]['students'])
for key, val in locations_dict.items():
	print("{0} : {1}".format(key, val))

# packages_dict = {}
# for key, val in packages.items():
# 	if key != "package_strs":
# 		packages_dict[key] = 0
# 		for com_id in val['com_ids']:
# 			packages_dict[key] += len(companies[str(com_id)]['students'])
# for key, val in packages_dict.items():
# 	print("{0} : {1}".format(packages["package_strs"][int(key)-1], val))

sectors_dict = {}
for key, val in sectors.items():
	sectors_list = key.replace("\n", "").split(",")
	for sector in sectors_list:
		sectors_dict[sector] = {}
		sectors_dict[sector]['base'] = []
		sectors_dict[sector]['ctc'] = []
		for com_id in val:
			com_id = str(com_id)
			students = companies[com_id]['students']
			for stu in students:
				jnf_id = stu['jnf_ids'][0]
				jnf_id = str(jnf_id)
				currency = profiles[com_id][jnf_id]['currency']
				if currency == 'USD':
					multi_factor = 70.0
				elif currency == 'JPY':
					multi_factor = 0.64
				else:
					multi_factor = 1
				base = float(profiles[com_id][jnf_id]['base'])*multi_factor
				ctc = float(profiles[com_id][jnf_id]['ctc'])*multi_factor
				sectors_dict[sector]['base'].append(base)
				sectors_dict[sector]['ctc'].append(ctc)
for key, val in sectors_dict.items():
	print("{0} : \tBase:\t{1} \tCTC:\t{2}; \t{3}".format(key, round(sum(val['base'])/len(val['base']), 1), round(sum(val['ctc'])/len(val['ctc']), 1), len(val['base'])))

days_dict = {}
for key, val in days.items():
	days_dict[key] = {}
	days_dict[key]['base'] = []
	days_dict[key]['ctc'] = []
	for com_id in val['com_ids']:
		com_id = str(com_id)
		jnf_ids = val[com_id]
		students = companies[com_id]['students']
		for stu in students:
			jnf_id = stu['jnf_ids'][0]
			if jnf_id in jnf_ids:
				jnf_id = str(jnf_id)
				currency = profiles[com_id][jnf_id]['currency']
				if currency == 'USD':
					multi_factor = 70.0
				elif currency == 'JPY':
					multi_factor = 0.64
				else:
					multi_factor = 1
				base = float(profiles[com_id][jnf_id]['base'])*multi_factor
				ctc = float(profiles[com_id][jnf_id]['ctc'])*multi_factor
				days_dict[key]['base'].append(base)
				days_dict[key]['ctc'].append(ctc)
for key, val in days_dict.items():
	print("{0} : \tBase:\t{1} \tCTC:\t{2}; \t{3}".format(key, round(sum(val['base'])/len(val['base']), 1), round(sum(val['ctc'])/len(val['ctc']), 1), len(val['base'])))

top_dict = {}
for key, val in companies.items():
	top_dict[val['company']] = len(val['students'])
sorted_top_list = sorted(top_dict.items(), key=operator.itemgetter(1), reverse=True)
for i in range(15):
	print(sorted_top_list[i])