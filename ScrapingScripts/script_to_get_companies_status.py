import csv
import pandas as pd

def csv_to_dict(file_path):
	object_list = []
	with open(file_path) as f:
		for row in csv.DictReader(f, skipinitialspace=True):
			object_dict = {}
			for key, val in row.items():
				if val.isdigit():
					object_dict[key] = int(val)
				else:
					object_dict[key] = val
			object_list.append(object_dict)
	return object_list

def get_com_list(file_path):
	com_list = []
	with open(file_path) as f:
		for row in csv.DictReader(f, skipinitialspace=True):
			for key, val in row.items():
				if key == "com_id":
					com_list.append(int(val))
	return com_list


file_path = 'OutputFiles/placements_companies.csv'
placements_companies = list(set(get_com_list(file_path)))
try:
	placements_companies.remove(0)
except:
	pass

# file_path = "OutputFiles/placements_companies_all_info.csv"
# file_path = "OutputFiles/placements_companies_profile_all_info.csv"
all_companies = csv_to_dict(file_path)

for com in all_companies:
	if com['com_id'] in placements_companies:
		com['status'] = 1
	else:
		com['status'] = 0

df = pd.DataFrame(all_companies)
# df.to_csv(file_path, sep=',', index=False)